import { LineLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { LayerType } from '../LayerManager';

@LayerType('line')
export class LineLayer extends LineLayerCommon<org.maplibre.android.style.layers.LineLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.LineLayer {
		return new org.maplibre.android.style.layers.LineLayer(id, source.getId());
	}

	public get_native_lineColor() {
		return this.native.getLineColor().value;
	}

	public get_native_lineWidth() {
		return this.native.getLineWidth().value?.floatValue?.();
	}

	public get_native_lineOpacity() {
		return this.native.getLineOpacity().value?.floatValue?.();
	}
}
