import { Canvas, CanvasView, createRectF } from '@nativescript-community/ui-canvas';
import { ImageSource, Observable, Screen, Utils } from '@nativescript/core';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { CanvasContextType } from '../../CanvasTypes';
import { OffscreenCanvas } from './OffscreenCanvas';
import { SUPPORTED_CANVAS_IMAGE_FORMATS } from '../helpers';

class NSHTMLCanvasElement extends Observable {
	private readonly _canvasViewRef: WeakRef<CanvasView>;
	private readonly _nativeContextRef: WeakRef<Canvas>;

	private _offscreenContext: Canvas;
	private _context: CanvasRenderingContext2D | ImageBitmapRenderingContext;
	private _isControlledByOffscreen: boolean;

	constructor(canvasView?: CanvasView, canvasContext?: Canvas) {
		super();

		this._canvasViewRef = new WeakRef(canvasView);
		this._nativeContextRef = new WeakRef(canvasContext);
	}

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		if (this._isControlledByOffscreen) {
			throw new Error(`Failed to execute 'getContext' on 'HTMLCanvasElement': Cannot get context from a canvas that has transferred its control to offscreen.`);
		}

		const self = this;

		let cl;

		switch (contextId) {
			case '2d':
				cl = CanvasRenderingContext2D;
				break;
			case 'bitmaprenderer':
				cl = ImageBitmapRenderingContext;
				break;
			default:
				cl = null;
				break;
		}

		if (cl == null) {
			return null;
		}

		if (this._context != null && this._context instanceof cl) {
			return this._context;
		}

		const context = new cl();
		Object.defineProperty(context, 'canvas', {
			get() {
				return self;
			},
		});

		this._context = context;
		return this._context;
	}

	public enableOffscreenBuffer(): void {
		if (this._offscreenContext == null) {
			const scale = Screen.mainScreen.scale;
			this._offscreenContext = new Canvas(this.width * scale, this.height * scale);
		}
	}

	public disableOffscreenBuffer(): void {
		if (this._offscreenContext != null) {
			this._offscreenContext.release();
			this._offscreenContext = null;
		}
	}

	public drawOffscreenBuffer(): void {
		if (this._offscreenContext == null) {
			console.warn('This element does not have an offscreen buffer to draw');
			return;
		}

		const nativeContext = this._nativeContextRef.deref();
		const rect = createRectF(0, 0, this.width, this.height);
		nativeContext.drawBitmap(this._offscreenContext.getImage(), null, rect, null);
	}

	public transferControlToOffscreen(): OffscreenCanvas {
		if (this._context != null) {
			throw new Error(`Failed to execute 'transferControlToOffscreen' on 'HTMLCanvasElement': Cannot transfer control from a canvas that has a rendering context.`);
		}

		if (this._isControlledByOffscreen) {
			throw new Error(`Failed to execute 'transferControlToOffscreen' on 'HTMLCanvasElement': Cannot transfer control from a canvas for more than one time.`);
		}

		this._isControlledByOffscreen = true;
		return new OffscreenCanvas(this.width, this.height);
	}

	public toDataURL(type?: string, encoderOptions?: number): string {
		if (this._offscreenContext == null) {
			console.warn(`'Method 'toDataURL' can only be used with offscreen buffer enabled. Please use 'enableOffscreenBuffer' and 'drawOffscreenBuffer' methods`);
			return null;
		}

		const prefix = 'data:';

		if (this.width === 0 || this.height === 0) {
			return prefix;
		}

		if (type == null || !SUPPORTED_CANVAS_IMAGE_FORMATS.includes(type)) {
			type = 'image/png';
		}

		const format = type != null ? type.split('/')[1] : 'png';
		const quality = encoderOptions ? encoderOptions * 100 : 100;
		const imgSource = new ImageSource(this._offscreenContext.getImage());
		const base64String = imgSource.toBase64String(format as any, quality);

		return `${prefix + type};base64,${base64String}`;
	}

	public get view(): CanvasView {
		return this._canvasViewRef.deref();
	}

	public get nativeContext(): Canvas {
		return this._offscreenContext != null ? this._offscreenContext : this._nativeContextRef.deref();
	}

	get width(): number {
		const view = this.view;
		return view != null ? Utils.layout.toDeviceIndependentPixels(view.getMeasuredWidth()) : 0;
	}

	set width(val: number) {
		const view = this.view;
		if (view) {
			view.width = val;
		}
	}

	get height(): number {
		const view = this.view;
		return view != null ? Utils.layout.toDeviceIndependentPixels(view.getMeasuredHeight()) : 0;
	}

	set height(val: number) {
		const view = this.view;
		if (view) {
			view.height = val;
		}
	}
}

export { NSHTMLCanvasElement as HTMLCanvasElement };
