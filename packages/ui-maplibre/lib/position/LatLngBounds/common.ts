import { LatLngBounds as ILatLngBounds } from '.';
import { NativeObject } from '../../NativeObject';
import { LatLng } from '../LatLng';

export abstract class LatLngBoundsCommon<T> extends NativeObject<T> implements ILatLngBounds {
	protected mSw: LatLng;
	protected mNe: LatLng;

	constructor(sw: LatLng, ne: LatLng) {
		super(sw, ne);
		this.mSw = sw;
		this.mNe = ne;
	}

	public toJSON() {
		return {
			latitudeNorth: this.ne?.latitude,
			longitudeEast: this.ne?.longitude,
			latitudeSouth: this.sw?.latitude,
			longitudeWest: this.sw?.longitude,
		};
	}

	public abstract get sw(): LatLng;
	public abstract get ne(): LatLng;
}
