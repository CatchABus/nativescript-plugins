# @nativescript-community/ui-constraintlayout

This plugin brings Android [ConstraintLayout](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout) capabilities to NativeScript, with a compatible iOS implementation.  
It supports the most commonly used constraints for building flexible, responsive UI layouts across platforms — using a unified API.

## Installation

```javascript
npm install @nativescript-community/ui-constraintlayout
```

## Usage
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page" xmlns:ui="@nativescript-community/ui-constraintlayout">
  <Page.actionBar>
    <ActionBar title="ui-constraintlayout" icon="" class="action-bar">
    </ActionBar>
  </Page.actionBar>
  <ui:ConstraintLayout>
    <Button id="button1" text="Click me!" leftToLeftOf="parent" topToTopOf="parent" bottomToBottomOf="parent" backgroundColor="red"/>
    <Button id="button1" text="Click me too!" rightToRightOf="parent" topToTopOf="parent" bottomToBottomOf="parent" backgroundColor="yellow"/>
  </ui:ConstraintLayout>
</Page>
```

## License

Apache License Version 2.0
