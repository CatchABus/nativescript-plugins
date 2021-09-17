import { Screen } from '@nativescript/core';
import { NeumorphicLayoutCommon } from './common';

export * from './common';

@NativeClass()
class NeumorphicLayoutImpl extends org.nativescript.widgets.AbsoluteLayout {
  private owner: WeakRef < NeumorphicLayout > ;

  constructor(context: android.content.Context, owner: WeakRef < NeumorphicLayout > ) {
    super(context);
    this.setClipChildren(false);
    this.setWillNotDraw(false);
    this.owner = owner;
  }

  public onDraw(canvas: android.graphics.Canvas) {
    const owner = this.owner && this.owner.get();
    if (owner) {
      const scale = Screen.mainScreen.scale;
      this.adjustClippingForParents();

      canvas.save();
      canvas.scale(scale, scale); // always scale to device density to work with dp

      (owner.augmentedCanvas as any)._native = canvas;
      owner.onCanvasDraw(owner.augmentedCanvas);
      canvas.restore();
    }
    super.onDraw(canvas);
  }

  private adjustClippingForParents() {
    let parent = this.getParent();
    while (parent && parent.getParent && !(parent instanceof NeumorphicLayoutImpl)) {
      if (parent instanceof android.view.ViewGroup) {
        parent.setClipChildren(false);
      }
      parent = parent.getParent();
    }
  }
}

export class NeumorphicLayout extends NeumorphicLayoutCommon {
  public createNativeView() {
    return new NeumorphicLayoutImpl(this._context, new WeakRef(this));
  }

  public invalidate() {
    if (this.nativeViewProtected) {
      this.nativeViewProtected.invalidate();
    }
  }
}
