import { SymbolLayer as ISymbolLayer, SymbolLayerProperties } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { LayoutProperty, PaintProperty } from '../../utils/decorators';

export abstract class SymbolLayerCommon<T> extends AbstractVectorLayer<T, SymbolLayerProperties> implements ISymbolLayer {
	@LayoutProperty('icon-allow-overlap')
	public iconAllowsOverlap: PropertyValueSpecification<boolean>;
	@LayoutProperty('icon-size')
	public iconScale: PropertyValueSpecification<number>;
	@LayoutProperty('icon-image')
	public iconImageName: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	@LayoutProperty('icon-offset')
	public iconOffset: DataDrivenPropertyValueSpecification<[number, number]>;
	@LayoutProperty('text-field')
	public text: PropertyValueSpecification<string>;
	@LayoutProperty('text-allow-overlap')
	public textAllowsOverlap: PropertyValueSpecification<boolean>;
	@LayoutProperty('text-size')
	public textSize: PropertyValueSpecification<number>;
	@PaintProperty('text-color')
	public textColor: PropertyValueSpecification<ColorSpecification>;
	@LayoutProperty('text-font')
	public textFontNames: PropertyValueSpecification<string[]>;
}
