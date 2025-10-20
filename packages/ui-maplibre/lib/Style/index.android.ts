import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';

export class Style extends StyleCommon<org.maplibre.android.maps.Style> {
	public override addImage(name: string, source: ImageSource): void {
		const nativeSource = source.getNativeSource() as android.graphics.Bitmap;
		if (nativeSource) {
			if (nativeSource.getDensity() === android.util.DisplayMetrics.DENSITY_DEVICE_STABLE) {
				nativeSource.setDensity(android.util.DisplayMetrics.DENSITY_DEFAULT);
			}
			this.native.addImage(name, source.getNativeSource());
		}
	}

	public override removeImage(name: string): void {
		this.native.removeImage(name);
	}

	public override addSource(source: BaseSource): void {
		this.native.addSource(source?.native);
	}

	public override removeSource(source: BaseSource): void {
		this.native.removeSource(source?.native);
	}

	public override addLayer(layer: BaseLayer): void {
		this.native.addLayer(layer?.native);
	}

	public override removeLayer(layer: BaseLayer): void {
		this.native.removeLayer(layer?.native);
	}
}
