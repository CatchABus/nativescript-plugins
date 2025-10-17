import { Color } from '@nativescript/core';
import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';
import { Expression } from '../../expressions/Expression';

export abstract class SymbolLayer extends SymbolLayerCommon<MLNSymbolStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNSymbolStyleLayer {
		return MLNSymbolStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get iconAllowsOverlap(): ExpressionOrValue<boolean> {
		if (super.iconAllowsOverlap === undefined) {
			super.iconAllowsOverlap = this.extractPropertyValue(this.native.iconAllowsOverlap);
		}
		return super.iconAllowsOverlap;
	}

	public override set iconAllowsOverlap(value: ExpressionOrValue<boolean>) {
		super.iconAllowsOverlap = value;
		this.native.iconAllowsOverlap = this.expressionValueToNative(value);
	}

	public override get iconScale(): ExpressionOrValue<number> {
		if (super.iconScale === undefined) {
			super.iconScale = this.extractPropertyValue(this.native.iconScale);
		}
		return super.iconScale;
	}

	public override set iconScale(value: ExpressionOrValue<number>) {
		super.iconScale = value;
		this.native.iconScale = this.expressionValueToNative(value);
	}

	public override get iconImageName(): ExpressionOrValue<string> {
		if (super.iconImageName === undefined) {
			super.iconImageName = this.extractPropertyValue(this.native.iconImageName);
		}
		return super.iconImageName;
	}

	public override set iconImageName(value: ExpressionOrValue<string>) {
		super.iconImageName = value;
		this.native.iconImageName = this.expressionValueToNative(value);
	}

	public override get text(): ExpressionOrValue<string> {
		if (super.text === undefined) {
			super.text = this.extractPropertyValue(this.native.text);
		}
		return super.text;
	}

	public override set text(value: ExpressionOrValue<string>) {
		super.text = value;
		this.native.text = this.expressionValueToNative(value);
	}

	public override get textAllowsOverlap(): ExpressionOrValue<boolean> {
		if (super.textAllowsOverlap === undefined) {
			super.textAllowsOverlap = this.extractPropertyValue(this.native.textAllowsOverlap);
		}
		return super.textAllowsOverlap;
	}

	public override set textAllowsOverlap(value: ExpressionOrValue<boolean>) {
		super.textAllowsOverlap = value;
		this.native.textAllowsOverlap = this.expressionValueToNative(value);
	}

	public override get textSize(): ExpressionOrValue<number> {
		if (super.textSize === undefined) {
			super.textSize = this.extractPropertyValue(this.native.textFontSize);
		}
		return super.textSize;
	}

	public override set textSize(value: ExpressionOrValue<number>) {
		super.textSize = value;
		this.native.textFontSize = this.expressionValueToNative(value);
	}

	public override get textColor(): ExpressionOrValue<string | Color> {
		if (super.textColor === undefined) {
			super.textColor = this.extractPropertyValue(this.native.textColor);
		}
		return super.textColor;
	}

	public override set textColor(value: ExpressionOrValue<string | Color>) {
		if (typeof value === 'string') {
			if (Color.isValid(value)) {
				super.textColor = value;
				this.native.textColor = this.expressionValueToNative(new Color(value));
			} else {
				super.textColor = '#000000';
				this.native.textColor = this.expressionValueToNative(new Color(super.textColor));
			}
		} else {
			super.textColor = value;
			this.native.textColor = this.expressionValueToNative(value);
		}
	}

	public override get textFontNames(): ExpressionOrValue<string[]> {
		if (super.textFontNames === undefined) {
			super.textFontNames = this.extractPropertyValue(this.native.textFontNames);
		}
		return super.textFontNames;
	}

	public override set textFontNames(value: ExpressionOrValue<string[]>) {
		super.textFontNames = value;
		this.native.textFontNames = this.expressionValueToNative(value);
	}

	public override get filter(): Expression {
		if (super.filter === undefined) {
			super.filter = Expression.initWithNative(this.native.predicate) as Expression;
		}
		return super.filter;
	}

	public override set filter(value: Expression) {
		super.filter = value;
		this.native.predicate = value?.native;
	}
}
