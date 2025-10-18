import { LatLng } from '../../position/LatLng';
import { Geometry } from '../Geometry';

export declare class Point extends Geometry<any> {
	public static type: string;

	constructor(content: LatLng | string);
	public get coordinate(): LatLng;
}
