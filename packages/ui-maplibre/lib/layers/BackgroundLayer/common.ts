import { Color } from '@nativescript/core';
import { BaseLayer, ExpressionOrValue } from '../BaseLayer';

export abstract class BackgroundLayerCommon<T> extends BaseLayer<T> {
	private mBackgroundColor: ExpressionOrValue<string | Color>;
	private mBackgroundOpacity: ExpressionOrValue<number>;
	private mBackgroundPattern: ExpressionOrValue<string>;

	public get backgroundColor(): ExpressionOrValue<string | Color> {
		return this.mBackgroundColor;
	}

	public set backgroundColor(value: ExpressionOrValue<string | Color>) {
		this.mBackgroundColor = value;
	}

	public get backgroundOpacity(): ExpressionOrValue<number> {
		return this.mBackgroundOpacity;
	}

	public set backgroundOpacity(value: ExpressionOrValue<number>) {
		this.mBackgroundOpacity = value;
	}

	public get backgroundPattern(): ExpressionOrValue<string> {
		return this.mBackgroundPattern;
	}

	public set backgroundPattern(value: ExpressionOrValue<string>) {
		this.mBackgroundPattern = value;
	}
}
