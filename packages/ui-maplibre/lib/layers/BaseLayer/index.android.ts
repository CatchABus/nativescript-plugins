import { Trace } from '@nativescript/core';
import { LayerProperties } from '.';
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

	private _convertPropertyValueToNative(value: any): any {
		let nativeValue;

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

		return nativeValue;
	}

	public override setPropertyValueInternal(name: string, value: any): boolean {
		if (!super.setPropertyValueInternal(name, value)) {
			return false;
		}

		const nativeValue = this._convertPropertyValueToNative(value);
		let nativePair: org.maplibre.android.style.layers.PropertyValue<unknown>;

		if (this.layoutPropertyMappings?.has(name)) {
			nativePair = new org.maplibre.android.style.layers.LayoutPropertyValue(name, nativeValue);
		} else if (this.paintPropertyMappings?.has(name)) {
			nativePair = new org.maplibre.android.style.layers.PaintPropertyValue(name, nativeValue);
		} else {
			nativePair = null;
		}

		if (nativePair) {
			this.nativePropsArray[0] = nativePair;
			this.native.setProperties(this.nativePropsArray);
		} else {
			Trace.write(`Unsupported property '${name}' with value '${value}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
		}
	}

	public override setProperties(value: LayerProperties): void {
		if (value) {
			const propertyValues: org.maplibre.android.style.layers.PropertyValue<unknown>[] = [];
			const entries = Object.entries(value);

			for (const [key, value] of entries) {
				let nativePair: org.maplibre.android.style.layers.PropertyValue<unknown>;

				if (this.layoutPropertyMappings?.has(key)) {
					nativePair = new org.maplibre.android.style.layers.LayoutPropertyValue(key, this._convertPropertyValueToNative(value));
				} else if (this.paintPropertyMappings?.has(key)) {
					nativePair = new org.maplibre.android.style.layers.PaintPropertyValue(key, this._convertPropertyValueToNative(value));
				} else {
					nativePair = null;
				}

				if (nativePair) {
					if (this.cachedPropertyValues.has(key)) {
						this.cachedPropertyValues.delete(key);
					}

					propertyValues.push(nativePair);
				} else {
					Trace.write(`Unsupported property '${key}' with value '${value}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
				}
			}

			const length = propertyValues.length;

			if (length > 0) {
				let nativeArr: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<unknown>>;

				if (length > 1) {
					const arr = Array.create(org.maplibre.android.style.layers.PropertyValue, length);
					for (let i = 0; i < length; i++) {
						arr[i] = propertyValues[i];
					}

					nativeArr = arr;
				} else {
					this.nativePropsArray[0] = propertyValues[0];
					nativeArr = this.nativePropsArray;
				}

				this.native.setProperties(nativeArr);
			}
		}
	}

	public override get visibility() {
		return this.getOrSetPropertyValueInternal('visibility', () => (this.native.getVisibility().value?.toString?.() === 'visible' ? 'visible' : 'none'));
	}

	public override set visibility(value) {
		super.visibility = value;
	}
}
