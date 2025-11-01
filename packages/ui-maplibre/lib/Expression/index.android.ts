import { ExpressionCommon } from './common';
import { DataDrivenPropertyValueSpecification, ExpressionFilterSpecification, ExpressionSpecification, PropertyValuePrimitive, PropertyValueSpecification } from '.';
import { Color } from '@nativescript/core';

export class Expression extends ExpressionCommon<org.maplibre.android.style.expressions.Expression> {
	public static propertyValue<T extends PropertyValuePrimitive>(value: PropertyValueSpecification<T> | DataDrivenPropertyValueSpecification<T> | Color): Expression {
		if (value == null) {
			return null;
		}

		let native: org.maplibre.android.style.expressions.Expression;

		if (Array.isArray(value)) {
			native = org.maplibre.android.style.expressions.Expression.raw(JSON.stringify(value));
		} else {
			let nativeValue;

			if (typeof value === 'number') {
				nativeValue = java.lang.Float.valueOf(value);
			} else if (typeof value === 'boolean') {
				nativeValue = new java.lang.Boolean(value);
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
