import { MultiPoint as IMultiPoint } from '.';
import { LatLng } from '../../position/LatLng';
import { Geometry } from '../Geometry';

export abstract class MultiPointCommon<T> extends Geometry<T> implements IMultiPoint {
	public static type = 'MultiPoint';

	protected mCoordinates: readonly LatLng[];

	public override get type(): string {
		return MultiPointCommon.type;
	}

	public toJSON() {
		return {
			...super.toJSON(),
			coordinates: this.coordinates,
		};
	}

	public abstract get coordinates(): readonly LatLng[];
}
