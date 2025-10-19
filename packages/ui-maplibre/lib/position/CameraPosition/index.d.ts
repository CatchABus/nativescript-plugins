import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LatLng } from '../LatLng';

export declare class CameraPosition extends NativeObject<T> {
	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number);
	public get target(): LatLng;
	public get zoom(): number;
	public get tilt(): number;
	public get heading(): number;
}
