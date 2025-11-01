export enum ExpressionValueType {
	LITERAL,
	IMAGE,
}

export class NativeExpressionValue {
	private readonly mNative: any;
	private readonly mType: ExpressionValueType;

	constructor(native: any, type?: ExpressionValueType) {
		this.mNative = native;
		this.mType = type ?? ExpressionValueType.LITERAL;
	}

	public get native(): any {
		return this.mNative;
	}

	public get type() {
		return this.mType;
	}
}
