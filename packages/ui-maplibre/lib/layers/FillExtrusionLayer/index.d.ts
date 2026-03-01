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
	public get fillExtrusionColor(): PropertyValueSpecification<ColorSpecification>;
	public set fillExtrusionColor(value: PropertyValueSpecification<ColorSpecification>);
	public get fillExtrusionHeight(): PropertyValueSpecification<number>;
	public set fillExtrusionHeight(value: PropertyValueSpecification<ColorSpecification>);
	public get fillExtrusionBase(): PropertyValueSpecification<number>;
	public set fillExtrusionBase(value: PropertyValueSpecification<number>);
	public get fillExtrusionOpacity(): PropertyValueSpecification<number>;
	public set fillExtrusionOpacity(value: PropertyValueSpecification<number>);
}
