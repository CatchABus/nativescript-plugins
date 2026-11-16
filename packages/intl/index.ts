import { IntlPolyfill } from './lib';

export function install(): void {
	if (typeof Intl === 'undefined') {
		global.Intl = IntlPolyfill;
	} else {
		Object.assign(Intl, IntlPolyfill);
	}
}
