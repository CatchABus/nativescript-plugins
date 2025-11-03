import { ExpressionFilterSpecification } from '../../Expression';
import { BaseLayer, LayerProperties } from '../BaseLayer';

export declare abstract class AbstractVectorLayer<T = any, U extends LayerProperties = LayerProperties> extends BaseLayer<T, U> {
	public get filter(): ExpressionFilterSpecification;
	public set filter(value: ExpressionFilterSpecification);
	public getSourceId(): string;
	public getSourceLayer(): string;
}
