import * as nsModules from '@nativescript/core';
import { NativeScriptElement } from '..';

declare global {
	interface NativeScriptJSXTypeConfig<T> {
		// commonAttributeType
	}

	interface NativeScriptJSX {
		actionBar: NativeScriptElement<nsModules.ActionBar, typeof nsModules.ActionBar>;
		actionItem: NativeScriptElement<nsModules.ActionItem, typeof nsModules.ActionItem>;
		navigationButton: NativeScriptElement<nsModules.NavigationButton, typeof nsModules.NavigationButton>;
		activityIndicator: NativeScriptElement<nsModules.ActivityIndicator, typeof nsModules.ActivityIndicator>;
		button: NativeScriptElement<nsModules.Button, typeof nsModules.Button>;
		contentView: NativeScriptElement<nsModules.ContentView, typeof nsModules.ContentView>;
		datePicker: NativeScriptElement<nsModules.DatePicker, typeof nsModules.DatePicker>;
		frame: NativeScriptElement<nsModules.Frame, typeof nsModules.Frame>;
		htmlView: NativeScriptElement<nsModules.HtmlView, typeof nsModules.HtmlView>;
		image: NativeScriptElement<nsModules.Image, typeof nsModules.Image>;
		label: NativeScriptElement<nsModules.Label, typeof nsModules.Label>;
		absoluteLayout: NativeScriptElement<nsModules.AbsoluteLayout, typeof nsModules.AbsoluteLayout>;
		dockLayout: NativeScriptElement<nsModules.DockLayout, typeof nsModules.DockLayout>;
		flexboxLayout: NativeScriptElement<nsModules.FlexboxLayout, typeof nsModules.FlexboxLayout>;
		gridLayout: NativeScriptElement<nsModules.GridLayout, typeof nsModules.GridLayout>;
		liquidGlassContainer: NativeScriptElement<nsModules.LiquidGlassContainer, typeof nsModules.LiquidGlassContainer>;
		liquidGlass: NativeScriptElement<nsModules.LiquidGlass, typeof nsModules.LiquidGlass>;
		rootLayout: NativeScriptElement<nsModules.RootLayout, typeof nsModules.RootLayout>;
		stackLayout: NativeScriptElement<nsModules.StackLayout, typeof nsModules.StackLayout>;
		wrapLayout: NativeScriptElement<nsModules.WrapLayout, typeof nsModules.WrapLayout>;
		listPicker: NativeScriptElement<nsModules.ListPicker, typeof nsModules.ListPicker>;
		listView: NativeScriptElement<nsModules.ListView, typeof nsModules.ListView>;
		page: NativeScriptElement<nsModules.Page, typeof nsModules.Page>;
		placeholder: NativeScriptElement<nsModules.Placeholder, typeof nsModules.Placeholder>;
		progress: NativeScriptElement<nsModules.Progress, typeof nsModules.Progress>;
		proxyViewContainer: NativeScriptElement<nsModules.ProxyViewContainer, typeof nsModules.ProxyViewContainer>;
		repeater: NativeScriptElement<nsModules.Repeater, typeof nsModules.Repeater>;
		scrollView: NativeScriptElement<nsModules.ScrollView, typeof nsModules.ScrollView>;
		searchBar: NativeScriptElement<nsModules.SearchBar, typeof nsModules.SearchBar>;
		segmentedBar: NativeScriptElement<nsModules.SegmentedBar, typeof nsModules.SegmentedBar>;
		segmentedBarItem: NativeScriptElement<nsModules.SegmentedBarItem, typeof nsModules.SegmentedBarItem>;
		slider: NativeScriptElement<nsModules.Slider, typeof nsModules.Slider>;
		splitView: NativeScriptElement<nsModules.SplitView, typeof nsModules.SplitView>;
		switch: NativeScriptElement<nsModules.Switch, typeof nsModules.Switch>;
		tabView: NativeScriptElement<nsModules.TabView, typeof nsModules.TabView>;
		tabViewItem: NativeScriptElement<nsModules.TabViewItem, typeof nsModules.TabViewItem>;
		formattedString: NativeScriptElement<nsModules.FormattedString, typeof nsModules.FormattedString>;
		span: NativeScriptElement<nsModules.Span, typeof nsModules.Span>;
		textField: NativeScriptElement<nsModules.TextField, typeof nsModules.TextField>;
		textView: NativeScriptElement<nsModules.TextView, typeof nsModules.TextView>;
		timePicker: NativeScriptElement<nsModules.TimePicker, typeof nsModules.TimePicker>;
		webView: NativeScriptElement<nsModules.WebView, typeof nsModules.WebView>;
	}
}

export {};
