import { SymbolLayer as ISymbolLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import type { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { LayoutProperty, PaintProperty } from '../../utils/decorators';

export abstract class SymbolLayerCommon<T> extends AbstractVectorLayer<T> implements ISymbolLayer {
	@LayoutProperty('icon-allow-overlap')
	public set iconAllowsOverlap(value: PropertyValueSpecification<boolean>) {
		this.setPropertyValueInternal('icon-allow-overlap', value);
	}

	@LayoutProperty('icon-size')
	public set iconScale(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('icon-size', value);
	}

	@LayoutProperty('icon-image')
	public set iconImageName(value: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>) {
		this.setPropertyValueInternal('icon-image', value);
	}

	@LayoutProperty('icon-offset')
	public set iconOffset(value: DataDrivenPropertyValueSpecification<[number, number]>) {
		this.setPropertyValueInternal('icon-offset', value);
	}

	@LayoutProperty('text-field')
	public set text(value: PropertyValueSpecification<string>) {
		this.setPropertyValueInternal('text-field', value);
	}

	@LayoutProperty('text-allow-overlap')
	public set textAllowsOverlap(value: PropertyValueSpecification<boolean>) {
		this.setPropertyValueInternal('text-allow-overlap', value);
	}

	@LayoutProperty('text-size')
	public set textSize(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('text-size', value);
	}

	@PaintProperty('text-color')
	public set textColor(value: PropertyValueSpecification<ColorSpecification>) {
		this.setPropertyValueInternal('text-color', value);
	}

	@LayoutProperty('text-font')
	public set textFontNames(value: PropertyValueSpecification<string[]>) {
		this.setPropertyValueInternal('text-font', value);
	}
}
