import { LineLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';
import { LayerType } from '../LayerManager';

@LayerType('line')
export class LineLayer extends LineLayerCommon<MLNLineStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNLineStyleLayer {
		return MLNLineStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get lineColor() {
		return this.getOrSetPropertyValueInternal('line-color', () => (Expression.initWithNative(this.native.lineColor) as Expression).toJSON());
	}

	public override set lineColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new NativeBoxedValue(new Color(value).ios) : value);

		super.lineColor = value;
		this.native.lineColor = expression?.native;
	}

	public override get lineWidth() {
		return this.getOrSetPropertyValueInternal('line-width', () => (Expression.initWithNative(this.native.lineWidth) as Expression).toJSON());
	}

	public override set lineWidth(value) {
		const expression = Expression.propertyValue(value);

		super.lineWidth = value;
		this.native.lineWidth = expression?.native;
	}

	public override get lineOpacity() {
		return this.getOrSetPropertyValueInternal('line-opacity', () => (Expression.initWithNative(this.native.lineOpacity) as Expression).toJSON());
	}

	public override set lineOpacity(value) {
		const expression = Expression.propertyValue(value);

		super.lineOpacity = value;
		this.native.lineOpacity = expression?.native;
	}
}
