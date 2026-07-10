import dedent from 'ts-dedent';

export default function loader(content: string, map: any) {
	const hmrCode = this.hot
		? dedent`
			/* NATIVESCRIPT-JSX-HOT-LOADER */
      import { JSXHelper } from '@nativescript-community/ui-jsx';

      const componentId = __webpack_module__?.id;

      if (componentId != null && typeof __webpack_module__?.exports?.default === 'function' && __webpack_module__.exports.default._jsxComponentId !== componentId) {
        __webpack_module__.exports.default._jsxComponentId = componentId;
      }

			if (__webpack_module__?.hot?.accept) {
        if (componentId != null && typeof __webpack_module__.exports?.default === 'function') {
          JSXHelper.__liveSyncNavigationEntry(componentId, __webpack_module__.exports.default);
        }
				__webpack_module__.hot.accept();
			}
		`
		: ``;

	const source = `${content}\n${hmrCode}`;

	this.callback(null, source, map);
}
