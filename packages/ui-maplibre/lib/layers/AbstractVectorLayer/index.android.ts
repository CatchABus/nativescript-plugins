import { Expression, ExpressionFilterSpecification } from '../../Expression';
import { AbstractVectorLayerCommon } from './common';

type AndroidVectorLayer = org.maplibre.android.style.layers.CircleLayer | org.maplibre.android.style.layers.SymbolLayer;

export class AbstractVectorLayer<T extends AndroidVectorLayer> extends AbstractVectorLayerCommon<T> {
	public override get filter(): ExpressionFilterSpecification {
		if (this.mFilter === undefined) {
			const expression = Expression.initWithNative(this.native.getFilter()) as Expression;
			this.mFilter = expression.toJSON();
		}
		return this.mFilter;
	}

	public override set filter(value: ExpressionFilterSpecification) {
		const expression = Expression.filter(value);

		this.mFilter = value;
		this.native.setFilter(expression?.native);
	}

	public override getSourceId(): string {
		return this.native.getSourceId();
	}

	public override getSourceLayer(): string {
		return this.native.getSourceLayer();
	}
}
