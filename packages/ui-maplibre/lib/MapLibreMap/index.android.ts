import { Utils } from '@nativescript/core';
import { CameraPosition } from '../CameraPosition';
import { Expression } from '../expressions';
import { Feature } from '../geojson';
import { IPoint, LatLng, LatLngBounds } from '../position';
import { IRect } from '../position/IRect';
import { Projection } from '../Projection';
import { MapLibreMapCommon } from './common';

export class MapLibreMap extends MapLibreMapCommon<org.maplibre.android.maps.MapLibreMap> {
	private mNativeVisibleBounds: androidNative.Array<number>;

	public override _getNativeStyle(): org.maplibre.android.maps.Style {
		return this.native.getStyle();
	}

	public override setStyle(value: string | URL): void {
		if (typeof value === 'string') {
			this.native.setStyle(new org.maplibre.android.maps.Style.Builder().fromJson(value));
		} else if (value) {
			this.native.setStyle(value.toString());
		} else {
			this.native.setStyle(null);
		}
	}

	public override setCamera(camera: CameraPosition, animated?: boolean): void {
		if (animated) {
			setTimeout(() => {
				this.native.animateCamera(org.maplibre.android.camera.CameraUpdateFactory.newCameraPosition(camera ? camera.native : null));
			});
		} else {
			this.native.setCameraPosition(camera ? camera.native : null);
		}
	}

	public getProjection(): Projection {
		if (!this.mProjection) {
			this.mProjection = new Projection(this.native.getProjection());
		}
		return this.mProjection;
	}

	public override getMetersPerPixelAtLatitude(latitude: number): number {
		return this.native.getProjection().getMetersPerPixelAtLatitude(latitude);
	}

	public override getVisibleCoordinateBounds(): LatLngBounds {
		if (!this.mNativeVisibleBounds) {
			this.mNativeVisibleBounds = Array.create('double', 4);
		}

		const nativeArr = this.mNativeVisibleBounds;

		this.native.getProjection().getVisibleCoordinateBounds(nativeArr);

		if (this.mVisibleBounds == null || this.mVisibleBounds.ne.latitude !== nativeArr[0] || this.mVisibleBounds.ne.longitude !== nativeArr[1] || this.mVisibleBounds.sw.latitude !== nativeArr[2] || this.mVisibleBounds.sw.longitude !== nativeArr[3]) {
			this.mVisibleBounds = new LatLngBounds(new LatLng(nativeArr[0], nativeArr[1]), new LatLng(nativeArr[2], nativeArr[3]));
		}

		return this.mVisibleBounds;
	}

	public override setVisibleCoordinateBounds(bounds: LatLngBounds, padding?: IRect | number, animated?: boolean): void {
		let cameraBounds: org.maplibre.android.camera.CameraUpdate;

		if (padding) {
			if (typeof padding === 'number') {
				cameraBounds = org.maplibre.android.camera.CameraUpdateFactory.newLatLngBounds(bounds.native, Utils.layout.toDevicePixels(padding));
			} else {
				cameraBounds = org.maplibre.android.camera.CameraUpdateFactory.newLatLngBounds(bounds.native, Utils.layout.toDevicePixels(padding.left), Utils.layout.toDevicePixels(padding.top), Utils.layout.toDevicePixels(padding.right), Utils.layout.toDevicePixels(padding.bottom));
			}
		} else {
			cameraBounds = org.maplibre.android.camera.CameraUpdateFactory.newLatLngBounds(bounds.native, 0);
		}

		if (animated) {
			setTimeout(() => {
				this.native.animateCamera(cameraBounds);
			});
		} else {
			this.native.moveCamera(cameraBounds);
		}
	}

