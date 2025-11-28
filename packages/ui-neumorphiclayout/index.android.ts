import { backgroundInternalProperty, borderTopColorProperty, borderTopLeftRadiusProperty, borderTopWidthProperty, CustomLayoutView, LayoutBase, Screen, ScrollView, ViewBase } from '@nativescript/core';
import { NeumorphicLayout } from '.';
import { darkShadowColorProperty, lightShadowColorProperty, NeumorphicCanvas, NeumorphicType, neumorphismProperty, shadowDistanceProperty, shadowRadiusProperty } from './common';

export * from './common';

@NativeClass()
class NeumorphicDrawable extends android.graphics.drawable.Drawable {
	private readonly mCanvasRef: WeakRef<NeumorphicCanvas>;

	constructor(canvas: NeumorphicCanvas) {
		super();
		this.mCanvasRef = new WeakRef<NeumorphicCanvas>(canvas);
	}

	public draw(nativeCanvas: android.graphics.Canvas) {
		const canvas = this.mCanvasRef && this.mCanvasRef.get();
		if (canvas != null) {
			const scale = Screen.mainScreen.scale;

			nativeCanvas.save();
			nativeCanvas.scale(scale, scale); // always scale to device density to work with dip

			(canvas as any).mNative = nativeCanvas;
			canvas.onDraw();

			nativeCanvas.restore();
		}
	}

	public getAugmentedCanvas(): NeumorphicCanvas {
		return this.mCanvasRef && this.mCanvasRef.get();
	}

	public getOpacity() {
		return android.graphics.PixelFormat.TRANSLUCENT;
	}

	public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
	public setColorFilter(colorFilter: android.graphics.ColorFilter): void;

	public setColorFilter(...args: any): void {
		if (args.length === 2) {
			super.setColorFilter(args[0], args[1]);
		} else {
			const canvas = this.mCanvasRef && this.mCanvasRef.get();
			if (canvas) {
				canvas.getBasePaint().setColorFilter(args[0]);
			}
		}
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
	// Remove clipping from native layout views to allow shadows overflow
	if (view instanceof CustomLayoutView && !(view instanceof ScrollView)) {
		const nativeView = view?.nativeViewProtected as android.view.View;

		// Check for native view instance in case someone has created a view plugin
		// that extends CustomLayoutView but native view does not extend ViewGroup
		if (nativeView != null && nativeView instanceof android.view.ViewGroup) {
			nativeView.setClipChildren(clipChildren);
			nativeView.setClipToPadding(clipChildren);
		}
	}
}

function _updateNeumorphismState(this: NeumorphicLayout, value: NeumorphicType): void {
	const drawable = _getNeumorphicDrawable(this);
	const nativeView = this.nativeViewProtected as android.view.View;

	if (value) {
		if (drawable != null) {
			drawable.invalidateSelf();
		} else {
			const canvas = new NeumorphicCanvas(this);
			// Keep neumorphic canvas as a reference to prevent GC from getting rid of it
			this.augmentedCanvas = canvas;

			_toggleViewClipping(this.parent, false);
			nativeView.setBackground(new NeumorphicDrawable(canvas));
		}
	} else {
		if (this.augmentedCanvas != null) {
			delete this.augmentedCanvas;
		}

		if (drawable != null) {
			_toggleViewClipping(this.parent, true);
			nativeView.setBackground(null);
		}
	}
}

// Disable 'backgroundInternal' as it also uses 'setBackground' to apply a drawable
const backgroundInternalOrigin = LayoutBase.prototype[backgroundInternalProperty.setNative];

LayoutBase.prototype[borderTopColorProperty.setNative] = _refresh;
LayoutBase.prototype[borderTopWidthProperty.setNative] = _refresh;
LayoutBase.prototype[borderTopLeftRadiusProperty.setNative] = _refresh;
LayoutBase.prototype[lightShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[darkShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[shadowDistanceProperty.setNative] = _refresh;
LayoutBase.prototype[shadowRadiusProperty.setNative] = _refresh;
LayoutBase.prototype[neumorphismProperty.setNative] = _updateNeumorphismState;
LayoutBase.prototype[backgroundInternalProperty.setNative] = function (this: NeumorphicLayout, value) {
	if (this.neumorphism) {
		_refresh.call(this);
	} else {
		backgroundInternalOrigin.call(this, value);
	}
};
