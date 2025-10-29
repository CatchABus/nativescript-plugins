import { LatLng } from '../../position/LatLng';
import { PointCommon } from './common';

export class Point extends PointCommon<MLNPointAnnotation> {
	constructor(content: LatLng | string) {
		super(content);
	}
	public override initNative(content: LatLng | string): MLNPointAnnotation {
		let native: MLNPointAnnotation;

		if (typeof content === 'string') {
			const nativeShape = Point.getNativeFromJson(content);
			native = nativeShape instanceof MLNPointAnnotation ? nativeShape : null;
		} else {
			native = MLNPointAnnotation.alloc().init();
			native.coordinate = content.native;
		}

		return native;
	}

	public override get coordinate(): LatLng {
		if (this.mTarget === undefined) {
			this.mTarget = LatLng.initWithNative(this.native.coordinate) as LatLng;
		}
		return this.mTarget;
	}
}
