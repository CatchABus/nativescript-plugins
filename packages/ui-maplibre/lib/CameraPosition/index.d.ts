import { LatLng } from '../position/LatLng';
import { CameraPositionCommon } from './common';

export declare class CameraPosition extends CameraPositionCommon<any> {
	constructor(target?: LatLng, zoom?: number, tilt?: number, bearing?: number);
	public get target(): LatLng;
	public get zoom(): number;
	public get tilt(): number;
	public get heading(): number;
}
