import { Matrix } from '@nativescript-community/ui-canvas';

const matrixDefaults = [1, 0, 0, 0, 1, 0, 0, 0, 1];

class DOMMatrix {
	/**
	 * Not supported
	 */
	public m13: number = 0;
	public m14: number = 0;
	public m23: number = 0;
	public m24: number = 0;
	public m31: number = 0;
	public m32: number = 0;
	public m33: number = 1;
	public m34: number = 0;
	public m43: number = 0;
	public m44: number = 1;

	private _values: Float32Array;

	constructor(init?: number[]) {
		this._values = new Float32Array(matrixDefaults.length);
		this._reset();

		if (init) {
			this.a = init[0];
			this.b = init[1];
			this.c = init[2];
			this.d = init[3];
			this.e = init[4];
			this.f = init[5];
		}
	}

	public _getValues(): Float32Array {
		return this._values;
	}

	public _reset(): void {
		for (let i = 0, length = matrixDefaults.length; i < length; i++) {
			this._values[i] = matrixDefaults[i];
		}
	}

	public get is2D(): boolean {
		return true;
	}

	public get isIdentity(): boolean {
		return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.e === 0 && this.f === 0;
	}

	public get a(): number {
		return this._values[0];
	}

	public set a(val: number) {
		this._values[0] = val;
	}

	public get m11(): number {
		return this.a;
	}

	public set m11(val: number) {
		this.a = val;
	}

	public get b(): number {
		return this._values[3];
	}

	public set b(val: number) {
		this._values[3] = val;
	}

	public get m12(): number {
		return this.b;
	}

	public set m12(val: number) {
		this.b = val;
	}

	public get c(): number {
		return this._values[1];
	}

	public set c(val: number) {
		this._values[1] = val;
	}

	public get m21(): number {
		return this.c;
	}

	public set m21(val: number) {
		this.c = val;
	}

	public get d(): number {
		return this._values[4];
	}

	public set d(val: number) {
		this._values[4] = val;
	}

	public get m22(): number {
		return this.d;
	}

	public set m22(val: number) {
		this.d = val;
	}

	public get e(): number {
		return this._values[2];
	}

	public set e(val: number) {
		this._values[2] = val;
	}

	public get m41(): number {
		return this.e;
	}

	public set m41(val: number) {
		this.e = val;
	}

	public get f(): number {
		return this._values[5];
	}

	public set f(val: number) {
		this._values[5] = val;
	}

	public get m42(): number {
		return this.f;
	}

	public set m42(val: number) {
		this.f = val;
	}

	toJSON() {
		return {
			a: this.a,
			b: this.b,
			c: this.c,
			d: this.d,
			e: this.e,
			f: this.f,

			m11: this.m11,
			m12: this.m12,
			m13: this.m13,
			m14: this.m14,

			m21: this.m21,
			m22: this.m22,
			m23: this.m23,
			m24: this.m24,

			m31: this.m31,
			m32: this.m32,
			m33: this.m33,
			m34: this.m34,

			m41: this.m41,
			m42: this.m42,
			m43: this.m43,
			m44: this.m44,
		};
	}
}

export { DOMMatrix };
