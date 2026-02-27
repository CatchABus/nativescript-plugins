import { LineLayerCommon } from './common';
import { BaseSource } from '../../sources';

export class LineLayer extends LineLayerCommon<org.maplibre.android.style.layers.LineLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.LineLayer {
		return new org.maplibre.android.style.layers.LineLayer(id, source.getId());
	}

	public override get lineColor() {
		return this.getOrSetPropertyValueInternal('line-color', () => this.native.getLineColor().value);
	}

	public override set lineColor(value) {
		super.lineColor = value;
	}

	public override get lineWidth() {
		return this.getOrSetPropertyValueInternal('line-width', () => this.native.getLineWidth().value?.floatValue?.());
	}

	public override set lineWidth(value) {
		super.lineWidth = value;
	}

	public override get lineOpacity() {
		return this.getOrSetPropertyValueInternal('line-opacity', () => this.native.getLineOpacity().value?.floatValue?.());
	}

	public override set lineOpacity(value) {
		super.lineOpacity = value;
	}
}
