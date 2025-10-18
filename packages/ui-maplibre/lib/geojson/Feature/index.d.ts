import { LatLng } from '../../position';
import { BaseGeoJson } from '../BaseGeoJson';
import { Geometry } from '../Geometry';

export declare class Feature extends BaseGeoJson<any> {
	public static type: string;

	constructor(id: string, geometry: Geometry);
	constructor(json: string);
	public get id(): string;
	public get coordinate(): LatLng;

	public getAttribute(key: string): string | boolean | number;
	public addAttribute(key: string, value: string | boolean | number): void;
	public removeAttribute(key: string): void;
}
