import { BaseGeoJson } from '../BaseGeoJson';
import { Point } from '../Point';

export declare abstract class Geometry<T = any> extends BaseGeoJson<T> {
	public isPoint(): this is Point;
}
