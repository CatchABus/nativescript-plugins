import { LineLayer as ILineLayer, LineLayerProperties } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class LineLayerCommon<T> extends AbstractVectorLayer<T, LineLayerProperties> implements ILineLayer {
	@PaintProperty('line-color')
	public lineColor: PropertyValueSpecification<ColorSpecification>;
	@PaintProperty('line-width')
	public lineWidth: PropertyValueSpecification<number>;
	@PaintProperty('line-opacity')
	public lineOpacity: PropertyValueSpecification<number>;
}
