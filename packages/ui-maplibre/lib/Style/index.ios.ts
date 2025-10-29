import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
import { BackgroundLayer, BaseLayer, CircleLayer, SymbolLayer } from '../layers';

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
				let layer: BaseLayer;

				if (nLayer instanceof MLNBackgroundStyleLayer) {
					layer = BackgroundLayer.initWithNative(nLayer) as BackgroundLayer;
				} else if (nLayer instanceof MLNCircleStyleLayer) {
					layer = CircleLayer.initWithNative(nLayer) as CircleLayer;
				} else if (nLayer instanceof MLNSymbolStyleLayer) {
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
