import { Canvas } from '@nativescript-community/ui-canvas';
import { ImageSource, Observable } from '@nativescript/core';
import { CanvasContextType } from '../../CanvasTypes';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { SCREEN_SCALE, SUPPORTED_CANVAS_IMAGE_FORMATS } from '../helpers';
import type { HTMLCanvasView } from '../html-canvas-view'; // Avoid importing module itself as it might result in circular dependencies
import { OffscreenCanvas } from './OffscreenCanvas';

class NSHTMLCanvasElement extends Observable {
	private _contexts: Map<CanvasContextType, CanvasRenderingContext2D | ImageBitmapRenderingContext>;
	private _isControlledByOffscreen: boolean;

	private readonly _nativeElement: HTMLCanvasView;

	constructor(nativeElement: HTMLCanvasView) {
		super();

		this._nativeElement = nativeElement;
	}

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		if (this._isControlledByOffscreen) {
			throw new Error(`Failed to execute 'getContext' on 'HTMLCanvasView': Cannot get context from a canvas that has transferred its control to offscreen.`);
		}

		const self = this;

		if (!this._contexts) {
			this._contexts = new Map();
		}

		if (this._contexts.has(contextId)) {
			return this._contexts.get(contextId);
		}

		let context: CanvasRenderingContext2D | ImageBitmapRenderingContext;

		switch (contextId) {
			case '2d':
				context = new CanvasRenderingContext2D();
				break;
			case 'bitmaprenderer':
				context = new ImageBitmapRenderingContext();
				break;
			default:
				return null;
		}

		Object.defineProperty(context, 'canvas', {
			get() {
				return self;
			},
		});

		this._contexts.set(contextId, context);
		return context;
	}

	public transferControlToOffscreen(): OffscreenCanvas {
		if (this._contexts != null) {
			throw new Error(`Failed to execute 'transferControlToOffscreen' on 'HTMLCanvasElement': Cannot transfer control from a canvas that has a rendering context.`);
		}

		if (this._isControlledByOffscreen) {
			throw new Error(`Failed to execute 'transferControlToOffscreen' on 'HTMLCanvasElement': Cannot transfer control from a canvas for more than one time.`);
		}

		this._isControlledByOffscreen = true;
		return new OffscreenCanvas(this.width as number, this.height as number);
	}

	public toDataURL(type?: string, quality?: number): string {
		const prefix = 'data:';
		const imgSource = this._toImageSource();

		if (imgSource == null) {
			return prefix;
		}

		const format = type != null ? type.split('/')[1] : 'png';
		const nativeQuality = quality ? quality * 100 : 100;
		const base64String = imgSource.toBase64String(format as any, nativeQuality);

		return `${prefix + type};base64,${base64String}`;
	}

	public _isPixelScaleNeeded(): boolean {
		return __ANDROID__ || this._nativeElement.isOffscreenBufferEnabled;
	}

	get width(): number {
		return this._nativeElement.getActualSize().width;
	}

	set width(val: number) {
		this._nativeElement.width = val;
	}

	get height(): number {
		return this._nativeElement.getActualSize().height;
	}

	set height(val: number) {
		this._nativeElement.height = val;
	}

	public get nativeElement(): HTMLCanvasView {
		return this._nativeElement;
	}

	public get nativeContext(): Canvas {
		return this._nativeElement.nativeContext;
	}

	private _toImageSource(): ImageSource {
		const view = this._nativeElement;

		if (view.isDrawing()) {
			console.warn(`Cannot export canvas content during the drawing process`);
			return null;
		}

		const measuredWidth = view.getMeasuredWidth();
		const measuredHeight = view.getMeasuredHeight();

		if (measuredWidth === 0 || measuredHeight === 0) {
			return null;
		}

		// Image is exported in pixels
		const canvas = new Canvas(measuredWidth, measuredHeight);

		canvas.scale(SCREEN_SCALE, SCREEN_SCALE);
		view.onDraw(canvas);

		const imgSource = new ImageSource(canvas.getImage());

		canvas.release();

		return imgSource;
	}
}

export { NSHTMLCanvasElement as HTMLCanvasElement };
