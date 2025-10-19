import { MapLibreSettings as IMapLibreSettings } from '.';

export enum MapWellKnownTileServer {
	MapLibre,
	MapTiler,
	Mapbox,
}

export abstract class MapLibreSettingsCommon implements IMapLibreSettings {
	constructor() {
		throw new TypeError(`Failed to construct '${this.constructor.name}': Illegal constructor`);
	}
}
