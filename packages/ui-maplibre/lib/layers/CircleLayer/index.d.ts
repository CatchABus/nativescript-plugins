import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { ExpressionOrValue } from '../BaseLayer';

export declare class CircleLayer extends AbstractVectorLayer<any> {
	constructor(id: string, source: BaseSource);
	public get circleColor(): ExpressionOrValue<string | Color>;
	public set circleColor(value: ExpressionOrValue<string | Color>);
	public get circleRadius(): ExpressionOrValue<number>;
	public set circleRadius(value: ExpressionOrValue<number>);
}
