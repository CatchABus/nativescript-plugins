import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';
import { LayerProperties } from '../BaseLayer';

export type SymbolLayerProperties = LayerProperties & {
	'icon-allow-overlap': PropertyValueSpecification<boolean>;
	'icon-size': PropertyValueSpecification<number>;
	'icon-image': DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	'icon-offset': DataDrivenPropertyValueSpecification<[number, number]>;
	'text-field': PropertyValueSpecification<string>;
	'text-allow-overlap': PropertyValueSpecification<boolean>;
	'text-size': PropertyValueSpecification<number>;
	'text-color': PropertyValueSpecification<ColorSpecification>;
	'text-font': PropertyValueSpecification<string[]>;
};

export declare class SymbolLayer extends AbstractVectorLayer<any, SymbolLayerProperties> {
	constructor(id: string, source: BaseSource);
	public iconAllowsOverlap: PropertyValueSpecification<boolean>;
	public iconScale: PropertyValueSpecification<number>;
	public iconImageName: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	public iconOffset: DataDrivenPropertyValueSpecification<[number, number]>;
	public text: PropertyValueSpecification<string>;
	public textAllowsOverlap: PropertyValueSpecification<boolean>;
	public textSize: PropertyValueSpecification<number>;
	public textColor: PropertyValueSpecification<ColorSpecification>;
	public textFontNames: PropertyValueSpecification<string[]>;
}
