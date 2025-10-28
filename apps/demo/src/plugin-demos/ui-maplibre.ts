import { CameraPosition, CircleLayer, Expression, ExpressionValue, GeoJsonSource, MapEventData, MapLibreView, MapStyleLoadedEventData, SymbolLayer } from '@nativescript-community/ui-maplibre';
import { EventData, Page, TapGestureEventData } from '@nativescript/core';

const GEOJSON_SOURCE_URL = 'https://s3.eu-central-1.amazonaws.com/maplibre-native/android-documentation-resources/bus-stops.geojson';
const CLUSTER_ZONE_ENTRIES: [number, string][] = [
	[150, 'red'],
	[20, 'green'],
	[0, 'blue'],
];

let source: GeoJsonSource;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
}

export function onMapReady(args: MapEventData) {
	const mapView = args.object;
	const map = mapView.getMap();

	mapView.on('mapStyleLoaded', onMapStyleLoaded);
	map.setStyle(new URL('https://demotiles.maplibre.org/style.json'));
}

export async function onMapStyleLoaded(args: MapStyleLoadedEventData) {
	const mapView = args.object as MapLibreView;
	const map = mapView.getMap();
	const style = args.style;

	source = new GeoJsonSource('cluster-source', new URL(GEOJSON_SOURCE_URL), {
		cluster: true,
		clusterMaxZoom: 14,
		clusterRadius: 50,
	});

	const markerLayer = new CircleLayer('marker-layer', source);
	markerLayer.filter = Expression.neq(ExpressionValue.get('cluster'), true);
	markerLayer.circleColor = 'orange';
	markerLayer.circleRadius = 8;

	const countLayer = new SymbolLayer('count-layer', source);
	countLayer.text = ExpressionValue.get('point_count');
	countLayer.textSize = 14;
	countLayer.textColor = '#fff';
	countLayer.textAllowsOverlap = true;
	countLayer.textFontNames = ['Noto Sans Regular'];

	style.addSource(source);

	for (let i = 0, length = CLUSTER_ZONE_ENTRIES.length; i < length; i++) {
		const entry = CLUSTER_ZONE_ENTRIES[i];
		const l = new CircleLayer(`cluster-${i}`, source);
		l.circleColor = entry[1];
		l.circleRadius = 18;

		const pointCount = ExpressionValue.get('point_count');
		if (i === 0) {
			l.filter = Expression.all(Expression.has('point_count'), Expression.gte(pointCount, ExpressionValue.literal(entry[0])));
		} else {
			l.filter = Expression.all(Expression.has('point_count'), Expression.gt(pointCount, ExpressionValue.literal(entry[0])), Expression.lt(pointCount, ExpressionValue.literal(CLUSTER_ZONE_ENTRIES[i - 1][0])));
		}

		style.addLayer(l);
	}

	style.addLayer(markerLayer);
	style.addLayer(countLayer);
}

export function onTap(args: TapGestureEventData) {
	const mapView = args.object as MapLibreView;
	const map = mapView.getMap();
	const loc = map.getProjection().fromScreenLocation(args.getX(), args.getY());
	const point = map.getProjection().toScreenLocation(loc);
	console.log('test0', args.getX(), args.getY());
	console.log('test1', loc.latitude, loc.longitude);
	console.log('test2', map.getMetersPerPixelAtLatitude(loc.latitude));
	console.log('test3', point.x, point.y);

	const features = map.queryRenderedFeatures(
		{
			x: args.getX(),
			y: args.getY(),
		},
		null,
		Expression.eq(ExpressionValue.get('cluster'), true)
	);

	for (const f of features) {
		const zoom = source.getClusterExpansionZoom(f);
		map.setCamera(new CameraPosition(f.coordinate, zoom), true);
	}
}
