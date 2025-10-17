import { LatLng } from '../../position';
import { Geometry } from '../Geometry';
import { FeatureCommon } from './common';

export class Feature extends FeatureCommon<org.maplibre.geojson.Feature> {
	constructor(content: Geometry | string | org.maplibre.geojson.Feature) {
		super(content);
	}
	public override initNative(content: Geometry | string | org.maplibre.geojson.Feature): org.maplibre.geojson.Feature {
		if (content instanceof org.maplibre.geojson.Feature) {
			return content;
		}

		if (content instanceof Geometry) {
			return org.maplibre.geojson.Feature.fromGeometry(content.native);
		}

		if (typeof content === 'string') {
			return org.maplibre.geojson.Feature.fromJson(content);
		}

		return null;
	}

	public override getAttribute(key: string): string | boolean | number {
		const jsonElement = this.native.getProperty(key);
		let value: string | boolean | number;

		if (jsonElement instanceof com.google.gson.JsonPrimitive) {
			if (jsonElement.isBoolean()) {
				value = jsonElement.getAsBoolean();
			} else if (jsonElement.isNumber()) {
				value = jsonElement.getAsDouble();
			} else {
				value = jsonElement.getAsString();
			}
		} else {
			// TODO: Add support for other entities
			value = null;
		}
		return value;
	}

	public override addAttribute(key: string, value: string | boolean | number): void {
		if (typeof value === 'boolean') {
			this.native.addBooleanProperty(key, java.lang.Boolean.valueOf(value));
		} else if (typeof value === 'number') {
			this.native.addNumberProperty(key, java.lang.Double.valueOf(value));
		} else {
			this.native.addStringProperty(key, value);
		}
	}

	public override removeAttribute(key: string): void {
		this.native.removeProperty(key);
	}

	public override get coordinate(): LatLng {
		const boundingBox = org.maplibre.turf.TurfMeasurement.bbox(this.native);
		const centerLong = (boundingBox[0] + boundingBox[2]) / 2;
		const centerLat = (boundingBox[1] + boundingBox[3]) / 2;

		if (!this.mCoordinate || this.mCoordinate.latitude !== centerLat || this.mCoordinate.longitude !== centerLong) {
			this.mCoordinate = new LatLng(centerLat, centerLong);
		}
		return this.mCoordinate;
	}
}
