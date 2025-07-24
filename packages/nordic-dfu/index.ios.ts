import { DfuProgressEventData } from '.';
import { DFUInitiatorCommon, DfuState } from './common';
import { DfuServiceController } from './serviceController';

@NativeClass
class DFUServiceDelegateImpl extends NSObject implements DFUServiceDelegate {
	public static ObjCProtocols = [DFUServiceDelegate];

	private mOwner: WeakRef<DFUInitiator>;

	public static initWithOwner(owner: DFUInitiator): DFUServiceDelegateImpl {
		const delegate = <DFUServiceDelegateImpl>DFUServiceDelegateImpl.new();
		delegate.mOwner = new WeakRef(owner);

		return delegate;
	}

	dfuErrorDidOccurWithMessage(error: DFUError, message: string): void {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner._notifyDfuStateChanged(DfuState.DFU_FAILED, message);
		}
	}

	dfuStateDidChangeTo(nativeState: DFUState): void {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			let state: DfuState;

			switch (nativeState) {
				case DFUState.Connecting:
					state = DfuState.CONNECTING;
					break;
				case DFUState.Starting:
					state = DfuState.DFU_PROCESS_STARTING;
					break;
				case DFUState.EnablingDfuMode:
					state = DfuState.ENABLING_DFU_MODE;
					break;
				case DFUState.Uploading:
					state = DfuState.DFU_PROCESS_STARTING;
					break;
				case DFUState.Validating:
					state = DfuState.FIRMWARE_VALIDATING;
					break;
				case DFUState.Disconnecting:
					state = DfuState.DEVICE_DISCONNECTING;
					break;
				case DFUState.Completed:
					state = DfuState.DFU_COMPLETED;
					break;
				case DFUState.Aborted:
					state = DfuState.DFU_ABORTED;
					break;
				default:
					state = null;
					console.error(`Invalid DFU state change to '${nativeState}'`);
					break;
			}

			if (state != null) {
				owner._notifyDfuStateChanged(state);
			}
		}
	}
}

@NativeClass
class DFUProgressDelegateImpl extends NSObject implements DFUProgressDelegate {
	public static ObjCProtocols = [DFUProgressDelegate];

	private mOwner: WeakRef<DFUInitiator>;

	public static initWithOwner(owner: DFUInitiator): DFUProgressDelegateImpl {
		const delegate = <DFUProgressDelegateImpl>DFUProgressDelegateImpl.new();
		delegate.mOwner = new WeakRef(owner);

		return delegate;
	}

	dfuProgressDidChangeForOutOfToCurrentSpeedBytesPerSecondAvgSpeedBytesPerSecond(part: number, totalParts: number, progress: number, currentSpeedBytesPerSecond: number, avgSpeedBytesPerSecond: number): void {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner.notify<DfuProgressEventData>({
				eventName: DFUInitiator.dfuProgressEvent,
				object: owner,
				percent: progress,
				speed: currentSpeedBytesPerSecond,
				avgSpeed: avgSpeedBytesPerSecond,
				currentPart: part,
				totalParts,
			});
		}
	}
}

export class DFUInitiator extends DFUInitiatorCommon {
	private readonly mNative: DFUServiceInitiator;

	constructor(peripheralUUID: string) {
		super(peripheralUUID);
		this.mNative = DFUHelper.initDFUServiceInitiator();
	}

	public override setDeviceName(name: string): DFUInitiator {
		// Not implemented on iOS
		return this;
	}

	public override setKeepBond(val: boolean): DFUInitiator {
		// Not implemented on iOS
		return this;
	}

	public override setForceDfu(val: boolean): DFUInitiator {
		this.mNative.forceDfu = val;
		return this;
	}

	public override setForceScanningForNewAddressInLegacyDfu(val: boolean): DFUInitiator {
		this.mNative.forceScanningForNewAddressInLegacyDfu = val;
		return this;
	}

	public override setUnsafeExperimentalButtonlessServiceInSecureDfuEnabled(val: boolean): DFUInitiator {
		this.mNative.enableUnsafeExperimentalButtonlessServiceInSecureDfu = val;
		return this;
	}

	public override setPacketReceiptNotificationParameter(val: number): DFUInitiator {
		this.mNative.packetReceiptNotificationParameter = val;
		return this;
	}

	public override disableResume(): DFUInitiator {
		this.mNative.disableResume = true;
		return this;
	}

	public override start(filePath: string): DfuServiceController {
		const selectedFirmware = DFUFirmware.alloc().initWithUrlToZipFileError(NSURL.fileURLWithPath(filePath));
		const identifier = NSUUID.alloc().initWithUUIDString(this.mPeripheralUUID);
		const nativeController = this.mNative.withFirmware(selectedFirmware).startWithTargetWithIdentifier(identifier);
		return new DfuServiceController(nativeController);
	}

	protected override _registerProgressListener(): void {
		if (!this.mNative.delegate) {
			this.mNative.delegate = DFUServiceDelegateImpl.initWithOwner(this);
		}
		if (!this.mNative.progressDelegate) {
			this.mNative.progressDelegate = DFUProgressDelegateImpl.initWithOwner(this);
		}
	}

	protected override _removeProgressListener(): void {
		if (this.mNative.delegate) {
			this.mNative.delegate = null;
		}
		if (this.mNative.progressDelegate) {
			this.mNative.progressDelegate = null;
		}
	}
}

export { DfuState };
