import { LineLayer as ILineLayer, LineLayerProperties } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class LineLayerCommon<T> extends AbstractVectorLayer<T, LineLayerProperties> implements ILineLayer {
	@PaintProperty('line-color')
	public set lineColor(value: PropertyValueSpecification<ColorSpecification>) {
		this.setPropertyValueInternal('line-color', value);
	}

	@PaintProperty('line-width')
	public set lineWidth(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('line-width', value);
	}

	@PaintProperty('line-opacity')
	public set lineOpacity(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('line-opacity', value);
	}
}
