# @nativescript-community/ui-htmlcanvasapi

An HTML Canvas implementation on top of [@nativescript-community/ui-canvas](https://github.com/nativescript-community/ui-canvas).
 
Supported classes:
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
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:canvas="@nativescript-community/ui-htmlcanvasapi">
  <Page.actionBar>
    <ActionBar title="ui-htmlcanvasapi" icon="" class="action-bar">
    </ActionBar>
  </Page.actionBar>
  <StackLayout class="p-20">
    <canvas:HTMLCanvasView width="400" height="400" hardwareAccelerated="true" draw="onDraw"/>
  </StackLayout>
</Page>
```

```ts
import { Canvas } from '@nativescript-community/ui-canvas';
import { HTMLCanvasView } from '@nativescript-community/ui-htmlcanvasapi';

export function onDraw(args: { object: HTMLCanvasView; canvas: Canvas }) {
	const ctx = args.object.getContext('2d');

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

Note: If you wish to draw outside of draw listener context, you should call `HTMLCanvasView` `invalidate()` method in order to request view to redraw itself.
```ts
import { HTMLCanvasView } from '@nativescript-community/ui-htmlcanvasapi';

function updateGraph(canvasView: HTMLCanvasView) {
	const ctx = canvasView.getContext('2d');

	ctx.save();
	ctx.fillStyle = 'yellow';
	ctx.fillRect(10, 10, 200, 100);
	ctx.restore();

	canvasView.invalidate();
}
```

Sometimes, there might be a need to draw things offscreen but keep reference to the view and eventually want to draw everything there.  
An offscreen buffer can be enabled by setting `isOffscreenBufferEnabled` to `true`.   
Note: Everything will be drawn onto view canvas once app calls view `invalidate()` method.   

```xml
<canvas:HTMLCanvasView id="canvasView" width="100%" height="300" hardwareAccelerated="true" isOffscreenBufferEnabled="true"/>
```

```ts
import { HTMLCanvasView } from '@nativescript-community/ui-htmlcanvasapi';
import { EventData, Page } from '@nativescript/core';

function onNavigatedTo(args: EventData): void {
	const page = <Page>args.object;
	const canvasView = page.getViewById<HTMLCanvasView>("canvasView");
	const ctx = canvasView.getContext('2d');

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

	// Draw everything to view
	canvasView.invalidate();
}
```

## License

Apache License Version 2.0
