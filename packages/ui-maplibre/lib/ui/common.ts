import { View } from '@nativescript/core';
import { MapLibreMap } from '../MapLibreMap';
import { MapLibreView as IMapLibreView } from '.';

export abstract class MapLibreViewCommon extends View implements IMapLibreView {
	public static readonly mapReadyEvent = 'mapReady';
	public static readonly mapStyleLoadedEvent = 'mapStyleLoaded';

	public mMap: MapLibreMap;

	public getMap(): MapLibreMap {
		return this.mMap;
	}
}
