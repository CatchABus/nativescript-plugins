export type LookupDNSFunction = (hostName: string) => Promise<string[]>;
export declare const lookupDNS: LookupDNSFunction;
