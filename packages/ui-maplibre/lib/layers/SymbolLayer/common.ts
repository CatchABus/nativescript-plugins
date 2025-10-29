import { Color } from '@nativescript/core';
import { ExpressionOrValue } from '../BaseLayer';
import { SymbolLayer as ISymbolLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';

export abstract class SymbolLayerCommon<T> extends AbstractVectorLayer<T> implements ISymbolLayer {
	private mIconAllowsOverlap: ExpressionOrValue<boolean>;
	private mIconScale: ExpressionOrValue<number>;
	private mIconImageName: ExpressionOrValue<string>;
	private mText: ExpressionOrValue<string>;
	private mTextAllowsOverlap: ExpressionOrValue<boolean>;
	private mTextSize: ExpressionOrValue<number>;
	private mTextColor: ExpressionOrValue<string | Color>;
	private mTextFontNames: ExpressionOrValue<string[]>;

	public get iconAllowsOverlap(): ExpressionOrValue<boolean> {
		return this.mIconAllowsOverlap;
	}

	public set iconAllowsOverlap(value: ExpressionOrValue<boolean>) {
		this.mIconAllowsOverlap = value;
	}

	public get iconScale(): ExpressionOrValue<number> {
		return this.mIconScale;
	}

	public set iconScale(value: ExpressionOrValue<number>) {
		this.mIconScale = value;
	}

	public get iconImageName(): ExpressionOrValue<string> {
		return this.mIconImageName;
	}

	public set iconImageName(value: ExpressionOrValue<string>) {
		this.mIconImageName = value;
	}

	public get text(): ExpressionOrValue<string> {
		return this.mText;
	}

	public set text(value: ExpressionOrValue<string>) {
		this.mText = value;
	}

	public get textAllowsOverlap(): ExpressionOrValue<boolean> {
		return this.mTextAllowsOverlap;
	}

	public set textAllowsOverlap(value: ExpressionOrValue<boolean>) {
		this.mTextAllowsOverlap = value;
	}

	public get textSize(): ExpressionOrValue<number> {
		return this.mTextSize;
	}

	public set textSize(value: ExpressionOrValue<number>) {
		this.mTextSize = value;
	}

	public get textColor(): ExpressionOrValue<string | Color> {
		return this.mTextColor;
	}

	public set textColor(value: ExpressionOrValue<string | Color>) {
		this.mTextColor = value;
	}

	public get textFontNames(): ExpressionOrValue<string[]> {
		return this.mTextFontNames;
	}

	public set textFontNames(value: ExpressionOrValue<string[]>) {
		this.mTextFontNames = value;
	}
}
