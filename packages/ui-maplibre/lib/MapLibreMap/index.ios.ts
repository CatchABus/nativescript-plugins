import { MapNativeRequestData } from '.';
import { CameraPosition } from '../position/CameraPosition';
import { Feature } from '../geojson';
import { IPoint, LatLngBounds } from '../position';
import { IRect } from '../position/IRect';
import { Projection } from '../Projection';
import { MapLibreMapCommon } from './common';
import { Expression, ExpressionFilterSpecification } from '../Expression';

export class MapLibreMap extends MapLibreMapCommon<any> {
	private _runWithNativeView(callback: (nativeView: MLNMapView) => void): void {
		this.notify<MapNativeRequestData<MLNMapView>>({
			eventName: 'mapNativeRequest',
			object: this,
			callback,
		});
	}

	public override _getNativeStyle(): MLNStyle {
		let nativeStyle: MLNStyle;

		this._runWithNativeView((nativeView) => {
			nativeStyle = nativeView.style;
		});

		return nativeStyle;
	}

	public override setStyle(value: string | URL): void {
		this._runWithNativeView((nativeView) => {
			if (typeof value === 'string') {
				nativeView.styleJSON = value;
			} else if (value) {
				nativeView.styleURL = NSURL.URLWithString(value.toString());
			} else {
				nativeView.styleJSON = null;
				nativeView.styleURL = null;
			}
		});
	}

	public override setCamera(camera: CameraPosition, animated?: boolean): void {
		this._runWithNativeView((nativeView) => {
			if (camera) {
				camera.native.altitude = MLNAltitudeForZoomLevel(camera.zoom, camera.tilt, camera.target.latitude, nativeView.frame.size);
				nativeView.setCameraAnimated(camera.native, !!animated);
			} else {
				nativeView.setCameraAnimated(null, !!animated);
			}
		});
	}

	public override getProjection(): Projection {
		if (!this.mProjection) {
			this._runWithNativeView((nativeView) => {
				this.mProjection = Projection.initWithNative(nativeView.mapProjection()) as Projection;
			});
		}
		return this.mProjection;
	}

	public override getMetersPerPixelAtLatitude(latitude: number): number {
		let native: number;

		this._runWithNativeView((nativeView) => {
			native = nativeView.metersPerPointAtLatitude(latitude);
		});
		return native;
	}

	public override getVisibleCoordinateBounds(): LatLngBounds {
		let nativeBounds: MLNCoordinateBounds;

		this._runWithNativeView((nativeView) => {
			nativeBounds = nativeView.visibleCoordinateBounds;
		});

		if (this.mVisibleBounds == null || this.mVisibleBounds.ne.latitude !== nativeBounds.ne.latitude || this.mVisibleBounds.ne.longitude !== nativeBounds.ne.longitude || this.mVisibleBounds.sw.latitude !== nativeBounds.sw.latitude || this.mVisibleBounds.sw.longitude !== nativeBounds.sw.longitude) {
			this.mVisibleBounds = LatLngBounds.initWithNative(nativeBounds) as LatLngBounds;
		}

		return this.mVisibleBounds;
	}

	public override setVisibleCoordinateBounds(bounds: LatLngBounds, padding?: IRect | number, animated?: boolean, completion?: () => void): void {
		let insets: UIEdgeInsets;

		if (padding) {
			if (typeof padding === 'number') {
				insets = new UIEdgeInsets({
					top: padding,
					right: padding,
					bottom: padding,
					left: padding,
				});
			} else {
				insets = new UIEdgeInsets(padding);
			}
		} else {
			insets = null;
		}

		this._runWithNativeView((nativeView) => {
			if (typeof completion === 'function') {
				nativeView.setVisibleCoordinateBoundsEdgePaddingAnimatedCompletionHandler(bounds.native, insets, !!animated, completion);
			} else {
				nativeView.setVisibleCoordinateBoundsEdgePaddingAnimated(bounds.native, insets, !!animated);
			}
		});
	}

