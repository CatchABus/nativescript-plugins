import { SDK_VERSION } from '@nativescript/core/utils';
import { DfuProgressEventData } from '.';
import { DfuState, DFUInitiatorCommon } from './common';
import { Utils } from '@nativescript/core';
import { DfuServiceController } from './serviceController';

// Keep strong references of the initiators while running
const executingInitiators = new Map<string, DFUInitiator>();

@NativeClass
class DfuProgressListener extends no.nordicsemi.android.dfu.DfuProgressListenerAdapter {
	private readonly mOwner: WeakRef<DFUInitiator>;

	constructor(owner: DFUInitiator) {
		super();

		this.mOwner = new WeakRef(owner);
		return global.__native(this);
	}

	public override onDeviceConnecting(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.CONNECTING);
		}
	}

	public override onDfuProcessStarting(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.DFU_PROCESS_STARTING);
		}
	}

	public override onEnablingDfuMode(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.ENABLING_DFU_MODE);
		}
	}

	public override onFirmwareValidating(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.FIRMWARE_VALIDATING);
		}
	}

	public override onDeviceDisconnecting(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.DEVICE_DISCONNECTING);
		}
	}

	public override onDfuCompleted(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			if (executingInitiators.has(owner.peripheralUUID)) {
				executingInitiators.delete(owner.peripheralUUID);
			}
			owner._notifyDfuStateChanged(DfuState.DFU_COMPLETED);
		}

		setTimeout(() => {
			// if this activity is still open and upload process was completed, cancel the notification
			const manager = Utils.android.getApplicationContext().getSystemService(android.content.Context.NOTIFICATION_SERVICE) as android.app.NotificationManager;
			manager.cancel(com.nativescript.dfu.DfuService.NOTIFICATION_ID);
		}, 200);
	}

	public override onDfuAborted(deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			if (executingInitiators.has(owner.peripheralUUID)) {
				executingInitiators.delete(owner.peripheralUUID);
			}
			owner._notifyDfuStateChanged(DfuState.DFU_ABORTED);
		}
	}

	public override onProgressChanged(deviceAddress: string, percent: number, speed: number, avgSpeed: number, currentPart: number, totalParts: number) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner.notify<DfuProgressEventData>({
				eventName: DFUInitiator.dfuProgressEvent,
				object: owner,
				percent,
				speed,
				avgSpeed,
				currentPart,
				totalParts,
			});
		}
	}

	public override onError(deviceAddress: string, error: number, errorType: number, message: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			if (executingInitiators.has(owner.peripheralUUID)) {
				executingInitiators.delete(owner.peripheralUUID);
			}
			owner._notifyDfuStateChanged(DfuState.DFU_FAILED, message);
		}
	}
}

export class DFUInitiator extends DFUInitiatorCommon {
	private readonly mNative: no.nordicsemi.android.dfu.DfuServiceInitiator;
	private readonly mProgressListener: DfuProgressListener;

	constructor(peripheralUUID: string) {
		super(peripheralUUID);

		this.mNative = new no.nordicsemi.android.dfu.DfuServiceInitiator(peripheralUUID).setKeepBond(false);
		this.mProgressListener = new DfuProgressListener(this);

		no.nordicsemi.android.dfu.DfuServiceListenerHelper.registerProgressListener(Utils.android.getApplicationContext(), this.mProgressListener);
	}

	public override setAndroidDeviceName(name: string): DFUInitiator {
		this.mNative.setDeviceName(name);
		return this;
	}

	public override setAndroidDisableNotification(val: boolean): DFUInitiator {
		this.mNative.setDisableNotification(val);
		return this;
	}

	public override setAndroidForeground(val: boolean): DFUInitiator {
		this.mNative.setForeground(val);
		return this;
	}

	public override setAndroidKeepBond(val: boolean): DFUInitiator {
		this.mNative.setKeepBond(val);
		return this;
	}

	public override setAndroidScanTimeout(val: number): DFUInitiator {
		this.mNative.setScanTimeout(val);
		return this;
	}

	public override setForceDfu(val: boolean): DFUInitiator {
		this.mNative.setForceDfu(val);
		return this;
	}

	public override setForceScanningForNewAddressInLegacyDfu(val: boolean): DFUInitiator {
		this.mNative.setForceScanningForNewAddressInLegacyDfu(val);
		return this;
	}

	public override setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val: boolean): DFUInitiator {
		this.mNative.setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val);
		return this;
	}

	public override setPacketReceiptNotificationParameter(val: number): DFUInitiator {
		this.mNative.setPacketsReceiptNotificationsEnabled(val > 0);
		this.mNative.setPacketsReceiptNotificationsValue(val);
		return this;
	}

	public override disableResume(): DFUInitiator {
		this.mNative.disableResume();
		return this;
	}

	public override start(filePath: string): DfuServiceController {
		const appContext = Utils.android.getApplicationContext();

		this.mNative.setZip(android.net.Uri.parse(filePath));

		if (SDK_VERSION >= 26) {
			no.nordicsemi.android.dfu.DfuServiceInitiator.createDfuNotificationChannel(appContext);
		}

		const nativeController = this.mNative.start(appContext, com.nativescript.dfu.DfuService.class);

		executingInitiators.set(this.peripheralUUID, this);
		return new DfuServiceController(nativeController);
	}
}

export { DfuState };
