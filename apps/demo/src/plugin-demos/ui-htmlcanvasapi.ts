import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedUiHtmlcanvasapi } from '@demo/shared';
import {} from '@nativescript-community/ui-htmlcanvasapi';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedUiHtmlcanvasapi {}
