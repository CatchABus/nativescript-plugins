import { Expression } from '../expressions/Expression';
import { BaseLayer } from './BaseLayer';

export abstract class VectorStyleLayer<T = any> extends BaseLayer<T> {
	private mFilter: Expression;

	public get filter(): Expression {
		return this.mFilter;
	}

	public set filter(value: Expression) {
		this.mFilter = value;
	}
}
