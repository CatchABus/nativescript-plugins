import { LatLng as ILatLng } from '.';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export abstract class LatLngCommon<T> extends NativeObject<T> implements ILatLng {
	public toJSON() {
		return [this.longitude, this.latitude];
	}

	abstract get latitude(): number;
	abstract set latitude(value: number);
	abstract get longitude(): number;
	abstract set longitude(value: number);
}
