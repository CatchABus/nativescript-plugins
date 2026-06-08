import { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { BaseLayer } from '../BaseLayer';

export type BackgroundLayerProperties = LayerProperties & {
	'background-color': PropertyValueSpecification<ColorSpecification>;
	'background-opacity': PropertyValueSpecification<number>;
	'background-pattern': DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
};

export declare class BackgroundLayer extends BaseLayer<any, BackgroundLayerProperties> {
	constructor(id: string);
	public backgroundColor: PropertyValueSpecification<ColorSpecification>;
	public backgroundOpacity: PropertyValueSpecification<number>;
	public backgroundPattern: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
}
