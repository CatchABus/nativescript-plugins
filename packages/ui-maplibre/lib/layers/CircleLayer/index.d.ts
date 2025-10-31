import { ColorSpecification, PropertyValueSpecification } from '../../Expression';
import { BaseSource } from '../../sources';
import { AbstractVectorLayer } from '../AbstractVectorLayer';

export declare class CircleLayer extends AbstractVectorLayer<any> {
	constructor(id: string, source: BaseSource);
	public get circleColor(): PropertyValueSpecification<ColorSpecification>;
	public set circleColor(value: PropertyValueSpecification<ColorSpecification>);
	public get circleRadius(): PropertyValueSpecification<number>;
	public set circleRadius(value: PropertyValueSpecification<number>);
}
