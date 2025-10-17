import { Color, Utils } from '@nativescript/core';
import { ExpressionValue } from '../../expressions/ExpressionValue';
import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override expressionValueToNative(value): any {
		let result;

		if (value instanceof ExpressionValue) {
			result = value.native;
		} else {
			result = NSExpression.expressionForConstantValue(value instanceof Color ? value.ios : value);
		}

		return result;
	}

	public override extractPropertyValue(expression: NSExpression) {
		let result;

		if (expression) {
			const value = expression.expressionValueWithObjectContext(null, null);

			if (value instanceof NSArray) {
				result = Utils.ios.collections.nsArrayToJSArray(value);
			} else if (value instanceof UIColor) {
				result = Color.fromIosColor(value);
			} else {
				result = value;
			}
		} else {
			result = null;
		}

		return result;
	}

	public override setWrappedPropertyValue(value: any): void {}

	public override get visible(): boolean {
		return this.native.visible;
	}

	public override set visible(value: boolean) {
		this.native.visible = value;
	}
}
