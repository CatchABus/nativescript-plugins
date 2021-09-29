import { AbsoluteLayout, Color, CSSType, GestureTypes, Property, TouchAction, TouchGestureEventData } from '@nativescript/core';
import { White } from '@nativescript/core/color/known-colors';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style, TileMode } from '@nativescript-community/ui-canvas';

function onNeumorphicTouch(args: TouchGestureEventData) {
  const view: NeumorphicLayoutCommon = args.view as NeumorphicLayoutCommon;
  switch (args.action) {
    case TouchAction.down:
      view._isTouched = true;
      view.invalidate();
      break;
    case TouchAction.cancel:
    case TouchAction.up:
      view._isTouched = false;
      view.invalidate();
      break;
  }
}

export enum State {
  FLAT = 'FLAT',
  CONCAVE = 'CONCAVE',
  CONVEX = 'CONVEX',
  PRESSED = 'PRESSED',
  PRESSED_IN_OUT = 'PRESSED_IN_OUT'
}

export const brightIntensityProperty = new Property < NeumorphicLayoutCommon,
  number > ({
    name: 'brightIntensity',
    defaultValue: 0.15,
    valueConverter: parseFloat,
    valueChanged: (target, oldValue, newValue) => {
      target.brightColor = target.manipulateColor(target.neumorphicColor, 1 + newValue);
      target.isLoaded && target.invalidate();
    }
  });

export const cornerRadiusProperty = new Property < NeumorphicLayoutCommon,
  number > ({
    name: 'cornerRadius',
    valueConverter: parseFloat,
    valueChanged: (target, oldValue, newValue) => {
      target.isLoaded && target.invalidate();
    }
  });

export const darkIntensityProperty = new Property < NeumorphicLayoutCommon,
  number > ({
    name: 'darkIntensity',
    defaultValue: 0.15,
    valueConverter: parseFloat,
    valueChanged: (target, oldValue, newValue) => {
      target.darkColor = target.manipulateColor(target.neumorphicColor, 1 - newValue);
      target.isLoaded && target.invalidate();
    }
  });

export const neumorphicColorProperty = new Property < NeumorphicLayoutCommon,
  Color > ({
    name: 'neumorphicColor',
    defaultValue: new Color(White),
    equalityComparer: Color.equals,
    valueConverter: (value) => new Color(value),
    valueChanged: (target, oldValue, newValue) => {
      target.brightColor = target.manipulateColor(newValue, 1 + target.brightIntensity);
      target.darkColor = target.manipulateColor(newValue, 1 - target.darkIntensity);
      target.isLoaded && target.invalidate();
    }
  });

export const overlayColorProperty = new Property < NeumorphicLayoutCommon,
  Color > ({
    name: 'overlayColor',
    equalityComparer: Color.equals,
    valueConverter: (value) => new Color(value),
    valueChanged: (target, oldValue, newValue) => {
      target.isLoaded && target.invalidate();
    }
  });

export const shadowDistanceProperty = new Property < NeumorphicLayoutCommon,
  number > ({
    name: 'shadowDistance',
    defaultValue: 10,
    valueConverter: parseFloat,
    valueChanged: (target, oldValue, newValue) => {
      target.isLoaded && target.invalidate();
    }
  });

export const shadowRadiusProperty = new Property < NeumorphicLayoutCommon,
  number > ({
    name: 'shadowRadius',
    valueConverter: parseFloat,
    valueChanged: (target, oldValue, newValue) => {
      target.isLoaded && target.invalidate();
    }
  });

export const stateProperty = new Property < NeumorphicLayoutCommon,
  State > ({
    name: 'state',
    defaultValue: State.FLAT,
    valueConverter: value => {
      const formattedValue = State[value];
      if (formattedValue == null) {
        throw new Error('Invalid type of state!');
      }
      return formattedValue;
    },
    valueChanged: (target, oldValue, newValue) => {
      target.isLoaded && target.invalidate();
    }
  });

export const touchStateProperty = new Property < NeumorphicLayoutCommon,
  State > ({
    name: 'touchState',
    valueConverter: value => {
      let formattedValue = null;
      if (value) {
        formattedValue = State[value];
        if (formattedValue == null) {
          throw new Error('Invalid type of touch state!');
        }
      }
      return formattedValue;
    },
    valueChanged: (target, oldValue, newValue) => {
      if (!!newValue !== !!oldValue) {
        if (newValue != null) {
          target.off(GestureTypes.touch, onNeumorphicTouch);
          target._isTouched = false;
          target.on(GestureTypes.touch, onNeumorphicTouch);
        } else {
          target.off(GestureTypes.touch, onNeumorphicTouch);
          target._isTouched = false;
        }
      }
      target.isLoaded && target.invalidate();
    }
  });

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
  public state: State;
  public touchState: State;

  public _isTouched: boolean = false;

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
    const state = this._isTouched && this.touchState != null ? this.touchState : this.state;

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

    const shadowRadius: number = this.shadowRadius || (this.shadowDistance * 2);
    const isPressable = (state == State.PRESSED || state == State.PRESSED_IN_OUT);
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

    const shadowRadius: number = this.shadowRadius || (this.shadowDistance * 2);

    this.path.reset();
    this.innerShadowPath.reset();

    this.path.addRoundRect(createRectF(0, 0, width, height), this.cornerRadius, this.cornerRadius, Direction.CW);
    this.innerShadowPath.addRoundRect(createRectF(-(shadowRadius / 2), -(shadowRadius / 2), width + shadowRadius, height + shadowRadius), this.cornerRadius, this.cornerRadius, Direction.CW);
  }

  abstract invalidate();
}

brightIntensityProperty.register(NeumorphicLayoutCommon);
cornerRadiusProperty.register(NeumorphicLayoutCommon);
darkIntensityProperty.register(NeumorphicLayoutCommon);
neumorphicColorProperty.register(NeumorphicLayoutCommon);
overlayColorProperty.register(NeumorphicLayoutCommon);
shadowDistanceProperty.register(NeumorphicLayoutCommon);
shadowRadiusProperty.register(NeumorphicLayoutCommon);
stateProperty.register(NeumorphicLayoutCommon);
touchStateProperty.register(NeumorphicLayoutCommon);