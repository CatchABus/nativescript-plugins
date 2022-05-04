import { LayoutBase, Screen } from '@nativescript/core';
import * as commons from './common';

export { State } from './common';

function getNeumorphicDrawable(view: LayoutBase): NeumorphicDrawable {
	const background = view.nativeViewProtected.getBackground();
	if (background == null || background.getAugmentedCanvas == null) {
		return null;
	}
	return background;
}

function toggleViewClipping(view, clipChildren: boolean): void {
	// Removing clipping from all breaks the ui
	if (view != null && view instanceof LayoutBase) {
		view.nativeViewProtected.setClipChildren(clipChildren);
		view.nativeViewProtected.setClipToPadding(clipChildren);
	}
}

LayoutBase.prototype[commons.brightIntensityProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		this.brightColor = drawable.getAugmentedCanvas().manipulateColor(this.neumorphicColor, 1 + value);
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.cornerRadiusProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.darkIntensityProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		this.darkColor = drawable.getAugmentedCanvas().manipulateColor(this.neumorphicColor, 1 - value);
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.isTouchedProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.neumorphicColorProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		this.brightColor = drawable.getAugmentedCanvas().manipulateColor(value, 1 + this.brightIntensity);
		this.darkColor = drawable.getAugmentedCanvas().manipulateColor(value, 1 - this.darkIntensity);
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.neumorphicStateProperty.setNative] = function (value) {
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

LayoutBase.prototype[commons.neumorphicTouchStateProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.overlayColorProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.shadowDistanceProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
	}
};

LayoutBase.prototype[commons.shadowRadiusProperty.setNative] = function (value) {
	const drawable = getNeumorphicDrawable(this);
	if (drawable != null) {
		drawable.invalidateSelf();
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
