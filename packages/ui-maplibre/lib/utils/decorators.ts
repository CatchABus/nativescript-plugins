import type { BaseLayer } from '../layers';

export function LayoutProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		if (!target.layoutPropertyMappings) {
			target.layoutPropertyMappings = new Map<string, string>();
		} else {
			const parentPrototype = Object.getPrototypeOf(target) as typeof BaseLayer.prototype;
			const parentPropertyMappings = parentPrototype?.layoutPropertyMappings;

			if (parentPropertyMappings && parentPropertyMappings === target.layoutPropertyMappings) {
				target.layoutPropertyMappings = new Map<string, string>(parentPropertyMappings);
			}
		}
		target.layoutPropertyMappings.set(name, propertyKey);
	};
}

export function PaintProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		if (!target.paintPropertyMappings) {
			target.paintPropertyMappings = new Map<string, string>();
		} else {
			const parentPrototype = Object.getPrototypeOf(target) as typeof BaseLayer.prototype;
			const parentPropertyMappings = parentPrototype?.paintPropertyMappings;

			if (parentPropertyMappings && parentPropertyMappings === target.paintPropertyMappings) {
				target.paintPropertyMappings = new Map<string, string>(parentPropertyMappings);
			}
		}
		target.paintPropertyMappings.set(name, propertyKey);
	};
}
