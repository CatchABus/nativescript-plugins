import { backgroundInternalProperty, booleanConverter, Color, CssProperty, LayoutBase, GestureTypes, Property, Style, TouchAction, TouchGestureEventData } from '@nativescript/core';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style as drawStyle, TileMode } from '@nativescript-community/ui-canvas';

export const STATE_FLAT = 'flat';
export const STATE_CONCAVE = 'concave';
export const STATE_CONVEX = 'convex';
export const STATE_PRESSED = 'pressed';
export const STATE_PRESSED_IN_OUT = 'pressed-in-out';

const NEUMORPHISM_STATES = [STATE_FLAT, STATE_CONCAVE, STATE_CONVEX, STATE_PRESSED, STATE_PRESSED_IN_OUT];

const stylePropertiesMap = new Map();

function toggleTouchState(args: TouchGestureEventData) {
	const view: any = args.view;
	switch (args.action) {
		case TouchAction.down:
			view.isTouched = true;
			break;
		case TouchAction.cancel:
		case TouchAction.up:
			view.isTouched = false;
			break;
	}
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
	'cornerRadius',
	new CssProperty<Style, number>({
		name: 'cornerRadius',
		cssName: 'corner-radius',
		defaultValue: 0,
		valueConverter: parseFloat,
	})
);
export const cornerRadiusProperty = stylePropertiesMap.get('cornerRadius');

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
	'fillColor',
	new CssProperty<Style, Color>({
		name: 'fillColor',
		cssName: 'fill-color',
		defaultValue: new Color('#ffffff'),
		equalityComparer: Color.equals,
		valueConverter: (value) => new Color(value),
	})
);
export const fillColorProperty = stylePropertiesMap.get('fillColor');

stylePropertiesMap.set(
	'neumorphism',
	new CssProperty<Style, string>({
		name: 'neumorphism',
		cssName: 'neumorphism',
		defaultValue: null,
		valueConverter: (value) => {
			if (value && !NEUMORPHISM_STATES.includes(value)) {
				throw new Error('Invalid neumorphism state!');
			}
			return value;
		},
	})
);
export const neumorphismProperty = stylePropertiesMap.get('neumorphism');

stylePropertiesMap.set(
	'touchState',
	new CssProperty<Style, string>({
		name: 'touchState',
		cssName: 'touch-state',
		valueConverter: (value) => {
			if (value && !NEUMORPHISM_STATES.includes(value)) {
				throw new Error('Invalid touch state!');
			}
			return value;
		},
		valueChanged: (target: any, oldValue, newValue) => {
			const view = target.view;
			if (!!newValue !== !!oldValue) {
				if (newValue != null) {
					view.off(GestureTypes.touch, toggleTouchState);
					view.on(GestureTypes.touch, toggleTouchState);
				} else {
					view.off(GestureTypes.touch, toggleTouchState);
				}
				view.isTouched = false;
			}
		},
	})
);
export const touchStateProperty = stylePropertiesMap.get('touchState');

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

export const isTouchedProperty = new Property<LayoutBase, boolean>({
	name: 'isTouched',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export class NeumorphicCanvas extends Canvas {
	private view: WeakRef<any>;

	private path: Path;
	private innerShadowPath: Path;
	private paintBase: Paint;
	private paintLight: Paint;
	private paintDark: Paint;

	constructor(view: WeakRef<any>) {
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
		const state = view.isTouched ? view.touchState : view.neumorphism;

		if (!state) {
			throw new Error('No neumorphism state found!');
		}

		this.initDefaults();

		if (state == STATE_PRESSED_IN_OUT) {
			if (global.isAndroid) {
				this.initShape(STATE_FLAT);
				this.initPaints(STATE_FLAT);

				this.drawPath(this.path, this.paintLight);
				this.drawPath(this.path, this.paintDark);
				this.drawPath(this.path, this.paintBase);
			}

			this.initShape(STATE_PRESSED);
			this.initPaints(STATE_PRESSED);

			this.clipPath(this.path);
			this.drawPath(this.path, this.paintBase);
			this.drawPath(this.innerShadowPath, this.paintLight);
			this.drawPath(this.innerShadowPath, this.paintDark);
		} else {
			this.initShape(state);
			this.initPaints(state);

			if (state == STATE_PRESSED) {
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
		const isPressable = state == STATE_PRESSED || state == STATE_PRESSED_IN_OUT;
		const gradientColors = [];

		switch (state) {
			case STATE_CONCAVE:
				gradientColors.push(view.darkShadowColor);
				gradientColors.push(view.lightShadowColor);
				break;
			case STATE_CONVEX:
				gradientColors.push(view.lightShadowColor);
				gradientColors.push(view.darkShadowColor);
				break;
			default:
				this.paintBase.setColor(view.fillColor);
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

		this.paintLight.setColor(view.fillColor);
		this.paintDark.setColor(view.fillColor);
		this.paintLight.setShadowLayer(shadowRadius, -view.shadowDistance, -view.shadowDistance, view.lightShadowColor);
		this.paintDark.setShadowLayer(shadowRadius, view.shadowDistance, view.shadowDistance, view.darkShadowColor);
	}

	private initShape(state) {
		const view = this.view && this.view.get();

		const actualSize = view.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;
		const cornerRadius = Math.min(Math.min(width, height) / 2, view.cornerRadius);

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;

		this.path = new Path();
		this.innerShadowPath = new Path();

		this.path.addRoundRect(createRectF(0, 0, width, height), cornerRadius, cornerRadius, Direction.CW);
		this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), cornerRadius, cornerRadius, Direction.CW);
	}
}

// Disable 'backgroundInternal' as it also uses 'setBackground' to apply a drawable
const backgroundInternalOrigin = LayoutBase.prototype[backgroundInternalProperty.setNative];
LayoutBase.prototype[backgroundInternalProperty.setNative] = function (value) {
	if (!this.neumorphism) {
		backgroundInternalOrigin.call(this, value);
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

isTouchedProperty.register(LayoutBase);
