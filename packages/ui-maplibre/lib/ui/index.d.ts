import { EventData, View } from '@nativescript/core';
import { Style } from '../Style';
import { MapLibreMap } from '../MapLibreMap';

export interface MapEventData extends EventData {
	object: MapLibreView;
}

export interface MapStyleLoadedEventData extends MapEventData {
	object: MapLibreView;
	style: Style;
}

export declare class MapLibreView extends View {
	public static readonly mapReadyEvent: string;
	public static readonly mapStyleLoadedEvent: string;

	public getMap(): MapLibreMap;
}
