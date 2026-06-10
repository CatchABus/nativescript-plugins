import { Trace } from '@nativescript/core';
import type { BaseLayer } from '../layers';

function applyLayerPropertyDecorator(name: string, target: typeof BaseLayer.prototype, propertyKey: string, isPaint: boolean) {
	const mapPropertyKey = isPaint ? 'paintProperties' : 'layoutProperties';

	if (!target[mapPropertyKey]) {
		target[mapPropertyKey] = new Set<string>();
	} else {
		const parentPrototype = Object.getPrototypeOf(target) as typeof BaseLayer.prototype;
		const parentProperties = parentPrototype?.[mapPropertyKey];

		if (parentProperties && parentProperties === target[mapPropertyKey]) {
			target[mapPropertyKey] = new Set<string>(parentProperties);
		}
	}

	if (target[mapPropertyKey].has(name)) {
		Trace.write(`Duplicate property '${name}' with key '${propertyKey}' for class ${target.constructor.name}`, Trace.categories.Error, Trace.messageType.error);
	} else {
		const propertyDescriptor = {
			get(this: BaseLayer) {
				return this._getOrSetPropertyValueInternal(name, () => (typeof this[`get_native_${propertyKey}`] === 'function' ? this[`get_native_${propertyKey}`]() : null));
			},
			set(this: BaseLayer, value) {
				this._setPropertyValueInternal(name, value);
				if (typeof this[`set_native_${propertyKey}`] === 'function') {
					this[`set_native_${propertyKey}`](value);
				}
			},
		};

		Object.defineProperty(target, propertyKey, propertyDescriptor);
		if (propertyKey != name) {
			Object.defineProperty(target, name, propertyDescriptor);
		}
		target[mapPropertyKey].add(name);
	}
}

export function LayoutProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		applyLayerPropertyDecorator(name, target, propertyKey, false);
	};
}

export function PaintProperty(name: string): Function {
	return function (target: typeof BaseLayer.prototype, propertyKey: string) {
		applyLayerPropertyDecorator(name, target, propertyKey, true);
	};
}
