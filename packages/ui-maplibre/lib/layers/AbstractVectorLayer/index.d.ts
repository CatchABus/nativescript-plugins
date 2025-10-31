import { ExpressionFilterSpecification } from '../../Expression';
import { BaseLayer } from '../BaseLayer';

export declare abstract class AbstractVectorLayer<T = any> extends BaseLayer<T> {
	public get filter(): ExpressionFilterSpecification;
	public set filter(value: ExpressionFilterSpecification);
	public getSourceId(): string;
	public getSourceLayer(): string;
}
