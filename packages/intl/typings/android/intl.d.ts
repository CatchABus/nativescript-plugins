/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module nativescript {
		export module intl {
			export class NSIntlUtils {
				public static canonicalizeLocaleString(str: string): string;
				public static getAvailableUnitIds(): androidNative<string>;
			}
		}
	}
}
