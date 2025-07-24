import { DfuServiceControllerCommon } from './common';

export class DfuServiceController extends DfuServiceControllerCommon {
	private readonly mNative: DFUServiceController;

	constructor(native: DFUServiceController) {
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
			return this.mNative.paused;
		}
		return false;
	}
	public isAborted(): boolean {
		if (this.mNative) {
			return this.mNative.aborted;
		}
		return false;
	}
}
