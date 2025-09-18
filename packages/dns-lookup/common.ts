import { LookupDNSFunction } from '.';

export const lookupDNS: LookupDNSFunction = function (value: string): Promise<string[]> {
	return Promise.resolve([]);
};
