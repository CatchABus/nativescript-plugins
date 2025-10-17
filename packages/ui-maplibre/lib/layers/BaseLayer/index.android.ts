import { Color } from '@nativescript/core';
import { ExpressionValue } from '../../expressions/ExpressionValue';
import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends org.maplibre.android.style.layers.Layer> extends BaseLayerCommon<T> {
	private mNativeExpPropArray: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>;

	private get nativePropsArray() {
		if (!this.mNativeExpPropArray) {
			this.mNativeExpPropArray = Array.create(org.maplibre.android.style.layers.PropertyValue, 1);
		}
		return this.mNativeExpPropArray;
	}

	public override getId(): string {
		return this.native.getId();
	}

	public override expressionValueToNative(value): any {
		let result;

		if (value instanceof ExpressionValue) {
			result = value.native;
		} else if (value instanceof Color) {
			result = value.android;
		} else if (typeof value === 'number') {
			result = java.lang.Float.valueOf(value);
		} else if (typeof value === 'boolean') {
			result = java.lang.Boolean.valueOf(value);
		} else {
			result = value;
		}

		return result;
	}

	public override extractPropertyValue(value: org.maplibre.android.style.layers.PropertyValue<any>) {
		let result;

		if (value.isExpression()) {
			result = ExpressionValue.initWithNative(value.getExpression());
		} else if (value.isValue()) {
			result = value.getValue();
		} else {
			result = null;
		}

		return result;
	}

	public override setWrappedPropertyValue(value: org.maplibre.android.style.layers.PropertyValue<any>): void {
		this.nativePropsArray[0] = value;
		this.native.setProperties(this.nativePropsArray);
	}

	public override get visible(): boolean {
		if (!super.visible) {
			super.visible = this.extractPropertyValue(this.native.getVisibility()) === 'visible';
		}
		return super.visible;
	}

	public override set visible(value: boolean) {
		super.visible = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.visibility(value ? 'visible' : 'none'));
	}
}
