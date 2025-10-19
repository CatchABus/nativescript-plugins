import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare abstract class BaseGeoJson<T = any> extends NativeObject<T> {
	public get type(): string;
}
