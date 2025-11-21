import { Length, Utils, View } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, circleConstraintProperty, ConstraintLayoutBase, DEFAULT_BIAS, endToEndOfProperty, endToStartOfProperty, leftToLeftOfProperty, leftToRightOfProperty, PARENT_CONSTRAINT_IDENTIFIER, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty } from './common';
import { IPositionConstraints } from '.';

export * from './common';

const { layout } = Utils;

interface iOSConstrainedChild extends View {
	mPositionConstraints: Map<keyof IPositionConstraints, string>;
}

function getPositionConstraintMap(view: iOSConstrainedChild): Map<keyof IPositionConstraints, string> {
	if (!view.mPositionConstraints) {
		view.mPositionConstraints = new Map();
	}

	return view.mPositionConstraints;
}

function getBaseline(view: View): number {
	const nativeView = view.nativeViewProtected;

	if (!nativeView) {
		return -1;
	}

	let nativeFont: UIFont;

	if (nativeView instanceof UILabel || nativeView instanceof UITextView || nativeView instanceof UITextField) {
		nativeFont = nativeView.font;
	} else if (nativeView instanceof UIButton) {
		nativeFont = nativeView.titleLabel.font;
	} else {
		nativeFont = null;
	}

	return nativeFont ? layout.toDevicePixels(nativeFont.lineHeight + nativeFont.descender) : -1;
}

function updatePositionConstraint(view: iOSConstrainedChild, constraintName: keyof IPositionConstraints, targetId: string): void {
	if (!ConstraintLayout.isConstrainedChild(view)) {
		return;
	}

	const constraintMap = getPositionConstraintMap(view);

	if (targetId) {
		constraintMap.set(constraintName, targetId);
	} else {
		constraintMap.delete(constraintName);
	}
}

export class ConstraintLayout extends ConstraintLayoutBase {
	public nativeViewProtected: UIView;

	private _getActualConstraintName(key: keyof IPositionConstraints): keyof IPositionConstraints {
		let constraintName: keyof IPositionConstraints;

		switch (key) {
			case 'startToStartOf':
				constraintName = this.isRtl ? 'rightToRightOf' : 'leftToLeftOf';
				break;
			case 'startToEndOf':
				constraintName = this.isRtl ? 'rightToLeftOf' : 'leftToRightOf';
				break;
			case 'endToEndOf':
				constraintName = this.isRtl ? 'leftToLeftOf' : 'rightToRightOf';
				break;
			case 'endToStartOf':
				constraintName = this.isRtl ? 'leftToRightOf' : 'rightToLeftOf';
				break;
			default:
				constraintName = key;
				break;
		}

		return constraintName;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		super.onMeasure(widthMeasureSpec, heightMeasureSpec);

		let measureWidth = 0;
		let measureHeight = 0;

		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);

		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

