import { EventData, Frame, fromObject, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = fromObject({
		viewDemo: (args) => {
			Frame.topmost().navigate({
				moduleName: `plugin-demos/ui-constraintlayout/${args.object.text}`,
			});
		},
	});
}
