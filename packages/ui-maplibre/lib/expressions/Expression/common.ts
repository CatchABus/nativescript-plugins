import { Expression as IExpression } from '.';
import { NativeObject } from '../../NativeObject';

export abstract class ExpressionCommon<T> extends NativeObject<T> implements IExpression {
	constructor() {
		super();
		this.throwIllegalConstructorError();
	}
}
