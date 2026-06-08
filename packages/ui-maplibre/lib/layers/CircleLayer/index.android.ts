import { CircleLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { LayerType } from '../LayerManager';

@LayerType('circle')
export class CircleLayer extends CircleLayerCommon<org.maplibre.android.style.layers.CircleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.CircleLayer {
		return new org.maplibre.android.style.layers.CircleLayer(id, source.getId());
	}

	public get_native_circleColor() {
		return this.native.getCircleColor().value;
	}

	public get_native_circleRadius() {
		return this.native.getCircleRadius().value?.floatValue?.();
	}
}
