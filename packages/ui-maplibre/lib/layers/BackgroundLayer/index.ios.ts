import { Color } from '@nativescript/core';
import { BackgroundLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';

export abstract class BackgroundLayer extends BackgroundLayerCommon<MLNBackgroundStyleLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): MLNBackgroundStyleLayer {
		return MLNBackgroundStyleLayer.alloc().initWithIdentifier(id);
	}

	public override get backgroundColor(): ExpressionOrValue<string | Color> {
		if (!super.backgroundColor && this.native.backgroundColor) {
			super.backgroundColor = this.extractPropertyValue(this.native.backgroundColor);
		}
		return super.backgroundColor;
	}

	public override set backgroundColor(value: ExpressionOrValue<string | Color>) {
		if (typeof value === 'string') {
			if (Color.isValid(value)) {
				super.backgroundColor = value;
				this.native.backgroundColor = this.expressionValueToNative(new Color(value));
			} else {
				super.backgroundColor = '#000000';
				this.native.backgroundColor = this.expressionValueToNative(new Color(super.backgroundColor));
			}
		} else {
			super.backgroundColor = value;
			this.native.backgroundColor = this.expressionValueToNative(value);
		}
	}

	public override get backgroundOpacity(): ExpressionOrValue<number> {
		if (!super.backgroundOpacity && this.native.backgroundOpacity) {
			super.backgroundOpacity = this.extractPropertyValue(this.native.backgroundOpacity);
		}
		return super.backgroundOpacity;
	}

	public override set backgroundOpacity(value: ExpressionOrValue<number>) {
		super.backgroundOpacity = value;
		this.native.backgroundOpacity = this.expressionValueToNative(value);
	}

	public override get backgroundPattern(): ExpressionOrValue<string> {
		if (!super.backgroundPattern && this.native.backgroundPattern) {
			super.backgroundPattern = this.extractPropertyValue(this.native.backgroundPattern);
		}
		return super.backgroundPattern;
	}

	public override set backgroundPattern(value: ExpressionOrValue<string>) {
		super.backgroundPattern = value;
		this.native.backgroundPattern = this.expressionValueToNative(value);
	}
}
