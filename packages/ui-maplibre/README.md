# @nativescript-community/ui-maplibre

This plugin allows you to integrate [MapLibre native SDKs](https://github.com/maplibre/maplibre-native) into your NativeScript applications on **iOS** and **Android**.  
It provides a foundation for displaying interactive maps, adding markers, and customizing map views directly from your NativeScript code.

> ⚠️ Note: This plugin is in early development. Not all MapLibre features are implemented yet, but it provides a solid starting point for integrating maps into your app.

## Installation

```javascript
npm install @nativescript-community/ui-maplibre
```

## Usage
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page" xmlns:ui="@nativescript-community/ui-maplibre">
  <Page.actionBar>
    <ActionBar title="ui-maplibre" icon="" class="action-bar">
        </ActionBar>
  </Page.actionBar>
  <StackLayout class="p-20">
    <ScrollView class="h-full">
      <StackLayout>
        <ui:MapLibreView width="100%" height="500" mapReady="onMapReady"/>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</Page>
```
```ts
import { MapEventData } from '@nativescript-community/ui-maplibre';

export function onMapReady(args: MapEventData) {
	const mapView = args.object;
	const map = mapView.getMap();

	map.setStyle(new URL('https://demotiles.maplibre.org/style.json'));
}
```

## License

Apache License Version 2.0
