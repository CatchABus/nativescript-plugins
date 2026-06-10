import { PropertyValueSpecification } from '../../Expression';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export type LayerProperties = {
	visibility: 'visible' | 'none';
};

export declare abstract class BaseLayer<T = any, U extends LayerProperties = LayerProperties> extends NativeObject<T> {
	public layoutProperties: Set<string> | undefined;
	public paintProperties: Set<string> | undefined;

	public getId(): string;
	public getType(): string;
	public _getPropertyValueInternal(name: string): PropertyValueSpecification<any>;
	public _getOrSetPropertyValueInternal<V>(name: string, lazyValue: () => V): PropertyValueSpecification<any>;
	public _setPropertyValueInternal(name: string, value: PropertyValueSpecification<any>): void;
	public getProperty<K extends keyof U>(name: K): U[K];
	public setProperty<K extends keyof U>(name: K, value: U[K]): void;
	public setProperties(value: Partial<U>): void;
	public get minZoom(): number;
	public set minZoom(value: number);
	public get maxZoom(): number;
	public set maxZoom(value: number);
	public visibility: 'visible' | 'none';
}
