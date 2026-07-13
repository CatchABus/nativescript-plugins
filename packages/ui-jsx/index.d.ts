/// <reference path="./typings/shims.d.ts" />
import { EventData, TapGestureEventData, PinchGestureEventData, PanGestureEventData, SwipeGestureEventData, RotationGestureEventData, GestureEventData, TouchGestureEventData, ViewBase, View, TextBase } from '@nativescript/core';
import { GetKey } from './typings/utils';
export * from './typings/globals';

type StaticKeysOf<T extends new (...args: any[]) => any> = {
	[K in keyof T]: K extends `_${string}` ? never : K extends `${string}Event` ? (T[K] extends (...args: any[]) => any ? never : K) : never;
}[keyof T];

type ViewEventNames<T extends new (...args: any[]) => any> = Partial<{
	[K in StaticKeysOf<T> as `on${Capitalize<string & (K extends `${infer P}Event` ? P : K)>}`]: (args: EventData) => void;
}>;

type NativeScriptProps<T, K extends keyof T> = {
	[P in K]: T[P] | GetKey<NativeScriptJSXTypeConfig<T[P]>, 'commonAttributeType'>;
};

export type NativeScriptElement<T, E extends new (...args: any[]) => any> = Partial<
	NativeScriptProps<
		T,
		{
			[K in keyof T]: K extends `_${string}` ? never : T[K] extends Function ? never : K;
		}[keyof T]
	>
> &
	Omit<NativeScriptGestureEvents, keyof ViewEventNames<E>> &
	ViewEventNames<E> & {
		children?: T extends TextBase ? ViewBase | [ViewBase, ...ViewBase[]] | string : ViewBase | [ViewBase, ...ViewBase[]];
	};

export declare class JSXHelper {
	public static onCreatingView: (view: ViewBase, propertyBag: Record<string, any>, attributeNames?: string[]) => void;
	public static get registry(): Record<string, typeof ViewBase>;
	public static __liveSyncNavigationEntry(componentId: string, component: () => View): void;
	public static registerElement(type: string, cl: typeof ViewBase): void;
}