		const childMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);

		this.eachLayoutChild((child) => {
			const childSize = View.measureChild(this, child, childMeasureSpec, childMeasureSpec);
			measureWidth = Math.max(measureWidth, childSize.measuredWidth);
			measureHeight = Math.max(measureHeight, childSize.measuredHeight);
		});

		measureWidth += this.effectiveBorderLeftWidth + this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderRightWidth;
		measureHeight += this.effectiveBorderTopWidth + this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderBottomWidth;

		measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
		measureHeight = Math.max(measureHeight, this.effectiveMinHeight);

		const widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
		const heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);

		this.setMeasuredDimension(widthAndState, heightAndState);
	}

	public onLayout(left: number, top: number, right: number, bottom: number): void {
		super.onLayout(left, top, right, bottom);

		const insets = this.getSafeAreaInsets();
		const horizontalPadding = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
		const verticalPadding = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;

		const layoutWidth = Math.max(0, right - left - horizontalPadding - insets.left - insets.right);
		const layoutHeight = Math.max(0, bottom - top - verticalPadding - insets.top - insets.bottom);
		const x = this.effectiveBorderLeftWidth + this.effectivePaddingLeft + insets.left;
		const y = this.effectiveBorderTopWidth + this.effectivePaddingTop + insets.top;

		const laidOutChildren = new Map<string, iOSConstrainedChild>();

		this.eachLayoutChild((child: iOSConstrainedChild) => {
			const childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
			const childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;
			const hBias = isNaN(child.horizontalBias) ? DEFAULT_BIAS : Math.max(0, Math.min(1, child.horizontalBias));
			const vBias = isNaN(child.verticalBias) ? DEFAULT_BIAS : Math.max(0, Math.min(1, child.verticalBias));

			let childLeft: number;
			let childTop: number;

			let fromTop: number = null;
			let fromBottom: number = null;
			let fromLeft: number = null;
			let fromRight: number = null;

			// Circle constraint has more priority than other position constraints
			if (child.circleConstraint && (child.circleConstraint === PARENT_CONSTRAINT_IDENTIFIER || laidOutChildren.has(child.circleConstraint))) {
				const angleDegrees = isNaN(child.circleAngle) ? 0 : child.circleAngle;
				const angleRadians = (angleDegrees - 90) * (Math.PI / 180);
				const circleRadius = Length.toDevicePixels(child.circleRadius);

				if (child.circleConstraint === PARENT_CONSTRAINT_IDENTIFIER) {
					fromLeft = (x + layoutWidth - childWidth) / 2 + circleRadius * Math.cos(angleRadians);
					fromTop = (y + layoutHeight - childHeight) / 2 + circleRadius * Math.sin(angleRadians);
				} else {
					const targetView = laidOutChildren.get(child.circleConstraint);
					const targetBounds = targetView._getCurrentLayoutBounds();
					const targetWidth = targetBounds.right - targetBounds.left;
					const targetHeight = targetBounds.bottom - targetBounds.top;

					fromLeft = targetBounds.left - (childWidth - targetWidth) / 2 + circleRadius * Math.cos(angleRadians);
					fromTop = targetBounds.top - (childHeight - targetHeight) / 2 + circleRadius * Math.sin(angleRadians);
				}
			} else {
				const posConstraintMap = getPositionConstraintMap(child);

				for (const [key, targetId] of posConstraintMap) {
					const constraintName = this._getActualConstraintName(key);

					if (targetId === PARENT_CONSTRAINT_IDENTIFIER) {
						switch (constraintName) {
							case 'topToTopOf':
								fromTop = y;
								break;
							case 'topToBottomOf':
								fromTop = insets.bottom + insets.top + layoutHeight + verticalPadding;
								break;
							case 'bottomToTopOf':
								fromBottom = insets.top - childHeight;
								break;
							case 'bottomToBottomOf':
								fromBottom = y + layoutHeight - childHeight;
								break;
							case 'leftToLeftOf':
								fromLeft = x;
								break;
							case 'leftToRightOf':
								fromLeft = insets.left + insets.right + layoutWidth + horizontalPadding;
								break;
							case 'rightToLeftOf':
								fromRight = insets.left - childWidth;
								break;
							case 'rightToRightOf':
								fromRight = x + layoutWidth - childWidth;
								break;
							default:
								break;
						}
					} else {
						const targetView = laidOutChildren.get(targetId);
						if (!targetView) {
							continue;
						}

						const targetBounds = targetView._getCurrentLayoutBounds();

						switch (constraintName) {
							case 'baselineToBaselineOf': {
								const baseline = getBaseline(child);

								if (baseline > -1) {
									const targetBaseline = getBaseline(targetView);

									if (targetBaseline > -1) {
										const childPadding = child.effectivePaddingTop + child.effectiveBorderTopWidth;
										const targetPadding = targetView.effectivePaddingTop + targetView.effectiveBorderTopWidth;
										childTop = targetBounds.top - childPadding + targetPadding + (targetBaseline - baseline);
									}
								}
								break;
							}
							case 'topToTopOf':
								fromTop = targetBounds.top;
								break;
							case 'topToBottomOf':
								fromTop = targetBounds.bottom;
								break;
							case 'bottomToTopOf':
								fromBottom = targetBounds.top - childHeight;
								break;
							case 'bottomToBottomOf':
								fromBottom = targetBounds.bottom - childHeight;
								break;
							case 'leftToLeftOf':
								fromLeft = targetBounds.left;
								break;
							case 'leftToRightOf':
								fromLeft = targetBounds.right;
								break;
							case 'rightToLeftOf':
								fromRight = targetBounds.left - childWidth;
								break;
							case 'rightToRightOf':
								fromRight = targetBounds.right - childWidth;
								break;
							default:
								break;
						}
					}
				}
			}

			if (fromTop != null && fromBottom != null) {
				childTop = fromTop + (fromBottom - fromTop) * vBias;
			} else if (fromTop != null) {
				childTop = fromTop;
			} else if (fromBottom != null) {
				childTop = fromBottom;
			} else {
				childTop = y;
			}

			if (fromLeft != null && fromRight != null) {
				childLeft = fromLeft + (fromRight - fromLeft) * hBias;
			} else if (fromLeft != null) {
				childLeft = fromLeft;
			} else if (fromRight != null) {
				childLeft = fromRight;
			} else {
				childLeft = x;
			}

			laidOutChildren.set(child.id, child);
			View.layoutChild(this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
		});
	}
}

applyViewMixin((_originals) => {
	return {
		[leftToLeftOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'leftToLeftOf', value);
		},
		[leftToRightOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'leftToRightOf', value);
		},
		[rightToLeftOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'rightToLeftOf', value);
		},
		[rightToRightOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'rightToRightOf', value);
		},
		[topToTopOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'topToTopOf', value);
		},
		[topToBottomOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'topToBottomOf', value);
		},
		[bottomToTopOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'bottomToTopOf', value);
		},
		[bottomToBottomOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'bottomToBottomOf', value);
		},
		[baselineToBaselineOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'baselineToBaselineOf', value);
		},
		[startToEndOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'startToEndOf', value);
		},
		[startToStartOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'startToStartOf', value);
		},
		[endToStartOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'endToStartOf', value);
		},
		[endToEndOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			updatePositionConstraint(this, 'endToEndOf', value);
		},
	};
});
