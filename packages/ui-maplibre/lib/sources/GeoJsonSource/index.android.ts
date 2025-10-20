import { GeoJsonOptions } from '.';
import { Expression } from '../../expressions';
import { Feature, FeatureCollection, Geometry } from '../../geojson';
import { GeoJsonSourceCommon } from './common';

export class GeoJsonSource extends GeoJsonSourceCommon<org.maplibre.android.style.sources.GeoJsonSource> {
	constructor(id: string);
	constructor(id: string, content: string | URL | Feature | FeatureCollection | Geometry, options?: GeoJsonOptions);
	constructor(...args) {
		super(...args);
	}

	public override initNative(...args): org.maplibre.android.style.sources.GeoJsonSource {
		let native: org.maplibre.android.style.sources.GeoJsonSource;

		if (args.length === 1) {
			native = new org.maplibre.android.style.sources.GeoJsonSource(args[0]);
		} else {
			let secondArg;
			let options: org.maplibre.android.style.sources.GeoJsonOptions;

			if (typeof args[1] === 'string') {
				secondArg = args[1];
			} else if (args[1] instanceof URL) {
				secondArg = new java.net.URL(args[1].toString());
			} else {
				secondArg = args[1].native;
			}

			if (args[2] && typeof args[2] === 'object') {
				options = this._createNativeOptions(args[2]);
			} else {
				options = null;
			}
			native = new org.maplibre.android.style.sources.GeoJsonSource(args[0], secondArg, options);
		}
		return native;
	}

	private _createNativeOptions(options: GeoJsonOptions): org.maplibre.android.style.sources.GeoJsonOptions {
		const native = new org.maplibre.android.style.sources.GeoJsonOptions();

		if (options.buffer != null) {
			native.withBuffer(options.buffer);
		}

		native.withCluster(!!options.cluster);

		if (options.clusterMaxZoom) {
			native.withClusterMaxZoom(options.clusterMaxZoom);
		}

		if (options.clusterMinPoints != null) {
			native.withClusterMinPoints(options.clusterMinPoints);
		}

		if (options.clusterProperties && typeof options.clusterProperties === 'object') {
			for (const key in options.clusterProperties) {
				const data = options.clusterProperties[key];
				native.withClusterProperty(key, data.operatorExpression, data.mapExpression);
			}
		}

		if (options.clusterRadius != null) {
			native.withClusterRadius(options.clusterRadius);
		}

		native.withLineMetrics(!!options.lineMetrics);

		if (options.maxZoom != null) {
			native.withMaxZoom(options.maxZoom);
		}

		if (options.minZoom != null) {
			native.withMinZoom(options.minZoom);
		}

		if (options.tolerance != null) {
			native.withTolerance(options.tolerance);
		}

		return native;
	}

	public override getClusterExpansionZoom(feature: Feature): number {
		return feature ? this.native.getClusterExpansionZoom(feature.native) : -1;
	}

	public override querySourceFeatures(filter?: Expression): Feature[] {
		const result: Feature[] = [];
		const nFeatures = this.native.querySourceFeatures(filter?.native);

		for (let i = 0, length = nFeatures.size(); i < length; i++) {
			const nFeature: org.maplibre.geojson.Feature = nFeatures.get(i);
			result.push(Feature.initWithNative(nFeature) as Feature);
		}

		return result;
	}
}
