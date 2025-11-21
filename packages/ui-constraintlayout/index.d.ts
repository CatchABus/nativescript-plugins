import { CoreTypes, LayoutBase, Property, View } from '@nativescript/core';

declare module '@nativescript/core/ui/core/view' {
	interface View extends IConstrainedView {}
}

export interface IPositionConstraints {
	leftToLeftOf: string;
	leftToRightOf: string;
	rightToLeftOf: string;
	rightToRightOf: string;
	topToTopOf: string;
	topToBottomOf: string;
	bottomToTopOf: string;
	bottomToBottomOf: string;
	baselineToBaselineOf: string;
	startToEndOf: string;
	startToStartOf: string;
	endToStartOf: string;
	endToEndOf: string;
}

export interface IConstrainedView extends IPositionConstraints {
	horizontalBias: number;
	verticalBias: number;
	circleConstraint: string;
	circleAngle: number;
	circleRadius: CoreTypes.LengthType;
}

export declare class ConstraintLayout extends LayoutBase {
	public static isConstrainedChild(child: View): boolean;
	public get isRtl(): boolean;
}

export const leftToLeftOfProperty: Property<View, string>;
export const leftToRightOfProperty: Property<View, string>;
export const rightToLeftOfProperty: Property<View, string>;
export const rightToRightOfProperty: Property<View, string>;
export const topToTopOfProperty: Property<View, string>;
export const topToBottomOfProperty: Property<View, string>;
export const bottomToTopOfProperty: Property<View, string>;
export const bottomToBottomOfProperty: Property<View, string>;
export const baselineToBaselineOfProperty: Property<View, string>;
export const startToEndOfProperty: Property<View, string>;
export const startToStartOfProperty: Property<View, string>;
export const endToStartOfProperty: Property<View, string>;
export const endToEndOfProperty: Property<View, string>;
export const horizontalBiasProperty: Property<View, number>;
export const verticalBiasProperty: Property<View, number>;
