import { LatLng } from '../LatLng';
import { LatLngBoundsCommon } from './common';

export class LatLngBounds extends LatLngBoundsCommon<org.maplibre.android.geometry.LatLngBounds> {
	public override initNative(sw: LatLng, ne: LatLng): org.maplibre.android.geometry.LatLngBounds {
		return new org.maplibre.android.geometry.LatLngBounds(ne.latitude, ne.longitude, sw.latitude, sw.longitude);
	}

	public override get sw(): LatLng {
		if (!this.mSw) {
			this.mSw = new LatLng(this.native.latitudeSouth, this.native.longitudeWest);
		}
		return this.mSw;
	}

	public override get ne(): LatLng {
		if (!this.mNe) {
			this.mNe = new LatLng(this.native.latitudeNorth, this.native.longitudeEast);
		}
		return this.mNe;
	}
}
