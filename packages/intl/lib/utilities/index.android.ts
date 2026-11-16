const supportedValuesMap = new Map<string, string[]>();

export function getCanonicalLocales(locale?: string | readonly string[]): string[] {
	const canonicals: string[] = [];

	if (typeof locale === 'string') {
		canonicals.push(com.nativescript.intl.NSIntlUtils.canonicalizeLocaleString(locale));
	} else {
		if (Array.isArray(locale)) {
			for (const l of locale) {
				canonicals.push(com.nativescript.intl.NSIntlUtils.canonicalizeLocaleString(l));
			}
		}
	}
	return canonicals;
}

export function supportedValuesOf(key: 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit'): string[] {
	if (supportedValuesMap.has(key)) {
		return supportedValuesMap.get(key);
	}

	const values: string[] = [];
	let nativeArr: androidNative.Array<string>;

	switch (key) {
		case 'calendar':
			nativeArr = android.icu.util.Calendar.getKeywordValuesForLocale(key, android.icu.util.ULocale.ROOT, false);
			break;
		case 'collation':
			nativeArr = android.icu.text.Collator.getKeywordValues(key);
			break;
		case 'currency':
			nativeArr = android.icu.util.Currency.getKeywordValuesForLocale(key, android.icu.util.ULocale.ROOT, false);
			break;
		case 'numberingSystem':
			nativeArr = android.icu.text.NumberingSystem.getAvailableNames();
			break;
		case 'timeZone':
			nativeArr = android.icu.util.TimeZone.getAvailableIDs();
			break;
		case 'unit':
			nativeArr = com.nativescript.intl.NSIntlUtils.getAvailableUnitIds();
			break;
		default:
			throw new RangeError('Invalid key : ' + key);
	}

	if (nativeArr != null) {
		for (let i = 0, len = nativeArr.length; i < len; i++) {
			values.push(nativeArr[i]);
		}
	}

	supportedValuesMap.set(key, values);
	return values;
}
