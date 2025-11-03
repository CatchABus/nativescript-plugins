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
	public get iconAllowsOverlap(): PropertyValueSpecification<boolean>;
	public set iconAllowsOverlap(value: PropertyValueSpecification<boolean>);
	public get iconScale(): PropertyValueSpecification<number>;
	public set iconScale(value: PropertyValueSpecification<number>);
	public get iconImageName(): DataDrivenPropertyValueSpecification<ResolvedImageSpecification>;
	public set iconImageName(value: DataDrivenPropertyValueSpecification<ResolvedImageSpecification>);
	public get iconOffset(): DataDrivenPropertyValueSpecification<[number, number]>;
	public set iconOffset(value: DataDrivenPropertyValueSpecification<[number, number]>);
	public get text(): PropertyValueSpecification<string>;
	public set text(value: PropertyValueSpecification<string>);
	public get textAllowsOverlap(): PropertyValueSpecification<boolean>;
	public set textAllowsOverlap(value: PropertyValueSpecification<boolean>);
	public get textSize(): PropertyValueSpecification<number>;
	public set textSize(value: PropertyValueSpecification<number>);
	public get textColor(): PropertyValueSpecification<ColorSpecification>;
	public set textColor(value: PropertyValueSpecification<ColorSpecification>);
	public get textFontNames(): PropertyValueSpecification<string[]>;
	public set textFontNames(value: PropertyValueSpecification<string[]>);
}
