import { LatLng } from '../../position/LatLng';
import { PointCommon } from './common';

export class Point extends PointCommon<org.maplibre.geojson.Point> {
	constructor(content: LatLng | string) {
		super(content);
	}
	public override initNative(content: LatLng | string): org.maplibre.geojson.Point {
		return content instanceof LatLng ? org.maplibre.geojson.Point.fromLngLat(content.longitude, content.latitude) : org.maplibre.geojson.Point.fromJson(content);
	}

	public override get coordinate(): LatLng {
		if (this.mTarget === undefined) {
			this.mTarget = new LatLng(this.native.latitude(), this.native.longitude());
		}
		return this.mTarget;
	}
}
