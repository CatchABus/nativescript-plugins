import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';

export class SymbolLayer extends SymbolLayerCommon<MLNSymbolStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNSymbolStyleLayer {
		return MLNSymbolStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get iconAllowsOverlap() {
		return this.getOrSetPropertyValueInternal('icon-allow-overlap', () => (Expression.initWithNative(this.native.iconAllowsOverlap) as Expression).toJSON());
	}

	public override set iconAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);

		super.iconAllowsOverlap = value;
		this.native.iconAllowsOverlap = expression?.native;
	}

	public override get iconScale() {
		return this.getOrSetPropertyValueInternal('icon-size', () => (Expression.initWithNative(this.native.iconScale) as Expression).toJSON());
	}

	public override set iconScale(value) {
		const expression = Expression.propertyValue(value);

		super.iconScale = value;
		this.native.iconScale = expression?.native;
	}

	public override get iconImageName() {
		return this.getOrSetPropertyValueInternal('icon-image', () => (Expression.initWithNative(this.native.iconImageName) as Expression).toJSON());
	}

	public override set iconImageName(value) {
		const expression = Expression.propertyValue(value);

		super.iconImageName = value;
		this.native.iconImageName = expression?.native;
	}

	public override get iconOffset() {
		return this.getOrSetPropertyValueInternal('icon-offset', () => (Expression.initWithNative(this.native.iconOffset) as Expression).toJSON());
	}

	public override set iconOffset(value) {
		let finalValue;

		if (Array.isArray(value) && typeof value[0] === 'number' && typeof value[1] === 'number') {
			finalValue = new NativeBoxedValue(
				NSValue.valueWithCGVector(
					new CGVector({
						dx: value[0],
						dy: value[1],
					})
				)
			);
		} else {
			finalValue = value;
		}
		const expression = Expression.propertyValue(finalValue);

		super.iconOffset = value;
		this.native.iconOffset = expression?.native;
	}

	public override get text() {
		return this.getOrSetPropertyValueInternal('text-field', () => (Expression.initWithNative(this.native.text) as Expression).toJSON());
	}

	public override set text(value) {
		const expression = Expression.propertyValue(value);

		super.text = value;
		this.native.text = expression?.native;
	}

	public override get textAllowsOverlap() {
		return this.getOrSetPropertyValueInternal('text-allow-overlap', () => (Expression.initWithNative(this.native.textAllowsOverlap) as Expression).toJSON());
	}

	public override set textAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);

		super.textAllowsOverlap = value;
		this.native.textAllowsOverlap = expression?.native;
	}

	public override get textSize() {
		return this.getOrSetPropertyValueInternal('text-size', () => (Expression.initWithNative(this.native.textFontSize) as Expression).toJSON());
	}

	public override set textSize(value) {
		const expression = Expression.propertyValue(value);

		super.textSize = value;
		this.native.textFontSize = expression?.native;
	}

	public override get textColor() {
		return this.getOrSetPropertyValueInternal('text-color', () => (Expression.initWithNative(this.native.textColor) as Expression).toJSON());
	}

	public override set textColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new NativeBoxedValue(new Color(value).ios) : value);

		super.textColor = value;
		this.native.textColor = expression?.native;
	}

	public override get textFontNames() {
		return this.getOrSetPropertyValueInternal('text-font', () => (Expression.initWithNative(this.native.textFontNames) as Expression).toJSON());
	}

	public override set textFontNames(value) {
		const expression = Expression.propertyValue(value);

		super.textFontNames = value;
		this.native.textFontNames = expression?.native;
	}
}
