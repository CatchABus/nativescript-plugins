import { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export type LayerProperties = {
	visibility: 'visible' | 'none';
};

export declare abstract class BaseLayer<T = any, U extends LayerProperties = LayerProperties> extends NativeObject<T> {
	public layoutPropertyMappings: Map<string, string> | undefined;
	public paintPropertyMappings: Map<string, string> | undefined;

	public getId(): string;
	public getPropertyValueInternal(name: string): PropertyValueSpecification<any>;
	public getOrSetPropertyValueInternal<V>(name: string, lazyValue: () => V): PropertyValueSpecification<any>;
	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): boolean;
	public setProperties(value: Partial<U>): void;
	public get visibility(): 'visible' | 'none';
	public set visibility(value: 'visible' | 'none');
}
