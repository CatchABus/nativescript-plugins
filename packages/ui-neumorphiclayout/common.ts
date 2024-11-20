import { Color, CssProperty, LayoutBase, Length, Style, Utils } from '@nativescript/core';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style as drawStyle, TileMode } from '@nativescript-community/ui-canvas';
import { NeumorphicLayout } from '.';

const stylePropertiesMap = new Map();

export enum NeumorphicType {
	FLAT = 'flat',
	CONCAVE = 'concave',
	CONVEX = 'convex',
	PRESSED = 'pressed',
	PRESSED_IN_OUT = 'pressed-in-out',
}

stylePropertiesMap.set(
	'lightShadowColor',
	new CssProperty<Style, Color>({
		name: 'lightShadowColor',
		cssName: 'light-shadow-color',
		defaultValue: new Color('#ffffff'),
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
	private view: WeakRef<NeumorphicLayout>;

	private path: Path;
	private innerShadowPath: Path;
	private paintBase: Paint;
	private paintLight: Paint;
	private paintDark: Paint;

	constructor(view: WeakRef<NeumorphicLayout>) {
		super(0, 0);
		this.view = view;
	}

	public manipulateColor(color: Color, factor: number): Color {
		const a = color.a;
		const r = Math.round(color.r * factor);
		const g = Math.round(color.g * factor);
		const b = Math.round(color.b * factor);
		return new Color(a, Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
	}

	public onDraw() {
		const view = this.view && this.view.get();
		const state = view.neumorphism;

		if (!state) {
			throw new Error('No neumorphism state found!');
		}

		this.initDefaults();

		if (state == NeumorphicType.PRESSED_IN_OUT) {
			if (__ANDROID__) {
				this.initShape(NeumorphicType.FLAT);
				this.initPaints(NeumorphicType.FLAT);

				this.drawPath(this.path, this.paintLight);
				this.drawPath(this.path, this.paintDark);
				this.drawPath(this.path, this.paintBase);
			}

			this.initShape(NeumorphicType.PRESSED);
			this.initPaints(NeumorphicType.PRESSED);

			this.clipPath(this.path);
			this.drawPath(this.path, this.paintBase);
			this.drawPath(this.innerShadowPath, this.paintLight);
			this.drawPath(this.innerShadowPath, this.paintDark);
		} else {
			this.initShape(state);
			this.initPaints(state);

			if (state == NeumorphicType.PRESSED) {
				this.clipPath(this.path);
				this.drawPath(this.path, this.paintBase);
				this.drawPath(this.innerShadowPath, this.paintLight);
				this.drawPath(this.innerShadowPath, this.paintDark);
			} else {
				if (global.isAndroid) {
					this.drawPath(this.path, this.paintLight);
					this.drawPath(this.path, this.paintDark);
				}
				this.drawPath(this.path, this.paintBase);
			}
		}
	}

	private initDefaults() {
		const view = this.view && this.view.get();

		this.paintBase = new Paint();
		this.paintBase.setAntiAlias(global.isAndroid);
		this.paintLight = new Paint();
		this.paintLight.setAntiAlias(global.isAndroid);
		this.paintDark = new Paint();
		this.paintDark.setAntiAlias(global.isAndroid);
	}

	private initPaints(state) {
		const view = this.view && this.view.get();

		const actualSize = view.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;
		const isPressable = state == NeumorphicType.PRESSED || state == NeumorphicType.PRESSED_IN_OUT;
		const gradientColors = [];

		switch (state) {
			case NeumorphicType.CONCAVE:
				gradientColors.push(view.darkShadowColor);
				gradientColors.push(view.lightShadowColor);
				break;
			case NeumorphicType.CONVEX:
				gradientColors.push(view.lightShadowColor);
				gradientColors.push(view.darkShadowColor);
				break;
			default:
				this.paintBase.setColor(view.style.backgroundColor);
				break;
		}

		if (gradientColors.length) {
			this.paintBase.setShader(new LinearGradient(0, 0, width, height, gradientColors, null, TileMode.CLAMP));
		}

		if (isPressable) {
			this.paintLight.strokeWidth = shadowRadius;
			this.paintLight.style = drawStyle.STROKE;
			this.paintDark.strokeWidth = shadowRadius;
			this.paintDark.style = drawStyle.STROKE;
		} else {
			this.paintLight.strokeWidth = 0;
			this.paintLight.style = drawStyle.FILL;
			this.paintDark.strokeWidth = 0;
			this.paintDark.style = drawStyle.FILL;
		}

		this.paintLight.setColor(view.style.backgroundColor);
		this.paintDark.setColor(view.style.backgroundColor);
		this.paintLight.setShadowLayer(shadowRadius, -view.shadowDistance, -view.shadowDistance, view.lightShadowColor);
		this.paintDark.setShadowLayer(shadowRadius, view.shadowDistance, view.shadowDistance, view.darkShadowColor);
	}

	private initShape(state) {
		const view = this.view && this.view.get();

		const actualSize = view.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;
		const cornerRadiusDip = Utils.layout.toDeviceIndependentPixels(Length.toDevicePixels(view.borderTopLeftRadius));
		const cornerRadius = Math.min(Math.min(width, height) / 2, cornerRadiusDip);

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;

		this.path = new Path();
		this.innerShadowPath = new Path();

		this.path.addRoundRect(createRectF(0, 0, width, height), cornerRadius, cornerRadius, Direction.CW);
		this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), cornerRadius, cornerRadius, Direction.CW);
	}
}

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
