/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module nativescript {
		export module tzdatasource {
			export class NSTzDataSource {
				public static getAvailableZoneIds(): androidNative<string>;
				public static generateTimeZoneData(tzName: string, fullYearDataRange: number): string;
			}
		}
	}
}
