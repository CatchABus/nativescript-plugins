import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';
import { Expression } from '../../Expression';
import { NativeBoxedValue } from '../../nativeWrappers/NativeBoxedValue';
import { LayerType } from '../LayerManager';

@LayerType('symbol')
export class SymbolLayer extends SymbolLayerCommon<MLNSymbolStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNSymbolStyleLayer {
		return MLNSymbolStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public get_native_iconAllowsOverlap() {
		return (Expression.initWithNative(this.native.iconAllowsOverlap) as Expression).toJSON();
	}

	public set_native_iconAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);
		this.native.iconAllowsOverlap = expression?.native;
	}

	public get_native_iconScale() {
		return (Expression.initWithNative(this.native.iconScale) as Expression).toJSON();
	}

	public set_native_iconScale(value) {
		const expression = Expression.propertyValue(value);
		this.native.iconScale = expression?.native;
	}

	public get_native_iconImageName() {
		return (Expression.initWithNative(this.native.iconImageName) as Expression).toJSON();
	}

	public set_native_iconImageName(value) {
		const expression = Expression.propertyValue(value);
		this.native.iconImageName = expression?.native;
	}

	public get_native_iconOffset() {
		return (Expression.initWithNative(this.native.iconOffset) as Expression).toJSON();
	}

	public set_native_iconOffset(value) {
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

		this.native.iconOffset = expression?.native;
	}

	public get_native_text() {
		return (Expression.initWithNative(this.native.text) as Expression).toJSON();
	}

	public set_native_text(value) {
		const expression = Expression.propertyValue(value);
		this.native.text = expression?.native;
	}

	public get_native_textAllowsOverlap() {
		return (Expression.initWithNative(this.native.textAllowsOverlap) as Expression).toJSON();
	}

	public set_native_textAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);
		this.native.textAllowsOverlap = expression?.native;
	}

	public get_native_textSize() {
		return (Expression.initWithNative(this.native.textFontSize) as Expression).toJSON();
	}

	public set_native_textSize(value) {
		const expression = Expression.propertyValue(value);
		this.native.textFontSize = expression?.native;
	}

	public get_native_textColor() {
		return (Expression.initWithNative(this.native.textColor) as Expression).toJSON();
	}

	public set_native_textColor(value) {
		this.native.textColor = Expression.colorValue(value)?.native;
	}

	public get_native_textFontNames() {
		return (Expression.initWithNative(this.native.textFontNames) as Expression).toJSON();
	}

	public set_native_textFontNames(value) {
		const expression = Expression.propertyValue(value);
		this.native.textFontNames = expression?.native;
	}
}
