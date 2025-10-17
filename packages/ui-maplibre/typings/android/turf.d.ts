/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module maplibre {
		export module turf {
			export class TurfAssertions {
				public static class: java.lang.Class<org.maplibre.turf.TurfAssertions>;
				/** @deprecated */
				public static getCoord(obj: org.maplibre.geojson.Feature): org.maplibre.geojson.Point;
				public static featureOf(feature: org.maplibre.geojson.Feature, type: string, name: string): void;
				public static geojsonType(value: org.maplibre.geojson.GeoJson, type: string, name: string): void;
				public static collectionOf(feature: org.maplibre.geojson.FeatureCollection, featureCollection: string, type: string): void;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfClassification {
				public static class: java.lang.Class<org.maplibre.turf.TurfClassification>;
				public static nearestPoint(distanceToPoint: org.maplibre.geojson.Point, point: java.util.List<org.maplibre.geojson.Point>): org.maplibre.geojson.Point;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfConstants {
				public static class: java.lang.Class<org.maplibre.turf.TurfConstants>;
				public static UNIT_MILES: string = 'miles';
				public static UNIT_NAUTICAL_MILES: string = 'nauticalmiles';
				public static UNIT_KILOMETERS: string = 'kilometers';
				public static UNIT_RADIANS: string = 'radians';
				public static UNIT_DEGREES: string = 'degrees';
				public static UNIT_INCHES: string = 'inches';
				public static UNIT_YARDS: string = 'yards';
				public static UNIT_METERS: string = 'meters';
				public static UNIT_CENTIMETERS: string = 'centimeters';
				public static UNIT_FEET: string = 'feet';
				public static UNIT_CENTIMETRES: string = 'centimetres';
				public static UNIT_METRES: string = 'metres';
				public static UNIT_KILOMETRES: string = 'kilometres';
				public static UNIT_DEFAULT: string = 'kilometers';
			}
			export module TurfConstants {
				export class TurfUnitCriteria {
					public static class: java.lang.Class<org.maplibre.turf.TurfConstants.TurfUnitCriteria>;
					/**
					 * Constructs a new instance of the org.maplibre.turf.TurfConstants$TurfUnitCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfConversion {
				public static class: java.lang.Class<org.maplibre.turf.TurfConversion>;
				public static convertLength(distance: number, originalUnit: string): number;
				public static explode(singlePoint: org.maplibre.geojson.Feature): org.maplibre.geojson.FeatureCollection;
				public static lengthToRadians(distance: number): number;
				public static polygonToLine(polygonCoordinates: org.maplibre.geojson.MultiPolygon, multiPolygon: com.google.gson.JsonObject): org.maplibre.geojson.FeatureCollection;
				public static multiPolygonToLine(feature: org.maplibre.geojson.Feature, properties: com.google.gson.JsonObject): org.maplibre.geojson.FeatureCollection;
				public static polygonToLine(polygon: org.maplibre.geojson.Polygon): org.maplibre.geojson.Feature;
				public static polygonToLine(multiPolygon: org.maplibre.geojson.MultiPolygon): org.maplibre.geojson.FeatureCollection;
				public static combine(singleFeatureGeometry: org.maplibre.geojson.FeatureCollection): org.maplibre.geojson.FeatureCollection;
				public static radiansToDegrees(radians: number): number;
				public static polygonToLine(feature: org.maplibre.geojson.Feature): org.maplibre.geojson.Feature;
				public static degreesToRadians(degrees: number): number;
				public static convertLength(distance: number, originalUnit: string, finalUnit: string): number;
				public static polygonToLine(feature: org.maplibre.geojson.Feature, properties: com.google.gson.JsonObject): org.maplibre.geojson.Feature;
				public static lengthToDegrees(distance: number, units: string): number;
				public static explode(singlePoint: org.maplibre.geojson.FeatureCollection): org.maplibre.geojson.FeatureCollection;
				public static multiPolygonToLine(feature: org.maplibre.geojson.Feature): org.maplibre.geojson.FeatureCollection;
				public static radiansToLength(radians: number): number;
				public static lengthToRadians(distance: number, units: string): number;
				public static radiansToLength(radians: number, units: string): number;
				public static polygonToLine(polygon: org.maplibre.geojson.Polygon, properties: com.google.gson.JsonObject): org.maplibre.geojson.Feature;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfException {
				public static class: java.lang.Class<org.maplibre.turf.TurfException>;
				public constructor(message: string);
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfJoins {
				public static class: java.lang.Class<org.maplibre.turf.TurfJoins>;
				public static pointsWithinPolygon(point: org.maplibre.geojson.FeatureCollection, isInside: org.maplibre.geojson.FeatureCollection): org.maplibre.geojson.FeatureCollection;
				public static inside(point: org.maplibre.geojson.Point, polygon: org.maplibre.geojson.Polygon): boolean;
				public static inside(inHole: org.maplibre.geojson.Point, temp: org.maplibre.geojson.MultiPolygon): boolean;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfMeasurement {
				public static class: java.lang.Class<org.maplibre.turf.TurfMeasurement>;
				public static EARTH_RADIUS: number;
				public static bearing(point1: org.maplibre.geojson.Point, point2: org.maplibre.geojson.Point): number;
				public static destination(point: org.maplibre.geojson.Point, distance: number, bearing: number, units: string): org.maplibre.geojson.Point;
				public static bboxPolygon(boundingBox: org.maplibre.geojson.BoundingBox, properties: com.google.gson.JsonObject, id: string): org.maplibre.geojson.Feature;
				public static bbox(feature: org.maplibre.geojson.Feature): androidNative.Array<number>;
				public static length(lineString: org.maplibre.geojson.LineString, units: string): number;
				public static bbox(lineString: org.maplibre.geojson.LineString): androidNative.Array<number>;
				public static bbox(polygon: org.maplibre.geojson.Polygon): androidNative.Array<number>;
				public static bboxPolygon(boundingBox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Feature;
				public static along(direction: java.util.List<org.maplibre.geojson.Point>, overshot: number, i: string): org.maplibre.geojson.Point;
				public static distance(point1: org.maplibre.geojson.Point, point2: org.maplibre.geojson.Point, units: string): number;
				public static area(feature: org.maplibre.geojson.FeatureCollection): number;
				public static square(verticalMidpoint: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.BoundingBox;
				public static distance(point1: org.maplibre.geojson.Point, point2: org.maplibre.geojson.Point): number;
				public static length(theCoordinate: org.maplibre.geojson.MultiPolygon, coordinate: string): number;
				public static bbox(geoJson: org.maplibre.geojson.GeoJson): androidNative.Array<number>;
				public static length(points: org.maplibre.geojson.MultiLineString, multiLineString: string): number;
				public static bbox(multiPoint: org.maplibre.geojson.MultiPoint): androidNative.Array<number>;
				public static area(feature: org.maplibre.geojson.Feature): number;
				public static bbox(point: org.maplibre.geojson.Point): androidNative.Array<number>;
				public static along(line: org.maplibre.geojson.LineString, distance: number, units: string): org.maplibre.geojson.Point;
				public static bboxPolygon(bbox: androidNative.Array<number>, properties: com.google.gson.JsonObject, id: string): org.maplibre.geojson.Feature;
				public static bbox(multiLineString: org.maplibre.geojson.MultiLineString): androidNative.Array<number>;
				public static length(curCoords: java.util.List<org.maplibre.geojson.Point>, i: string): number;
				public static bbox(featureCollection: org.maplibre.geojson.FeatureCollection): androidNative.Array<number>;
				public static envelope(geoJson: org.maplibre.geojson.GeoJson): org.maplibre.geojson.Polygon;
				public static bboxPolygon(bbox: androidNative.Array<number>): org.maplibre.geojson.Feature;
				public static midpoint(from: org.maplibre.geojson.Point, to: org.maplibre.geojson.Point): org.maplibre.geojson.Point;
				public static length(points: org.maplibre.geojson.Polygon, polygon: string): number;
				public static area(geometry: org.maplibre.geojson.Geometry): number;
				public static bbox(multiPolygon: org.maplibre.geojson.MultiPolygon): androidNative.Array<number>;
				public static center(feature: org.maplibre.geojson.Feature, properties: com.google.gson.JsonObject, id: string): org.maplibre.geojson.Feature;
				public static center(featureCollection: org.maplibre.geojson.FeatureCollection): org.maplibre.geojson.Feature;
				public static center(feature: org.maplibre.geojson.Feature): org.maplibre.geojson.Feature;
				public static bbox(bbox: org.maplibre.geojson.Geometry): androidNative.Array<number>;
				public static center(featureCollection: org.maplibre.geojson.FeatureCollection, properties: com.google.gson.JsonObject, id: string): org.maplibre.geojson.Feature;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfMeta {
				public static class: java.lang.Class<org.maplibre.turf.TurfMeta>;
				public static coordAll(feature: org.maplibre.geojson.Feature, excludeWrapCoord: boolean): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(point: org.maplibre.geojson.Point): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(polygon: org.maplibre.geojson.Polygon, excludeWrapCoord: boolean): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(multiLineString: org.maplibre.geojson.MultiLineString): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(singleFeature: org.maplibre.geojson.FeatureCollection, featureCollection: boolean): java.util.List<org.maplibre.geojson.Point>;
				public static getCoord(obj: org.maplibre.geojson.Feature): org.maplibre.geojson.Point;
				public static coordAll(lineString: org.maplibre.geojson.LineString): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(multiPoint: org.maplibre.geojson.MultiPoint): java.util.List<org.maplibre.geojson.Point>;
				public static coordAll(multiPolygon: org.maplibre.geojson.MultiPolygon, excludeWrapCoord: boolean): java.util.List<org.maplibre.geojson.Point>;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfMisc {
				public static class: java.lang.Class<org.maplibre.turf.TurfMisc>;
				public static lineSlice(i: org.maplibre.geojson.Point, startPt: org.maplibre.geojson.Point, stopPt: org.maplibre.geojson.LineString): org.maplibre.geojson.LineString;
				public static nearestPointOnLine(start: org.maplibre.geojson.Point, stop: java.util.List<org.maplibre.geojson.Point>, heightDistance: string): org.maplibre.geojson.Feature;
				public static nearestPointOnLine(pt: org.maplibre.geojson.Point, coords: java.util.List<org.maplibre.geojson.Point>): org.maplibre.geojson.Feature;
				public static lineSliceAlong(line: org.maplibre.geojson.Feature, startDist: number, stopDist: number, units: string): org.maplibre.geojson.LineString;
				public static lineSlice(startPt: org.maplibre.geojson.Point, stopPt: org.maplibre.geojson.Point, line: org.maplibre.geojson.Feature): org.maplibre.geojson.LineString;
				public static lineSliceAlong(overshot: org.maplibre.geojson.LineString, direction: number, interpolated: number, overshot: string): org.maplibre.geojson.LineString;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export class TurfTransformation {
				public static class: java.lang.Class<org.maplibre.turf.TurfTransformation>;
				public static circle(center: org.maplibre.geojson.Point, radius: number, units: string): org.maplibre.geojson.Polygon;
				public static circle(i: org.maplibre.geojson.Point, center: number, radius: number, steps: string): org.maplibre.geojson.Polygon;
				public static circle(center: org.maplibre.geojson.Point, radius: number): org.maplibre.geojson.Polygon;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module turf {
			export module models {
				export class LineIntersectsResult {
					public static class: java.lang.Class<org.maplibre.turf.models.LineIntersectsResult>;
					public horizontalIntersection(): java.lang.Double;
					public toString(): string;
					public static builder(): org.maplibre.turf.models.LineIntersectsResult.Builder;
					public equals(this_: any): boolean;
					public verticalIntersection(): java.lang.Double;
					public onLine1(): boolean;
					public toBuilder(): org.maplibre.turf.models.LineIntersectsResult.Builder;
					public onLine2(): boolean;
					public hashCode(): number;
				}
				export module LineIntersectsResult {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.turf.models.LineIntersectsResult.Builder>;
						public onLine2(onLine2: boolean): org.maplibre.turf.models.LineIntersectsResult.Builder;
						public horizontalIntersection(horizontalIntersection: java.lang.Double): org.maplibre.turf.models.LineIntersectsResult.Builder;
						public onLine1(onLine1: boolean): org.maplibre.turf.models.LineIntersectsResult.Builder;
						public verticalIntersection(verticalIntersection: java.lang.Double): org.maplibre.turf.models.LineIntersectsResult.Builder;
						public build(): org.maplibre.turf.models.LineIntersectsResult;
					}
				}
			}
		}
	}
}

//Generics information:
