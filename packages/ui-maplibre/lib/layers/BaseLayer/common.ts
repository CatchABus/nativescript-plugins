import { BaseLayer as IBaseLayer } from '.';
import { NativeObject } from '../../nativeWrappers/NativeObject';

export abstract class BaseLayerCommon<T> extends NativeObject<T> implements IBaseLayer<T> {
	private mVisible: boolean;

	public abstract getId(): string;
	public abstract expressionValueToNative(value): any;
	public abstract extractPropertyValue(value);
	public abstract setWrappedPropertyValue(value: any): void;

	public get visible(): boolean {
		return this.mVisible;
	}

	public set visible(value: boolean) {
		this.mVisible = value;
	}

	public toJSON() {
		return {
			id: this.getId(),
			type: this.constructor.name,
		};
	}
}
