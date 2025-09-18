declare class NSDNSResolver extends NSObject {
	static alloc(): NSDNSResolver; // inherited from NSObject
	static new(): NSDNSResolver; // inherited from NSObject
	static resolveHostCompletion(hostName: string, completionCallback: (values: NSArray<string>) => void): void;
}
