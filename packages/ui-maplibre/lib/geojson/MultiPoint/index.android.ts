import { LatLng } from '../../position/LatLng';
import { Point } from '../Point';
import { MultiPointCommon } from './common';

export class MultiPoint extends MultiPointCommon<org.maplibre.geojson.MultiPoint> {
	constructor(content: Point[] | string) {
		super(content);
	}
	public override initNative(content: Point[] | string): org.maplibre.geojson.MultiPoint {
		let native: org.maplibre.geojson.MultiPoint;

		if (Array.isArray(content)) {
			const list = new java.util.ArrayList<org.maplibre.geojson.Point>(content.length);

			for (const point of content) {
				list.add(point.native);
			}

			native = org.maplibre.geojson.MultiPoint.fromLngLats(list);
		} else {
			native = org.maplibre.geojson.MultiPoint.fromJson(content);
		}
		return native;
	}

	public override get coordinates(): readonly LatLng[] {
		if (!this.mCoordinates) {
			const nPoints = this.native.coordinates();
			const arr: LatLng[] = [];

			for (let i = 0, length = nPoints.size(); i < length; i++) {
				const point = Point.initWithNative(nPoints.get(i)) as Point;
				arr.push(point.coordinate);
			}

			this.mCoordinates = Object.freeze(arr);
		}
		return this.mCoordinates;
	}
}
