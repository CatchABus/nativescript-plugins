import { Color, LayoutBase } from '@nativescript/core';

export type NeumorphismState = 'flat' | 'concave' | 'convex' | 'pressed' | 'pressed-in-out';

export interface NeumorphicLayout extends LayoutBase {
	neumorphism: NeumorphismState;
	cornerRadius: number;
	fillColor: Color;
	lightShadowColor: Color;
	darkShadowColor: Color;
	shadowDistance: number;
	shadowRadius: number;
}
