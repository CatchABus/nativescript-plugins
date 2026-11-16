import { getCanonicalLocales, supportedValuesOf } from './utilities';

export const IntlPolyfill = {
	Collator: null,
	NumberFormat: null,
	DateTimeFormat: null,
	RelativeTimeFormat: null,
	PluralRules: null,
	Locale: null,
	DisplayNames: null,
	ListFormat: null,
	Segmenter: null,
	getCanonicalLocales: getCanonicalLocales,
	supportedValuesOf: supportedValuesOf,
};
