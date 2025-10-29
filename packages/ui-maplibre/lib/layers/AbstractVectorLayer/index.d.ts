import { Expression } from '../../expressions';
import { BaseLayer } from '../BaseLayer';

export declare abstract class AbstractVectorLayer<T = any> extends BaseLayer<T> {
	public get filter(): Expression;
	public set filter(value: Expression);
	public getSourceId(): string;
	public getSourceLayer(): string;
}
