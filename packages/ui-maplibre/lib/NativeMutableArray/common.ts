import { ObservableArray } from '@nativescript/core';

export abstract class NativeMutableArrayCommon<T> extends ObservableArray<T> {
	private readonly mNative: any;

	constructor(native: any) {
		super();
		this.mNative = native;
	}

	public get native(): any {
		return this.mNative;
	}

	public abstract registerObserver(): void;
}
