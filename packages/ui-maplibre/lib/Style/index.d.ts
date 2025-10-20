import { ImageSource } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';

export declare class Style extends NativeObject<any> {
	constructor();
	public addImage(name: string, source: ImageSource);
	public removeImage(name: string): void;
	public addSource(source: any): void;
	public removeSource(source: BaseSource): void;
	public addLayer(layer: any): void;
	public removeLayer(layer: any): void;
}
