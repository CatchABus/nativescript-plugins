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
	public get lineColor(): PropertyValueSpecification<ColorSpecification>;
	public set lineColor(value: PropertyValueSpecification<ColorSpecification>);
	public get lineWidth(): PropertyValueSpecification<number>;
	public set lineWidth(value: PropertyValueSpecification<number>);
	public get lineOpacity(): PropertyValueSpecification<number>;
	public set lineOpacity(value: PropertyValueSpecification<number>);
}
