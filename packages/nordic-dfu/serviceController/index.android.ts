import { DfuServiceControllerCommon } from './common';

export class DfuServiceController extends DfuServiceControllerCommon {
	private readonly mNative: no.nordicsemi.android.dfu.DfuServiceController;

	constructor(native: no.nordicsemi.android.dfu.DfuServiceController) {
		super();
		this.mNative = native;
	}

	public pause(): void {
		if (this.mNative) {
			this.mNative.pause();
		}
	}
	public resume(): void {
		if (this.mNative) {
			this.mNative.resume();
		}
	}
	public abort(): void {
		if (this.mNative) {
			this.mNative.abort();
		}
	}
	public isPaused(): boolean {
		if (this.mNative) {
			return this.mNative.isPaused();
		}
		return false;
	}
	public isAborted(): boolean {
		if (this.mNative) {
			return this.mNative.isAborted();
		}
		return false;
	}
}
