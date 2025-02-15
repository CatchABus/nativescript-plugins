import { CoreTypes, EventData, heightProperty, paddingBottomProperty, paddingLeftProperty, paddingRightProperty, paddingTopProperty, PercentLength, Trace, Utils, View, widthProperty } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, ConstraintLayoutBase, endToEndOfProperty, endToStartOfProperty, getConstraintRelativePositionTarget, leftToLeftOfProperty, leftToRightOfProperty, RelConstraintPos, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty } from './common';

const { layout } = Utils;

interface UIConstrainedView extends UIView {
	ownedConstraints: {
		[key: string]: NSLayoutConstraint;
	};
}

type ViewMixin = Partial<
	View & {
		_cachedFrame: CGRect;
		_isLaidOut: boolean;
	}
>;

function createSizeConstraint(anchorPropertyName: string, value: CoreTypes.PercentLengthType, nativeView: UIConstrainedView): NSLayoutConstraint {
	const anchor = nativeView[anchorPropertyName] as NSLayoutDimension;

	let constraint: NSLayoutConstraint;

	if (typeof value === 'number') {
		constraint = anchor.constraintEqualToConstant(value);
	} else if (typeof value === 'string') {
		constraint = null;
	} else if (value.unit === 'dip') {
		constraint = anchor.constraintEqualToConstant(value.value);
	} else if (value.unit === '%') {
		constraint = anchor.constraintEqualToAnchorMultiplier(nativeView.superview[anchorPropertyName], value.value);
	} else if (value.unit === 'px') {
		constraint = anchor.constraintEqualToConstant(PercentLength.toDevicePixels(value));
	} else {
		Trace.write(`Incorrect size value ${value}`, Trace.categories.Layout, Trace.messageType.warn);
		constraint = null;
	}

	return constraint;
}

function addConstraintToView(nativeView: UIConstrainedView, constraintId: string, constraint: NSLayoutConstraint): void {
	if (!nativeView.ownedConstraints) {
		nativeView.ownedConstraints = {};
	}

	nativeView.ownedConstraints[constraintId] = constraint;
	constraint.identifier = constraintId;
	constraint.active = true;
}

function removeConstraintFromView(nativeView: UIConstrainedView, constraintId: string): void {
	if (!nativeView.ownedConstraints) {
		nativeView.ownedConstraints = {};
	} else {
		const constraint = nativeView.ownedConstraints[constraintId];
		if (constraint) {
			nativeView.superview.removeConstraint(constraint);
		}

		if (constraintId in nativeView.ownedConstraints) {
			delete nativeView.ownedConstraints[constraintId];
		}
	}
}

function getViewConstraintById(nativeView: UIConstrainedView, constraintId: string): NSLayoutConstraint {
	let constraint: NSLayoutConstraint;

	if (!nativeView.ownedConstraints) {
		nativeView.ownedConstraints = {};

		constraint = null;
	} else {
		constraint = nativeView.ownedConstraints[constraintId];
	}

	return constraint;
}

function getTargetAnchor(nativeView: UIView, targetView: UIView, propertyName: string): NSLayoutXAxisAnchor | NSLayoutYAxisAnchor {
	return nativeView.superview === targetView ? targetView.layoutMarginsGuide[propertyName] : targetView[propertyName];
}

export class ConstraintLayout extends ConstraintLayoutBase {
	public nativeViewProtected: NSConstraintLayout;

	createNativeView(): Object {
		const window = Utils.ios.getWindow();

		return NSConstraintLayout.alloc().initWithFrame(window ? window.screen.bounds : UIScreen.mainScreen.bounds);
	}

	initNativeView(): void {
		super.initNativeView();

		this.nativeViewProtected.layoutMargins = UIEdgeInsetsZero;
		this.nativeViewProtected.setLayoutChangeListenerWithValue((frame) => {
			this._layoutChildren(frame);
		});
	}

	disposeNativeView(): void {
		super.disposeNativeView();
		this.nativeViewProtected.setLayoutChangeListenerWithValue(null);
	}

	private _layoutChildren(frame: CGRect): void {
		const nativeView = this.nativeViewProtected;
		const childMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);

