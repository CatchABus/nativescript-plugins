import { File, getFileAccess, knownFolders, Utils } from '@nativescript/core';
import { DfuProgressEventData } from '.';
import { DfuState, DFUInitiatorCommon, _addExecutingInitiator, _removeExecutingInitiator, DFUControllerInternal } from './common';
import { DFUController } from '../DFUController';

const DFU_TEMP_FILE_NAME = 'dfu-temp.zip';

@NativeClass
class DfuProgressListener extends no.nordicsemi.android.dfu.DfuProgressListenerAdapter {
	private readonly mOwner: WeakRef<DFUInitiator>;

	constructor(owner: DFUInitiator) {
		super();

		this.mOwner = new WeakRef(owner);
		return global.__native(this);
	}

	public override onDeviceConnecting(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.CONNECTING);
		}
	}

	public override onDfuProcessStarting(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.DFU_PROCESS_STARTING);
		}
	}

	public override onEnablingDfuMode(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.ENABLING_DFU_MODE);
		}
	}

	public override onFirmwareValidating(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.FIRMWARE_VALIDATING);
		}
	}

	public override onDeviceDisconnecting(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.DEVICE_DISCONNECTING);
		}
	}

	public override onDfuCompleted(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			_removeExecutingInitiator(owner.peripheralUUID);
			owner._notifyDfuStateChanged(DfuState.DFU_COMPLETED);
		}

		setTimeout(() => {
			// if this activity is still open and upload process was completed, cancel the notification
			const manager = Utils.android.getApplicationContext().getSystemService(android.content.Context.NOTIFICATION_SERVICE) as android.app.NotificationManager;
			manager.cancel(com.nativescript.dfu.DfuService.NOTIFICATION_ID);
		}, 200);
	}

	public override onDfuAborted(_deviceAddress: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			_removeExecutingInitiator(owner.peripheralUUID);
			owner._notifyDfuStateChanged(DfuState.DFU_ABORTED);
		}
	}

	public override onProgressChanged(_deviceAddress: string, percent: number, speed: number, avgSpeed: number, currentPart: number, totalParts: number) {
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

	public override onError(_deviceAddress: string, _error: number, _errorType: number, message: string) {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			_removeExecutingInitiator(owner.peripheralUUID);
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

	public override start(zipFile: string | ArrayBuffer): DFUController {
		const appContext = Utils.android.getApplicationContext();
		const cleanUpCallback = this._createDFUFileURI(zipFile, appContext, (uri) => {
			this.mNative.setZip(uri);
		});

		if (Utils.SDK_VERSION >= 26) {
			no.nordicsemi.android.dfu.DfuServiceInitiator.createDfuNotificationChannel(appContext);
		}

		const nativeController = this.mNative.start(appContext, com.nativescript.dfu.DfuService.class);

		_addExecutingInitiator(this.peripheralUUID, {
			object: this,
			cleanUpCallback,
		});
		return Reflect.construct(DFUControllerInternal, [nativeController], DFUController) as any;
	}

	private _createDFUFileURI(zipFile: string | ArrayBuffer, context: android.content.Context, callback: (uri: android.net.Uri) => void): () => void {
		if (!zipFile || !context || !callback) {
			throw new Error('_createDFUFileURI: Missing DFU parameters for generating file URI');
		}

		let cleanUpCallback: () => void;

		if (typeof zipFile === 'string') {
			callback(android.net.Uri.parse(zipFile));
			cleanUpCallback = () => {};
		} else if (zipFile instanceof ArrayBuffer) {
			const cacheFolder = knownFolders.temp();
			const filePath = cacheFolder.path + '/' + DFU_TEMP_FILE_NAME;
			const errorCallback = (err) => console.error(err);

			if (File.exists) {
				const file = File.fromPath(filePath);
				file.removeSync(errorCallback);
			}

			const tmpFile = new java.io.File(filePath);
			const fos = new java.io.FileOutputStream(tmpFile);
			const channel = fos.getChannel();

			try {
				channel.write(zipFile as any);
			} catch (err) {
				console.error(err);
			} finally {
				channel.close();
				fos.close();
			}

			callback(androidx.core.content.FileProvider.getUriForFile(context, context.getPackageName() + '.dfufileprovider', tmpFile));
			cleanUpCallback = () => getFileAccess().deleteFile(filePath, errorCallback);
		} else {
			throw new Error(`Incorrect zip file given: ${zipFile}`);
		}

		return cleanUpCallback;
	}
}

export { DfuState };
