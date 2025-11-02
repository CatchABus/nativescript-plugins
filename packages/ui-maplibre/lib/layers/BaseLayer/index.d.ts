import { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare abstract class BaseLayer<T = any> extends NativeObject<T> {
	public static readonly layoutPropertyMappings: Map<string, string>;
	public static readonly paintPropertyMappings: Map<string, string>;

	public getId(): string;
	public getPropertyValueInternal(name: string): PropertyValueSpecification<any>;
	public getOrSetPropertyValueInternal<T>(name: string, lazyValue: () => T): PropertyValueSpecification<any>;
	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): boolean;
	public get visibility(): 'visible' | 'none';
	public set visibility(value: 'visible' | 'none');
}
