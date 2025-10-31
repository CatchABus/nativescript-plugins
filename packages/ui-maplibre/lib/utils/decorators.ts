import type { BaseLayer } from '../layers';

export function LayoutProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		(target.constructor as typeof BaseLayer).layoutPropertyMappings.set(name, propertyKey);
	};
}

export function PaintProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		(target.constructor as typeof BaseLayer).paintPropertyMappings.set(name, propertyKey);
	};
}
