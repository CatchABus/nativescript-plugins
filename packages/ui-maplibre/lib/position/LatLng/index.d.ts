import { NativeObject } from '../../NativeObject';

export declare class LatLng extends NativeObject<any> {
	constructor(latitude: number, longitude: number);
	get latitude(): number;
	set latitude(value: number);
	get longitude(): number;
	set longitude(value: number);
}
