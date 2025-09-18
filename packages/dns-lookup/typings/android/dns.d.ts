/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module nativescript {
		export module dns {
			export module NSDNSResolver {
				export class OnResolveCallback {
					constructor(implementation: IOnResolveCallback);
					onIPAddressResolution(address: string): void;
					onComplete(): void;
					onError(error: java.lang.Exception): void;
				}

				export interface IOnResolveCallback {
					onIPAddressResolution(address: string): void;
					onComplete(): void;
					onError(error: java.lang.Exception): void;
				}

				export function resolveHost(hostName: string, callback: OnResolveCallback): void;
			}
		}
	}
}
