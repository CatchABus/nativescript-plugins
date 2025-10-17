import { LatLngCommon } from './common';

export class LatLng extends LatLngCommon<org.maplibre.android.geometry.LatLng> {
	constructor(native: any);
	constructor(latitude: number, longitude: number);

	constructor(...args: any[]) {
		super(...args);
	}

	public override initNative(...args: any[]): org.maplibre.android.geometry.LatLng {
		return args[0] instanceof org.maplibre.android.geometry.LatLng ? args[0] : new org.maplibre.android.geometry.LatLng(args[0], args[1]);
	}

	public override get latitude(): number {
		return this.native.getLatitude();
	}

	public override set latitude(value: number) {
		this.native.setLatitude(value);
	}

	public override get longitude(): number {
		return this.native.getLongitude();
	}

	public override set longitude(value: number) {
		this.native.setLongitude(value);
	}
}
