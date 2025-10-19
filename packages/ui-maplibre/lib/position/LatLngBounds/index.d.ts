import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LatLng } from '../LatLng';

export declare class LatLngBounds extends NativeObject<any> {
	constructor(sw: LatLng, ne: LatLng);
	public get sw(): LatLng;
	public get ne(): LatLng;
}
