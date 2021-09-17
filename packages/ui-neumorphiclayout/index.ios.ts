import { Screen } from '@nativescript/core';
import { NeumorphicLayoutCommon, State } from './common';

export * from './common';

@NativeClass
class CADrawableLayer extends CALayer implements CALayerDelegate {
  drawInContext(ctx: any): void {
    const view: any = this.superlayer.delegate;
    const owner = view.owner && view.owner.get();
    if (owner) {
      const size = this.bounds.size;
      ((owner.augmentedCanvas) as any).setContext(ctx, size.width, size.height);
      owner.onCanvasDraw(owner.augmentedCanvas);
    }
    super.drawInContext(ctx);
  }
}

@NativeClass
class UINeumorphicLayoutView extends UIView {
  public owner: WeakRef < NeumorphicLayout > ;

  private bottomLayer: CALayer;
  private topLayer: CADrawableLayer;

  public static initWithOwner(owner: WeakRef < NeumorphicLayout > ): UINeumorphicLayoutView {
    const view: UINeumorphicLayoutView = UINeumorphicLayoutView.alloc().initWithFrame(UIScreen.mainScreen.bounds) as UINeumorphicLayoutView;
    view.owner = owner;

    view.bottomLayer = CALayer.layer();
    view.topLayer = CADrawableLayer.layer();

    view.layer.masksToBounds;
    view.layer.addSublayer(view.bottomLayer);
    view.layer.addSublayer(view.topLayer);
    return view;
  }

  drawRect(dirtyRect) {
    const owner = this.owner && this.owner.get();
    if (owner) {
      owner.onDrawRect(dirtyRect);
    }

    super.drawRect(dirtyRect);
  }
}

export class NeumorphicLayout extends NeumorphicLayoutCommon {
  public createNativeView() {
    return UINeumorphicLayoutView.initWithOwner(new WeakRef(this));
  }

  public invalidate() {
    if (this.nativeViewProtected) {
      this.nativeViewProtected.setNeedsDisplay();
    }
  }

  public onDrawRect(dirtyRect) {
    const nativeView = this.nativeViewProtected;

    nativeView.bottomLayer.frame = nativeView.bounds;
    nativeView.bottomLayer.cornerRadius = this.cornerRadius;
    nativeView.bottomLayer.backgroundColor = this.neumorphicColor.ios.CGColor;
    nativeView.bottomLayer.shadowColor = this.brightColor.ios.CGColor;
    nativeView.bottomLayer.shadowOffset = CGSizeMake(-this.shadowDistance, -this.shadowDistance);
    nativeView.bottomLayer.shadowRadius = this.shadowRadius || (this.shadowDistance * 2);
    nativeView.bottomLayer.shadowOpacity = this.state == State.PRESSED ? 0 : 1;

    nativeView.topLayer.frame = nativeView.bounds;
    nativeView.topLayer.cornerRadius = this.cornerRadius;
    nativeView.topLayer.backgroundColor = this.neumorphicColor.ios.CGColor;
    nativeView.topLayer.contentsScale = Screen.mainScreen.scale;
    nativeView.topLayer.allowsEdgeAntialiasing = true;
    nativeView.topLayer.shadowColor = this.darkColor.ios.CGColor;
    nativeView.topLayer.shadowOffset = CGSizeMake(this.shadowDistance, this.shadowDistance);
    nativeView.topLayer.shadowRadius = this.shadowRadius || (this.shadowDistance * 2);
    nativeView.topLayer.shadowOpacity = this.state == State.PRESSED ? 0 : 1;

    nativeView.topLayer.setNeedsDisplay();
  }

  _onSizeChanged() {
    this.invalidate();
    super._onSizeChanged();
  }
}
