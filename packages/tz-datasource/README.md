# @nativescript-community/tz-datasource

A NativeScript plugin that provides access to the device's timezone data.  
It was designed to be compatible with [@formatjs/intl-datetimeformat](https://www.npmjs.com/package/@formatjs/intl-datetimeformat) polyfill. The polyfill itself provides large timezone polyfills which can be easily avoided by using this plugin.  
The plugin was designed in such a way that it lazily loads only whatever timezone data are needed by dates.  

*Note: In the case of android, this plugin will work on Android 8 (SDK 26) or later.  

## Installation

```javascript
npm install @nativescript-community/tz-datasource
```

## Usage
```ts
import { createTzDataSource } from '@nativescript-community/tz-datasource';

/**
 * The parameter is the range of transitions in years.
 * In this case, the plugin is asked to only fetch data for -5/+5 years based on current date.
 */
const tzData = createTzDataSource(10);

// For Intl polyfill users, this is the way to apply the plugin timezone data
Intl.DateTimeFormat['tzData'] = tzData;
```

## License

Apache License Version 2.0
