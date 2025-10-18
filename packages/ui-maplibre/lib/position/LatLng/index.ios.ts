import { LatLngCommon } from './common';

export class LatLng extends LatLngCommon<CLLocationCoordinate2D> {
	public override initNative(...args: any[]): CLLocationCoordinate2D {
		return args[0] instanceof CLLocationCoordinate2D ? args[0] : CLLocationCoordinate2DMake(args[0], args[1]);
	}

	public override get latitude(): number {
		return this.native.latitude;
	}

	public override set latitude(value: number) {
		this.native.latitude = value;
	}

	public override get longitude(): number {
		return this.native.longitude;
	}

	public override set longitude(value: number) {
		this.native.longitude = value;
	}
}
