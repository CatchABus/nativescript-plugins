import { Canvas, CanvasView, Paint } from '@nativescript-community/ui-canvas';
import { booleanConverter, EventData, Property } from '@nativescript/core';
import { CanvasContextType } from '../../CanvasTypes';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import type { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { SCREEN_SCALE } from '../helpers';

function onLayoutChange(args: EventData): void {
	const view = args.object as HTMLCanvasViewBase;

	// During view layout, offscreen buffer is also resized
	if (view.isOffscreenBufferEnabled) {
		const { width, height } = view.getActualSize();

		if (width != 0 && height != 0) {
			view._resizeOffscreenBuffer(width, height);
		} else {
			view._disposeOffscreenBuffer();
		}
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
	private _offscreenPaint: Paint;
	private _isDrawing: boolean;

	public isOffscreenBufferEnabled: boolean;

	constructor() {
		super();

		this._canvasElement = new HTMLCanvasElement(this);
	}

	public get canvasElement(): HTMLCanvasElement {
		return this._canvasElement;
	}

	public get nativeContext(): Canvas {
		return this._offscreenContext != null ? this._offscreenContext : this._currentCanvas;
	}

	public override disposeNativeView(): void {
		super.disposeNativeView();
		this._disposeOffscreenBuffer();
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
			canvas.drawBitmap(this._offscreenContext.getImage(), 0, 0, this._offscreenPaint);
		}

		this._currentCanvas = null;
		this._isDrawing = false;
	}

	_resizeOffscreenBuffer(width: number, height: number): void {
		if (this._offscreenContext != null) {
			this._offscreenContext.release();
		}

		this._offscreenContext = new Canvas(width, height);
	}

	_disposeOffscreenBuffer(): void {
		if (this._offscreenContext != null) {
			this._offscreenContext.release();
			this._offscreenContext = null;
		}
		this._offscreenPaint = null;
	}

	[isOffscreenBufferEnabledProperty.setNative](value: boolean) {
		if (value) {
			this._offscreenPaint = new Paint();
			this._offscreenPaint.setAntiAlias(true);

			this.on(HTMLCanvasViewBase.layoutChangedEvent, onLayoutChange);
		} else {
			this.off(HTMLCanvasViewBase.layoutChangedEvent, onLayoutChange);
			this._disposeOffscreenBuffer();
		}
	}
}

isOffscreenBufferEnabledProperty.register(HTMLCanvasViewBase);

export { SCREEN_SCALE, HTMLCanvasViewBase, isOffscreenBufferEnabledProperty };
