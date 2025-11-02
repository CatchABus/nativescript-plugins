import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override get visibility() {
		return this.getOrSetPropertyValueInternal('visibility', () => (this.native.visible ? 'visible' : 'none'));
	}

	public override set visibility(value) {
		this.native.visible = value === 'visible';
	}
}
