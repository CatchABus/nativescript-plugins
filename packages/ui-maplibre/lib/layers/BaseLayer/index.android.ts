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
		let nativeValue;
		let nativePair: org.maplibre.android.style.layers.PropertyValue<unknown>;

		console.log(value);
		// Use literal value when possible otherwise expression will have no effect for special cases like images, patterns, etc
		if (Array.isArray(value)) {
			nativeValue = Expression.propertyValue(value)?.native;
		} else {
			if (typeof value === 'number') {
				nativeValue = new java.lang.Float(value);
			} else if (typeof value === 'boolean') {
				nativeValue = new java.lang.Boolean(value);
			} else {
				nativeValue = value;
			}
		}

		super.setPropertyValueInternal(name, value);

		if (BaseLayer.layoutPropertyMappings.has(name)) {
			nativePair = new org.maplibre.android.style.layers.LayoutPropertyValue(name, nativeValue);
		} else if (BaseLayer.paintPropertyMappings.has(name)) {
			nativePair = new org.maplibre.android.style.layers.PaintPropertyValue(name, nativeValue);
		} else {
			nativePair = null;
		}

		this.nativePropsArray[0] = nativePair;
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
