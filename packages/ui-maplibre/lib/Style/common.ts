import { ImageSource } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';
import { Style as IStyle } from '.';

export abstract class StyleCommon<T> extends NativeObject<T> implements IStyle {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}

	public abstract addImage(name: string, source: ImageSource): void;
	public abstract removeImage(name: string): void;
	public abstract addSource(source: BaseSource): void;
	public abstract removeSource(source: BaseSource): void;
	public abstract addLayer(layer: BaseLayer): void;
	public abstract removeLayer(layer: BaseLayer): void;
}
