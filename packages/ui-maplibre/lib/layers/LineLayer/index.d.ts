import { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { LayerProperties } from '../BaseLayer';

export type LineLayerProperties = LayerProperties & {
	'line-color': PropertyValueSpecification<ColorSpecification>;
	'line-width': PropertyValueSpecification<number>;
	'line-opacity': PropertyValueSpecification<number>;
};

export declare class LineLayer extends AbstractVectorLayer<any, LineLayerProperties> {
	constructor(id: string, source: BaseSource);
	public lineColor: PropertyValueSpecification<ColorSpecification>;
	public lineWidth: PropertyValueSpecification<number>;
	public lineOpacity: PropertyValueSpecification<number>;
}
