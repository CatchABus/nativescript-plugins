# @nativescript-community/ui-htmlcanvasapi

An HTML Canvas implementation on top of [@nativescript-community/ui-canvas](https://github.com/nativescript-community/ui-canvas).

```javascript
npm install @nativescript-community/ui-htmlcanvasapi
```

## Usage
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:canvas="@nativescript-community/ui-canvas">
  <Page.actionBar>
    <ActionBar title="ui-htmlcanvasapi" icon="" class="action-bar">
    </ActionBar>
  </Page.actionBar>
  <StackLayout class="p-20">
    <canvas:CanvasView width="400" height="400" hardwareAccelerated="true" draw="onDraw"/>
  </StackLayout>
</Page>
```

```ts
import { Canvas, CanvasView } from '@nativescript-community/ui-canvas';
import { getOrCreate2DContext } from '@nativescript-community/ui-htmlcanvasapi';

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
}
```

## License

Apache License Version 2.0
