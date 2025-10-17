import { AbstractSourceCommon } from './common';

export declare abstract class AbstractSource<T> extends AbstractSourceCommon<T> {
	public getId(): string;
}
