import { BackgroundLayerCommon } from './common';

export class BackgroundLayer extends BackgroundLayerCommon<org.maplibre.android.style.layers.BackgroundLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): org.maplibre.android.style.layers.BackgroundLayer {
		return new org.maplibre.android.style.layers.BackgroundLayer(id);
	}

	public override get backgroundColor() {
		return this.getOrSetPropertyValueInternal('background-color', () => this.native.getBackgroundColor().value);
	}

	public override set backgroundColor(value) {
		super.backgroundColor = value;
	}

	public override get backgroundOpacity() {
		return this.getOrSetPropertyValueInternal('background-opacity', () => this.native.getBackgroundOpacity().value);
	}

	public override set backgroundOpacity(value) {
		super.backgroundOpacity = value;
	}

	public override get backgroundPattern() {
		return this.getOrSetPropertyValueInternal('background-pattern', () => this.native.getBackgroundPattern().value);
	}

	public override set backgroundPattern(value) {
		super.backgroundPattern = value;
	}
}
