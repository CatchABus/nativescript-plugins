import { Color } from '@nativescript/core';
import { CircleLayerCommon } from './common';
import { ExpressionOrValue } from '../BaseLayer';
import { BaseSource } from '../../sources';
import { Expression } from '../../expressions/Expression';

export abstract class CircleLayer extends CircleLayerCommon<MLNCircleStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNCircleStyleLayer {
		return MLNCircleStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get circleColor(): ExpressionOrValue<string | Color> {
		if (!super.circleColor && this.native.circleColor) {
			super.circleColor = this.extractPropertyValue(this.native.circleColor);
		}
		return super.circleColor;
	}

	public override set circleColor(value: ExpressionOrValue<string | Color>) {
		if (typeof value === 'string') {
			if (Color.isValid(value)) {
				super.circleColor = value;
				this.native.circleColor = this.expressionValueToNative(new Color(value));
			} else {
				super.circleColor = '#000000';
				this.native.circleColor = this.expressionValueToNative(new Color(super.circleColor));
			}
		} else {
			super.circleColor = value;
			this.native.circleColor = this.expressionValueToNative(value);
		}
	}

	public override get circleRadius(): ExpressionOrValue<number> {
		if (!super.circleRadius && this.native.circleRadius) {
			super.circleRadius = this.extractPropertyValue(this.native.circleRadius);
		}
		return super.circleRadius;
	}

	public override set circleRadius(value: ExpressionOrValue<number>) {
		super.circleRadius = value;
		this.native.circleRadius = this.expressionValueToNative(value);
	}

	public override get filter(): Expression {
		if (super.filter === undefined) {
			super.filter = Expression.initWithNative(this.native.predicate) as Expression;
		}
		return super.filter;
	}

	public override set filter(value: Expression) {
		super.filter = value;
		this.native.predicate = value?.native;
	}
}
