import { Utils } from '@nativescript/core';
import { ExpressionValue } from '../ExpressionValue';
import { ExpressionCommon } from './common';
import { IExpressionCollator } from '../IExpressionCollator';

export class Expression extends ExpressionCommon<org.maplibre.android.style.expressions.Expression> {
	public static all(...items: Expression[]): Expression {
		const length = Array.isArray(items) ? items.length : 0;
		const arr = Array.create(org.maplibre.android.style.expressions.Expression, length) as androidNative.Array<org.maplibre.android.style.expressions.Expression>;

		for (let i = 0; i < length; i++) {
			arr[i] = items[i]?.native;
		}

		return Expression.initWithNative(org.maplibre.android.style.expressions.Expression.all(arr)) as Expression;
	}

	public static has(key: string | ExpressionValue<any>): Expression {
		return Expression.initWithNative(org.maplibre.android.style.expressions.Expression.has(key instanceof ExpressionValue ? key.native : key)) as Expression;
	}

	public static gt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.gt(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.gt(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}

	public static gte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.gte(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.gte(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}

	public static lt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.lt(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.lt(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}

	public static lte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.lte(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.lte(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}

	public static eq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.eq(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.eq(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}

	public static neq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : Utils.dataSerialize(compareTwo);
		const collatorNative = collator ? org.maplibre.android.style.expressions.Expression.collator(!!collator.caseSensitive, !!collator.diacriticSensitive) : null;
		const native = collatorNative ? org.maplibre.android.style.expressions.Expression.neq(compareOne.native, cp2, collatorNative) : org.maplibre.android.style.expressions.Expression.neq(compareOne.native, cp2);
		return Expression.initWithNative(native) as Expression;
	}
}
