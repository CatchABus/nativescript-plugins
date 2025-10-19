import { ExpressionValue } from '../ExpressionValue';
import { IExpressionCollator } from '../IExpressionCollator';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export declare class Expression extends NativeObject<any> {
	public static all(...items: Expression[]): Expression;
	public static has(key: string | ExpressionValue<any>): Expression;
	public static gt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression;
	public static gte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression;
	public static lt(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression;
	public static lte(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | number, collator?: IExpressionCollator): Expression;
	public static eq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression;
	public static neq(compareOne: ExpressionValue<any>, compareTwo: ExpressionValue<any> | string | boolean | number, collator?: IExpressionCollator): Expression;
}
