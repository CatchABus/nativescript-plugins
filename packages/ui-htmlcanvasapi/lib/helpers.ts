import { Align, Cap, FillType, Join, PorterDuffMode } from '@nativescript-community/ui-canvas';
import { CanvasCompositeOperation, FillRule, LineCap, LineJoin, TextAlignment, TextDirection } from '../CanvasTypes';

function degreesToRadians(degrees: number): number {
	return degrees * (Math.PI / 180);
}

function radiansToDegrees(rad: number): number {
	return rad / (Math.PI / 180);
}

function normalizeVector(vector: number[]): number[] {
	const len = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
	return [vector[0] / len, vector[1] / len];
}

function getVectorAngle(vector: number[]): number {
	// get angle (clockwise) between vector and (1, 0)
	const [x, y] = vector;

	// note that y axis points to its down
	return y >= 0 ? Math.acos(x) : -Math.acos(x);
}

function getNativeCompositeOperation(op: CanvasCompositeOperation): PorterDuffMode {
	let pdm: PorterDuffMode;

	switch (op) {
		case 'source-over':
			pdm = PorterDuffMode.SRC_OVER;
			break;
		case 'source-in':
			pdm = PorterDuffMode.SRC_IN;
			break;
		case 'source-out':
			pdm = PorterDuffMode.SRC_OUT;
			break;
		case 'source-atop':
			pdm = PorterDuffMode.SRC_ATOP;
			break;
		case 'destination-over':
			pdm = PorterDuffMode.DST_OVER;
			break;
		case 'destination-in':
			pdm = PorterDuffMode.DST_IN;
			break;
		case 'destination-out':
			pdm = PorterDuffMode.DST_OUT;
			break;
		case 'destination-atop':
			pdm = PorterDuffMode.DST_ATOP;
			break;
		case 'xor':
			pdm = PorterDuffMode.XOR;
			break;
		case 'saturation':
			pdm = PorterDuffMode.ADD;
			break;
		case 'multiply':
			pdm = PorterDuffMode.MULTIPLY;
			break;
		case 'darken':
			pdm = PorterDuffMode.DARKEN;
			break;
		case 'lighten':
			pdm = PorterDuffMode.LIGHTEN;
			break;
		case 'overlay':
			pdm = PorterDuffMode.OVERLAY;
			break;
		case 'screen':
			pdm = PorterDuffMode.SCREEN;
			break;
		default:
			pdm = PorterDuffMode.SRC_OVER;
			break;
	}

	return pdm;
}

function getNativeFillRule(fillRule: FillRule): FillType {
	let fillType: FillType;

	switch (fillRule) {
		case 'nonzero':
			fillType = FillType.WINDING;
			break;
		case 'evenodd':
			fillType = FillType.EVEN_ODD;
			break;
		default:
			fillType = FillType.WINDING;
			break;
	}

	return fillType;
}

function getNativeTextAlignment(alignment: TextAlignment, direction: TextDirection): Align {
	let nativeAlignment: Align;

	switch (alignment) {
		case 'start':
			nativeAlignment = direction === 'rtl' ? Align.RIGHT : Align.LEFT;
			break;
		case 'end':
			nativeAlignment = direction === 'rtl' ? Align.LEFT : Align.RIGHT;
			break;
		case 'left':
			nativeAlignment = Align.LEFT;
			break;
		case 'right':
			nativeAlignment = Align.RIGHT;
			break;
		case 'center':
			nativeAlignment = Align.CENTER;
			break;
		default:
			nativeAlignment = Align.LEFT;
			break;
	}

	return nativeAlignment;
}

function getNativeLineCap(lineCap: LineCap): Cap {
	let cap: Cap;

	switch (lineCap) {
		case 'butt':
			cap = Cap.BUTT;
			break;
		case 'round':
			cap = Cap.ROUND;
			break;
		case 'square':
			cap = Cap.SQUARE;
			break;
		default:
			cap = Cap.BUTT;
			break;
	}

	return cap;
}

function getNativeLineJoin(lineJoin: LineJoin): Join {
	let join: Join;

	switch (lineJoin) {
		case 'round':
			join = Join.ROUND;
			break;
		case 'bevel':
			join = Join.BEVEL;
			break;
		case 'miter':
			join = Join.MITER;
			break;
		default:
			join = Join.ROUND;
			break;
	}

	return join;
}

export { degreesToRadians, radiansToDegrees, normalizeVector, getVectorAngle, getNativeCompositeOperation, getNativeFillRule, getNativeTextAlignment, getNativeLineCap, getNativeLineJoin };
