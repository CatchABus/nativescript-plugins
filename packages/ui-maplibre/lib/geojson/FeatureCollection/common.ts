import { FeatureCollection as IFeatureCollection } from '.';
import { BaseGeoJson } from '../BaseGeoJson';
import { Feature } from '../Feature';

export abstract class FeatureCollectionCommon<T> extends BaseGeoJson<T> implements IFeatureCollection {
	public static type = 'FeatureCollection';

	public override get type(): string {
		return FeatureCollectionCommon.type;
	}

	public toJSON() {
		return {
			...super.toJSON(),
			features: this.features,
		};
	}

	public abstract get features(): readonly Feature[];
}
