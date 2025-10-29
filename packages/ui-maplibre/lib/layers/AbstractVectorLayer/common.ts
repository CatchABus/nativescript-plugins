import { AbstractVectorLayer as IAbstractVectorLayer } from '.';
import { Expression } from '../../expressions';
import { BaseLayer } from '../BaseLayer';

export abstract class AbstractVectorLayerCommon<T> extends BaseLayer<T> implements IAbstractVectorLayer<T> {
	protected mFilter: Expression;

	public abstract get filter(): Expression;
	public abstract set filter(value: Expression);
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
