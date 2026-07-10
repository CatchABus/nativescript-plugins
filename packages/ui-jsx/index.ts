import { Frame, Page, Label, StackLayout, Button, ActionBar, ActionItem, NavigationButton, ActivityIndicator, ContentView, DatePicker, HtmlView, Image, AbsoluteLayout, DockLayout, FlexboxLayout, GridLayout, LiquidGlassContainer, LiquidGlass, RootLayout, WrapLayout, ListPicker, ListView, Placeholder, Progress, ProxyViewContainer, Repeater, ScrollView, SearchBar, SegmentedBar, SegmentedBarItem, Slider, SplitView, Switch, TabView, TabViewItem, FormattedString, Span, TextField, TextView, TimePicker, WebView, ViewBase, getAncestor, View } from '@nativescript/core';

const JSXRegistry: Record<string, typeof ViewBase> = {
	actionBar: ActionBar,
	actionItem: ActionItem,
	navigationButton: NavigationButton,
	activityIndicator: ActivityIndicator,
	button: Button,
	contentView: ContentView,
	datePicker: DatePicker,
	frame: Frame,
	htmlView: HtmlView,
	image: Image,
	label: Label,
	absoluteLayout: AbsoluteLayout,
	dockLayout: DockLayout,
	flexboxLayout: FlexboxLayout,
	gridLayout: GridLayout,
	liquidGlassContainer: LiquidGlassContainer,
	liquidGlass: LiquidGlass,
	rootLayout: RootLayout,
	stackLayout: StackLayout,
	wrapLayout: WrapLayout,
	listPicker: ListPicker,
	listView: ListView,
	page: Page,
	placeholder: Placeholder,
	progress: Progress,
	proxyViewContainer: ProxyViewContainer,
	repeater: Repeater,
	scrollView: ScrollView,
	searchBar: SearchBar,
	segmentedBar: SegmentedBar,
	segmentedBarItem: SegmentedBarItem,
	slider: Slider,
	splitView: SplitView,
	switch: Switch,
	tabView: TabView,
	tabViewItem: TabViewItem,
	formattedString: FormattedString,
	span: Span,
	textField: TextField,
	textView: TextView,
	timePicker: TimePicker,
	webView: WebView,
};

export class JSXHelper {
	public static onBeforeSetJSXViewProps: (view: ViewBase, propertyBag: Record<string, any>, attributeNames?: string[]) => void;

	public static get registry(): Record<string, typeof ViewBase> {
		return JSXRegistry;
	}

	public static __liveSyncNavigationEntry(componentId: string, component: () => View): void {
		const topFrame = Frame.topmost();
		if (!topFrame) {
			return;
		}

		let matchingFrame: Frame;

		if (topFrame.currentEntry?.create?.['_jsxComponentId'] === componentId) {
			matchingFrame = topFrame;
		} else {
			let parentFrame = getAncestor(topFrame, 'Frame');

			while (parentFrame) {
				if (parentFrame.currentEntry?.create?.['_jsxComponentId'] === componentId) {
					matchingFrame = parentFrame;
					break;
				}

				parentFrame = getAncestor(parentFrame, 'Frame');
			}
		}

		if (matchingFrame) {
			matchingFrame.currentEntry.create = component;
		}
	}

	public static registerElement(type: string, cl: typeof ViewBase): void {
		this.registry[type] = cl;
	}
}
