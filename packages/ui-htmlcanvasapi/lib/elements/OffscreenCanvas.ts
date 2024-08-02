import { Canvas } from '@nativescript-community/ui-canvas';
import { ImageSource, Observable, Screen } from '@nativescript/core';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { CanvasContextType } from '../../CanvasTypes';
import { OffscreenCanvasRenderingContext2D } from '../contexts/OffscreenCanvasRenderingContext2D';

class NSOffscreenCanvas extends Observable {
	private _nativeContext: Canvas;
	private _contexts: Map<CanvasContextType, OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext>;
	private _width: number;
	private _height: number;

	constructor(width: number, height: number) {
		super();

		this._width = width;
		this._height = height;

		this._updateNativeContext();
	}

	private _updateNativeContext(): void {
		const scale = Screen.mainScreen.scale;

		if (this._nativeContext != null) {
			this._nativeContext.release();
		}

		this._nativeContext = new Canvas(this._width * scale, this._height * scale);
		this._nativeContext.scale(scale, scale);
	}

	public getContext(contextId: '2d', contextAttributes?: any): OffscreenCanvasRenderingContext2D | null;
	public getContext(contextId: 'bitmaprenderer', contextAttributes?: any): ImageBitmapRenderingContext | null;

	public getContext(contextId: CanvasContextType, contextAttributes?: any): any {
		const self = this;

		if (!this._contexts) {
			this._contexts = new Map();
		}

		if (this._contexts.has(contextId)) {
			return this._contexts.get(contextId);
		}

		let context: OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext;

		switch (contextId) {
			case '2d':
				context = new OffscreenCanvasRenderingContext2D();
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

	public transferToImageBitmap(): ImageSource {
		return new ImageSource(this._nativeContext.getImage());
	}

	public convertToBlob(options: any): Blob {
		console.warn('Method convertToBlob is not implemented');
		return null;
	}

	public isOffscreenBufferEnabled(): boolean {
		return true;
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
