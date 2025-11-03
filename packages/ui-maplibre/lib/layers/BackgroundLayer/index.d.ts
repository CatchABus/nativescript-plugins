import { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { BaseLayer } from '../BaseLayer';

export type BackgroundLayerProperties = LayerProperties & {
	'background-color': PropertyValueSpecification<ColorSpecification>;
	'background-opacity': PropertyValueSpecification<number>;
	'background-pattern': DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
};

export declare class BackgroundLayer extends BaseLayer<any, BackgroundLayerProperties> {
	constructor(id: string);
	public get backgroundColor(): PropertyValueSpecification<ColorSpecification>;
	public set backgroundColor(value: PropertyValueSpecification<ColorSpecification>);
	public get backgroundOpacity(): PropertyValueSpecification<number>;
	public set backgroundOpacity(value: PropertyValueSpecification<number>);
	public get backgroundPattern(): DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	public set backgroundPattern(value: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>);
}
