import { View } from '@nativescript/core';
import { MapLibreMap } from '../MapLibreMap';
import { LatLng } from '../position/LatLng';

export abstract class MapLibreViewCommon extends View {
	public static readonly mapReadyEvent = 'mapReady';
	public static readonly mapStyleLoadedEvent = 'mapStyleLoaded';

	public mMap: MapLibreMap;

	public getMap(): MapLibreMap {
		return this.mMap;
	}
}
