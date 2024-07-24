import { BitmapShader, Canvas, CanvasView, createRect, createRectF, DashPathEffect, FillType, LinearGradient, Matrix, Paint, Path, PorterDuffMode, PorterDuffXfermode, RadialGradient, Rect, Shader, Style, TileMode } from '@nativescript-community/ui-canvas';
import { Font, ImageSource, Screen, View } from '@nativescript/core';
import { DOMMatrix } from '../DOMMatrix';
import { Path2D } from '../Path2D';
import { getNativeCompositeOperation, getNativeFillRule, getNativeLineCap, getNativeLineJoin, getNativeTextAlignment, radiansToDegrees } from '../helpers';
import { CanvasCompositeOperation, CanvasContextRestorables, CanvasRenderingContextDefaults, FillRule, FontKerning, FontStretch, FontVariantCaps, GradientData, ImageSmoothingQuality, LinearGradientParams, LineCap, LineJoin, PatternRepetition, RadialGradientParams, TextAlignment, TextBaseline, TextDirection, TextRendering } from '../../CanvasTypes';
import { parseFont } from '@nativescript/core/ui/styling/font';
import { TextMetrics } from '../TextMetrics';
import { CanvasGradient } from '../CanvasGradient';
import { CanvasPattern } from '../CanvasPattern';
import { HTMLCanvasElement } from '../HTMLCanvasElement';
import { AbstractRenderingContext } from './AbstractRenderingContext';

const defaults: CanvasRenderingContextDefaults = {
	strokeStyle: '#000',
	fillStyle: '#000',
	globalAlpha: 1.0,
	lineWidth: 1.0,
	lineCap: 'butt',
	lineJoin: 'miter',
	miterLimit: 10.0,
	lineDashOffset: 0.0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	shadowBlur: 0,
	shadowColor: 'transparent',
	globalCompositeOperation: 'source-over',
	font: '10px sans-serif',
	textAlign: 'start',
	textBaseline: 'alphabetic',
	direction: 'inherit',
	imageSmoothingEnabled: true,
	letterSpacing: '0px',
	imageSmoothingQuality: 'low',
	fontKerning: 'auto',
	fontStretch: 'normal',
	fontVariantCaps: 'normal',
	textRendering: 'auto',
	wordSpacing: '0px',
};

class CanvasRenderingContext2D extends AbstractRenderingContext {
	/**
	 * Not implemented
	 */
	public filter: any;
	public imageSmoothingQuality: ImageSmoothingQuality;
	public fontKerning: FontKerning;
	public fontStretch: FontStretch;
	public fontVariantCaps: FontVariantCaps;
	public textRendering: TextRendering;
	public wordSpacing: string;

	private _path: Path2D;
	private _stylePaint: Paint;
	private _domMatrix: DOMMatrix;
	private _font: Font;

	private _letterSpacing: string;

	private _restorableProps: CanvasContextRestorables = {
		strokeStyle: defaults.strokeStyle,
		fillStyle: defaults.fillStyle,
		globalAlpha: defaults.globalAlpha,
		lineWidth: defaults.lineWidth,
		lineCap: defaults.lineCap,
		lineJoin: defaults.lineJoin,
		miterLimit: defaults.miterLimit,
		lineDashOffset: defaults.lineDashOffset,
		shadowOffsetX: defaults.shadowOffsetX,
		shadowOffsetY: defaults.shadowOffsetY,
		shadowBlur: defaults.shadowBlur,
		shadowColor: defaults.shadowColor,
		globalCompositeOperation: defaults.globalCompositeOperation,
		font: defaults.font,
		textAlign: defaults.textAlign,
		textBaseline: defaults.textBaseline,
		direction: defaults.direction,
		imageSmoothingEnabled: defaults.imageSmoothingEnabled,
		setLineDash: undefined,
	};

	private _savedStates: CanvasContextRestorables[] = null;
	private _blendModeRestoreCount: number = 0;

	private readonly _clearPaint: Paint;

	constructor(element?: HTMLCanvasElement) {
		super(element);

		this._stylePaint = new Paint();
		this._domMatrix = new DOMMatrix();

		this._clearPaint = new Paint();
		this._clearPaint.setXfermode(new PorterDuffXfermode(PorterDuffMode.CLEAR));

		this._saveState();
		this._applyStyleDefaults();

		this.beginPath();
	}

