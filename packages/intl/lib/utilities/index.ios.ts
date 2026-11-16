import { Utils } from '@nativescript/core';

const supportedValuesMap = new Map<string, string[]>();

export function getCanonicalLocales(locale?: string | readonly string[]): string[] {
	const canonicals: string[] = [];

	if (typeof locale === 'string') {
		canonicals.push(NSLocale.canonicalLocaleIdentifierFromString(locale));
	} else {
		for (const l of locale) {
			canonicals.push(NSLocale.canonicalLocaleIdentifierFromString(l));
		}
	}
	return canonicals;
}

export function supportedValuesOf(key: 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit'): string[] {
	if (supportedValuesMap.has(key)) {
		return supportedValuesMap.get(key);
	}

	let values: string[];

	switch (key) {
		case 'calendar':
			values = Utils.ios.collections.nsArrayToJSArray(NSIntlUtils.getAvailableCalendarIds());
			break;
		case 'collation':
			values = Utils.ios.collections.nsArrayToJSArray(NSIntlUtils.getAvailableCollationIds());
			break;
		case 'currency':
			values = Utils.ios.collections.nsArrayToJSArray(NSLocale.ISOCurrencyCodes);
			break;
		case 'numberingSystem':
			values = Utils.ios.collections.nsArrayToJSArray(NSIntlUtils.getAvailableNumberingSystemIds());
			break;
		case 'timeZone':
			values = Utils.ios.collections.nsArrayToJSArray(NSTimeZone.knownTimeZoneNames);
			break;
		case 'unit':
			values = Utils.ios.collections.nsArrayToJSArray(NSIntlUtils.getAvailableUnitIds());
			break;
		default:
			throw new RangeError('Invalid key : ' + key);
	}

	supportedValuesMap.set(key, values);
	return values;
}
