import { CanvasGradient } from '../CanvasGradient';
import { CanvasPattern } from '../CanvasPattern';
import { CanvasRenderingContext2D } from '../contexts/CanvasRenderingContext2D';
import { ImageBitmapRenderingContext } from '../contexts/ImageBitmapRenderingContext';
import { OffscreenCanvasRenderingContext2D } from '../contexts/OffscreenCanvasRenderingContext2D';
import { DOMMatrix } from '../DOMMatrix';
import { DOMPoint } from '../DOMPoint';
import { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { Path2D } from '../Path2D';
import { TextMetrics } from '../TextMetrics';

const polyfills = {
	CanvasRenderingContext2D,
	ImageBitmapRenderingContext,
	OffscreenCanvasRenderingContext2D,
	OffscreenCanvas,
	CanvasGradient,
	CanvasPattern,
	DOMMatrix,
	DOMPoint,
	Path2D,
	TextMetrics,
};

let _isInstalled;

function installPolyfills() {
	if (_isInstalled) {
		console.warn('HTML Canvas polyfills are already installed');
		return;
	}

	_isInstalled = true;

	if (typeof global.window === 'undefined') {
		global.window = {};
	}

	if (!global.window.requestAnimationFrame) {
		global.window.requestAnimationFrame = (callback) => global.requestAnimationFrame(callback);
	}

	for (const key in polyfills) {
		global[key] = polyfills[key];
		global.window[key] = polyfills[key];
	}
}

export { installPolyfills };
