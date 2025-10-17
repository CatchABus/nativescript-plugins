import { NativeObject } from '../../NativeObject';

export abstract class AbstractSourceCommon<T> extends NativeObject<T> {
	public abstract getId(): string;
}
