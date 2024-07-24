import { ImageSource } from '@nativescript/core';
import type { HTMLCanvasElement } from '../HTMLCanvasElement';
import { AbstractRenderingContext } from './AbstractRenderingContext';

class NSImageBitmapRenderingContext extends AbstractRenderingContext {
	constructor(element?: HTMLCanvasElement) {
		super(element);
	}

	public transferFromImageBitmap(imageSource: ImageSource | any): void {
		const nativeContext = this._canvasElement.nativeContext;
		if (nativeContext) {
			nativeContext.drawBitmap(imageSource, 0, 0, null as any);
		}
	}
}

export { NSImageBitmapRenderingContext as ImageBitmapRenderingContext };
