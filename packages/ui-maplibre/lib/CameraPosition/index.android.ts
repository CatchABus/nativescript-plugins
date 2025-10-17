import { LatLng } from '../position/LatLng';
import { CameraPosition as CameraPositionCommon } from '.';

class CameraPositionAndroid extends CameraPositionCommon<org.maplibre.android.camera.CameraPosition> {
	public override initNative(target?: LatLng, zoom?: number, tilt?: number, bearing?: number): org.maplibre.android.camera.CameraPosition {
		let nativeBulder = new org.maplibre.android.camera.CameraPosition.Builder();

		if (target) {
			nativeBulder = nativeBulder.target(target.native);
		}

		if (zoom != null) {
			nativeBulder = nativeBulder.zoom(zoom);
		}

		if (tilt != null) {
			nativeBulder = nativeBulder.tilt(tilt);
		}

		if (bearing != null) {
			nativeBulder = nativeBulder.bearing(bearing);
		}

		return nativeBulder.build();
	}

	public override get zoom(): number {
		return this.native.zoom;
	}

	public override get tilt(): number {
		return this.native.tilt;
	}

	public override get heading(): number {
		return this.native.bearing;
	}
}

export { CameraPositionAndroid as CameraPosition };
