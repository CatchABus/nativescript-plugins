import { Expression } from '../../expressions';
import { AbstractVectorLayerCommon } from './common';

export class AbstractVectorLayer<T extends MLNVectorStyleLayer> extends AbstractVectorLayerCommon<T> {
	public override get filter(): Expression {
		if (this.mFilter === undefined) {
			this.mFilter = Expression.initWithNative(this.native.predicate) as Expression;
		}
		return this.mFilter;
	}

	public override set filter(value: Expression) {
		this.mFilter = value;
		this.native.predicate = value?.native;
	}

	public override getSourceId(): string {
		return this.native.sourceIdentifier;
	}

	public override getSourceLayer(): string {
		return this.native.sourceLayerIdentifier;
	}
}
