import { ExpressionSpecification, Expression as IExpression } from '.';
import { NativeObject } from '../nativeWrappers/NativeObject';

export abstract class ExpressionCommon<T> extends NativeObject<T> implements IExpression {
	protected mJson: ExpressionSpecification;

	constructor() {
		super();
		this.throwIllegalConstructorError();
	}

	public abstract toJSON(): ExpressionSpecification;
}
