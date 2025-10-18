import { ExpressionValue } from '../../expressions/ExpressionValue';
import { NativeObject } from '../../NativeObject';

export type ExpressionOrValue<T> = ExpressionValue<T> | T;

export declare abstract class BaseLayer<T = any> extends NativeObject<T> {
	public getId(): string;
	public expressionValueToNative(value): any;
	public extractPropertyValue<T>(value): ExpressionValue<T> | T;
	public setWrappedPropertyValue(value: any): void;
	public get visible(): boolean;
	public set visible(value: boolean);
}
