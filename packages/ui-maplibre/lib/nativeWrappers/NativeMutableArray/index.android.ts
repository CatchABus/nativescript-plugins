import { ChangedData, ChangeType, ObservableArray } from '@nativescript/core';
import { NativeMutableArrayCommon } from './common';
import { NativeObject } from '../NativeObject';

function onNativeMutableArrayChange<T extends NativeObject<any>>(args: ChangedData<T>): void {
	const oa = args.object as NativeMutableArray<T>;
	const native = oa.native as java.util.List<T>;

	switch (args.action) {
		case ChangeType.Add:
			for (let i = args.index, length = args.index + args.addedCount; i < length; i++) {
				const value = oa.getItem(i);
				if (value?.native) {
					native.add(i, value.native);
				}
			}
			break;
		case ChangeType.Delete:
			for (const item of args.removed) {
				if (item?.native) {
					native.remove(item.native);
				}
			}
			break;
		case ChangeType.Update:
			const value = oa.getItem(args.index);
			if (value?.native) {
				native.set(args.index, value.native);
			}
			break;
		case ChangeType.Splice:
			for (const item of args.removed) {
				if (item?.native) {
					native.remove(item.native);
				}
			}

			for (let i = args.index, length = args.index + args.addedCount; i < length; i++) {
				const value = oa.getItem(i);
				if (value?.native) {
					native.add(i, value.native);
				}
			}
			break;
		default:
			break;
	}
}

export class NativeMutableArray<T extends NativeObject<any>> extends NativeMutableArrayCommon<T> {
	constructor(native: java.util.List<any>) {
		super(native);
	}

	public override registerObserver(): void {
		this.addEventListener(ObservableArray.changeEvent, onNativeMutableArrayChange);
	}
}