	public override queryRenderedFeatures(pointOrRect: IPoint | IRect, layerIds?: string[], filter?: Expression): Feature[] {
		const result: Feature[] = [];
		const nFilter: org.maplibre.android.style.expressions.Expression = filter instanceof Expression ? filter.native : null;
		let nLayerIds: androidNative.Array<string>;
		let nFeatures: java.util.List<org.maplibre.geojson.Feature>;

		if (layerIds) {
			const length = layerIds.length;
			nLayerIds = Array.create(java.lang.String, length);

			for (let i = 0; i < length; i++) {
				nLayerIds[i] = layerIds[i];
			}
		} else {
			nLayerIds = null;
		}

		if ('x' in pointOrRect && 'y' in pointOrRect) {
			const nativePoint = new android.graphics.PointF(Utils.layout.toDevicePixels(pointOrRect.x), Utils.layout.toDevicePixels(pointOrRect.y));
			if (nFilter) {
				nFeatures = this.native.queryRenderedFeatures(nativePoint, nFilter, nLayerIds);
			} else {
				nFeatures = this.native.queryRenderedFeatures(nativePoint, nLayerIds);
			}
		} else {
			const nativeRect = new android.graphics.RectF(Utils.layout.toDevicePixels(pointOrRect.left), Utils.layout.toDevicePixels(pointOrRect.top), Utils.layout.toDevicePixels(pointOrRect.right), Utils.layout.toDevicePixels(pointOrRect.bottom));
			if (nFilter) {
				nFeatures = this.native.queryRenderedFeatures(nativeRect, nFilter, nLayerIds);
			} else {
				nFeatures = this.native.queryRenderedFeatures(nativeRect, nLayerIds);
			}
		}

		for (let i = 0, length = nFeatures.size(); i < length; i++) {
			result.push(new Feature(nFeatures.get(i)));
		}

		return result;
	}

	public override get isRotateGesturesEnabled(): boolean {
		return this.native.getUiSettings().isRotateGesturesEnabled();
	}

	public override set isRotateGesturesEnabled(value: boolean) {
		this.native.getUiSettings().setRotateGesturesEnabled(value);
	}

	public override get isScrollGesturesEnabled(): boolean {
		return this.native.getUiSettings().isScrollGesturesEnabled();
	}

	public override set isScrollGesturesEnabled(value: boolean) {
		this.native.getUiSettings().setScrollGesturesEnabled(value);
	}

	public override get isHorizontalScrollGesturesEnabled(): boolean {
		return this.native.getUiSettings().isHorizontalScrollGesturesEnabled();
	}

	public override set isHorizontalScrollGesturesEnabled(value: boolean) {
		this.native.getUiSettings().setHorizontalScrollGesturesEnabled(value);
	}

	public override get isTiltGesturesEnabled(): boolean {
		return this.native.getUiSettings().isTiltGesturesEnabled();
	}

	public override set isTiltGesturesEnabled(value: boolean) {
		this.native.getUiSettings().setTiltGesturesEnabled(value);
	}

	public override get isZoomGesturesEnabled(): boolean {
		return this.native.getUiSettings().isZoomGesturesEnabled();
	}

	public override set isZoomGesturesEnabled(value: boolean) {
		this.native.getUiSettings().setZoomGesturesEnabled(value);
	}

	public override get anchorRotateOrZoomGesturesToCenterCoordinate(): boolean {
		const focalPoint = this.native.getUiSettings().getFocalPoint();
		const width = this.native.getUiSettings().getWidth();
		const height = this.native.getUiSettings().getHeight();

		return focalPoint.x === width / 2 && focalPoint.y === height / 2;
	}

	public override set anchorRotateOrZoomGesturesToCenterCoordinate(value: boolean) {
		if (value) {
			const width = this.native.getUiSettings().getWidth();
			const height = this.native.getUiSettings().getHeight();

			this.native.getUiSettings().setFocalPoint(new android.graphics.PointF(width / 2, height / 2));
		} else {
			this.native.getUiSettings().setFocalPoint(null);
		}
	}

	public override get isAttributionEnabled(): boolean {
		return this.native.getUiSettings().isAttributionEnabled();
	}

	public override set isAttributionEnabled(value: boolean) {
		this.native.getUiSettings().setAttributionEnabled(value);
	}

	public override get isLogoEnabled(): boolean {
		return this.native.getUiSettings().isLogoEnabled();
	}

	public override set isLogoEnabled(value: boolean) {
		this.native.getUiSettings().setLogoEnabled(value);
	}
}
