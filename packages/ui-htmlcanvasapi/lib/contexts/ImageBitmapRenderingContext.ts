import { ImageSource } from '@nativescript/core';
import type { HTMLCanvasElement } from '../elements/HTMLCanvasElement';
import { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { Paint } from '@nativescript-community/ui-canvas';

class NSImageBitmapRenderingContext {
	declare readonly canvas: HTMLCanvasElement | OffscreenCanvas;

	public transferImageBitmap(imageSource: ImageSource | any): void {
		this.transferFromImageBitmap(imageSource);
	}

	public transferFromImageBitmap(imageSource: ImageSource | any): void {
		const nativeContext = this.canvas.nativeContext;
		if (nativeContext) {
			const paint = new Paint();
			paint.setAntiAlias(true);

			nativeContext.drawBitmap(imageSource, 0, 0, paint);
		}
	}
}

export { NSImageBitmapRenderingContext as ImageBitmapRenderingContext };