	public override queryRenderedFeatures(pointOrRect: IPoint | IRect, layerIds?: string[], filter?: ExpressionFilterSpecification): Feature[] {
		const result: Feature[] = [];
		const expression = Expression.filter(filter);
		const nFilter: NSPredicate = expression?.native;
		let nLayerIds: NSSet<string>;
		let nFeatures: NSArray<MLNFeature>;

		if (layerIds) {
			nLayerIds = NSSet.setWithArray(layerIds);
		} else {
			nLayerIds = null;
		}

		this._runWithNativeView((nativeView) => {
			if ('x' in pointOrRect && 'y' in pointOrRect) {
				const nativePoint = CGPointMake(pointOrRect.x, pointOrRect.y);
				if (nFilter) {
					nFeatures = nativeView.visibleFeaturesAtPointInStyleLayersWithIdentifiersPredicate(nativePoint, nLayerIds, nFilter);
				} else {
					nFeatures = nativeView.visibleFeaturesAtPointInStyleLayersWithIdentifiers(nativePoint, nLayerIds);
				}
			} else {
				const nativeRect = CGRectMake(pointOrRect.left, pointOrRect.top, pointOrRect.right, pointOrRect.bottom);
				if (nFilter) {
					nFeatures = nativeView.visibleFeaturesInRectInStyleLayersWithIdentifiersPredicate(nativeRect, nLayerIds, nFilter);
				} else {
					nFeatures = nativeView.visibleFeaturesInRectInStyleLayersWithIdentifiers(nativeRect, nLayerIds);
				}
			}
		});

		for (let i = 0, length = nFeatures.count; i < length; i++) {
			result.push(Feature.initWithNative(nFeatures.objectAtIndex(i)) as Feature);
		}

		return result;
	}

	public override get minZoom(): number {
		let value: number;

		this._runWithNativeView((nativeView) => {
			value = nativeView.minimumZoomLevel;
		});
		return value;
	}

	public override set minZoom(value: number) {
		this._runWithNativeView((nativeView) => {
			nativeView.minimumZoomLevel = value;
		});
	}

	public override get maxZoom(): number {
		let value: number;

		this._runWithNativeView((nativeView) => {
			value = nativeView.maximumZoomLevel;
		});
		return value;
	}

	public override set maxZoom(value: number) {
		this._runWithNativeView((nativeView) => {
			nativeView.maximumZoomLevel = value;
		});
	}

	public override get isRotateGesturesEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.rotateEnabled;
		});
		return value;
	}

	public override set isRotateGesturesEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.rotateEnabled = value;
		});
	}

	public override get isScrollGesturesEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.scrollEnabled;
		});
		return value;
	}

	public override set isScrollGesturesEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.scrollEnabled = value;
		});
	}

	public override get isHorizontalScrollGesturesEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.panScrollingMode === MLNPanScrollingMode.Horizontal || nativeView.panScrollingMode === MLNPanScrollingMode.Default;
		});
		return value;
	}

	public override set isHorizontalScrollGesturesEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.panScrollingMode = MLNPanScrollingMode.Vertical;
		});
	}

	public override get isTiltGesturesEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.pitchEnabled;
		});
		return value;
	}

	public override set isTiltGesturesEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.pitchEnabled = value;
		});
	}

	public override get isZoomGesturesEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.zoomEnabled;
		});
		return value;
	}

	public override set isZoomGesturesEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.zoomEnabled = value;
		});
	}

	public override get anchorRotateOrZoomGesturesToCenterCoordinate(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.anchorRotateOrZoomGesturesToCenterCoordinate;
		});
		return value;
	}

	public override set anchorRotateOrZoomGesturesToCenterCoordinate(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.anchorRotateOrZoomGesturesToCenterCoordinate = value;
		});
	}

	public override get isCompassEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.showsCompassView;
		});
		return value;
	}

	public override set isCompassEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.showsCompassView = value;
		});
	}

	public override get isAttributionEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView.attributionButton ? !nativeView.attributionButton.hidden : false;
		});
		return value;
	}

	public override set isAttributionEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.attributionButton.hidden = !value;
		});
	}

	public override get isLogoEnabled(): boolean {
		let value: boolean;

		this._runWithNativeView((nativeView) => {
			value = nativeView ? nativeView.showsLogoView : false;
		});
		return value;
	}

	public override set isLogoEnabled(value: boolean) {
		this._runWithNativeView((nativeView) => {
			nativeView.showsLogoView = value;
		});
	}
}
