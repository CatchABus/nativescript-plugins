import { Color, CssProperty, LayoutBase, Length, PercentLength, Style, Utils } from '@nativescript/core';
import { Canvas, createRectF, Direction, Paint, Path, Style as drawStyle, TileMode, LinearGradient } from '@nativescript-community/ui-canvas';
import { NeumorphicLayout } from '.';
import { LinearGradient as NSLinearGradient } from '@nativescript/core/ui/styling/linear-gradient';

const stylePropertiesMap = new Map<string, CssProperty<Style, any>>();
const defaultColor: string = '#ffffff';

export enum NeumorphicType {
	FLAT = 'flat',
	PRESSED = 'pressed',
	PRESSED_IN_OUT = 'pressed-in-out',
}

stylePropertiesMap.set(
	'lightShadowColor',
	new CssProperty<Style, Color>({
		name: 'lightShadowColor',
		cssName: 'light-shadow-color',
		defaultValue: new Color(defaultColor),
		equalityComparer: Color.equals,
		valueConverter: (value) => new Color(value),
	})
);
export const lightShadowColorProperty = stylePropertiesMap.get('lightShadowColor');

stylePropertiesMap.set(
	'darkShadowColor',
	new CssProperty<Style, Color>({
		name: 'darkShadowColor',
		cssName: 'dark-shadow-color',
		defaultValue: new Color('#d9d9d9'),
		equalityComparer: Color.equals,
		valueConverter: (value) => new Color(value),
	})
);
export const darkShadowColorProperty = stylePropertiesMap.get('darkShadowColor');

stylePropertiesMap.set(
	'neumorphism',
	new CssProperty<Style, string>({
		name: 'neumorphism',
		cssName: 'neumorphism',
		defaultValue: null,
	})
);
export const neumorphismProperty = stylePropertiesMap.get('neumorphism');

stylePropertiesMap.set(
	'shadowDistance',
	new CssProperty<Style, number>({
		name: 'shadowDistance',
		cssName: 'shadow-distance',
		defaultValue: 10,
		valueConverter: parseFloat,
	})
);
export const shadowDistanceProperty = stylePropertiesMap.get('shadowDistance');

stylePropertiesMap.set(
	'shadowRadius',
	new CssProperty<Style, number>({
		name: 'shadowRadius',
		cssName: 'shadow-radius',
		valueConverter: parseFloat,
	})
);
export const shadowRadiusProperty = stylePropertiesMap.get('shadowRadius');

export class NeumorphicCanvas extends Canvas {
	private readonly mViewRef: WeakRef<NeumorphicLayout>;

	private path: Path;
	private innerShadowPath: Path;
	private paintStroke: Paint;

	private readonly paintBase: Paint;
	private readonly paintDark: Paint;
	private readonly paintLight: Paint;

	constructor(view: NeumorphicLayout) {
		super(0, 0);

		this.mViewRef = new WeakRef<NeumorphicLayout>(view);
		this.paintBase = new Paint();
		this.paintBase.setAntiAlias(true);
		this.paintDark = new Paint();
		this.paintDark.setAntiAlias(true);
		this.paintLight = new Paint();
		this.paintLight.setAntiAlias(true);
	}

