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
		if (super.circleColor === undefined) {
			super.circleColor = this.native.getCircleColor().value;
		}
		return super.circleColor;
	}

	public override set circleColor(value) {
		super.circleColor = value;
	}

	public override get circleRadius() {
		if (super.circleRadius === undefined) {
			super.circleRadius = this.native.getCircleRadius().value.floatValue();
		}
		return super.circleRadius;
	}

	public override set circleRadius(value) {
		super.circleRadius = value;
	}
}
