import { CameraPosition } from '../position/CameraPosition';
import { NativeObject } from '../nativeWrappers/NativeObject';
import { Style } from '../Style';
import { Projection } from '../Projection';
import { IPoint, LatLngBounds } from '../position';
import { IRect } from '../position/IRect';
import { Feature } from '../geojson';
import { MapLibreMap as IMapLibreMap } from '.';
import { ExpressionFilterSpecification } from '../Expression';

export abstract class MapLibreMapCommon<T> extends NativeObject<T> implements IMapLibreMap {
	protected mStyle: Style;
	protected mProjection: Projection;
	protected mVisibleBounds: LatLngBounds;

	constructor() {
		super();
		this.throwIllegalConstructorError();
	}

	public getProjection(): Projection {
		throw new Error('Method not implemented.');
	}

	public getStyle(): Style {
		const nativeStyle = this._getNativeStyle();

		if (nativeStyle) {
			if (this.mStyle?.native != nativeStyle) {
				this.mStyle = Style.initWithNative(nativeStyle) as Style;
			}
		} else {
			if (this.mStyle) {
				this.mStyle = null;
			}
		}

		return this.mStyle;
	}

	protected abstract _getNativeStyle(): any;
	public abstract setStyle(value: string | URL): void;
	public abstract setCamera(camera: CameraPosition, animated?: boolean): void;
	public abstract getMetersPerPixelAtLatitude(latitude: number): number;
	public abstract getVisibleCoordinateBounds(): LatLngBounds;
	public abstract setVisibleCoordinateBounds(bounds: LatLngBounds, padding?: IRect | number, animated?: boolean): void;
	public abstract queryRenderedFeatures(pointOrRect: IPoint | IRect, layerIds?: string[], filter?: ExpressionFilterSpecification): Feature[];

	public abstract get minZoom(): number;
	public abstract set minZoom(value: number);
	public abstract get maxZoom(): number;
	public abstract set maxZoom(value: number);
	public abstract get isRotateGesturesEnabled(): boolean;
	public abstract set isRotateGesturesEnabled(value: boolean);
	public abstract get isScrollGesturesEnabled(): boolean;
	public abstract set isScrollGesturesEnabled(value: boolean);
	public abstract get isHorizontalScrollGesturesEnabled(): boolean;
	public abstract set isHorizontalScrollGesturesEnabled(value: boolean);
	public abstract get isTiltGesturesEnabled(): boolean;
	public abstract set isTiltGesturesEnabled(value: boolean);
	public abstract get isZoomGesturesEnabled(): boolean;
	public abstract set isZoomGesturesEnabled(value: boolean);
	public abstract get anchorRotateOrZoomGesturesToCenterCoordinate(): boolean;
	public abstract set anchorRotateOrZoomGesturesToCenterCoordinate(value: boolean);
	public abstract get isCompassEnabled(): boolean;
	public abstract set isCompassEnabled(value: boolean);
	public abstract get isAttributionEnabled(): boolean;
	public abstract set isAttributionEnabled(value: boolean);
	public abstract get isLogoEnabled(): boolean;
	public abstract set isLogoEnabled(value: boolean);
}
