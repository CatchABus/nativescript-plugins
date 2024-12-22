import { View } from '@nativescript/core';
import { CanvasContextProperties } from '../../CanvasTypes';
import { Path2D } from '../Path2D';
import { AbstractCanvasRenderingContext2D } from './AbstractCanvasRenderingContext2D';

const defaults: CanvasContextProperties = {
	strokeStyle: '#000',
	fillStyle: '#000',
	globalAlpha: 1.0,
	lineWidth: 1.0,
	lineCap: 'butt',
	lineJoin: 'miter',
	miterLimit: 10.0,
	lineDashOffset: 0.0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	shadowBlur: 0,
	shadowColor: 'transparent',
	globalCompositeOperation: 'source-over',
	font: '10px sans-serif',
	textAlign: 'start',
	textBaseline: 'alphabetic',
	direction: 'inherit',
	imageSmoothingEnabled: true,
	letterSpacing: '0px',
	imageSmoothingQuality: 'low',
	fontKerning: 'auto',
	fontStretch: 'normal',
	fontVariantCaps: 'normal',
	textRendering: 'auto',
	wordSpacing: '0px',
};

class NSCanvasRenderingContext2D extends AbstractCanvasRenderingContext2D {
	public drawFocusIfNeeded(element: View | any): void;
	public drawFocusIfNeeded(path: Path2D, element: View | any): void;

	public drawFocusIfNeeded(...args: any): void {
		console.warn('Method drawFocusIfNeeded is not implemented');
	}
}

export { NSCanvasRenderingContext2D as CanvasRenderingContext2D };
