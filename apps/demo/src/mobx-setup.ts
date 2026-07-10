import { JSXHelper } from '@nativescript-community/ui-jsx';
import { EventData, ObservableArray, ViewBase } from '@nativescript/core';
import { isBoxedObservable, isComputed, isObservableArray, observe, reaction } from 'mobx';

JSXHelper.onBeforeSetJSXViewProps = (view: ViewBase, propertyBag: Record<string, any>, attributeNames?: string[]) => {
	if (!attributeNames?.length) {
		return;
	}

	const observableProps = new Map<string, any>();

	for (const propName of attributeNames) {
		const value = propertyBag[propName];

		if (isBoxedObservable(value) || isComputed(value)) {
			observableProps.set(propName, value);
			propertyBag[propName] = value.get();
		} else if (isObservableArray(value)) {
			observableProps.set(propName, value);
			propertyBag[propName] = new ObservableArray(...value);
		}
	}

	if (observableProps.size > 0) {
		const disposers: (() => void)[] = [];

		view.on('loaded', (args: EventData) => {
			for (const [key, value] of observableProps) {
				let disposeCb: () => void;

				if (isBoxedObservable(value) || isComputed(value)) {
					disposeCb = reaction(
						() => value.get(),
						(value) => {
							args.object[key] = value;
						}
					);
				} else if (isObservableArray(value)) {
					disposeCb = observe(value, (change) => {
						const nsArray = args.object[key];
						if (nsArray instanceof ObservableArray) {
							if (change.type === 'splice') {
								nsArray.splice(change.index, change.removedCount, ...change.added);
							} else {
								nsArray.setItem(change.index, change.newValue);
							}
						}
					});
				}

				if (disposeCb) {
					disposers.push(disposeCb);
				}
			}
		});

		view.on('unloaded', () => {
			const length = disposers.length;
			if (length > 0) {
				for (let i = 0; i < length; i++) {
					disposers[i]?.();
				}
				disposers.splice(0);
			}
		});
	}
};
