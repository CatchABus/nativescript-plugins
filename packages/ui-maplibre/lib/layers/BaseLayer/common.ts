import { Trace } from '@nativescript/core';
import { BaseLayer as IBaseLayer, LayerProperties } from '.';
import type { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LayoutProperty } from '../../utils/decorators';

export abstract class BaseLayerCommon<T> extends NativeObject<T> implements IBaseLayer<T, LayerProperties> {
	declare layoutProperties: Set<string> | undefined;
	declare paintProperties: Set<string> | undefined;

	private mCachedPropertyValues: Map<string, PropertyValueSpecification<any>>;

	@LayoutProperty('visibility')
	public visibility: 'visible' | 'none';

	public abstract getId(): string;
	public abstract get minZoom(): number;
	public abstract set minZoom(value: number);
	public abstract get maxZoom(): number;
	public abstract set maxZoom(value: number);

	public getType(): string {
		// This method is overridden by decorators
		return null;
	}

	protected get cachedPropertyValues() {
		if (!this.mCachedPropertyValues) {
			this.mCachedPropertyValues = new Map();
		}
		return this.mCachedPropertyValues;
	}

	public _getPropertyValueInternal(name: string): PropertyValueSpecification<any> {
		return this.cachedPropertyValues.get(name);
	}

	public _getOrSetPropertyValueInternal<T>(name: string, lazyValue: () => T): PropertyValueSpecification<any> {
		if (!this.cachedPropertyValues.has(name)) {
			this.cachedPropertyValues.set(name, lazyValue());
		}
		return this.cachedPropertyValues.get(name);
	}

	public _setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): boolean {
		if (!this.layoutProperties?.has(name) && !this.paintProperties?.has(name)) {
			Trace.write(`Unsupported property '${name}' with value '${value}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
			return false;
		}

		this.cachedPropertyValues.set(name, value);
		return true;
	}

	public getProperty<K extends keyof LayerProperties>(name: K): LayerProperties[K] {
		return this[name];
	}

	public setProperty<K extends keyof LayerProperties>(name: K, value: LayerProperties[K]): void {
		this[name] = value;
	}

	public setProperties(value: Partial<LayerProperties>): void {
		if (value) {
			const entries = Object.entries(value) as [keyof LayerProperties, LayerProperties[keyof LayerProperties]][];
			for (const [key, value] of entries) {
				this.setProperty(key, value);
			}
		}
	}

	public abstract convertColorValueToNative(value: PropertyValueSpecification<ColorSpecification>): any;

	public toJSON() {
		return {
			id: this.getId(),
			type: this.getType(),
		};
	}
}
