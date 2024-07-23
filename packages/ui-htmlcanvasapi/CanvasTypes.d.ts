import { ImageSource } from '@nativescript/core';
import { CanvasGradient } from './lib/CanvasGradient';
import { CanvasPattern } from './lib/CanvasPattern';

type LineCap = 'butt' | 'round' | 'square';
type LineJoin = 'round' | 'bevel' | 'miter';
type CanvasCompositeOperation = 'source-over' | 'source-in' | 'source-out' | 'source-atop' | 'destination-over' | 'destination-in' | 'destination-out' | 'destination-atop' | 'lighter' | 'copy' | 'xor' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
type TextAlignment = 'left' | 'right' | 'center' | 'start' | 'end';
type TextBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
type TextDirection = 'ltr' | 'rtl' | 'inherit';
type FillRule = 'nonzero' | 'evenodd';
type ImageSmoothingQuality = 'high' | 'low' | 'medium';
type FontKerning = 'auto' | 'normal' | 'none';
type FontStretch = 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded';
type FontVariantCaps = 'normal' | 'small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps';
type TextRendering = 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision';
type PatternRepetition = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

type CanvasRenderingContextDefaults = CanvasContextRestorables & {
	letterSpacing: string;
	imageSmoothingQuality: ImageSmoothingQuality;
	fontKerning: FontKerning;
	fontStretch: FontStretch;
	fontVariantCaps: FontVariantCaps;
	textRendering: TextRendering;
	wordSpacing: string;
};

interface CanvasContextRestorables {
	strokeStyle: string | CanvasGradient | CanvasPattern;
	fillStyle: string | CanvasGradient | CanvasPattern;
	globalAlpha: number;
	lineWidth: number;
	lineCap: LineCap;
	lineJoin: LineJoin;
	miterLimit: number;
	lineDashOffset: number;
	shadowOffsetX: number;
	shadowOffsetY: number;
	shadowBlur: number;
	shadowColor: string;
	globalCompositeOperation: CanvasCompositeOperation;
	font: string;
	textAlign: TextAlignment;
	textBaseline: TextBaseline;
	direction: TextDirection;
	imageSmoothingEnabled: boolean;
	setLineDash?: number[];
}

interface PatternData {
	image: ImageSource | any;
	repetition: PatternRepetition;
}

interface GradientData {
	type: 'linear' | 'radial' | 'conic';
	params: LinearGradientParams | RadialGradientParams;
}

interface LinearGradientParams {
	x0: number;
	y0: number;
	x1: number;
	y1: number;
}

interface RadialGradientParams {
	x0: number;
	y0: number;
	r0: number;
	x1: number;
	y1: number;
	r1: number;
}

export { LineCap, LineJoin, CanvasCompositeOperation, FillRule, TextAlignment, TextBaseline, TextDirection, ImageSmoothingQuality, FontKerning, FontStretch, FontVariantCaps, TextRendering, PatternRepetition, CanvasContextRestorables, CanvasRenderingContextDefaults, PatternData, GradientData, LinearGradientParams, RadialGradientParams };
