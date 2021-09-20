[![npm](https://img.shields.io/npm/v/@nativescript-community/ui-neumorphiclayout.svg)](https://www.npmjs.com/package/@nativescript-community/ui-neumorphiclayout)
[![npm](https://img.shields.io/npm/dt/@nativescript-community/ui-neumorphiclayout.svg?label=npm%20downloads)](https://www.npmjs.com/package/@nativescript-community/ui-neumorphiclayout)
# @nativescript-community/ui-neumorphiclayout
Neumorphism-based layout for NativeScript.
<br/><br/>
<p align="center">
<img align="left" src="https://raw.githubusercontent.com/DimitrisRK/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview1.jpg" height="400px"/>
<img src="https://raw.githubusercontent.com/DimitrisRK/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview2.jpg" height="400px"/>
<img align="right" src="https://raw.githubusercontent.com/DimitrisRK/nativescript-plugins/master/packages/ui-neumorphiclayout/media/preview3.jpg" height="400px"/>
</p>

## Installation

```javascript
ns plugin add @nativescript-community/ui-neumorphiclayout
```

## Usage

### Plain NativeScript
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:ui="@nativescript-community/ui-neumorphiclayout" class="page">
    <Page.actionBar>
        <ActionBar title="Neumorphism" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>
    <StackLayout class="px-20" backgroundColor="#e0e1e3">
        <ui:NeumorphicLayout width="200" height="200" marginTop="30" neumorphicColor="#e0e1e3" state="CONVEX" cornerRadius="100">
            <Label text="Tap me!" textAlignment="center" width="100%" fontSize="24" color="#6d707d" fontWeight="bold" top="85"/>
        </ui:NeumorphicLayout>
    </StackLayout>
</Page>
```

## API
`NeumorphicLayout` inherits from [AbsoluteLayout](https://docs.nativescript.org/ui-and-styling.html#absolutelayout)
### Events
| Name | Description |
| --- | --- |
| draw | This event is triggered when layout content is drawn. It gives access to a `Canvas` instance for further drawing. Can be triggered manually by calling `invalidate()`. |
### Methods
| Name | Type | Description |
| --- | --- | --- |
| invalidate | void | Causes the layout to redraw its content. |
### Properties
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | State | FLAT | Determines the layout styling. Possible types: `FLAT, CONCAVE, CONVEX, PRESSED, PRESSED_IN_OUT`. Note: Pressed states are currently not available for iOS. |
| touchState | State | undefined | Determines the layout styling during touch. Note: Pressed states are currently not available for iOS. |
| neumorphicColor | Color | #fff | Determines the color that layout will use to set background and shadow colors. |
| overlayColor | Color | undefined | Determines the color that layout will use to set an alternative background color. |
| cornerRadius | number | 0 | Determines the rounding of the layout corners. |
| brightIntensity | number | 0.15 | Determines how much the `neumorphicColor` will be altered for the layout bright shadow. |
| darkIntensity | number | 0.15 | Determines how much the `neumorphicColor` will be altered for the layout dark shadow. |
| shadowDistance | number | 10 | Determines the offset of the layout shadows. The value is subtracted from the offset of the first shadow and added to the offset of the second one. |
| shadowRadius | number | `shadowDistance*2` | Determines the radius for the layout shadows. |

## About

This plugin exports a view component named `NeumorphicLayout` which extends NativeScript [AbsoluteLayout](https://docs.nativescript.org/ui-and-styling.html#absolutelayout) by adding support for applying Neumorphism style. This style is drawn onto view using [@nativescript-community/ui-canvas](https://www.npmjs.com/package/@nativescript-community/ui-canvas).

Apart from nesting children, one can draw on a `NeumorphicLayout` using `draw` event. Draw Event arguments include a `Canvas` instance whose API is almost identical to [Android Canvas](https://developer.android.com/reference/android/graphics/Canvas). For more details, see `ui-canvas` plugin mentioned above.

Its functionality is inspired by [Neumorphism.io](https://neumorphism.io).
