import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
import { BaseLayer } from '../layers';
import { LayerManager } from '../layers/LayerManager';
import { toKebabCase } from '../utils/helpers';

const NATIVE_CLASS_PREFIX = 'MLN';
const NATIVE_LAYER_SUFFIX = 'StyleLayer';

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

	public override getSources(): readonly BaseSource[] {
		if (!this.mSources) {
			const result: BaseSource[] = [];
			const nSources = this.native.sources.allObjects;

			for (let i = 0, length = nSources.count; i < length; i++) {
				const nSource = nSources.objectAtIndex(i) as MLNSource;
				let source: BaseSource;

				if (nSource instanceof MLNShapeSource) {
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
		this.mLayers = null;
		this.native.addLayer(layer?.native);
	}

	public override getLayers(): readonly BaseLayer[] {
		if (!this.mLayers) {
			const result: BaseLayer[] = [];
			const nLayers = this.native.layers;

			for (let i = 0, length = nLayers.count; i < length; i++) {
				const nLayer = nLayers.objectAtIndex(i) as MLNStyleLayer;
				const className = NSStringFromClass(nLayer.class());
				const layerType = toKebabCase(className.substring(NATIVE_CLASS_PREFIX.length, className.length - NATIVE_LAYER_SUFFIX.length), false);
				const layerClass = LayerManager.getLayerClassByType(layerType) ?? BaseLayer;
				result.push(layerClass.initWithNative(nLayer) as BaseLayer);
			}

			this.mLayers = Object.freeze(result);
		}
		return this.mLayers;
	}

	public override removeLayer(layerOrId: string | BaseLayer): void {
		let nLayer: MLNStyleLayer;

		if (typeof layerOrId === 'string') {
			nLayer = this.native.layerWithIdentifier(layerOrId);
		} else {
			nLayer = layerOrId?.native;
		}

		this.mLayers = null;
		this.native.removeLayer(nLayer);
	}
}
