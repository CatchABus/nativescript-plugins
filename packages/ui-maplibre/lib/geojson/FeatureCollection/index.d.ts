import { NativeMutableArray } from '../../NativeMutableArray';
import { Feature } from '../Feature';
import { Geometry } from '../Geometry';
import { FeatureCollectionCommon } from './common';

export declare class FeatureCollection extends FeatureCollectionCommon<any> {
	public static type: string;

	constructor(content: Feature | Feature[] | string);
	public get features(): NativeMutableArray<Feature>;
}
