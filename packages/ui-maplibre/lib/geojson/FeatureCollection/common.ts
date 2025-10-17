import { NativeMutableArray } from '../../NativeMutableArray';
import { BaseGeoJson } from '../BaseGeoJson';
import { Feature } from '../Feature';

export abstract class FeatureCollectionCommon<T> extends BaseGeoJson<T> {
	public static type = 'FeatureCollection';

	public override get type(): string {
		return FeatureCollectionCommon.type;
	}

	public toJSON() {
		const toJson = super.toJSON();
		return {
			...toJson,
			features: this.features,
		};
	}

	public abstract get features(): NativeMutableArray<Feature>;
}
