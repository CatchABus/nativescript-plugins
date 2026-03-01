import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends MLNStyleLayer> extends BaseLayerCommon<T> {
	public override getId(): string {
		return this.native.identifier;
	}

	public override get minZoom(): number {
		return this.native.minimumZoomLevel;
	}

	public override set minZoom(value: number) {
		this.native.minimumZoomLevel = value;
	}

	public override get maxZoom(): number {
		return this.native.maximumZoomLevel;
	}

	public override set maxZoom(value: number) {
		this.native.maximumZoomLevel = value;
	}

	public override get visibility() {
		return this.getOrSetPropertyValueInternal('visibility', () => (this.native.visible ? 'visible' : 'none'));
	}

	public override set visibility(value) {
		this.native.visible = value === 'visible';
	}
}
