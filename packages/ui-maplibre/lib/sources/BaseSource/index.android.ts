import { BaseSourceCommon } from './common';

export abstract class BaseSource extends BaseSourceCommon<org.maplibre.android.style.sources.Source> {
	public override getId(): string {
		return this.native.getId();
	}
}
