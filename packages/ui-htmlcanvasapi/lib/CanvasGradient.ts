import { LinearGradient, RadialGradient, TileMode } from '@nativescript-community/ui-canvas';
import { GradientData, LinearGradientParams, RadialGradientParams } from '../CanvasTypes';

class NSCanvasGradient {
	private readonly _colors: string[] = [];
	private readonly _offsets: number[] = [];

	private _data?: GradientData;

	constructor(data?: GradientData) {
		this._data = data;
	}

	public _getGradientData(): GradientData {
		return this._data;
	}

	public get _gradientColors(): string[] {
		return this._colors;
	}

	public get _gradientOffsets(): number[] {
		return this._offsets;
	}

	public addColorStop(offset: number, color: string): void {
		this._colors.push(color);
		this._offsets.push(offset);
	}
}

export { NSCanvasGradient as CanvasGradient };
