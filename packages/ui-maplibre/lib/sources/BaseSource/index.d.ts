import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare abstract class BaseSource<T = any> extends NativeObject<T> {
	public getId(): string;
}
