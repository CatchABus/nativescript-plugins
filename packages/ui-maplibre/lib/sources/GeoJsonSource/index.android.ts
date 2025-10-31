import { GeoJsonOptions } from '.';
import { Expression, ExpressionFilterSpecification } from '../../Expression';
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
			let content;
			let options: org.maplibre.android.style.sources.GeoJsonOptions;

			if (typeof args[1] === 'string') {
				content = args[1];
			} else if (args[1] instanceof URL) {
				content = new java.net.URI(args[1].toString());
			} else {
				content = args[1]?.native;
			}

			if (args[2] && typeof args[2] === 'object') {
				options = this._createNativeOptions(args[2]);
			} else {
				options = null;
			}

			if (content) {
				native = new org.maplibre.android.style.sources.GeoJsonSource(args[0], content, options);
			} else if (options) {
				native = new org.maplibre.android.style.sources.GeoJsonSource(args[0], options);
			} else {
				native = new org.maplibre.android.style.sources.GeoJsonSource(args[0]);
			}
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

				if (Array.isArray(data)) {
					const operatorExpression = Expression.propertyValue(data[0]);
					const mapExpression = Expression.propertyValue(data[1]);

					native.withClusterProperty(key, operatorExpression?.native, mapExpression?.native);
				}
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
		return feature?.native ? this.native.getClusterExpansionZoom(feature.native) : -1;
	}

	public override getClusterChildren(feature: Feature): readonly Feature[] {
		const result: Feature[] = [];

		if (feature?.native) {
			const nFeatureCollection = this.native.getClusterChildren(feature?.native);
			const nFeatures = nFeatureCollection.features();

			for (let i = 0, length = nFeatures.size(); i < length; i++) {
				const nFeature: org.maplibre.geojson.Feature = nFeatures.get(i);
				result.push(Feature.initWithNative(nFeature) as Feature);
			}
		}

		return Object.freeze(result);
	}

	public override getClusterLeaves(feature: Feature, limit: number, offset?: number): readonly Feature[] {
		const result: Feature[] = [];

		if (feature?.native) {
			const nFeatureCollection = this.native.getClusterLeaves(feature?.native, limit, offset || 0);
			const nFeatures = nFeatureCollection.features();

			for (let i = 0, length = nFeatures.size(); i < length; i++) {
				const nFeature: org.maplibre.geojson.Feature = nFeatures.get(i);
				result.push(Feature.initWithNative(nFeature) as Feature);
			}
		}

		return Object.freeze(result);
	}

	public override querySourceFeatures(filter?: ExpressionFilterSpecification): Feature[] {
		const result: Feature[] = [];
		const expression = Expression.filter(filter);
		const nFeatures = this.native.querySourceFeatures(expression?.native);

		for (let i = 0, length = nFeatures.size(); i < length; i++) {
			const nFeature: org.maplibre.geojson.Feature = nFeatures.get(i);
			result.push(Feature.initWithNative(nFeature) as Feature);
		}

		return result;
	}

	public override setData(value: string | URL | Feature | FeatureCollection | Geometry): void {
		if (!value) {
			this.native.setUri('');
			this.native.setGeoJsonSync('');
		} else if (typeof value === 'string') {
			this.native.setGeoJsonSync(value);
		} else if (value instanceof URL) {
			this.native.setUri(value.toString());
		} else {
			this.native.setGeoJsonSync(value?.native);
		}
	}
}
