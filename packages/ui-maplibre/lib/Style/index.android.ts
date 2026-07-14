import { ImageSource, Trace } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
import { BaseLayer } from '../layers';
import { LayerManager } from '../layers/LayerManager';
import { toKebabCase } from '../utils/helpers';
import { LightOptions } from '.';

const NATIVE_LAYER_SUFFIX = 'Layer';

export class Style extends StyleCommon<org.maplibre.android.maps.Style> {
	public override addImage(name: string, source: ImageSource): void {
		const nativeSource = source.getNativeSource() as android.graphics.Bitmap;
		if (nativeSource) {
			this.native.addImage(name, source.getNativeSource());
		}
	}

	public override removeImage(name: string): void {
		this.native.removeImage(name);
	}

	public override addSource(source: BaseSource): void {
		super.addSource(source);
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
		super.removeSource(source);
		this.native.removeSource(source?.native);
	}

	public override addLayer(layer: BaseLayer): void {
		super.addLayer(layer);
		this.native.addLayer(layer?.native);
	}

	public override getLayers(): readonly BaseLayer[] {
		if (!this.mLayers) {
			const result: BaseLayer[] = [];
			const nLayers = this.native.getLayers();

			for (let i = 0, length = nLayers.size(); i < length; i++) {
				const nLayer = nLayers.get(i) as org.maplibre.android.style.layers.Layer;
				const className = nLayer.getClass().getSimpleName();
				const layerType = toKebabCase(className.substring(0, className.length - NATIVE_LAYER_SUFFIX.length), false);
				const layerClass = LayerManager.getLayerClassByType(layerType) ?? BaseLayer;
				result.push(layerClass.initWithNative(nLayer) as BaseLayer);
			}

			this.mLayers = Object.freeze(result);
		}
		return this.mLayers;
	}

	public override removeLayer(layerOrId: string | BaseLayer): void {
		super.removeLayer(layerOrId);
		this.native.removeLayer(typeof layerOrId === 'string' ? layerOrId : layerOrId?.native);
	}

	public override setLightOptions(options: LightOptions): void {
		if (options && typeof options === 'object') {
			const nativeLight = this.native.getLight();

			if (options.anchor) {
				nativeLight.setAnchor(options.anchor);
			}

			if (options.color) {
				nativeLight.setColor(options.color);
			}

			if (options.intensity) {
				nativeLight.setIntensity(options.intensity);
			}

			if (options.position) {
				const val = options.position;
				nativeLight.setPosition(val ? new org.maplibre.android.style.light.Position(val.radialCoordinate, val.azimuthalAngle, val.polarAngle) : null);
			}
		} else {
			Trace.write(`Incorrect style light options: ${JSON.stringify(options)}`, Trace.categories.Error, Trace.messageType.error);
		}
	}
}
