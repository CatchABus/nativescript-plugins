import { backgroundInternalProperty, borderTopColorProperty, borderTopLeftRadiusProperty, borderTopWidthProperty, Color, EventData, LayoutBase, Length, Screen, Utils } from '@nativescript/core';
import { NeumorphicLayout } from '.';
import { darkShadowColorProperty, lightShadowColorProperty, NeumorphicCanvas, NeumorphicType, neumorphismProperty, shadowDistanceProperty, shadowRadiusProperty } from './common';

export * from './common';

const layerNames = ['backgroundDrawable', 'foregroundDrawable'];

@NativeClass()
class CANeumorphicLayer extends CALayer implements CALayerDelegate {
	private mAugmentedCanvas: NeumorphicCanvas;

	public static initWithCanvas(canvas: NeumorphicCanvas): CANeumorphicLayer {
		const layer = CANeumorphicLayer.layer() as CANeumorphicLayer;
		layer.mAugmentedCanvas = canvas;
		return layer;
	}

	drawInContext(ctx: any): void {
		const augmentedCanvas = this.mAugmentedCanvas as any;
		if (augmentedCanvas != null) {
			const size = this.bounds.size;
			augmentedCanvas.setContext(ctx, size.width, size.height);
			augmentedCanvas.onDraw();
		}
		super.drawInContext(ctx);
	}

	public getAugmentedCanvas(): NeumorphicCanvas {
		return this.mAugmentedCanvas;
	}
}

function _getDrawableLayers(view: NeumorphicLayout): CALayer[] {
	const drawableLayers: CALayer[] = [];
	const sublayers = (view.nativeViewProtected as UIView)?.layer?.sublayers;

	if (sublayers != null) {
		const count = sublayers.count;

		for (let i = 0, length = sublayers.count; i < length && drawableLayers.length < layerNames.length; i++) {
			const layer: CALayer = sublayers.objectAtIndex(i);

			if (layerNames.includes(layer.name)) {
				drawableLayers.push(layer);
			}
		}
	}
	return drawableLayers;
}

function _refresh(this: NeumorphicLayout): void {
	const drawableLayers = _getDrawableLayers(this);

	if (drawableLayers.length) {
		_updateSublayerShadows(this, drawableLayers);
	}
}

function _updateSublayerBounds(view: NeumorphicLayout) {
	const { width, height } = view.getActualSize();
	const cornerRadiusDip = Utils.layout.toDeviceIndependentPixels(Length.toDevicePixels(view.borderTopLeftRadius));
	const cornerRadius = Math.min(Math.min(width, height) / 2, cornerRadiusDip);
	const drawableLayers = _getDrawableLayers(view);
	const bounds = view.nativeViewProtected.bounds;
	const shadowPath = UIBezierPath.bezierPathWithRoundedRectCornerRadius(bounds, cornerRadius).CGPath;

	for (const layer of drawableLayers) {
		layer.frame = bounds;
		layer.shadowPath = shadowPath;
		layer.setNeedsDisplay();
	}
}

function _updateSublayerShadows(view: NeumorphicLayout, sublayers: CALayer[]) {
	const state = view.neumorphism;

	if (!state) {
		return;
	}

	const [bgLayer, fgLayer] = sublayers;

	if (bgLayer == null || fgLayer == null) {
		return;
	}

	const { width, height } = view.getActualSize();
	const cornerRadiusDip = Utils.layout.toDeviceIndependentPixels(Length.toDevicePixels(view.borderTopLeftRadius));
	const cornerRadius = Math.min(Math.min(width, height) / 2, cornerRadiusDip);
	const fillColor = view.style.backgroundColor instanceof Color ? view.style.backgroundColor.ios.CGColor : UIColor.whiteColor.CGColor;
	const shadowRadius = (view.shadowRadius || view.shadowDistance * 2) / Screen.mainScreen.scale;
	const shadowOpacity = state == NeumorphicType.PRESSED ? 0 : 1;

	bgLayer.cornerRadius = cornerRadius;
	bgLayer.backgroundColor = fillColor;
	bgLayer.shadowColor = view.lightShadowColor.ios.CGColor;
	bgLayer.shadowOffset = CGSizeMake(-view.shadowDistance, -view.shadowDistance);
	bgLayer.shadowRadius = shadowRadius;
	bgLayer.shadowOpacity = shadowOpacity;

	fgLayer.cornerRadius = cornerRadius;
	fgLayer.backgroundColor = fillColor;
	fgLayer.contentsScale = Screen.mainScreen.scale;
	fgLayer.allowsEdgeAntialiasing = true;
	fgLayer.shadowColor = view.darkShadowColor.ios.CGColor;
	fgLayer.shadowOffset = CGSizeMake(view.shadowDistance, view.shadowDistance);
	fgLayer.shadowRadius = shadowRadius;
	fgLayer.shadowOpacity = shadowOpacity;

	fgLayer.setNeedsDisplay();
}

function _onLayoutChange(args: EventData): void {
	_updateSublayerBounds(args.object as NeumorphicLayout);
}

function _updateNeumorphismState(this: NeumorphicLayout, value: NeumorphicType): void {
	const drawableLayers = _getDrawableLayers(this);

	if (value) {
		if (drawableLayers.length) {
			_updateSublayerShadows(this, drawableLayers);
		} else {
			const nativeView = this.nativeViewProtected as UIView;
			const canvas = new NeumorphicCanvas(new WeakRef(this));

			const bgLayer = CALayer.layer();
			bgLayer.name = 'backgroundDrawable';
			bgLayer.zPosition = -2;

			const fgLayer = CANeumorphicLayer.initWithCanvas(canvas);
			fgLayer.name = 'foregroundDrawable';
			fgLayer.zPosition = -1;

			nativeView.layer.insertSublayerAtIndex(bgLayer, 0);
			nativeView.layer.insertSublayerAbove(fgLayer, bgLayer);

			_updateSublayerShadows(this, [bgLayer, fgLayer]);
			_updateSublayerBounds(this);

			this.on(LayoutBase.layoutChangedEvent, _onLayoutChange);
		}
	} else {
		if (drawableLayers.length) {
			for (const layer of drawableLayers) {
				layer.removeFromSuperlayer();
			}
		}

		this.off(LayoutBase.layoutChangedEvent, _onLayoutChange);
	}
}

LayoutBase.prototype[borderTopColorProperty.setNative] = _refresh;
LayoutBase.prototype[borderTopWidthProperty.setNative] = _refresh;
LayoutBase.prototype[borderTopLeftRadiusProperty.setNative] = _refresh;
LayoutBase.prototype[lightShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[darkShadowColorProperty.setNative] = _refresh;
LayoutBase.prototype[shadowDistanceProperty.setNative] = _refresh;
LayoutBase.prototype[shadowRadiusProperty.setNative] = _refresh;
LayoutBase.prototype[neumorphismProperty.setNative] = _updateNeumorphismState;

// Disable 'backgroundInternal' as it also uses 'setBackground' to apply a drawable
const backgroundInternalOrigin = LayoutBase.prototype[backgroundInternalProperty.setNative];
LayoutBase.prototype[backgroundInternalProperty.setNative] = function (this: NeumorphicLayout, value) {
	if (this.neumorphism) {
		_refresh.call(this, value);
	} else {
		backgroundInternalOrigin.call(this, value);
	}
};
