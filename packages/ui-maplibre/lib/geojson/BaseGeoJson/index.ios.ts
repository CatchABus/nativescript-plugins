import { BaseGeoJsonCommon } from './common';

export abstract class BaseGeoJson<T extends MLNShape> extends BaseGeoJsonCommon<T> {
	public static getNativeFromJson(value: string): MLNShape {
		const jsonData = NSString.stringWithString(value).dataUsingEncoding(NSUTF8StringEncoding);
		return MLNShape.shapeWithDataEncodingError(jsonData, NSUTF8StringEncoding);
	}
}
