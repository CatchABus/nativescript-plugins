import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override get visible() {
		if (super.visible === undefined) {
			super.visible = this.native.visible;
		}
		return super.visible;
	}

	public override set visible(value) {
		this.native.visible = value;
	}
}
