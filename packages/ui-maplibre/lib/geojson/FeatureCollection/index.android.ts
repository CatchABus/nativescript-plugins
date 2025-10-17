import { NativeMutableArray } from '../../NativeMutableArray';
import { Feature } from '../Feature';
import { FeatureCollectionCommon } from './common';

export class FeatureCollection extends FeatureCollectionCommon<org.maplibre.geojson.FeatureCollection> {
	private mFeatures: NativeMutableArray<Feature>;

	constructor(content: Feature | Feature[] | string) {
		super(content);
	}
	public override initNative(content: Feature | Feature[] | string): org.maplibre.geojson.FeatureCollection {
		let native: org.maplibre.geojson.FeatureCollection;

		if (Array.isArray(content)) {
			const length = content.length;
			const arr = Array.create(org.maplibre.geojson.Feature, length) as androidNative.Array<org.maplibre.geojson.Feature>;

			for (let i = 0; i < length; i++) {
				arr[i] = content[i].native;
			}

			native = org.maplibre.geojson.FeatureCollection.fromFeatures(arr);
		} else if (content instanceof Feature) {
			native = org.maplibre.geojson.FeatureCollection.fromFeature(content.native);
		} else {
			native = org.maplibre.geojson.FeatureCollection.fromJson(content);
		}

		return native;
	}

	public override get features(): NativeMutableArray<Feature> {
		if (!this.mFeatures) {
			const nFeatures = this.native.features();
			const arr = new NativeMutableArray(nFeatures);

			for (let i = 0, length = nFeatures.size(); i < length; i++) {
				arr.push(new Feature(nFeatures.get(i)));
			}

			arr.registerObserver();
			this.mFeatures = arr;
		}
		return this.mFeatures;
	}
}
