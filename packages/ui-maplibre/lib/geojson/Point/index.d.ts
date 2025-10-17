import { LatLng } from '../../position/LatLng';
import { PointCommon } from './common';

export declare class Point extends PointCommon<any> {
	public static type: string;

	constructor(content: LatLng | string);
	public get coordinate(): LatLng;
}
