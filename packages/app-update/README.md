# @nativescript-community/app-update

A NativeScript plugin that provides a simple API for checking and managing in-app updates.
  
On Android, the plugin integrates with Google's AppUpdateManager to check for available updates and initiate supported in-app update flows.
  
On iOS, the plugin provides partial support for AppUpdateInfo, allowing you to check basic app update information through the App Store, while the Android-specific in-app update functionality is not available.

## Installation

```javascript
npm install @nativescript-community/app-update
```

## Usage
```ts
import { AppUpdateManager } from '@nativescript-community/app-update';

const manager = new AppUpdateManager();
manager.getAppUpdateInfo().then((value) => {
  console.log(value.getUpdateAvailability());
});
```

## License

Apache License Version 2.0
