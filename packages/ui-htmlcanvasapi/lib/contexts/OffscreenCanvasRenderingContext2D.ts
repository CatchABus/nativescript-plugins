import { OffscreenCanvas } from '../elements/OffscreenCanvas';
import { AbstractCanvasRenderingContext2D } from './AbstractCanvasRenderingContext2D';

class NSOffscreenCanvasRenderingContext2D extends AbstractCanvasRenderingContext2D {
	declare readonly canvas: OffscreenCanvas;
}

export { NSOffscreenCanvasRenderingContext2D as OffscreenCanvasRenderingContext2D };
