import { Color } from '@nativescript/core';
import { IExpressionCollator } from '../IExpressionCollator';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare class ExpressionValue<T> extends NativeObject<any> {
	public static get<P>(key: string): ExpressionValue<P>;
	public static color(color: Color): ExpressionValue<Color>;
	public static literal(value: string): ExpressionValue<string>;
	public static literal(value: boolean): ExpressionValue<boolean>;
	public static literal(value: number): ExpressionValue<number>;
	public static literal(value: Array<any>): ExpressionValue<Array<any>>;
	public static sum(numbers: ExpressionValue<number>[]): ExpressionValue<number>;
}
