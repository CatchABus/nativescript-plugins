import { LineLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { LayerType } from '../LayerManager';

@LayerType('line')
export class LineLayer extends LineLayerCommon<MLNLineStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNLineStyleLayer {
		return MLNLineStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public get_native_lineColor() {
		return (Expression.initWithNative(this.native.lineColor) as Expression).toJSON();
	}

	public set_native_lineColor(value) {
		this.native.lineColor = Expression.colorValue(value)?.native;
	}

	public get_native_lineWidth() {
		return (Expression.initWithNative(this.native.lineWidth) as Expression).toJSON();
	}

	public set_native_lineWidth(value) {
		const expression = Expression.propertyValue(value);
		this.native.lineWidth = expression?.native;
	}

	public get_native_lineOpacity() {
		return (Expression.initWithNative(this.native.lineOpacity) as Expression).toJSON();
	}

	public set_native_lineOpacity(value) {
		const expression = Expression.propertyValue(value);
		this.native.lineOpacity = expression?.native;
	}
}
