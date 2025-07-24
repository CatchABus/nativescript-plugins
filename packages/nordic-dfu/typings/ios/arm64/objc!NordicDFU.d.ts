declare const enum DFUError {
	RemoteLegacyDFUSuccess = 1,

	RemoteLegacyDFUInvalidState = 2,

	RemoteLegacyDFUNotSupported = 3,

	RemoteLegacyDFUDataExceedsLimit = 4,

	RemoteLegacyDFUCrcError = 5,

	RemoteLegacyDFUOperationFailed = 6,

	RemoteSecureDFUSuccess = 11,

	RemoteSecureDFUOpCodeNotSupported = 12,

	RemoteSecureDFUInvalidParameter = 13,

	RemoteSecureDFUInsufficientResources = 14,

	RemoteSecureDFUInvalidObject = 15,

	RemoteSecureDFUSignatureMismatch = 16,

	RemoteSecureDFUUnsupportedType = 17,

	RemoteSecureDFUOperationNotPermitted = 18,

	RemoteSecureDFUOperationFailed = 20,

	RemoteSecureDFUExtendedError = 21,

	RemoteExtendedErrorWrongCommandFormat = 22,

	RemoteExtendedErrorUnknownCommand = 23,

	RemoteExtendedErrorInitCommandInvalid = 24,

	RemoteExtendedErrorFwVersionFailure = 25,

	RemoteExtendedErrorHwVersionFailure = 26,

	RemoteExtendedErrorSdVersionFailure = 27,

	RemoteExtendedErrorSignatureMissing = 28,

	RemoteExtendedErrorWrongHashType = 29,

	RemoteExtendedErrorHashFailed = 30,

	RemoteExtendedErrorWrongSignatureType = 31,

	RemoteExtendedErrorVerificationFailed = 32,

	RemoteExtendedErrorInsufficientSpace = 33,

	RemoteExperimentalButtonlessDFUSuccess = 9001,

	RemoteExperimentalButtonlessDFUOpCodeNotSupported = 9002,

	RemoteExperimentalButtonlessDFUOperationFailed = 9004,

	RemoteButtonlessDFUSuccess = 91,

	RemoteButtonlessDFUOpCodeNotSupported = 92,

	RemoteButtonlessDFUOperationFailed = 94,

	RemoteButtonlessDFUInvalidAdvertisementName = 95,

	RemoteButtonlessDFUBusy = 96,

	RemoteButtonlessDFUNotBonded = 97,

	FileNotSpecified = 101,

	FileInvalid = 102,

	ExtendedInitPacketRequired = 103,

	InitPacketRequired = 104,

	FailedToConnect = 201,

	DeviceDisconnected = 202,

	BluetoothDisabled = 203,

	ServiceDiscoveryFailed = 301,

	DeviceNotSupported = 302,

	ReadingVersionFailed = 303,

	EnablingControlPointFailed = 304,

	WritingCharacteristicFailed = 305,

	ReceivingNotificationFailed = 306,

	UnsupportedResponse = 307,

	BytesLost = 308,

	CrcError = 309,

	InvalidInternalState = 500,
}

declare class DFUFirmware extends NSObject {
	static alloc(): DFUFirmware; // inherited from NSObject

	static new(): DFUFirmware; // inherited from NSObject

	readonly fileName: string;

	readonly fileUrl: NSURL;

	readonly parts: number;

	readonly size: DFUFirmwareSize;

	readonly valid: boolean;

	constructor(o: { binFile: NSData; datFile: NSData; type: DFUFirmwareType });

	constructor(o: { hexFile: NSData; datFile: NSData; type: DFUFirmwareType });

	constructor(o: { urlToBinOrHexFile: NSURL; urlToDatFile: NSURL; type: DFUFirmwareType });

	constructor(o: { urlToZipFile: NSURL });

	constructor(o: { urlToZipFile: NSURL; type: DFUFirmwareType });

	constructor(o: { zipFile: NSData });

	constructor(o: { zipFile: NSData; type: DFUFirmwareType });

	initWithBinFileDatFileType(binFile: NSData, datFile: NSData, type: DFUFirmwareType): this;

