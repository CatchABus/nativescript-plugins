import { AbsoluteLayout, Color, CSSType, Property, Trace } from '@nativescript/core';
import { White } from '@nativescript/core/color/known-colors';
import { Canvas, createRectF, Direction, LinearGradient, Paint, Path, Style, TileMode } from '@nativescript-community/ui-canvas';

export enum State {
  FLAT,
  CONCAVE,
  CONVEX,
  PRESSED,
  PRESSED_IN_OUT
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
      const formattedValue = State[value as keyof typeof State];
      if (formattedValue == null) {
        Trace.error('Invalid type of state!');
      }
      return formattedValue;
    },
    valueChanged: (target, oldValue, newValue) => {
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

  private pathBase: Path;
  private pathBright: Path;
  private pathDark: Path;
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
    const state = this.state;

    this.initDefaults();

    if (state == State.PRESSED_IN_OUT) {
      if (global.isAndroid) {
        this.initShapes(State.FLAT);
        this.initPaints(State.FLAT);

        canvas.drawPath(this.pathBright, this.paintBright);
        canvas.drawPath(this.pathDark, this.paintDark);
        canvas.drawPath(this.pathBase, this.paintBase);
      }

      this.initShapes(State.PRESSED);
      this.initPaints(State.PRESSED);

      canvas.clipPath(this.pathBase);
      canvas.drawPath(this.pathBase, this.paintBase);
      canvas.drawPath(this.pathBright, this.paintBright);
      canvas.drawPath(this.pathDark, this.paintDark);
    } else {
      this.initShapes(state);
      this.initPaints(state);

      if (state == State.PRESSED) {
        canvas.clipPath(this.pathBase);
        canvas.drawPath(this.pathBase, this.paintBase);
        canvas.drawPath(this.pathBright, this.paintBright);
        canvas.drawPath(this.pathDark, this.paintDark);
      } else {
        if (global.isAndroid) {
          canvas.drawPath(this.pathBright, this.paintBright);
          canvas.drawPath(this.pathDark, this.paintDark);
        }
        canvas.drawPath(this.pathBase, this.paintBase);
      }
    }
    this.notify({ eventName: 'draw', object: this, canvas });
  }

  _setNativeClipToBounds() {}

  private initPaints(state) {
    const actualSize = this.getActualSize();
    const width = actualSize.width;
    const height = actualSize.height;

    let neumorphicColorNative, brightColorNative, darkColorNative, overlayColorNative;
    if (global.isAndroid) {
      neumorphicColorNative = this.neumorphicColor.android;
      brightColorNative = this.brightColor.android;
      darkColorNative = this.darkColor.android;
      if (this.overlayColor) {
        overlayColorNative = this.overlayColor.android;
      }
    } else {
      neumorphicColorNative = this.neumorphicColor;
      brightColorNative = this.brightColor;
      darkColorNative = this.darkColor;
      if (this.overlayColor) {
        overlayColorNative = this.overlayColor;
      }
    }

    const shadowRadius: number = this.shadowRadius || (this.shadowDistance * 2);
    let linearGradient = null;

    switch (state) {
      case State.FLAT:
      case State.PRESSED:
        this.paintBase.setColor(overlayColorNative || neumorphicColorNative);
        break;
      case State.CONCAVE:
        linearGradient = new LinearGradient(0, 0, width, height, darkColorNative, brightColorNative, TileMode.CLAMP);
        break;
      default:
        linearGradient = new LinearGradient(0, 0, width, height, brightColorNative, darkColorNative, TileMode.CLAMP);
        break;
    }

    if (linearGradient) {
      this.paintBase.setShader(linearGradient);
    }
    this.paintBright.setColor(neumorphicColorNative);
    this.paintDark.setColor(neumorphicColorNative);
    this.paintBright.setShadowLayer(shadowRadius, -this.shadowDistance, -this.shadowDistance, brightColorNative);
    this.paintDark.setShadowLayer(shadowRadius, this.shadowDistance, this.shadowDistance, darkColorNative);
  }

  private initDefaults() {
    this.pathBase = new Path();
    this.pathBright = new Path();
    this.pathDark = new Path();
    this.paintBase = new Paint();
    this.paintBase.setAntiAlias(global.isAndroid);
    this.paintBright = new Paint();
    this.paintBright.setAntiAlias(global.isAndroid);
    this.paintDark = new Paint();
    this.paintDark.setAntiAlias(global.isAndroid);
  }

  private initShapes(state) {
    const actualSize = this.getActualSize();
    const width = actualSize.width;
    const height = actualSize.height;

    this.pathBase.reset();
    this.pathBright.reset();
    this.pathDark.reset();

    const rectF = createRectF(0, 0, width, height);

    this.pathBase.addRoundRect(rectF, this.cornerRadius, this.cornerRadius, Direction.CW);
    this.pathBright.addRoundRect(rectF, this.cornerRadius, this.cornerRadius, Direction.CW);
    this.pathDark.addRoundRect(rectF, this.cornerRadius, this.cornerRadius, Direction.CW);

    if (state == State.PRESSED) {
      if (!this.pathBright.isInverseFillType()) {
        this.pathBright.toggleInverseFillType();
      }
      if (!this.pathDark.isInverseFillType()) {
        this.pathDark.toggleInverseFillType();
      }
    }

    this.pathBase.close();
    this.pathBright.close();
    this.pathDark.close();
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
