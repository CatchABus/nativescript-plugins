import { Utils } from '@nativescript/core';
import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';
import { ProjectionCommon } from './common';

export class Projection extends ProjectionCommon<org.maplibre.android.maps.Projection> {
	public override fromScreenLocation(x: number, y: number): LatLng {
		const nativeCoords = this.native.fromScreenLocation(new android.graphics.PointF(Utils.layout.toDevicePixels(x), Utils.layout.toDevicePixels(y)));
		return LatLng.initWithNative(nativeCoords) as LatLng;
	}

	public override toScreenLocation(location: LatLng): IPoint {
		const nativePoint = this.native.toScreenLocation(location.native);
		return {
			x: Utils.layout.toDeviceIndependentPixels(nativePoint.x),
			y: Utils.layout.toDeviceIndependentPixels(nativePoint.y),
		};
	}
}
