import { FillExtrusionLayerCommon } from './common';
import { BaseSource } from '../../sources';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';
import { LayerType } from '../LayerManager';

@LayerType('fill-extrusion')
export class FillExtrusionLayer extends FillExtrusionLayerCommon<MLNFillExtrusionStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNFillExtrusionStyleLayer {
		return MLNFillExtrusionStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get fillExtrusionColor() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-color', () => (Expression.initWithNative(this.native.fillExtrusionColor) as Expression).toJSON());
	}

	public override set fillExtrusionColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new NativeBoxedValue(new Color(value).ios) : value);

		super.fillExtrusionColor = value;
		this.native.fillExtrusionColor = expression?.native;
	}

	public override get fillExtrusionHeight() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-height', () => (Expression.initWithNative(this.native.fillExtrusionHeight) as Expression).toJSON());
	}

	public override set fillExtrusionHeight(value) {
		const expression = Expression.propertyValue(value);

		super.fillExtrusionHeight = value;
		this.native.fillExtrusionHeight = expression?.native;
	}

	public override get fillExtrusionBase() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-base', () => (Expression.initWithNative(this.native.fillExtrusionBase) as Expression).toJSON());
	}

	public override set fillExtrusionBase(value) {
		const expression = Expression.propertyValue(value);

		super.fillExtrusionBase = value;
		this.native.fillExtrusionBase = expression?.native;
	}

	public override get fillExtrusionOpacity() {
		return this.getOrSetPropertyValueInternal('fill-extrusion-opacity', () => (Expression.initWithNative(this.native.fillExtrusionOpacity) as Expression).toJSON());
	}

	public override set fillExtrusionOpacity(value) {
		const expression = Expression.propertyValue(value);

		super.fillExtrusionOpacity = value;
		this.native.fillExtrusionOpacity = expression?.native;
	}
}
