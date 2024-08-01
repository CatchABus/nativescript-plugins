import { Canvas, CanvasView, createRectF } from '@nativescript-community/ui-canvas';
import { ImageSource, Screen, Style, Utils } from '@nativescript/core';
import { CanvasContextType } from '../../CanvasTypes';
import { SUPPORTED_CANVAS_IMAGE_FORMATS } from '../helpers';

const styleProxyHandler: ProxyHandler<Style> = {
	get(target: Style, name: string, receiver) {
		const view = target.view as HTMLCanvasViewBase;
		if (view != null) {
			if (name === 'width') {
				return Utils.layout.toDeviceIndependentPixels(view.getMeasuredWidth());
			}

			if (name === 'height') {
				return Utils.layout.toDeviceIndependentPixels(view.getMeasuredWidth());
			}
		}
		return Reflect.get(target, name, receiver);
	},
	set(target: Style, name: string, value: any) {
		if (name === 'width' || name === 'height') {
			target[name] = typeof value === 'string' && value.endsWith('px') ? parseFloat(value) : value;
		} else {
			target[name] = value;
		}

		return true;
	},
};

abstract class HTMLCanvasViewBase extends CanvasView {
	private _mStyle: Style;
	private readonly _nativeContextRef: WeakRef<Canvas>;

	private _lastCanvas: Canvas;
	private _offscreenContext: Canvas;
	private _context2D: CanvasRenderingContext2D | ImageBitmapRenderingContext;
	private _isControlledByOffscreen: boolean;

	constructor() {
		super();

		this._mStyle = new Proxy(super.style, styleProxyHandler);
	}

	public getContext(contextId: '2d', contextAttributes?: any): CanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		if (this._isControlledByOffscreen) {
			throw new Error(`Failed to execute 'getContext' on 'HTMLCanvasView': Cannot get context from a canvas that has transferred its control to offscreen.`);
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

		if (this._context2D != null && this._context2D instanceof cl) {
			return this._context2D;
		}

		const context = new cl();
		Object.defineProperty(context, 'canvas', {
			get() {
				return self;
			},
		});

		this._context2D = context;
		return this._context2D;
	}

	public enableOffscreenBuffer(): void {
		if (this._offscreenContext == null) {
			const scale = Screen.mainScreen.scale;
			this._offscreenContext = new Canvas((this.width as number) * scale, (this.height as number) * scale);
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
			console.warn('This element does not have an offscreen buffer to draw');
			return;
		}

		const nativeContext = this._nativeContextRef.deref();
		const rect = createRectF(0, 0, this.width as number, this.height as number);
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
		return new OffscreenCanvas(this.width as number, this.height as number);
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

	public get nativeContext(): Canvas {
		return this._lastCanvas;
	}

	public override onDraw(canvas: Canvas) {
		this._lastCanvas = canvas;

		super.onDraw(canvas);
	}

	public override get style(): Style {
		return this._mStyle ?? super.style;
	}

	override set style(val: Style) {
		this._mStyle = new Proxy(val, styleProxyHandler);
	}
}

export { HTMLCanvasViewBase };