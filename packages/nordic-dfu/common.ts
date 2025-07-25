import { EventData, Observable } from '@nativescript/core';
import { DfuServiceController } from './serviceController';
import { DfuStateChangedEventData } from '.';

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

export abstract class DFUInitiatorCommon extends Observable {
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

	public abstract setDeviceName(name: string): DFUInitiatorCommon;
	public abstract setKeepBond(val: boolean): DFUInitiatorCommon;
	public abstract setForceDfu(val: boolean): DFUInitiatorCommon;
	public abstract setForceScanningForNewAddressInLegacyDfu(val: boolean): DFUInitiatorCommon;
	public abstract setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val: boolean): DFUInitiatorCommon;
	public abstract setPacketReceiptNotificationParameter(val: number): DFUInitiatorCommon;
	public abstract disableResume(): DFUInitiatorCommon;
	public abstract start(filePath: string): DfuServiceController;

	public _notifyDfuStateChanged(state: DfuState, reason?: string): void {
		this.notify<DfuStateChangedEventData>({
			eventName: DFUInitiatorCommon.dfuStateChangedEvent,
			object: this,
			state: state,
			reason,
		});
	}
}
