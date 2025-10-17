import { NativeObject } from '../../NativeObject';
import { LatLng } from '../LatLng';

export abstract class LatLngBoundsCommon<T> extends NativeObject<T> {
	private readonly mSw: LatLng;
	private readonly mNe: LatLng;

	constructor(sw: LatLng, ne: LatLng) {
		super(sw, ne);
		this.mSw = sw;
		this.mNe = ne;
	}

	public get sw(): LatLng {
		return this.mSw;
	}

	public get ne(): LatLng {
		return this.mNe;
	}

	public toJSON() {
		return {
			latitudeNorth: this.ne.latitude,
			longitudeEast: this.ne.longitude,
			latitudeSouth: this.sw.latitude,
			longitudeWest: this.sw.longitude,
		};
	}
}
