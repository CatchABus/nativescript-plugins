import { Color } from '@nativescript/core';
import { BackgroundLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';
import { ExpressionValue } from '../../expressions';

export class BackgroundLayer extends BackgroundLayerCommon<org.maplibre.android.style.layers.BackgroundLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): org.maplibre.android.style.layers.BackgroundLayer {
		return new org.maplibre.android.style.layers.BackgroundLayer(id);
	}

	public override get backgroundColor(): ExpressionOrValue<string | Color> {
		if (!super.backgroundColor) {
			super.backgroundColor = this.extractPropertyValue(this.native.getBackgroundColor());
		}
		return super.backgroundColor;
	}

	public override set backgroundColor(value: ExpressionOrValue<string | Color>) {
		super.backgroundColor = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.backgroundColor(this.expressionValueToNative(value)));
	}

	public override get backgroundOpacity(): ExpressionOrValue<number> {
		if (!super.backgroundOpacity) {
			super.backgroundOpacity = this.extractPropertyValue(this.native.getBackgroundOpacity());
		}
		return super.backgroundOpacity;
	}

	public override set backgroundOpacity(value: ExpressionOrValue<number>) {
		super.backgroundOpacity = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.backgroundOpacity(this.expressionValueToNative(value)));
	}

	public override get backgroundPattern(): ExpressionOrValue<string> {
		if (!super.backgroundPattern) {
			super.backgroundPattern = this.extractPropertyValue(this.native.getBackgroundPattern());
		}
		return super.backgroundPattern;
	}

	public override set backgroundPattern(value: ExpressionOrValue<string>) {
		super.backgroundPattern = value;

		let nativeValue;

		if (value instanceof ExpressionValue) {
			nativeValue = org.maplibre.android.style.expressions.Expression.image(value.native);
		} else {
			nativeValue = this.expressionValueToNative(value);
		}

		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.backgroundPattern(nativeValue));
	}
}
