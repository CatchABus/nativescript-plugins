import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { ColorSpecification, DataDrivenPropertyValueSpecification, PropertyValueSpecification, ResolvedImageSpecification } from '../../Expression';

export declare class SymbolLayer extends AbstractVectorLayer<any> {
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
