import { EventData, Observable } from '@nativescript/core';
import { DFUController } from '../DFUController';

export declare class DFUInitiator extends Observable {
	/**
	 * The peripheral device address/UUID.
	 *
	 * @param peripheralUUID
	 */
	constructor(peripheralUUID: string);

	public get peripheralUUID(): string;

	/**
	 * Android only.
	 *
	 * @param name
	 */
	public setAndroidDeviceName(name: string): DFUInitiator;
	/**
	 * Android only.
	 *
	 * @param val
	 */
	public setAndroidDisableNotification(val: boolean): DFUInitiator;
	/**
	 * Android only.
	 *
	 * @param val
	 */
	public setAndroidForeground(val: boolean): DFUInitiator;
	/**
	 * Android only.
	 *
	 * @param val
	 */
	public setAndroidKeepBond(val: boolean): DFUInitiator;
	/**
	 * Android only.
	 *
	 * @param val
	 */
	public setAndroidScanTimeout(val: number): DFUInitiator;
	public setForceDfu(val: boolean): DFUInitiator;
	public setForceScanningForNewAddressInLegacyDfu(val: boolean): DFUInitiator;
	public setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val: boolean): DFUInitiator;
	public setPacketReceiptNotificationParameter(val: number): DFUInitiator;
	public disableResume(): DFUInitiator;
	public start(zipFile: string | ArrayBuffer): DFUController;

	addEventListener(eventName: 'DFUStateChanged', callback: (data: DfuStateChangedEventData) => void, thisArg?: any, once?: boolean): void;
	on(eventName: 'DFUStateChanged', callback: (data: DfuStateChangedEventData) => void, thisArg?: any): void;
	addEventListener(eventName: 'DFUProgress', callback: (data: DfuProgressEventData) => void, thisArg?: any, once?: boolean): void;
	on(eventName: 'DFUProgress', callback: (data: DfuProgressEventData) => void, thisArg?: any): void;
}

export declare enum DfuState {
	CONNECTING,
	DFU_PROCESS_STARTING,
	ENABLING_DFU_MODE,
	FIRMWARE_VALIDATING,
	DEVICE_DISCONNECTING,
	DFU_COMPLETED,
	DFU_ABORTED,
	DFU_FAILED,
}

export interface DfuEventData extends EventData {
	object: Observable;
}

export interface DfuStateChangedEventData extends DfuEventData {
	state?: DfuState;
	reason?: string;
}

export interface DfuProgressEventData extends DfuEventData {
	percent?: number;
	speed?: number;
	avgSpeed?: number;
	currentPart?: number;
	totalParts?: number;
}
