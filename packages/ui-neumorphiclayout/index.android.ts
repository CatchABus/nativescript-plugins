import { Screen } from '@nativescript/core';
import { NeumorphicLayoutCommon } from './common';

export * from './common';

@NativeClass()
class NeumorphicLayoutImpl extends org.nativescript.widgets.AbsoluteLayout {
  private owner: WeakRef < NeumorphicLayout > ;

  constructor(context: android.content.Context, owner: WeakRef < NeumorphicLayout > ) {
    super(context);
    this.setWillNotDraw(false);
    this.owner = owner;
  }

  public onDraw(canvas: android.graphics.Canvas) {
    const owner = this.owner && this.owner.get();
    if (owner != null) {
      const scale = Screen.mainScreen.scale;
      this.adjustClippingForParent();

      canvas.save();
      canvas.scale(scale, scale); // always scale to device density to work with dp

      (owner.augmentedCanvas as any).mNative = canvas;
      owner.onCanvasDraw(owner.augmentedCanvas);
      canvas.restore();
    }
    super.onDraw(canvas);
  }

  private adjustClippingForParent() {
    let parent = this.getParent();
    // Removing clipping from all breaks the ui
    if (parent != null && parent instanceof org.nativescript.widgets.LayoutBase) {
      parent.setClipChildren(false);
      parent.setClipToPadding(false);
    }
  }
}

export class NeumorphicLayout extends NeumorphicLayoutCommon {
  public createNativeView() {
    return new NeumorphicLayoutImpl(this._context, new WeakRef(this));
  }

  public invalidate() {
    if (this.nativeViewProtected != null) {
      this.nativeViewProtected.invalidate();
    }
  }
}
