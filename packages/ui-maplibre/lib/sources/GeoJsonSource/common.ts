import { Expression } from '../../expressions';
import { Feature } from '../../geojson';
import { BaseSource } from '../BaseSource';

export abstract class GeoJsonSourceCommon<T> extends BaseSource<T> {
	public abstract getClusterExpansionZoom(feature: Feature): number;
	public abstract querySourceFeatures(filter?: Expression): Feature[];
}
