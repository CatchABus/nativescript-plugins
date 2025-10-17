import { LatLng } from '../LatLng';
import { LatLngBoundsCommon } from './common';

export class LatLngBounds extends LatLngBoundsCommon<MLNCoordinateBounds> {
	public override initNative(sw: LatLng, ne: LatLng): MLNCoordinateBounds {
		return new MLNCoordinateBounds({
			sw,
			ne,
		});
	}
}
