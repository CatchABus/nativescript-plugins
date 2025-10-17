import { BaseSource } from '../../sources';
import { ExpressionOrValue } from '../BaseLayer';
import { CircleLayerCommon } from './common';

export declare class CircleLayer extends CircleLayerCommon<any> {
	constructor(id: string, source: BaseSource);
	public get circleColor(): ExpressionOrValue<string | Color>;
	public set circleColor(value: ExpressionOrValue<string | Color>);
	public get circleRadius(): ExpressionOrValue<number>;
	public set circleRadius(value: ExpressionOrValue<number>);
}
