import { BaseGeoJsonCommon } from './common';

export declare abstract class BaseGeoJson<T = any> extends BaseGeoJsonCommon<T> {
	public get type(): string;
}
