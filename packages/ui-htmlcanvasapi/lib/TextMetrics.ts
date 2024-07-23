interface TextMetricsData {
	width: number;
	actualBoundingBoxLeft: number;
	actualBoundingBoxRight: number;
	actualBoundingBoxAscent: number;
	actualBoundingBoxDescent: number;
	fontBoundingBoxAscent: number;
	fontBoundingBoxDescent: number;
	hangingBaseline: number;
	ideographicBaseline: number;
	emHeightAscent: number;
}

class NSTextMetrics {
	private _data;
	constructor(data?: TextMetricsData) {
		this._data = data;
	}

	get width(): number {
		return this._data.width;
	}

	get actualBoundingBoxLeft(): number {
		return this._data.actualBoundingBoxLeft;
	}

	get actualBoundingBoxRight(): number {
		return this._data.actualBoundingBoxRight;
	}

	get actualBoundingBoxAscent(): number {
		return this._data.actualBoundingBoxAscent;
	}

	get actualBoundingBoxDescent(): number {
		return this._data.actualBoundingBoxDescent;
	}

	get fontBoundingBoxAscent(): number {
		return this._data.fontBoundingBoxAscent;
	}

	get fontBoundingBoxDescent(): number {
		return this._data.fontBoundingBoxDescent;
	}

	get emHeightAscent(): number {
		return this._data.emHeightAscent;
	}

	get emHeightDescent(): number {
		return this._data.emHeightDescent;
	}

	get hangingBaseline(): number {
		return this._data.hangingBaseline;
	}

	get alphabeticBaseline(): number {
		return this._data.alphabeticBaseline;
	}

	get ideographicBaseline(): number {
		return this._data.ideographicBaseline;
	}

	toJSON(): TextMetricsData {
		return {
			width: this.width,
			actualBoundingBoxLeft: this.actualBoundingBoxLeft,
			actualBoundingBoxRight: this.actualBoundingBoxRight,
			actualBoundingBoxAscent: this.actualBoundingBoxAscent,
			actualBoundingBoxDescent: this.actualBoundingBoxDescent,
			fontBoundingBoxAscent: this.fontBoundingBoxAscent,
			fontBoundingBoxDescent: this.fontBoundingBoxDescent,
			hangingBaseline: this.hangingBaseline,
			ideographicBaseline: this.ideographicBaseline,
			emHeightAscent: this.emHeightAscent,
		};
	}
}

export { NSTextMetrics as TextMetrics };
