import { BaseGeoJsonCommon } from './common';

export abstract class BaseGeoJson<T extends org.maplibre.geojson.GeoJson> extends BaseGeoJsonCommon<T> {
	public static getNativeFromJson(value: string): org.maplibre.geojson.gson.GeometryGeoJson {
		return org.maplibre.geojson.gson.GeometryGeoJson.fromJson(value);
	}
}