	private _saveState(): void {
		if (this._savedStates == null) {
			this._savedStates = [];
		}
		this._savedStates.push(this._restorableProps);

		this._restorableProps = Object.assign({}, this._restorableProps);
	}

	private _applyStyleDefaults(): void {
		const entries = Object.entries(defaults);

		for (const [key, value] of entries) {
			this[key] = value;
		}
	}

	private _getTextBaseLineHeight(y: number): number {
		const fontMetrics = this._stylePaint.getFontMetrics();
		let baselineY: number;

		switch (this.textBaseline) {
			case 'top':
			case 'hanging':
				baselineY = y - fontMetrics.top - fontMetrics.bottom;
				break;
			case 'middle':
				baselineY = y - (fontMetrics.top + fontMetrics.bottom) / 2;
				break;
			case 'bottom':
			case 'ideographic':
				baselineY = y - fontMetrics.bottom;
				break;
			default:
				baselineY = y;
				break;
		}

		return baselineY;
	}

	private _createNativeShader(drawStyle: CanvasGradient | CanvasPattern): Shader {
		let shader: Shader;

		console.log(drawStyle);
		if (drawStyle instanceof CanvasGradient) {
			const { type, params } = drawStyle._getGradientData();

			switch (type) {
				case 'linear':
					const linearParams = <LinearGradientParams>params;
					shader = new LinearGradient(linearParams.x0, linearParams.y0, linearParams.x1, linearParams.y1, drawStyle._gradientColors, drawStyle._gradientOffsets, TileMode.CLAMP);
					break;
				case 'radial':
					console.warn('Radial gradient is not currently supported');
					break;
				case 'conic':
					console.warn('Conic gradient is not currently supported');
					break;
			}
		} else if (drawStyle instanceof CanvasPattern) {
			const { image, repetition } = drawStyle._getPatternData();
			const domMatrix = drawStyle._getTransform();

			let tileX: TileMode;
			let tileY: TileMode;

			switch (repetition) {
				case 'repeat':
					tileX = TileMode.REPEAT;
					tileY = TileMode.REPEAT;
					break;
				case 'repeat-x':
					tileX = TileMode.REPEAT;
					tileY = TileMode.CLAMP;
					break;
				case 'repeat-y':
					tileX = TileMode.CLAMP;
					tileY = TileMode.REPEAT;
					break;
				case 'no-repeat':
					tileX = TileMode.CLAMP;
					tileY = TileMode.CLAMP;
					break;
				default:
					tileX = TileMode.REPEAT;
					tileY = TileMode.REPEAT;
					break;
			}

			shader = new BitmapShader(image, tileX, tileY);

			if (domMatrix != null) {
				const matrix = new Matrix();
				matrix.setValues(domMatrix._getValues());

				shader.setLocalMatrix(matrix);
			}
		}

		return shader;
	}

	public get canvas(): any {
		return this._canvasElement;
	}

	public isContextLost(): boolean {
		return false;
	}

	public get nativeContext(): Canvas {
		return this._canvasElement.nativeContext;
	}

	public getContextAttributes(): any {
		console.warn('Method getContextAttributes is not implemented');
		return null;
	}

	public isPointInPath(x: number, y: number): boolean;
	public isPointInPath(x: number, y: number, fillRule: FillRule): boolean;
	public isPointInPath(path: Path2D, x: number, y: number): boolean;
	public isPointInPath(path: Path2D, x: number, y: number, fillRule: FillRule): boolean;

	public isPointInPath(...args: any): boolean {
		console.warn('Method isPointInPath is not implemented');
		return false;
	}

	public isPointInStroke(x: number, y: number): boolean;
	public isPointInStroke(path: Path2D, x: number, y: number): boolean;

	public isPointInStroke(...args: any): boolean {
		console.warn('Method isPointInStroke is not implemented');
		return false;
	}

	public createConicGradient(startAngle: number, x: number, y: number): any {
		console.warn('Method createConicGradient is not implemented');
		return null;
	}

