import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';

export class Style extends StyleCommon<MLNStyle> {
	public override addImage(name: string, source: ImageSource) {
		const nativeSource = source.getNativeSource();
		if (nativeSource) {
			this.native.setImageForName(nativeSource, name);
		}
	}

	public override removeImage(name: string): void {
		this.native.removeImageForName(name);
	}

	public override addSource(source: BaseSource): void {
		this.native.addSource(source.native);
	}

	public override addLayer(layer: BaseLayer): void {
		this.native.addLayer(layer.native);
	}

	public override removeLayer(layer: BaseLayer): void {
		this.native.removeLayer(layer.native);
	}
}
