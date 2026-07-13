# @nativescript-community/ui-jsx

Build NativeScript user interface using plain JSX syntax.  

This plugin adds JSX support to NativeScript without requiring React or another UI framework. JSX elements are compiled directly into NativeScript views, allowing you to write declarative UI while keeping your application lightweight and close to the NativeScript APIs.  
  
The following examples are provided in the demo app:
- [CollectionView](/apps/demo/src/plugin-demos/ui-jsx/CollectionView.tsx)
- [Counter](/apps/demo/src/plugin-demos/ui-jsx/Counter.tsx)
- [Page with CSS](/apps/demo/src/plugin-demos/ui-jsx/PageWithCSS.tsx)
- [Page with nested JSX component](/apps/demo/src/plugin-demos/ui-jsx/PageWithComponent.tsx)
- [Reactive counter using mobx](/apps/demo/src/plugin-demos/ui-jsx/Reactivity.tsx)
- [Reactive TextField using mobx](/apps/demo/src/plugin-demos/ui-jsx/ReactiveTextField.tsx)

You can also setup your own reactivity system using `JSXHelper.onCreatingView` callback.
See how it's done in the [mobx-setup](/apps/demo/src/mobx-setup.ts) module in the demo app.

## Installation

```javascript
npm install @nativescript-community/ui-jsx
```

Also, make sure to update the following:  
- tsconfig.json
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@nativescript-community/ui-jsx"
  }
}
```

- references.d.ts
```ts
/// <reference path="./node_modules/@nativescript-community/ui-jsx/index.d.ts" />
```

## Usage
```tsx
// A JSX component
export default function Counter() {
  let counter = 42;
  const counterLabel = <label text={`${counter} taps left`} class="h2 text-center" textWrap={true} />;

  function onTap() {
    if (counter <= 0) {
      counterLabel.text = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      counter--;
      counterLabel.text = `${counter} taps left`;
    }
  }

  return (
    <page class="page">
      <actionBar title="Counter" class="action-bar">
      </actionBar>
      <stackLayout class="p-20">
        <label text="Tap the button" class="h1 text-center"/>
        <button text="TAP" class="btn btn-primary" onTap={onTap}/>
        {counterLabel}
      </stackLayout>
    </page>
  );
}
```

### Custom type configuration

The plugin allows extending types based on your preferences.  
Supported configurations:
- commonAttributeType | The additional return type for all jsx element attributes.
  
e.g.
```ts
import { IComputedValue, IObservableArray, IObservableValue } from 'mobx';

declare global {
	interface NativeScriptJSXTypeConfig<T> {
		commonAttributeType: IObservableValue<T> | IComputedValue<T> | IObservableArray<any>;
	}
}
```

### Custom elements

The plugin also provides an API for adding custom elements:  
TypeScript:
```ts
import { JSXHelper } from '@nativescript-community/ui-jsx';
import { CollectionView } from '@nativescript-community/ui-collectionview';

JSXHelper.registerElement('collectionView', CollectionView);
```
Typings:
```ts
import { CollectionView } from '@nativescript-community/ui-collectionview';
import { NativeScriptElement } from '@nativescript-community/ui-jsx';

export {};

declare global {
	interface NativeScriptJSX {
		collectionView: NativeScriptElement<CollectionView, typeof CollectionView>;
	}
}
```

### HMR

The plugin was designed to make use of NativeScript core's builtin HMR handling, provided that certain rules are followed:
- Navigating components must always export a default function that returns the `Page` instance
- The component default function must be assigned to the navigation entry's `create` property

e.g.
```ts
Frame.topmost().navigate({
  create: MyCustomComponent
});
```

## License

Apache License Version 2.0
