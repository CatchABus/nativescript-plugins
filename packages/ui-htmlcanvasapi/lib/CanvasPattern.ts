import { PatternData } from '../CanvasTypes';
import { DOMMatrix } from './DOMMatrix';

class NSCanvasPattern {
	private _data?: PatternData;
	private _matrix: DOMMatrix;

	constructor(data?: PatternData) {
		this._data = data;
	}

	public _getPatternData(): PatternData {
		return this._data;
	}

	public _getTransform(): DOMMatrix {
		return this._matrix;
	}

	public setTransform(matrix: DOMMatrix): void {
		this._matrix = matrix;
	}
}

export { NSCanvasPattern as CanvasPattern };
