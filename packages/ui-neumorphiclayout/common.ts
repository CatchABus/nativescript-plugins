import { backgroundInternalProperty, booleanConverter, AbsoluteLayout, LayoutBase, Color, CSSType, GestureTypes, Property, TouchAction, TouchGestureEventData } from '@nativescript/core';
import { White } from '@nativescript/core/color/known-colors';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style, TileMode } from '@nativescript-community/ui-canvas';

export enum State {
	FLAT = 'FLAT',
	CONCAVE = 'CONCAVE',
	CONVEX = 'CONVEX',
	PRESSED = 'PRESSED',
	PRESSED_IN_OUT = 'PRESSED_IN_OUT',
}

export const brightIntensityProperty = new Property<LayoutBase, number>({
	name: 'brightIntensity',
	defaultValue: 0.15,
	valueConverter: parseFloat,
});

export const cornerRadiusProperty = new Property<LayoutBase, number>({
	name: 'cornerRadius',
	valueConverter: parseFloat,
});

export const darkIntensityProperty = new Property<LayoutBase, number>({
	name: 'darkIntensity',
	defaultValue: 0.15,
	valueConverter: parseFloat,
});

export const isPressedProperty = new Property<LayoutBase, boolean>({
	name: 'isPressed',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export const neumorphicColorProperty = new Property<LayoutBase, Color>({
	name: 'neumorphicColor',
	defaultValue: new Color(White),
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});

export const neumorphicStateProperty = new Property<LayoutBase, State>({
	name: 'neumorphicState',
	defaultValue: null,
	valueConverter: (value) => {
		const formattedValue = State[value];
		return formattedValue;
	},
});

export const overlayColorProperty = new Property<LayoutBase, Color>({
	name: 'overlayColor',
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
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

export const neumorphicTouchStateProperty = new Property<LayoutBase, State>({
	name: 'neumorphicTouchState',
	valueConverter: (value) => {
		let formattedValue = null;
		if (value) {
			formattedValue = State[value];
			if (formattedValue == null) {
				throw new Error('Invalid type of touch state!');
			}
		}
		return formattedValue;
	},
	valueChanged: (target: any, oldValue, newValue) => {
		if (!!newValue !== !!oldValue) {
			if (newValue != null) {
				target.off(GestureTypes.touch, onNeumorphicTouch);
				target.on(GestureTypes.touch, onNeumorphicTouch);
			} else {
				target.off(GestureTypes.touch, onNeumorphicTouch);
			}
			target.isPressed = false;
		}
	},
});

export class NeumorphicCanvas extends Canvas {
	private view: WeakRef<any>;

	private path: Path = new Path();
	private innerShadowPath: Path = new Path();
	private paintBase: Paint;
	private paintBright: Paint;
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
		const state = view.isPressed && view.neumorphicTouchState != null ? view.neumorphicTouchState : view.neumorphicState;

		this.initDefaults();

		if (state == State.PRESSED_IN_OUT) {
			if (global.isAndroid) {
				this.initShape(State.FLAT);
				this.initPaints(State.FLAT);

				this.drawPath(this.path, this.paintBright);
				this.drawPath(this.path, this.paintDark);
				this.drawPath(this.path, this.paintBase);
			}

			this.initShape(State.PRESSED);
			this.initPaints(State.PRESSED);

			this.clipPath(this.path);
			this.drawPath(this.path, this.paintBase);
			this.drawPath(this.innerShadowPath, this.paintBright);
			this.drawPath(this.innerShadowPath, this.paintDark);
		} else {
			this.initShape(state);
			this.initPaints(state);

			if (state == State.PRESSED) {
				this.clipPath(this.path);
				this.drawPath(this.path, this.paintBase);
				this.drawPath(this.innerShadowPath, this.paintBright);
				this.drawPath(this.innerShadowPath, this.paintDark);
			} else {
				if (global.isAndroid) {
					this.drawPath(this.path, this.paintBright);
					this.drawPath(this.path, this.paintDark);
				}
				this.drawPath(this.path, this.paintBase);
			}
		}
	}

	private initDefaults() {
		const view = this.view && this.view.get();

		if (view.brightColor == null) {
			view.brightColor = this.manipulateColor(view.neumorphicColor, 1 + view.brightIntensity);
		}
		if (view.darkColor == null) {
			view.darkColor = this.manipulateColor(view.neumorphicColor, 1 - view.darkIntensity);
		}
		this.paintBase = new Paint();
		this.paintBase.setAntiAlias(global.isAndroid);
		this.paintBright = new Paint();
		this.paintBright.setAntiAlias(global.isAndroid);
		this.paintDark = new Paint();
		this.paintDark.setAntiAlias(global.isAndroid);
	}

	private initPaints(state) {
		const view = this.view && this.view.get();

		const actualSize = view.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;
		const bgColor = view.overlayColor || view.neumorphicColor;

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;
		const isPressable = state == State.PRESSED || state == State.PRESSED_IN_OUT;
		const gradientColors = [];

		switch (state) {
			case State.CONCAVE:
				if (view.overlayColor != null) {
					gradientColors.push(this.manipulateColor(view.overlayColor, 1 - view.darkIntensity));
					gradientColors.push(this.manipulateColor(view.overlayColor, 1 + view.brightIntensity));
				} else {
					gradientColors.push(view.darkColor);
					gradientColors.push(view.brightColor);
				}
				break;
			case State.CONVEX:
				if (view.overlayColor != null) {
					gradientColors.push(this.manipulateColor(view.overlayColor, 1 + view.brightIntensity));
					gradientColors.push(this.manipulateColor(view.overlayColor, 1 - view.darkIntensity));
				} else {
					gradientColors.push(view.brightColor);
					gradientColors.push(view.darkColor);
				}
				break;
			default:
				this.paintBase.setColor(bgColor);
				break;
		}

		if (gradientColors.length) {
			this.paintBase.setShader(new LinearGradient(0, 0, width, height, gradientColors, null, TileMode.CLAMP));
		}

		if (isPressable) {
			this.paintBright.strokeWidth = shadowRadius;
			this.paintBright.style = Style.STROKE;
			this.paintDark.strokeWidth = shadowRadius;
			this.paintDark.style = Style.STROKE;
		} else {
			this.paintBright.strokeWidth = 0;
			this.paintBright.style = Style.FILL;
			this.paintDark.strokeWidth = 0;
			this.paintDark.style = Style.FILL;
		}

		this.paintBright.setColor(bgColor);
		this.paintDark.setColor(bgColor);
		this.paintBright.setShadowLayer(shadowRadius, -view.shadowDistance, -view.shadowDistance, view.brightColor);
		this.paintDark.setShadowLayer(shadowRadius, view.shadowDistance, view.shadowDistance, view.darkColor);
	}

	private initShape(state) {
		const view = this.view && this.view.get();

		const actualSize = view.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;

		const shadowRadius: number = view.shadowRadius || view.shadowDistance * 2;

		this.path.reset();
		this.innerShadowPath.reset();

		this.path.addRoundRect(createRectF(0, 0, width, height), view.cornerRadius, view.cornerRadius, Direction.CW);
		this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), view.cornerRadius, view.cornerRadius, Direction.CW);
	}
}

@CSSType('NeumorphicLayout')
export abstract class NeumorphicLayoutCommon extends AbsoluteLayout {
	public static drawEvent = 'draw';

	public readonly augmentedCanvas: Canvas = new Canvas(0, 0);

	public brightColor: Color;
	public brightIntensity: number;
	public cornerRadius: number;
	public darkColor: Color;
	public darkIntensity: number;
	public neumorphicColor: Color;
	public overlayColor: Color;
	public shadowDistance: number;
	public shadowRadius: number;
	public neumorphicState: State;
	public neumorphicTouchState: State;
	public isPressed: boolean;

	private path: Path = new Path();
	private innerShadowPath: Path = new Path();
	private paintBase: Paint;
	private paintBright: Paint;
	private paintDark: Paint;

	public manipulateColor(color: Color, factor: number): Color {
		const a = color.a;
		const r = Math.round(color.r * factor);
		const g = Math.round(color.g * factor);
		const b = Math.round(color.b * factor);
		return new Color(a, Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
	}

	public onCanvasDraw(canvas: Canvas) {
		const state = this.isPressed && this.neumorphicTouchState != null ? this.neumorphicTouchState : this.neumorphicState;

		this.initDefaults();

		if (state == State.PRESSED_IN_OUT) {
			if (global.isAndroid) {
				this.initShape(State.FLAT);
				this.initPaints(State.FLAT);

				canvas.drawPath(this.path, this.paintBright);
				canvas.drawPath(this.path, this.paintDark);
				canvas.drawPath(this.path, this.paintBase);
			}

			this.initShape(State.PRESSED);
			this.initPaints(State.PRESSED);

			canvas.clipPath(this.path);
			canvas.drawPath(this.path, this.paintBase);
			canvas.drawPath(this.innerShadowPath, this.paintBright);
			canvas.drawPath(this.innerShadowPath, this.paintDark);
		} else {
			this.initShape(state);
			this.initPaints(state);

			if (state == State.PRESSED) {
				canvas.clipPath(this.path);
				canvas.drawPath(this.path, this.paintBase);
				canvas.drawPath(this.innerShadowPath, this.paintBright);
				canvas.drawPath(this.innerShadowPath, this.paintDark);
			} else {
				if (global.isAndroid) {
					canvas.drawPath(this.path, this.paintBright);
					canvas.drawPath(this.path, this.paintDark);
				}
				canvas.drawPath(this.path, this.paintBase);
			}
		}
		this.notify({ eventName: 'draw', object: this, canvas });
	}

	_setNativeClipToBounds() {}

	private initDefaults() {
		if (this.brightColor == null) {
			this.brightColor = this.manipulateColor(this.neumorphicColor, 1 + this.brightIntensity);
		}
		if (this.darkColor == null) {
			this.darkColor = this.manipulateColor(this.neumorphicColor, 1 - this.darkIntensity);
		}
		this.paintBase = new Paint();
		this.paintBase.setAntiAlias(global.isAndroid);
		this.paintBright = new Paint();
		this.paintBright.setAntiAlias(global.isAndroid);
		this.paintDark = new Paint();
		this.paintDark.setAntiAlias(global.isAndroid);
	}

	private initPaints(state) {
		const actualSize = this.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;
		const bgColor = this.overlayColor || this.neumorphicColor;

		const shadowRadius: number = this.shadowRadius || this.shadowDistance * 2;
		const isPressable = state == State.PRESSED || state == State.PRESSED_IN_OUT;
		const gradientColors = [];

		switch (state) {
			case State.CONCAVE:
				if (this.overlayColor != null) {
					gradientColors.push(this.manipulateColor(this.overlayColor, 1 - this.darkIntensity));
					gradientColors.push(this.manipulateColor(this.overlayColor, 1 + this.brightIntensity));
				} else {
					gradientColors.push(this.darkColor);
					gradientColors.push(this.brightColor);
				}
				break;
			case State.CONVEX:
				if (this.overlayColor != null) {
					gradientColors.push(this.manipulateColor(this.overlayColor, 1 + this.brightIntensity));
					gradientColors.push(this.manipulateColor(this.overlayColor, 1 - this.darkIntensity));
				} else {
					gradientColors.push(this.brightColor);
					gradientColors.push(this.darkColor);
				}
				break;
			default:
				this.paintBase.setColor(bgColor);
				break;
		}

		if (gradientColors.length) {
			this.paintBase.setShader(new LinearGradient(0, 0, width, height, gradientColors, null, TileMode.CLAMP));
		}

		if (isPressable) {
			this.paintBright.strokeWidth = shadowRadius;
			this.paintBright.style = Style.STROKE;
			this.paintDark.strokeWidth = shadowRadius;
			this.paintDark.style = Style.STROKE;
		} else {
			this.paintBright.strokeWidth = 0;
			this.paintBright.style = Style.FILL;
			this.paintDark.strokeWidth = 0;
			this.paintDark.style = Style.FILL;
		}

		this.paintBright.setColor(bgColor);
		this.paintDark.setColor(bgColor);
		this.paintBright.setShadowLayer(shadowRadius, -this.shadowDistance, -this.shadowDistance, this.brightColor);
		this.paintDark.setShadowLayer(shadowRadius, this.shadowDistance, this.shadowDistance, this.darkColor);
	}

	private initShape(state) {
		const actualSize = this.getActualSize();
		const width = actualSize.width;
		const height = actualSize.height;

		const shadowRadius: number = this.shadowRadius || this.shadowDistance * 2;

		this.path.reset();
		this.innerShadowPath.reset();

		this.path.addRoundRect(createRectF(0, 0, width, height), this.cornerRadius, this.cornerRadius, Direction.CW);
		this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), this.cornerRadius, this.cornerRadius, Direction.CW);
	}

	abstract invalidate();
}

function onNeumorphicTouch(args: TouchGestureEventData) {
	const view: any = args.view;
	switch (args.action) {
		case TouchAction.down:
			view.isPressed = true;
			break;
		case TouchAction.cancel:
		case TouchAction.up:
			view.isPressed = false;
			break;
	}
}

// Disable 'backgroundInternal' as it also uses 'setBackground' to apply a drawable
const backgroundInternalOrigin = LayoutBase.prototype[backgroundInternalProperty.setNative];
LayoutBase.prototype[backgroundInternalProperty.setNative] = function (value) {
	if (!this.neumorphicState) {
		backgroundInternalOrigin.call(this, value);
	}
};

brightIntensityProperty.register(LayoutBase);
cornerRadiusProperty.register(LayoutBase);
darkIntensityProperty.register(LayoutBase);
isPressedProperty.register(LayoutBase);
neumorphicColorProperty.register(LayoutBase);
neumorphicStateProperty.register(LayoutBase);
overlayColorProperty.register(LayoutBase);
shadowDistanceProperty.register(LayoutBase);
shadowRadiusProperty.register(LayoutBase);
neumorphicTouchStateProperty.register(LayoutBase);
