import { NativeObject } from '../../NativeObject';

export abstract class BaseGeoJsonCommon<T> extends NativeObject<T> {
	public toJSON() {
		return {
			type: this.type,
		};
	}

	public abstract get type(): string;
}
