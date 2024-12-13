import { Direction, Matrix, Path, RectF } from '@nativescript-community/ui-canvas';
import { DOMMatrix } from './DOMMatrix';
import { getVectorAngle, normalizeVector, radiansToDegrees } from './helpers';

interface Point {
	x: number;
	y: number;
}

class NSPath2D {
	private readonly _path: Path;

	private _lastPoint: Point;

	constructor(path?: NSPath2D | string) {
		if (path instanceof NSPath2D) {
			this._path = new Path(path.native);

			if (path._lastPoint) {
				this._lastPoint = path._lastPoint;
			}
		} else if (typeof path === 'string') {
			this._path = new Path();
			console.warn('SVG path is not currently supported');
		} else {
			this._path = new Path();
		}
	}

	public addPath(path: NSPath2D, matrix?: DOMMatrix): void {
		if (path == null) {
			return;
		}

		const nativePath = path.native;

		if (matrix != null) {
			const nativeMatrix = new Matrix();

			nativeMatrix.setValues(matrix._getValues());
			nativePath.transform(nativeMatrix);
		}

		this._path.addPath(nativePath);
	}

	public closePath(): void {
		this._path.close();
	}

	public moveTo(x: number, y: number): void {
		this._path.moveTo(x, y);
		this._lastPoint = { x, y };
	}

	public lineTo(x: number, y: number): void {
		// Android canvas automatically sets default point to 0,0 while html canvas behaves differently
		if (this._lastPoint != null) {
			this._path.lineTo(x, y);
		} else {
			this._path.moveTo(x, y);
		}
		this._lastPoint = { x, y };
	}

	public bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
		// Android canvas automatically sets default point to 0,0 while html canvas behaves differently
		if (this._lastPoint == null) {
			this._path.moveTo(cp1x, cp1y);
		}

