import { GeoJsonSource as IGeoJsonSource } from '.';
import { ExpressionFilterSpecification } from '../../Expression';
import { Feature, FeatureCollection, Geometry } from '../../geojson';
import { BaseSource } from '../BaseSource';

export abstract class GeoJsonSourceCommon<T> extends BaseSource<T> implements IGeoJsonSource {
	public abstract getClusterExpansionZoom(feature: Feature): number;
	public abstract getClusterChildren(feature: Feature): readonly Feature[];
	public abstract getClusterLeaves(feature: Feature, limit: number, offset?: number): readonly Feature[];
	public abstract querySourceFeatures(filter?: ExpressionFilterSpecification): Feature[];
	public abstract setData(value: string | URL | Feature | FeatureCollection | Geometry): void;
}
