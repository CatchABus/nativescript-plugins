import { CircleLayerCommon } from './common';
import { BaseSource } from '../../sources';

export class CircleLayer extends CircleLayerCommon<org.maplibre.android.style.layers.CircleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.CircleLayer {
		return new org.maplibre.android.style.layers.CircleLayer(id, source.getId());
	}

	public override get circleColor() {
		return this.getOrSetPropertyValueInternal('circle-color', () => this.native.getCircleColor().value);
	}

	public override set circleColor(value) {
		super.circleColor = value;
	}

	public override get circleRadius() {
		return this.getOrSetPropertyValueInternal('circle-radius', () => this.native.getCircleRadius().value?.floatValue?.());
	}

	public override set circleRadius(value) {
		super.circleRadius = value;
	}
}
