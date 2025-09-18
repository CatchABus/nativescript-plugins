import { LookupDNSFunction } from '.';

const NSDNSResolver = com.nativescript.dns.NSDNSResolver;

export const lookupDNS: LookupDNSFunction = function (value: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		try {
			NSDNSResolver.resolveHost(
				value,
				new NSDNSResolver.CompleteCallback({
					onComplete(addresses) {
						resolve(addresses);
					},
					onError(error) {
						reject(new Error(error.getMessage()));
					},
				})
			);
		} catch (e) {
			reject(e);
		}
	});
};
