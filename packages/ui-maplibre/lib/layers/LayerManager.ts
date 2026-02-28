import { BaseLayer } from './BaseLayer';

export function LayerNativeType(name: string): Function {
	return function (target: typeof BaseLayer) {
		LayerManager.registry.set(name, target);
	};
}

export class LayerManager {
	public static registry = new Map<string, typeof BaseLayer>();

	public static getLayerClassByNativeClassName(name: string): typeof BaseLayer {
		return this.registry.get(name);
	}
}
