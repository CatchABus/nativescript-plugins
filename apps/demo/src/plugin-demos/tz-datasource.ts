import { EventData, fromObject, Page } from '@nativescript/core';
import { createTzDataSource } from '@nativescript-community/tz-datasource';
import '@formatjs/intl-getcanonicallocales/polyfill.js';
import '@formatjs/intl-datetimeformat/polyfill.js';
import '@formatjs/intl-locale/polyfill.js';
import '@formatjs/intl-numberformat/polyfill.js';
import '@formatjs/intl-pluralrules/polyfill.js';
import '@formatjs/intl-relativetimeformat/polyfill.js';

// Locale data for en
import '@formatjs/intl-datetimeformat/locale-data/en.js';
import '@formatjs/intl-numberformat/locale-data/en.js';
import '@formatjs/intl-pluralrules/locale-data/en.js';
import '@formatjs/intl-relativetimeformat/locale-data/en.js';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;

	const tzData = createTzDataSource(10);
	const date = new Date();

	Intl.DateTimeFormat['tzData'] = tzData;

	page.bindingContext = fromObject({
		currentTimeLocal: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'UTC',
		}).format(date),
		currentTime1: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'Africa/Lagos',
		}).format(date),
		currentTime2: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'Europe/Athens',
		}).format(date),
		currentTime3: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'America/New_York',
		}).format(date),
		currentTime4: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'Asia/Tokyo',
		}).format(date),
		currentTime5: new Intl.DateTimeFormat('en', {
			dateStyle: 'full',
			timeStyle: 'long',
			timeZone: 'Australia/Sydney',
		}).format(date),
	});
}
