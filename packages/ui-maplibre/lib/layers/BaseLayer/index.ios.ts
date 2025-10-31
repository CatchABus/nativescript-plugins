import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override get visible(): 'visible' | 'none' {
		if (super.visible === undefined) {
			super.visible = this.native.visible ? 'visible' : 'none';
		}
		return super.visible;
	}

	public override set visible(value: 'visible' | 'none') {
		this.native.visible = value === 'visible';
	}
}
