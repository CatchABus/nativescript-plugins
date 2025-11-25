import { DFUController as IDFUController } from '.';

export abstract class DFUControllerCommon implements IDFUController {
	public abstract pause(): void;
	public abstract resume(): void;
	public abstract abort(): void;
	public abstract isPaused(): boolean;
	public abstract isAborted(): boolean;
}
