import { ILatLng } from '.';
import { NativeObject } from '../../NativeObject';

export abstract class LatLngCommon<T> extends NativeObject<T> implements ILatLng {
	public toJSON() {
		return {
			latitude: this.latitude,
			longitude: this.longitude,
		};
	}

	abstract get latitude(): number;
	abstract set latitude(value: number);
	abstract get longitude(): number;
	abstract set longitude(value: number);
}
