import { LookupDNSFunction } from '.';

export const lookupDNS: LookupDNSFunction = function (hostName: string): Promise<string[]> {
	return Promise.resolve([]);
};
