import { DemoSharedBase } from '../utils';

export class DemoSharedUiNeumorphicLayout extends DemoSharedBase {

  animateButtonTap(args) {
    const view = args.object;
    switch (args.action) {
      case "down":
        view.state = view.stateDown;
        break;
      case "cancel":
      case "up":
        view.state = view.stateUp;
        break;
    }
  }
}
