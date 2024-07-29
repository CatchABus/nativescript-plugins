import { Canvas } from '@nativescript-community/ui-canvas';
import { ImageSource, Observable, Screen } from '@nativescript/core';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { CanvasContextType } from '../../CanvasTypes';
import { OffscreenCanvasRenderingContext2D } from '../contexts/OffscreenCanvasRenderingContext2D';

class NSOffscreenCanvas extends Observable {
	private _nativeContext: Canvas;
	private _context: OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext;
	private _width: number;
	private _height: number;

	constructor(width: number, height: number) {
		super();

		this._width = width;
		this._height = height;

		const scale = Screen.mainScreen.scale;
		this._nativeContext = new Canvas(width * scale, height * scale);
	}

	private _updateNativeContext(): void {
		const scale = Screen.mainScreen.scale;

		if (this._nativeContext != null) {
			this._nativeContext.release();
		}

		this._nativeContext = new Canvas(this._width * scale, this._height * scale);
	}

	public getContext(contextId: '2d', contextAttributes?: any): OffscreenCanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		const self = this;

		let cl;

		switch (contextId) {
			case '2d':
				cl = OffscreenCanvasRenderingContext2D;
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
		return context;
	}

	public transferToImageBitmap(): ImageSource {
		return new ImageSource(this._nativeContext.getImage());
	}

	public convertToBlob(options: any): Blob {
		console.warn('Method convertToBlob is not implemented');
		return null;
	}

	public get nativeContext(): Canvas {
		return this._nativeContext;
	}

	get width(): number {
		return this._width;
	}

	set width(val: number) {
		const oldVal = this._width;

		this._width = val;

		if (this._width !== oldVal) {
			this._updateNativeContext();
		}
	}

	get height(): number {
		return this._height;
	}

	set height(val: number) {
		const oldVal = this._height;

		this._height = val;

		if (this._height !== oldVal) {
			this._updateNativeContext();
		}
	}
}

export { NSOffscreenCanvas as OffscreenCanvas };
