import { FillExtrusionLayerProperties, FillExtrusionLayer as IFillExtrusionLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class FillExtrusionLayerCommon<T> extends AbstractVectorLayer<T, FillExtrusionLayerProperties> implements IFillExtrusionLayer {
	@PaintProperty('fill-extrusion-color')
	public fillExtrusionColor: PropertyValueSpecification<ColorSpecification>;
	@PaintProperty('fill-extrusion-height')
	public fillExtrusionHeight: PropertyValueSpecification<number>;
	@PaintProperty('fill-extrusion-base')
	public fillExtrusionBase: PropertyValueSpecification<number>;
	@PaintProperty('fill-extrusion-opacity')
	public fillExtrusionOpacity: PropertyValueSpecification<number>;
}
