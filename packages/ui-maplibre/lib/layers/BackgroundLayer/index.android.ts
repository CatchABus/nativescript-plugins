import { Color } from '@nativescript/core';
import { BackgroundLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';

export abstract class BackgroundLayer extends BackgroundLayerCommon<org.maplibre.android.style.layers.BackgroundLayer> {
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
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.backgroundPattern(this.expressionValueToNative(value)));
	}
}
