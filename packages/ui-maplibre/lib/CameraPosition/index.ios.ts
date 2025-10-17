import { LatLng } from '../position/LatLng';
import { CameraPosition as CameraPositionCommon } from '.';

class CameraPositionIOS extends CameraPositionCommon<MLNMapCamera> {
	public override initNative(target?: LatLng, zoom?: number, tilt?: number, bearing?: number): MLNMapCamera {
		const native = MLNMapCamera.new();

		if (target) {
			native.centerCoordinate = target.native;
		}

		if (tilt != null) {
			native.pitch = tilt;
		}

		if (bearing != null) {
			native.heading = bearing;
		}

		return native;
	}

	public override get tilt(): number {
		return this.native.pitch;
	}

	public override get heading(): number {
		return this.native.heading;
	}
}

export { CameraPositionIOS as CameraPosition };
