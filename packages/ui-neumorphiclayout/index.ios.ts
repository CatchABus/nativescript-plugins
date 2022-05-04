import { LayoutBase, Screen } from '@nativescript/core';
import * as commons from './common';

export { State } from './common';

const layerNames = ['bottomDrawable', 'topDrawable'];

function getDrawableLayers(view: LayoutBase): Array<CALayer> {
	const drawableLayers: Array<CALayer> = [];
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
		throw new Error('updateSublayerShadows: No sublayers found!');
	}

	const state = view.isTouched ? view.neumorphicTouchState : view.neumorphicState;

	bottomLayer.cornerRadius = view.cornerRadius;
	bottomLayer.backgroundColor = view.neumorphicColor.ios.CGColor;
	bottomLayer.shadowColor = view.brightColor.ios.CGColor;
	bottomLayer.shadowOffset = CGSizeMake(-view.shadowDistance, -view.shadowDistance);
	bottomLayer.shadowRadius = view.shadowRadius || view.shadowDistance * 2;
	bottomLayer.shadowOpacity = state == commons.State.PRESSED ? 0 : 1;

	topLayer.cornerRadius = view.cornerRadius;
	topLayer.backgroundColor = view.neumorphicColor.ios.CGColor;
	topLayer.contentsScale = Screen.mainScreen.scale;
	topLayer.allowsEdgeAntialiasing = true;
	topLayer.shadowColor = view.darkColor.ios.CGColor;
	topLayer.shadowOffset = CGSizeMake(view.shadowDistance, view.shadowDistance);
	topLayer.shadowRadius = view.shadowRadius || view.shadowDistance * 2;
	topLayer.shadowOpacity = state == commons.State.PRESSED ? 0 : 1;

	topLayer.setNeedsDisplay();
}

LayoutBase.prototype[commons.neumorphicTouchStateProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.brightIntensityProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		this.brightColor = drawableLayers[1].getAugmentedCanvas().manipulateColor(this.neumorphicColor, 1 + value);
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.cornerRadiusProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.darkIntensityProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		this.darkColor = drawableLayers[1].getAugmentedCanvas().manipulateColor(this.neumorphicColor, 1 - value);
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.isTouchedProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.neumorphicColorProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		this.brightColor = drawableLayers[1].getAugmentedCanvas().manipulateColor(value, 1 + this.brightIntensity);
		this.darkColor = drawableLayers[1].getAugmentedCanvas().manipulateColor(value, 1 - this.darkIntensity);
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.neumorphicStateProperty.setNative] = function (value) {
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

LayoutBase.prototype[commons.overlayColorProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.shadowDistanceProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

LayoutBase.prototype[commons.shadowRadiusProperty.setNative] = function (value) {
	const drawableLayers = getDrawableLayers(this);
	if (drawableLayers.length) {
		updateSublayerShadows(this, drawableLayers);
	}
};

@NativeClass
class CANeumorphicLayer extends CALayer implements CALayerDelegate {
	private mAugmentedCanvas: commons.NeumorphicCanvas;

	public static initWithCanvas(canvas: commons.NeumorphicCanvas) {
		const layer = CANeumorphicLayer.layer();
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
