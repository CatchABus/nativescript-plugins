import { AbstractSourceCommon } from './common';

export abstract class AbstractSource extends AbstractSourceCommon<org.maplibre.android.style.sources.Source> {
	public override getId(): string {
		return this.native.getId();
	}
}
