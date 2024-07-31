import { ImageSource } from '@nativescript/core';
import { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { createRectF } from '@nativescript-community/ui-canvas';

class NSImageBitmapRenderingContext {
	private get canvas(): HTMLCanvasElement | OffscreenCanvas {
		throw new TypeError('Illegal invocation');
	}

	public transferFromImageBitmap(imageSource: ImageSource | any): void {
		const nativeContext = this.canvas.nativeContext;
		if (nativeContext) {
			const rect = createRectF(0, 0, nativeContext.getWidth(), nativeContext.getHeight());
			nativeContext.drawBitmap(imageSource, null, rect, null);
		}
	}
}

export { NSImageBitmapRenderingContext as ImageBitmapRenderingContext };
