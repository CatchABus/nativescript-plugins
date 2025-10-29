import { Color } from '@nativescript/core';
import { ExpressionOrValue } from '../BaseLayer';
import { CircleLayer as ICircleLayer } from '.';
import { AbstractVectorLayer } from '../AbstractVectorLayer';

export abstract class CircleLayerCommon<T> extends AbstractVectorLayer<T> implements ICircleLayer {
	private mCircleColor: ExpressionOrValue<string | Color>;
	private mCircleRadius: ExpressionOrValue<number>;

	public get circleColor(): ExpressionOrValue<string | Color> {
		return this.mCircleColor;
	}

	public set circleColor(value: ExpressionOrValue<string | Color>) {
		this.mCircleColor = value;
	}

	public get circleRadius(): ExpressionOrValue<number> {
		return this.mCircleRadius;
	}

	public set circleRadius(value: ExpressionOrValue<number>) {
		this.mCircleRadius = value;
	}
}
