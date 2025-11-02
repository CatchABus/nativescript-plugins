import { ExpressionCommon } from './common';
import { DataDrivenPropertyValueSpecification, ExpressionFilterSpecification, ExpressionSpecification, PropertyValuePrimitive, PropertyValueSpecification } from '.';
import { NativeBoxedValue } from '../nativeWrappers/NativeBoxedValue';

export class Expression extends ExpressionCommon<NSExpression | NSPredicate> {
	public static propertyValue<T extends PropertyValuePrimitive>(value: NativeBoxedValue | PropertyValueSpecification<T> | DataDrivenPropertyValueSpecification<T>): Expression {
		if (value == null) {
			return null;
		}

		let native: NSExpression;

		if (Array.isArray(value)) {
			native = NSExpression.expressionWithMLNJSONObject(value);
		} else {
			native = NSExpression.expressionForConstantValue(value instanceof NativeBoxedValue ? value.native : value);
		}
		return Expression.initWithNative(native) as Expression;
	}

	public static filter(filter: ExpressionFilterSpecification): Expression {
		if (filter == null) {
			return null;
		}

		let native: NSPredicate;

		if (Array.isArray(filter)) {
			native = NSPredicate.predicateWithMLNJSONObject(filter);
		} else {
			native = NSComparisonPredicate.alloc().initWithLeftExpressionRightExpressionModifierTypeOptions(NSExpression.expressionForConstantValue(filter), NSExpression.expressionForConstantValue(true), NSComparisonPredicateModifier.DirectPredicateModifier, NSPredicateOperatorType.EqualToPredicateOperatorType, 0 as number);
		}
		return Expression.initWithNative(native) as Expression;
	}

	public toJSON(): ExpressionSpecification {
		if (!this.mJson && this.native?.mgl_jsonExpressionObject) {
			const data = NSJSONSerialization.dataWithJSONObjectOptionsError(this.native.mgl_jsonExpressionObject, 0 as number);
			const json = NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding).toString();
			this.mJson = JSON.parse(json);
		}
		return this.mJson;
	}
}
