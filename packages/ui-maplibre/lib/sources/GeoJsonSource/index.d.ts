import { Expression } from '../../expressions';
import { ExpressionValue } from '../../expressions/ExpressionValue';
import { Feature, FeatureCollection, Geometry } from '../../geojson';
import { GeoJsonSourceCommon } from './common';

export interface GeoJsonOptions {
	buffer?: number;
	cluster?: boolean;
	clusterMaxZoom?: number;
	clusterMinPoints?: number;
	clusterProperties?: {
		[key: string]: {
			operatorExpression: ExpressionValue;
			mapExpression: ExpressionValue;
		};
	};
	clusterRadius?: number;
	lineMetrics?: boolean;
	maxZoom?: number;
	minZoom?: number;
	tolerance?: number;
}

export declare class GeoJsonSource extends GeoJsonSourceCommon<any> {
	constructor(id: string);
	constructor(id: string, content: string | URL | Feature | FeatureCollection | Geometry, options?: GeoJsonOptions);

	public getClusterExpansionZoom(feature: Feature): number;
	public getClusterChildren(feature: Feature): readonly Feature[];
	public getClusterLeaves(feature: Feature, limit: number, offset?: number): readonly Feature[];
	public querySourceFeatures(filter?: Expression): Feature[];
	public setData(value: string | URL | Feature | FeatureCollection | Geometry): void;
}
