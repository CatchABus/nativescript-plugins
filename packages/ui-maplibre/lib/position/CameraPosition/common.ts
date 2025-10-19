import { LatLng } from '../LatLng';
import { NativeObject } from '../../nativeWrappers/NativeObject';
import { CameraPosition as ICameraPosition } from '.';

export class CameraPositionCommon<T> extends NativeObject<T> implements ICameraPosition {
	private readonly mTarget: LatLng;

	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number) {
		super(target, zoom, tilt, bearing);
		this.mTarget = target;
	}
	public get target(): LatLng {
		return this.mTarget;
	}
	public get zoom(): number {
		throw new Error('Method not implemented.');
	}
	public get tilt(): number {
		throw new Error('Method not implemented.');
	}
	public get heading(): number {
		throw new Error('Method not implemented.');
	}
}
