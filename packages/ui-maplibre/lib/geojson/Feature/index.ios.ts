import { LatLng } from '../../position';
import { Geometry } from '../Geometry';
import { FeatureCommon } from './common';

export class Feature extends FeatureCommon<MLNFeature> {
	private mDictionary: NSMutableDictionary<string, string | boolean | number>;

	constructor(content: Geometry | string | MLNFeature) {
		super(content);
	}

	public override initNative(content: Geometry | string | MLNFeature): MLNFeature {
		let native: MLNFeature;

		if (this._isNativeFeature(content)) {
			native = content;
		} else if (content instanceof Geometry) {
			if (content.isPoint()) {
				native = MLNPointFeature.alloc().init();
				NSCMapLibreHelpers.setPointFeatureCoordinateCoordinate(native as MLNPointFeature, content.coordinate.native);
			}
		} else if (typeof content === 'string') {
			const jsonData = NSString.stringWithString(content).dataUsingEncoding(NSUTF8StringEncoding);
			const nativeShape = MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);

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

	public override get coordinate(): LatLng {
		const nativeCoord = this.native.coordinate;
		if (!this.mCoordinate || this.mCoordinate.latitude !== nativeCoord.latitude || this.mCoordinate.longitude !== nativeCoord.longitude) {
			this.mCoordinate = new LatLng(this.native.coordinate);
		}
		return this.mCoordinate;
	}
}
