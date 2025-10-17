import { NativeMutableArrayCommon } from './common';

export declare class NativeMutableArray<T extends NativeObject<any>> extends NativeMutableArrayCommon<T> {
	constructor(native: any);
	public get native(): any;
	public registerObserver(): void;
}
