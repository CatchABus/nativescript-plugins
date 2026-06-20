import { IRect } from '../IRect';
import { LatLng } from '../LatLng';
import { CameraPositionCommon } from './common';

export class CameraPosition extends CameraPositionCommon<MLNMapCamera> {
	private readonly mZoom: number;
	private readonly mPadding: IRect;

	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number, padding?: IRect | number) {
		super(target, zoom, tilt, bearing);
		this.mZoom = zoom ?? 1;
		this.mPadding =
			typeof padding !== 'number'
				? padding
				: {
						left: padding,
						top: padding,
						right: padding,
						bottom: padding,
				  };
	}

	public override initNative(target?: LatLng, _zoom?: number, tilt?: number, bearing?: number, _padding?: IRect | number): MLNMapCamera {
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

	public override get padding(): IRect {
		return this.mPadding;
	}
}
