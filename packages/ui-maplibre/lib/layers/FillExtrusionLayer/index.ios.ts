import { FillExtrusionLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { LayerType } from '../LayerManager';

@LayerType('fill-extrusion')
export class FillExtrusionLayer extends FillExtrusionLayerCommon<MLNFillExtrusionStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNFillExtrusionStyleLayer {
		return MLNFillExtrusionStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public get_native_fillExtrusionColor() {
		return (Expression.initWithNative(this.native.fillExtrusionColor) as Expression).toJSON();
	}

	public set_native_fillExtrusionColor(value) {
		this.native.fillExtrusionColor = Expression.colorValue(value)?.native;
	}

	public get_native_fillExtrusionHeight() {
		return (Expression.initWithNative(this.native.fillExtrusionHeight) as Expression).toJSON();
	}

	public set_native_fillExtrusionHeight(value) {
		const expression = Expression.propertyValue(value);
		this.native.fillExtrusionHeight = expression?.native;
	}

	public get_native_fillExtrusionBase() {
		return (Expression.initWithNative(this.native.fillExtrusionBase) as Expression).toJSON();
	}

	public set_native_fillExtrusionBase(value) {
		const expression = Expression.propertyValue(value);
		this.native.fillExtrusionBase = expression?.native;
	}

	public get_native_fillExtrusionOpacity() {
		return (Expression.initWithNative(this.native.fillExtrusionOpacity) as Expression).toJSON();
	}

	public set_native_fillExtrusionOpacity(value) {
		const expression = Expression.propertyValue(value);
		this.native.fillExtrusionOpacity = expression?.native;
	}
}
