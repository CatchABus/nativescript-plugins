export abstract class DfuServiceControllerCommon {
	public abstract pause(): void;
	public abstract resume(): void;
	public abstract abort(): void;
	public abstract isPaused(): boolean;
	public abstract isAborted(): boolean;
}
