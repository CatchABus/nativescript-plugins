import { LatLng } from '../../position/LatLng';
import { Geometry } from '../Geometry';
import { Point } from '../Point';

export declare class MultiPoint extends Geometry<any> {
	public static type: string;

	constructor(content: Point[] | string);
	public get coordinates(): readonly LatLng[];
}