	initWithHexFileDatFileTypeError(hexFile: NSData, datFile: NSData, type: DFUFirmwareType): this;

	initWithUrlToBinOrHexFileUrlToDatFileTypeError(urlToBinOrHexFile: NSURL, urlToDatFile: NSURL, type: DFUFirmwareType): this;

	initWithUrlToZipFileError(urlToZipFile: NSURL): this;

	initWithUrlToZipFileTypeError(urlToZipFile: NSURL, type: DFUFirmwareType): this;

	initWithZipFileError(zipFile: NSData): this;

	initWithZipFileTypeError(zipFile: NSData, type: DFUFirmwareType): this;
}

declare class DFUFirmwareSize extends NSObject {
	static alloc(): DFUFirmwareSize; // inherited from NSObject

	static new(): DFUFirmwareSize; // inherited from NSObject

	readonly application: number;

	readonly bootloader: number;

	readonly softdevice: number;
}

declare const enum DFUFirmwareType {
	Softdevice = 1,

	Bootloader = 2,

	Application = 4,

	SoftdeviceBootloader = 3,

	SoftdeviceBootloaderApplication = 7,
}

declare class DFUPeripheralSelector extends NSObject implements DFUPeripheralSelectorDelegate {
	static alloc(): DFUPeripheralSelector; // inherited from NSObject

	static new(): DFUPeripheralSelector; // inherited from NSObject

	filterByHint(dfuServiceUUID: CBUUID): NSArray<CBUUID>;

	selectAdvertisementDataRSSIHint(peripheral: CBPeripheral, advertisementData: NSDictionary<string, any>, RSSI: number, name: string): boolean;
}

interface DFUPeripheralSelectorDelegate {
	filterByHint(dfuServiceUUID: CBUUID): NSArray<CBUUID>;

	selectAdvertisementDataRSSIHint(peripheral: CBPeripheral, advertisementData: NSDictionary<string, any>, RSSI: number, name: string): boolean;
}
declare var DFUPeripheralSelectorDelegate: {
	prototype: DFUPeripheralSelectorDelegate;
};

interface DFUProgressDelegate {
	dfuProgressDidChangeForOutOfToCurrentSpeedBytesPerSecondAvgSpeedBytesPerSecond(part: number, totalParts: number, progress: number, currentSpeedBytesPerSecond: number, avgSpeedBytesPerSecond: number): void;
}
declare var DFUProgressDelegate: {
	prototype: DFUProgressDelegate;
};

declare class DFUServiceController extends NSObject {
	static alloc(): DFUServiceController; // inherited from NSObject

	static new(): DFUServiceController; // inherited from NSObject

	readonly aborted: boolean;

	readonly paused: boolean;

	abort(): boolean;

	pause(): void;

	restart(): void;

	resume(): void;
}

interface DFUServiceDelegate {
	dfuErrorDidOccurWithMessage(error: DFUError, message: string): void;

	dfuStateDidChangeTo(state: DFUState): void;
}
declare var DFUServiceDelegate: {
	prototype: DFUServiceDelegate;
};

declare class DFUServiceInitiator extends NSObject {
	static alloc(): DFUServiceInitiator; // inherited from NSObject

	static new(): DFUServiceInitiator; // inherited from NSObject

	alternativeAdvertisingName: string;

	alternativeAdvertisingNameEnabled: boolean;

	connectionTimeout: number;

	dataObjectPreparationDelay: number;

	delegate: DFUServiceDelegate;

	disableResume: boolean;

	enableUnsafeExperimentalButtonlessServiceInSecureDfu: boolean;

	forceDfu: boolean;

	forceScanningForNewAddressInLegacyDfu: boolean;

	logger: LoggerDelegate;

	packetReceiptNotificationParameter: number;

	peripheralSelector: DFUPeripheralSelectorDelegate;

	progressDelegate: DFUProgressDelegate;

	uuidHelper: DFUUuidHelper;

	constructor(o: { centralManager: CBCentralManager; target: CBPeripheral });

