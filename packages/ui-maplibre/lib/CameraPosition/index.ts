import { LatLng } from '../position/LatLng';
import { NativeObject } from '../NativeObject';

export class CameraPosition<T = any> extends NativeObject<T> {
	private readonly mTarget: LatLng;
	private readonly mZoom: number;

	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number) {
		super(target, zoom, tilt, bearing);
		this.mTarget = target;
		this.mZoom = zoom ?? 1;
	}

	public get target(): LatLng {
		return this.mTarget;
	}
	public get zoom(): number {
		return this.mZoom;
	}
	public get tilt(): number {
		return 0;
	}
	public get heading(): number {
		return 0;
	}
}
