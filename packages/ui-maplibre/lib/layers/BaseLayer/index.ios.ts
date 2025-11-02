import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override get visibility() {
		if (super.visibility === undefined) {
			super.visibility = this.native.visible ? 'visible' : 'none';
		}
		return super.visibility;
	}

	public override set visibility(value) {
		this.native.visible = value === 'visible';
	}
}
