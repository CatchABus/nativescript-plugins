import { LatLng } from '../LatLng';
import { LatLngBoundsCommon } from './common';

export class LatLngBounds extends LatLngBoundsCommon<org.maplibre.android.geometry.LatLngBounds> {
	public override initNative(sw: LatLng, ne: LatLng): org.maplibre.android.geometry.LatLngBounds {
		return new org.maplibre.android.geometry.LatLngBounds(ne.latitude, ne.longitude, sw.latitude, sw.longitude);
	}
}
