import { Geometry as IGeometry } from '.';
import { BaseGeoJson } from '../BaseGeoJson';
import type { Point } from '../Point';

export abstract class GeometryCommon<T> extends BaseGeoJson<T> implements IGeometry<T> {
	public override get type(): string {
		return null;
	}

	public isPoint(): this is Point {
		return this.type === 'Point';
	}
}
