import { Color } from '@nativescript/core';
import { NativeObject } from '../nativeWrappers/NativeObject';

export declare class Expression extends NativeObject<any> {
	public static propertyValue<T extends PropertyValuePrimitive>(value: PropertyValueSpecification<T> | DataDrivenPropertyValueSpecification<T> | Color): Expression;
	public static filter(filter: ExpressionFilterSpecification): Expression;
	public toJSON(): ExpressionSpecification;
}

export type ColorSpecification = string;
export type ResolvedImageSpecification = string;
export type DataDrivenPropertyValueSpecification<T extends PropertyValuePrimitive> = T | CameraFunctionSpecification<T> | SourceFunctionSpecification<T> | CompositeFunctionSpecification<T> | ExpressionSpecification;

export type ExpressionInputType = string | number | boolean;

export type CameraFunctionSpecification<T> = { type: 'exponential'; stops: Array<[number, T]> } | { type: 'interval'; stops: Array<[number, T]> };

export type PropertyValuePrimitive = string | boolean | number | Array<string | boolean | number>;
export type PropertyValueSpecification<T extends PropertyValuePrimitive> = T | CameraFunctionSpecification<T> | ExpressionSpecification;
export type ExpressionFilterSpecification = boolean | ExpressionSpecification;

export type ProjectionDefinitionT = [string, string, number];
export type ProjectionDefinitionSpecification = string | ProjectionDefinitionT | PropertyValueSpecification<ProjectionDefinitionT>;

export type CollatorExpressionSpecification = [
	'collator',
	{
		'case-sensitive'?: boolean | ExpressionSpecification;
		'diacritic-sensitive'?: boolean | ExpressionSpecification;
		locale?: string | ExpressionSpecification;
	}
]; // collator

export type InterpolationSpecification = ['linear'] | ['exponential', number] | ['cubic-bezier', number, number, number, number];

