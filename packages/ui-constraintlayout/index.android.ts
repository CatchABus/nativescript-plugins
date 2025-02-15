import { CoreTypes, heightProperty, Trace, Utils, View, widthProperty } from '@nativescript/core';
import { applyViewMixin, baselineToBaselineOfProperty, bottomToBottomOfProperty, bottomToTopOfProperty, ConstraintLayoutBase, endToEndOfProperty, endToStartOfProperty, getConstraintRelativePositionTarget, leftToLeftOfProperty, leftToRightOfProperty, rightToLeftOfProperty, rightToRightOfProperty, startToEndOfProperty, startToStartOfProperty, topToBottomOfProperty, topToTopOfProperty } from './common';

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

	public _addViewToNativeVisualTree(child: View, atIndex: number = Number.MAX_SAFE_INTEGER): boolean {
		const added = super._addViewToNativeVisualTree(child);

		if (added) {
			const childView = child.nativeViewProtected as AndroidView;
			if (childView.getId() === NO_ID) {
				childView.setId(android.view.View.generateViewId());
			}
		}

		return added;
	}

	public _removeViewFromNativeVisualTree(child: View): void {
		super._removeViewFromNativeVisualTree(child);

		const childView = child.nativeViewProtected;

		if (childView) {
			childView.setId(NO_ID);
		}
	}
}

function getConstraintRelativePositionTargetId(id: string, view: View): number {
	const target = getConstraintRelativePositionTarget(id, view);

	if (target == null) {
		return CONSTRAINT_UNSET_VALUE;
	}

	if (target === view.parent) {
		return PARENT_ID;
	}

	return (target.nativeViewProtected as AndroidView).getId();
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
				} else if (value === 'auto') {
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
				} else if (value === 'auto') {
					layoutParams.width = WRAP_CONTENT;
				} else if (value.unit === 'dip') {
					layoutParams.width = layout.toDevicePixels(value.value);
				} else if (value.unit === '%') {
					layoutParams.width = MATCH_CONSTRAINT;
					matchConstraintDefaultWidth = MATCH_CONSTRAINT_PERCENT;
					layoutParams.matchConstraintPercentHeight = value.value;
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
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.leftToLeft = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[leftToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.leftToRight = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToLeftOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.rightToLeft = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[rightToRightOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.rightToRight = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[topToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.topToTop = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[topToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.topToBottom = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToTopOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.bottomToTop = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[bottomToBottomOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.bottomToBottom = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[baselineToBaselineOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.baselineToBaseline = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[startToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.startToEnd = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[startToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.startToStart = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[endToStartOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.endToStart = id;
			nativeView.setLayoutParams(layoutParams);
		},
		[endToEndOfProperty.setNative](this: View, value: string) {
			if (!ConstraintLayout.isConstrainedChild(this)) {
				return;
			}

			const nativeView = this.nativeViewProtected as AndroidView;
			const layoutParams = nativeView.getLayoutParams() as ConstraintLayoutParams;
			const id = getConstraintRelativePositionTargetId(value, this);

			layoutParams.endToEnd = id;
			nativeView.setLayoutParams(layoutParams);
		},
	};
});
