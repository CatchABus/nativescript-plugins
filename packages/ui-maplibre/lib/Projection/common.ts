import { NativeObject } from '../NativeObject';
import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';

export abstract class ProjectionCommon<T> extends NativeObject<T> {
	public override initNative(native: any): T {
		return native;
	}

	public abstract fromScreenLocation(x: number, y: number): LatLng;
	public abstract toScreenLocation(location: LatLng): IPoint;
}
