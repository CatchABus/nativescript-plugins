import { NativeObject } from '../../NativeObject';

export abstract class ExpressionValueCommon<T> extends NativeObject<T> {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}
}
