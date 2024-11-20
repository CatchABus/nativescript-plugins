import { backgroundInternalProperty, LayoutBase, Screen, ViewBase } from '@nativescript/core';
import { NeumorphicLayout } from '.';
import { darkShadowColorProperty, lightShadowColorProperty, NeumorphicCanvas, NeumorphicType, neumorphismProperty, shadowDistanceProperty, shadowRadiusProperty } from './common';

export * from './common';

@NativeClass()
class NeumorphicDrawable extends android.graphics.drawable.Drawable {
	private mAugmentedCanvas: NeumorphicCanvas;

	constructor(canvas: NeumorphicCanvas) {
		super();
		this.mAugmentedCanvas = canvas;
	}

	public draw(canvas: android.graphics.Canvas) {
		if (this.mAugmentedCanvas != null) {
			const scale = Screen.mainScreen.scale;

			canvas.save();
			canvas.scale(scale, scale); // always scale to device density to work with dp

			(this.mAugmentedCanvas as any).mNative = canvas;
			this.mAugmentedCanvas.onDraw();
			canvas.restore();
		}
	}

	public getAugmentedCanvas(): NeumorphicCanvas {
		return this.mAugmentedCanvas;
	}

	public getOpacity() {
		return android.graphics.PixelFormat.TRANSLUCENT;
	}
}

function _getNeumorphicDrawable(view: LayoutBase): NeumorphicDrawable {
	const background = (view.nativeViewProtected as android.view.View).getBackground();

	if (background == null || !(background instanceof NeumorphicDrawable)) {
		return null;
	}

	return background;
}

function _refresh(this: NeumorphicLayout): void {
	const drawable = _getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
}

function _toggleViewClipping(view: ViewBase, clipChildren: boolean): void {
	const nativeView = view?.nativeViewProtected as android.view.View;

	// Removing clipping from native views that extend org.nativescript.widgets.LayoutBase (this includes ContentView)
	if (nativeView != null && nativeView instanceof org.nativescript.widgets.LayoutBase) {
		nativeView.setClipChildren(clipChildren);
		nativeView.setClipToPadding(clipChildren);
	}
}

function _updateNeumorphismState(this: LayoutBase, value: NeumorphicType): void {
	const drawable = _getNeumorphicDrawable(this);
	const nativeView = this.nativeViewProtected as android.view.View;

	if (value) {
		if (drawable != null) {
			drawable.invalidateSelf();
		} else {
			_toggleViewClipping(this.parent, false);
			const canvas = new NeumorphicCanvas(new WeakRef(this as NeumorphicLayout));
			nativeView.setBackground(new NeumorphicDrawable(canvas));
		}
	} else {
		if (drawable != null) {
			_toggleViewClipping(this.parent, true);
			nativeView.setBackground(null);
		}
	}
}

LayoutBase.prototype[lightShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[darkShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[shadowDistanceProperty.setNative] = _refresh;
LayoutBase.prototype[shadowRadiusProperty.setNative] = _refresh;
LayoutBase.prototype[neumorphismProperty.setNative] = _updateNeumorphismState;

// Disable 'backgroundInternal' as it also uses 'setBackground' to apply a drawable
const backgroundInternalOrigin = LayoutBase.prototype[backgroundInternalProperty.setNative];
LayoutBase.prototype[backgroundInternalProperty.setNative] = function (value) {
	if (this.neumorphism) {
		_refresh.call(this, value);
	} else {
		backgroundInternalOrigin.call(this, value);
	}
};
