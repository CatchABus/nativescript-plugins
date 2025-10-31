import { Expression, ExpressionFilterSpecification } from '../../Expression';
import { AbstractVectorLayerCommon } from './common';

export class AbstractVectorLayer<T extends MLNVectorStyleLayer> extends AbstractVectorLayerCommon<T> {
	public override get filter(): ExpressionFilterSpecification {
		if (this.mFilter === undefined) {
			const expression = Expression.initWithNative(this.native.predicate) as Expression;
			this.mFilter = expression.toJSON();
		}
		return this.mFilter;
	}

	public override set filter(value: ExpressionFilterSpecification) {
		const expression = Expression.filter(value);

		this.mFilter = value;
		this.native.predicate = expression?.native;
	}

	public override getSourceId(): string {
		return this.native.sourceIdentifier;
	}

	public override getSourceLayer(): string {
		return this.native.sourceLayerIdentifier;
	}
}
