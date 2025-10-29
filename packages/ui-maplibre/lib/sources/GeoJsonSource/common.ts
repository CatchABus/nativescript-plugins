import { GeoJsonSource as IGeoJsonSource } from '.';
import { Expression } from '../../expressions';
import { Feature, FeatureCollection, Geometry } from '../../geojson';
import { BaseSource } from '../BaseSource';

export abstract class GeoJsonSourceCommon<T> extends BaseSource<T> implements IGeoJsonSource {
	public abstract getClusterExpansionZoom(feature: Feature): number;
	public abstract querySourceFeatures(filter?: Expression): Feature[];
	public abstract setData(value: string | URL | Feature | FeatureCollection | Geometry): void;
}
