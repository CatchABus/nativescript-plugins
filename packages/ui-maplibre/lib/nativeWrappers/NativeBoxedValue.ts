export class NativeBoxedValue {
	private readonly mNative: any;

	constructor(native: any) {
		this.mNative = native;
	}

	public get native(): any {
		return this.mNative;
	}
}
