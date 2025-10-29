import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
import { BackgroundLayer, BaseLayer, CircleLayer, SymbolLayer } from '../layers';

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

	public override getSources(): readonly BaseSource[] {
		if (!this.mSources) {
			const result: BaseSource[] = [];
			const nSources = this.native.getSources();

			for (let i = 0, length = nSources.size(); i < length; i++) {
				const nSource = nSources.get(i) as org.maplibre.android.style.sources.Source;
				let source: BaseSource;

				if (nSource instanceof org.maplibre.android.style.sources.GeoJsonSource) {
					source = GeoJsonSource.initWithNative(nSource) as GeoJsonSource;
				} else {
					source = BaseSource.initWithNative(nSource) as BaseSource;
				}
				result.push(source);
			}

			this.mSources = Object.freeze(result);
		}
		return this.mSources;
	}

	public override removeSource(source: BaseSource): void {
		this.native.removeSource(source?.native);
	}

	public override addLayer(layer: BaseLayer): void {
		this.mLayers = null;
		this.native.addLayer(layer?.native);
	}

	public override getLayers(): readonly BaseLayer[] {
		if (!this.mLayers) {
			const result: BaseLayer[] = [];
			const nLayers = this.native.getLayers();

			for (let i = 0, length = nLayers.size(); i < length; i++) {
				const nLayer = nLayers.get(i) as org.maplibre.android.style.layers.Layer;
				let layer: BaseLayer;

				if (nLayer instanceof org.maplibre.android.style.layers.BackgroundLayer) {
					layer = BackgroundLayer.initWithNative(nLayer) as BackgroundLayer;
				} else if (nLayer instanceof org.maplibre.android.style.layers.CircleLayer) {
					layer = CircleLayer.initWithNative(nLayer) as CircleLayer;
				} else if (nLayer instanceof org.maplibre.android.style.layers.SymbolLayer) {
					layer = SymbolLayer.initWithNative(nLayer) as SymbolLayer;
				} else {
					layer = BaseLayer.initWithNative(nLayer) as BaseLayer;
				}
				result.push(layer);
			}

			this.mLayers = Object.freeze(result);
		}
		return this.mLayers;
	}

	public override removeLayer(layer: BaseLayer): void {
		this.mLayers = null;
		this.native.removeLayer(layer?.native);
	}
}
