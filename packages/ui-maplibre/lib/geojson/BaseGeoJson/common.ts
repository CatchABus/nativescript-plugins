import { BaseGeoJson as IBaseGeoJson } from '.';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export abstract class BaseGeoJsonCommon<T> extends NativeObject<T> implements IBaseGeoJson<T> {
	public get type(): string {
		throw new Error('Method not implemented.');
	}
	public toJSON() {
		return {
			type: this.type,
		};
	}
}
