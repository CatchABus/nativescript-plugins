import { BaseLayer } from './BaseLayer';

export function LayerType(type: string): Function {
	return function (constructor: typeof BaseLayer) {
		constructor.prototype.getType = function () {
			return type;
		};
		LayerManager.registry.set(type, constructor);
	};
}

export class LayerManager {
	public static registry = new Map<string, typeof BaseLayer>();

	public static getLayerClassByType(type: string): typeof BaseLayer {
		return this.registry.get(type);
	}
}
