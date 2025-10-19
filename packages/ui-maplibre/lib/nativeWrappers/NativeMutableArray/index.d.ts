import { ObservableArray } from '@nativescript/core';

export declare class NativeMutableArray<T extends NativeObject<any>> extends ObservableArray<T> {
	constructor(native: any);
	public get native(): any;
	public registerObserver(): void;
}
