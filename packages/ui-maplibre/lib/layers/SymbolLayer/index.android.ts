import { BaseSource } from '../../sources/BaseSource';
import { LayerType } from '../LayerManager';
import { SymbolLayerCommon } from './common';

@LayerType('symbol')
export class SymbolLayer extends SymbolLayerCommon<org.maplibre.android.style.layers.SymbolLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.SymbolLayer {
		return new org.maplibre.android.style.layers.SymbolLayer(id, source.getId());
	}

	public get_native_iconAllowsOverlap() {
		return this.native.getIconAllowOverlap().value?.booleanValue?.();
	}

	public get_native_iconScale() {
		return this.native.getIconSize().value?.floatValue?.();
	}

	public get_native_iconImageName() {
		return this.native.getIconImage().value;
	}

	public get_native_iconOffset() {
		const nativeArray = this.native.getIconOffset().value;
		const length = nativeArray?.length ?? 0;
		const result = new Array<number>(length);

		for (let i = 0; i < length; i++) {
			result[i] = nativeArray[i].floatValue();
		}

		return result;
	}

	public get_native_text() {
		return this.native.getTextField().value?.toString?.();
	}

	public get_native_textAllowsOverlap() {
		return this.native.getTextAllowOverlap().value?.booleanValue?.();
	}

	public get_native_textSize() {
		return this.native.getTextSize().value?.floatValue?.();
	}

	public get_native_textColor() {
		return this.native.getTextColor().value;
	}

	public get_native_textFontNames() {
		const nativeArray = this.native.getTextFont().value;
		const length = nativeArray?.length ?? 0;
		const result = new Array<string>(length);

		for (let i = 0; i < length; i++) {
			result[i] = nativeArray[i];
		}

		return result;
	}
}
