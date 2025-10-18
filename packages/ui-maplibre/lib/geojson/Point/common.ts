import { Point as IPoint } from '.';
import { LatLng } from '../../position/LatLng';
import { Geometry } from '../Geometry';

export abstract class PointCommon<T> extends Geometry<T> implements IPoint {
	public static type = 'Point';

	protected mTarget: LatLng;

	public override get type(): string {
		return PointCommon.type;
	}

	public abstract get coordinate(): LatLng;
}
