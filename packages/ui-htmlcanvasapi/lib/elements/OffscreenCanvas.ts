import { Canvas } from '@nativescript-community/ui-canvas';
import { ImageSource, Observable, Screen } from '@nativescript/core';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { CanvasContextType } from '../../CanvasTypes';
import { OffscreenCanvasRenderingContext2D } from '../contexts/OffscreenCanvasRenderingContext2D';

class NSOffscreenCanvas extends Observable {
	private readonly _nativeContext: Canvas;

	private _context: OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext;

	constructor(width: number, height: number) {
		super();

		const scale = Screen.mainScreen.scale;
		this._nativeContext = new Canvas(width * scale, height * scale);
	}

	public getContext(contextId: '2d'): OffscreenCanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer'): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType): any {
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

	public get nativeContext(): Canvas {
		return this._nativeContext;
	}

	get width(): number {
		return this._nativeContext != null ? this._nativeContext.getWidth() : 0;
	}

	get height(): number {
		return this._nativeContext != null ? this._nativeContext.getHeight() : 0;
	}
}

export { NSOffscreenCanvas as OffscreenCanvas };
