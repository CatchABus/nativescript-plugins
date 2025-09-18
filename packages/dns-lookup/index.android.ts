import { LookupDNSFunction } from '.';

const NSDNSResolver = com.nativescript.dns.NSDNSResolver;

export const lookupDNS: LookupDNSFunction = function (hostName: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		try {
			const addresses: string[] = [];

			NSDNSResolver.resolveHost(
				hostName,
				new NSDNSResolver.OnResolveCallback({
					onIPAddressResolution(address) {
						addresses.push(address);
					},
					onComplete() {
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
