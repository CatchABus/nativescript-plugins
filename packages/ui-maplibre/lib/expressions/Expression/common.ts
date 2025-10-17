import { NativeObject } from '../../NativeObject';

export abstract class ExpressionCommon<T> extends NativeObject<T> {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}
}