		let pendingResizeCount: number = 0;

		// Measure handling
		this.eachLayoutChild((child) => {
			const childView = child.nativeViewProtected as UIConstrainedView;

			if (childView == null) {
				return;
			}

			const childWidth = layout.toDevicePixels(childView.frame.size.width);
			const childHeight = layout.toDevicePixels(childView.frame.size.height);

			const childSize = View.measureChild(null, child, childMeasureSpec, childMeasureSpec);

			let needsLayout: boolean = false;

			// This is needed for views that will resize based on content (e.g. a layout)
			// Also, skip the entire layout procedure as this will trigger a layout update
			if (child.width === 'auto' && childWidth !== childSize.measuredWidth) {
				const constraint = childView.widthAnchor.constraintEqualToConstant(layout.toDeviceIndependentPixels(childSize.measuredWidth));
				removeConstraintFromView(childView, 'width');
				addConstraintToView(childView, 'width', constraint);
				needsLayout = true;
			}
			if (child.height === 'auto' && childHeight !== childSize.measuredHeight) {
				const constraint = childView.heightAnchor.constraintEqualToConstant(layout.toDeviceIndependentPixels(childSize.measuredHeight));
				removeConstraintFromView(childView, 'height');
				addConstraintToView(childView, 'height', constraint);
				needsLayout = true;
			}

			if (needsLayout) {
				pendingResizeCount++;
			}
		});

		if (pendingResizeCount > 0) {
			if (Trace.isEnabled()) {
				Trace.write(`ConstraintLayout: There are ${pendingResizeCount} child views with 'auto' size that will undergo an additional layout`, Trace.categories.Layout, Trace.messageType.info);
			}
			nativeView.layoutIfNeeded();
			return;
		}

		// Layout handling
		this.eachLayoutChild((child) => {
			const childView = child.nativeViewProtected as UIConstrainedView;
			if (childView == null) {
				return;
			}

			const childWidth = layout.toDevicePixels(childView.frame.size.width);
			const childHeight = layout.toDevicePixels(childView.frame.size.height);
			const childLeft = layout.toDevicePixels(childView.frame.origin.x);
			const childTop = layout.toDevicePixels(childView.frame.origin.y);
			const childRight = childLeft + childWidth;
			const childBottom = childTop + childHeight;

			View.layoutChild(this, child, childLeft, childTop, childRight, childBottom);
		});