	public createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
		return new CanvasGradient({
			type: 'linear',
			params: {
				x0,
				y0,
				x1,
				y1,
			},
		});
	}

	public createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
		return new CanvasGradient({
			type: 'radial',
			params: {
				x0,
				y0,
				r0,
				x1,
				y1,
				r1,
			},
		});
	}

	public createPattern(image: ImageSource | any, repetition: PatternRepetition): CanvasPattern {
		return new CanvasPattern({
			image,
			repetition: repetition || 'repeat',
		});
	}

	public createImageData(width: number, height: number): any;
	public createImageData(width: number, height: number, settings: any): any;
	public createImageData(imagedata: any): any;

	public createImageData(...args: any) {
		console.warn('Method createImageData is not implemented');
		return null;
	}

	public getImageData(sx: number, sy: number, sw: number, sh: number, settings: any): any {
		console.warn('Method getImageData is not implemented');
		return null;
	}

	public putImageData(imageData: any, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): any {
		console.warn('Method putImageData is not implemented');
		return null;
	}

	public drawFocusIfNeeded(element: View | any): void;
	public drawFocusIfNeeded(path: Path2D, element: View | any): void;

	public drawFocusIfNeeded(...args: any): void {
		console.warn('Method drawFocusIfNeeded is not implemented');
	}

	public beginPath(): void {
		this._path = new Path2D();
	}

	public closePath(): void {
		this._path.closePath();
	}

	public moveTo(x: number, y: number): void {
		this._path.moveTo(x, y);
	}

	public lineTo(x: number, y: number): void {
		this._path.lineTo(x, y);
	}

	public rect(x: number, y: number, width: number, height: number): void {
		this._path.rect(x, y, width, height);
	}

	public roundRect(x: number, y: number, width: number, height: number, radii: number | number[]) {
		this._path.roundRect(x, y, width, height, radii);
	}

	public arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
		this._path.arc(x, y, radius, startAngle, endAngle, counterclockwise);
	}

	public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
		this._path.arcTo(x1, y1, x2, y2, radius);
	}

	public ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean = false): void {
		this._path.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
	}

	public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
		this._path.quadraticCurveTo(cpx, cpy, x, y);
	}

	public bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
		this._path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	public clearRect(x: number, y: number, width: number, height: number): void {
		const context = this.nativeContext;
		if (context) {
			context.drawRect(x, y, width, height, this._clearPaint);
		}
	}

	public fillRect(x: number, y: number, width: number, height: number): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.FILL);

		if (this.fillStyle instanceof CanvasGradient || this.fillStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.fillStyle));
		} else {
			this._stylePaint.setColor(this.fillStyle);
		}

		context.drawRect(createRect(x, y, width, height), this._stylePaint);
	}

	public fillText(text: string, x: number, y: number, maxWidth?: number): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.FILL);

		if (this.fillStyle instanceof CanvasGradient || this.fillStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.fillStyle));
		} else {
			this._stylePaint.setColor(this.fillStyle);
		}

		context.drawText(text, x, this._getTextBaseLineHeight(y), this._stylePaint);
	}

	public strokeRect(x: number, y: number, width: number, height: number): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.STROKE);

		if (this.strokeStyle instanceof CanvasGradient || this.strokeStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.strokeStyle));
		} else {
			this._stylePaint.setColor(this.strokeStyle);
		}

		context.drawRect(createRect(x, y, width, height), this._stylePaint);
	}

	public strokeText(text: string, x: number, y: number, maxWidth?: number): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.STROKE);

		if (this.strokeStyle instanceof CanvasGradient || this.strokeStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.strokeStyle));
		} else {
			this._stylePaint.setColor(this.strokeStyle);
		}

		context.drawText(text, x, this._getTextBaseLineHeight(y), this._stylePaint);
	}

	public fill(): void;
	public fill(path: Path2D): void;
	public fill(fillRule: FillRule): void;
	public fill(path: Path2D, fillRule: FillRule): void;

	public fill(...args: any): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.FILL);

		if (this.fillStyle instanceof CanvasGradient || this.fillStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.fillStyle));
		} else {
			this._stylePaint.setColor(this.fillStyle);
		}

		if (args.length == 0) {
			context.drawPath(this._path.native, this._stylePaint);
		} else if (args.length == 1) {
			const arg = args[0];

			if (arg instanceof Path2D) {
				context.drawPath(arg.native, this._stylePaint);
			} else {
				this._path.native.setFillType(getNativeFillRule(arg));
				context.drawPath(this._path.native, this._stylePaint);
				this._path.native.setFillType(FillType.WINDING);
			}
		} else {
			const [path, fillRule]: [Path2D, FillRule] = args;

			path.native.setFillType(getNativeFillRule(fillRule));
			context.drawPath(path.native, this._stylePaint);
			path.native.setFillType(FillType.WINDING);
		}
	}

	public clip(): void;
	public clip(path: Path2D): void;
	public clip(fillRule: FillRule): void;
	public clip(path: Path2D, fillRule: FillRule): void;

	public clip(...args: any): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		if (args.length == 0) {
			context.clipPath(this._path.native);
		} else if (args.length == 1) {
			const arg = args[0];

			if (arg instanceof Path2D) {
				context.clipPath(arg.native);
			} else {
				this._path.native.setFillType(getNativeFillRule(arg));
				context.clipPath(this._path.native);
				this._path.native.setFillType(FillType.WINDING);
			}
		} else {
			const [path, fillRule]: [Path2D, FillRule] = args;

			path.native.setFillType(getNativeFillRule(fillRule));
			context.clipPath(path.native);
			path.native.setFillType(FillType.WINDING);
		}
	}

	// Declare any type for image so that libraries don't complain about incompatible signature
	public drawImage(image: ImageSource | any, dx: number, dy: number);
	public drawImage(image: ImageSource | any, dx: number, dy: number, dWidth: number, dHeight: number);
	public drawImage(image: ImageSource | any, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number);

	public drawImage(...args: any): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		const imageSource: ImageSource = args[0];

		if (args.length == 3) {
			context.drawBitmap(imageSource, args[1], args[2], this._stylePaint);
		} else if (args.length == 5) {
			const dst = createRectF(args[1], args[2], args[3], args[4]);
			context.drawBitmap(imageSource, null, dst, this._stylePaint);
		} else {
			const src = createRect(args[1], args[2], args[3], args[4]);
			const dst = createRectF(args[5], args[6], args[7], args[8]);
			context.drawBitmap(imageSource, src, dst, this._stylePaint);
		}
	}

	public measureText(text: string): TextMetrics {
		const width = this._stylePaint.measureText(text);
		const fontMetrics = this._stylePaint.getFontMetrics();
		const textBounds = new Rect(0, 0, 0, 0);

		// Populate text bounds
		this._stylePaint.getTextBounds(text, 0, text.length, textBounds);

		return new TextMetrics({
			width,
			actualBoundingBoxLeft: textBounds.left * -1,
			actualBoundingBoxRight: textBounds.right,
			actualBoundingBoxAscent: textBounds.top * -1,
			actualBoundingBoxDescent: textBounds.bottom,
			fontBoundingBoxAscent: fontMetrics.ascent * -1,
			fontBoundingBoxDescent: fontMetrics.descent,
			// Not currently supported
			hangingBaseline: 0,
			ideographicBaseline: 0,
			emHeightAscent: 0,
		});
	}

	public scale(x: number, y: number): void {
		const context = this.nativeContext;
		if (context) {
			context.scale(x, y);
		}
	}

	public translate(x: number, y: number): void {
		const context = this.nativeContext;
		if (context) {
			context.translate(x, y);
		}
	}

	public rotate(angle: number): void {
		const context = this.nativeContext;
		if (context) {
			context.rotate(radiansToDegrees(angle));
		}
	}

	public stroke(path?: Path2D): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._stylePaint.setStyle(Style.STROKE);

		if (this.strokeStyle instanceof CanvasGradient || this.strokeStyle instanceof CanvasPattern) {
			this._stylePaint.setShader(this._createNativeShader(this.strokeStyle));
		} else {
			this._stylePaint.setColor(this.strokeStyle);
		}

		if (path != null) {
			context.drawPath(path.native, this._stylePaint);
		} else {
			context.drawPath(this._path.native, this._stylePaint);
		}
	}

	public save(): void {
		const context = this.nativeContext;
		if (context) {
			context.save();
			this._saveState();
		}
	}

	public restore(): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		try {
			context.restore();

			if (this._savedStates?.length) {
				// Some values are not savable so keep them even after restore
				this._stylePaint = new Paint(this._stylePaint);

				this._restorableProps = this._savedStates.pop();

				const entries = Object.entries(this._restorableProps);

				for (const [key, value] of entries) {
					if (typeof this[key] === 'function') {
						this[key](value);
					} else {
						this[key] = value;
					}
				}

				const matrix = new Matrix();
				// @ts-ignore
				matrix.set(context.getMatrix());
				matrix.getValues(this._domMatrix._getValues());

				if (__ANDROID__) {
					// dp to dip conversion
					const deviceScale = Screen.mainScreen.scale - 1;
					this._domMatrix.a -= deviceScale;
					this._domMatrix.d -= deviceScale;
				}

				if (this._savedStates.length === 0) {
					this._savedStates = null;
				}
			}
		} catch (err) {}
	}

	public reset(): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		this._path.native.reset();

		this._stylePaint = new Paint();
		this._applyStyleDefaults();

		this.clearRect(0, 0, context.getWidth(), context.getHeight());
	}

	public transform(a: number, b: number, c: number, d: number, e: number, f: number): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		const matrix = new Matrix();
		const values = this._domMatrix._getValues();

		values[0] = a;
		values[1] = c;
		values[2] = e;
		values[3] = b;
		values[4] = d;
		values[5] = f;
		values[6] = 0;
		values[7] = 0;
		values[8] = 1;

		matrix.setValues(values);
		context.concat(matrix);
	}

	public resetTransform(): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		const matrix = new Matrix();

		// @ts-ignore
		context.setMatrix(matrix);
		this._domMatrix._reset();

		if (__ANDROID__) {
			// dp to dip conversion
			const { scale } = Screen.mainScreen;
			context.scale(scale, scale);
		}
	}

	public setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
	public setTransform(matrix: DOMMatrix): void;

	public setTransform(...args: any): void {
		const context = this.nativeContext;
		if (!context) {
			return;
		}

		const matrix = new Matrix();
		const values = this._domMatrix._getValues();

		let a, b, c, d, e, f;

		if (args.length === 1 && args[0] instanceof DOMMatrix) {
			a = args[0].a;
			b = args[0].b;
			c = args[0].c;
			d = args[0].d;
			e = args[0].e;
			f = args[0].f;
		} else {
			a = args[0];
			b = args[1];
			c = args[2];
			d = args[3];
			e = args[4];
			f = args[5];
		}

		values[0] = a;
		values[1] = c;
		values[2] = e;
		values[3] = b;
		values[4] = d;
		values[5] = f;
		values[6] = 0;
		values[7] = 0;
		values[8] = 1;

		matrix.setValues(values);
		// @ts-ignore
		context.setMatrix(matrix);

		if (__ANDROID__) {
			// dp to dip conversion
			const { scale } = Screen.mainScreen;
			context.scale(scale, scale);
		}
	}

	public getTransform(): DOMMatrix | any {
		return this._domMatrix;
	}

	public getLineDash(): number[] {
		return this._restorableProps.setLineDash;
	}

	public setLineDash(segments: number[]): void {
		this._restorableProps.setLineDash = segments;

		this._stylePaint.setPathEffect(segments?.length ? new DashPathEffect(segments, this.lineDashOffset) : null);
	}

	public get strokeStyle(): string | CanvasGradient | CanvasPattern {
		return this._restorableProps.strokeStyle;
	}

	public set strokeStyle(val: string | CanvasGradient | CanvasPattern) {
		this._restorableProps.strokeStyle = val;
	}

	public get fillStyle(): string | CanvasGradient | CanvasPattern {
		return this._restorableProps.fillStyle;
	}

	public set fillStyle(val: string | CanvasGradient | CanvasPattern) {
		this._restorableProps.fillStyle = val;
	}

	public get globalAlpha(): number {
		return this._restorableProps.globalAlpha;
	}

	public set globalAlpha(val: number) {
		this._restorableProps.globalAlpha = val;

		this._stylePaint.setAlpha(this.globalAlpha * 255);
	}

	public get lineWidth(): number {
		return this._restorableProps.lineWidth;
	}

	public set lineWidth(val: number) {
		this._restorableProps.lineWidth = val;

		this._stylePaint.setStrokeWidth(val);
	}

	public get lineCap(): LineCap {
		return this._restorableProps.lineCap;
	}

	public set lineCap(val: LineCap) {
		this._restorableProps.lineCap = val;

		this._stylePaint.setStrokeCap(getNativeLineCap(val));
	}

	public get lineJoin(): LineJoin {
		return this._restorableProps.lineJoin;
	}

	public set lineJoin(val: LineJoin) {
		this._restorableProps.lineJoin = val;

		this._stylePaint.setStrokeJoin(getNativeLineJoin(val));
	}

	public get miterLimit(): number {
		return this._restorableProps.miterLimit;
	}

	public set miterLimit(val: number) {
		this._restorableProps.miterLimit = val;

		this._stylePaint.setStrokeMiter(val);
	}

	public get lineDashOffset(): number {
		return this._restorableProps.lineDashOffset;
	}

	public set lineDashOffset(val: number) {
		this._restorableProps.lineDashOffset = val;

		this._stylePaint.setPathEffect(this.getLineDash()?.length ? new DashPathEffect(this.getLineDash(), val) : null);
	}

	public get shadowOffsetX(): number {
		return this._restorableProps.shadowOffsetX;
	}

	public set shadowOffsetX(val: number) {
		this._restorableProps.shadowOffsetX = val;

		if (this.shadowColor != null) {
			this._stylePaint.setShadowLayer(this.shadowBlur, val, this.shadowOffsetY, this.shadowColor);
		}
	}

	public get shadowOffsetY(): number {
		return this._restorableProps.shadowOffsetY;
	}

	public set shadowOffsetY(val: number) {
		this._restorableProps.shadowOffsetY = val;

		if (this.shadowColor != null) {
			this._stylePaint.setShadowLayer(this.shadowBlur, this.shadowOffsetX, val, this.shadowColor);
		}
	}

	public get shadowBlur(): number {
		return this._restorableProps.shadowBlur;
	}

	public set shadowBlur(val: number) {
		this._restorableProps.shadowBlur = val;

		if (this.shadowColor != null) {
			this._stylePaint.setShadowLayer(val, this.shadowOffsetX, this.shadowOffsetY, this.shadowColor);
		}
	}

	public get shadowColor(): string {
		return this._restorableProps.shadowColor;
	}

	public set shadowColor(val: string) {
		this._restorableProps.shadowColor = val;

		this._stylePaint.setShadowLayer(this.shadowBlur, this.shadowOffsetX, this.shadowOffsetY, val);
	}

	public get globalCompositeOperation(): CanvasCompositeOperation {
		return this._restorableProps.globalCompositeOperation;
	}

	public set globalCompositeOperation(val: CanvasCompositeOperation) {
		this._restorableProps.globalCompositeOperation = val;

		this._stylePaint.setXfermode(val != null ? new PorterDuffXfermode(getNativeCompositeOperation(val)) : null);
	}

	public get font(): string {
		return this._restorableProps.font;
	}

	public set font(val: string) {
		this._restorableProps.font = val;

		const parsedFont = parseFont(val);
		const fontSize = parseFloat(parsedFont.fontSize);
		const font = new Font(parsedFont.fontFamily, fontSize, parsedFont.fontStyle, parsedFont.fontWeight);

		this._stylePaint.setFont(font);
		this._font = font;

		// Some properties rely on font size
		this.letterSpacing = this.letterSpacing;
	}

	public get textAlign(): TextAlignment {
		return this._restorableProps.textAlign;
	}

	public set textAlign(val: TextAlignment) {
		this._restorableProps.textAlign = val;

		this._stylePaint.setTextAlign(getNativeTextAlignment(val, this.direction));
	}

	public get textBaseline(): TextBaseline {
		return this._restorableProps.textBaseline;
	}

	public set textBaseline(val: TextBaseline) {
		this._restorableProps.textBaseline = val;
	}

	public get direction(): TextDirection {
		return this._restorableProps.direction;
	}

	public set direction(val: TextDirection) {
		this._restorableProps.direction = val;
	}

	public get imageSmoothingEnabled(): boolean {
		return this._restorableProps.imageSmoothingEnabled;
	}

	public set imageSmoothingEnabled(val: boolean) {
		this._restorableProps.imageSmoothingEnabled = val;

		this._stylePaint.setAntiAlias(val);
	}

	public get letterSpacing(): string {
		return this._letterSpacing;
	}

	public set letterSpacing(val: string) {
		this._letterSpacing = val;

		const letterSpacingValue = parseFloat(val) / (this._font.fontSize || 1);
		this._stylePaint.setLetterSpacing(letterSpacingValue);
	}
}

export { CanvasRenderingContext2D };
