import { AbstractSourceCommon } from './common';

export abstract class AbstractSource extends AbstractSourceCommon<MLNSource> {
	public override getId(): string {
		return this.native.identifier;
	}
}
