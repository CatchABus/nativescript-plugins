import { Span, TextBase, Trace, ViewBase } from '@nativescript/core';
import { JSXHelper } from '.';

const EVENT_LISTENER_PREFIX = 'on';
const EVENT_PREFIX_LENGTH = EVENT_LISTENER_PREFIX.length;
const CHILDREN_KEY = 'children';
const registry = JSXHelper.registry;

export const jsxs = jsx;

export function jsx(elementType, props) {
	// JSX components
	if (typeof elementType === 'function') {
		return elementType(props ?? {});
	}

	const viewClass = registry[elementType];

	if (!viewClass) {
		Trace.write(`Unknown NativeScript view element type: ${elementType}. Make sure that the element is registered!`, Trace.categories.Error, Trace.messageType.error);
		return null;
	}

	const view = new viewClass();
	view.__jsxElementType = elementType[0].toUpperCase() + elementType.slice(1);

	if (props) {
		_handleProperties(view, viewClass, props);

		if (props[CHILDREN_KEY] != null) {
			_addChildren(view, props[CHILDREN_KEY]);
		}
	}

	return view;
}

function isGestureEvent(eventName) {
	let isGesture;

	switch (eventName) {
		case 'tap':
		case 'doubleTap':
		case 'pinch':
		case 'pan':
		case 'swipe':
		case 'rotation':
		case 'longpress':
		case 'touch':
			isGesture = true;
			break;
		default:
			isGesture = false;
			break;
	}
	return isGesture;
}

function _handleProperties(view, viewClass, props) {
	let propertyNames;

	for (const key in props) {
		if (key === CHILDREN_KEY) {
			continue;
		}

		if (key.startsWith(EVENT_LISTENER_PREFIX)) {
			const rawEventName = key.substring(EVENT_PREFIX_LENGTH + 1);
			const firstEventLetter = key[EVENT_PREFIX_LENGTH].toLowerCase();
			const eventName = firstEventLetter + rawEventName;

			if (isGestureEvent(eventName) || (viewClass[`${eventName}Event`] && eventName === viewClass[`${eventName}Event`])) {
				view.addEventListener(eventName, props[key]);
				continue;
			}
		}

		if (!propertyNames) {
			propertyNames = [];
		}

		propertyNames.push(key);
	}

	if (JSXHelper.onCreatingView) {
		JSXHelper.onCreatingView(view, props, propertyNames);
	}

	if (propertyNames?.length) {
		for (const key of propertyNames) {
			view[key] = props[key];
		}
	}
}

function _addChildren(view, children) {
	if (Array.isArray(children)) {
		for (const child of children) {
			_appendChild(view, child);
		}
	} else {
		_appendChild(view, children);
	}
}

function _appendChild(view, child) {
	if (typeof child === 'string') {
		if (view instanceof TextBase) {
			const span = new Span();
			span.text = child;

			if (typeof view._addChildFromBuilder === 'function') {
				view._addChildFromBuilder('Span', span);
			}
		} else {
			Trace.write(`Attempted to nest raw text ${child} inside a non-text view ${view}`, Trace.categories.Error, Trace.messageType.error);
		}
	} else if (child instanceof ViewBase) {
		if (typeof view._addChildFromBuilder === 'function') {
			// This method expects the view constructor name as the first argument so convert the first letter to upper-case
			view._addChildFromBuilder(child.__jsxElementType, child);
		} else {
			view[child.__jsxElementType] = child;
		}
	} else {
		if (child != null) {
			Trace.write(`Unknown NativeScript child view type ${child} for view ${view}!`, Trace.categories.Error, Trace.messageType.error);
		}
	}
}
