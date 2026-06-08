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
	public circleColor: PropertyValueSpecification<ColorSpecification>;
	public circleRadius: PropertyValueSpecification<number>;
}
