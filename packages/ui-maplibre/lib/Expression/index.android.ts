import { ExpressionCommon } from './common';
import { DataDrivenPropertyValueSpecification, ExpressionFilterSpecification, ExpressionSpecification, PropertyValuePrimitive, PropertyValueSpecification } from '.';
import { NativeBoxedValue } from '../nativeWrappers/NativeBoxedValue';
import { Utils } from '@nativescript/core';

export class Expression extends ExpressionCommon<org.maplibre.android.style.expressions.Expression> {
	public static propertyValue<T extends PropertyValuePrimitive>(value: NativeBoxedValue | PropertyValueSpecification<T> | DataDrivenPropertyValueSpecification<T>): Expression {
		if (value == null) {
			return null;
		}

		let native: org.maplibre.android.style.expressions.Expression;

		if (Array.isArray(value)) {
			// When it comes to expressions, the first array value is always a string
			if (typeof value[0] === 'string') {
				native = org.maplibre.android.style.expressions.Expression.raw(JSON.stringify(value));
			} else {
				const length = value.length;
				const nativeArray = Array.create(java.lang.Object, length);

				for (let i = 0; i < length; i++) {
					nativeArray[i] = Utils.dataSerialize(value[i]);
				}

				native = org.maplibre.android.style.expressions.Expression.literal(nativeArray);
			}
		} else {
			let nativeValue;

			if (value instanceof NativeBoxedValue) {
				nativeValue = value.native;
			} else if (typeof value === 'number') {
				nativeValue = java.lang.Float.valueOf(value);
			} else {
				nativeValue = value;
			}

			native = org.maplibre.android.style.expressions.Expression.literal(nativeValue);
		}
		return Expression.initWithNative(native) as Expression;
	}

	public static filter(filter: ExpressionFilterSpecification): Expression {
		if (filter == null) {
			return null;
		}

		let native: org.maplibre.android.style.expressions.Expression;

		if (Array.isArray(filter)) {
			native = org.maplibre.android.style.expressions.Expression.raw(JSON.stringify(filter));
		} else {
			native = org.maplibre.android.style.expressions.Expression.literal(filter);
		}
		return Expression.initWithNative(native) as Expression;
	}

	public toJSON(): ExpressionSpecification {
		if (!this.mJson && this.native) {
			this.mJson = JSON.parse(this.native.toString());
		}
		return this.mJson;
	}
}
