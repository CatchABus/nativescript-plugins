import { LatLng } from '../../position/LatLng';
import { PointCommon } from './common';

export class Point extends PointCommon<MLNPointAnnotation> {
	constructor(content: LatLng | string) {
		super(content);
	}
	public override initNative(content: LatLng | string): MLNPointAnnotation {
		let native: MLNPointAnnotation;

		if (typeof content === 'string') {
			const jsonData = NSString.stringWithString(content).dataUsingEncoding(NSUTF8StringEncoding);
			const nativeShape = MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);

			native = nativeShape instanceof MLNPointAnnotation ? nativeShape : null;
		} else {
			native = MLNPointAnnotation.alloc().init();
			native.coordinate = content.native;
		}

		return native;
	}

	public override get coordinate(): LatLng {
		if (this.mTarget === undefined) {
			this.mTarget = new LatLng(this.native.coordinate.latitude, this.native.coordinate.longitude);
		}
		return this.mTarget;
	}
}
