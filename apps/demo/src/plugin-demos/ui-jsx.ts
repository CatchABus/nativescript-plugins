import { EventData, Frame, fromObject, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = fromObject({
		viewDemo: async (args) => {
			const component = await import(`./ui-jsx/${args.object.text}`);
			Frame.topmost().navigate({
				create: component.default,
			});
		},
	});
}
