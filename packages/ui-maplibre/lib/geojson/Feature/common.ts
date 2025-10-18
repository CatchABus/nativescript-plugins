import { Feature as IFeature } from '.';
import { LatLng } from '../../position';
import { BaseGeoJson } from '../BaseGeoJson';
import { Geometry } from '../Geometry';

export abstract class FeatureCommon<T> extends BaseGeoJson<T> implements IFeature {
	public static type = 'Feature';

	protected mCoordinate: LatLng;

	public override get type(): string {
		return FeatureCommon.type;
	}

	public get id(): string {
		throw new Error('Method not implemented.');
	}
	public get coordinate(): LatLng {
		throw new Error('Method not implemented.');
	}
	public getAttribute(key: string): string | boolean | number {
		throw new Error('Method not implemented.');
	}
	public addAttribute(key: string, value: string | boolean | number): void {
		throw new Error('Method not implemented.');
	}
	public removeAttribute(key: string): void {
		throw new Error('Method not implemented.');
	}

	public toJSON() {
		return {
			id: this.id,
			...super.toJSON(),
		};
	}
}
