import { ImageSource } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';
import { Style as IStyle } from '.';

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

	public getSource(id: string): BaseSource {
		return this.getSources().find((source) => source.getId() === id);
	}

	public abstract addImage(name: string, source: ImageSource): void;
	public abstract removeImage(name: string): void;
	public abstract addSource(source: BaseSource): void;
	public abstract getSources(): readonly BaseSource[];
	public abstract removeSource(source: BaseSource): void;
	public abstract addLayer(layer: BaseLayer): void;
	public abstract getLayers(): readonly BaseLayer[];
	public abstract removeLayer(layer: BaseLayer): void;
}
