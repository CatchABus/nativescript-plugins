import { ImageSource } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';
import { Style as IStyle, LightOptions } from '.';

export abstract class StyleCommon<T> extends NativeObject<T> implements IStyle {
	protected mLayers: readonly BaseLayer[];
	protected mSources: readonly BaseSource[];

	constructor() {
		super();
		this.throwIllegalConstructorError();
	}

	public getLayer(id: string): BaseLayer {
		return this.getLayers().find((layer) => layer.getId() === id);
	}

	public addLayer(_layer: BaseLayer): void {
		this.mLayers = null;
	}

	public removeLayer(_layerOrId: string | BaseLayer): void {
		this.mLayers = null;
	}

	public getSource(id: string): BaseSource {
		return this.getSources().find((source) => source.getId() === id);
	}

	public addSource(_source: BaseSource): void {
		this.mSources = null;
	}

	public removeSource(_source: BaseSource): void {
		this.mSources = null;
	}

	public abstract addImage(name: string, source: ImageSource): void;
	public abstract removeImage(name: string): void;
	public abstract getSources(): readonly BaseSource[];
	public abstract getLayers(): readonly BaseLayer[];
	public abstract setLightOptions(options: LightOptions): void;
}
