import { Color } from '@nativescript/core';
import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';
import { Expression } from '../../expressions/Expression';

export abstract class SymbolLayer extends SymbolLayerCommon<org.maplibre.android.style.layers.SymbolLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.SymbolLayer {
		return new org.maplibre.android.style.layers.SymbolLayer(id, source.getId());
	}

	public override get iconAllowsOverlap(): ExpressionOrValue<boolean> {
		if (super.iconAllowsOverlap === undefined) {
			super.iconAllowsOverlap = this.extractPropertyValue(this.native.getIconAllowOverlap());
		}
		return super.iconAllowsOverlap;
	}

	public override set iconAllowsOverlap(value: ExpressionOrValue<boolean>) {
		super.iconAllowsOverlap = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.iconAllowOverlap(this.expressionValueToNative(value)));
	}

	public override get iconScale(): ExpressionOrValue<number> {
		if (super.iconScale === undefined) {
			super.iconScale = this.extractPropertyValue(this.native.getIconSize());
		}
		return super.iconScale;
	}

	public override set iconScale(value: ExpressionOrValue<number>) {
		super.iconScale = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.iconSize(this.expressionValueToNative(value)));
	}

	public override get iconImageName(): ExpressionOrValue<string> {
		if (super.iconImageName === undefined) {
			super.iconImageName = this.extractPropertyValue(this.native.getIconImage());
		}
		return super.iconImageName;
	}

	public override set iconImageName(value: ExpressionOrValue<string>) {
		super.iconImageName = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.iconImage(this.expressionValueToNative(value)));
	}

	public override get text(): ExpressionOrValue<string> {
		if (super.text === undefined) {
			super.text = this.extractPropertyValue(this.native.getTextField());
		}
		return super.text;
	}

	public override set text(value: ExpressionOrValue<string>) {
		super.text = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.textField(this.expressionValueToNative(value)));
	}

	public override get textAllowsOverlap(): ExpressionOrValue<boolean> {
		if (super.textAllowsOverlap === undefined) {
			super.textAllowsOverlap = this.extractPropertyValue(this.native.getTextAllowOverlap());
		}
		return super.textAllowsOverlap;
	}

	public override set textAllowsOverlap(value: ExpressionOrValue<boolean>) {
		super.textAllowsOverlap = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.textAllowOverlap(this.expressionValueToNative(value)));
	}

	public override get textSize(): ExpressionOrValue<number> {
		if (super.textSize === undefined) {
			super.textSize = this.extractPropertyValue(this.native.getTextSize());
		}
		return super.textSize;
	}

	public override set textSize(value: ExpressionOrValue<number>) {
		super.textSize = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.textSize(this.expressionValueToNative(value)));
	}

	public override get textColor(): ExpressionOrValue<string | Color> {
		if (super.textColor === undefined) {
			super.textColor = this.extractPropertyValue(this.native.getTextColor());
		}
		return super.textColor;
	}

	public override set textColor(value: ExpressionOrValue<string | Color>) {
		super.textColor = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.textColor(this.expressionValueToNative(value)));
	}

	public override get textFontNames(): ExpressionOrValue<string[]> {
		if (super.textFontNames === undefined) {
			super.textFontNames = this.extractPropertyValue(this.native.getTextFont());
		}
		return super.textFontNames;
	}

	public override set textFontNames(value: ExpressionOrValue<string[]>) {
		let finalValue;

		super.textFontNames = value;

		if (Array.isArray(value)) {
			const length = value.length;
			const nativeArray = Array.create(java.lang.String, length);
			for (let i = 0; i < length; i++) {
				nativeArray[i] = value[i];
			}
			finalValue = nativeArray;
		} else {
			finalValue = this.expressionValueToNative(value);
		}
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.textFont(finalValue));
	}

	public override get filter(): Expression {
		if (super.filter === undefined) {
			super.filter = Expression.initWithNative(this.native.getFilter()) as Expression;
		}
		return super.filter;
	}

	public override set filter(value: Expression) {
		super.filter = value;
		this.native.setFilter(value?.native);
	}
}
