import { Projection as IProjection } from '.';
import { NativeObject } from '../NativeObject';
import { IPoint } from '../position';
import { LatLng } from '../position/LatLng';

export abstract class ProjectionCommon<T> extends NativeObject<T> implements IProjection {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}

	public abstract fromScreenLocation(x: number, y: number): LatLng;
	public abstract toScreenLocation(location: LatLng): IPoint;
}
