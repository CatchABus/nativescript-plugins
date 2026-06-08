import { FillExtrusionLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { LayerType } from '../LayerManager';

@LayerType('fill-extrusion')
export class FillExtrusionLayer extends FillExtrusionLayerCommon<org.maplibre.android.style.layers.FillExtrusionLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.FillExtrusionLayer {
		return new org.maplibre.android.style.layers.FillExtrusionLayer(id, source.getId());
	}

	public get_native_fillExtrusionColor() {
		return this.native.getFillExtrusionColor().value;
	}

	public get_native_fillExtrusionHeight() {
		return this.native.getFillExtrusionHeight().value?.floatValue?.();
	}

	public get_native_fillExtrusionBase() {
		return this.native.getFillExtrusionBase().value?.floatValue?.();
	}

	public get_native_fillExtrusionOpacity() {
		return this.native.getFillExtrusionOpacity().value?.floatValue?.();
	}
}
