import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';
import { ScreenPoint } from '../position/ScreenPoint';
import { ProjectionCommon } from './common';

export declare class Projection extends ProjectionCommon<any> {
	constructor(native: any);
	public fromScreenLocation(x: number, y: number): LatLng;
	public toScreenLocation(location: LatLng): IPoint;
}
