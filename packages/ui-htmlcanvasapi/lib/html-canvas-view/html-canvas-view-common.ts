import { Canvas, CanvasView, createRectF } from '@nativescript-community/ui-canvas';
import { EventData, Screen } from '@nativescript/core';
import { CanvasContextType } from '../../CanvasTypes';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import type { OffscreenCanvas } from '../elements/OffscreenCanvas';

function onLayoutChange(args: EventData): void {
	const view = args.object as HTMLCanvasViewBase;

	if (view.getMeasuredWidth() != 0 && view.getMeasuredHeight() != 0) {
		// During resize, a new blank bitmap is created using new dimensions
		if (view.isOffscreenBufferEnabled()) {
			view.disableOffscreenBuffer();
			view.enableOffscreenBuffer();
		}
	}
}

abstract class HTMLCanvasViewBase extends CanvasView {
	private readonly _canvasElement: HTMLCanvasElement;

	private _lastCanvas: Canvas;
	private _offscreenContext: Canvas;

	constructor() {
		super();

		this._canvasElement = new HTMLCanvasElement(this);
		this.on(CanvasView.layoutChangedEvent, onLayoutChange);
	}

	public get canvasElement(): HTMLCanvasElement {
		return this._canvasElement;
	}

	public get nativeContext(): Canvas {
		return this._offscreenContext != null ? this._offscreenContext : this._lastCanvas;
	}

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		return this._canvasElement.getContext(contextId as any, contextAttributes);
	}

	public enableOffscreenBuffer(): void {
		if (this._offscreenContext == null) {
			const scale = Screen.mainScreen.scale;

			this._offscreenContext = new Canvas(this.getMeasuredWidth(), this.getMeasuredHeight());
			this._offscreenContext.scale(scale, scale);
		}
	}

	public disableOffscreenBuffer(): void {
		if (this._offscreenContext != null) {
			this._offscreenContext.release();
			this._offscreenContext = null;
		}
	}

	public isOffscreenBufferEnabled(): boolean {
		return !!this._offscreenContext;
	}

	public drawOffscreenBuffer(): void {
		if (this._offscreenContext == null) {
			console.warn(`Offscreen buffer is currently disable. Please call 'enableOffscreenBuffer()' and try again`);
			return;
		}

		const nativeContext = this._lastCanvas;
		if (nativeContext) {
			const rect = createRectF(0, 0, this.width as number, this.height as number);
			nativeContext.drawBitmap(this._offscreenContext.getImage(), null, rect, null);
		}
	}

	public transferControlToOffscreen(): OffscreenCanvas {
		return this._canvasElement.transferControlToOffscreen();
	}

	public toDataURL(type?: string, encoderOptions?: number): string {
		return this._canvasElement.toDataURL(type, encoderOptions);
	}

	public override onDraw(canvas: Canvas): void {
		this._lastCanvas = canvas;

		super.onDraw(canvas);
	}
}

export { HTMLCanvasViewBase };
