import { BaseLayer as IBaseLayer } from '.';
import type { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';
import { LayoutProperty } from '../../utils/decorators';

export abstract class BaseLayerCommon<T> extends NativeObject<T> implements IBaseLayer<T> {
	public static readonly layoutPropertyMappings = new Map<string, string>();
	public static readonly paintPropertyMappings = new Map<string, string>();

	private readonly mCachedPropertyValues = new Map<string, PropertyValueSpecification<any>>();

	public abstract getId(): string;

	@LayoutProperty('visibility')
	public get visible(): boolean {
		return this.getPropertyValueInternal('visibility');
	}

	public set visible(value: boolean) {
		this.setPropertyValueInternal('visibility', value);
	}

	public getPropertyValueInternal(name: string): PropertyValueSpecification<any> {
		return this.mCachedPropertyValues.get(name);
	}

	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): void {
		this.mCachedPropertyValues.set(name, value);
	}

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
