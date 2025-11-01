import { Trace } from '@nativescript/core';
import { BaseLayer as IBaseLayer } from '.';
import type { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LayoutProperty } from '../../utils/decorators';

export abstract class BaseLayerCommon<T> extends NativeObject<T> implements IBaseLayer<T> {
	public static readonly layoutPropertyMappings = new Map<string, string>();
	public static readonly paintPropertyMappings = new Map<string, string>();

	private mCachedPropertyValues: Map<string, PropertyValueSpecification<any>>;

	public abstract getId(): string;

	private get cachedPropertyValues() {
		if (!this.mCachedPropertyValues) {
			this.mCachedPropertyValues = new Map();
		}
		return this.mCachedPropertyValues;
	}

	@LayoutProperty('visibility')
	public get visible(): boolean {
		return this.getPropertyValueInternal('visibility');
	}

	public set visible(value: boolean) {
		this.setPropertyValueInternal('visibility', value);
	}

	public getPropertyValueInternal(name: string): PropertyValueSpecification<any> {
		return this.cachedPropertyValues.get(name);
	}

	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): boolean {
		if (!BaseLayerCommon.layoutPropertyMappings.has(name) && !BaseLayerCommon.paintPropertyMappings.has(name)) {
			Trace.write(`Invalid layer property '${name}' with value '${value}'`, Trace.categories.All, Trace.messageType.warn);
			return false;
		}

		this.cachedPropertyValues.set(name, value);
		return true;
	}

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
