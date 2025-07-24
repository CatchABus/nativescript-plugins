import { DfuServiceControllerCommon } from './common';

export declare class DfuServiceController extends DfuServiceControllerCommon {
	constructor(native: any);
	public abstract pause(): void;
	public abstract resume(): void;
	public abstract abort(): void;
	public abstract isPaused(): boolean;
	public abstract isAborted(): boolean;
}
