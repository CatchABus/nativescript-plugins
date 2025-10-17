import { Color } from '@nativescript/core';
import { ExpressionValueCommon } from './common';

export class ExpressionValue extends ExpressionValueCommon<org.maplibre.android.style.expressions.Expression> {
	public static get(key: string): ExpressionValue {
		return ExpressionValue.initWithNative(org.maplibre.android.style.expressions.Expression.get(key)) as ExpressionValue;
	}

	public static color(color: Color): ExpressionValue {
		return ExpressionValue.initWithNative(org.maplibre.android.style.expressions.Expression.color(color?.android)) as ExpressionValue;
	}

	public static literal(value: string | boolean | number | Array<any>): ExpressionValue {
		let native;

		if (typeof value === 'number') {
			native = java.lang.Float.valueOf(value);
		} else if (Array.isArray(value)) {
			const length = value.length;
			const nativeArray = Array.create(java.lang.Object, length) as androidNative.Array<any>;
			for (let i = 0; i < length; i++) {
				nativeArray[i] = value[i];
			}
			native = nativeArray;
		} else {
			native = value;
		}
		return ExpressionValue.initWithNative(org.maplibre.android.style.expressions.Expression.literal(native)) as ExpressionValue;
	}

	public static sum(numbers: ExpressionValue[]): ExpressionValue {
		let nativeArray: androidNative.Array<org.maplibre.android.style.expressions.Expression>;

		if (Array.isArray(numbers)) {
			const length = numbers.length;

			nativeArray = Array.create(org.maplibre.android.style.expressions.Expression, length);
			for (let i = 0; i < length; i++) {
				nativeArray[i] = numbers[i].native;
			}
		} else {
			nativeArray = Array.create(org.maplibre.android.style.expressions.Expression, 0);
		}
		return ExpressionValue.initWithNative(org.maplibre.android.style.expressions.Expression.sum(nativeArray)) as ExpressionValue;
	}
}
