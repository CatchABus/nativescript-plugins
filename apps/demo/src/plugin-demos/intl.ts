import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedIntl } from '@demo/shared';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();

	console.log(Intl.getCanonicalLocales(['EN-US', 'Fr']));
	console.log(Intl.supportedValuesOf('unit'));
}

export class DemoModel extends DemoSharedIntl {}
