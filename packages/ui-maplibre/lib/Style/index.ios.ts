import { Color, ImageSource, Trace } from '@nativescript/core';
import { StyleCommon } from './common';
import { BaseSource, GeoJsonSource } from '../sources';
import { BaseLayer } from '../layers';
import { LayerManager } from '../layers/LayerManager';
import { toKebabCase } from '../utils/helpers';
import { LightOptions } from '.';
import { Expression } from '../Expression';
import { NativeBoxedValue } from '../nativeWrappers/NativeBoxedValue';

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

	public override setLightOptions(options: LightOptions): void {
		if (options && typeof options === 'object') {
			const nativeLight = this.native.light ?? MLNLight.alloc().init();

			if (options.anchor) {
				nativeLight.anchor = Expression.propertyValue(options.anchor)?.native;
			}

			if (options.color) {
				const val = options.color;
				const expression = Expression.propertyValue(typeof val === 'string' ? new NativeBoxedValue(new Color(val).ios) : val);
				nativeLight.color = expression?.native;
			}

			if (options.intensity) {
				nativeLight.intensity = Expression.propertyValue(options.intensity)?.native;
			}

			if (options.position) {
				const finalValue = options.position
					? NSValue.valueWithMLNSphericalPosition(
							new MLNSphericalPosition({
								radial: options.position.radialCoordinate,
								azimuthal: options.position.azimuthalAngle,
								polar: options.position.polarAngle,
							})
					  )
					: options.position;
				const expression = Expression.propertyValue(new NativeBoxedValue(finalValue));
				nativeLight.position = expression?.native;
			}

			this.native.light = nativeLight;
		} else {
			Trace.write(`Incorrect style light options: ${JSON.stringify(options)}`, Trace.categories.Error, Trace.messageType.warn);
		}
	}
}
