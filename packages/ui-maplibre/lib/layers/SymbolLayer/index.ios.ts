import { BaseSource } from '../../sources/BaseSource';
import { SymbolLayerCommon } from './common';
import { Expression } from '../../Expression';
import { Color } from '@nativescript/core';

export class SymbolLayer extends SymbolLayerCommon<MLNSymbolStyleLayer> {
	constructor(id: string, source: BaseSource) {
		super(id, source);
	}

	public override initNative(id: string, source: BaseSource): MLNSymbolStyleLayer {
		return MLNSymbolStyleLayer.alloc().initWithIdentifierSource(id, source.native);
	}

	public override get iconAllowsOverlap() {
		if (super.iconAllowsOverlap === undefined) {
			super.iconAllowsOverlap = (Expression.initWithNative(this.native.iconAllowsOverlap) as Expression).toJSON();
		}
		return super.iconAllowsOverlap;
	}

	public override set iconAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);

		super.iconAllowsOverlap = value;
		this.native.iconAllowsOverlap = expression?.native;
	}

	public override get iconScale() {
		if (super.iconScale === undefined) {
			super.iconScale = (Expression.initWithNative(this.native.iconScale) as Expression).toJSON();
		}
		return super.iconScale;
	}

	public override set iconScale(value) {
		const expression = Expression.propertyValue(value);

		super.iconScale = value;
		this.native.iconScale = expression?.native;
	}

	public override get iconImageName() {
		if (super.iconImageName === undefined) {
			super.iconImageName = (Expression.initWithNative(this.native.iconImageName) as Expression).toJSON();
		}
		return super.iconImageName;
	}

	public override set iconImageName(value) {
		const expression = Expression.propertyValue(value);

		super.iconImageName = value;
		this.native.iconImageName = expression?.native;
	}

	public override get text() {
		if (super.text === undefined) {
			super.text = (Expression.initWithNative(this.native.text) as Expression).toJSON();
		}
		return super.text;
	}

	public override set text(value) {
		const expression = Expression.propertyValue(value);

		super.text = value;
		this.native.text = expression?.native;
	}

	public override get textAllowsOverlap() {
		if (super.textAllowsOverlap === undefined) {
			super.textAllowsOverlap = (Expression.initWithNative(this.native.textAllowsOverlap) as Expression).toJSON();
		}
		return super.textAllowsOverlap;
	}

	public override set textAllowsOverlap(value) {
		const expression = Expression.propertyValue(value);

		super.textAllowsOverlap = value;
		this.native.textAllowsOverlap = expression?.native;
	}

	public override get textSize() {
		if (super.textSize === undefined) {
			super.textSize = (Expression.initWithNative(this.native.textFontSize) as Expression).toJSON();
		}
		return super.textSize;
	}

	public override set textSize(value) {
		const expression = Expression.propertyValue(value);

		super.textSize = value;
		this.native.textFontSize = expression?.native;
	}

	public override get textColor() {
		if (super.textColor === undefined) {
			super.textColor = (Expression.initWithNative(this.native.textColor) as Expression).toJSON();
		}
		return super.textColor;
	}

	public override set textColor(value) {
		const expression = Expression.propertyValue(typeof value === 'string' ? new Color(value) : value);

		super.textColor = value;
		this.native.textColor = expression?.native;
	}

	public override get textFontNames() {
		if (super.textFontNames === undefined) {
			super.textFontNames = (Expression.initWithNative(this.native.textFontNames) as Expression).toJSON();
		}
		return super.textFontNames;
	}

	public override set textFontNames(value) {
		const expression = Expression.propertyValue(value);

		super.textFontNames = value;
		this.native.textFontNames = expression?.native;
	}
}