		// Once children have been measured, check if constraint layout needs a new measured dimension
		this._recalculateMeasuredDimensionIfNeeded();
	}

	private _recalculateMeasuredDimensionIfNeeded(): void {
		const widthMode = layout.getMeasureSpecMode(this._currentWidthMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(this._currentHeightMeasureSpec);

		if (widthMode === layout.EXACTLY && heightMode === layout.EXACTLY) {
			return;
		}

		const parent = this.parent;

		// This will help view resize to fit children
		if (parent) {
			parent.requestLayout();

			if (parent.nativeViewProtected) {
				parent.nativeViewProtected.layoutIfNeeded();
			}
		}
	}

	private _updatePadding(): void {
		const top = layout.toDeviceIndependentPixels(this.effectivePaddingTop);
		const right = layout.toDeviceIndependentPixels(this.effectivePaddingRight);
		const bottom = layout.toDeviceIndependentPixels(this.effectivePaddingBottom);
		const left = layout.toDeviceIndependentPixels(this.effectivePaddingLeft);

		this.nativeViewProtected.layoutMargins = new UIEdgeInsets({
			top,
			left,
			bottom,
			right,
		});
	}

	public _addViewToNativeVisualTree(child: View, atIndex: number): boolean {
		const added = super._addViewToNativeVisualTree(child, atIndex);

		if (added) {
			const nativeView = this.nativeViewProtected;
			const childView = child.nativeViewProtected as UIConstrainedView;
			const constraintX = childView.leadingAnchor.constraintEqualToAnchor(nativeView.layoutMarginsGuide.leadingAnchor);
			const constraintY = childView.topAnchor.constraintEqualToAnchor(nativeView.layoutMarginsGuide.topAnchor);

			constraintX.priority = UILayoutPriorityDefaultLow;
			constraintY.priority = UILayoutPriorityDefaultLow;

			childView.translatesAutoresizingMaskIntoConstraints = false;

			// The defaults in case no constraint is set
			addConstraintToView(childView, 'defaultX', constraintX);
			addConstraintToView(childView, 'defaultY', constraintY);
		}

		return added;
	}

	public _removeViewFromNativeVisualTree(child: View): void {
		super._removeViewFromNativeVisualTree(child);

		if (child.nativeViewProtected) {
			const childView = child.nativeViewProtected as UIConstrainedView;
			childView.translatesAutoresizingMaskIntoConstraints = true;

			if ('ownedConstraints' in childView) {
				delete childView.ownedConstraints;
			}
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		super.onMeasure(widthMeasureSpec, heightMeasureSpec);

		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);

		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

		let measureWidth = 0;
		let measureHeight = 0;

		this.eachLayoutChild((child, last) => {
			measureWidth = Math.max(measureWidth, child.getMeasuredWidth());
			measureHeight = Math.max(measureHeight, child.getMeasuredHeight());
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
	}

	[paddingTopProperty.setNative](value: CoreTypes.LengthType) {
		this._updatePadding();
	}

	[paddingRightProperty.setNative](value: CoreTypes.LengthType) {
		this._updatePadding();
	}

	[paddingBottomProperty.setNative](value: CoreTypes.LengthType) {
		this._updatePadding();
	}

	[paddingLeftProperty.setNative](value: CoreTypes.LengthType) {
		this._updatePadding();
	}
}

applyViewMixin((originals) => {
	return {
		_cachedFrame: null,
		_isLaidOut: false,
		_setNativeViewFrame(this: ViewMixin, nativeView: UIConstrainedView, frame: CGRect) {
			if (ConstraintLayout.isConstrainedChild(this as View)) {
				const oldFrame = this._cachedFrame;
				const eventData: EventData = {
					eventName: View.layoutChangedEvent,
					object: this as View,
				};

				if (oldFrame == null || !CGRectEqualToRect(oldFrame, frame)) {
					this._cachedFrame = frame;

					this.notify(eventData);
					this._isLaidOut = true;
				} else if (!this._isLaidOut) {
					// Rects could be equal on the first layout and an event should be raised.
					this.notify(eventData);
					// But make sure event is raised only once if rects are equal on the first layout as
					// this method is called twice with equal rects in landscape mode (vs only once in portrait)
					this._isLaidOut = true;
				}
			} else {
				originals._setNativeViewFrame.call(this, nativeView, frame);
			}
		},
		disposeNativeView(this: View) {
			const nativeView = this.nativeViewProtected as UIConstrainedView;

			if ('ownedConstraints' in nativeView) {
				delete nativeView.ownedConstraints;
			}

			originals.disposeNativeView.call(this);
		},
		[heightProperty.setNative](this: View, value: CoreTypes.PercentLengthType) {
			if (ConstraintLayout.isConstrainedChild(this)) {
				const nativeView = this.nativeViewProtected as UIConstrainedView;
				const constraint = createSizeConstraint('heightAnchor', value, nativeView);

				removeConstraintFromView(nativeView, 'height');

				if (constraint) {
					addConstraintToView(nativeView, 'height', constraint);
				}
			} else {
				if (originals[heightProperty.setNative]) {
					originals[heightProperty.setNative].call(this, value);
				}
			}
		},
		[widthProperty.setNative](this: View, value: CoreTypes.PercentLengthType) {
			if (ConstraintLayout.isConstrainedChild(this)) {
				const nativeView = this.nativeViewProtected as UIConstrainedView;
				const constraint = createSizeConstraint('widthAnchor', value, nativeView);

				removeConstraintFromView(nativeView, 'width');

				if (constraint) {
					addConstraintToView(nativeView, 'width', constraint);
				}
			} else {
				if (originals[widthProperty.setNative]) {
					originals[widthProperty.setNative].call(this, value);
				}
			}
		},
		[leftToLeftOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.rightToRightOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.leftToLeftOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'leftAnchor');

					const constraint = nativeView.leftAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.leftToLeftOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.leftRightCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerXAnchor');
					const constraint = nativeView.centerXAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.leftRightCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.leftRightCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
		[leftToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.leftToRightOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'rightAnchor');
					const constraint = nativeView.leftAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.leftToRightOf, constraint);
				}
			}
		},
		[rightToLeftOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.rightToLeftOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'leftAnchor');
					const constraint = nativeView.rightAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.rightToLeftOf, constraint);
				}
			}
		},
		[rightToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.leftToLeftOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.rightToRightOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'rightAnchor');

					const constraint = nativeView.rightAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.rightToRightOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.leftRightCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerXAnchor');
					const constraint = nativeView.centerXAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.leftRightCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.leftRightCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
		[topToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.bottomToBottomOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.topToTopOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'topAnchor');

					const constraint = nativeView.topAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.topToTopOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.topBottomCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerYAnchor');
					const constraint = nativeView.centerYAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.topBottomCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.topBottomCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
		[topToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.topToBottomOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'bottomAnchor');
					const constraint = nativeView.topAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.topToBottomOf, constraint);
				}
			}
		},
		[bottomToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.bottomToTopOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'topAnchor');
					const constraint = nativeView.bottomAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.bottomToTopOf, constraint);
				}
			}
		},
		[bottomToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.topToTopOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.bottomToBottomOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'bottomAnchor');

					const constraint = nativeView.bottomAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.bottomToBottomOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.topBottomCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerYAnchor');
					const constraint = nativeView.centerYAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.topBottomCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.topBottomCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
		[baselineToBaselineOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.baselineToBaselineOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'firstBaselineAnchor');
					const constraint = nativeView.firstBaselineAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.baselineToBaselineOf, constraint);
				}
			}
		},
		[startToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.startToEndOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'trailingAnchor');
					const constraint = nativeView.leadingAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.startToEndOf, constraint);
				}
			}
		},
		[startToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.endToEndOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.startToStartOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'leadingAnchor');

					const constraint = nativeView.leadingAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.startToStartOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.leftRightCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerXAnchor');
					const constraint = nativeView.centerXAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.leftRightCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.leftRightCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
		[endToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;

			removeConstraintFromView(nativeView, RelConstraintPos.endToStartOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				const targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'leadingAnchor');
					const constraint = nativeView.trailingAnchor.constraintEqualToAnchor(targetAnchor);

					addConstraintToView(nativeView, RelConstraintPos.endToStartOf, constraint);
				}
			}
		},
		[endToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as UIConstrainedView;
			const oppositeConstraint = getViewConstraintById(nativeView, RelConstraintPos.startToStartOf);

			let targetView: UIView;
			let isCenterConstraint: boolean = false;

			removeConstraintFromView(nativeView, RelConstraintPos.endToEndOf);

			if (value) {
				const target = getConstraintRelativePositionTarget(value, this);
				targetView = target?.nativeViewProtected as UIView;

				if (targetView) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'trailingAnchor');

					const constraint = nativeView.trailingAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.endToEndOf, constraint);

					isCenterConstraint = oppositeConstraint && constraint.secondItem === oppositeConstraint.secondItem;

					if (isCenterConstraint) {
						constraint.active = false;
						oppositeConstraint.active = false;
					}
				}
			}

			if (isCenterConstraint) {
				const centerConstraint = getViewConstraintById(nativeView, RelConstraintPos.leftRightCenter);
				if (!centerConstraint) {
					const targetAnchor = getTargetAnchor(nativeView, targetView, 'centerXAnchor');
					const constraint = nativeView.centerXAnchor.constraintEqualToAnchor(targetAnchor);
					addConstraintToView(nativeView, RelConstraintPos.leftRightCenter, constraint);
				}
			} else {
				removeConstraintFromView(nativeView, RelConstraintPos.leftRightCenter);

				if (oppositeConstraint) {
					oppositeConstraint.active = true;
				}
			}
		},
	};
});
