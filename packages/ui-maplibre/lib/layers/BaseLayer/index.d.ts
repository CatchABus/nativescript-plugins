import { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare abstract class BaseLayer<T = any> extends NativeObject<T> {
	public static readonly layoutPropertyMappings: Map<string, string>;
	public static readonly paintPropertyMappings: Map<string, string>;

	public getId(): string;
	public getPropertyValueInternal(name: string): PropertyValueSpecification<any>;
	public setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): void;
	public get visible(): boolean;
	public set visible(value: boolean);
}
