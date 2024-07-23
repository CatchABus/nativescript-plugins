import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';

class NSHTMLCanvasElement {
	private readonly _canvasViewRef: WeakRef<CanvasView>;
	private readonly _contextRef: WeakRef<Canvas>;

	constructor(canvasView?: CanvasView, canvasContext?: Canvas) {
		this._canvasViewRef = new WeakRef(canvasView);
		this._contextRef = new WeakRef(canvasContext);
	}

	public get view(): CanvasView {
		return this._canvasViewRef.deref();
	}

	public get nativeContext(): Canvas {
		return this._contextRef.deref();
	}

	get width(): number {
		const context = this.nativeContext;
		return context != null ? context.getWidth() : 0;
	}

	set width(val: number) {
		const view = this.view;
		if (view) {
			view.width = val;
		}
	}

	get height(): number {
		const context = this.nativeContext;
		return context != null ? context.getHeight() : 0;
	}

	set height(val: number) {
		const view = this.view;
		if (view) {
			view.height = val;
		}
	}
}

export { NSHTMLCanvasElement as HTMLCanvasElement };
