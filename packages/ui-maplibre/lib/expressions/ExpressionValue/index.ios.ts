import { Color } from '@nativescript/core';
import { ExpressionValueCommon } from './common';

export class ExpressionValue extends ExpressionValueCommon<NSExpression> {
	public static get(key: string): ExpressionValue {
		return ExpressionValue.initWithNative(NSExpression.expressionForKeyPath(key)) as ExpressionValue;
	}

	public static color(color: Color): ExpressionValue {
		return ExpressionValue.initWithNative(NSExpression.expressionForConstantValue(color?.ios)) as ExpressionValue;
	}

	public static literal(value: string | boolean | number | Array<any>): ExpressionValue {
		return ExpressionValue.initWithNative(NSExpression.expressionForConstantValue(value)) as ExpressionValue;
	}

	public static sum(numbers: ExpressionValue[]): ExpressionValue {
		return ExpressionValue.initWithNative(NSExpression.expressionForFunctionArguments('sum:', numbers)) as ExpressionValue;
	}
}
