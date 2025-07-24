# @nativescript-community/nordic-dfu

A NativeScript plugin that integrates Nordic Semiconductor’s DFU (Device Firmware Update) library, enabling seamless Bluetooth OTA firmware updates for compatible BLE devices.  
Built using Nordic’s official [android](https://github.com/NordicSemiconductor/Android-DFU-Library) and [iOS](https://github.com/NordicSemiconductor/IOS-DFU-Library) DFU libraries, this plugin provides a native bridge for initiating and monitoring firmware updates across iOS and Android — fully accessible from JavaScript/TypeScript.

## Installation

```javascript
npm install @nativescript-community/nordic-dfu
```

## Usage
Note: Make sure to add the following permissions in android manifest file:
```xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE"/>
```

Sample:
```ts
import { DFUInitiator, DfuProgressEventData, DfuStateChangedEventData } from '@nativescript-community/nordic-dfu';

const myDeviceUUID = 'a string representation of UUID/address';
const filePath = '/test/file.zip';

const initiator = new DFUInitiator(myDeviceUUID);

initiator.on("DFUStateChanged", (args: DfuStateChangedEventData) => {
  if (args.state === DfuState.DFU_COMPLETED) {
    console.log("DFU completed!");
  }
});

initiator.on("DFUProgress", (args: DfuProgressEventData) => {
  console.log(`Progress: ${args.percent}%`);
});

const controller = initiator.start(filePath);

// Use controller to manipulate the procedure
setTimeout(() => {
  controller.pause();
}, 2000);

setTimeout(() => {
  controller.resume();
}, 4000);

setTimeout(() => {
  controller.abort();
}, 5000);
```

## License

Apache License Version 2.0
