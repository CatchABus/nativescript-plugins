import { Expression } from '../../expressions';
import { AbstractVectorLayerCommon } from './common';

type AndroidVectorLayer = org.maplibre.android.style.layers.CircleLayer | org.maplibre.android.style.layers.SymbolLayer;

export class AbstractVectorLayer<T extends AndroidVectorLayer> extends AbstractVectorLayerCommon<T> {
	public override get filter(): Expression {
		if (this.mFilter === undefined) {
			this.mFilter = Expression.initWithNative(this.native.getFilter()) as Expression;
		}
		return this.mFilter;
	}

	public override set filter(value: Expression) {
		this.mFilter = value;
		this.native.setFilter(value?.native);
	}

	public override getSourceId(): string {
		return this.native.getSourceId();
	}

	public override getSourceLayer(): string {
		return this.native.getSourceLayer();
	}
}
