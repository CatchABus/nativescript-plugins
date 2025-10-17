import { LatLng } from '../../position';
import { BaseGeoJson } from '../BaseGeoJson';

export abstract class FeatureCommon<T> extends BaseGeoJson<T> {
	public static type = 'Feature';

	protected mCoordinate: LatLng;

	public override get type(): string {
		return FeatureCommon.type;
	}

	public abstract getAttribute(key: string): string | boolean | number;
	public abstract addAttribute(key: string, value: string | boolean | number): void;
	public abstract removeAttribute(key: string): void;

	public abstract get coordinate(): LatLng;
}
