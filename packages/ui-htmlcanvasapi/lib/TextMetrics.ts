class NSTextMetrics {
	declare readonly width: number;
	declare readonly actualBoundingBoxLeft: number;
	declare readonly actualBoundingBoxRight: number;
	declare readonly actualBoundingBoxAscent: number;
	declare readonly actualBoundingBoxDescent: number;
	declare readonly fontBoundingBoxAscent: number;
	declare readonly fontBoundingBoxDescent: number;
	declare readonly emHeightAscent: number;
	declare readonly emHeightDescent: number;
	declare readonly hangingBaseline: number;
	declare readonly alphabeticBaseline: number;
	declare readonly ideographicBaseline: number;

	constructor() {
		throw new TypeError(`Failed to construct '${this.constructor.name}': Illegal constructor`);
	}
}

export { NSTextMetrics as TextMetrics };
