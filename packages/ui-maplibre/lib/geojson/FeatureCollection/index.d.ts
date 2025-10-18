import { BaseGeoJson } from '../BaseGeoJson';
import { Feature } from '../Feature';
import { Geometry } from '../Geometry';

export declare class FeatureCollection extends BaseGeoJson<any> {
	public static type: string;

	constructor(content: Feature | Feature[] | string);
	public get features(): readonly Feature[];
}
