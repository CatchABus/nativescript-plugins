# @nativescript-community/ui-htmlcanvasapi

An HTML Canvas implementation on top of [@nativescript-community/ui-canvas](https://github.com/nativescript-community/ui-canvas).
 
Supported classes:
- HTMLCanvasElement
- OffscreenCanvas
- CanvasRenderingContext2D
- ImageBitmapRenderingContext
- OffscreenCanvasRenderingContext2D
- CanvasGradient
- CanvasPattern
- DOMMatrix
- DOMPoint (not used yet)
- Path2D
- TextMetrics

## Installation

```javascript
npm install @nativescript-community/ui-htmlcanvasapi
```

## Usage
Install polyfills (optional)
```ts
import { Application } from '@nativescript/core';
import { installPolyfills } from '@nativescript-community/ui-htmlcanvasapi';

installPolyfills();

Application.run({ moduleName: 'app-root' });
```

Then, set up your view
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:canvas="@nativescript-community/ui-canvas">
  <Page.actionBar>
    <ActionBar title="ui-htmlcanvasapi" icon="" class="action-bar">
    </ActionBar>
  </Page.actionBar>
  <StackLayout class="p-20">
    <canvas:CanvasView width="400" height="400" hardwareAccelerated="false" draw="onDraw"/>
  </StackLayout>
</Page>
```

```ts
import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { getOrCreateHTMLCanvasElement } from '@nativescript-community/ui-htmlcanvasapi';

export function onDraw(args: { object: CanvasView; canvas: Canvas }) {
	const htmlCanvas = getOrCreateHTMLCanvasElement(args.object, args.canvas);
	const ctx = htmlCanvas.getContext('2d');

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
}
```

Note: If you wish to draw outside of draw listener context, you should call `CanvasView` `invalidate()` method in order to request view to redraw itself.
```ts
import { CanvasView } from '@nativescript-community/ui-canvas';
import { getHTMLCanvasElementByView } from '@nativescript-community/ui-htmlcanvasapi';

function updateGraph(canvasView: CanvasView) {
	const htmlCanvas = getHTMLCanvasElementByView(canvasView);
	const ctx = htmlCanvas.getContext('2d');

	ctx.save();
	ctx.fillStyle = 'yellow';
	ctx.fillRect(10, 10, 200, 100);
	ctx.restore();

	canvasView.invalidate();
}
```

Sometimes, there might be a need to draw things offscreen but keep reference to the view and eventually want to draw everything there.  
`HTMLCanvasElement` includes these custom methods:
- enableOffscreenBuffer
- disableOffscreenBuffer
- isOffscreenBufferEnabled
- drawOffscreenBuffer


```ts
const htmlcanvas = getOrCreateHTMLCanvasElement(args.object, args.canvas);
const ctx = htmlcanvas.getContext('2d');

htmlcanvas.enableOffscreenBuffer();

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

htmlcanvas.drawOffscreenBuffer();
// If buffer is no longer needed, just discard it
htmlcanvas.disableOffscreenBuffer();
```

Note: This state is required to perform actions like `toDataURL`.

## License

Apache License Version 2.0
