import { ImageSource } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';
import { BaseSource } from '../sources';
import { BaseLayer } from '../layers';

export declare class Style extends NativeObject<any> {
	constructor();
	public addImage(name: string, source: ImageSource);
	public removeImage(name: string): void;
	public addSource(source: any): void;
	public getSource(id: string): BaseSource;
	public getSources(): readonly BaseSource[];
	public removeSource(source: BaseSource): void;
	public addLayer(layer: BaseLayer): void;
	public getLayer(id: string): BaseLayer;
	public getLayers(): readonly BaseLayer[];
	public removeLayer(layer: BaseLayer): void;
}
