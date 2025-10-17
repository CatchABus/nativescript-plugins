import { Observable } from '@nativescript/core';

abstract class NativeObjectInternal extends Observable {
	private readonly mNative;

	constructor(native) {
		super();
		this.mNative = native;
	}
}

export abstract class NativeObject<T> extends Observable {
	private readonly mNative: T;

	constructor(...args) {
		super();
		this.mNative = this.initNative(...args);
	}

	public get native(): T {
		return this.mNative;
	}

	public initNative(...args): T {
		return null;
	}

	public throwIllegalConstructorError(): void {
		throw new TypeError(`Failed to construct '${this.constructor.name}': Illegal constructor`);
	}

	public static initWithNative(native): unknown {
		return Reflect.construct(NativeObjectInternal, [native], this);
	}
}
