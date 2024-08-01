import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { OffscreenCanvas } from '../elements/OffscreenCanvas';

class HTMLCanvasView extends CanvasView {
	public width: number | string;
	public height: number | string;

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public enableOffscreenBuffer(): void;
	public disableOffscreenBuffer(): void;
	public isOffscreenBufferEnabled(): boolean;
	public drawOffscreenBuffer(): void;
	public transferControlToOffscreen(): OffscreenCanvas;
	public toDataURL(type?: string, encoderOptions?: number): string;
	public get nativeContext(): Canvas;
}

export { HTMLCanvasView };
