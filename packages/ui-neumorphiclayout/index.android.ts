import { LayoutBase, Screen } from '@nativescript/core';
import * as commons from './common';

export * from './common';

function getNeumorphicDrawable(view: LayoutBase): NeumorphicDrawable {
	const background = view.nativeViewProtected.getBackground();
	if (background == null || background.getAugmentedCanvas == null) {
		return null;
	}
	return background;
}

function refresh(value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
}

function toggleViewClipping(view, clipChildren: boolean): void {
	const nativeView = view?.nativeViewProtected;

	// Removing clipping from native views that extend org.nativescript.widgets.LayoutBase (this includes ContentView)
	if (nativeView != null && nativeView instanceof org.nativescript.widgets.LayoutBase) {
		nativeView.setClipChildren(clipChildren);
		nativeView.setClipToPadding(clipChildren);
	}
}

LayoutBase.prototype[commons.cornerRadiusProperty.setNative] = refresh;
LayoutBase.prototype[commons.lightShadowColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.darkShadowColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.fillColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.shadowDistanceProperty.setNative] = refresh;
LayoutBase.prototype[commons.shadowRadiusProperty.setNative] = refresh;

LayoutBase.prototype[commons.neumorphismProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (value) {
		if (drawable != null) {
			drawable.invalidateSelf();
		} else {
			toggleViewClipping(this.parent, false);
			const canvas = new commons.NeumorphicCanvas(new WeakRef(this));
			this.nativeViewProtected.setBackground(new NeumorphicDrawable(canvas));
		}
	} else {
		if (drawable != null) {
			toggleViewClipping(this.parent, true);
			this.nativeViewProtected.setBackground(null);
		}
	}
};

@NativeClass()
class NeumorphicDrawable extends android.graphics.drawable.Drawable {
	private mAugmentedCanvas: commons.NeumorphicCanvas;

	constructor(canvas: commons.NeumorphicCanvas) {
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

	public getAugmentedCanvas(): commons.NeumorphicCanvas {
		return this.mAugmentedCanvas;
	}

	public getOpacity() {
		return android.graphics.PixelFormat.TRANSLUCENT;
	}
}
