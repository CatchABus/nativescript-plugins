import { CircleLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { LayerType } from '../LayerManager';

@LayerType('circle')
export class CircleLayer extends CircleLayerCommon<MLNCircleStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNCircleStyleLayer {
		return MLNCircleStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public get_native_circleColor() {
		return (Expression.initWithNative(this.native.circleColor) as Expression).toJSON();
	}

	public set_native_circleColor(value) {
		this.native.circleColor = Expression.colorValue(value)?.native;
	}

	public get_native_circleRadius() {
		return (Expression.initWithNative(this.native.circleRadius) as Expression).toJSON();
	}

	public set_native_circleRadius(value) {
		const expression = Expression.propertyValue(value);
		this.native.circleRadius = expression?.native;
	}
}
