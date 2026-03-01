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

	public override get fillExtrusionColor() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-color', () => this.native.getFillExtrusionColor().value);
	}

	public override set fillExtrusionColor(value) {
		super.fillExtrusionColor = value;
	}

	public override get fillExtrusionHeight() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-height', () => this.native.getFillExtrusionHeight().value?.floatValue?.());
	}

	public override set fillExtrusionHeight(value) {
		super.fillExtrusionHeight = value;
	}

	public override get fillExtrusionBase() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-base', () => this.native.getFillExtrusionBase().value?.floatValue?.());
	}

	public override set fillExtrusionBase(value) {
		super.fillExtrusionBase = value;
	}

	public override get fillExtrusionOpacity() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-opacity', () => this.native.getFillExtrusionOpacity().value?.floatValue?.());
	}

	public override set fillExtrusionOpacity(value) {
		super.fillExtrusionBase = value;
	}
}
