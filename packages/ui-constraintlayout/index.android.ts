import { CoreTypes, heightProperty, Length, Trace, Utils, View, widthProperty } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, ConstraintLayoutBase, endToEndOfProperty, endToStartOfProperty, leftToLeftOfProperty, leftToRightOfProperty, PARENT_CONSTRAINT_IDENTIFIER, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty, horizontalBiasProperty, verticalBiasProperty, circleConstraintProperty, circleAngleProperty, circleRadiusProperty, DEFAULT_BIAS } from './common';
import { isCssWideKeyword } from '@nativescript/core/ui/core/properties';

export * from './common';

type ConstraintLayoutParams = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
type AndroidView = android.view.View;

const { layout } = Utils;

const NO_ID = android.view.View.NO_ID;
const PARENT_ID = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.PARENT_ID;
const CONSTRAINT_UNSET_VALUE = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.UNSET;
const WRAP_CONTENT = android.view.ViewGroup.LayoutParams.WRAP_CONTENT;
const MATCH_CONSTRAINT = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.MATCH_CONSTRAINT;
const MATCH_CONSTRAINT_SPREAD = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.MATCH_CONSTRAINT_SPREAD;
const MATCH_CONSTRAINT_PERCENT = androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.MATCH_CONSTRAINT_PERCENT;

export class ConstraintLayout extends ConstraintLayoutBase {
	createNativeView(): Object {
		return new androidx.constraintlayout.widget.ConstraintLayout(this._context);
	}

	initNativeView(): void {
		super.initNativeView();
		this.nativeViewProtected.setClipToPadding(false);
	}

	public _addViewToNativeVisualTree(child: View, atIndex: number = Number.MAX_SAFE_INTEGER): boolean {
		const childView = child.nativeViewProtected as AndroidView;
		// Set ID before adding view to parent as ConstraintLayout keeps a mapping of its children based on it
		if (childView.getId() === NO_ID) {
			childView.setId(android.view.View.generateViewId());
		}

		return super._addViewToNativeVisualTree(child);
	}
}

export function getConstraintNativeTargetId(id: string, view: View): number {
	if (id === PARENT_CONSTRAINT_IDENTIFIER) {
		return PARENT_ID;
	}

	let nativeId: number = CONSTRAINT_UNSET_VALUE;

	if (view.parent) {
		view.parent.eachChild((child) => {
			// Requested view may only have constraints with previous siblings
			if (child === view) {
				return false;
			}

			if (child.id === id && child.nativeViewProtected) {
				nativeId = (child.nativeViewProtected as AndroidView).getId();
				return false;
			}
			return true;
		});
	}

	return nativeId;
}

applyViewMixin((originals) => {
	return {
		[heightProperty.setNative](this: View, value: CoreTypes.PercentLengthType) {
			if (ConstraintLayout.isConstrainedChild(this)) {
				const nativeView = this.nativeViewProtected as AndroidView;
				const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

				let matchConstraintDefaultHeight = MATCH_CONSTRAINT_SPREAD;

				if (typeof value === 'number') {
					layoutParams.height = layout.toDevicePixels(value);
				} else if (value === 'auto' || isCssWideKeyword(value)) {
					layoutParams.height = WRAP_CONTENT;
				} else if (value.unit === 'dip') {
					layoutParams.height = layout.toDevicePixels(value.value);
				} else if (value.unit === '%') {
					layoutParams.height = MATCH_CONSTRAINT;
					matchConstraintDefaultHeight = MATCH_CONSTRAINT_PERCENT;
					layoutParams.matchConstraintPercentHeight = value.value;
				} else if (value.unit === 'px') {
					layoutParams.height = layout.round(value.value);
				} else {
					Trace.write(`Incorrect height value ${value}`, Trace.categories.Layout, Trace.messageType.warn);
					return;
				}

				if (layoutParams.matchConstraintDefaultHeight != matchConstraintDefaultHeight) {
					layoutParams.matchConstraintDefaultHeight = matchConstraintDefaultHeight;
				}

				nativeView.setLayoutParams(layoutParams);
			} else {
				if (originals[heightProperty.setNative]) {
					originals[heightProperty.setNative].call(this, value);
				}
			}
		},
		[widthProperty.setNative](this: View, value: CoreTypes.PercentLengthType) {
			if (ConstraintLayout.isConstrainedChild(this)) {
				const nativeView = this.nativeViewProtected as AndroidView;
				const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

				let matchConstraintDefaultWidth = MATCH_CONSTRAINT_SPREAD;

				if (typeof value === 'number') {
					layoutParams.width = layout.toDevicePixels(value);
				} else if (value === 'auto' || isCssWideKeyword(value)) {
					layoutParams.width = WRAP_CONTENT;
				} else if (value.unit === 'dip') {
					layoutParams.width = layout.toDevicePixels(value.value);
				} else if (value.unit === '%') {
					layoutParams.width = MATCH_CONSTRAINT;
					matchConstraintDefaultWidth = MATCH_CONSTRAINT_PERCENT;
					layoutParams.matchConstraintPercentWidth = value.value;
				} else if (value.unit === 'px') {
					layoutParams.width = layout.round(value.value);
				} else {
					Trace.write(`Incorrect width value ${value}`, Trace.categories.Layout, Trace.messageType.warn);
					return;
				}

				if (layoutParams.matchConstraintDefaultWidth != matchConstraintDefaultWidth) {
					layoutParams.matchConstraintDefaultWidth = matchConstraintDefaultWidth;
				}

				nativeView.setLayoutParams(layoutParams);
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

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.leftToLeft = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[leftToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.leftToRight = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToLeftOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.rightToLeft = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.rightToRight = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[topToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.topToTop = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[topToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.topToBottom = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.bottomToTop = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.bottomToBottom = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[baselineToBaselineOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.baselineToBaseline = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[startToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.startToEnd = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[startToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.startToStart = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[endToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.endToStart = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[endToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.endToEnd = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[horizontalBiasProperty.setNative](this: View, value: number) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.horizontalBias = isNaN(value) ? DEFAULT_BIAS : value;
			nativeView.setLayoutParams(layoutParams);
		},
		[verticalBiasProperty.setNative](this: View, value: number) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.verticalBias = isNaN(value) ? DEFAULT_BIAS : value;
			nativeView.setLayoutParams(layoutParams);
		},
		[circleConstraintProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintNativeTargetId(value, this);

			layoutParams.circleConstraint = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[circleAngleProperty.setNative](this: View, value: number) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.circleAngle = value;
			nativeView.setLayoutParams(layoutParams);
		},
		[circleRadiusProperty.setNative](this: View, value: CoreTypes.LengthType) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.circleRadius = Length.toDevicePixels(value);
			nativeView.setLayoutParams(layoutParams);
		},
	};
});
