import { BackgroundLayerCommon } from './common';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';

export class BackgroundLayer extends BackgroundLayerCommon<MLNBackgroundStyleLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): MLNBackgroundStyleLayer {
		return MLNBackgroundStyleLayer.alloc().initWithIdentifier(id);
	}

	public override get backgroundColor() {
		if (super.backgroundColor === undefined) {
			super.backgroundColor = (Expression.initWithNative(this.native.backgroundColor) as Expression).toJSON();
		}
		return super.backgroundColor;
	}

	public override set backgroundColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new NativeBoxedValue(new Color(value).ios) : value);

		super.backgroundColor = value;
		this.native.backgroundColor = expression?.native;
	}

	public override get backgroundOpacity() {
		if (super.backgroundOpacity === undefined) {
			super.backgroundOpacity = (Expression.initWithNative(this.native.backgroundOpacity) as Expression).toJSON();
		}
		return super.backgroundOpacity;
	}

	public override set backgroundOpacity(value) {
		const expression = Expression.propertyValue(value);

		super.backgroundOpacity = value;
		this.native.backgroundOpacity = expression?.native;
	}

	public override get backgroundPattern() {
		if (super.backgroundPattern === undefined) {
			super.backgroundPattern = (Expression.initWithNative(this.native.backgroundPattern) as Expression).toJSON();
		}
		return super.backgroundPattern;
	}

	public override set backgroundPattern(value) {
		const expression = Expression.propertyValue(value);

		super.backgroundPattern = value;
		this.native.backgroundPattern = expression?.native;
	}
}
