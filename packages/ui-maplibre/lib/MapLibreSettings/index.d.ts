import { MapWellKnownTileServer } from './common';

export declare class MapLibreSettings {
	public static get apiKey(): string;
	public static set apiKey(value: string);
	public static setWellKnownTileServer(value: MapWellKnownTileServer): MapWellKnownTileServer;
	public static getOrCreateNativeMapSettings(): any;
}

export { MapWellKnownTileServer };
