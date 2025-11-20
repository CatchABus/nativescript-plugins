import { EventData, Page, View } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function test(args: EventData) {
	const view = args.object as View;

	view.leftToLeftOf = null;
	view.bottomToBottomOf = null;
	view.rightToRightOf = null;
	view.bottomToBottomOf = null;
	view.topToTopOf = null;
}
