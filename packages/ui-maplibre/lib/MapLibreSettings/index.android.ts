import { AndroidActivityBundleEventData, Application } from '@nativescript/core';
import { MapLibreSettingsCommon, MapWellKnownTileServer } from './common';

const onActivityCreated = (args: AndroidActivityBundleEventData) => {
	if (args.activity === Application.android.startActivity) {
		Application.off(Application.android.activityCreatedEvent, onActivityCreated);
		MapLibreSettings.getOrCreateNativeMapSettings();
	}
};

function getNativeWellKnownTileServer(value: MapWellKnownTileServer) {
	let nativeTileServer: org.maplibre.android.WellKnownTileServer;

	switch (value) {
		case MapWellKnownTileServer.MapLibre:
			nativeTileServer = org.maplibre.android.WellKnownTileServer.MapLibre;
			break;
		case MapWellKnownTileServer.MapTiler:
			nativeTileServer = org.maplibre.android.WellKnownTileServer.MapTiler;
			break;
		case MapWellKnownTileServer.Mapbox:
			nativeTileServer = org.maplibre.android.WellKnownTileServer.Mapbox;
			break;
		default:
			nativeTileServer = org.maplibre.android.WellKnownTileServer.MapLibre;
			break;
	}

	return nativeTileServer;
}

class MapLibreSettings extends MapLibreSettingsCommon {
	private static mNativeInstance: org.maplibre.android.MapLibre = null;
	private static mApiKey: string = null;
	private static mWellKnownServer: MapWellKnownTileServer = null;
	private static mIsPendingActivity: boolean = false;

	public static get apiKey(): string {
		return this.mApiKey;
	}

	public static set apiKey(value: string) {
		this.mApiKey = value;
		this.getOrCreateNativeMapSettings();
	}

	public static setWellKnownTileServer(value: MapWellKnownTileServer) {
		this.mWellKnownServer = value;
		this.getOrCreateNativeMapSettings();
	}

	public static getOrCreateNativeMapSettings(): org.maplibre.android.MapLibre {
		if (Application.android.startActivity) {
			this.mIsPendingActivity = false;
			this.mNativeInstance = org.maplibre.android.MapLibre.getInstance(Application.android.startActivity, this.mApiKey, getNativeWellKnownTileServer(this.mWellKnownServer));
		} else {
			if (!this.mNativeInstance && !this.mIsPendingActivity) {
				this.mIsPendingActivity = true;
				Application.on(Application.android.activityCreatedEvent, onActivityCreated);
			}
		}
		return this.mNativeInstance;
	}
}

export { MapWellKnownTileServer, MapLibreSettings };
