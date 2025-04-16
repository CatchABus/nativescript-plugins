import { Utils, View } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, ConstraintLayoutBase, endToEndOfProperty, endToStartOfProperty, leftToLeftOfProperty, leftToRightOfProperty, PARENT_CONSTRAINT_IDENTIFIER, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty } from './common';
import { ConstrainedChild, ConstrainedItem } from '.';

const { layout } = Utils;

interface iOSConstrainedChild extends ConstrainedChild {
	_constraints: Map<keyof ConstrainedItem, string>;
}

function getConstraintMap(view: iOSConstrainedChild): Map<keyof ConstrainedItem, string> {
	if (!view._constraints) {
		view._constraints = new Map();
	}

	return view._constraints;
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

function handleConstraintChange(view: iOSConstrainedChild, constraintProperty: keyof ConstrainedItem, constraintValue: string): void {
	const constraintMap = getConstraintMap(view);

	if (constraintValue) {
		constraintMap.set(constraintProperty, constraintValue);
	} else {
		constraintMap.delete(constraintProperty);
	}
}

export class ConstraintLayout extends ConstraintLayoutBase {
	public nativeViewProtected: NSConstraintLayout;

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		super.onMeasure(widthMeasureSpec, heightMeasureSpec);

		let measureWidth = 0;
		let measureHeight = 0;

		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);

		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

		const childMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);

		this.eachLayoutChild((child, last) => {
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
		const parentConstrainedViews: iOSConstrainedChild[] = [];

		const layoutWidth = Math.max(0, right - left - horizontalPadding - insets.left - insets.right);
		const layoutHeight = Math.max(0, bottom - top - verticalPadding - insets.top - insets.bottom);
		const x = this.effectiveBorderLeftWidth + this.effectivePaddingLeft + insets.left;
		const y = this.effectiveBorderTopWidth + this.effectivePaddingTop + insets.top;

		const laidOutChildren = new Map<string, iOSConstrainedChild>();

		// Handle children with parent constraints first to render sibling constraints properly later
		this.eachLayoutChild((child: iOSConstrainedChild) => {
			const constraintMap = getConstraintMap(child);
			const childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
			const childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;

			let childLeft: number = x;
			let childTop: number = y;

			// TODO: Add proper support for start and end constraints
			for (const [constraint, targetId] of constraintMap) {
				const isConstrainedToParent = targetId === PARENT_CONSTRAINT_IDENTIFIER;
				const targetView = isConstrainedToParent ? this : laidOutChildren.get(targetId);

				if (!targetView) {
					continue;
				}

				const targetBounds = targetView._getCurrentLayoutBounds();

				switch (constraint) {
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
					case 'topToTopOf': {
						const isPulledByBothSides = constraintMap.has('bottomToBottomOf') && constraintMap.get('bottomToBottomOf') === targetId;

						if (isPulledByBothSides) {
							childTop = isConstrainedToParent ? y + (layoutHeight - childHeight) / 2 : (targetBounds.bottom + targetBounds.top - childHeight) / 2;
						} else {
							childTop = isConstrainedToParent ? y : targetBounds.top;
						}
						break;
					}
					case 'topToBottomOf':
						if (isConstrainedToParent) {
							childTop = insets.bottom + insets.top + layoutHeight + verticalPadding;
						} else {
							childTop = targetBounds.bottom;
						}
						break;
					case 'bottomToTopOf':
						childTop = isConstrainedToParent ? insets.top - childHeight : targetBounds.top - childHeight;
						break;
					case 'bottomToBottomOf': {
						const isPulledByBothSides = constraintMap.has('topToTopOf') && constraintMap.get('topToTopOf') === targetId;

						if (isPulledByBothSides) {
							childTop = isConstrainedToParent ? y + (layoutHeight - childHeight) / 2 : (targetBounds.bottom + targetBounds.top - childHeight) / 2;
						} else {
							childTop = isConstrainedToParent ? y + layoutHeight - childHeight : targetBounds.bottom - childHeight;
						}
						break;
					}
					case 'startToStartOf': {
						const isPulledByBothSides = constraintMap.has('endToEndOf') && constraintMap.get('endToEndOf') === targetId;

						if (isPulledByBothSides) {
							childLeft = isConstrainedToParent ? x + (layoutWidth - childWidth) / 2 : (targetBounds.right + targetBounds.left - childWidth) / 2;
						} else {
							childLeft = isConstrainedToParent ? x : targetBounds.left;
						}
						break;
					}
					case 'leftToLeftOf': {
						const isPulledByBothSides = constraintMap.has('rightToRightOf') && constraintMap.get('rightToRightOf') === targetId;

						if (isPulledByBothSides) {
							childLeft = isConstrainedToParent ? x + (layoutWidth - childWidth) / 2 : (targetBounds.right + targetBounds.left - childWidth) / 2;
						} else {
							childLeft = isConstrainedToParent ? x : targetBounds.left;
						}
						break;
					}
					case 'startToEndOf':
					case 'leftToRightOf':
						childLeft = isConstrainedToParent ? insets.left + insets.right + layoutWidth + horizontalPadding : targetBounds.right;
						break;
					case 'endToStartOf':
					case 'rightToLeftOf':
						childLeft = isConstrainedToParent ? insets.left - childWidth : targetBounds.left - childWidth;
						break;
					case 'endToEndOf': {
						const isPulledByBothSides = constraintMap.has('startToStartOf') && constraintMap.get('startToStartOf') === targetId;

						if (isPulledByBothSides) {
							childLeft = isConstrainedToParent ? x + (layoutWidth - childWidth) / 2 : (targetBounds.right + targetBounds.left - childWidth) / 2;
						} else {
							childLeft = isConstrainedToParent ? x + layoutWidth - childWidth : targetBounds.right - childWidth;
						}
						break;
					}
					case 'rightToRightOf': {
						const isPulledByBothSides = constraintMap.has('leftToLeftOf') && constraintMap.get('leftToLeftOf') === targetId;

						if (isPulledByBothSides) {
							childLeft = isConstrainedToParent ? x + (layoutWidth - childWidth) / 2 : (targetBounds.right + targetBounds.left - childWidth) / 2;
						} else {
							childLeft = isConstrainedToParent ? x + layoutWidth - childWidth : targetBounds.right - childWidth;
						}
						break;
					}
					default:
						break;
				}
			}

			laidOutChildren.set(child.id, child);
			View.layoutChild(this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
		});
	}
}

applyViewMixin((originals) => {
	return {
		[leftToLeftOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'leftToLeftOf', value);
		},
		[leftToRightOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'leftToRightOf', value);
		},
		[rightToLeftOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'rightToLeftOf', value);
		},
		[rightToRightOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'rightToRightOf', value);
		},
		[topToTopOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'topToTopOf', value);
		},
		[topToBottomOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'topToBottomOf', value);
		},
		[bottomToTopOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'bottomToTopOf', value);
		},
		[bottomToBottomOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'bottomToBottomOf', value);
		},
		[baselineToBaselineOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'baselineToBaselineOf', value);
		},
		[startToEndOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'startToEndOf', value);
		},
		[startToStartOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'startToStartOf', value);
		},
		[endToStartOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'endToStartOf', value);
		},
		[endToEndOfProperty.setNative](this: iOSConstrainedChild, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			handleConstraintChange(this, 'endToEndOf', value);
		},
	};
});
