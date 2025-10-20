import { GeoJsonOptions } from '.';
import { Expression } from '../../expressions';
import { Feature, FeatureCollection, Geometry } from '../../geojson';
import { GeoJsonSourceCommon } from './common';

export class GeoJsonSource extends GeoJsonSourceCommon<MLNShapeSource> {
	constructor(id: string);
	constructor(id: string, content: string | URL | Feature | FeatureCollection | Geometry, options?: GeoJsonOptions);
	constructor(...args) {
		super(...args);
	}

	public override initNative(...args): MLNShapeSource {
		let native: MLNShapeSource;

		if (args.length === 1) {
			native = MLNShapeSource.alloc().initWithIdentifier(args[0]);
		} else {
			let options: NSDictionary<string, any>;

			if (args[2] && typeof args[2] === 'object') {
				options = this._createNativeOptions(args[2]);
			} else {
				options = null;
			}

			if (args[1] instanceof URL) {
				native = MLNShapeSource.alloc().initWithIdentifierURLOptions(args[0], NSURL.URLWithString(args[1].toString()), options);
			} else {
				let nativeShape: MLNShape;

				if (typeof args[1] === 'string') {
					const jsonData = NSString.stringWithString(args[1]).dataUsingEncoding(NSUTF8StringEncoding);
					nativeShape = MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);
				} else {
					nativeShape = args[1]?.native;
				}
				native = MLNShapeSource.alloc().initWithIdentifierShapeOptions(args[0], nativeShape, options);
			}
		}
		return native;
	}

	private _createNativeOptions(options: GeoJsonOptions): NSDictionary<string, any> {
		const native = NSMutableDictionary.new<string, any>();

		if (options.buffer != null) {
			native.setValueForKey(options.buffer, MLNShapeSourceOptionBuffer);
		}

		native.setValueForKey(!!options.cluster, MLNShapeSourceOptionClustered);

		if (options.clusterMaxZoom) {
			native.setValueForKey(options.clusterMaxZoom, MLNShapeSourceOptionMaximumZoomLevelForClustering);
		}

		if (options.clusterMinPoints != null) {
			native.setValueForKey(options.clusterMinPoints, MLNShapeSourceOptionClusterMinPoints);
		}

		if (options.clusterProperties && typeof options.clusterProperties === 'object') {
			const entries = Object.entries(options.clusterProperties);
			const dict = NSMutableDictionary.alloc().initWithCapacity(entries.length);

			for (const [key, value] of entries) {
				dict.setValueForKey([value.operatorExpression, value.mapExpression], key);
			}

			native.setValueForKey(dict, MLNShapeSourceOptionClusterProperties);
		}

		if (options.clusterRadius != null) {
			native.setValueForKey(options.clusterRadius, MLNShapeSourceOptionClusterRadius);
		}

		native.setValueForKey(!!options.lineMetrics, MLNShapeSourceOptionLineDistanceMetrics);

		if (options.maxZoom != null) {
			native.setValueForKey(options.maxZoom, MLNShapeSourceOptionMaximumZoomLevel);
		}

		if (options.minZoom != null) {
			native.setValueForKey(options.minZoom, MLNShapeSourceOptionMinimumZoomLevel);
		}

		if (options.tolerance != null) {
			native.setValueForKey(options.tolerance, MLNShapeSourceOptionSimplificationTolerance);
		}

		return native;
	}

	public override getClusterExpansionZoom(feature: Feature): number {
		return feature ? this.native.zoomLevelForExpandingCluster(feature.native) : -1;
	}

	public override querySourceFeatures(filter?: Expression): Feature[] {
		const result: Feature[] = [];
		const nFeatures = this.native.featuresMatchingPredicate(filter?.native);

		for (let i = 0, length = nFeatures.count; i < length; i++) {
			const nFeature: org.maplibre.geojson.Feature = nFeatures.objectAtIndex(i);
			result.push(Feature.initWithNative(nFeature) as Feature);
		}

		return result;
	}
}
