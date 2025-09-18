/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module nativescript {
		export module dns {
			export module NSDNSResolver {
				export class CompleteCallback {
					constructor(implementation: ICompleteCallback);
					onComplete(addresses: string[]): void;
					onError(error: java.lang.Exception): void;
				}

				export interface ICompleteCallback {
					onComplete(addresses: string[]): void;
					onError(error: java.lang.Exception): void;
				}

				export function resolveHost(hostName: string, callback: CompleteCallback): void;
			}
		}
	}
}
