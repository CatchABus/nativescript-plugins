import { CircleLayerProperties, CircleLayer as ICircleLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class CircleLayerCommon<T> extends AbstractVectorLayer<T, CircleLayerProperties> implements ICircleLayer {
	@PaintProperty('circle-color')
	public circleColor: PropertyValueSpecification<ColorSpecification>;
	@PaintProperty('circle-radius')
	public circleRadius: PropertyValueSpecification<number>;
}
