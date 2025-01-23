import { Color, LayoutBase } from '@nativescript/core';
import { NeumorphicCanvas } from './common';

export interface NeumorphicLayout extends LayoutBase {
	augmentedCanvas?: NeumorphicCanvas;
	neumorphism: NeumorphismState;
	lightShadowColor: Color;
	darkShadowColor: Color;
	shadowDistance: number;
	shadowRadius: number;
}
