import { Utils } from '@nativescript/core';
import { LookupDNSFunction } from '.';

export const lookupDNS: LookupDNSFunction = function (hostName: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		try {
			NSDNSResolver.resolveHostCompletion(hostName, (values) => {
				resolve(Utils.ios.collections.nsArrayToJSArray(values));
			});
		} catch (err) {
			reject(err);
		}
	});
};
