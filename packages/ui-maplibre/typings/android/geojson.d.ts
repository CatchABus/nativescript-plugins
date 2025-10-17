/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module maplibre {
		export module geojson {
			export abstract class BaseCoordinatesTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
				public static class: java.lang.Class<org.maplibre.geojson.BaseCoordinatesTypeAdapter<any>>;
				public writePointList(out: com.google.gson.stream.JsonWriter, value: java.util.List<java.lang.Double>): void;
				public writePoint(out: com.google.gson.stream.JsonWriter, point: org.maplibre.geojson.Point): void;
				public readPoint(in_: com.google.gson.stream.JsonReader): org.maplibre.geojson.Point;
				public readPointList(in_: com.google.gson.stream.JsonReader): java.util.List<java.lang.Double>;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export abstract class BaseGeometryTypeAdapter<G, T> extends com.google.gson.TypeAdapter<any> {
				public static class: java.lang.Class<org.maplibre.geojson.BaseGeometryTypeAdapter<any, any>>;
				public readCoordinateContainer(boundingBoxAdapter: com.google.gson.stream.JsonReader): org.maplibre.geojson.CoordinateContainer<any>;
				public writeCoordinateContainer(boundingBoxAdapter: com.google.gson.stream.JsonWriter, coordinatesAdapter: org.maplibre.geojson.CoordinateContainer<any>): void;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class BoundingBox {
				public static class: java.lang.Class<org.maplibre.geojson.BoundingBox>;
				public static fromPoints(southwest: org.maplibre.geojson.Point, northeast: org.maplibre.geojson.Point): org.maplibre.geojson.BoundingBox;
				public west(): number;
				public static fromJson(json: string): org.maplibre.geojson.BoundingBox;
				/** @deprecated */
				public static fromCoordinates(west: number, south: number, east: number, north: number): org.maplibre.geojson.BoundingBox;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.BoundingBox>;
				public toString(): string;
				public toJson(): string;
				public southwest(): org.maplibre.geojson.Point;
				public static fromLngLats(west: number, south: number, southwestAltitude: number, east: number, north: number, northEastAltitude: number): org.maplibre.geojson.BoundingBox;
				public north(): number;
				public south(): number;
				public equals(this_: any): boolean;
				public static fromLngLats(west: number, south: number, east: number, north: number): org.maplibre.geojson.BoundingBox;
				public east(): number;
				public hashCode(): number;
				/** @deprecated */
				public static fromCoordinates(west: number, south: number, southwestAltitude: number, east: number, north: number, northEastAltitude: number): org.maplibre.geojson.BoundingBox;
				public northeast(): org.maplibre.geojson.Point;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class CoordinateContainer<T> extends org.maplibre.geojson.Geometry {
				public static class: java.lang.Class<org.maplibre.geojson.CoordinateContainer<any>>;
				/**
				 * Constructs a new instance of the org.maplibre.geojson.CoordinateContainer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { coordinates(): any; type(): string; toJson(): string; bbox(): org.maplibre.geojson.BoundingBox });
				public constructor();
				public type(): string;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public coordinates(): any;
				public toJson(): string;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class Feature extends org.maplibre.geojson.GeoJson {
				public static class: java.lang.Class<org.maplibre.geojson.Feature>;
				public id(): string;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.Feature>;
				public getProperty(key: string): com.google.gson.JsonElement;
				public properties(): com.google.gson.JsonObject;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Feature;
				/** @deprecated */
				public getCharacterProperty(key: string): java.lang.Character;
				public static fromJson(json: string): org.maplibre.geojson.Feature;
				public hasNonNullValueForProperty(key: string): boolean;
				public addNumberProperty(key: string, value: java.lang.Number): void;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, properties: com.google.gson.JsonObject, id: string): org.maplibre.geojson.Feature;
				public hashCode(): number;
				public type(): string;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, properties: com.google.gson.JsonObject, id: string, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Feature;
				public addStringProperty(key: string, value: string): void;
				public removeProperty(key: string): com.google.gson.JsonElement;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, properties: com.google.gson.JsonObject): org.maplibre.geojson.Feature;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, properties: com.google.gson.JsonObject, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Feature;
				public geometry(): org.maplibre.geojson.Geometry;
				public getNumberProperty(key: string): java.lang.Number;
				public getBooleanProperty(key: string): java.lang.Boolean;
				public addBooleanProperty(key: string, value: java.lang.Boolean): void;
				public toString(): string;
				public toJson(): string;
				public getStringProperty(key: string): string;
				public hasProperty(key: string): boolean;
				public addProperty(key: string, value: com.google.gson.JsonElement): void;
				public equals(this_: any): boolean;
				public addCharacterProperty(key: string, value: java.lang.Character): void;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry): org.maplibre.geojson.Feature;
				public bbox(): org.maplibre.geojson.BoundingBox;
			}
			export module Feature {
				export class GsonTypeAdapter extends com.google.gson.TypeAdapter<org.maplibre.geojson.Feature> {
					public static class: java.lang.Class<org.maplibre.geojson.Feature.GsonTypeAdapter>;
					public read(boundingBoxTypeAdapter: com.google.gson.stream.JsonReader): org.maplibre.geojson.Feature;
					public write(geometryTypeAdapter: com.google.gson.stream.JsonWriter, jsonObjectTypeAdapter: org.maplibre.geojson.Feature): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class FeatureCollection extends org.maplibre.geojson.GeoJson {
				public static class: java.lang.Class<org.maplibre.geojson.FeatureCollection>;
				public static fromFeature(feature: org.maplibre.geojson.Feature, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.FeatureCollection;
				public toString(): string;
				public static fromJson(json: string): org.maplibre.geojson.FeatureCollection;
				public toJson(): string;
				public static fromFeatures(features: androidNative.Array<org.maplibre.geojson.Feature>): org.maplibre.geojson.FeatureCollection;
				public static fromFeatures(features: java.util.List<org.maplibre.geojson.Feature>): org.maplibre.geojson.FeatureCollection;
				public equals(this_: any): boolean;
				public static fromFeatures(features: androidNative.Array<org.maplibre.geojson.Feature>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.FeatureCollection;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.FeatureCollection>;
				public hashCode(): number;
				public static fromFeatures(features: java.util.List<org.maplibre.geojson.Feature>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.FeatureCollection;
				public type(): string;
				public static fromFeature(feature: org.maplibre.geojson.Feature): org.maplibre.geojson.FeatureCollection;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public features(): java.util.List<org.maplibre.geojson.Feature>;
			}
			export module FeatureCollection {
				export class GsonTypeAdapter extends com.google.gson.TypeAdapter<org.maplibre.geojson.FeatureCollection> {
					public static class: java.lang.Class<org.maplibre.geojson.FeatureCollection.GsonTypeAdapter>;
					public write(boundingBoxTypeAdapter: com.google.gson.stream.JsonWriter, typeToken: org.maplibre.geojson.FeatureCollection): void;
					public read(boundingBoxAdapter: com.google.gson.stream.JsonReader): org.maplibre.geojson.FeatureCollection;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class GeoJson {
				public static class: java.lang.Class<org.maplibre.geojson.GeoJson>;
				/**
				 * Constructs a new instance of the org.maplibre.geojson.GeoJson interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { type(): string; toJson(): string; bbox(): org.maplibre.geojson.BoundingBox });
				public constructor();
				public type(): string;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public toJson(): string;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class Geometry extends org.maplibre.geojson.GeoJson {
				public static class: java.lang.Class<org.maplibre.geojson.Geometry>;
				/**
				 * Constructs a new instance of the org.maplibre.geojson.Geometry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { type(): string; toJson(): string; bbox(): org.maplibre.geojson.BoundingBox });
				public constructor();
				public type(): string;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public toJson(): string;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export abstract class GeometryAdapterFactory {
				public static class: java.lang.Class<org.maplibre.geojson.GeometryAdapterFactory>;
				public static create(): com.google.gson.TypeAdapterFactory;
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class GeometryCollection extends org.maplibre.geojson.Geometry {
				public static class: java.lang.Class<org.maplibre.geojson.GeometryCollection>;
				public static fromJson(json: string): org.maplibre.geojson.GeometryCollection;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.GeometryCollection;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.GeometryCollection>;
				public toString(): string;
				public toJson(): string;
				public geometries(): java.util.List<org.maplibre.geojson.Geometry>;
				public equals(this_: any): boolean;
				public static fromGeometries(geometries: java.util.List<org.maplibre.geojson.Geometry>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.GeometryCollection;
				public static fromGeometries(geometries: java.util.List<org.maplibre.geojson.Geometry>): org.maplibre.geojson.GeometryCollection;
				public hashCode(): number;
				public type(): string;
				public static fromGeometry(geometry: org.maplibre.geojson.Geometry): org.maplibre.geojson.GeometryCollection;
				public bbox(): org.maplibre.geojson.BoundingBox;
			}
			export module GeometryCollection {
				export class GsonTypeAdapter extends com.google.gson.TypeAdapter<org.maplibre.geojson.GeometryCollection> {
					public static class: java.lang.Class<org.maplibre.geojson.GeometryCollection.GsonTypeAdapter>;
					public read(boundingBoxTypeAdapter: com.google.gson.stream.JsonReader): org.maplibre.geojson.GeometryCollection;
					public write(boundingBoxTypeAdapter: com.google.gson.stream.JsonWriter, typeToken: org.maplibre.geojson.GeometryCollection): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class LineString extends org.maplibre.geojson.CoordinateContainer<java.util.List<org.maplibre.geojson.Point>> {
				public static class: java.lang.Class<org.maplibre.geojson.LineString>;
				public toPolyline(precision: number): string;
				public static fromJson(json: string): org.maplibre.geojson.LineString;
				public static fromLngLats(points: java.util.List<org.maplibre.geojson.Point>): org.maplibre.geojson.LineString;
				public static fromLngLats(points: java.util.List<org.maplibre.geojson.Point>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.LineString;
				public toString(): string;
				public toJson(): string;
				public coordinates(): any;
				public static fromLngLats(multiPoint: org.maplibre.geojson.MultiPoint, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.LineString;
				public equals(this_: any): boolean;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.LineString>;
				public hashCode(): number;
				public static fromLngLats(multiPoint: org.maplibre.geojson.MultiPoint): org.maplibre.geojson.LineString;
				public type(): string;
				public static fromPolyline(polyline: string, precision: number): org.maplibre.geojson.LineString;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public coordinates(): java.util.List<org.maplibre.geojson.Point>;
			}
			export module LineString {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.LineString, java.util.List<org.maplibre.geojson.Point>> {
					public static class: java.lang.Class<org.maplibre.geojson.LineString.GsonTypeAdapter>;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.LineString;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.LineString): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class ListOfDoublesCoordinatesTypeAdapter extends org.maplibre.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.lang.Double>> {
				public static class: java.lang.Class<org.maplibre.geojson.ListOfDoublesCoordinatesTypeAdapter>;
				public read(in_: com.google.gson.stream.JsonReader): java.util.List<java.lang.Double>;
				public write(out: com.google.gson.stream.JsonWriter, value: java.util.List<java.lang.Double>): void;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class ListOfListOfPointCoordinatesTypeAdapter extends org.maplibre.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.util.List<org.maplibre.geojson.Point>>> {
				public static class: java.lang.Class<org.maplibre.geojson.ListOfListOfPointCoordinatesTypeAdapter>;
				public write(listOfPoints: com.google.gson.stream.JsonWriter, this_: java.util.List<java.util.List<org.maplibre.geojson.Point>>): void;
				public read(points: com.google.gson.stream.JsonReader): java.util.List<java.util.List<org.maplibre.geojson.Point>>;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class ListOfPointCoordinatesTypeAdapter extends org.maplibre.geojson.BaseCoordinatesTypeAdapter<java.util.List<org.maplibre.geojson.Point>> {
				public static class: java.lang.Class<org.maplibre.geojson.ListOfPointCoordinatesTypeAdapter>;
				public read(this_: com.google.gson.stream.JsonReader): java.util.List<org.maplibre.geojson.Point>;
				public write(this_: com.google.gson.stream.JsonWriter, out: java.util.List<org.maplibre.geojson.Point>): void;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class ListofListofListOfPointCoordinatesTypeAdapter extends org.maplibre.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>> {
				public static class: java.lang.Class<org.maplibre.geojson.ListofListofListOfPointCoordinatesTypeAdapter>;
				public read(listOfListOfPoints: com.google.gson.stream.JsonReader): java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>;
				public write(listOfPoints: com.google.gson.stream.JsonWriter, listOfListOfPoints: java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>): void;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class MultiLineString extends org.maplibre.geojson.CoordinateContainer<java.util.List<java.util.List<org.maplibre.geojson.Point>>> {
				public static class: java.lang.Class<org.maplibre.geojson.MultiLineString>;
				public static fromJson(json: string): org.maplibre.geojson.MultiLineString;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.MultiLineString>;
				public static fromLineString(lineString: org.maplibre.geojson.LineString, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiLineString;
				public toString(): string;
				public coordinates(): java.util.List<java.util.List<org.maplibre.geojson.Point>>;
				public toJson(): string;
				public coordinates(): any;
				public static fromLngLats(points: java.util.List<java.util.List<org.maplibre.geojson.Point>>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiLineString;
				public static fromLineString(lineString: org.maplibre.geojson.LineString): org.maplibre.geojson.MultiLineString;
				public equals(this_: any): boolean;
				public static fromLineStrings(lineString: java.util.List<org.maplibre.geojson.LineString>): org.maplibre.geojson.MultiLineString;
				public hashCode(): number;
				public type(): string;
				public lineStrings(): java.util.List<org.maplibre.geojson.LineString>;
				public static fromLineStrings(lineString: java.util.List<org.maplibre.geojson.LineString>, lineStrings: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiLineString;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public static fromLngLats(points: java.util.List<java.util.List<org.maplibre.geojson.Point>>): org.maplibre.geojson.MultiLineString;
			}
			export module MultiLineString {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.MultiLineString, java.util.List<java.util.List<org.maplibre.geojson.Point>>> {
					public static class: java.lang.Class<org.maplibre.geojson.MultiLineString.GsonTypeAdapter>;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.MultiLineString;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.MultiLineString): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class MultiPoint extends org.maplibre.geojson.CoordinateContainer<java.util.List<org.maplibre.geojson.Point>> {
				public static class: java.lang.Class<org.maplibre.geojson.MultiPoint>;
				public static fromJson(json: string): org.maplibre.geojson.MultiPoint;
				public equals(this_: any): boolean;
				public static fromLngLats(points: java.util.List<org.maplibre.geojson.Point>): org.maplibre.geojson.MultiPoint;
				public hashCode(): number;
				public type(): string;
				public static fromLngLats(points: java.util.List<org.maplibre.geojson.Point>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiPoint;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public coordinates(): java.util.List<org.maplibre.geojson.Point>;
				public toString(): string;
				public toJson(): string;
				public coordinates(): any;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.MultiPoint>;
			}
			export module MultiPoint {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.MultiPoint, java.util.List<org.maplibre.geojson.Point>> {
					public static class: java.lang.Class<org.maplibre.geojson.MultiPoint.GsonTypeAdapter>;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.MultiPoint): void;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.MultiPoint;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class MultiPolygon extends org.maplibre.geojson.CoordinateContainer<java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>> {
				public static class: java.lang.Class<org.maplibre.geojson.MultiPolygon>;
				public static fromPolygons(polygon: java.util.List<org.maplibre.geojson.Polygon>): org.maplibre.geojson.MultiPolygon;
				public static fromLngLats(points: java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiPolygon;
				public static fromPolygon(polygon: org.maplibre.geojson.Polygon, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiPolygon;
				public static fromPolygons(polygon: java.util.List<org.maplibre.geojson.Polygon>, polygons: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.MultiPolygon;
				public toString(): string;
				public toJson(): string;
				public coordinates(): any;
				public static fromLngLats(points: java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>): org.maplibre.geojson.MultiPolygon;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.MultiPolygon>;
				public equals(this_: any): boolean;
				public static fromPolygon(polygon: org.maplibre.geojson.Polygon): org.maplibre.geojson.MultiPolygon;
				public hashCode(): number;
				public polygons(): java.util.List<org.maplibre.geojson.Polygon>;
				public type(): string;
				public static fromJson(json: string): org.maplibre.geojson.MultiPolygon;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public coordinates(): java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>;
			}
			export module MultiPolygon {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.MultiPolygon, java.util.List<java.util.List<java.util.List<org.maplibre.geojson.Point>>>> {
					public static class: java.lang.Class<org.maplibre.geojson.MultiPolygon.GsonTypeAdapter>;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.MultiPolygon): void;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.MultiPolygon;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class Point extends org.maplibre.geojson.CoordinateContainer<java.util.List<java.lang.Double>> {
				public static class: java.lang.Class<org.maplibre.geojson.Point>;
				public static fromLngLat(longitude: number, latitude: number): org.maplibre.geojson.Point;
				public hasAltitude(): boolean;
				public static fromJson(json: string): org.maplibre.geojson.Point;
				public altitude(): number;
				public coordinates(): java.util.List<java.lang.Double>;
				public longitude(): number;
				public toString(): string;
				public toJson(): string;
				public coordinates(): any;
				public static fromLngLat(longitude: number, latitude: number, altitude: number, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Point;
				public static fromLngLat(longitude: number, latitude: number, altitude: number): org.maplibre.geojson.Point;
				public latitude(): number;
				public equals(this_: any): boolean;
				public static fromLngLat(longitude: number, latitude: number, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Point;
				public hashCode(): number;
				public type(): string;
				public bbox(): org.maplibre.geojson.BoundingBox;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.Point>;
			}
			export module Point {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.Point, java.util.List<java.lang.Double>> {
					public static class: java.lang.Class<org.maplibre.geojson.Point.GsonTypeAdapter>;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.Point;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.Point): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class PointAsCoordinatesTypeAdapter extends org.maplibre.geojson.BaseCoordinatesTypeAdapter<org.maplibre.geojson.Point> {
				public static class: java.lang.Class<org.maplibre.geojson.PointAsCoordinatesTypeAdapter>;
				public write(out: com.google.gson.stream.JsonWriter, value: org.maplibre.geojson.Point): void;
				public read(in_: com.google.gson.stream.JsonReader): org.maplibre.geojson.Point;
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export class Polygon extends org.maplibre.geojson.CoordinateContainer<java.util.List<java.util.List<org.maplibre.geojson.Point>>> {
				public static class: java.lang.Class<org.maplibre.geojson.Polygon>;
				public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<org.maplibre.geojson.Polygon>;
				public static fromJson(json: string): org.maplibre.geojson.Polygon;
				public static fromLngLats(coordinates: java.util.List<java.util.List<org.maplibre.geojson.Point>>, bbox: org.maplibre.geojson.BoundingBox): org.maplibre.geojson.Polygon;
				public static fromOuterInner(lineString: org.maplibre.geojson.LineString, outer: java.util.List<org.maplibre.geojson.LineString>): org.maplibre.geojson.Polygon;
				public static fromLngLats(coordinates: java.util.List<java.util.List<org.maplibre.geojson.Point>>): org.maplibre.geojson.Polygon;
				public toString(): string;
				public coordinates(): java.util.List<java.util.List<org.maplibre.geojson.Point>>;
				public toJson(): string;
				public coordinates(): any;
				public static fromOuterInner(lineString: org.maplibre.geojson.LineString, outer: org.maplibre.geojson.BoundingBox, bbox: java.util.List<org.maplibre.geojson.LineString>): org.maplibre.geojson.Polygon;
				public equals(this_: any): boolean;
				public static fromOuterInner(lineString: org.maplibre.geojson.LineString, outer: org.maplibre.geojson.BoundingBox, bbox: androidNative.Array<org.maplibre.geojson.LineString>): org.maplibre.geojson.Polygon;
				public outer(): org.maplibre.geojson.LineString;
				public hashCode(): number;
				public type(): string;
				public static fromOuterInner(lineString: org.maplibre.geojson.LineString, outer: androidNative.Array<org.maplibre.geojson.LineString>): org.maplibre.geojson.Polygon;
				public inner(): java.util.List<org.maplibre.geojson.LineString>;
				public bbox(): org.maplibre.geojson.BoundingBox;
			}
			export module Polygon {
				export class GsonTypeAdapter extends org.maplibre.geojson.BaseGeometryTypeAdapter<org.maplibre.geojson.Polygon, java.util.List<java.util.List<org.maplibre.geojson.Point>>> {
					public static class: java.lang.Class<org.maplibre.geojson.Polygon.GsonTypeAdapter>;
					public read(jsonReader: com.google.gson.stream.JsonReader): org.maplibre.geojson.Polygon;
					public write(jsonWriter: com.google.gson.stream.JsonWriter, object: org.maplibre.geojson.Polygon): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module constants {
				export class GeoJsonConstants {
					public static class: java.lang.Class<org.maplibre.geojson.constants.GeoJsonConstants>;
					public static MIN_LONGITUDE: number = -180.0;
					public static MAX_LONGITUDE: number = 180.0;
					public static MIN_LATITUDE: number = -90.0;
					public static MAX_LATITUDE: number = 90.0;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module exception {
				export class GeoJsonException {
					public static class: java.lang.Class<org.maplibre.geojson.exception.GeoJsonException>;
					public constructor(message: string);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module gson {
				export class BoundingBoxTypeAdapter extends com.google.gson.TypeAdapter<org.maplibre.geojson.BoundingBox> {
					public static class: java.lang.Class<org.maplibre.geojson.gson.BoundingBoxTypeAdapter>;
					public constructor();
					public read(in_: com.google.gson.stream.JsonReader): org.maplibre.geojson.BoundingBox;
					public write(out: com.google.gson.stream.JsonWriter, value: org.maplibre.geojson.BoundingBox): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module gson {
				export abstract class GeoJsonAdapterFactory {
					public static class: java.lang.Class<org.maplibre.geojson.gson.GeoJsonAdapterFactory>;
					public static create(): com.google.gson.TypeAdapterFactory;
					public constructor();
				}
				export module GeoJsonAdapterFactory {
					export class GeoJsonAdapterFactoryIml extends org.maplibre.geojson.gson.GeoJsonAdapterFactory {
						public static class: java.lang.Class<org.maplibre.geojson.gson.GeoJsonAdapterFactory.GeoJsonAdapterFactoryIml>;
						public constructor();
						public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						public static create(): com.google.gson.TypeAdapterFactory;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module gson {
				export class GeometryGeoJson {
					public static class: java.lang.Class<org.maplibre.geojson.gson.GeometryGeoJson>;
					public static fromJson(json: string): org.maplibre.geojson.Geometry;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module internal {
				export module typeadapters {
					export class RuntimeTypeAdapterFactory<T> extends com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>>;
						public static of(baseType: java.lang.Class<any>, typeFieldName: string, maintainType: boolean): org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
						public static of(baseType: java.lang.Class<any>, typeFieldName: string): org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
						public registerSubtype(type: java.lang.Class<any>, label: string): org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
						public create(entry: com.google.gson.Gson, this_: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						public static of(baseType: java.lang.Class<any>): org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
						public registerSubtype(type: java.lang.Class<any>): org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module shifter {
				export class CoordinateShifter {
					public static class: java.lang.Class<org.maplibre.geojson.shifter.CoordinateShifter>;
					/**
					 * Constructs a new instance of the org.maplibre.geojson.shifter.CoordinateShifter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { shiftLonLat(param0: number, param1: number): java.util.List<java.lang.Double>; shiftLonLatAlt(param0: number, param1: number, param2: number): java.util.List<java.lang.Double>; unshiftPoint(param0: org.maplibre.geojson.Point): java.util.List<java.lang.Double>; unshiftPoint(param0: java.util.List<java.lang.Double>): java.util.List<java.lang.Double> });
					public constructor();
					public unshiftPoint(param0: org.maplibre.geojson.Point): java.util.List<java.lang.Double>;
					public shiftLonLatAlt(param0: number, param1: number, param2: number): java.util.List<java.lang.Double>;
					public shiftLonLat(param0: number, param1: number): java.util.List<java.lang.Double>;
					public unshiftPoint(param0: java.util.List<java.lang.Double>): java.util.List<java.lang.Double>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module shifter {
				export class CoordinateShifterManager {
					public static class: java.lang.Class<org.maplibre.geojson.shifter.CoordinateShifterManager>;
					public static getCoordinateShifter(): org.maplibre.geojson.shifter.CoordinateShifter;
					public constructor();
					public static isUsingDefaultShifter(): boolean;
					public static setCoordinateShifter(coordinateShifter: org.maplibre.geojson.shifter.CoordinateShifter): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module utils {
				export class GeoJsonUtils {
					public static class: java.lang.Class<org.maplibre.geojson.utils.GeoJsonUtils>;
					public constructor();
					public static trim(value: number): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module geojson {
			export module utils {
				export class PolylineUtils {
					public static class: java.lang.Class<org.maplibre.geojson.utils.PolylineUtils>;
					public static decode(result: string, shift: number): java.util.List<org.maplibre.geojson.Point>;
					public static simplify(points: java.util.List<org.maplibre.geojson.Point>, tolerance: number, highestQuality: boolean): java.util.List<org.maplibre.geojson.Point>;
					public static encode(lat: java.util.List<org.maplibre.geojson.Point>, lng: number): string;
					public static simplify(points: java.util.List<org.maplibre.geojson.Point>, tolerance: number): java.util.List<org.maplibre.geojson.Point>;
					public static simplify(points: java.util.List<org.maplibre.geojson.Point>): java.util.List<org.maplibre.geojson.Point>;
					public static simplify(points: java.util.List<org.maplibre.geojson.Point>, highestQuality: boolean): java.util.List<org.maplibre.geojson.Point>;
				}
			}
		}
	}
}

//Generics information:
//org.maplibre.geojson.BaseCoordinatesTypeAdapter:1
//org.maplibre.geojson.BaseGeometryTypeAdapter:2
//org.maplibre.geojson.CoordinateContainer:1
//org.maplibre.geojson.internal.typeadapters.RuntimeTypeAdapterFactory:1
