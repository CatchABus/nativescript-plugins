import { Observable } from '@nativescript/core';
import { DFUInitiator as IDFUInitiator, DfuStateChangedEventData } from '.';
import { DFUController } from '../DFUController';

export enum DfuState {
	CONNECTING,
	DFU_PROCESS_STARTING,
	ENABLING_DFU_MODE,
	FIRMWARE_VALIDATING,
	DEVICE_DISCONNECTING,
	DFU_COMPLETED,
	DFU_ABORTED,
	DFU_FAILED,
}

type DfuInitiatorContext = {
	object: DFUInitiatorCommon;
	cleanUpCallback?: () => void;
};

// Keep strong references of the initiators while running
const executingInitiators = new Map<string, DfuInitiatorContext>();

export function _addExecutingInitiator(peripheralUUID: string, context: DfuInitiatorContext): void {
	executingInitiators.set(peripheralUUID, context);
}

export function _removeExecutingInitiator(peripheralUUID: string): void {
	if (executingInitiators.has(peripheralUUID)) {
		const context = executingInitiators.get(peripheralUUID);

		if (context?.cleanUpCallback) {
			context.cleanUpCallback();
		}

		executingInitiators.delete(peripheralUUID);
	}
}

// For internal usage
export class DFUControllerInternal {
	declare mNative: any;

	constructor(native: any) {
		this.mNative = native;
	}
}

export abstract class DFUInitiatorCommon extends Observable implements IDFUInitiator {
	public static readonly dfuStateChangedEvent = 'DFUStateChanged';
	public static readonly dfuProgressEvent = 'DFUProgress';

	protected readonly mPeripheralUUID: string;

	constructor(peripheralUUID: string) {
		super();
		this.mPeripheralUUID = peripheralUUID;
	}

	public get peripheralUUID(): string {
		return this.mPeripheralUUID;
	}

	public abstract setAndroidDeviceName(name: string): DFUInitiatorCommon;
	public abstract setAndroidDisableNotification(val: boolean): DFUInitiatorCommon;
	public abstract setAndroidForeground(val: boolean): DFUInitiatorCommon;
	public abstract setAndroidKeepBond(val: boolean): DFUInitiatorCommon;
	public abstract setAndroidScanTimeout(val: number): DFUInitiatorCommon;
	public abstract setForceDfu(val: boolean): DFUInitiatorCommon;
	public abstract setForceScanningForNewAddressInLegacyDfu(val: boolean): DFUInitiatorCommon;
	public abstract setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val: boolean): DFUInitiatorCommon;
	public abstract setPacketReceiptNotificationParameter(val: number): DFUInitiatorCommon;
	public abstract disableResume(): DFUInitiatorCommon;
	public abstract start(zipFile: string | ArrayBuffer): DFUController;

	public _notifyDfuStateChanged(state: DfuState, reason?: string): void {
		this.notify<DfuStateChangedEventData>({
			eventName: DFUInitiatorCommon.dfuStateChangedEvent,
			object: this,
			state: state,
			reason,
		});
	}
}
