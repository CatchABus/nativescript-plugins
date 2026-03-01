import { FillExtrusionLayerProperties, FillExtrusionLayer as IFillExtrusionLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class FillExtrusionLayerCommon<T> extends AbstractVectorLayer<T, FillExtrusionLayerProperties> implements IFillExtrusionLayer {
	@PaintProperty('fill-extrusion-color')
	public set fillExtrusionColor(value: PropertyValueSpecification<ColorSpecification>) {
		this.setPropertyValueInternal('fill-extrusion-color', value);
	}

	@PaintProperty('fill-extrusion-height')
	public set fillExtrusionHeight(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('fill-extrusion-height', value);
	}

	@PaintProperty('fill-extrusion-base')
	public set fillExtrusionBase(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('fill-extrusion-base', value);
	}

	@PaintProperty('fill-extrusion-opacity')
	public set fillExtrusionOpacity(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('fill-extrusion-opacity', value);
	}
}