		this._path.cubicTo(cp1x, cp1y, cp2x, cp2y, x, y);
		this._lastPoint = { x, y };
	}

	public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
		// Android canvas automatically sets default point to 0,0 while html canvas behaves differently
		if (this._lastPoint == null) {
			this._path.moveTo(cpx, cpy);
		}

		this._path.quadTo(cpx, cpy, x, y);
		this._lastPoint = { x, y };
	}

	public arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
		if (this._path == null) {
			return;
		}

		const rect = new RectF(x - radius, y - radius, x + radius, y + radius);
		const endX = x + radius * Math.cos(endAngle);
		const endY = y + radius * Math.sin(endAngle);
		const endAngleDeg = radiansToDegrees(endAngle);

		let startAngleDeg = radiansToDegrees(startAngle);
		let sweepAngleDeg = endAngleDeg - startAngleDeg;

		// Note: Path arcTo sweep angle is treated with modulo 360, so update start and sweep angle to fixed values to create a full circle
		if (sweepAngleDeg >= 360) {
			startAngleDeg = -1;
			sweepAngleDeg = 360;
		}
		if (sweepAngleDeg <= -360) {
			startAngleDeg = 1;
			sweepAngleDeg = -360;
		}

		if (counterclockwise) {
			if (sweepAngleDeg > 0 && sweepAngleDeg < 360) {
				sweepAngleDeg -= 360;
			}
		}

		// We use arcTo as this is how CanvasRenderingContext2D.arc() acts
		// See https://developer.android.com/reference/android/graphics/Path#arcTo(android.graphics.RectF,%20float,%20float)
		this._path.arcTo(rect, startAngleDeg, sweepAngleDeg);
		this._lastPoint = { x: endX, y: endY };
	}

	/**
	 * Source: https://github.com/zenozeng/svgcanvas
	 *
	 * @param x1
	 * @param y1
	 * @param x2
	 * @param y2
	 * @param radius
	 * @returns
	 */
	public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
		if (this._path == null) {
			return;
		}

		// Let the point (x0, y0) be the last point in the subpath.
		const x0 = this._lastPoint?.x ?? 0;
		const y0 = this._lastPoint?.y ?? 0;

		// First ensure there is a subpath for (x1, y1).
		if (x0 == null || y0 == null) {
			return;
		}

		// Negative values for radius must cause the implementation to throw an IndexSizeError exception.
		if (radius < 0) {
			throw new Error('IndexSizeError: The radius provided (' + radius + ') is negative.');
		}

		// If the point (x0, y0) is equal to the point (x1, y1),
		// or if the point (x1, y1) is equal to the point (x2, y2),
		// or if the radius radius is zero,
		// then the method must add the point (x1, y1) to the subpath,
		// and connect that point to the previous point (x0, y0) by a straight line.
		if ((x0 === x1 && y0 === y1) || (x1 === x2 && y1 === y2) || radius === 0) {
			this.lineTo(x1, y1);
			return;
		}

		// Otherwise, if the points (x0, y0), (x1, y1), and (x2, y2) all lie on a single straight line,
		// then the method must add the point (x1, y1) to the subpath,
		// and connect that point to the previous point (x0, y0) by a straight line.
		const unit_vec_p1_p0 = normalizeVector([x0 - x1, y0 - y1]);
		const unit_vec_p1_p2 = normalizeVector([x2 - x1, y2 - y1]);
		if (unit_vec_p1_p0[0] * unit_vec_p1_p2[1] === unit_vec_p1_p0[1] * unit_vec_p1_p2[0]) {
			this.lineTo(x1, y1);
			return;
		}

		// Otherwise, let The Arc be the shortest arc given by circumference of the circle that has radius radius,
		// and that has one point tangent to the half-infinite line that crosses the point (x0, y0) and ends at the point (x1, y1),
		// and that has a different point tangent to the half-infinite line that ends at the point (x1, y1), and crosses the point (x2, y2).
		// The points at which this circle touches these two lines are called the start and end tangent points respectively.

		// note that both vectors are unit vectors, so the length is 1
		const cos = unit_vec_p1_p0[0] * unit_vec_p1_p2[0] + unit_vec_p1_p0[1] * unit_vec_p1_p2[1];
		const theta = Math.acos(Math.abs(cos));

		// Calculate origin
		const unit_vec_p1_origin = normalizeVector([unit_vec_p1_p0[0] + unit_vec_p1_p2[0], unit_vec_p1_p0[1] + unit_vec_p1_p2[1]]);
		const len_p1_origin = radius / Math.sin(theta / 2);
		const x = x1 + len_p1_origin * unit_vec_p1_origin[0];
		const y = y1 + len_p1_origin * unit_vec_p1_origin[1];

		// Calculate start angle and end angle
		// rotate 90deg clockwise (note that y axis points to its down)
		const unit_vec_origin_start_tangent = [-unit_vec_p1_p0[1], unit_vec_p1_p0[0]];
		// rotate 90deg counter clockwise (note that y axis points to its down)
		const unit_vec_origin_end_tangent = [unit_vec_p1_p2[1], -unit_vec_p1_p2[0]];
		const startAngle = getVectorAngle(unit_vec_origin_start_tangent);
		const endAngle = getVectorAngle(unit_vec_origin_end_tangent);

		// Connect the point (x0, y0) to the start tangent point by a straight line
		this.lineTo(x + unit_vec_origin_start_tangent[0] * radius, y + unit_vec_origin_start_tangent[1] * radius);

		// Connect the start tangent point to the end tangent point by arc
		// and adding the end tangent point to the subpath.
		this.arc(x, y, radius, startAngle, endAngle);
	}

	public ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
		if (this._path == null) {
			return;
		}

		const endX = x + Math.cos(-rotation) * radiusX * Math.cos(endAngle) + Math.sin(-rotation) * radiusY * Math.sin(endAngle);
		const endY = y - Math.sin(-rotation) * radiusX * Math.cos(endAngle) + Math.cos(-rotation) * radiusY * Math.sin(endAngle);

		// These are the angles to use
		const startAngleDeg = radiansToDegrees(startAngle);
		const endAngleDeg = radiansToDegrees(endAngle);
		const rotationDeg = radiansToDegrees(rotation);
		const rect = new RectF(x - radiusX, y - radiusY, x + radiusX, y + radiusY);
		let sweepAngleDeg = endAngleDeg - startAngleDeg;

		if (counterclockwise) {
			if (sweepAngleDeg > 0 && sweepAngleDeg < 360) {
				sweepAngleDeg -= 360;
			}
		}

		// In the case of rotation, we isolate the ellipse in a path of its own in order to apply transform without affecting other path points
		if (rotationDeg != 0) {
			const ellipticPath = new Path();
			const matrix = new Matrix();

			ellipticPath.addArc(rect, startAngleDeg, sweepAngleDeg);
			matrix.setRotate(rotationDeg, x, y);
			ellipticPath.transform(matrix);

			this._path.addPath(ellipticPath);
		} else {
			this._path.addArc(rect, startAngleDeg, sweepAngleDeg);
		}

		this._lastPoint = { x: endX, y: endY };
	}

	public rect(x: number, y: number, width: number, height: number): void {
		const right = x + width;
		const bottom = y + height;

		this._path.addRect(new RectF(x, y, right, bottom), Direction.CW);
		this._lastPoint = { x: right, y: bottom };
	}

	public roundRect(x: number, y: number, width: number, height: number, radii: number | number[]) {
		const right = x + width;
		const bottom = y + height;
		const nativeRadii = new Array<number>(8);

		if (!Array.isArray(radii)) {
			nativeRadii.fill(radii);
		} else {
			if (radii.length === 1) {
				nativeRadii.fill(radii[0]);
			} else if (radii.length === 2) {
				nativeRadii[0] = radii[0];
				nativeRadii[1] = radii[0];
				nativeRadii[2] = radii[1];
				nativeRadii[3] = radii[1];
				nativeRadii[4] = radii[0];
				nativeRadii[5] = radii[0];
				nativeRadii[6] = radii[1];
				nativeRadii[7] = radii[1];
			} else if (radii.length === 3) {
				nativeRadii[0] = radii[0];
				nativeRadii[1] = radii[0];
				nativeRadii[2] = radii[1];
				nativeRadii[3] = radii[1];
				nativeRadii[4] = radii[2];
				nativeRadii[5] = radii[2];
				nativeRadii[6] = radii[1];
				nativeRadii[7] = radii[1];
			} else if (radii.length === 4) {
				nativeRadii[0] = radii[0];
				nativeRadii[1] = radii[0];
				nativeRadii[2] = radii[1];
				nativeRadii[3] = radii[1];
				nativeRadii[4] = radii[2];
				nativeRadii[5] = radii[2];
				nativeRadii[6] = radii[3];
				nativeRadii[7] = radii[3];
			}
		}

		// iOS does not support multiple radii
		this._path.addRoundRect(new RectF(x, y, right, bottom), __ANDROID__ ? nativeRadii : [nativeRadii[0], nativeRadii[1]], Direction.CW);
		this._lastPoint = { x: right, y: bottom };
	}

	public get native(): Path {
		return this._path;
	}
}

export { NSPath2D as Path2D };
