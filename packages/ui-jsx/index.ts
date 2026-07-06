import { Frame, Page, Label, StackLayout, Button, ActionBar, ActionItem, NavigationButton, ActivityIndicator, ContentView, DatePicker, HtmlView, Image, AbsoluteLayout, DockLayout, FlexboxLayout, GridLayout, LiquidGlassContainer, LiquidGlass, RootLayout, WrapLayout, ListPicker, ListView, Placeholder, Progress, ProxyViewContainer, Repeater, ScrollView, SearchBar, SegmentedBar, SegmentedBarItem, Slider, SplitView, Switch, TabView, TabViewItem, FormattedString, Span, TextField, TextView, TimePicker, WebView, ViewBase } from '@nativescript/core';

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

export class JSXHandler {
	public static onBeforeSetJSXViewProps: (view: ViewBase, propertyBag: Record<string, any>, attributeNames?: string[]) => void;

	public static get registry(): Record<string, typeof ViewBase> {
		return JSXRegistry;
	}

	public static registerElement(type: string, cl: typeof ViewBase) {
		this.registry[type] = cl;
	}
}
