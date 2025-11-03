import { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { LayerProperties } from '../BaseLayer';

export type CircleLayerProperties = LayerProperties & {
	'circle-color': PropertyValueSpecification<ColorSpecification>;
	'circle-radius': PropertyValueSpecification<number>;
};

export declare class CircleLayer extends AbstractVectorLayer<any, CircleLayerProperties> {
	constructor(id: string, source: BaseSource);
	public get circleColor(): PropertyValueSpecification<ColorSpecification>;
	public set circleColor(value: PropertyValueSpecification<ColorSpecification>);
	public get circleRadius(): PropertyValueSpecification<number>;
	public set circleRadius(value: PropertyValueSpecification<number>);
}
