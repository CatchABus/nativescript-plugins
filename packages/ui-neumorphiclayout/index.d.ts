import { Color, LayoutBase } from '@nativescript/core';

export interface NeumorphicLayout extends LayoutBase {
	neumorphism: NeumorphismState;
	lightShadowColor: Color;
	darkShadowColor: Color;
	shadowDistance: number;
	shadowRadius: number;
}
