import { LatLng } from '../../position/LatLng';
import { Point } from '../Point';
import { MultiPointCommon } from './common';

export class MultiPoint extends MultiPointCommon<MLNPointCollection> {
	constructor(content: Point[] | string) {
		super(content);
	}
	public override initNative(content: Point[] | string): MLNPointCollection {
		let native: MLNPointCollection;

		if (typeof content === 'string') {
			const jsonData = NSString.stringWithString(content).dataUsingEncoding(NSUTF8StringEncoding);
			const nativeShape = MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);

			native = nativeShape instanceof MLNPointCollection ? nativeShape : null;
		} else {
			const length = content.length;
			const ptr = interop.alloc(interop.sizeof(CLLocationCoordinate2D) * length);
			const ref = new interop.Reference<CLLocationCoordinate2D>(CLLocationCoordinate2D, ptr);
			for (let i = 0; i < length; i++) {
				ref[i] = content[i].coordinate?.native;
			}

			native = MLNPointCollection.pointCollectionWithCoordinatesCount(ptr, length);
		}

		return native;
	}

	public override get coordinates(): readonly LatLng[] {
		if (!this.mCoordinates) {
			const ptr = interop.handleof(this.native.coordinates);
			const ref = new interop.Reference<CLLocationCoordinate2D>(CLLocationCoordinate2D, ptr);
			const arr: LatLng[] = [];

			for (let i = 0, length = this.native.pointCount; i < length; i++) {
				arr.push(LatLng.initWithNative(ref[i]) as LatLng);
			}

			this.mCoordinates = Object.freeze(arr);
		}
		return this.mCoordinates;
	}
}
