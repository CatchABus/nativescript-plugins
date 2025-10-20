import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
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
		this.native.addSource(source?.native);
	}

	public override removeSource(source: BaseSource): void {
		this.native.removeSource(source?.native);
	}

	public override getSource(id: string): BaseSource {
		const nativeSource = this.native.sourceWithIdentifier(id);
		let source: BaseSource;

		if (!nativeSource) {
			source = null;
		} else if (nativeSource instanceof MLNShapeSource) {
			source = GeoJsonSource.initWithNative(nativeSource) as GeoJsonSource;
		} else {
			source = null;
		}

		return source;
	}

	public override addLayer(layer: BaseLayer): void {
		this.native.addLayer(layer?.native);
	}

	public override removeLayer(layer: BaseLayer): void {
		this.native.removeLayer(layer?.native);
	}
}
