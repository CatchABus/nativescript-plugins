import { BaseSource as IBaseSource } from '.';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export abstract class BaseSourceCommon<T> extends NativeObject<T> implements IBaseSource<T> {
	public abstract getId(): string;

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
