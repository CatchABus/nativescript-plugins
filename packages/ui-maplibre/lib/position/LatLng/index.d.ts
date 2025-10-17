import { LatLngCommon } from './common';

export interface ILatLng {
	latitude: number;
	longitude: number;
}

export declare class LatLng extends LatLngCommon<any> {
	constructor(native: any);
	constructor(latitude: number, longitude: number);
	get latitude(): number;
	set latitude(value: number);
	get longitude(): number;
	set longitude(value: number);
}
