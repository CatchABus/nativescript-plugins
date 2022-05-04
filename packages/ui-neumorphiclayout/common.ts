import { backgroundInternalProperty, booleanConverter, Color, LayoutBase, GestureTypes, Property, TouchAction, TouchGestureEventData } from '@nativescript/core';
import { White } from '@nativescript/core/color/known-colors';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style, TileMode } from '@nativescript-community/ui-canvas';

export const STATE_FLAT = 'flat';
export const STATE_CONCAVE = 'concave';
export const STATE_CONVEX = 'convex';
export const STATE_PRESSED = 'pressed';
export const STATE_PRESSED_IN_OUT = 'pressed-in-out';

const NEUMORPHISM_STATES = [STATE_FLAT, STATE_CONCAVE, STATE_CONVEX, STATE_PRESSED, STATE_PRESSED_IN_OUT];

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

export const lightShadowColorProperty = new Property<LayoutBase, Color>({
	name: 'lightShadowColor',
	defaultValue: new Color('#ffffff'),
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});

export const cornerRadiusProperty = new Property<LayoutBase, number>({
	name: 'cornerRadius',
	defaultValue: 0,
	valueConverter: parseFloat,
});

export const darkShadowColorProperty = new Property<LayoutBase, Color>({
	name: 'darkShadowColor',
	defaultValue: new Color('#d9d9d9'),
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});

export const isTouchedProperty = new Property<LayoutBase, boolean>({
	name: 'isTouched',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export const fillColorProperty = new Property<LayoutBase, Color>({
	name: 'fillColor',
	defaultValue: new Color(White),
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});

export const neumorphismProperty = new Property<LayoutBase, string>({
	name: 'neumorphism',
	defaultValue: null,
	valueConverter: (value) => {
		if (value && !NEUMORPHISM_STATES.includes(value)) {
			throw new Error('Invalid neumorphism state!');
		}
		return value;
	},
});

export const touchStateProperty = new Property<LayoutBase, string>({
	name: 'touchState',
	valueConverter: (value) => {
		if (value && !NEUMORPHISM_STATES.includes(value)) {
			throw new Error('Invalid touch state!');
		}
		return value;
	},
	valueChanged: (target: any, oldValue, newValue) => {
		if (!!newValue !== !!oldValue) {
			if (newValue != null) {
				target.off(GestureTypes.touch, toggleTouchState);
				target.on(GestureTypes.touch, toggleTouchState);
			} else {
				target.off(GestureTypes.touch, toggleTouchState);
			}
			target.isTouched = false;
		}
	},
});

export const shadowDistanceProperty = new Property<LayoutBase, number>({
	name: 'shadowDistance',
	defaultValue: 10,
	valueConverter: parseFloat,
});

export const shadowRadiusProperty = new Property<LayoutBase, number>({
	name: 'shadowRadius',
	valueConverter: parseFloat,
});

export class NeumorphicCanvas extends Canvas {
	private view: WeakRef<any>;

	private path: Path = new Path();
	private innerShadowPath: Path = new Path();
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
			this.paintLight.style = Style.STROKE;
			this.paintDark.strokeWidth = shadowRadius;
			this.paintDark.style = Style.STROKE;
		} else {
			this.paintLight.strokeWidth = 0;
			this.paintLight.style = Style.FILL;
			this.paintDark.strokeWidth = 0;
			this.paintDark.style = Style.FILL;
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

		this.path.reset();
		this.innerShadowPath.reset();

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

lightShadowColorProperty.register(LayoutBase);
cornerRadiusProperty.register(LayoutBase);
darkShadowColorProperty.register(LayoutBase);
isTouchedProperty.register(LayoutBase);
fillColorProperty.register(LayoutBase);
neumorphismProperty.register(LayoutBase);
touchStateProperty.register(LayoutBase);
shadowDistanceProperty.register(LayoutBase);
shadowRadiusProperty.register(LayoutBase);
