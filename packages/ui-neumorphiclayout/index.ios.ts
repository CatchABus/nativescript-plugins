import { LayoutBase, Screen } from '@nativescript/core';
import * as commons from './common';

export * from './common';

const layerNames = ['bottomDrawable', 'topDrawable'];

function getDrawableLayers(view: LayoutBase): Array<any> {
	const drawableLayers: Array<any> = [];
	const sublayers = view.nativeViewProtected?.layer?.sublayers;

	if (sublayers != null) {
		const count = sublayers.count;
		for (let i = 0; i < count; i++) {
			if (layerNames.includes(sublayers[i].name)) {
				drawableLayers.push(sublayers[i]);
			}
		}
	}
	return drawableLayers;
}

function refresh(value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
}

function updateSublayerBounds(args) {
	const view = args.object;

	const drawableLayers = getDrawableLayers(view);
	for (let layer of drawableLayers) {
		layer.frame = view.nativeViewProtected.bounds;
		layer.setNeedsDisplay();
	}
}

function updateSublayerShadows(view, sublayers) {
	const [bottomLayer, topLayer] = sublayers;
	if (bottomLayer == null || topLayer == null) {
		throw new Error('No shadow sublayers found!');
	}

	const state = view.isTouched ? view.touchState : view.neumorphism;
	if (!state) {
		throw new Error('No neumorphism state found!');
	}

	bottomLayer.cornerRadius = view.cornerRadius;
	bottomLayer.backgroundColor = view.fillColor.ios.CGColor;
	bottomLayer.shadowColor = view.lightShadowColor.ios.CGColor;
	bottomLayer.shadowOffset = CGSizeMake(-view.shadowDistance, -view.shadowDistance);
	bottomLayer.shadowRadius = view.shadowRadius || view.shadowDistance * 2;
	bottomLayer.shadowOpacity = state == commons.STATE_PRESSED ? 0 : 1;

	topLayer.cornerRadius = view.cornerRadius;
	topLayer.backgroundColor = view.fillColor.ios.CGColor;
	topLayer.contentsScale = Screen.mainScreen.scale;
	topLayer.allowsEdgeAntialiasing = true;
	topLayer.shadowColor = view.darkShadowColor.ios.CGColor;
	topLayer.shadowOffset = CGSizeMake(view.shadowDistance, view.shadowDistance);
	topLayer.shadowRadius = view.shadowRadius || view.shadowDistance * 2;
	topLayer.shadowOpacity = state == commons.STATE_PRESSED ? 0 : 1;

	topLayer.setNeedsDisplay();
}

LayoutBase.prototype[commons.cornerRadiusProperty.setNative] = refresh;
LayoutBase.prototype[commons.isTouchedProperty.setNative] = refresh;
LayoutBase.prototype[commons.lightShadowColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.darkShadowColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.fillColorProperty.setNative] = refresh;
LayoutBase.prototype[commons.touchStateProperty.setNative] = refresh;
LayoutBase.prototype[commons.shadowDistanceProperty.setNative] = refresh;
LayoutBase.prototype[commons.shadowRadiusProperty.setNative] = refresh;

LayoutBase.prototype[commons.neumorphismProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (value) {
		if (drawableLayers.length) {
			updateSublayerShadows(this, drawableLayers);
		} else {
			const canvas = new commons.NeumorphicCanvas(new WeakRef(this));

			const bottomLayer = CALayer.layer();
			bottomLayer.name = 'bottomDrawable';
			bottomLayer.zPosition = -2;

			const topLayer = CANeumorphicLayer.initWithCanvas(canvas);
			topLayer.name = 'topDrawable';
			topLayer.zPosition = -1;

			this.nativeViewProtected.layer.addSublayer(bottomLayer);
			this.nativeViewProtected.layer.addSublayer(topLayer);

			updateSublayerShadows(this, [bottomLayer, topLayer]);

			this.on(LayoutBase.layoutChangedEvent, updateSublayerBounds);
		}
	} else {
		if (drawableLayers.length) {
			for (let layer of drawableLayers) {
				layer.removeFromSuperlayer();
			}
		}
		this.off(LayoutBase.layoutChangedEvent, updateSublayerBounds);
	}
};

@NativeClass
class CANeumorphicLayer extends CALayer implements CALayerDelegate {
	private mAugmentedCanvas: commons.NeumorphicCanvas;

	public static initWithCanvas(canvas: commons.NeumorphicCanvas): CANeumorphicLayer {
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

	public getAugmentedCanvas(): commons.NeumorphicCanvas {
		return this.mAugmentedCanvas;
	}
}
