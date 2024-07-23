import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { EventData, Page, View } from '@nativescript/core';
import { getOrCreate2DContext } from '@nativescript-community/ui-htmlcanvasapi';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function onDraw(args: { object: CanvasView; canvas: Canvas }) {
	const ctx = getOrCreate2DContext(args.object, args.canvas);

	ctx.save();

	ctx.fillStyle = 'yellow';
	ctx.fillRect(10, 10, 200, 100);

	ctx.transform(1, 0.5, -0.5, 1, 30, 10);

	ctx.fillStyle = 'red';
	ctx.fillRect(10, 10, 200, 100);

	ctx.transform(1, 0.5, -0.5, 1, 30, 10);

	ctx.fillStyle = 'blue';
	ctx.fillRect(10, 10, 200, 100);

	ctx.restore();

	ctx.save();

	// Set type of compositing
	ctx.globalCompositeOperation = 'lighten';

	// Draw two overlapping rectangles
	ctx.fillStyle = 'blue';
	ctx.fillRect(260, 10, 100, 100);
	ctx.fillStyle = 'red';
	ctx.fillRect(290, 40, 100, 100);

	ctx.restore();

	ctx.save();

	// Shadow
	ctx.shadowColor = 'lightblue';
	ctx.shadowBlur = 4;
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;

	ctx.font = '50px Arial';

	// Filled text
	ctx.fillStyle = 'purple';
	ctx.fillText('Hello World', 10, 400);

	// Stroked text
	ctx.strokeStyle = 'purple';
	ctx.letterSpacing = 10;
	ctx.strokeText('Hello World', 10, 460);

	ctx.restore();

	ctx.save();
	ctx.globalCompositeOperation = 'xor';

	ctx.fillStyle = 'blue';
	ctx.fillRect(110, 510, 100, 100);

	ctx.fillStyle = 'red';
	ctx.fillRect(150, 550, 100, 100);
	ctx.restore();
}
