import { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';
import { LayerProperties } from '../BaseLayer';

export type FillExtrusionLayerProperties = LayerProperties & {
	'fill-extrusion-color': PropertyValueSpecification<ColorSpecification>;
	'fill-extrusion-height': PropertyValueSpecification<number>;
	'fill-extrusion-base': PropertyValueSpecification<number>;
	'fill-extrusion-opacity': PropertyValueSpecification<number>;
};

export declare class FillExtrusionLayer extends AbstractVectorLayer<any, FillExtrusionLayerProperties> {
	constructor(id: string, source: BaseSource);
	public fillExtrusionColor: PropertyValueSpecification<ColorSpecification>;
	public fillExtrusionHeight: PropertyValueSpecification<number>;
	public fillExtrusionBase: PropertyValueSpecification<number>;
	public fillExtrusionOpacity: PropertyValueSpecification<number>;
}
