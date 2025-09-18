# @nativescript-community/dns-lookup

A lightweight NativeScript plugin that performs DNS lookups on both iOS and Android.  
It resolves hostnames to IPv4 and IPv6 addresses using the corresponding platform native APIs (getaddrinfo on iOS and InetAddress on Android).

```javascript
npm install @nativescript-community/dns-lookup
```

## Usage

```ts
try {
  const addresses = await lookupDNS('my.hostname.is'); // Returns an array of ip addresses
} catch (e) {
  console.error(e);
}
```

## License

Apache License Version 2.0
