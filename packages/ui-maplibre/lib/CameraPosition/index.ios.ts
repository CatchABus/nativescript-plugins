import { LatLng } from '../position/LatLng';
import { CameraPositionCommon } from './common';

export class CameraPosition extends CameraPositionCommon<MLNMapCamera> {
	private readonly mZoom: number;

	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number) {
		super(target, zoom, tilt, bearing);
		this.mZoom = zoom ?? 1;
	}

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

	public override get zoom(): number {
		return this.mZoom;
	}

	public override get tilt(): number {
		return this.native.pitch;
	}

	public override get heading(): number {
		return this.native.heading;
	}
}
