import { MapLibreViewCommon } from './common';
import { MapEventData, MapStyleLoadedEventData } from '.';
import { MapLibreMap, MapNativeRequestData } from '../MapLibreMap';
import { Utils } from '@nativescript/core';

@NativeClass
class MGLMapViewDelegateImpl extends NSObject implements MLNMapViewDelegate {
	public static ObjCProtocols = [MLNMapViewDelegate];

	private mOwner: WeakRef<MapLibreView>;

	public static initWithOwner(owner: MapLibreView): MGLMapViewDelegateImpl {
		const delegate = <MGLMapViewDelegateImpl>MGLMapViewDelegateImpl.new();
		delegate.mOwner = new WeakRef(owner);

		return delegate;
	}

	mapViewDidFinishLoadingStyle(mapView: MLNMapView, nativeStyle: MLNStyle): void {
		const owner = this.mOwner?.deref?.();
		if (owner) {
			owner.notify<MapStyleLoadedEventData>({
				eventName: MapLibreView.mapStyleLoadedEvent,
				object: owner,
				style: owner.getOrCreateMap().getStyle(),
			});
		}
	}
}

export class MapLibreView extends MapLibreViewCommon {
	declare nativeViewProtected: MLNMapView;

	private mDelegate: MGLMapViewDelegateImpl;
	private readonly mMapNativeRequestCb: (args: MapNativeRequestData<MLNMapView>) => void;

	constructor() {
		super();

		this.mMapNativeRequestCb = (args) => {
			if (this.nativeViewProtected) {
				args.callback(this.nativeViewProtected);
			}
		};
	}

	createNativeView(): MLNMapView {
		return MLNMapView.alloc().init();
	}

	initNativeView(): void {
		super.initNativeView();

		this.mDelegate = MGLMapViewDelegateImpl.initWithOwner(this);
		this.nativeViewProtected.delegate = this.mDelegate;

		this.getOrCreateMap();

		Utils.executeOnUIThread(() => {
			this.notify<MapEventData>({
				eventName: MapLibreView.mapReadyEvent,
				object: this,
			});
		});
	}

	disposeNativeView(): void {
		super.disposeNativeView();

		this.mDelegate = null;
		this.nativeViewProtected.delegate = null;

		if (this.mMap) {
			this.mMap.off('mapNativeRequest', this.mMapNativeRequestCb);
			this.mMap = null;
		}
	}

	public getOrCreateMap(): MapLibreMap {
		if (!this.mMap) {
			this.mMap = MapLibreMap.initWithNative(null) as MapLibreMap;
			this.mMap.on('mapNativeRequest', this.mMapNativeRequestCb);
		}
		return this.mMap;
	}
}
