/// <reference path="android-declarations.d.ts"/>

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export abstract class BaseButtonlessDfuImpl extends no.nordicsemi.android.dfu.BaseDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseButtonlessDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public getGattCallback(): no.nordicsemi.android.dfu.BaseDfuImpl.BaseBluetoothGattCallback;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
				export module BaseButtonlessDfuImpl {
					export class ButtonlessBluetoothCallback extends no.nordicsemi.android.dfu.BaseDfuImpl.BaseBluetoothGattCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseButtonlessDfuImpl.ButtonlessBluetoothCallback>;
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic): void;
						public constructor();
						public constructor(this$0: no.nordicsemi.android.dfu.BaseDfuImpl);
						public constructor(this$0: no.nordicsemi.android.dfu.BaseButtonlessDfuImpl);
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic, value: androidNative.Array<number>): void;
						public onCharacteristicWrite(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic, status: number): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export abstract class BaseCustomDfuImpl extends no.nordicsemi.android.dfu.BaseDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseCustomDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public getControlPointCharacteristicUUID(): java.util.UUID;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public getPacketCharacteristicUUID(): java.util.UUID;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
				export module BaseCustomDfuImpl {
					export class BaseCustomBluetoothCallback extends no.nordicsemi.android.dfu.BaseDfuImpl.BaseBluetoothGattCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseCustomDfuImpl.BaseCustomBluetoothCallback>;
						public onCharacteristicWrite(buffer: globalAndroid.bluetooth.BluetoothGatt, size: globalAndroid.bluetooth.BluetoothGattCharacteristic, e: number): void;
						public onPacketCharacteristicWrite(): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export abstract class BaseDfuImpl extends no.nordicsemi.android.dfu.DfuService {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseDfuImpl>;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public onBondStateChanged(state: number): void;
					public onBondStateChanged(param0: number): void;
					public abort(): void;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public initialize(e: globalAndroid.content.Intent, serviceChangedIndicationsEnabled: globalAndroid.bluetooth.BluetoothGatt, serviceChangedCharacteristic: number, genericAttributeService: java.io.InputStream, this_: java.io.InputStream): boolean;
					public pause(): void;
					public resume(): void;
					public getDfuServiceUUID(): java.util.UUID;
					public getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback;
					public parse(j: androidNative.Array<number>): string;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
				export module BaseDfuImpl {
					export class BaseBluetoothGattCallback extends no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.BaseDfuImpl.BaseBluetoothGattCallback>;
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic): void;
						public constructor();
						public onDescriptorRead(gatt: globalAndroid.bluetooth.BluetoothGatt, descriptor: globalAndroid.bluetooth.BluetoothGattDescriptor, status: number): void;
						public onMtuChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, mtu: number, status: number): void;
						public onCharacteristicRead(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic, status: number): void;
						public onDescriptorRead(parentUuid: globalAndroid.bluetooth.BluetoothGatt, this_: globalAndroid.bluetooth.BluetoothGattDescriptor, gatt: number, descriptor: androidNative.Array<number>): void;
						public parse(j: androidNative.Array<number>): string;
						public onPhyUpdate(gatt: globalAndroid.bluetooth.BluetoothGatt, txPhy: number, rxPhy: number, status: number): void;
						public onCharacteristicRead(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic, value: androidNative.Array<number>, status: number): void;
						public constructor(this$0: no.nordicsemi.android.dfu.BaseDfuImpl);
						public onDescriptorWrite(parentUuid: globalAndroid.bluetooth.BluetoothGatt, this_: globalAndroid.bluetooth.BluetoothGattDescriptor, gatt: number): void;
						public onDisconnected(error: number): void;
						public getInt(value: androidNative.Array<number>, offset: number): number;
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic, value: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class BuildConfig {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'no.nordicsemi.android.dfu';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_CODE: string = '24123066';
					public static VERSION_NAME: string = '2.9.0';
					public constructor();
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export abstract class ButtonlessDfuImpl extends no.nordicsemi.android.dfu.BaseButtonlessDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.ButtonlessDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public shouldScanForBootloader(): boolean;
					public performDfu(e: globalAndroid.content.Intent): void;
					public getButtonlessDfuCharacteristic(): globalAndroid.bluetooth.BluetoothGattCharacteristic;
					public getResponseType(): number;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class ButtonlessDfuWithBondSharingImpl extends no.nordicsemi.android.dfu.ButtonlessDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.ButtonlessDfuWithBondSharingImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public shouldScanForBootloader(): boolean;
					public isClientCompatible(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public getDfuServiceUUID(): java.util.UUID;
					public getButtonlessDfuCharacteristic(): globalAndroid.bluetooth.BluetoothGattCharacteristic;
					public getResponseType(): number;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public performDfu(intent: globalAndroid.content.Intent): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class ButtonlessDfuWithoutBondSharingImpl extends no.nordicsemi.android.dfu.ButtonlessDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.ButtonlessDfuWithoutBondSharingImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public shouldScanForBootloader(): boolean;
					public isClientCompatible(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public getDfuServiceUUID(): java.util.UUID;
					public getButtonlessDfuCharacteristic(): globalAndroid.bluetooth.BluetoothGattCharacteristic;
					public getResponseType(): number;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public performDfu(intent: globalAndroid.content.Intent): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export abstract class DfuBaseService implements no.nordicsemi.android.dfu.DfuProgressInfo.ProgressListener {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuBaseService>;
					public static NOTIFICATION_ID: number = 283;
					public static NOTIFICATION_CHANNEL_DFU: string = 'dfu';
					public static EXTRA_DEVICE_ADDRESS: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DEVICE_ADDRESS';
					public static EXTRA_DEVICE_NAME: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DEVICE_NAME';
					public static EXTRA_DISABLE_NOTIFICATION: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DISABLE_NOTIFICATION';
					public static EXTRA_FOREGROUND_SERVICE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FOREGROUND_SERVICE';
					public static EXTRA_MAX_DFU_ATTEMPTS: string = 'no.nordicsemi.android.dfu.extra.EXTRA_MAX_DFU_ATTEMPTS';
					public static EXTRA_RESTORE_BOND: string = 'no.nordicsemi.android.dfu.extra.EXTRA_RESTORE_BOND';
					public static EXTRA_KEEP_BOND: string = 'no.nordicsemi.android.dfu.extra.EXTRA_KEEP_BOND';
					public static EXTRA_FORCE_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FORCE_DFU';
					public static EXTRA_FORCE_SCANNING_FOR_BOOTLOADER_IN_LEGACY_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FORCE_SCANNING_FOR_BOOTLOADER_IN_LEGACY_DFU';
					public static EXTRA_DISABLE_RESUME: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DISABLE_RESUME';
					public static EXTRA_MBR_SIZE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_MBR_SIZE';
					public static EXTRA_MTU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_MTU';
					public static EXTRA_CURRENT_MTU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CURRENT_MTU';
					public static EXTRA_UNSAFE_EXPERIMENTAL_BUTTONLESS_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_UNSAFE_EXPERIMENTAL_BUTTONLESS_DFU';
					public static EXTRA_DATA_OBJECT_DELAY: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DATA_OBJECT_DELAY';
					public static EXTRA_PACKET_RECEIPT_NOTIFICATIONS_ENABLED: string = 'no.nordicsemi.android.dfu.extra.EXTRA_PRN_ENABLED';
					public static EXTRA_PACKET_RECEIPT_NOTIFICATIONS_VALUE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_PRN_VALUE';
					public static EXTRA_FILE_PATH: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FILE_PATH';
					public static EXTRA_FILE_URI: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FILE_URI';
					public static EXTRA_FILE_RES_ID: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FILE_RES_ID';
					public static EXTRA_INIT_FILE_PATH: string = 'no.nordicsemi.android.dfu.extra.EXTRA_INIT_FILE_PATH';
					public static EXTRA_INIT_FILE_URI: string = 'no.nordicsemi.android.dfu.extra.EXTRA_INIT_FILE_URI';
					public static EXTRA_INIT_FILE_RES_ID: string = 'no.nordicsemi.android.dfu.extra.EXTRA_INIT_FILE_RES_ID';
					public static EXTRA_FILE_MIME_TYPE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_MIME_TYPE';
					public static MIME_TYPE_OCTET_STREAM: string = 'application/octet-stream';
					public static MIME_TYPE_ZIP: string = 'application/zip';
					public static EXTRA_FILE_TYPE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_FILE_TYPE';
					public static TYPE_SOFT_DEVICE: number = 1;
					public static TYPE_BOOTLOADER: number = 2;
					public static TYPE_APPLICATION: number = 4;
					public static TYPE_AUTO: number = 0;
					public static EXTRA_DATA: string = 'no.nordicsemi.android.dfu.extra.EXTRA_DATA';
					public static EXTRA_PROGRESS: string = 'no.nordicsemi.android.dfu.extra.EXTRA_PROGRESS';
					public static EXTRA_PART_CURRENT: string = 'no.nordicsemi.android.dfu.extra.EXTRA_PART_CURRENT';
					public static EXTRA_PARTS_TOTAL: string = 'no.nordicsemi.android.dfu.extra.EXTRA_PARTS_TOTAL';
					public static EXTRA_SPEED_B_PER_MS: string = 'no.nordicsemi.android.dfu.extra.EXTRA_SPEED_B_PER_MS';
					public static EXTRA_AVG_SPEED_B_PER_MS: string = 'no.nordicsemi.android.dfu.extra.EXTRA_AVG_SPEED_B_PER_MS';
					public static BROADCAST_PROGRESS: string = 'no.nordicsemi.android.dfu.broadcast.BROADCAST_PROGRESS';
					public static PROGRESS_CONNECTING: number = -1;
					public static PROGRESS_STARTING: number = -2;
					public static PROGRESS_ENABLING_DFU_MODE: number = -3;
					public static PROGRESS_VALIDATING: number = -4;
					public static PROGRESS_DISCONNECTING: number = -5;
					public static PROGRESS_COMPLETED: number = -6;
					public static PROGRESS_ABORTED: number = -7;
					public static BROADCAST_ERROR: string = 'no.nordicsemi.android.dfu.broadcast.BROADCAST_ERROR';
					public static EXTRA_ERROR_TYPE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_ERROR_TYPE';
					public static ERROR_TYPE_OTHER: number = 0;
					public static ERROR_TYPE_COMMUNICATION_STATE: number = 1;
					public static ERROR_TYPE_COMMUNICATION: number = 2;
					public static ERROR_TYPE_DFU_REMOTE: number = 3;
					public static ERROR_MASK: number = 4096;
					public static ERROR_DEVICE_DISCONNECTED: number = 4096;
					public static ERROR_FILE_NOT_FOUND: number = 4097;
					public static ERROR_FILE_ERROR: number = 4098;
					public static ERROR_FILE_INVALID: number = 4099;
					public static ERROR_FILE_IO_EXCEPTION: number = 4100;
					public static ERROR_SERVICE_DISCOVERY_NOT_STARTED: number = 4101;
					public static ERROR_SERVICE_NOT_FOUND: number = 4102;
					public static ERROR_INVALID_RESPONSE: number = 4104;
					public static ERROR_FILE_TYPE_UNSUPPORTED: number = 4105;
					public static ERROR_BLUETOOTH_DISABLED: number = 4106;
					public static ERROR_INIT_PACKET_REQUIRED: number = 4107;
					public static ERROR_FILE_SIZE_INVALID: number = 4108;
					public static ERROR_CRC_ERROR: number = 4109;
					public static ERROR_DEVICE_NOT_BONDED: number = 4110;
					public static ERROR_PROGRESS_LOST: number = 4111;
					public static ERROR_REMOTE_MASK: number = 8192;
					public static ERROR_REMOTE_TYPE_LEGACY: number = 256;
					public static ERROR_REMOTE_TYPE_SECURE: number = 512;
					public static ERROR_REMOTE_TYPE_SECURE_EXTENDED: number = 1024;
					public static ERROR_REMOTE_TYPE_SECURE_BUTTONLESS: number = 2048;
					public static ERROR_CONNECTION_MASK: number = 16384;
					public static ERROR_CONNECTION_STATE_MASK: number = 32768;
					public static BROADCAST_LOG: string = 'no.nordicsemi.android.dfu.broadcast.BROADCAST_LOG';
					public static EXTRA_LOG_MESSAGE: string = 'no.nordicsemi.android.dfu.extra.EXTRA_LOG_INFO';
					public static EXTRA_LOG_LEVEL: string = 'no.nordicsemi.android.dfu.extra.EXTRA_LOG_LEVEL';
					public static LOG_LEVEL_DEBUG: number = 0;
					public static LOG_LEVEL_VERBOSE: number = 1;
					public static LOG_LEVEL_INFO: number = 5;
					public static LOG_LEVEL_APPLICATION: number = 10;
					public static LOG_LEVEL_WARNING: number = 15;
					public static LOG_LEVEL_ERROR: number = 20;
					public static BROADCAST_ACTION: string = 'no.nordicsemi.android.dfu.broadcast.BROADCAST_ACTION';
					public static EXTRA_ACTION: string = 'no.nordicsemi.android.dfu.extra.EXTRA_ACTION';
					public static ACTION_PAUSE: number = 0;
					public static ACTION_RESUME: number = 1;
					public static ACTION_ABORT: number = 2;
					public static EXTRA_SCAN_DELAY: string = 'no.nordicsemi.android.dfu.extra.EXTRA_SCAN_DELAY';
					public static EXTRA_SCAN_TIMEOUT: string = 'no.nordicsemi.android.dfu.extra.EXTRA_SCAN_TIMEOUT';
					public static EXTRA_CUSTOM_UUIDS_FOR_LEGACY_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CUSTOM_UUIDS_FOR_LEGACY_DFU';
					public static EXTRA_CUSTOM_UUIDS_FOR_SECURE_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CUSTOM_UUIDS_FOR_SECURE_DFU';
					public static EXTRA_CUSTOM_UUIDS_FOR_EXPERIMENTAL_BUTTONLESS_DFU: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CUSTOM_UUIDS_FOR_EXPERIMENTAL_BUTTONLESS_DFU';
					public static EXTRA_CUSTOM_UUIDS_FOR_BUTTONLESS_DFU_WITHOUT_BOND_SHARING: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CUSTOM_UUIDS_FOR_BUTTONLESS_DFU_WITHOUT_BOND_SHARING';
					public static EXTRA_CUSTOM_UUIDS_FOR_BUTTONLESS_DFU_WITH_BOND_SHARING: string = 'no.nordicsemi.android.dfu.extra.EXTRA_CUSTOM_UUIDS_FOR_BUTTONLESS_DFU_WITH_BOND_SHARING';
					public mConnectionState: number;
					public static STATE_DISCONNECTED: number = 0;
					public static STATE_CONNECTING: number = -1;
					public static STATE_CONNECTED: number = -2;
					public static STATE_CONNECTED_AND_READY: number = -3;
					public static STATE_DISCONNECTING: number = -4;
					public static STATE_CLOSED: number = -5;
					public connect(gatt: string): globalAndroid.bluetooth.BluetoothGatt;
					public getDeviceSelector(): no.nordicsemi.android.dfu.DfuDeviceSelector;
					public onDestroy(): void;
					public onHandleIntent(imageSizeInBytes: globalAndroid.content.Intent): void;
					public waitUntilDisconnected(): void;
					public updateProgressNotification(flags: androidx.core.app.NotificationCompat.Builder, pendingAbortIntent: number): void;
					public isDebug(): boolean;
					public close(gatt: globalAndroid.bluetooth.BluetoothGatt): void;
					public onCreate(): void;
					public waitFor(this_: number): void;
					public constructor();
					public terminateConnection(gatt: globalAndroid.bluetooth.BluetoothGatt, error: number): void;
					public updateErrorNotification(builder: androidx.core.app.NotificationCompat.Builder): void;
					public updateForegroundNotification(builder: androidx.core.app.NotificationCompat.Builder): void;
					public disconnect(gatt: globalAndroid.bluetooth.BluetoothGatt): void;
					public updateProgressNotification(): void;
					public getNotificationTarget(): java.lang.Class<any>;
					public refreshDeviceCache(success: globalAndroid.bluetooth.BluetoothGatt, e: boolean): void;
					public onTaskRemoved(rootIntent: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuCallback extends no.nordicsemi.android.dfu.DfuController {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuCallback>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback; onBondStateChanged(param0: number): void; pause(): void; resume(): void; abort(): void });
					public constructor();
					public pause(): void;
					public resume(): void;
					public getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback;
					public onBondStateChanged(param0: number): void;
					public abort(): void;
				}
				export module DfuCallback {
					export class DfuGattCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback>;
						public constructor();
						public onDisconnected(error: number): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuController {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuController>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { pause(): void; resume(): void; abort(): void });
					public constructor();
					public pause(): void;
					public resume(): void;
					public abort(): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuDefaultDeviceSelector extends no.nordicsemi.android.dfu.DfuDeviceSelector {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuDefaultDeviceSelector>;
					public matches(device: globalAndroid.bluetooth.BluetoothDevice, rssi: number, scanRecord: androidNative.Array<number>, originalAddress: string, incrementedAddress: string): boolean;
					public getScanFilters(dfuServiceUuid: globalAndroid.os.ParcelUuid): java.util.List<globalAndroid.bluetooth.le.ScanFilter>;
					public matches(param0: globalAndroid.bluetooth.BluetoothDevice, param1: number, param2: androidNative.Array<number>, param3: string, param4: string): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuDeviceSelector {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuDeviceSelector>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuDeviceSelector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getScanFilters(dfuServiceUuid: globalAndroid.os.ParcelUuid): java.util.List<globalAndroid.bluetooth.le.ScanFilter>; matches(param0: globalAndroid.bluetooth.BluetoothDevice, param1: number, param2: androidNative.Array<number>, param3: string, param4: string): boolean });
					public constructor();
					public getScanFilters(dfuServiceUuid: globalAndroid.os.ParcelUuid): java.util.List<globalAndroid.bluetooth.le.ScanFilter>;
					public matches(param0: globalAndroid.bluetooth.BluetoothDevice, param1: number, param2: androidNative.Array<number>, param3: string, param4: string): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuLogListener {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuLogListener>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuLogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLogEvent(param0: string, param1: number, param2: string): void });
					public constructor();
					public onLogEvent(param0: string, param1: number, param2: string): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuProgressInfo {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuProgressInfo>;
				}
				export module DfuProgressInfo {
					export class ProgressListener {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuProgressInfo.ProgressListener>;
						/**
						 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuProgressInfo$ProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { updateProgressNotification(): void });
						public constructor();
						public updateProgressNotification(): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuProgressListener {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuProgressListener>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeviceConnecting(param0: string): void;
						onDeviceConnected(param0: string): void;
						onDfuProcessStarting(param0: string): void;
						onDfuProcessStarted(param0: string): void;
						onEnablingDfuMode(param0: string): void;
						onProgressChanged(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						onFirmwareValidating(param0: string): void;
						onDeviceDisconnecting(param0: string): void;
						onDeviceDisconnected(param0: string): void;
						onDfuCompleted(param0: string): void;
						onDfuAborted(param0: string): void;
						onError(param0: string, param1: number, param2: number, param3: string): void;
					});
					public constructor();
					public onError(param0: string, param1: number, param2: number, param3: string): void;
					public onDeviceConnecting(param0: string): void;
					public onDfuCompleted(param0: string): void;
					public onDfuProcessStarted(param0: string): void;
					public onDfuAborted(param0: string): void;
					public onDeviceDisconnecting(param0: string): void;
					public onDeviceConnected(param0: string): void;
					public onEnablingDfuMode(param0: string): void;
					public onDfuProcessStarting(param0: string): void;
					public onFirmwareValidating(param0: string): void;
					public onProgressChanged(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onDeviceDisconnected(param0: string): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuProgressListenerAdapter extends no.nordicsemi.android.dfu.DfuProgressListener {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuProgressListenerAdapter>;
					public onDfuProcessStarting(deviceAddress: string): void;
					public onError(param0: string, param1: number, param2: number, param3: string): void;
					public onDeviceConnecting(deviceAddress: string): void;
					public onDfuProcessStarted(param0: string): void;
					public onDfuProcessStarted(deviceAddress: string): void;
					public onDfuAborted(param0: string): void;
					public onDeviceDisconnecting(deviceAddress: string): void;
					public onDfuCompleted(param0: string): void;
					public constructor();
					public onEnablingDfuMode(param0: string): void;
					public onFirmwareValidating(param0: string): void;
					public onDfuCompleted(deviceAddress: string): void;
					public onDeviceConnected(deviceAddress: string): void;
					public onDfuAborted(deviceAddress: string): void;
					public onError(deviceAddress: string, error: number, errorType: number, message: string): void;
					public onProgressChanged(deviceAddress: string, percent: number, speed: number, avgSpeed: number, currentPart: number, partsTotal: number): void;
					public onDeviceDisconnected(deviceAddress: string): void;
					public onDeviceConnecting(param0: string): void;
					public onDeviceDisconnecting(param0: string): void;
					public onDeviceConnected(param0: string): void;
					public onDfuProcessStarting(param0: string): void;
					public onEnablingDfuMode(deviceAddress: string): void;
					public onFirmwareValidating(deviceAddress: string): void;
					public onProgressChanged(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onDeviceDisconnected(param0: string): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuScope {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuScope>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuService extends no.nordicsemi.android.dfu.DfuCallback {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuService>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean; initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean; performDfu(param0: globalAndroid.content.Intent): void; release(): void; getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback; onBondStateChanged(param0: number): void; pause(): void; resume(): void; abort(): void });
					public constructor();
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public pause(): void;
					public resume(): void;
					public getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public onBondStateChanged(param0: number): void;
					public abort(): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuServiceController extends no.nordicsemi.android.dfu.DfuController {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceController>;
					public pause(): void;
					public resume(): void;
					public isPaused(): boolean;
					public isAborted(): boolean;
					public abort(): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuServiceInitiator {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceInitiator>;
					public static DEFAULT_PRN_VALUE: number = 12;
					public static DEFAULT_MBR_SIZE: number = 4096;
					public static DEFAULT_SCAN_TIMEOUT: number = 5000;
					public static SCOPE_SYSTEM_COMPONENTS: number = 1;
					public static SCOPE_APPLICATION: number = 2;
					public setCustomUuidsForSecureDfu(dfuServiceUuid: java.util.UUID, dfuControlPointUuid: java.util.UUID, dfuPacketUuid: java.util.UUID): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setZip(rawResId: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public static createDfuNotificationChannel(context: globalAndroid.content.Context): void;
					public setDeviceName(name: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setNumberOfRetries(max: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setScope(scope: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setKeepBond(keepBond: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setZip(path: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setPacketsReceiptNotificationsEnabled(enabled: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setMbrSize(mbrSize: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public disableMtuRequest(): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setBinOrHex(fileType: number, rawResId: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setInitFile(initFileUri: globalAndroid.net.Uri): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setDisableNotification(disableNotification: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public start(context: globalAndroid.content.Context, service: java.lang.Class<any>): no.nordicsemi.android.dfu.DfuServiceController;
					/** @deprecated */
					public setInitFile(initFilePath: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setPacketsReceiptNotificationsValue(number: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public static createDfuNotificationChannel(context: globalAndroid.content.Context, dfu_channel_name: string, dfu_channel_description: string, showBadge: boolean): void;
					public constructor(deviceAddress: string);
					public setZip(uri: globalAndroid.net.Uri, path: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setBinOrHex(fileType: number, uri: globalAndroid.net.Uri, path: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setCustomUuidsForLegacyDfu(dfuServiceUuid: java.util.UUID, dfuControlPointUuid: java.util.UUID, dfuPacketUuid: java.util.UUID, dfuVersionUuid: java.util.UUID): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setForeground(foreground: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setPrepareDataObjectDelay(delay: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setRestoreBond(restoreBond: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setForceScanningForNewAddressInLegacyDfu(force: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setMtu(mtu: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(enable: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setCustomUuidsForExperimentalButtonlessDfu(buttonlessDfuServiceUuid: java.util.UUID, buttonlessDfuControlPointUuid: java.util.UUID): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setCustomUuidsForButtonlessDfuWithoutBondSharing(buttonlessDfuServiceUuid: java.util.UUID, buttonlessDfuControlPointUuid: java.util.UUID): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public disableResume(): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setInitFile(initFileUri: globalAndroid.net.Uri, initFilePath: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setCurrentMtu(mtu: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setInitFile(initFileResId: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setRebootTime(rebootTime: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setCustomUuidsForButtonlessDfuWithBondSharing(buttonlessDfuServiceUuid: java.util.UUID, buttonlessDfuControlPointUuid: java.util.UUID): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setZip(uri: globalAndroid.net.Uri): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setForceDfu(force: boolean): no.nordicsemi.android.dfu.DfuServiceInitiator;
					public setScanTimeout(scanTimeout: number): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setBinOrHex(fileType: number, path: string): no.nordicsemi.android.dfu.DfuServiceInitiator;
					/** @deprecated */
					public setBinOrHex(fileType: number, uri: globalAndroid.net.Uri): no.nordicsemi.android.dfu.DfuServiceInitiator;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuServiceListenerHelper {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceListenerHelper>;
					public static unregisterLogListener(empty: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuLogListener): void;
					public static registerLogListener(filter: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuLogListener, listener: string): void;
					public constructor();
					public static registerLogListener(filter: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuLogListener): void;
					public static registerProgressListener(filter: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuProgressListener): void;
					public static registerProgressListener(filter: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuProgressListener, listener: string): void;
					public static unregisterProgressListener(empty: globalAndroid.content.Context, context: no.nordicsemi.android.dfu.DfuProgressListener): void;
				}
				export module DfuServiceListenerHelper {
					export class LogBroadcastReceiver {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceListenerHelper.LogBroadcastReceiver>;
						public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					}
					export class ProgressBroadcastsReceiver {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceListenerHelper.ProgressBroadcastsReceiver>;
						public onReceive(speed: globalAndroid.content.Context, avgSpeed: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuServiceProvider extends no.nordicsemi.android.dfu.DfuCallback {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuServiceProvider>;
					public pause(): void;
					public resume(): void;
					public getGattCallback(): no.nordicsemi.android.dfu.DfuCallback.DfuGattCallback;
					public onBondStateChanged(state: number): void;
					public onBondStateChanged(param0: number): void;
					public abort(): void;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class DfuSettingsConstants {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.DfuSettingsConstants>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.DfuSettingsConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
					public static SETTINGS_ASSUME_DFU_NODE: string = 'settings_assume_dfu_mode';
					public static SETTINGS_MBR_SIZE: string = 'settings_mbr_size';
					public static SETTINGS_NUMBER_OF_PACKETS_DEFAULT: number = 12;
					public static SETTINGS_PACKET_RECEIPT_NOTIFICATION_ENABLED: string = 'settings_packet_receipt_notification_enabled';
					public static SETTINGS_NUMBER_OF_PACKETS: string = 'settings_number_of_packets';
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class ExperimentalButtonlessDfuImpl extends no.nordicsemi.android.dfu.ButtonlessDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.ExperimentalButtonlessDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public shouldScanForBootloader(): boolean;
					public isClientCompatible(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public getDfuServiceUUID(): java.util.UUID;
					public getButtonlessDfuCharacteristic(): globalAndroid.bluetooth.BluetoothGattCharacteristic;
					public getResponseType(): number;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public release(): void;
					public performDfu(intent: globalAndroid.content.Intent): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class FileType {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.FileType>;
					/**
					 * Constructs a new instance of the no.nordicsemi.android.dfu.FileType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class LegacyButtonlessDfuImpl extends no.nordicsemi.android.dfu.BaseButtonlessDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.LegacyButtonlessDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public getShort(value: androidNative.Array<number>, offset: number): number;
					public getDfuServiceUUID(): java.util.UUID;
					public isClientCompatible(major: globalAndroid.content.Intent, this_: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public performDfu(this_: globalAndroid.content.Intent): void;
					public release(): void;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class LegacyDfuImpl extends no.nordicsemi.android.dfu.BaseCustomDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.LegacyDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public isClientCompatible(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public getDfuServiceUUID(): java.util.UUID;
					public getControlPointCharacteristicUUID(): java.util.UUID;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public performDfu(zhis: globalAndroid.content.Intent): void;
					public release(): void;
					public getGattCallback(): no.nordicsemi.android.dfu.BaseCustomDfuImpl.BaseCustomBluetoothCallback;
					public getPacketCharacteristicUUID(): java.util.UUID;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
				export module LegacyDfuImpl {
					export class LegacyBluetoothCallback extends no.nordicsemi.android.dfu.BaseCustomDfuImpl.BaseCustomBluetoothCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.LegacyDfuImpl.LegacyBluetoothCallback>;
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic): void;
						public constructor();
						public constructor(this$0: no.nordicsemi.android.dfu.BaseDfuImpl);
						public onCharacteristicChanged(this_: globalAndroid.bluetooth.BluetoothGatt, gatt: globalAndroid.bluetooth.BluetoothGattCharacteristic, characteristic: androidNative.Array<number>): void;
						public constructor(this$0: no.nordicsemi.android.dfu.LegacyDfuImpl);
						public onPacketCharacteristicWrite(): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class SecureDfuImpl extends no.nordicsemi.android.dfu.BaseCustomDfuImpl {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.SecureDfuImpl>;
					public initialize(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt, param2: number, param3: java.io.InputStream, param4: java.io.InputStream): boolean;
					public isClientCompatible(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt): boolean;
					public getDfuServiceUUID(): java.util.UUID;
					public getControlPointCharacteristicUUID(): java.util.UUID;
					public performDfu(param0: globalAndroid.content.Intent): void;
					public performDfu(zhis: globalAndroid.content.Intent): void;
					public release(): void;
					public initialize(intent: globalAndroid.content.Intent, gatt: globalAndroid.bluetooth.BluetoothGatt, fileType: number, firmwareStream: java.io.InputStream, initPacketStream: java.io.InputStream): boolean;
					public getGattCallback(): no.nordicsemi.android.dfu.BaseDfuImpl.BaseBluetoothGattCallback;
					public getPacketCharacteristicUUID(): java.util.UUID;
					public isClientCompatible(param0: globalAndroid.content.Intent, param1: globalAndroid.bluetooth.BluetoothGatt): boolean;
				}
				export module SecureDfuImpl {
					export class ObjectChecksum {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.SecureDfuImpl.ObjectChecksum>;
					}
					export class ObjectInfo extends no.nordicsemi.android.dfu.SecureDfuImpl.ObjectChecksum {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.SecureDfuImpl.ObjectInfo>;
					}
					export class SecureBluetoothCallback extends no.nordicsemi.android.dfu.BaseCustomDfuImpl.BaseCustomBluetoothCallback {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.SecureDfuImpl.SecureBluetoothCallback>;
						public onCharacteristicChanged(gatt: globalAndroid.bluetooth.BluetoothGatt, characteristic: globalAndroid.bluetooth.BluetoothGattCharacteristic): void;
						public constructor();
						public constructor(this$0: no.nordicsemi.android.dfu.BaseDfuImpl);
						public constructor(this$0: no.nordicsemi.android.dfu.SecureDfuImpl);
						public onCharacteristicChanged(remoteCrc: globalAndroid.bluetooth.BluetoothGatt, localCrc: globalAndroid.bluetooth.BluetoothGattCharacteristic, status: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export class UuidHelper {
					public static class: java.lang.Class<no.nordicsemi.android.dfu.UuidHelper>;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export class ArchiveInputStream {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.ArchiveInputStream>;
						public read(): number;
						public close(): void;
						public applicationImageSize(): number;
						public setContentType(type: number): number;
						public constructor(bootloader: java.io.InputStream, softdevice: number, system: number);
						public bootloaderImageSize(): number;
						public skip(n: number): number;
						public read(buffer: androidNative.Array<number>, offset: number, length: number): number;
						public available(): number;
						public fullReset(): void;
						public isSecureDfuRequired(): boolean;
						public getContentType(): number;
						public softDeviceImageSize(): number;
						public getApplicationInit(): androidNative.Array<number>;
						public mark(readlimit: number): void;
						public markSupported(): boolean;
						public getBytesRead(): number;
						public read(buffer: androidNative.Array<number>): number;
						public getCrc32(): number;
						public getSystemInit(): androidNative.Array<number>;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export class HexInputStream {
						public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.HexInputStream>;
						public read(): number;
						public sizeInBytes(): number;
						public readPacket(buffer: androidNative.Array<number>): number;
						public read(buffer: androidNative.Array<number>, offset: number, count: number): number;
						public constructor(in_: java.io.InputStream, mbrSize: number);
						public mark(readlimit: number): void;
						public constructor(data: androidNative.Array<number>, mbrSize: number);
						public sizeInPackets(packetSize: number): number;
						public read(buffer: androidNative.Array<number>): number;
						public reset(): void;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class DeviceDisconnectedException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.DeviceDisconnectedException>;
							public constructor(message: string, state: number);
							public getErrorNumber(): number;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class DfuException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.DfuException>;
							public constructor(message: string, state: number);
							public getErrorNumber(): number;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class HexFileValidationException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.HexFileValidationException>;
							public constructor(message: string);
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class RemoteDfuException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.RemoteDfuException>;
							public constructor(message: string, state: number);
							public getErrorNumber(): number;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class RemoteDfuExtendedErrorException extends no.nordicsemi.android.dfu.internal.exception.RemoteDfuException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.RemoteDfuExtendedErrorException>;
							public constructor(message: string, extendedError: number);
							public getExtendedErrorNumber(): number;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class SizeValidationException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.SizeValidationException>;
							public constructor(message: string);
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class UnknownResponseException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.UnknownResponseException>;
							public static bytesToHex(v: androidNative.Array<number>, j: number, bytes: number): string;
							public constructor(message: string, response: androidNative.Array<number>, expectedReturnCode: number, expectedOpCode: number);
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module exception {
						export class UploadAbortedException {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.exception.UploadAbortedException>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module manifest {
						export class FileInfo {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.manifest.FileInfo>;
							public constructor();
							public getBinFileName(): string;
							public getDatFileName(): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module manifest {
						export class Manifest {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.manifest.Manifest>;
							public constructor();
							public isSecureDfuRequired(): boolean;
							public getSoftdeviceBootloaderInfo(): no.nordicsemi.android.dfu.internal.manifest.SoftDeviceBootloaderFileInfo;
							public getBootloaderInfo(): no.nordicsemi.android.dfu.internal.manifest.FileInfo;
							public getApplicationInfo(): no.nordicsemi.android.dfu.internal.manifest.FileInfo;
							public getSoftdeviceInfo(): no.nordicsemi.android.dfu.internal.manifest.FileInfo;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module manifest {
						export class ManifestFile {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.manifest.ManifestFile>;
							public constructor();
							public getManifest(): no.nordicsemi.android.dfu.internal.manifest.Manifest;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module manifest {
						export class SoftDeviceBootloaderFileInfo extends no.nordicsemi.android.dfu.internal.manifest.FileInfo {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.manifest.SoftDeviceBootloaderFileInfo>;
							public constructor();
							public getSoftdeviceSize(): number;
							public getBootloaderSize(): number;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module scanner {
						export class BootloaderScanner {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.scanner.BootloaderScanner>;
							/**
							 * Constructs a new instance of the no.nordicsemi.android.dfu.internal.scanner.BootloaderScanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { searchUsing(param0: no.nordicsemi.android.dfu.DfuDeviceSelector, param1: number): string });
							public constructor();
							public searchUsing(param0: no.nordicsemi.android.dfu.DfuDeviceSelector, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module scanner {
						export class BootloaderScannerFactory {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.scanner.BootloaderScannerFactory>;
							public static getIncrementedAddress(deviceAddress: string): string;
							public static getScanner(deviceAddress: string, serviceUuid: java.util.UUID): no.nordicsemi.android.dfu.internal.scanner.BootloaderScanner;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module scanner {
						export class BootloaderScannerJB extends no.nordicsemi.android.dfu.internal.scanner.BootloaderScanner {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.scanner.BootloaderScannerJB>;
							public searchUsing(selector: no.nordicsemi.android.dfu.DfuDeviceSelector, timeout: number): string;
							public onLeScan(device: globalAndroid.bluetooth.BluetoothDevice, rssi: number, scanRecord: androidNative.Array<number>): void;
							public searchUsing(param0: no.nordicsemi.android.dfu.DfuDeviceSelector, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module dfu {
				export module internal {
					export module scanner {
						export class BootloaderScannerLollipop implements no.nordicsemi.android.dfu.internal.scanner.BootloaderScanner {
							public static class: java.lang.Class<no.nordicsemi.android.dfu.internal.scanner.BootloaderScannerLollipop>;
							public onScanResult(callbackType: number, result: globalAndroid.bluetooth.le.ScanResult): void;
							public searchUsing(param0: no.nordicsemi.android.dfu.DfuDeviceSelector, param1: number): string;
							public searchUsing(this_: no.nordicsemi.android.dfu.DfuDeviceSelector, selector: number): string;
						}
					}
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module error {
				export class GattError {
					public static class: java.lang.Class<no.nordicsemi.android.error.GattError>;
					public static parseConnectionError(error: number): string;
					public static parse(error: number): string;
					public static parseDfuRemoteError(error: number): string;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module error {
				export class LegacyDfuError {
					public static class: java.lang.Class<no.nordicsemi.android.error.LegacyDfuError>;
					public static INVALID_STATE: number = 2;
					public static NOT_SUPPORTED: number = 3;
					public static DATA_SIZE_EXCEEDS_LIMIT: number = 4;
					public static CRC_ERROR: number = 5;
					public static OPERATION_FAILED: number = 6;
					public static parse(error: number): string;
				}
			}
		}
	}
}

declare module no {
	export module nordicsemi {
		export module android {
			export module error {
				export class SecureDfuError {
					public static class: java.lang.Class<no.nordicsemi.android.error.SecureDfuError>;
					public static OP_CODE_NOT_SUPPORTED: number = 2;
					public static INVALID_PARAM: number = 3;
					public static INSUFFICIENT_RESOURCES: number = 4;
					public static INVALID_OBJECT: number = 5;
					public static UNSUPPORTED_TYPE: number = 7;
					public static OPERATION_NOT_PERMITTED: number = 8;
					public static OPERATION_FAILED: number = 10;
					public static EXTENDED_ERROR: number = 11;
					public static EXT_ERROR_WRONG_COMMAND_FORMAT: number = 2;
					public static EXT_ERROR_UNKNOWN_COMMAND: number = 3;
					public static EXT_ERROR_INIT_COMMAND_INVALID: number = 4;
					public static EXT_ERROR_FW_VERSION_FAILURE: number = 5;
					public static EXT_ERROR_HW_VERSION_FAILURE: number = 6;
					public static EXT_ERROR_SD_VERSION_FAILURE: number = 7;
					public static EXT_ERROR_SIGNATURE_MISSING: number = 8;
					public static EXT_ERROR_WRONG_HASH_TYPE: number = 9;
					public static EXT_ERROR_HASH_FAILED: number = 10;
					public static EXT_ERROR_WRONG_SIGNATURE_TYPE: number = 11;
					public static EXT_ERROR_VERIFICATION_FAILED: number = 12;
					public static EXT_ERROR_INSUFFICIENT_SPACE: number = 13;
					public static BUTTONLESS_ERROR_OP_CODE_NOT_SUPPORTED: number = 2;
					public static BUTTONLESS_ERROR_OPERATION_FAILED: number = 4;
					public static parseExtendedError(error: number): string;
					public static parse(error: number): string;
					public static parseButtonlessError(error: number): string;
				}
			}
		}
	}
}

//Generics information:
