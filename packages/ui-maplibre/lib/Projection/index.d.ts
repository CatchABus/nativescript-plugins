import { NativeObject } from '../nativeWrappers/NativeObject';
import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';
import { ScreenPoint } from '../position/ScreenPoint';

export declare class Projection extends NativeObject<any> {
	constructor();
	public fromScreenLocation(x: number, y: number): LatLng;
	public toScreenLocation(location: LatLng): IPoint;
}
