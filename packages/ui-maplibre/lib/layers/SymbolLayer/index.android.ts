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
		return this.getOrSetPropertyValueInternal('icon-allow-overlap', () => this.native.getIconAllowOverlap().value?.booleanValue?.());
	}

	public override set iconAllowsOverlap(value) {
		super.iconAllowsOverlap = value;
	}

	public override get iconScale() {
		return this.getOrSetPropertyValueInternal('icon-size', () => this.native.getIconSize().value?.floatValue?.());
	}

	public override set iconScale(value) {
		super.iconScale = value;
	}

	public override get iconImageName() {
		return this.getOrSetPropertyValueInternal('icon-image', () => this.native.getIconImage().value);
	}

	public override set iconImageName(value) {
		super.iconImageName = value;
	}

	public override get iconOffset() {
		return this.getOrSetPropertyValueInternal('icon-offset', () => {
			const nativeArray = this.native.getIconOffset().value;
			const length = nativeArray?.length ?? 0;
			const result = new Array<number>(length);

			for (let i = 0; i < length; i++) {
				result[i] = nativeArray[i].floatValue();
			}

			return result;
		});
	}

	public override set iconOffset(value) {
		super.iconOffset = value;
	}

	public override get text() {
		return this.getOrSetPropertyValueInternal('text-field', () => this.native.getTextField().value?.toString?.());
	}

	public override set text(value) {
		super.text = value;
	}

	public override get textAllowsOverlap() {
		return this.getOrSetPropertyValueInternal('text-allow-overlap', () => this.native.getTextAllowOverlap().value?.booleanValue?.());
	}

	public override set textAllowsOverlap(value) {
		super.textAllowsOverlap = value;
	}

	public override get textSize() {
		return this.getOrSetPropertyValueInternal('text-size', () => this.native.getTextSize().value?.floatValue?.());
	}

	public override set textSize(value) {
		super.textSize = value;
	}

	public override get textColor() {
		return this.getOrSetPropertyValueInternal('text-color', () => this.native.getTextColor().value);
	}

	public override set textColor(value) {
		super.textColor = value;
	}

	public override get textFontNames() {
		return this.getOrSetPropertyValueInternal('text-font', () => {
			const nativeArray = this.native.getTextFont().value;
			const length = nativeArray?.length ?? 0;
			const result = new Array<string>(length);

			for (let i = 0; i < length; i++) {
				result[i] = nativeArray[i];
			}

			return result;
		});
	}

	public override set textFontNames(value) {
		super.textFontNames = value;
	}
}
