import { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { BaseLayer } from '../BaseLayer';

export declare class BackgroundLayer extends BaseLayer<any> {
	constructor(id: string);
	public get backgroundColor(): PropertyValueSpecification<ColorSpecification>;
	public set backgroundColor(value: PropertyValueSpecification<ColorSpecification>);
	public get backgroundOpacity(): PropertyValueSpecification<number>;
	public set backgroundOpacity(value: PropertyValueSpecification<number>);
	public get backgroundPattern(): DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	public set backgroundPattern(value: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>);
}
