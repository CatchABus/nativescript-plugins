[![npm](https://img.shields.io/npm/v/@nativescript-community/ui-neumorphiclayout.svg)](https://www.npmjs.com/package/@nativescript-community/ui-neumorphiclayout)
[![npm](https://img.shields.io/npm/dt/@nativescript-community/ui-neumorphiclayout.svg?label=npm%20downloads)](https://www.npmjs.com/package/@nativescript-community/ui-neumorphiclayout)
# @nativescript-community/ui-neumorphiclayout
A plugin that adds support for neumorphism styling to NativeScript [layout containers](https://docs.nativescript.org/ui-and-styling.html#layout-containers).
<br/><br/>
<p align="center">
<img align="left" src="https://raw.githubusercontent.com/CatchABus/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview1.jpg" height="400px"/>
<img src="https://raw.githubusercontent.com/CatchABus/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview2.jpg" height="400px"/>
<img align="right" src="https://raw.githubusercontent.com/CatchABus/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview3.jpg" height="400px"/>
</p>

## Installation

```javascript
ns plugin add @nativescript-community/ui-neumorphiclayout
or
npm i @nativescript-community/ui-neumorphiclayout
```

## Usage
Importing plugin at startup is all it takes to add support for neumorphism styling to your application. 

NOTE: Scrollable views like `ListView` or `ScrollView` must NEVER be direct siblings of a view with neumorphism because of android `clipChildren` effect. 
Instead, add those views inside a layout container.
### Plain NativeScript

TypeScript
```ts
import { Application } from '@nativescript/core';
import '@nativescript-community/ui-neumorphiclayout';

Application.run({ moduleName: 'app-root' });
```

XML
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page">
    <Page.actionBar>
        <ActionBar title="Neumorphism" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>
    <StackLayout class="px-20" backgroundColor="#e0e1e3">
        <StackLayout verticalAlignment="center" width="200" height="200" marginTop="30" neumorphism="convex" fillColor="#e0e1e3" lightShadowColor="#ffffff" darkShadowColor="#bebfc1" cornerRadius="100">
            <Label text="Tap me!" textAlignment="center" fontSize="24" color="#6d707d" fontWeight="bold"/>
        </StackLayout>
    </StackLayout>
</Page>
```

## API
### Properties
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| neumorphism | string | null | Determines the view neumorphism styling. Possible types: `flat, concave, convex, pressed, pressed-in-out`. |
| fillColor | Color | #ffffff | Determines the color that view will use to set background color. |
| lightShadowColor | Color | #ffffff | Determines the color that view will use to set light shadow color. |
| darkShadowColor | Color | #d9d9d9 | Determines the color that view will use to set dark shadow color. |
| cornerRadius | number | 0 | Determines the rounding of the view corners. |
| shadowDistance | number | 10 | Determines the offset of the view shadows. The value is subtracted from the offset of the first shadow and added to the offset of the second one. |
| shadowRadius | number | `shadowDistance*2` | Determines the radius for the view shadows. |

## About

This plugin adds support for neumorphism styling to NativeScript [layout containers](https://docs.nativescript.org/ui-and-styling.html#layout-containers). It also includes basic gesture support for tap effect. 

Its functionality is inspired by [Neumorphism.io](https://neumorphism.io).
