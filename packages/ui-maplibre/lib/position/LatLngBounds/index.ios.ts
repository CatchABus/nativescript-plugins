import { LatLng } from '../LatLng';
import { LatLngBoundsCommon } from './common';

export class LatLngBounds extends LatLngBoundsCommon<MLNCoordinateBounds> {
	public override initNative(sw: LatLng, ne: LatLng): MLNCoordinateBounds {
		return new MLNCoordinateBounds({
			sw: sw.native,
			ne: ne.native,
		});
	}

	public override get sw(): LatLng {
		if (!this.mSw) {
			this.mSw = LatLng.initWithNative(this.native.sw) as LatLng;
		}
		return this.mSw;
	}

	public override get ne(): LatLng {
		if (!this.mNe) {
			this.mNe = LatLng.initWithNative(this.native.ne) as LatLng;
		}
		return this.mNe;
	}
}
