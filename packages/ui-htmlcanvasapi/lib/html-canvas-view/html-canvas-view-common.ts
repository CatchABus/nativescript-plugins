import { Canvas, CanvasView, createRectF } from '@nativescript-community/ui-canvas';
import { booleanConverter, EventData, Property } from '@nativescript/core';
import { CanvasContextType } from '../../CanvasTypes';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import type { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { SCREEN_SCALE } from '../helpers';

function onLayoutChange(args: EventData): void {
	const view = args.object as HTMLCanvasViewBase;

	if (view.getMeasuredWidth() != 0 && view.getMeasuredHeight() != 0) {
		// During resize, a new bitmap is created using new dimensions
		view._resizeOffscreenBuffer();
	}
}

const isOffscreenBufferEnabledProperty = new Property<HTMLCanvasViewBase, boolean>({
	name: 'isOffscreenBufferEnabled',
	defaultValue: false,
	valueConverter: booleanConverter,
});

abstract class HTMLCanvasViewBase extends CanvasView {
	private readonly _canvasElement: HTMLCanvasElement;

	private _currentCanvas: Canvas;
	private _offscreenContext: Canvas;
	private _isDrawing: boolean;

	public isOffscreenBufferEnabled: boolean;

	constructor() {
		super();

		this._canvasElement = new HTMLCanvasElement(this);
		this.on(CanvasView.layoutChangedEvent, onLayoutChange);
	}

	public get canvasElement(): HTMLCanvasElement {
		return this._canvasElement;
	}

	public get nativeContext(): Canvas {
		return this._offscreenContext != null ? this._offscreenContext : this._currentCanvas;
	}

	public override disposeNativeView(): void {
		super.disposeNativeView();

		if (this._offscreenContext != null) {
			this._offscreenContext.release();
			this._offscreenContext = null;
		}
	}

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		return this._canvasElement.getContext(contextId as any, contextAttributes);
	}

	public transferControlToOffscreen(): OffscreenCanvas {
		return this._canvasElement.transferControlToOffscreen();
	}

	public toDataURL(type?: string, encoderOptions?: number): string {
		return this._canvasElement.toDataURL(type, encoderOptions);
	}

	public isDrawing(): boolean {
		return this._isDrawing;
	}

	public override onDraw(canvas: Canvas): void {
		this._isDrawing = true;
		this._currentCanvas = canvas;

		super.onDraw(canvas);

		if (this._offscreenContext != null) {
			const rect = createRectF(0, 0, this._canvasElement.width, this._canvasElement.height);
			canvas.drawBitmap(this._offscreenContext.getImage(), null, rect, null);
		}

		this._currentCanvas = null;
		this._isDrawing = false;
	}

	_resizeOffscreenBuffer(): void {
		if (this._offscreenContext != null) {
			this._offscreenContext.release();

			this._offscreenContext = new Canvas(this.getMeasuredWidth(), this.getMeasuredHeight());
			this._offscreenContext.scale(SCREEN_SCALE, SCREEN_SCALE);
		}
	}

	[isOffscreenBufferEnabledProperty.setNative](value: boolean) {
		if (value) {
			this._offscreenContext = new Canvas(this.getMeasuredWidth(), this.getMeasuredHeight());
			this._offscreenContext.scale(SCREEN_SCALE, SCREEN_SCALE);
		} else {
			this._offscreenContext.release();
			this._offscreenContext = null;
		}
	}
}

isOffscreenBufferEnabledProperty.register(HTMLCanvasViewBase);

export { SCREEN_SCALE, HTMLCanvasViewBase, isOffscreenBufferEnabledProperty };
