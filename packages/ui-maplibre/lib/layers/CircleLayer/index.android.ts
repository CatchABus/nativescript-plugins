import { Color } from '@nativescript/core';
import { ExpressionOrValue } from '../BaseLayer';
import { CircleLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../expressions/Expression';

export abstract class CircleLayer extends CircleLayerCommon<org.maplibre.android.style.layers.CircleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.CircleLayer {
		return new org.maplibre.android.style.layers.CircleLayer(id, source.getId());
	}

	public override get circleColor(): ExpressionOrValue<string | Color> {
		if (!super.circleColor) {
			super.circleColor = this.extractPropertyValue(this.native.getCircleColor());
		}
		return super.circleColor;
	}

	public override set circleColor(value: ExpressionOrValue<string | Color>) {
		super.circleColor = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.circleColor(this.expressionValueToNative(value)));
	}

	public override get circleRadius(): ExpressionOrValue<number> {
		if (!super.circleRadius) {
			super.circleRadius = this.extractPropertyValue(this.native.getCircleRadius());
		}
		return super.circleRadius;
	}

	public override set circleRadius(value: ExpressionOrValue<number>) {
		super.circleRadius = value;
		this.setWrappedPropertyValue(org.maplibre.android.style.layers.PropertyFactory.circleRadius(this.expressionValueToNative(value)));
	}

	public override get filter(): Expression {
		if (super.filter === undefined) {
			super.filter = Expression.initWithNative(this.native.getFilter()) as Expression;
		}
		return super.filter;
	}

	public override set filter(value: Expression) {
		super.filter = value;
		this.native.setFilter(value?.native);
	}
}
