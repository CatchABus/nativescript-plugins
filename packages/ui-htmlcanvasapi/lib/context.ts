import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { CanvasRenderingContext2D } from './CanvasRenderingContext2D';

const contextMap = new WeakMap<CanvasView, CanvasRenderingContext2D>();

function get2DContextByView(view: CanvasView): CanvasRenderingContext2D {
	if (contextMap.has(view)) {
		const context = contextMap.get(view);
		if (!context.isContextLost()) {
			return context;
		}
	}

	return null;
}

function getOrCreate2DContext(view: CanvasView, canvas: Canvas): CanvasRenderingContext2D {
	let context: CanvasRenderingContext2D;

	if (contextMap.has(view)) {
		const context = contextMap.get(view);
		if (!context.isContextLost()) {
			return context;
		}
	}

	context = new CanvasRenderingContext2D(view, canvas);
	contextMap.set(view, context);

	return context;
}

export { get2DContextByView, getOrCreate2DContext };
