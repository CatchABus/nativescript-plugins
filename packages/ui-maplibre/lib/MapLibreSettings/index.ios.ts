import { MapWellKnownTileServer, MapLibreSettingsCommon } from './common';

class MapLibreSettings extends MapLibreSettingsCommon {
	public static get apiKey(): string {
		return MLNSettings.apiKey;
	}

	public static set apiKey(value: string) {
		MLNSettings.apiKey = value;
	}

	public static setWellKnownTileServer(value: MapWellKnownTileServer) {
		switch (value) {
			case MapWellKnownTileServer.MapLibre:
				MLNSettings.useWellKnownTileServer(MLNWellKnownTileServer.MapLibre);
				break;
			case MapWellKnownTileServer.MapTiler:
				MLNSettings.useWellKnownTileServer(MLNWellKnownTileServer.MapTiler);
				break;
			case MapWellKnownTileServer.Mapbox:
				MLNSettings.useWellKnownTileServer(MLNWellKnownTileServer.Mapbox);
				break;
			default:
				MLNSettings.useWellKnownTileServer(MLNWellKnownTileServer.MapLibre);
				break;
		}
	}

	public static getOrCreateNativeMapSettings(): typeof MLNSettings {
		return typeof MLNSettings !== 'undefined' ? MLNSettings : null;
	}
}

export { MapWellKnownTileServer, MapLibreSettings };
