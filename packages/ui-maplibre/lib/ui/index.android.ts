import { MapLibreViewCommon } from './common';
import { MapEventData, MapStyleLoadedEventData } from '.';
import { MapLibreMap } from '../MapLibreMap';
import { MapLibreSettings } from '../MapLibreSettings';

@NativeClass
@Interfaces([org.maplibre.android.maps.OnMapReadyCallback])
class MapReadyCallback extends java.lang.Object implements org.maplibre.android.maps.OnMapReadyCallback {
	public owner: WeakRef<MapLibreViewCommon>;

	constructor(owner: MapLibreViewCommon) {
		super();
		this.owner = new WeakRef(owner);

		return global.__native(this);
	}

	onMapReady(nativeMap: org.maplibre.android.maps.MapLibreMap) {
		const view = this.owner?.deref?.();
		if (view) {
			view.mMap = MapLibreMap.initWithNative(nativeMap) as MapLibreMap;
			this.owner = null;

			view.notify<MapEventData>({
				object: view,
				eventName: MapLibreViewCommon.mapReadyEvent,
			});
		}
	}
}

@NativeClass
@Interfaces([org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener])
class MapStyleLoadingListener extends java.lang.Object implements org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener {
	public owner: WeakRef<MapLibreViewCommon>;

	constructor(owner: MapLibreViewCommon) {
		super();
		this.owner = new WeakRef(owner);

		return global.__native(this);
	}

	onDidFinishLoadingStyle() {
		const view = this.owner?.deref?.();
		if (view && view.mMap) {
			view.notify<MapStyleLoadedEventData>({
				eventName: MapLibreView.mapStyleLoadedEvent,
				object: view,
				style: view.mMap.getStyle(),
			});
		}
	}
}

export class MapLibreView extends MapLibreViewCommon {
	declare nativeViewProtected: org.maplibre.android.maps.MapView;

	private mStyleLoadedListener: MapStyleLoadingListener;

	createNativeView(): Object {
		// Using MapView requires calling MapLibre.getInstance before inflating or creating the view.
		MapLibreSettings.getOrCreateNativeMapSettings();

		const mapView = new org.maplibre.android.maps.MapView(this._context);
		mapView.getMapAsync(new MapReadyCallback(this));

		return mapView;
	}

	initNativeView(): void {
		super.initNativeView();

		this.mStyleLoadedListener = new MapStyleLoadingListener(this);
		this.nativeViewProtected.addOnDidFinishLoadingStyleListener(this.mStyleLoadedListener);
	}

	disposeNativeView(): void {
		super.disposeNativeView();

		if (this.mStyleLoadedListener) {
			this.nativeViewProtected.removeOnDidFinishLoadingStyleListener(this.mStyleLoadedListener);
			this.mStyleLoadedListener.owner = null;
			this.mStyleLoadedListener = null;
		}
		this.mMap = null;
	}
}
