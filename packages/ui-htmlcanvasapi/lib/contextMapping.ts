import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { CanvasRenderingContext2D } from './contexts/CanvasRenderingContext2D';
import { HTMLCanvasElement } from './HTMLCanvasElement';

const canvasElementMap = new WeakMap<CanvasView, HTMLCanvasElement>();

function getOrCreateHTMLCanvasElement(view: CanvasView, canvas: Canvas): HTMLCanvasElement {
	if (canvasElementMap.has(view)) {
		return canvasElementMap.get(view);
	}

	const element = new HTMLCanvasElement(view, canvas);
	canvasElementMap.set(view, element);

	return element;
}

export { getOrCreateHTMLCanvasElement };
