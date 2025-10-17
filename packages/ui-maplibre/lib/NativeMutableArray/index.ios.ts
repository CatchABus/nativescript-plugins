import { ChangedData, ChangeType, ObservableArray } from '@nativescript/core';
import { NativeMutableArrayCommon } from './common';
import { NativeObject } from '../NativeObject';

function onNativeMutableArrayChange<T extends NativeObject<any>>(args: ChangedData<T>): void {
	const oa = args.object as NativeMutableArray<T>;
	const native = oa.native as NSMutableArray<T>;

	switch (args.action) {
		case ChangeType.Add:
			for (let i = args.index, length = args.index + args.addedCount; i < length; i++) {
				const value = oa.getItem(i);
				native.insertObjectAtIndex(value, i);
			}
			break;
		case ChangeType.Delete:
			for (const item of args.removed) {
				native.removeObject(item);
			}
			break;
		case ChangeType.Update:
			native.replaceObjectAtIndexWithObject(args.index, oa.getItem(args.index));
			break;
		case ChangeType.Splice:
			for (const item of args.removed) {
				native.removeObject(item);
			}

			for (let i = args.index, length = args.index + args.addedCount; i < length; i++) {
				const value = oa.getItem(i);
				native.insertObjectAtIndex(value, i);
			}
			break;
		default:
			break;
	}
}

export class NativeMutableArray<T extends NativeObject<any>> extends NativeMutableArrayCommon<T> {
	constructor(native: NSMutableArray<any>) {
		super(native);
	}

	public override registerObserver(): void {
		this.addEventListener(ObservableArray.changeEvent, onNativeMutableArrayChange);
	}
}
