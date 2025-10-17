import { Expression } from '../../expressions';
import { Feature } from '../../geojson';
import { AbstractSource } from '../AbstractSource';

export abstract class GeoJsonSourceCommon<T> extends AbstractSource<T> {
	public abstract getClusterExpansionZoom(feature: Feature): number;
	public abstract querySourceFeatures(filter?: Expression): Feature[];
}
