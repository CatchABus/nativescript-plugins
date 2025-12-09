import { CoreTypes, heightProperty, Length, Trace, Utils, View, widthProperty } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, ConstraintLayoutBase, endToEndOfProperty, endToStartOfProperty, leftToLeftOfProperty, leftToRightOfProperty, PARENT_CONSTRAINT_IDENTIFIER, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty, horizontalBiasProperty, verticalBiasProperty, circleConstraintProperty, circleAngleProperty, circleRadiusProperty, DEFAULT_BIAS } from './common';
import { idProperty } from '@nativescript/core/ui/core/view-base';

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
}

function hashViewId(id: string): number {
	let hash = 5381;
	let i = id.length;

	while (i) {
		hash = (hash * 33) ^ id.charCodeAt(--i);
	}

	// Convert result to unsigned 32-bit, then limit to 0 → 2^31 - 1 since android view setId() prefers positive numbers
	return (hash >>> 0) % 0x80000000;
}

function getConstraintTargetId(id: string, view: View): number {
	if (!id) {
		return CONSTRAINT_UNSET_VALUE;
	}

	if (id === PARENT_CONSTRAINT_IDENTIFIER) {
		return PARENT_ID;
	}

	return hashViewId(id);
}

applyViewMixin((originals) => {
	return {
		[idProperty.setNative](this: View, value: string) {
			(this.nativeViewProtected as android.view.View).setId(value ? hashViewId(value) : NO_ID);
		},
		[heightProperty.setNative](this: View, value: CoreTypes.PercentLengthType) {
			if (ConstraintLayout.isConstrainedChild(this)) {
				const nativeView = this.nativeViewProtected as AndroidView;
				const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

				let matchConstraintDefaultHeight = MATCH_CONSTRAINT_SPREAD;

				if (typeof value === 'number') {
					layoutParams.height = layout.toDevicePixels(value);
				} else if (typeof value === 'string') {
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
				} else if (typeof value === 'string') {
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

			layoutParams.leftToLeft = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[leftToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.leftToRight = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToLeftOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.rightToLeft = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.rightToRight = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[topToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.topToTop = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[topToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.topToBottom = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.bottomToTop = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.bottomToBottom = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[baselineToBaselineOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.baselineToBaseline = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[startToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.startToEnd = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[startToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.startToStart = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[endToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.endToStart = getConstraintTargetId(value, this);
			nativeView.setLayoutParams(layoutParams);
		},
		[endToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;

			layoutParams.endToEnd = getConstraintTargetId(value, this);
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

			layoutParams.circleConstraint = getConstraintTargetId(value, this);
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