	constructor(o: { queue: interop.Pointer | interop.Reference<any>; delegateQueue: interop.Pointer | interop.Reference<any>; progressQueue: interop.Pointer | interop.Reference<any>; loggerQueue: interop.Pointer | interop.Reference<any>; centralManagerOptions: NSDictionary<string, any> });

	initWithCentralManagerTarget(centralManager: CBCentralManager, target: CBPeripheral): this;

	initWithQueueDelegateQueueProgressQueueLoggerQueueCentralManagerOptions(queue: interop.Pointer | interop.Reference<any>, delegateQueue: interop.Pointer | interop.Reference<any>, progressQueue: interop.Pointer | interop.Reference<any>, loggerQueue: interop.Pointer | interop.Reference<any>, centralManagerOptions: NSDictionary<string, any>): this;

	start(): DFUServiceController;

	startWithTarget(target: CBPeripheral): DFUServiceController;

	startWithTargetWithIdentifier(uuid: NSUUID): DFUServiceController;

	withFirmware(file: DFUFirmware): DFUServiceInitiator;
}

declare const enum DFUState {
	Connecting = 0,

	Starting = 1,

	EnablingDfuMode = 2,

	Uploading = 3,

	Validating = 4,

	Disconnecting = 5,

	Completed = 6,

	Aborted = 7,
}

declare class DFUUuid extends NSObject {
	static alloc(): DFUUuid; // inherited from NSObject

	static new(): DFUUuid; // inherited from NSObject

	readonly type: DFUUuidType;

	readonly uuid: CBUUID;

	constructor(o: { UUID: CBUUID; forType: DFUUuidType });

	initWithUUIDForType(withUUID: CBUUID, forType: DFUUuidType): this;
}

declare class DFUUuidHelper extends NSObject {
	static alloc(): DFUUuidHelper; // inherited from NSObject

	static new(): DFUUuidHelper; // inherited from NSObject

	readonly buttonlessExperimentalCharacteristic: CBUUID;

	readonly buttonlessExperimentalService: CBUUID;

	readonly buttonlessWithBonds: CBUUID;

	readonly buttonlessWithoutBonds: CBUUID;

	readonly legacyDFUControlPoint: CBUUID;

	readonly legacyDFUPacket: CBUUID;

	readonly legacyDFUService: CBUUID;

	readonly legacyDFUVersion: CBUUID;

	readonly secureDFUControlPoint: CBUUID;

	readonly secureDFUPacket: CBUUID;

	readonly secureDFUService: CBUUID;

	constructor(o: { customUuids: NSArray<DFUUuid> | DFUUuid[] });

	initWithCustomUuids(uuids: NSArray<DFUUuid> | DFUUuid[]): this;
}

declare const enum DFUUuidType {
	LegacyService = 0,

	LegacyControlPoint = 1,

	LegacyPacket = 2,

	LegacyVersion = 3,

	SecureService = 4,

	SecureControl = 5,

	SecurePacket = 6,

	ButtonlessService = 7,

	ButtonlessCharacteristic = 8,

	ButtonlessWithoutBondSharing = 9,

	ButtonlessWithBondSharing = 10,
}

declare class IntelHex2BinConverter extends NSObject {
	static alloc(): IntelHex2BinConverter; // inherited from NSObject

	static new(): IntelHex2BinConverter; // inherited from NSObject
}

declare class LegacyDFUServiceInitiator extends DFUServiceInitiator {
	static alloc(): LegacyDFUServiceInitiator; // inherited from NSObject

	static new(): LegacyDFUServiceInitiator; // inherited from NSObject
}

declare const enum LogLevel {
	Debug = 0,

	Verbose = 1,

	Info = 5,

	Application = 10,

	Warning = 15,

	Error = 20,
}

interface LoggerDelegate {
	logWithMessage(level: LogLevel, message: string): void;
}
declare var LoggerDelegate: {
	prototype: LoggerDelegate;
};

declare var NordicDFUVersionNumber: number;

declare var NordicDFUVersionString: interop.Reference<number>;

declare class SecureDFUServiceInitiator extends DFUServiceInitiator {
	static alloc(): SecureDFUServiceInitiator; // inherited from NSObject

	static new(): SecureDFUServiceInitiator; // inherited from NSObject
}
