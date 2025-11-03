import { AbstractVectorLayer as IAbstractVectorLayer } from '.';
import { ExpressionFilterSpecification } from '../../Expression';
import { BaseLayer, LayerProperties } from '../BaseLayer';

export abstract class AbstractVectorLayerCommon<T> extends BaseLayer<T, LayerProperties> implements IAbstractVectorLayer<T, LayerProperties> {
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
