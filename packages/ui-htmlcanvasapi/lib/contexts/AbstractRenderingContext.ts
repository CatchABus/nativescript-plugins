import type { HTMLCanvasElement } from '../HTMLCanvasElement';

class AbstractRenderingContext {
	protected readonly _canvasElement: HTMLCanvasElement;

	constructor(element?: HTMLCanvasElement) {
		this._canvasElement = element;
	}
}

export { AbstractRenderingContext };
