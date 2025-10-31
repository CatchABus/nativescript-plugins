import { BackgroundLayerCommon } from './common';

export class BackgroundLayer extends BackgroundLayerCommon<org.maplibre.android.style.layers.BackgroundLayer> {
	constructor(id: string) {
		super(id);
	}

	public override initNative(id: string): org.maplibre.android.style.layers.BackgroundLayer {
		return new org.maplibre.android.style.layers.BackgroundLayer(id);
	}

	public override get backgroundColor() {
		if (super.backgroundColor === undefined) {
			super.backgroundColor = this.native.getBackgroundColor().value;
		}
		return super.backgroundColor;
	}

	public override set backgroundColor(value) {
		super.backgroundColor = value;
	}

	public override get backgroundOpacity() {
		if (super.backgroundOpacity === undefined) {
			super.backgroundOpacity = this.native.getBackgroundOpacity().value.floatValue();
		}
		return super.backgroundOpacity;
	}

	public override set backgroundOpacity(value) {
		super.backgroundOpacity = value;
	}

	public override get backgroundPattern() {
		if (super.backgroundPattern === undefined) {
			super.backgroundPattern = this.native.getBackgroundPattern().value;
		}
		return super.backgroundPattern;
	}

	public override set backgroundPattern(value) {
		super.backgroundPattern = value;
	}
}
