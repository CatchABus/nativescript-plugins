import { ExpressionValue as IExpressionValue } from '.';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export abstract class ExpressionValueCommon<T> extends NativeObject<T> implements IExpressionValue<any> {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}
}
