import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';

export class SymbolLayer extends SymbolLayerCommon<org.maplibre.android.style.layers.SymbolLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): org.maplibre.android.style.layers.SymbolLayer {
		return new org.maplibre.android.style.layers.SymbolLayer(id, source.getId());
	}

	public override get iconAllowsOverlap() {
		if (super.iconAllowsOverlap === undefined) {
			super.iconAllowsOverlap = this.native.getIconAllowOverlap().value.booleanValue();
		}
		return super.iconAllowsOverlap;
	}

	public override set iconAllowsOverlap(value) {
		super.iconAllowsOverlap = value;
	}

	public override get iconScale() {
		if (super.iconScale === undefined) {
			super.iconScale = this.native.getIconSize().value.floatValue();
		}
		return super.iconScale;
	}

	public override set iconScale(value) {
		super.iconScale = value;
	}

	public override get iconImageName() {
		if (super.iconImageName === undefined) {
			super.iconImageName = this.native.getIconImage().value;
		}
		return super.iconImageName;
	}

	public override set iconImageName(value) {
		super.iconImageName = value;
	}

	public override get iconOffset() {
		if (super.iconOffset === undefined) {
			const nativeArray = this.native.getIconOffset().value;
			const length = nativeArray?.length ?? 0;
			const result = new Array<number>(length);

			for (let i = 0; i < length; i++) {
				result[i] = nativeArray[i].floatValue();
			}

			super.iconOffset = result as [number, number];
		}
		return super.iconOffset;
	}

	public override set iconOffset(value) {
		super.iconOffset = value;
	}

	public override get text() {
		if (super.text === undefined) {
			super.text = this.native.getTextField().value.toString();
		}
		return super.text;
	}

	public override set text(value) {
		super.text = value;
	}

	public override get textAllowsOverlap() {
		if (super.textAllowsOverlap === undefined) {
			super.textAllowsOverlap = this.native.getTextAllowOverlap().value.booleanValue();
		}
		return super.textAllowsOverlap;
	}

	public override set textAllowsOverlap(value) {
		super.textAllowsOverlap = value;
	}

	public override get textSize() {
		if (super.textSize === undefined) {
			super.textSize = this.native.getTextSize().value.floatValue();
		}
		return super.textSize;
	}

	public override set textSize(value) {
		super.textSize = value;
	}

	public override get textColor() {
		if (super.textColor === undefined) {
			super.textColor = this.native.getTextColor().value;
		}
		return super.textColor;
	}

	public override set textColor(value) {
		super.textColor = value;
	}

	public override get textFontNames() {
		if (super.textFontNames === undefined) {
			const nativeArray = this.native.getTextFont().value;
			const length = nativeArray?.length ?? 0;
			const result = new Array<string>(length);

			for (let i = 0; i < length; i++) {
				result[i] = nativeArray[i];
			}

			super.textFontNames = result;
		}
		return super.textFontNames;
	}

	public override set textFontNames(value) {
		super.textFontNames = value;
	}
}
