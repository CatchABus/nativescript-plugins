import { LatLng } from '../LatLng';
import { LatLngBoundsCommon } from './common';

export declare class LatLngBounds extends LatLngBoundsCommon<any> {
	constructor(sw: LatLng, ne: LatLng);
	public abstract get sw(): LatLng;
	public abstract get ne(): LatLng;
}
