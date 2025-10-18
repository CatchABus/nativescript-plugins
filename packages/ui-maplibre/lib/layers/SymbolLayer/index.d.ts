import { Color } from '@nativescript/core';
import { BaseSource } from '../../sources';
import { ExpressionOrValue } from '../BaseLayer';
import { VectorStyleLayer } from '../VectorStyleLayer';

export declare class SymbolLayer extends VectorStyleLayer<any> {
	constructor(id: string, source: BaseSource);
	public get iconAllowsOverlap(): ExpressionOrValue<boolean>;
	public set iconAllowsOverlap(value: ExpressionOrValue<boolean>);
	public get iconScale(): ExpressionOrValue<number>;
	public set iconScale(value: ExpressionOrValue<number>);
	public get iconImageName(): ExpressionOrValue<string>;
	public set iconImageName(value: ExpressionOrValue<string>);
	public get text(): ExpressionOrValue<string>;
	public set text(value: ExpressionOrValue<string>);
	public get textAllowsOverlap(): ExpressionOrValue<boolean>;
	public set textAllowsOverlap(value: ExpressionOrValue<boolean>);
	public get textSize(): ExpressionOrValue<number>;
	public set textSize(value: ExpressionOrValue<number>);
	public get textColor(): ExpressionOrValue<string | Color>;
	public set textColor(value: ExpressionOrValue<string | Color>);
	public get textFontNames(): ExpressionOrValue<string[]>;
	public set textFontNames(value: ExpressionOrValue<string[]>);
}
