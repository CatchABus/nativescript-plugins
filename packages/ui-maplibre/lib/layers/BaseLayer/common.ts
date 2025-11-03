import { Trace } from '@nativescript/core';
import { BaseLayer as IBaseLayer, LayerProperties } from '.';
import type { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LayoutProperty } from '../../utils/decorators';

export abstract class BaseLayerCommon<T> extends NativeObject<T> implements IBaseLayer<T, LayerProperties> {
	declare layoutPropertyMappings: Map<string, string> | undefined;
	declare paintPropertyMappings: Map<string, string> | undefined;

	private mCachedPropertyValues: Map<string, PropertyValueSpecification<any>>;

	public abstract getId(): string;

	protected get cachedPropertyValues() {
		if (!this.mCachedPropertyValues) {
			this.mCachedPropertyValues = new Map();
		}
		return this.mCachedPropertyValues;
	}

	@LayoutProperty('visibility')
	public set visibility(value: 'visible' | 'none') {
		this.setPropertyValueInternal('visibility', value);
	}

	public getPropertyValueInternal(name: string): PropertyValueSpecification<any> {
		return this.cachedPropertyValues.get(name);
	}

	public getOrSetPropertyValueInternal<T>(name: string, lazyValue: () => T): PropertyValueSpecification<any> {
		if (!this.cachedPropertyValues.has(name)) {
			this.cachedPropertyValues.set(name, lazyValue());
		}
		return this.cachedPropertyValues.get(name);
	}

	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): boolean {
		if (!this.layoutPropertyMappings?.has(name) && !this.paintPropertyMappings?.has(name)) {
			Trace.write(`Unsupported property '${name}' with value '${value}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
			return false;
		}

		this.cachedPropertyValues.set(name, value);
		return true;
	}

	public getProperty<K extends keyof LayerProperties>(name: K): LayerProperties[K] {
		const propertyName = this._getClassPropertyName(name);
		return propertyName != null ? this[propertyName] : undefined;
	}

	public setProperty<K extends keyof LayerProperties>(name: K, value: LayerProperties[K]): void {
		const propertyName = this._getClassPropertyName(name);
		if (propertyName != null) {
			this[propertyName] = value;
		}
	}

	public setProperties(value: Partial<LayerProperties>): void {
		if (value) {
			const entries = Object.entries(value) as [keyof LayerProperties, LayerProperties[keyof LayerProperties]][];
			for (const [key, value] of entries) {
				this.setProperty(key, value);
			}
		}
	}

	private _getClassPropertyName<K extends keyof LayerProperties>(name: K): string {
		let propertyName: string;

		if (this.layoutPropertyMappings?.has(name)) {
			propertyName = this.layoutPropertyMappings.get(name);
		} else if (this.paintPropertyMappings?.has(name)) {
			propertyName = this.paintPropertyMappings.get(name);
		} else {
			propertyName = null;
		}

		if (propertyName == null || !(propertyName in this)) {
			Trace.write(`Unsupported property '${name}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
			return null;
		}

		return propertyName;
	}

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
