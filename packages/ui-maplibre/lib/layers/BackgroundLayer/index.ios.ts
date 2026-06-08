import { BackgroundLayerCommon } from './common';
import { Expression } from '../../Expression';
import { LayerType } from '../LayerManager';

@LayerType('background')
export class BackgroundLayer extends BackgroundLayerCommon<MLNBackgroundStyleLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): MLNBackgroundStyleLayer {
		return MLNBackgroundStyleLayer.alloc().initWithIdentifier(id);
	}

	public get_native_backgroundColor() {
		return (Expression.initWithNative(this.native.backgroundColor) as Expression).toJSON();
	}

	public set_native_backgroundColor(value) {
		this.native.backgroundColor = Expression.colorValue(value)?.native;
	}

	public get_native_backgroundOpacity() {
		return (Expression.initWithNative(this.native.backgroundOpacity) as Expression).toJSON();
	}

	public set_native_backgroundOpacity(value) {
		const expression = Expression.propertyValue(value);
		this.native.backgroundOpacity = expression?.native;
	}

	public get_native_backgroundPattern() {
		return (Expression.initWithNative(this.native.backgroundPattern) as Expression).toJSON();
	}

	public set_native_backgroundPattern(value) {
		const expression = Expression.propertyValue(value);
		this.native.backgroundPattern = expression?.native;
	}
}
