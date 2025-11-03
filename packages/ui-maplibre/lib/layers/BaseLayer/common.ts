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

	public setProperties(value: Partial<LayerProperties>): void {
		if (value) {
			const entries = Object.entries(value);
			for (const [key, value] of entries) {
				let setterName: string;

				if (this.layoutPropertyMappings?.has(key)) {
					setterName = this.layoutPropertyMappings.get(key);
				} else if (this.paintPropertyMappings?.has(key)) {
					setterName = this.paintPropertyMappings.get(key);
				} else {
					setterName = null;
				}

				if (setterName && setterName in this) {
					this[setterName] = value;
				} else {
					Trace.write(`Unsupported property '${key}' with value '${value}' for layer ${this.constructor.name}(${this.getId()})`, Trace.categories.Error, Trace.messageType.warn);
				}
			}
		}
	}

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
