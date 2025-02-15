import { Observable, EventData, Page, View } from '@nativescript/core';
import { DemoSharedUiConstraintlayout } from '@demo/shared';
import { ConstraintLayout } from '@nativescript-community/ui-constraintlayout';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function test(args: EventData) {
	const view = args.object;

	ConstraintLayout.setLeftToLeftOf(view, null);
	ConstraintLayout.setBottomToBottomOf(view, null);
	ConstraintLayout.setRightToRightOf(view, null);
	ConstraintLayout.setBottomToBottomOf(view, null);
	ConstraintLayout.setTopToTopOf(view, null);
}
