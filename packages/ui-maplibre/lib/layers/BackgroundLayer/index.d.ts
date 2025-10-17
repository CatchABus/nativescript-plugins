import { ExpressionOrValue } from '../BaseLayer';
import { BackgroundLayerCommon } from './common';

export declare class BackgroundLayer extends BackgroundLayerCommon<any> {
	constructor(id: string);
	public get backgroundColor(): ExpressionOrValue<string | Color>;
	public set backgroundColor(value: ExpressionOrValue<string | Color>);
	public get backgroundOpacity(): ExpressionOrValue<number>;
	public set backgroundOpacity(value: ExpressionOrValue<number>);
	public get backgroundPattern(): ExpressionOrValue<string>;
	public set backgroundPattern(value: ExpressionOrValue<string>);
}
