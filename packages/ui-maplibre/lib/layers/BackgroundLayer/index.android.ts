import { LayerType } from '../LayerManager';
import { BackgroundLayerCommon } from './common';

@LayerType('background')
export class BackgroundLayer extends BackgroundLayerCommon<org.maplibre.android.style.layers.BackgroundLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): org.maplibre.android.style.layers.BackgroundLayer {
		return new org.maplibre.android.style.layers.BackgroundLayer(id);
	}

	public get_native_backgroundColor() {
		return this.native.getBackgroundColor().value;
	}

	public get_native_backgroundOpacity() {
		return this.native.getBackgroundOpacity().value?.floatValue?.();
	}

	public get_native_backgroundPattern() {
		return this.native.getBackgroundPattern().value;
	}
}
