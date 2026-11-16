import { getCanonicalLocales, supportedValuesOf } from './lib/utilities';

export function install(): void {
	const polyfill: typeof Intl = {
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

	if (typeof Intl === 'undefined') {
		global.Intl = polyfill;
	} else {
		Object.assign(Intl, polyfill);
	}
}
