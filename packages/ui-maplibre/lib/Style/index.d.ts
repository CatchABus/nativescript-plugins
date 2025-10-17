import { ImageSource } from '@nativescript/core';
import { StyleCommon } from './common';

export declare class Style extends StyleCommon<any> {
	public addImage(name: string, source: ImageSource);
	public removeImage(name: string): void;
	public addSource(source: any): void;
	public addLayer(layer: any): void;
	public removeLayer(layer: any): void;
}
