import { LatLng } from '../../position';
import { Geometry } from '../Geometry';
import { FeatureCommon } from './common';

export declare class Feature extends FeatureCommon<any> {
	public static type: string;

	constructor(content: any);
	public getAttribute(key: string): string | boolean | number;
	public addAttribute(key: string, value: string | boolean | number): void;
	public removeAttribute(key: string): void;

	public get coordinate(): LatLng;
}
