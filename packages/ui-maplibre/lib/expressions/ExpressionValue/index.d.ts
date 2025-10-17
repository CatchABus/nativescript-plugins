import { Color } from '@nativescript/core';
import { ExpressionValueCommon } from './common';
import { IExpressionCollator } from '../IExpressionCollator';

export declare class ExpressionValue<T> extends ExpressionValueCommon<any> {
	public static get<P>(key: string): ExpressionValue<P>;
	public static color(color: Color): ExpressionValue<Color>;
	public static literal(value: string): ExpressionValue<string>;
	public static literal(value: boolean): ExpressionValue<boolean>;
	public static literal(value: number): ExpressionValue<number>;
	public static literal(value: Array<any>): ExpressionValue<Array<any>>;
	public static sum(numbers: ExpressionValue<number>[]): ExpressionValue<number>;
}
