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
	//console.log(NSLocale.alloc().initWithLocaleIdentifier('en').objectForKey(NSLocaleCollatorIdentifier));
	return [NSCalendarIdentifierGregorian];
}
