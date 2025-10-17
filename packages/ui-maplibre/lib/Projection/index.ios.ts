import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';
import { ProjectionCommon } from './common';

export class Projection extends ProjectionCommon<MLNMapProjection> {
	public override fromScreenLocation(x: number, y: number): LatLng {
		return new LatLng(this.native.convertPoint(CGPointMake(x, y)));
	}

	public override toScreenLocation(location: LatLng): IPoint {
		const nativePoint = this.native.convertCoordinate(location.native);
		return {
			x: nativePoint.x,
			y: nativePoint.y,
		};
	}
}
