import dedent from 'ts-dedent';

export default function loader(content, map) {
	const hmrCode = this.hot
		? dedent`
			/* NATIVESCRIPT-JSX-HOT-LOADER */
      import { JSXHelper as JSXInternalHOT } from '@nativescript-community/ui-jsx';

			if (__webpack_module__?.hot) {
				const componentId = __webpack_module__?.id;
				const isJSXModule = componentId != null && (componentId.endsWith('.jsx') || componentId.endsWith('.tsx'));
				let toAccept;

				if (isJSXModule && typeof __webpack_module__.exports?.default === 'function' && __webpack_module__.exports.default._jsxComponentId !== componentId) {
					__webpack_module__.exports.default._jsxComponentId = componentId;
				}

				if (isJSXModule && typeof __webpack_module__.exports?.default === 'function') {
					toAccept = JSXInternalHOT.__liveSyncNavigationEntry(componentId, __webpack_module__.exports.default);
				} else {
					toAccept = false;
				}

				if (!toAccept && !__webpack_module__.hot.data?.disposed && __webpack_module__.hot.status() !== 'idle') {
					__webpack_module__.hot.dispose((data) => {
						data.disposed = true;
					});
					__webpack_module__.hot.invalidate();
				} else {
					__webpack_module__.hot.accept();
				}
			}
		`
		: ``;

	const source = `${content}\n${hmrCode}`;

	this.callback(null, source, map);
}
