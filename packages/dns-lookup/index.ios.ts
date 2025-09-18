import { LookupDNSFunction } from '.';

export const lookupDNS: LookupDNSFunction = function (value: string): Promise<string[]> {
	const addresses: string[] = [];

	return new Promise((resolve, reject) => {
		try {
			NSDNSResolver.resolveHostCompletion(value, (addresses) => {
				resolve(addresses);
			});
		} catch (err) {
			reject(err);
		}
	});
};
