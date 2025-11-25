import { DFUControllerCommon } from './common';

export class DFUController extends DFUControllerCommon {
	private declare readonly mNative: DFUServiceController;

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
