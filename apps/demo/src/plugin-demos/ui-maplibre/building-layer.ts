import { CameraPosition, FillExtrusionLayer, LatLng, MapEventData, MapLibreView, MapStyleLoadedEventData } from '@nativescript-community/ui-maplibre';
import { EventData, Page, TapGestureEventData } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function onMapReady(args: MapEventData) {
	const mapView = args.object;
	const map = mapView.getMap();

	map.setCamera(new CameraPosition(new LatLng(37.934139, 23.634891), 17, 30, 50));
	mapView.on('mapStyleLoaded', onMapStyleLoaded);
	map.setStyle(new URL('https://tiles.openfreemap.org/styles/bright'));
}

export async function onMapStyleLoaded(args: MapStyleLoadedEventData) {
	const style = args.style;
	const source = style.getSource('openmaptiles');

	const layer = new FillExtrusionLayer('building-3d', source);

	layer.setSourceLayer('building');
	layer.filter = ['all', ['has', 'render_height'], ['has', 'render_min_height']];
	layer.minZoom = 15;
	layer.setProperties({
		'fill-extrusion-color': 'gray',
		'fill-extrusion-height': ['get', 'render_height'],
		'fill-extrusion-base': ['get', 'render_min_height'],
		'fill-extrusion-opacity': 0.9,
	});

	style.addLayer(layer);
}

export function onTap(args: TapGestureEventData) {
	const mapView = args.object as MapLibreView;
	const map = mapView.getMap();
	const style = map.getStyle();

	style.setLightOptions({
		anchor: 'map',
		color: 'purple',
		intensity: 3,
		position: {
			radialCoordinate: 5,
			azimuthalAngle: 180,
			polarAngle: 80,
		},
	});
}
