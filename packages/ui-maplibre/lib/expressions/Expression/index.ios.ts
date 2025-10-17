import { ExpressionValue } from '../ExpressionValue';
import { IExpressionCollator } from '../IExpressionCollator';
import { ExpressionCommon } from './common';

export class Expression extends ExpressionCommon<NSPredicate> {
	private static _compare(operatorType: NSPredicateOperatorType, compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): NSComparisonPredicate {
		const cp2 = compareTwo instanceof ExpressionValue ? compareTwo.native : NSExpression.expressionForConstantValue(compareTwo);
		let collatorOptions = 0;

		if (collator) {
			if (!collator.caseSensitive) {
				collatorOptions |= NSComparisonPredicateOptions.CaseInsensitivePredicateOption;
			}

			if (!collator.diacriticSensitive) {
				collatorOptions |= NSComparisonPredicateOptions.DiacriticInsensitivePredicateOption;
			}
		}

		const native = NSComparisonPredicate.alloc().initWithLeftExpressionRightExpressionModifierTypeOptions(compareOne?.native, cp2, NSComparisonPredicateModifier.DirectPredicateModifier, operatorType, collatorOptions);

		return native;
	}

	public static all(...items: Expression[]): Expression {
		const nativeItems = Array.isArray(items) ? items.map((item) => item.native) : [];
		const native = NSCompoundPredicate.alloc().initWithTypeSubpredicates(NSCompoundPredicateType.AndPredicateType, nativeItems);

		return Expression.initWithNative(native) as Expression;
	}

	public static has(key: string | ExpressionValue<any>): Expression {
		let native: NSPredicate;

		if (key instanceof ExpressionValue) {
			native = NSComparisonPredicate.alloc().initWithLeftExpressionRightExpressionModifierTypeOptions(key?.native, NSExpression.expressionForConstantValue(null), NSComparisonPredicateModifier.DirectPredicateModifier, NSPredicateOperatorType.NotEqualToPredicateOperatorType, 0 as number);
		} else {
			native = NSPredicate.predicateWithFormatArgumentArray(`${key} != nil`, null);
		}
		return Expression.initWithNative(native) as Expression;
	}

	public static gt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.GreaterThanPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}

	public static gte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.GreaterThanOrEqualToPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}

	public static lt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.LessThanPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}

	public static lte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.LessThanOrEqualToPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}

	public static eq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.EqualToPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}

	public static neq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression {
		return Expression.initWithNative(this._compare(NSPredicateOperatorType.NotEqualToPredicateOperatorType, compareOne, compareTwo, collator)) as Expression;
	}
}
