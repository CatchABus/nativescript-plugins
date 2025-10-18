import { ObservableArray } from '@nativescript/core';
import { NativeMutableArray as INativeMutableArray } from '.';

export abstract class NativeMutableArrayCommon<T> extends ObservableArray<T> implements INativeMutableArray<T> {
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
