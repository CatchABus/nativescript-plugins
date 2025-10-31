import { Expression } from '../../Expression';
import { BaseLayerCommon } from './common';

export abstract class BaseLayer<T extends org.maplibre.android.style.layers.Layer> extends BaseLayerCommon<T> {
	private mNativeExpPropArray: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>;

	private get nativePropsArray() {
		if (!this.mNativeExpPropArray) {
			this.mNativeExpPropArray = Array.create(org.maplibre.android.style.layers.PropertyValue, 1);
		}
		return this.mNativeExpPropArray;
	}

	public override getId(): string {
		return this.native.getId();
	}

	public override setPropertyValueInternal(name: string, value: any): void {
		const expression = Expression.propertyValue(value);
		let nativeValue: org.maplibre.android.style.layers.PropertyValue<unknown>;

		super.setPropertyValueInternal(name, value);

		if (BaseLayer.layoutPropertyMappings.has(name)) {
			nativeValue = new org.maplibre.android.style.layers.LayoutPropertyValue(name, expression?.native);
		} else if (BaseLayer.paintPropertyMappings.has(name)) {
			nativeValue = new org.maplibre.android.style.layers.LayoutPropertyValue(name, expression?.native);
		} else {
			nativeValue = null;
		}

		this.nativePropsArray[0] = nativeValue;
		this.native.setProperties(this.nativePropsArray);
	}

	public override get visible(): 'visible' | 'none' {
		if (super.visible === undefined) {
			super.visible = this.native.getVisibility().value === 'visible' ? 'visible' : 'none';
		}
		return super.visible;
	}

	public override set visible(value) {
		super.visible = value;
	}
}
