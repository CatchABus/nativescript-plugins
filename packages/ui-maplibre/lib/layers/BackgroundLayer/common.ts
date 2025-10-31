import { BaseLayer } from '../BaseLayer';
import { BackgroundLayer as IBackgroundLayer } from '.';
import type { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { PaintProperty } from '../../utils/decorators';

export abstract class BackgroundLayerCommon<T> extends BaseLayer<T> implements IBackgroundLayer {
	@PaintProperty('background-color')
	public get backgroundColor(): PropertyValueSpecification<ColorSpecification> {
		return this.getPropertyValueInternal('background-color');
	}

	public set backgroundColor(value: PropertyValueSpecification<ColorSpecification>) {
		this.setPropertyValueInternal('background-color', value);
	}

	@PaintProperty('background-opacity')
	public get backgroundOpacity(): PropertyValueSpecification<number> {
		return this.getPropertyValueInternal('background-opacity');
	}

	public set backgroundOpacity(value: PropertyValueSpecification<number>) {
		this.setPropertyValueInternal('background-opacity', value);
	}

	@PaintProperty('background-pattern')
	public get backgroundPattern(): DataDrivenPropertyValueSpecification<ResolvedImageSpecification> {
		return this.getPropertyValueInternal('background-pattern');
	}

	public set backgroundPattern(value: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>) {
		this.setPropertyValueInternal('background-pattern', value);
	}
}
