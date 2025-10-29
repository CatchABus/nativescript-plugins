import { LatLng } from '../../position';
import { Geometry } from '../Geometry';
import { FeatureCommon } from './common';

export class Feature extends FeatureCommon<MLNFeature> {
	private mDictionary: NSMutableDictionary<string, string | boolean | number>;

	public override initNative(...args: any[]): MLNFeature {
		let native: MLNFeature;

		if (args.length === 2) {
			const geometry = args[1] as Geometry;

			if (geometry.isPoint()) {
				native = MLNPointFeature.alloc().init();
				native.identifier = args[0];
				// Use this helper method to set coordinate as runtime throws the following error otherwise:
				// Error: Attempted to assign to readonly property.
				NSMapLibreHelpers.setPointFeatureCoordinateCoordinate(native as MLNPointFeature, geometry.coordinate.native);
			} else {
				native = null;
			}
		} else if (args.length === 1) {
			const nativeShape = Feature.getNativeFromJson(args[0]);
			if (this._isNativeFeature(nativeShape)) {
				native = nativeShape;
			} else {
				native = null;
			}
		} else {
			native = null;
		}

		return native;
	}

	private _isNativeFeature(obj): obj is MLNFeature {
		return obj instanceof MLNEmptyFeature || obj instanceof MLNPointFeature || obj instanceof MLNMultiPolygonFeature || obj instanceof MLNMultiPolylineFeature || obj instanceof MLNPointCollectionFeature || obj instanceof MLNPolylineFeature || obj instanceof MLNShapeCollectionFeature || obj instanceof MLNPolygonFeature || obj instanceof MLNPointFeatureCluster;
	}

	protected get attributeDictionary() {
		if (!this.mDictionary) {
			this.mDictionary = NSMutableDictionary.alloc().init();
		}
		return this.mDictionary;
	}

	public override get id(): string {
		return this.native.identifier;
	}

	public override get coordinate(): LatLng {
		const nativeCoord = this.native.coordinate;
		if (!this.mCoordinate || this.mCoordinate.latitude !== nativeCoord.latitude || this.mCoordinate.longitude !== nativeCoord.longitude) {
			this.mCoordinate = LatLng.initWithNative(this.native.coordinate) as LatLng;
		}
		return this.mCoordinate;
	}

	public override getAttribute(key: string): string | boolean | number {
		return this.native.attributeForKey(key);
	}

	public override addAttribute(key: string, value: string | boolean | number): void {
		this.attributeDictionary.setValueForKey(value, key);
		this.native.attributes = this.attributeDictionary;
	}

	public override removeAttribute(key: string): void {
		this.attributeDictionary.removeObjectForKey(key);
		this.native.attributes = this.attributeDictionary;
	}
}
