import { CircleLayer as ICircleLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class CircleLayerCommon<T> extends AbstractVectorLayer<T> implements ICircleLayer {
	@PaintProperty('circle-color')
	public get circleColor(): PropertyValueSpecification<ColorSpecification> {
		return this.getPropertyValueInternal('circle-color');
	}

	public set circleColor(value: PropertyValueSpecification<ColorSpecification>) {
		this.setPropertyValueInternal('circle-color', value);
	}

	@PaintProperty('circle-radius')
	public get circleRadius(): PropertyValueSpecification<number> {
		return this.getPropertyValueInternal('circle-radius');
	}

	public set circleRadius(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('circle-radius', value);
	}
}
