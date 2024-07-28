import { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { AbstractCanvasRenderingContext2D } from './AbstractCanvasRenderingContext2D';

class NSOffscreenCanvasRenderingContext2D extends AbstractCanvasRenderingContext2D {
	public override get canvas(): OffscreenCanvas {
		throw new TypeError('Illegal invocation');
	}
}

export { NSOffscreenCanvasRenderingContext2D as OffscreenCanvasRenderingContext2D };
