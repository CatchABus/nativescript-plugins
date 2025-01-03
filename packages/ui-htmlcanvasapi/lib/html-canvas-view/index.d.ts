import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import { OffscreenCanvas } from '../elements/OffscreenCanvas';

class HTMLCanvasView extends CanvasView {
	public isOffscreenBufferEnabled: boolean;

	public get canvasElement(): HTMLCanvasElement;
	public get nativeContext(): Canvas;

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;
	public transferControlToOffscreen(): OffscreenCanvas;
	public toDataURL(type?: string, encoderOptions?: number): string;
	public isDrawing(): boolean;
}

export { HTMLCanvasView };
