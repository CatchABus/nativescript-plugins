# @nativescript-community/tz-datasource

A NativeScript plugin that provides access to the device's timezone data.  
It was designed to be compatible with [@formatjs/intl-datetimeformat](https://www.npmjs.com/package/@formatjs/intl-datetimeformat) polyfill. The polyfill itself provides large timezone polyfills which can be easily avoided by using this plugin.  
The plugin was designed in such a way that it lazily loads only whatever timezone data are needed by dates.  

## Installation

```javascript
npm install @nativescript-community/tz-datasource
```

## Usage
```ts
import { createTzDataSource } from '@nativescript-community/tz-datasource';

/**
 * The parameter is the range of transitions in years.
 * In this case, the plugin is asked to only fetch data for -125/+125 years based on current date.
 * Note: A small year range can result in empty results for zones like Asia/Tokyo.
 */
const tzData = createTzDataSource(250);

// For Intl polyfill users, this is the way to apply the plugin timezone data
Intl.DateTimeFormat['tzData'] = tzData;
```

## License

Apache License Version 2.0