	public manipulateColor(color: Color, factor: number): Color {
		const a = color.a;
		const r = Math.round(color.r * factor);
		const g = Math.round(color.g * factor);
		const b = Math.round(color.b * factor);
		return new Color(a, Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
	}

	public getBasePaint(): Paint {
		return this.paintBase;
	}

	public onDraw() {
		const view = this.mViewRef && this.mViewRef.get();
		const state = view.neumorphism;

		if (!state) {
			return;
		}

		// Stroke paint will be set at a later stage if needed
		this.paintStroke = null;

		if (state == NeumorphicType.PRESSED_IN_OUT) {
			if (__ANDROID__) {
				this.initShape(NeumorphicType.FLAT);
				this.initPaints(NeumorphicType.FLAT);

				this.drawPath(this.path, this.paintDark);
				this.drawPath(this.path, this.paintLight);
				this.drawPath(this.path, this.paintBase);
			}

			this.initShape(NeumorphicType.PRESSED);
			this.initPaints(NeumorphicType.PRESSED);

			this.clipPath(this.path);
			this.drawPath(this.path, this.paintBase);
			this.drawPath(this.innerShadowPath, this.paintDark);
			this.drawPath(this.innerShadowPath, this.paintLight);
		} else {
			this.initShape(state);
			this.initPaints(state);

			if (state == NeumorphicType.PRESSED) {
				this.clipPath(this.path);
				this.drawPath(this.path, this.paintBase);
				this.drawPath(this.innerShadowPath, this.paintDark);
				this.drawPath(this.innerShadowPath, this.paintLight);
			} else {
				if (__ANDROID__) {
					this.drawPath(this.path, this.paintDark);
					this.drawPath(this.path, this.paintLight);
				}
				this.drawPath(this.path, this.paintBase);
			}
		}

		if (this.paintStroke != null) {
			this.clipPath(this.path);
			this.drawPath(this.path, this.paintStroke);
		}
	}

	private initPaints(state: NeumorphicType) {
		const view = this.mViewRef && this.mViewRef.get();
		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;
		const isPressable = state == NeumorphicType.PRESSED || state == NeumorphicType.PRESSED_IN_OUT;
		const fillColor = view.style.backgroundColor instanceof Color ? view.style.backgroundColor : defaultColor;

		this._setBackground(view);
		this._setStroke(view);

		if (isPressable) {
			this.paintDark.strokeWidth = shadowRadius;
			this.paintDark.style = drawStyle.STROKE;
			this.paintLight.strokeWidth = shadowRadius;
			this.paintLight.style = drawStyle.STROKE;
		} else {
			this.paintDark.strokeWidth = 0;
			this.paintDark.style = drawStyle.FILL;
			this.paintLight.strokeWidth = 0;
			this.paintLight.style = drawStyle.FILL;
		}

		this.paintDark.setColor(fillColor);
		this.paintLight.setColor(fillColor);
		this.paintDark.setShadowLayer(shadowRadius, view.shadowDistance, view.shadowDistance, view.darkShadowColor);
		this.paintLight.setShadowLayer(shadowRadius, -view.shadowDistance, -view.shadowDistance, view.lightShadowColor);
	}

	private initShape(state: NeumorphicType) {
		const view = this.mViewRef && this.mViewRef.get();

		const { width, height } = view.getActualSize();
		const cornerRadiusDip = Utils.layout.toDeviceIndependentPixels(Length.toDevicePixels(view.borderTopLeftRadius));
		const cornerRadius = Math.min(Math.min(width, height) / 2, cornerRadiusDip);

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;

		this.path = new Path();
		this.innerShadowPath = new Path();

		this.path.addRoundRect(createRectF(0, 0, width, height), cornerRadius, cornerRadius, Direction.CW);
		this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), cornerRadius, cornerRadius, Direction.CW);
	}

	private _setBackground(view: NeumorphicLayout): void {
		const background = view.style.backgroundInternal;
		if (!background) {
			return;
		}

		if (background.image) {
			if (background.image instanceof NSLinearGradient) {
				const gradient = background.image;
				const { width, height } = view.getActualSize();

				const colors: Color[] = [];
				const positions = new Float32Array(gradient.colorStops.length);
				let isGradientWithStops = false;

				for (let i = 0, length = gradient.colorStops.length; i < length; i++) {
					const colorStop = gradient.colorStops[i];

					colors[i] = colorStop.color;

					if (colorStop.offset) {
						isGradientWithStops = true;
						positions[i] = Utils.layout.toDeviceIndependentPixels(PercentLength.toDevicePixels(colorStop.offset, 0, 0));
					}
				}

				const alpha = gradient.angle / (Math.PI * 2);
				const startX = Math.pow(Math.sin(Math.PI * (alpha + 0.75)), 2);
				const startY = Math.pow(Math.sin(Math.PI * (alpha + 0.5)), 2);
				const endX = Math.pow(Math.sin(Math.PI * (alpha + 0.25)), 2);
				const endY = Math.pow(Math.sin(Math.PI * alpha), 2);

				this.paintBase.setShader(new LinearGradient(startX * width, startY * height, endX * width, endY * height, colors, isGradientWithStops ? positions : null, TileMode.MIRROR));
			} else {
				throw new Error('Neumorphism plugin can only draw color and linear gradient backgrounds');
			}
		} else {
			if (this.paintBase.getShader()) {
				this.paintBase.setShader(null);
			}
			this.paintBase.setColor(view.style.backgroundColor || defaultColor);
		}
	}

	private _setStroke(view: NeumorphicLayout): void {
		const borderColor = view.style.borderTopColor instanceof Color ? view.style.borderTopColor : defaultColor;

		// Duplicate width as half of it will be clipped
		const borderWidth = Utils.layout.toDeviceIndependentPixels(Length.toDevicePixels(view.style.borderTopWidth)) * 2;

		if (borderWidth > 0) {
			this.paintStroke = new Paint();
			this.paintStroke.setStyle(drawStyle.STROKE);
			this.paintStroke.setAntiAlias(true);
			this.paintStroke.setStrokeWidth(borderWidth);
			this.paintStroke.setColor(borderColor);
		}
	}
}

const disposeNativeViewOrig = LayoutBase.prototype.disposeNativeView;

LayoutBase.prototype.disposeNativeView = function (this: NeumorphicLayout) {
	disposeNativeViewOrig.call(this);

	if (this.augmentedCanvas != null) {
		delete this.augmentedCanvas;
	}
};

// Style properties
for (let [key, value] of stylePropertiesMap) {
	Object.defineProperty(LayoutBase.prototype, key, {
		get() {
			return this.style[key];
		},
		set(value) {
			this.style[key] = value;
		},
		enumerable: true,
	});
	value.register(Style);
}
