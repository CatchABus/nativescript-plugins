import { CircleLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';

export class CircleLayer extends CircleLayerCommon<MLNCircleStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNCircleStyleLayer {
		return MLNCircleStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get circleColor() {
		if (super.circleColor === undefined) {
			super.circleColor = (Expression.initWithNative(this.native.circleColor) as Expression).toJSON();
		}
		return super.circleColor;
	}

	public override set circleColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new NativeBoxedValue(new Color(value).ios) : value);

		super.circleColor = value;
		this.native.circleColor = expression?.native;
	}

	public override get circleRadius() {
		if (super.circleRadius === undefined) {
			super.circleRadius = (Expression.initWithNative(this.native.circleRadius) as Expression).toJSON();
		}
		return super.circleRadius;
	}

	public override set circleRadius(value) {
		const expression = Expression.propertyValue(value);

		super.circleRadius = value;
		this.native.circleRadius = expression?.native;
	}
}
