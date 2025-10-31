import { AbstractVectorLayer as IAbstractVectorLayer } from '.';
import { ExpressionFilterSpecification } from '../../Expression';
import { BaseLayer } from '../BaseLayer';

export abstract class AbstractVectorLayerCommon<T> extends BaseLayer<T> implements IAbstractVectorLayer<T> {
	protected mFilter: ExpressionFilterSpecification;

	public abstract get filter(): ExpressionFilterSpecification;
	public abstract set filter(value: ExpressionFilterSpecification);
	public abstract getSourceId(): string;
	public abstract getSourceLayer(): string;

	public toJSON() {
		return {
			...super.toJSON(),
			sourceId: this.getSourceId(),
			sourceLayer: this.getSourceLayer(),
		};
	}
}
