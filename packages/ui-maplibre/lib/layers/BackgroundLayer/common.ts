import { BaseLayer } from '../BaseLayer';
import { BackgroundLayerProperties, BackgroundLayer as IBackgroundLayer } from '.';
import type { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class BackgroundLayerCommon<T> extends BaseLayer<T, BackgroundLayerProperties> implements IBackgroundLayer {
	@PaintProperty('background-color')
	public backgroundColor: PropertyValueSpecification<ColorSpecification>;
	@PaintProperty('background-opacity')
	public backgroundOpacity: PropertyValueSpecification<number>;
	@PaintProperty('background-pattern')
	public backgroundPattern: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
}