export type ExpressionSpecification =
	// types
	| ['array', ExpressionSpecification] // array
	| ['array', 'string' | 'number' | 'boolean', ExpressionSpecification] // array
	| ['array', 'string' | 'number' | 'boolean', number, ExpressionSpecification] // array
	| ['boolean', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // boolean
	| CollatorExpressionSpecification
	| ['format', ...(string | ['image', ExpressionSpecification] | ExpressionSpecification | { 'font-scale'?: number | ExpressionSpecification; 'text-font'?: ExpressionSpecification; 'text-color'?: ColorSpecification | ExpressionSpecification; 'vertical-align'?: 'bottom' | 'center' | 'top' })[]] // string
	| ['image', string | ExpressionSpecification] // image
	| ['literal', unknown]
	| ['number', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // number
	| ['number-format', number | ExpressionSpecification, { locale?: string | ExpressionSpecification; currency?: string | ExpressionSpecification; 'min-fraction-digits'?: number | ExpressionSpecification; 'max-fraction-digits'?: number | ExpressionSpecification }] // string
	| ['object', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // object
	| ['string', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // string
	| ['to-boolean', unknown | ExpressionSpecification] // boolean
	| ['to-color', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // color
	| ['to-number', unknown | ExpressionSpecification, ...(unknown | ExpressionSpecification)[]] // number
	| ['to-string', unknown | ExpressionSpecification] // string
	| ['typeof', unknown | ExpressionSpecification] // string
	// feature data
	| ['accumulated']
	| ['feature-state', string | ExpressionSpecification]
	| ['geometry-type'] // string
	| ['id']
	| ['line-progress'] // number
	| ['properties'] // object
	// lookup
	| ['at', number | ExpressionSpecification, ExpressionSpecification]
	| ['get', string | ExpressionSpecification, ExpressionSpecification?]
	| ['global-state', string]
	| ['has', string | ExpressionSpecification, ExpressionSpecification?]
	| ['in', null | ExpressionInputType | ExpressionSpecification, string | ExpressionSpecification]
	| ['index-of', null | ExpressionInputType | ExpressionSpecification, string | ExpressionSpecification, (number | ExpressionSpecification)?] // number
	| ['length', string | ExpressionSpecification]
	| ['slice', string | ExpressionSpecification, number | ExpressionSpecification, (number | ExpressionSpecification)?]
	// Decision
	| ['!', boolean | ExpressionSpecification] // boolean
	| ['!=', null | ExpressionInputType | ExpressionSpecification, null | ExpressionInputType | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['<', string | number | ExpressionSpecification, string | number | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['<=', string | number | ExpressionSpecification, string | number | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['==', null | ExpressionInputType | ExpressionSpecification, null | ExpressionInputType | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['>', string | number | ExpressionSpecification, string | number | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['>=', string | number | ExpressionSpecification, string | number | ExpressionSpecification, CollatorExpressionSpecification?] // boolean
	| ['all', ...(boolean | ExpressionSpecification)[]] // boolean
	| ['any', ...(boolean | ExpressionSpecification)[]] // boolean
	| ['case', boolean | ExpressionSpecification, null | ExpressionInputType | ExpressionSpecification, ...(boolean | null | ExpressionInputType | ExpressionSpecification)[], null | ExpressionInputType | ExpressionSpecification]
	| ['coalesce', ...(ExpressionInputType | ExpressionSpecification)[]] // at least two inputs required
	| [
			'match',
			string | number | ExpressionSpecification,
			string | number | string[] | number[],
			null | ExpressionInputType | ExpressionSpecification,
			...(string | number | string[] | number[] | null | ExpressionInputType | ExpressionSpecification)[], // repeated as above
			null | ExpressionInputType | ExpressionSpecification
	  ]
	| ['within', GeoJSON.GeoJSON]
	// Ramps, scales, curves
	| ['interpolate', InterpolationSpecification, number | ExpressionSpecification, ...(number | ColorSpecification | ExpressionSpecification | ProjectionDefinitionSpecification)[]] // alternating number and number | ColorSpecification | ExpressionSpecification | ProjectionDefinitionSpecification
	| ['interpolate-hcl', InterpolationSpecification, number | ExpressionSpecification, ...(number | ColorSpecification | ExpressionSpecification)[]] // alternating number and ColorSpecificaton | ExpressionSpecification
	| ['interpolate-lab', InterpolationSpecification, number | ExpressionSpecification, ...(number | ColorSpecification | ExpressionSpecification)[]] // alternating number and ColorSpecification | ExpressionSpecification
	| ['step', number | ExpressionSpecification, ExpressionInputType | ExpressionSpecification, ...(number | ExpressionInputType | ExpressionSpecification)[]] // alternating number and ExpressionInputType | ExpressionSpecification
	// Variable binding
	| ['let', string, ExpressionInputType | ExpressionSpecification, ...(string | ExpressionInputType | ExpressionSpecification)[]]
	| ['var', string]
	// String
	| ['concat', ...(ExpressionInputType | ExpressionSpecification)[]] // at least two inputs required -> string
	| ['downcase', string | ExpressionSpecification] // string
	| ['is-supported-script', string | ExpressionSpecification] // boolean
	| ['resolved-locale', CollatorExpressionSpecification] // string
	| ['upcase', string | ExpressionSpecification] // string
	// Color
	| ['rgb', number | ExpressionSpecification, number | ExpressionSpecification, number | ExpressionSpecification] // color
	| ['rgba', number | ExpressionSpecification, number | ExpressionSpecification, number | ExpressionSpecification, number | ExpressionSpecification]
	| ['to-rgba', ColorSpecification | ExpressionSpecification]
	// Math
	| ['-', number | ExpressionSpecification, (number | ExpressionSpecification)?] // number
	| ['*', number | ExpressionSpecification, number | ExpressionSpecification, ...(number | ExpressionSpecification)[]] // number
	| ['/', number | ExpressionSpecification, number | ExpressionSpecification] // number
	| ['%', number | ExpressionSpecification, number | ExpressionSpecification] // number
	| ['^', number | ExpressionSpecification, number | ExpressionSpecification] // number
	| ['+', ...(number | ExpressionSpecification)[]] // at least two inputs required -> number
	| ['abs', number | ExpressionSpecification] // number
	| ['acos', number | ExpressionSpecification] // number
	| ['asin', number | ExpressionSpecification] // number
	| ['atan', number | ExpressionSpecification] // number
	| ['ceil', number | ExpressionSpecification] // number
	| ['cos', number | ExpressionSpecification] // number
	| ['distance', GeoJSON.GeoJSON] // number
	| ['e'] // number
	| ['floor', number | ExpressionSpecification] // number
	| ['ln', number | ExpressionSpecification] // number
	| ['ln2'] // number
	| ['log10', number | ExpressionSpecification] // number
	| ['log2', number | ExpressionSpecification] // number
	| ['max', number | ExpressionSpecification, ...(number | ExpressionSpecification)[]] // number
	| ['min', number | ExpressionSpecification, ...(number | ExpressionSpecification)[]] // number
	| ['pi'] // number
	| ['round', number | ExpressionSpecification] // number
	| ['sin', number | ExpressionSpecification] // number
	| ['sqrt', number | ExpressionSpecification] // number
	| ['tan', number | ExpressionSpecification] // number
	// Zoom
	| ['zoom'] // number
	// Heatmap
	| ['heatmap-density'] // number
	// Elevation
	| ['elevation'] // number
	// Global state
	| ['global-state', string]; // unknown

export type SourceFunctionSpecification<T> =
	| {
			type: 'exponential';
			stops: Array<[number, T]>;
			property: string;
			default?: T;
	  }
	| {
			type: 'interval';
			stops: Array<[number, T]>;
			property: string;
			default?: T;
	  }
	| {
			type: 'categorical';
			stops: Array<[string | number | boolean, T]>;
			property: string;
			default?: T;
	  }
	| {
			type: 'identity';
			property: string;
			default?: T;
	  };

export type CompositeFunctionSpecification<T> =
	| {
			type: 'exponential';
			stops: Array<
				[
					{
						zoom: number;
						value: number;
					},
					T
				]
			>;
			property: string;
			default?: T;
	  }
	| {
			type: 'interval';
			stops: Array<
				[
					{
						zoom: number;
						value: number;
					},
					T
				]
			>;
			property: string;
			default?: T;
	  }
	| {
			type: 'categorical';
			stops: Array<
				[
					{
						zoom: number;
						value: string | number | boolean;
					},
					T
				]
			>;
			property: string;
			default?: T;
	  };
