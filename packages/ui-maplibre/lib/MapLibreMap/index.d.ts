import { Expression } from '../expressions';
import { Feature } from '../geojson';
import { NativeObject } from '../NativeObject';
import { IPoint, LatLngBounds } from '../position';
import { IRect } from '../position/IRect';
import { LatLng } from '../position/LatLng';
import { Projection } from '../Projection';
import { Style } from '../Style';

export interface MapNativeRequestData<T> extends EventData {
	eventName: 'mapNativeRequest';
	object: MapLibreMap;
	callback: (nativeView: T) => void;
}

export declare class MapLibreMap extends NativeObject<any> {
	constructor();
	public getProjection(): Projection;
	public getStyle(): Style;
	public setStyle(value: string | URL): void;
	public setCamera(camera: CameraPosition, animated?: boolean): void;
	public getMetersPerPixelAtLatitude(latitude: number): number;
	public getVisibleCoordinateBounds(): LatLngBounds;
	public setVisibleCoordinateBounds(bounds: LatLngBounds, padding?: IRect | number, animated?: boolean): void;
	public queryRenderedFeatures(pointOrRect: IPoint | IRect, layerIds?: string[], filter?: Expression): Feature[];
	public get isRotateGesturesEnabled(): boolean;
	public set isRotateGesturesEnabled(value: boolean);
	public get isScrollGesturesEnabled(): boolean;
	public set isScrollGesturesEnabled(value: boolean);
	public get isHorizontalScrollGesturesEnabled(): boolean;
	public set isHorizontalScrollGesturesEnabled(value: boolean);
	public get isTiltGesturesEnabled(): boolean;
	public set isTiltGesturesEnabled(value: boolean);
	public get isZoomGesturesEnabled(): boolean;
	public set isZoomGesturesEnabled(value: boolean);
	public get anchorRotateOrZoomGesturesToCenterCoordinate(): boolean;
	public set anchorRotateOrZoomGesturesToCenterCoordinate(value: boolean);
	public get isCompassEnabled(): boolean;
	public set isCompassEnabled(value: boolean);
	public get isAttributionEnabled(): boolean;
	public set isAttributionEnabled(value: boolean);
	public get isLogoEnabled(): boolean;
	public set isLogoEnabled(value: boolean);
}
