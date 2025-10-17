import { EventData } from '@nativescript/core';
import { MapLibreViewCommon } from './common';
import { Style } from '../Style';

export interface MapEventData extends EventData {
	object: MapLibreView;
}

export interface MapStyleLoadedEventData extends MapEventData {
	object: MapLibreView;
	style: Style;
}

export declare class MapLibreView extends MapLibreViewCommon {}
