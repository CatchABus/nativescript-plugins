import { BaseSourceCommon } from './common';

export abstract class BaseSource extends BaseSourceCommon<MLNSource> {
	public override getId(): string {
		return this.native.identifier;
	}
}
