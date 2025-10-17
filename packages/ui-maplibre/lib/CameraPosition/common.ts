import { LatLng } from '../position/LatLng';
import { NativeObject } from '../NativeObject';

export class CameraPositionCommon<T> extends NativeObject<T> {
	private readonly mTarget: LatLng;

	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number) {
		super(target, zoom, tilt, bearing);
		this.mTarget = target;
	}

	public get target(): LatLng {
		return this.mTarget;
	}
	public get zoom(): number {
		return 0;
	}
	public get tilt(): number {
		return 0;
	}
	public get heading(): number {
		return 0;
	}
}
