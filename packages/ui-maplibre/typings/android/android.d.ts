/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module maplibre {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<org.maplibre.android.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = 'org.maplibre.android';
				public static BUILD_TYPE: string = 'release';
				public static FLAVOR: string = 'opengl';
				public static GIT_REVISION: string = '9e2084d3a7707bfdbb4bafdeb1bd067578b31585';
				public static GIT_REVISION_SHORT: string = '9e2084d';
				public static MAPLIBRE_VERSION_STRING: string = 'MapLibre Android/11.13.5';
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export abstract class LibraryLoader {
				public static class: java.lang.Class<org.maplibre.android.LibraryLoader>;
				public static setLibraryLoader(libraryLoader: org.maplibre.android.LibraryLoader): void;
				public static load(): void;
				public load(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class LibraryLoaderProvider {
				public static class: java.lang.Class<org.maplibre.android.LibraryLoaderProvider>;
				/**
				 * Constructs a new instance of the org.maplibre.android.LibraryLoaderProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { getDefaultLibraryLoader(): org.maplibre.android.LibraryLoader });
				public constructor();
				public getDefaultLibraryLoader(): org.maplibre.android.LibraryLoader;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class MapLibre {
				public static class: java.lang.Class<org.maplibre.android.MapLibre>;
				public static getApplicationContext(): globalAndroid.content.Context;
				public static getPredefinedStyle(style: string): org.maplibre.android.util.DefaultStyle;
				public static isConnected(): java.lang.Boolean;
				public static getInstance(appContext: globalAndroid.content.Context, context: string, apiKey: org.maplibre.android.WellKnownTileServer): org.maplibre.android.MapLibre;
				public static setApiKey(apiKey: string): void;
				public static getModuleProvider(): org.maplibre.android.ModuleProvider;
				public static throwIfApiKeyInvalid(apiKey: string): void;
				public static getTileServerOptions(): org.maplibre.android.util.TileServerOptions;
				public static getInstance(appContext: globalAndroid.content.Context): org.maplibre.android.MapLibre;
				public static setModuleProvider(provider: org.maplibre.android.ModuleProvider): void;
				public static setConnected(connected: java.lang.Boolean): void;
				public static hasInstance(): boolean;
				public static getPredefinedStyles(): androidNative.Array<org.maplibre.android.util.DefaultStyle>;
				public static getApiKey(): string;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class MapStrictMode {
				public static class: java.lang.Class<org.maplibre.android.MapStrictMode>;
				public static strictModeViolation(message: string): void;
				public static strictModeViolation(throwable: java.lang.Throwable): void;
				public static setStrictModeEnabled(strictModeEnabled: boolean): void;
				public static strictModeViolation(message: string, throwable: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class MapStrictModeException {
				public static class: java.lang.Class<org.maplibre.android.MapStrictModeException>;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class ModuleProvider {
				public static class: java.lang.Class<org.maplibre.android.ModuleProvider>;
				/**
				 * Constructs a new instance of the org.maplibre.android.ModuleProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { createHttpRequest(): org.maplibre.android.http.HttpRequest; createLibraryLoaderProvider(): org.maplibre.android.LibraryLoaderProvider });
				public constructor();
				public createLibraryLoaderProvider(): org.maplibre.android.LibraryLoaderProvider;
				public createHttpRequest(): org.maplibre.android.http.HttpRequest;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class ModuleProviderImpl extends org.maplibre.android.ModuleProvider {
				public static class: java.lang.Class<org.maplibre.android.ModuleProviderImpl>;
				public createLibraryLoaderProvider(): org.maplibre.android.LibraryLoaderProvider;
				public createHttpRequest(): org.maplibre.android.http.HttpRequest;
				public constructor();
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export class WellKnownTileServer {
				public static class: java.lang.Class<org.maplibre.android.WellKnownTileServer>;
				public static Mapbox: org.maplibre.android.WellKnownTileServer;
				public static MapTiler: org.maplibre.android.WellKnownTileServer;
				public static MapLibre: org.maplibre.android.WellKnownTileServer;
				public static values(): androidNative.Array<org.maplibre.android.WellKnownTileServer>;
				public static valueOf(name: string): org.maplibre.android.WellKnownTileServer;
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export abstract class Annotation extends java.lang.Comparable<org.maplibre.android.annotations.Annotation> {
					public static class: java.lang.Class<org.maplibre.android.annotations.Annotation>;
					public maplibreMap: org.maplibre.android.maps.MapLibreMap;
					public mapView: org.maplibre.android.maps.MapView;
					public setMapView(mapView: org.maplibre.android.maps.MapView): void;
					public getMapLibreMap(): org.maplibre.android.maps.MapLibreMap;
					public compareTo(annotation: org.maplibre.android.annotations.Annotation): number;
					public equals(object: any): boolean;
					public constructor();
					public setId(id: number): void;
					public getId(): number;
					public hashCode(): number;
					public setMapLibreMap(maplibreMap: org.maplibre.android.maps.MapLibreMap): void;
					public getMapView(): org.maplibre.android.maps.MapView;
					public remove(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class ArrowDirection {
					public static class: java.lang.Class<org.maplibre.android.annotations.ArrowDirection>;
					public getValue(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export abstract class BaseMarkerOptions<U, T> extends globalAndroid.os.Parcelable {
					public static class: java.lang.Class<org.maplibre.android.annotations.BaseMarkerOptions<any, any>>;
					public setTitle(title: string): any;
					public getThis(): any;
					public snippet(snippet: string): any;
					public constructor();
					public title(title: string): any;
					public setSnippet(snippet: string): any;
					public setPosition(position: org.maplibre.android.geometry.LatLng): any;
					public setIcon(icon: org.maplibre.android.annotations.Icon): any;
					public position(position: org.maplibre.android.geometry.LatLng): any;
					public getMarker(): any;
					public icon(icon: org.maplibre.android.annotations.Icon): any;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export abstract class BasePointCollection extends org.maplibre.android.annotations.Annotation {
					public static class: java.lang.Class<org.maplibre.android.annotations.BasePointCollection>;
					public getAlpha(): number;
					public constructor();
					public addPoint(point: org.maplibre.android.geometry.LatLng): void;
					public getPoints(): java.util.List<org.maplibre.android.geometry.LatLng>;
					public setAlpha(alpha: number): void;
					public setPoints(points: java.util.List<org.maplibre.android.geometry.LatLng>): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class Bubble {
					public static class: java.lang.Class<org.maplibre.android.annotations.Bubble>;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getIntrinsicHeight(): number;
					public setAlpha(alpha: number): void;
					public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
					public getIntrinsicWidth(): number;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class BubbleLayout {
					public static class: java.lang.Class<org.maplibre.android.annotations.BubbleLayout>;
					public static DEFAULT_STROKE_WIDTH: number = -1.0;
					public getStrokeWidth(): number;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
					public getBubbleColor(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setArrowPosition(arrowPosition: number): org.maplibre.android.annotations.BubbleLayout;
					public setArrowWidth(arrowWidth: number): org.maplibre.android.annotations.BubbleLayout;
					public getArrowHeight(): number;
					public setStrokeWidth(strokeWidth: number): org.maplibre.android.annotations.BubbleLayout;
					public setBubbleColor(bubbleColor: number): org.maplibre.android.annotations.BubbleLayout;
					public getArrowWidth(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public setArrowDirection(arrowDirection: org.maplibre.android.annotations.ArrowDirection): org.maplibre.android.annotations.BubbleLayout;
					public getCornersRadius(): number;
					public constructor(context: globalAndroid.content.Context);
					public getArrowDirection(): org.maplibre.android.annotations.ArrowDirection;
					public setArrowHeight(arrowHeight: number): org.maplibre.android.annotations.BubbleLayout;
					public setCornersRadius(cornersRadius: number): org.maplibre.android.annotations.BubbleLayout;
					public getArrowPosition(): number;
					public getStrokeColor(): number;
					public setStrokeColor(strokeColor: number): org.maplibre.android.annotations.BubbleLayout;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class BubblePopupHelper {
					public static class: java.lang.Class<org.maplibre.android.annotations.BubblePopupHelper>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class Icon {
					public static class: java.lang.Class<org.maplibre.android.annotations.Icon>;
					public toBytes(): androidNative.Array<number>;
					public equals(object: any): boolean;
					public getId(): string;
					public getScale(): number;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class IconFactory {
					public static class: java.lang.Class<org.maplibre.android.annotations.IconFactory>;
					public fromResource(this_: number): org.maplibre.android.annotations.Icon;
					public static recreate(iconId: string, bitmap: globalAndroid.graphics.Bitmap): org.maplibre.android.annotations.Icon;
					public fromPath(absolutePath: string): org.maplibre.android.annotations.Icon;
					public static getInstance(context: globalAndroid.content.Context): org.maplibre.android.annotations.IconFactory;
					public fromFile(fileNotFoundException: string): org.maplibre.android.annotations.Icon;
					public fromBitmap(bitmap: globalAndroid.graphics.Bitmap): org.maplibre.android.annotations.Icon;
					public defaultMarker(): org.maplibre.android.annotations.Icon;
					public fromAsset(ioException: string): org.maplibre.android.annotations.Icon;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class InfoWindow {
					public static class: java.lang.Class<org.maplibre.android.annotations.InfoWindow>;
					public view: java.lang.ref.WeakReference<globalAndroid.view.View>;
					public getView(): globalAndroid.view.View;
					public update(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class Marker extends org.maplibre.android.annotations.Annotation {
					public static class: java.lang.Class<org.maplibre.android.annotations.Marker>;
					public getTitle(): string;
					public getInfoWindow(): org.maplibre.android.annotations.InfoWindow;
					public showInfoWindow(this_: org.maplibre.android.maps.MapLibreMap, maplibreMap: org.maplibre.android.maps.MapView): org.maplibre.android.annotations.InfoWindow;
					public getPosition(): org.maplibre.android.geometry.LatLng;
					public setIcon(icon: org.maplibre.android.annotations.Icon): void;
					public setRightOffsetPixels(rightOffsetPixels: number): void;
					public isInfoWindowShown(): boolean;
					public setPosition(position: org.maplibre.android.geometry.LatLng): void;
					public toString(): string;
					public getSnippet(): string;
					public getIcon(): org.maplibre.android.annotations.Icon;
					public constructor();
					public setSnippet(snippet: string): void;
					public constructor(baseMarkerOptions: org.maplibre.android.annotations.BaseMarkerOptions<any, any>);
					public hideInfoWindow(): void;
					public setTopOffsetPixels(topOffsetPixels: number): void;
					public setTitle(title: string): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class MarkerOptions extends org.maplibre.android.annotations.BaseMarkerOptions<org.maplibre.android.annotations.Marker, org.maplibre.android.annotations.MarkerOptions> implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<org.maplibre.android.annotations.MarkerOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.annotations.MarkerOptions>;
					public getTitle(): string;
					public getPosition(): org.maplibre.android.geometry.LatLng;
					public getThis(): org.maplibre.android.annotations.MarkerOptions;
					public describeContents(): number;
					public getMarker(): org.maplibre.android.annotations.Marker;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public equals(o: any): boolean;
					public getThis(): any;
					public getSnippet(): string;
					public getIcon(): org.maplibre.android.annotations.Icon;
					public constructor();
					public constructor(iconBitmap: globalAndroid.os.Parcel);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class Polygon extends org.maplibre.android.annotations.BasePointCollection {
					public static class: java.lang.Class<org.maplibre.android.annotations.Polygon>;
					public setHoles(holes: java.util.List<any>): void;
					public setFillColor(color: number): void;
					public getFillColor(): number;
					public getStrokeColor(): number;
					public setStrokeColor(color: number): void;
					public getHoles(): java.util.List<java.util.List<org.maplibre.android.geometry.LatLng>>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class PolygonOptions {
					public static class: java.lang.Class<org.maplibre.android.annotations.PolygonOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.annotations.PolygonOptions>;
					public add(point: org.maplibre.android.geometry.LatLng): org.maplibre.android.annotations.PolygonOptions;
					public getAlpha(): number;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public equals(o: any): boolean;
					public addHole(hole: java.util.List<org.maplibre.android.geometry.LatLng>): org.maplibre.android.annotations.PolygonOptions;
					public addAllHoles(this_: java.lang.Iterable<java.util.List<org.maplibre.android.geometry.LatLng>>): org.maplibre.android.annotations.PolygonOptions;
					public getPolygon(): org.maplibre.android.annotations.Polygon;
					public addAll(this_: java.lang.Iterable<org.maplibre.android.geometry.LatLng>): org.maplibre.android.annotations.PolygonOptions;
					public constructor();
					public getPoints(): java.util.List<org.maplibre.android.geometry.LatLng>;
					public addHole(this_: androidNative.Array<java.util.List<org.maplibre.android.geometry.LatLng>>): org.maplibre.android.annotations.PolygonOptions;
					public fillColor(color: number): org.maplibre.android.annotations.PolygonOptions;
					public add(this_: androidNative.Array<org.maplibre.android.geometry.LatLng>): org.maplibre.android.annotations.PolygonOptions;
					public getFillColor(): number;
					public getStrokeColor(): number;
					public hashCode(): number;
					public getHoles(): java.util.List<java.util.List<org.maplibre.android.geometry.LatLng>>;
					public alpha(alpha: number): org.maplibre.android.annotations.PolygonOptions;
					public strokeColor(color: number): org.maplibre.android.annotations.PolygonOptions;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class Polyline extends org.maplibre.android.annotations.BasePointCollection {
					public static class: java.lang.Class<org.maplibre.android.annotations.Polyline>;
					public setColor(color: number): void;
					public getColor(): number;
					public setWidth(width: number): void;
					public getWidth(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module annotations {
				export class PolylineOptions {
					public static class: java.lang.Class<org.maplibre.android.annotations.PolylineOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.annotations.PolylineOptions>;
					public getAlpha(): number;
					public addAll(this_: java.lang.Iterable<org.maplibre.android.geometry.LatLng>): org.maplibre.android.annotations.PolylineOptions;
					public color(color: number): org.maplibre.android.annotations.PolylineOptions;
					public getColor(): number;
					public width(width: number): org.maplibre.android.annotations.PolylineOptions;
					public describeContents(): number;
					public getWidth(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public equals(o: any): boolean;
					public add(this_: androidNative.Array<org.maplibre.android.geometry.LatLng>): org.maplibre.android.annotations.PolylineOptions;
					public alpha(alpha: number): org.maplibre.android.annotations.PolylineOptions;
					public constructor();
					public getPoints(): java.util.List<org.maplibre.android.geometry.LatLng>;
					public add(point: org.maplibre.android.geometry.LatLng): org.maplibre.android.annotations.PolylineOptions;
					public hashCode(): number;
					public getPolyline(): org.maplibre.android.annotations.Polyline;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module attribution {
				export class Attribution {
					public static class: java.lang.Class<org.maplibre.android.attribution.Attribution>;
					public getTitle(): string;
					public getUrl(): string;
					public equals(o: any): boolean;
					public hashCode(): number;
					public getTitleAbbreviated(): string;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module attribution {
				export class AttributionLayout {
					public static class: java.lang.Class<org.maplibre.android.attribution.AttributionLayout>;
					public constructor(logo: globalAndroid.graphics.Bitmap, anchorPoint: globalAndroid.graphics.PointF, shortText: boolean);
					public toString(): string;
					public getLogo(): globalAndroid.graphics.Bitmap;
					public equals(o: any): boolean;
					public hashCode(): number;
					public getAnchorPoint(): globalAndroid.graphics.PointF;
					public isShortText(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module attribution {
				export class AttributionMeasure {
					public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure>;
					public getTextView(): globalAndroid.widget.TextView;
					public measure(): org.maplibre.android.attribution.AttributionLayout;
				}
				export module AttributionMeasure {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.Builder>;
						public constructor();
						public build(): org.maplibre.android.attribution.AttributionMeasure;
						public setTextViewShort(textViewShort: globalAndroid.widget.TextView): org.maplibre.android.attribution.AttributionMeasure.Builder;
						public setSnapshot(snapshot: globalAndroid.graphics.Bitmap): org.maplibre.android.attribution.AttributionMeasure.Builder;
						public setTextView(textView: globalAndroid.widget.TextView): org.maplibre.android.attribution.AttributionMeasure.Builder;
						public setLogoSmall(logoSmall: globalAndroid.graphics.Bitmap): org.maplibre.android.attribution.AttributionMeasure.Builder;
						public setMarginPadding(marginPadding: number): org.maplibre.android.attribution.AttributionMeasure.Builder;
						public setLogo(logo: globalAndroid.graphics.Bitmap): org.maplibre.android.attribution.AttributionMeasure.Builder;
					}
					export class Chain {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.Chain>;
						public commands: java.util.List<org.maplibre.android.attribution.AttributionMeasure.Command>;
						public start(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.Command>;
						/**
						 * Constructs a new instance of the org.maplibre.android.attribution.AttributionMeasure$Command interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout });
						public constructor();
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class FullLogoLongTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.FullLogoLongTextCommand>;
						public execute(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class FullLogoShortTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.FullLogoShortTextCommand>;
						public execute(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class LongTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.LongTextCommand>;
						public execute(measure: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class NoTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.NoTextCommand>;
						public execute(measure: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class ShortTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.ShortTextCommand>;
						public execute(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class SmallLogoLongTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.SmallLogoLongTextCommand>;
						public execute(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
					export class SmallLogoShortTextCommand extends org.maplibre.android.attribution.AttributionMeasure.Command {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionMeasure.SmallLogoShortTextCommand>;
						public execute(this_: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
						public execute(param0: org.maplibre.android.attribution.AttributionMeasure): org.maplibre.android.attribution.AttributionLayout;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module attribution {
				export class AttributionParser {
					public static class: java.lang.Class<org.maplibre.android.attribution.AttributionParser>;
					public createAttributionString(): string;
					public parse(): void;
					public getAttributions(): java.util.Set<org.maplibre.android.attribution.Attribution>;
					public createAttributionString(this_: boolean): string;
				}
				export module AttributionParser {
					export class Options {
						public static class: java.lang.Class<org.maplibre.android.attribution.AttributionParser.Options>;
						public withMapboxAttribution(withMapboxAttribution: boolean): org.maplibre.android.attribution.AttributionParser.Options;
						public withCopyrightSign(withCopyrightSign: boolean): org.maplibre.android.attribution.AttributionParser.Options;
						public withImproveMap(withImproveMap: boolean): org.maplibre.android.attribution.AttributionParser.Options;
						public build(): org.maplibre.android.attribution.AttributionParser;
						public withAttributionData(attributionData: androidNative.Array<string>): org.maplibre.android.attribution.AttributionParser.Options;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module camera {
				export class CameraPosition {
					public static class: java.lang.Class<org.maplibre.android.camera.CameraPosition>;
					public target: org.maplibre.android.geometry.LatLng;
					public zoom: number;
					public tilt: number;
					public bearing: number;
					public padding: androidNative.Array<number>;
					public static DEFAULT: org.maplibre.android.camera.CameraPosition;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.camera.CameraPosition>;
					public writeToParcel(length: globalAndroid.os.Parcel, this_: number): void;
					public toString(): string;
					public equals(this_: any): boolean;
					public describeContents(): number;
					public constructor(target: org.maplibre.android.geometry.LatLng, zoom: number, tilt: number, bearing: number, padding: androidNative.Array<number>);
					/** @deprecated */
					public constructor(target: org.maplibre.android.geometry.LatLng, zoom: number, tilt: number, bearing: number);
					public hashCode(): number;
				}
				export module CameraPosition {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.camera.CameraPosition.Builder>;
						public constructor(lng: globalAndroid.content.res.TypedArray);
						public build(): org.maplibre.android.camera.CameraPosition;
						public constructor();
						public constructor(update: org.maplibre.android.camera.CameraUpdateFactory.ZoomUpdate);
						public bearing(this_: number): org.maplibre.android.camera.CameraPosition.Builder;
						public padding(padding: androidNative.Array<number>): org.maplibre.android.camera.CameraPosition.Builder;
						public tilt(tilt: number): org.maplibre.android.camera.CameraPosition.Builder;
						public target(location: org.maplibre.android.geometry.LatLng): org.maplibre.android.camera.CameraPosition.Builder;
						public zoom(zoom: number): org.maplibre.android.camera.CameraPosition.Builder;
						public constructor(previous: org.maplibre.android.camera.CameraPosition);
						public constructor(update: org.maplibre.android.camera.CameraUpdateFactory.CameraPositionUpdate);
						public padding(left: number, top: number, right: number, bottom: number): org.maplibre.android.camera.CameraPosition.Builder;
					}
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.camera.CameraPosition.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module camera {
				export class CameraUpdate {
					public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdate>;
					/**
					 * Constructs a new instance of the org.maplibre.android.camera.CameraUpdate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getCameraPosition(param0: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition });
					public constructor();
					public getCameraPosition(param0: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module camera {
				export class CameraUpdateFactory {
					public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory>;
					public static INSTANCE: org.maplibre.android.camera.CameraUpdateFactory;
					public static paddingTo(padding: androidNative.Array<number>): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngBounds(bounds: org.maplibre.android.geometry.LatLngBounds, bearing: number, tilt: number, padding: number): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngPadding(latLng: org.maplibre.android.geometry.LatLng, left: number, top: number, right: number, bottom: number): org.maplibre.android.camera.CameraUpdate;
					public static newCameraPosition(cameraPosition: org.maplibre.android.camera.CameraPosition): org.maplibre.android.camera.CameraUpdate;
					public static bearingTo(bearing: number): org.maplibre.android.camera.CameraUpdate;
					public static zoomBy(amount: number): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngZoom(latLng: org.maplibre.android.geometry.LatLng, zoom: number): org.maplibre.android.camera.CameraUpdate;
					public static zoomTo(zoom: number): org.maplibre.android.camera.CameraUpdate;
					public static paddingTo(left: number, top: number, right: number, bottom: number): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngBounds(bounds: org.maplibre.android.geometry.LatLngBounds, bearing: number, tilt: number, paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngBounds(bounds: org.maplibre.android.geometry.LatLngBounds, paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): org.maplibre.android.camera.CameraUpdate;
					public static newLatLng(latLng: org.maplibre.android.geometry.LatLng): org.maplibre.android.camera.CameraUpdate;
					public static zoomBy(amount: number, focus: globalAndroid.graphics.Point): org.maplibre.android.camera.CameraUpdate;
					public static newLatLngBounds(bounds: org.maplibre.android.geometry.LatLngBounds, padding: number): org.maplibre.android.camera.CameraUpdate;
					public static zoomOut(): org.maplibre.android.camera.CameraUpdate;
					public static tiltTo(tilt: number): org.maplibre.android.camera.CameraUpdate;
					public static zoomIn(): org.maplibre.android.camera.CameraUpdate;
				}
				export module CameraUpdateFactory {
					export class CameraBoundsUpdate extends org.maplibre.android.camera.CameraUpdate {
						public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory.CameraBoundsUpdate>;
						public getPadding(): androidNative.Array<number>;
						public getCameraPosition(param0: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public getBounds(): org.maplibre.android.geometry.LatLngBounds;
						public getCameraPosition(maplibreMap: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public equals(this_: any): boolean;
						public constructor(bounds: org.maplibre.android.geometry.LatLngBounds, bearing: java.lang.Double, tilt: java.lang.Double, padding: androidNative.Array<number>);
						public hashCode(): number;
						public constructor(bounds: org.maplibre.android.geometry.LatLngBounds, bearing: java.lang.Double, tilt: java.lang.Double, paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number);
						public toString(): string;
					}
					export class CameraPositionUpdate extends org.maplibre.android.camera.CameraUpdate {
						public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory.CameraPositionUpdate>;
						public getPadding(): androidNative.Array<number>;
						public getCameraPosition(param0: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public equals(this_: any): boolean;
						public getTarget(): org.maplibre.android.geometry.LatLng;
						public getZoom(): number;
						public getCameraPosition(this_: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public getBearing(): number;
						public getTilt(): number;
						public hashCode(): number;
						public constructor(bearing: number, target: org.maplibre.android.geometry.LatLng, tilt: number, zoom: number, padding: androidNative.Array<number>);
						public toString(): string;
					}
					export class ZoomUpdate extends org.maplibre.android.camera.CameraUpdate {
						public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory.ZoomUpdate>;
						public static ZOOM_IN: number = 0;
						public static ZOOM_OUT: number = 1;
						public static ZOOM_BY: number = 2;
						public static ZOOM_TO: number = 3;
						public static ZOOM_TO_POINT: number = 4;
						public getCameraPosition(param0: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public equals(this_: any): boolean;
						public getZoom(): number;
						public getX(): number;
						public getCameraPosition(this_: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.camera.CameraPosition;
						public getY(): number;
						public hashCode(): number;
						public getType(): number;
						public constructor(type: number);
						public constructor(zoom: number, x: number, y: number);
						public toString(): string;
						public constructor(type: number, zoom: number);
					}
					export module ZoomUpdate {
						export class Companion {
							public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory.ZoomUpdate.Companion>;
						}
						export class Type {
							public static class: java.lang.Class<org.maplibre.android.camera.CameraUpdateFactory.ZoomUpdate.Type>;
							/**
							 * Constructs a new instance of the org.maplibre.android.camera.CameraUpdateFactory$ZoomUpdate$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module constants {
				export class GeometryConstants {
					public static class: java.lang.Class<org.maplibre.android.constants.GeometryConstants>;
					public static RADIUS_EARTH_METERS: number = 6378137;
					public static MIN_WRAP_LONGITUDE: number = -180.0;
					public static MAX_WRAP_LONGITUDE: number = 180.0;
					public static MIN_LONGITUDE: number = -1.7976931348623157e308;
					public static MAX_LONGITUDE: number = 1.7976931348623157e308;
					public static MIN_LATITUDE: number = -90.0;
					public static LATITUDE_SPAN: number = 180.0;
					public static LONGITUDE_SPAN: number = 360.0;
					public static MAX_LATITUDE: number = 90.0;
					public static MAX_MERCATOR_LATITUDE: number = 85.05112877980659;
					public static MIN_MERCATOR_LATITUDE: number = -85.05112877980659;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module constants {
				export class MapLibreConstants {
					public static class: java.lang.Class<org.maplibre.android.constants.MapLibreConstants>;
					public static MAPLIBRE_LOCALE: java.util.Locale;
					public static MAPLIBRE_SHARED_PREFERENCES: string = 'MapboxSharedPreferences';
					public static KEY_META_DATA_SET_STORAGE_EXTERNAL: string = 'com.mapbox.SetStorageExternal';
					public static DEFAULT_SET_STORAGE_EXTERNAL: boolean = 0;
					public static KEY_META_DATA_MEASURE_TILE_DOWNLOAD_ON: string = 'com.mapbox.MeasureTileDownloadOn';
					public static DEFAULT_MEASURE_TILE_DOWNLOAD_ON: boolean = 0;
					public static DEFAULT_FONT: string = 'sans-serif';
					public static UNMEASURED: number = -1.0;
					public static ANIMATION_DURATION: number = 300;
					public static ANIMATION_DURATION_SHORT: number = 150;
					public static ANIMATION_DURATION_FLING_BASE: number = 150;
					public static VELOCITY_THRESHOLD_IGNORE_FLING: number = 1000;
					public static ANGLE_THRESHOLD_IGNORE_VERTICAL_FLING: number = 75;
					public static ROTATION_THRESHOLD_INCREASE_WHEN_SCALING: number = 25.0;
					public static MAX_ABSOLUTE_SCALE_VELOCITY_CHANGE: number = 2.5;
					public static QUICK_ZOOM_MAX_ZOOM_CHANGE: number = 4.0;
					public static SCALE_VELOCITY_ANIMATION_DURATION_MULTIPLIER: number = 150.0;
					public static MINIMUM_ANGULAR_VELOCITY: number = 1.5;
					public static SCALE_VELOCITY_RATIO_THRESHOLD: number = 0.004;
					public static ROTATE_VELOCITY_RATIO_THRESHOLD: number = 2.2000000000000003e-4;
					public static SCHEDULED_ANIMATION_TIMEOUT: number = 150;
					public static MAXIMUM_ANGULAR_VELOCITY: number = 30.0;
					public static SHOVE_PIXEL_CHANGE_FACTOR: number = 0.1;
					public static MINIMUM_ZOOM: number = 0.0;
					public static MAXIMUM_ZOOM: number = 25.5;
					public static MINIMUM_PITCH: number = 0.0;
					public static MAXIMUM_PITCH: number = 60.0;
					public static MAXIMUM_TILT: number = 60.0;
					public static MINIMUM_TILT: number = 0.0;
					public static MAXIMUM_DIRECTION: number = 360.0;
					public static MINIMUM_DIRECTION: number = 0.0;
					public static MINIMUM_SCALE_FACTOR_CLAMP: number = 0.0;
					public static MAXIMUM_SCALE_FACTOR_CLAMP: number = 0.15;
					public static ZOOM_RATE: number = 0.65;
					public static FRAG_ARG_MAPLIBREMAPOPTIONS: string = 'MapLibreMapOptions';
					public static LAYER_ID_ANNOTATIONS: string = 'org.maplibre.annotations.points';
					public static STATE_HAS_SAVED_STATE: string = 'maplibre_savedState';
					public static STATE_CAMERA_POSITION: string = 'maplibre_cameraPosition';
					public static STATE_ZOOM_ENABLED: string = 'maplibre_zoomEnabled';
					public static STATE_SCROLL_ENABLED: string = 'maplibre_scrollEnabled';
					public static STATE_HORIZONAL_SCROLL_ENABLED: string = 'maplibre_horizontalScrollEnabled';
					public static STATE_ROTATE_ENABLED: string = 'maplibre_rotateEnabled';
					public static STATE_TILT_ENABLED: string = 'maplibre_tiltEnabled';
					public static STATE_DOUBLE_TAP_ENABLED: string = 'maplibre_doubleTapEnabled';
					public static STATE_QUICK_ZOOM_ENABLED: string = 'maplibre_quickZoom';
					public static STATE_ZOOM_RATE: string = 'maplibre_zoomRate';
					public static STATE_DEBUG_ACTIVE: string = 'maplibre_debugActive';
					public static STATE_COMPASS_ENABLED: string = 'maplibre_compassEnabled';
					public static STATE_COMPASS_GRAVITY: string = 'maplibre_compassGravity';
					public static STATE_COMPASS_MARGIN_LEFT: string = 'maplibre_compassMarginLeft';
					public static STATE_COMPASS_MARGIN_TOP: string = 'maplibre_compassMarginTop';
					public static STATE_COMPASS_MARGIN_RIGHT: string = 'maplibre_compassMarginRight';
					public static STATE_COMPASS_MARGIN_BOTTOM: string = 'maplibre_compassMarginBottom';
					public static STATE_COMPASS_FADE_WHEN_FACING_NORTH: string = 'maplibre_compassFade';
					public static STATE_COMPASS_IMAGE_BITMAP: string = 'maplibre_compassImage';
					public static STATE_LOGO_GRAVITY: string = 'maplibre_logoGravity';
					public static STATE_LOGO_MARGIN_LEFT: string = 'maplibre_logoMarginLeft';
					public static STATE_LOGO_MARGIN_TOP: string = 'maplibre_logoMarginTop';
					public static STATE_LOGO_MARGIN_RIGHT: string = 'maplibre_logoMarginRight';
					public static STATE_LOGO_MARGIN_BOTTOM: string = 'maplibre_logoMarginBottom';
					public static STATE_LOGO_ENABLED: string = 'maplibre_logoEnabled';
					public static STATE_ATTRIBUTION_GRAVITY: string = 'maplibre_attrGravity';
					public static STATE_ATTRIBUTION_MARGIN_LEFT: string = 'maplibre_attrMarginLeft';
					public static STATE_ATTRIBUTION_MARGIN_TOP: string = 'maplibre_attrMarginTop';
					public static STATE_ATTRIBUTION_MARGIN_RIGHT: string = 'maplibre_attrMarginRight';
					public static STATE_ATTRIBUTION_MARGIN_BOTTOM: string = 'maplibre_atrrMarginBottom';
					public static STATE_ATTRIBUTION_ENABLED: string = 'maplibre_atrrEnabled';
					public static STATE_DESELECT_MARKER_ON_TAP: string = 'maplibre_deselectMarkerOnTap';
					public static STATE_USER_FOCAL_POINT: string = 'maplibre_userFocalPoint';
					public static STATE_SCALE_ANIMATION_ENABLED: string = 'maplibre_scaleAnimationEnabled';
					public static STATE_ROTATE_ANIMATION_ENABLED: string = 'maplibre_rotateAnimationEnabled';
					public static STATE_FLING_ANIMATION_ENABLED: string = 'maplibre_flingAnimationEnabled';
					public static STATE_INCREASE_ROTATE_THRESHOLD: string = 'maplibre_increaseRotateThreshold';
					public static STATE_DISABLE_ROTATE_WHEN_SCALING: string = 'maplibre_disableRotateWhenScaling';
					public static STATE_INCREASE_SCALE_THRESHOLD: string = 'maplibre_increaseScaleThreshold';
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class CalledFromWorkerThreadException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.CalledFromWorkerThreadException>;
					public constructor(message: string);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class ConversionException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.ConversionException>;
					public constructor(detailMessage: string);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class IconBitmapChangedException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.IconBitmapChangedException>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class InvalidLatLngBoundsException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.InvalidLatLngBoundsException>;
					public constructor(latLngsListSize: number);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class InvalidMarkerPositionException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.InvalidMarkerPositionException>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class MapLibreConfigurationException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.MapLibreConfigurationException>;
					public constructor(message: string);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module exceptions {
				export class TooManyIconsException {
					public static class: java.lang.Class<org.maplibre.android.exceptions.TooManyIconsException>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class LatLng {
					public static class: java.lang.Class<org.maplibre.android.geometry.LatLng>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.LatLng>;
					public constructor(latitude: number, longitude: number);
					public constructor(latLng: org.maplibre.android.geometry.LatLng);
					public equals(this_: any): boolean;
					public getLatitude(): number;
					public getLongitude(): number;
					public getAltitude(): number;
					public describeContents(): number;
					public setLatitude(latitude: number): void;
					public setAltitude(altitude: number): void;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public constructor(location: globalAndroid.location.Location);
					public setLongitude(longitude: number): void;
					public constructor(in_: globalAndroid.os.Parcel);
					public wrap(): org.maplibre.android.geometry.LatLng;
					public constructor(latitude: number, longitude: number, altitude: number);
					public toString(): string;
					public distanceTo(other: org.maplibre.android.geometry.LatLng): number;
					public constructor();
					public constructor(latitude: number, longitude: number);
					public hashCode(): number;
				}
				export module LatLng {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.LatLng.Companion>;
						public wrap(firstMod: number, secondMod: number, this_: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class LatLngBounds {
					public static class: java.lang.Class<org.maplibre.android.geometry.LatLngBounds>;
					public latitudeNorth: number;
					public longitudeEast: number;
					public latitudeSouth: number;
					public longitudeWest: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.LatLngBounds>;
					public static world(): org.maplibre.android.geometry.LatLngBounds;
					public isEmptySpan(): boolean;
					public intersect(box: org.maplibre.android.geometry.LatLngBounds): org.maplibre.android.geometry.LatLngBounds;
					public contains(latLng: org.maplibre.android.geometry.LatLng): boolean;
					public getSpan(): org.maplibre.android.geometry.LatLngSpan;
					public getCenter(): org.maplibre.android.geometry.LatLng;
					public getNorthEast(): org.maplibre.android.geometry.LatLng;
					public getLatNorth(): number;
					public getLatSouth(): number;
					public toString(): string;
					public getSouthEast(): org.maplibre.android.geometry.LatLng;
					public include(latLng: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.LatLngBounds;
					public static from(z: number, x: number, y: number): org.maplibre.android.geometry.LatLngBounds;
					public hashCode(): number;
					public union(northLat: number, eastLon: number, southLat: number, westLon: number): org.maplibre.android.geometry.LatLngBounds;
					public getSouthWest(): org.maplibre.android.geometry.LatLng;
					public equals(other: any): boolean;
					public describeContents(): number;
					public getLatitudeSpan(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public getLonEast(): number;
					public contains(other: org.maplibre.android.geometry.LatLngBounds): boolean;
					public toLatLngs(): androidNative.Array<org.maplibre.android.geometry.LatLng>;
					public intersect(northLat: number, eastLon: number, southLat: number, westLon: number): org.maplibre.android.geometry.LatLngBounds;
					public getLongitudeSpan(): number;
					public constructor(latitudeNorth: number, longitudeEast: number, latitudeSouth: number, longitudeWest: number);
					public getLonWest(): number;
					public getNorthWest(): org.maplibre.android.geometry.LatLng;
					public union(bounds: org.maplibre.android.geometry.LatLngBounds): org.maplibre.android.geometry.LatLngBounds;
					public static from(latNorth: number, lonEast: number, latSouth: number, lonWest: number): org.maplibre.android.geometry.LatLngBounds;
				}
				export module LatLngBounds {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.geometry.LatLngBounds.Builder>;
						public include(latLng: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.LatLngBounds.Builder;
						public constructor();
						public build(): org.maplibre.android.geometry.LatLngBounds;
						public includes(latLngs: java.util.List<org.maplibre.android.geometry.LatLng>): org.maplibre.android.geometry.LatLngBounds.Builder;
					}
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.LatLngBounds.Companion>;
						public from(z: number, x: number, y: number): org.maplibre.android.geometry.LatLngBounds;
						public fromLatLngs(longitude: java.util.List<org.maplibre.android.geometry.LatLng>): org.maplibre.android.geometry.LatLngBounds;
						public world(): org.maplibre.android.geometry.LatLngBounds;
						public from(latNorth: number, lonEast: number, latSouth: number, lonWest: number): org.maplibre.android.geometry.LatLngBounds;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class LatLngQuad {
					public static class: java.lang.Class<org.maplibre.android.geometry.LatLngQuad>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.LatLngQuad>;
					public getTopRight(): org.maplibre.android.geometry.LatLng;
					public getBottomRight(): org.maplibre.android.geometry.LatLng;
					public constructor(topLeft: org.maplibre.android.geometry.LatLng, topRight: org.maplibre.android.geometry.LatLng, bottomRight: org.maplibre.android.geometry.LatLng, bottomLeft: org.maplibre.android.geometry.LatLng);
					public getTopLeft(): org.maplibre.android.geometry.LatLng;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, arg1: number): void;
					public equals(other: any): boolean;
					public hashCode(): number;
					public getBottomLeft(): org.maplibre.android.geometry.LatLng;
				}
				export module LatLngQuad {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.LatLngQuad.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class LatLngSpan {
					public static class: java.lang.Class<org.maplibre.android.geometry.LatLngSpan>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.LatLngSpan>;
					public setLongitudeSpan(longitudeSpan: number): void;
					public equals(other: any): boolean;
					public describeContents(): number;
					public setLatitudeSpan(latitudeSpan: number): void;
					public getLatitudeSpan(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public getLongitudeSpan(): number;
					public hashCode(): number;
					public constructor(latitudeSpan: number, longitudeSpan: number);
				}
				export module LatLngSpan {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.LatLngSpan.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class ProjectedMeters {
					public static class: java.lang.Class<org.maplibre.android.geometry.ProjectedMeters>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.ProjectedMeters>;
					public toString(): string;
					public getNorthing(): number;
					public equals(this_: any): boolean;
					public describeContents(): number;
					public getEasting(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public hashCode(): number;
					public constructor(projectedMeters: org.maplibre.android.geometry.ProjectedMeters);
					public constructor(northing: number, easting: number);
				}
				export module ProjectedMeters {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.ProjectedMeters.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module geometry {
				export class VisibleRegion {
					public static class: java.lang.Class<org.maplibre.android.geometry.VisibleRegion>;
					public farLeft: org.maplibre.android.geometry.LatLng;
					public farRight: org.maplibre.android.geometry.LatLng;
					public nearLeft: org.maplibre.android.geometry.LatLng;
					public nearRight: org.maplibre.android.geometry.LatLng;
					public latLngBounds: org.maplibre.android.geometry.LatLngBounds;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.geometry.VisibleRegion>;
					public toString(): string;
					public equals(other: any): boolean;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public hashCode(): number;
					public constructor(farLeft: org.maplibre.android.geometry.LatLng, farRight: org.maplibre.android.geometry.LatLng, nearLeft: org.maplibre.android.geometry.LatLng, nearRight: org.maplibre.android.geometry.LatLng, latLngBounds: org.maplibre.android.geometry.LatLngBounds);
				}
				export module VisibleRegion {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.geometry.VisibleRegion.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class HttpIdentifier {
					public static class: java.lang.Class<org.maplibre.android.http.HttpIdentifier>;
					public static getIdentifier(): string;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class HttpLogger {
					public static class: java.lang.Class<org.maplibre.android.http.HttpLogger>;
					public static logRequestUrl: boolean;
					public static logEnabled: boolean;
					public static logFailure(type: number, errorMessage: string, requestUrl: string): void;
					public static log(type: number, errorMessage: string): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class HttpRequest {
					public static class: java.lang.Class<org.maplibre.android.http.HttpRequest>;
					/**
					 * Constructs a new instance of the org.maplibre.android.http.HttpRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { executeRequest(param0: org.maplibre.android.http.HttpResponder, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void; cancelRequest(): void });
					public constructor();
					public static CONNECTION_ERROR: number = 0;
					public static TEMPORARY_ERROR: number = 1;
					public static PERMANENT_ERROR: number = 2;
					public cancelRequest(): void;
					public executeRequest(param0: org.maplibre.android.http.HttpResponder, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class HttpRequestUrl {
					public static class: java.lang.Class<org.maplibre.android.http.HttpRequestUrl>;
					public static buildResourceUrl(host: string, resourceUrl: string, querySize: number, offline: boolean): string;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class HttpResponder {
					public static class: java.lang.Class<org.maplibre.android.http.HttpResponder>;
					/**
					 * Constructs a new instance of the org.maplibre.android.http.HttpResponder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onResponse(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: androidNative.Array<number>): void; handleFailure(param0: number, param1: string): void });
					public constructor();
					public handleFailure(param0: number, param1: string): void;
					public onResponse(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class LocalRequestTask extends globalAndroid.os.AsyncTask<string, java.lang.Void, androidNative.Array<number>> {
					public static class: java.lang.Class<org.maplibre.android.http.LocalRequestTask>;
					public onPostExecute(bytes: androidNative.Array<number>): void;
					public doInBackground(strings: androidNative.Array<string>): androidNative.Array<number>;
				}
				export module LocalRequestTask {
					export class OnLocalRequestResponse {
						public static class: java.lang.Class<org.maplibre.android.http.LocalRequestTask.OnLocalRequestResponse>;
						/**
						 * Constructs a new instance of the org.maplibre.android.http.LocalRequestTask$OnLocalRequestResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onResponse(param0: androidNative.Array<number>): void });
						public constructor();
						public onResponse(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module http {
				export class NativeHttpRequest extends org.maplibre.android.http.HttpResponder {
					public static class: java.lang.Class<org.maplibre.android.http.NativeHttpRequest>;
					public handleFailure(param0: number, param1: string): void;
					public cancel(): void;
					public handleFailure(type: number, errorMessage: string): void;
					public onResponse(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: androidNative.Array<number>): void;
					public onResponse(responseCode: number, etag: string, lastModified: string, cacheControl: string, expires: string, retryAfter: string, xRateLimitReset: string, body: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class AnimatorListenerHolder {
					public static class: java.lang.Class<org.maplibre.android.location.AnimatorListenerHolder>;
					public getAnimatorType(): number;
					public getListener(): org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class CompassEngine {
					public static class: java.lang.Class<org.maplibre.android.location.CompassEngine>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.CompassEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { addCompassListener(param0: org.maplibre.android.location.CompassListener): void; removeCompassListener(param0: org.maplibre.android.location.CompassListener): void; getLastHeading(): number; getLastAccuracySensorStatus(): number });
					public constructor();
					public getLastHeading(): number;
					public removeCompassListener(param0: org.maplibre.android.location.CompassListener): void;
					public getLastAccuracySensorStatus(): number;
					public addCompassListener(param0: org.maplibre.android.location.CompassListener): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class CompassListener {
					public static class: java.lang.Class<org.maplibre.android.location.CompassListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.CompassListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onCompassChanged(param0: number): void; onCompassAccuracyChange(param0: number): void });
					public constructor();
					public onCompassAccuracyChange(param0: number): void;
					public onCompassChanged(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class IndicatorLocationLayerRenderer extends org.maplibre.android.location.LocationLayerRenderer {
					public static class: java.lang.Class<org.maplibre.android.location.IndicatorLocationLayerRenderer>;
					public setCompassBearing(param0: java.lang.Float): void;
					public stylePulsingCircle(param0: org.maplibre.android.location.LocationComponentOptions): void;
					public setLatLng(latLng: org.maplibre.android.geometry.LatLng): void;
					public removeLayers(): void;
					public setCompassBearing(compassBearing: java.lang.Float): void;
					public cameraTiltUpdated(param0: number): void;
					public setGpsBearing(param0: java.lang.Float): void;
					public setAccuracyRadius(accuracy: java.lang.Float): void;
					public setLocationStale(isStale: boolean, renderMode: number): void;
					public show(renderMode: number, isStale: boolean): void;
					public adjustPulsingCircleLayerVisibility(param0: boolean): void;
					public addBitmaps(topOffset: number, staleLeftOffset: globalAndroid.graphics.Bitmap, staleTopOffset: globalAndroid.graphics.Bitmap, this_: globalAndroid.graphics.Bitmap, renderMode: globalAndroid.graphics.Bitmap, shadowBitmap: globalAndroid.graphics.Bitmap, backgroundBitmap: globalAndroid.graphics.Bitmap): void;
					public show(param0: number, param1: boolean): void;
					public setLatLng(param0: org.maplibre.android.geometry.LatLng): void;
					public cameraBearingUpdated(param0: number): void;
					public cameraBearingUpdated(bearing: number): void;
					public addBitmaps(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.graphics.Bitmap, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.graphics.Bitmap, param6: globalAndroid.graphics.Bitmap): void;
					public styleAccuracy(accuracyAlpha: number, accuracyColor: number): void;
					public setGpsBearing(gpsBearing: java.lang.Float): void;
					public styleAccuracy(param0: number, param1: number): void;
					public cameraTiltUpdated(tilt: number): void;
					public initializeComponents(param0: org.maplibre.android.maps.Style): void;
					public setAccuracyRadius(param0: java.lang.Float): void;
					public initializeComponents(style: org.maplibre.android.maps.Style): void;
					public updatePulsingUi(radius: number, opacity: java.lang.Float): void;
					public updateIconIds(foregroundIconString: string, foregroundStaleIconString: string, backgroundIconString: string, backgroundStaleIconString: string, bearingIconString: string): void;
					public styleScaling(scaleExpression: org.maplibre.android.style.expressions.Expression): void;
					public styleScaling(param0: org.maplibre.android.style.expressions.Expression): void;
					public updateIconIds(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public hide(): void;
					public setLocationStale(param0: boolean, param1: number): void;
					public updatePulsingUi(param0: number, param1: java.lang.Float): void;
					public stylePulsingCircle(options: org.maplibre.android.location.LocationComponentOptions): void;
					public addLayers(param0: org.maplibre.android.location.LocationComponentPositionManager): void;
					public addLayers(positionManager: org.maplibre.android.location.LocationComponentPositionManager): void;
					public adjustPulsingCircleLayerVisibility(visible: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LatLngEvaluator extends globalAndroid.animation.TypeEvaluator<org.maplibre.android.geometry.LatLng> {
					public static class: java.lang.Class<org.maplibre.android.location.LatLngEvaluator>;
					public evaluate(fraction: number, startValue: org.maplibre.android.geometry.LatLng, endValue: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.LatLng;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LayerBitmapProvider {
					public static class: java.lang.Class<org.maplibre.android.location.LayerBitmapProvider>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LayerFeatureProvider {
					public static class: java.lang.Class<org.maplibre.android.location.LayerFeatureProvider>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LayerSourceProvider {
					public static class: java.lang.Class<org.maplibre.android.location.LayerSourceProvider>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationAnimatorCoordinator {
					public static class: java.lang.Class<org.maplibre.android.location.LocationAnimatorCoordinator>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationCameraController {
					public static class: java.lang.Class<org.maplibre.android.location.LocationCameraController>;
				}
				export module LocationCameraController {
					export class LocationGesturesManager {
						public static class: java.lang.Class<org.maplibre.android.location.LocationCameraController.LocationGesturesManager>;
						public onTouchEvent(this_: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponent {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponent>;
					public removeOnLocationStaleListener(listener: org.maplibre.android.location.OnLocationStaleListener): void;
					public getCameraMode(): number;
					public addOnCameraTrackingChangedListener(listener: org.maplibre.android.location.OnCameraTrackingChangedListener): void;
					public setLocationEngineRequest(locationEngineRequest: org.maplibre.android.location.engine.LocationEngineRequest): void;
					public zoomWhileTracking(zoomLevel: number): void;
					public onDestroy(): void;
					public onStart(): void;
					public cancelZoomWhileTrackingAnimation(): void;
					public isLocationComponentEnabled(): boolean;
					public zoomWhileTracking(zoomLevel: number, animationDuration: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public tiltWhileTracking(tilt: number, animationDuration: number): void;
					public applyStyle(context: globalAndroid.content.Context, styleRes: number): void;
					public constructor(maplibreMap: org.maplibre.android.maps.MapLibreMap, transform: org.maplibre.android.maps.Transform, developerAnimationListeners: java.util.List<org.maplibre.android.maps.MapLibreMap.OnDeveloperAnimationListener>);
					public getCompassEngine(): org.maplibre.android.location.CompassEngine;
					public getRenderMode(): number;
					public cancelPaddingWhileTrackingAnimation(): void;
					public paddingWhileTracking(padding: androidNative.Array<number>, animationDuration: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public setCompassEngine(compassEngine: org.maplibre.android.location.CompassEngine): void;
					public addOnLocationLongClickListener(listener: org.maplibre.android.location.OnLocationLongClickListener): void;
					public removeOnCameraTrackingChangedListener(listener: org.maplibre.android.location.OnCameraTrackingChangedListener): void;
					public activateLocationComponent(this_: org.maplibre.android.location.LocationComponentActivationOptions): void;
					public zoomWhileTracking(zoomLevel: number, animationDuration: number): void;
					public addOnLocationClickListener(listener: org.maplibre.android.location.OnLocationClickListener): void;
					public applyStyle(options: org.maplibre.android.location.LocationComponentOptions): void;
					public onFinishLoadingStyle(): void;
					public forceLocationUpdate(locations: java.util.List<globalAndroid.location.Location>, lookAheadUpdate: boolean): void;
					public removeRenderModeChangedListener(listener: org.maplibre.android.location.OnRenderModeChangedListener): void;
					public onStartLoadingMap(): void;
					public isLocationComponentActivated(): boolean;
					public tiltWhileTracking(tilt: number): void;
					public getLastKnownLocation(): globalAndroid.location.Location;
					public tiltWhileTracking(tilt: number, animationDuration: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public cancelTiltWhileTrackingAnimation(): void;
					public getLocationComponentOptions(): org.maplibre.android.location.LocationComponentOptions;
					public addOnRenderModeChangedListener(listener: org.maplibre.android.location.OnRenderModeChangedListener): void;
					public setRenderMode(renderMode: number): void;
					public addOnLocationStaleListener(listener: org.maplibre.android.location.OnLocationStaleListener): void;
					public setCameraMode(cameraMode: number, transitionListener: org.maplibre.android.location.OnLocationCameraTransitionListener): void;
					public setLocationComponentEnabled(isEnabled: boolean): void;
					public forceLocationUpdate(location: globalAndroid.location.Location): void;
					public setCameraMode(cameraMode: number, transitionDuration: number, zoom: java.lang.Double, bearing: java.lang.Double, tilt: java.lang.Double, transitionListener: org.maplibre.android.location.OnLocationCameraTransitionListener): void;
					public paddingWhileTracking(padding: androidNative.Array<number>, animationDuration: number): void;
					public getLocationEngineRequest(): org.maplibre.android.location.engine.LocationEngineRequest;
					public paddingWhileTracking(padding: androidNative.Array<number>): void;
					public setMaxAnimationFps(maxAnimationFps: number): void;
					public removeOnLocationClickListener(listener: org.maplibre.android.location.OnLocationClickListener): void;
					public removeOnLocationLongClickListener(listener: org.maplibre.android.location.OnLocationLongClickListener): void;
					public setCameraMode(cameraMode: number): void;
					public onStop(): void;
					public setLocationEngine(locationEngine: org.maplibre.android.location.engine.LocationEngine): void;
					public getLocationEngine(): org.maplibre.android.location.engine.LocationEngine;
				}
				export module LocationComponent {
					export class CameraTransitionListener extends org.maplibre.android.location.OnLocationCameraTransitionListener {
						public static class: java.lang.Class<org.maplibre.android.location.LocationComponent.CameraTransitionListener>;
						public onLocationCameraTransitionCanceled(param0: number): void;
						public onLocationCameraTransitionCanceled(cameraMode: number): void;
						public onLocationCameraTransitionFinished(param0: number): void;
						public onLocationCameraTransitionFinished(cameraMode: number): void;
					}
					export class CurrentLocationEngineCallback extends org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult> {
						public static class: java.lang.Class<org.maplibre.android.location.LocationComponent.CurrentLocationEngineCallback>;
						public onSuccess(param0: any): void;
						public onFailure(param0: java.lang.Exception): void;
						public onFailure(exception: java.lang.Exception): void;
						public onSuccess(result: org.maplibre.android.location.engine.LocationEngineResult): void;
					}
					export class LastLocationEngineCallback extends org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult> {
						public static class: java.lang.Class<org.maplibre.android.location.LocationComponent.LastLocationEngineCallback>;
						public onSuccess(param0: any): void;
						public onFailure(param0: java.lang.Exception): void;
						public onFailure(exception: java.lang.Exception): void;
						public onSuccess(result: org.maplibre.android.location.engine.LocationEngineResult): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentActivationOptions {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentActivationOptions>;
					public context(): globalAndroid.content.Context;
					public static builder(context: globalAndroid.content.Context, fullyLoadedMapStyle: org.maplibre.android.maps.Style): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
					public style(): org.maplibre.android.maps.Style;
					public useDefaultLocationEngine(): boolean;
					public styleRes(): number;
					public locationEngineRequest(): org.maplibre.android.location.engine.LocationEngineRequest;
					public locationComponentOptions(): org.maplibre.android.location.LocationComponentOptions;
					public useSpecializedLocationLayer(): boolean;
					public locationEngine(): org.maplibre.android.location.engine.LocationEngine;
				}
				export module LocationComponentActivationOptions {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.location.LocationComponentActivationOptions.Builder>;
						public useDefaultLocationEngine(useDefaultLocationEngine: boolean): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public locationComponentOptions(locationComponentOptions: org.maplibre.android.location.LocationComponentOptions): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public styleRes(styleRes: number): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public useSpecializedLocationLayer(useSpecializedLocationLayer: boolean): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public locationEngineRequest(locationEngineRequest: org.maplibre.android.location.engine.LocationEngineRequest): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public constructor(context: globalAndroid.content.Context, style: org.maplibre.android.maps.Style);
						public locationEngine(locationEngine: org.maplibre.android.location.engine.LocationEngine): org.maplibre.android.location.LocationComponentActivationOptions.Builder;
						public build(): org.maplibre.android.location.LocationComponentActivationOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentCompassEngine extends org.maplibre.android.location.CompassEngine {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentCompassEngine>;
					public onSensorChanged(event: globalAndroid.hardware.SensorEvent): void;
					public getLastHeading(): number;
					public getLastAccuracySensorStatus(): number;
					public removeCompassListener(param0: org.maplibre.android.location.CompassListener): void;
					public removeCompassListener(compassListener: org.maplibre.android.location.CompassListener): void;
					public onAccuracyChanged(this_: globalAndroid.hardware.Sensor, sensor: number): void;
					public addCompassListener(compassListener: org.maplibre.android.location.CompassListener): void;
					public addCompassListener(param0: org.maplibre.android.location.CompassListener): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentConstants {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentConstants>;
					public static LOCATION_SOURCE: string = 'mapbox-location-source';
					public static SHADOW_LAYER: string = 'mapbox-location-shadow-layer';
					public static FOREGROUND_LAYER: string = 'mapbox-location-foreground-layer';
					public static BACKGROUND_LAYER: string = 'mapbox-location-background-layer';
					public static ACCURACY_LAYER: string = 'mapbox-location-accuracy-layer';
					public static BEARING_LAYER: string = 'mapbox-location-bearing-layer';
					public static PULSING_CIRCLE_LAYER: string = 'mapbox-location-pulsing-circle-layer';
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentNotInitializedException {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentNotInitializedException>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentOptions {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentOptions>;
					public static CIRCLE_PULSING_MAX_RADIUS_DEFAULT: number = 35.0;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.location.LocationComponentOptions>;
					public pulseFadeEnabled(): java.lang.Boolean;
					public foregroundName(): string;
					public compassAnimationEnabled(): boolean;
					public accuracyColor(): number;
					public pulseInterpolator(): globalAndroid.view.animation.Interpolator;
					public equals(o: any): boolean;
					public constructor(in_: globalAndroid.os.Parcel);
					public bearingName(): string;
					public minZoomIconScale(): number;
					public trackingInitialMoveThreshold(): number;
					public foregroundStaleName(): string;
					public gpsName(): string;
					public backgroundDrawable(): number;
					public trackingMultiFingerProtectedMoveArea(): globalAndroid.graphics.RectF;
					public trackingMultiFingerMoveThreshold(): number;
					public static createFromAttributes(context: globalAndroid.content.Context, styleRes: number): org.maplibre.android.location.LocationComponentOptions;
					public padding(): androidNative.Array<number>;
					public static builder(context: globalAndroid.content.Context): org.maplibre.android.location.LocationComponentOptions.Builder;
					public staleStateTimeout(): number;
					public accuracyAnimationEnabled(): boolean;
					public backgroundDrawableStale(): number;
					public trackingAnimationDurationMultiplier(): number;
					public constructor(
						accuracyAlpha: number,
						accuracyColor: number,
						backgroundDrawableStale: number,
						backgroundStaleName: string,
						foregroundDrawableStale: number,
						foregroundStaleName: string,
						gpsDrawable: number,
						gpsName: string,
						foregroundDrawable: number,
						foregroundName: string,
						backgroundDrawable: number,
						backgroundName: string,
						bearingDrawable: number,
						bearingName: string,
						bearingTintColor: java.lang.Integer,
						foregroundTintColor: java.lang.Integer,
						backgroundTintColor: java.lang.Integer,
						foregroundStaleTintColor: java.lang.Integer,
						backgroundStaleTintColor: java.lang.Integer,
						elevation: number,
						enableStaleState: boolean,
						staleStateTimeout: number,
						padding: androidNative.Array<number>,
						maxZoomIconScale: number,
						minZoomIconScale: number,
						trackingGesturesManagement: boolean,
						trackingInitialMoveThreshold: number,
						trackingMultiFingerMoveThreshold: number,
						trackingMultiFingerProtectedMoveArea: globalAndroid.graphics.RectF,
						layerAbove: string,
						layerBelow: string,
						trackingAnimationDurationMultiplier: number,
						compassAnimationEnabled: boolean,
						accuracyAnimationEnabled: boolean,
						pulseEnabled: java.lang.Boolean,
						pulseFadeEnabled: java.lang.Boolean,
						pulseColor: java.lang.Integer,
						pulseSingleDuration: number,
						pulseMaxRadius: number,
						pulseAlpha: number,
						pulseInterpolator: globalAndroid.view.animation.Interpolator
					);
					public foregroundStaleTintColor(): java.lang.Integer;
					public backgroundStaleTintColor(): java.lang.Integer;
					public pulseColor(): java.lang.Integer;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public elevation(): number;
					public maxZoomIconScale(): number;
					public layerAbove(): string;
					public pulseSingleDuration(): number;
					public pulseMaxRadius(): number;
					public gpsDrawable(): number;
					public layerBelow(): string;
					public enableStaleState(): boolean;
					public toString(): string;
					public accuracyAlpha(): number;
					public backgroundName(): string;
					public hashCode(): number;
					public bearingTintColor(): java.lang.Integer;
					public pulseAlpha(): number;
					public toBuilder(): org.maplibre.android.location.LocationComponentOptions.Builder;
					public pulseEnabled(): java.lang.Boolean;
					public backgroundStaleName(): string;
					public trackingGesturesManagement(): boolean;
					public describeContents(): number;
					public foregroundDrawableStale(): number;
					public foregroundTintColor(): java.lang.Integer;
					public bearingDrawable(): number;
					public foregroundDrawable(): number;
					public backgroundTintColor(): java.lang.Integer;
				}
				export module LocationComponentOptions {
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.location.LocationComponentOptions.Builder>;
						public trackingMultiFingerMoveThreshold(moveThreshold: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseFadeEnabled(pulseFadeEnabled: boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundStaleTintColor(backgroundStaleTintColor: java.lang.Integer): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundTintColor(backgroundTintColor: java.lang.Integer): org.maplibre.android.location.LocationComponentOptions.Builder;
						public foregroundDrawableStale(foregroundDrawableStale: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseAlpha(pulseAlpha: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public enableStaleState(enabled: boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public trackingMultiFingerProtectedMoveArea(rect: globalAndroid.graphics.RectF): org.maplibre.android.location.LocationComponentOptions.Builder;
						public bearingTintColor(bearingTintColor: java.lang.Integer): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundDrawable(backgroundDrawable: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public gpsDrawable(gpsDrawable: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public layerAbove(layerAbove: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public trackingGesturesManagement(trackingGesturesManagement: boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundName(backgroundName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public accuracyAlpha(accuracyAlpha: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseEnabled(pulseEnabled: boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public accuracyColor(accuracyColor: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public trackingInitialMoveThreshold(moveThreshold: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public layerBelow(layerBelow: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						/** @deprecated */
						public padding(padding: androidNative.Array<number>): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundStaleName(backgroundStaleName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public foregroundTintColor(foregroundTintColor: java.lang.Integer): org.maplibre.android.location.LocationComponentOptions.Builder;
						public foregroundStaleTintColor(foregroundStaleTintColor: java.lang.Integer): org.maplibre.android.location.LocationComponentOptions.Builder;
						public staleStateTimeout(timeout: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public trackingAnimationDurationMultiplier(trackingAnimationDurationMultiplier: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public foregroundName(foregroundName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseColor(pulseColor: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseSingleDuration(pulseSingleDuration: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public foregroundStaleName(foregroundStaleName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public compassAnimationEnabled(compassAnimationEnabled: java.lang.Boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public accuracyAnimationEnabled(accuracyAnimationEnabled: boolean): org.maplibre.android.location.LocationComponentOptions.Builder;
						public bearingDrawable(bearingDrawable: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public backgroundDrawableStale(backgroundDrawableStale: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseMaxRadius(pulseMaxRadius: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public build(): org.maplibre.android.location.LocationComponentOptions;
						public foregroundDrawable(foregroundDrawable: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public maxZoomIconScale(maxZoomIconScale: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public pulseInterpolator(pulseInterpolator: globalAndroid.view.animation.Interpolator): org.maplibre.android.location.LocationComponentOptions.Builder;
						public gpsName(gpsName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public bearingName(bearingName: string): org.maplibre.android.location.LocationComponentOptions.Builder;
						public elevation(elevation: number): org.maplibre.android.location.LocationComponentOptions.Builder;
						public minZoomIconScale(minZoomIconScale: number): org.maplibre.android.location.LocationComponentOptions.Builder;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationComponentPositionManager {
					public static class: java.lang.Class<org.maplibre.android.location.LocationComponentPositionManager>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationIndicatorLayer extends org.maplibre.android.style.layers.Layer {
					public static class: java.lang.Class<org.maplibre.android.location.LocationIndicatorLayer>;
					public setBearingTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getLocation(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Double>>;
					public getShadowImageSize(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public finalize(): void;
					public initialize(param0: string): void;
					public getTopImage(): org.maplibre.android.style.layers.PropertyValue<string>;
					public getBearingImageSize(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public constructor(layerId: string);
					public getBearingImage(): org.maplibre.android.style.layers.PropertyValue<string>;
					public getAccuracyRadiusTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public setShadowImageSizeTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public setAccuracyRadiusBorderColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getImageTiltDisplacement(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public constructor();
					public getPerspectiveCompensation(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public getShadowImageSizeTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getBearingTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getTopImageSize(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public getAccuracyRadiusColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getAccuracyRadiusBorderColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public setLocationTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public setTopImageSizeTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getBearingImageSizeTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getAccuracyRadius(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public getTopImageSizeTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getAccuracyRadiusColorAsInt(): number;
					public setAccuracyRadiusColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getBearing(): org.maplibre.android.style.layers.PropertyValue<java.lang.Double>;
					public constructor(nativePtr: number);
					public getLocationTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getAccuracyRadiusBorderColorAsInt(): number;
					public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.location.LocationIndicatorLayer;
					public getAccuracyRadiusColor(): org.maplibre.android.style.layers.PropertyValue<string>;
					public setBearingImageSizeTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getShadowImage(): org.maplibre.android.style.layers.PropertyValue<string>;
					public setAccuracyRadiusTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					public getAccuracyRadiusBorderColor(): org.maplibre.android.style.layers.PropertyValue<string>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationLayerController {
					public static class: java.lang.Class<org.maplibre.android.location.LocationLayerController>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationLayerRenderer {
					public static class: java.lang.Class<org.maplibre.android.location.LocationLayerRenderer>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.LocationLayerRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initializeComponents(param0: org.maplibre.android.maps.Style): void;
						addLayers(param0: org.maplibre.android.location.LocationComponentPositionManager): void;
						removeLayers(): void;
						hide(): void;
						cameraTiltUpdated(param0: number): void;
						cameraBearingUpdated(param0: number): void;
						show(param0: number, param1: boolean): void;
						styleAccuracy(param0: number, param1: number): void;
						setLatLng(param0: org.maplibre.android.geometry.LatLng): void;
						setGpsBearing(param0: java.lang.Float): void;
						setCompassBearing(param0: java.lang.Float): void;
						setAccuracyRadius(param0: java.lang.Float): void;
						styleScaling(param0: org.maplibre.android.style.expressions.Expression): void;
						setLocationStale(param0: boolean, param1: number): void;
						adjustPulsingCircleLayerVisibility(param0: boolean): void;
						stylePulsingCircle(param0: org.maplibre.android.location.LocationComponentOptions): void;
						updatePulsingUi(param0: number, param1: java.lang.Float): void;
						updateIconIds(param0: string, param1: string, param2: string, param3: string, param4: string): void;
						addBitmaps(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.graphics.Bitmap, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.graphics.Bitmap, param6: globalAndroid.graphics.Bitmap): void;
					});
					public constructor();
					public setCompassBearing(param0: java.lang.Float): void;
					public stylePulsingCircle(param0: org.maplibre.android.location.LocationComponentOptions): void;
					public removeLayers(): void;
					public addBitmaps(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.graphics.Bitmap, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.graphics.Bitmap, param6: globalAndroid.graphics.Bitmap): void;
					public cameraTiltUpdated(param0: number): void;
					public setGpsBearing(param0: java.lang.Float): void;
					public styleAccuracy(param0: number, param1: number): void;
					public initializeComponents(param0: org.maplibre.android.maps.Style): void;
					public setAccuracyRadius(param0: java.lang.Float): void;
					public adjustPulsingCircleLayerVisibility(param0: boolean): void;
					public show(param0: number, param1: boolean): void;
					public setLatLng(param0: org.maplibre.android.geometry.LatLng): void;
					public cameraBearingUpdated(param0: number): void;
					public styleScaling(param0: org.maplibre.android.style.expressions.Expression): void;
					public updateIconIds(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public hide(): void;
					public setLocationStale(param0: boolean, param1: number): void;
					public updatePulsingUi(param0: number, param1: java.lang.Float): void;
					public addLayers(param0: org.maplibre.android.location.LocationComponentPositionManager): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class LocationPropertyFactory {
					public static class: java.lang.Class<org.maplibre.android.location.LocationPropertyFactory>;
					public static imageTiltDisplacement(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static perspectiveCompensation(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static accuracyRadiusColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
					public static topImage(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static topImage(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static accuracyRadius(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static bearingImage(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static bearingImageSize(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static bearing(value: java.lang.Double): org.maplibre.android.style.layers.PropertyValue<java.lang.Double>;
					public static shadowImageSize(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static topImageSize(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static visibility(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static perspectiveCompensation(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static shadowImage(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static imageTiltDisplacement(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static location(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static accuracyRadiusColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static bearing(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static accuracyRadiusBorderColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static accuracyRadius(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static shadowImage(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					public static shadowImageSize(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static topImageSize(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static accuracyRadiusBorderColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static bearingImageSize(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					public static bearingImage(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
					public static location(value: androidNative.Array<java.lang.Double>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Double>>;
					public static accuracyRadiusBorderColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
					public static accuracyRadiusColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export abstract class MapLibreAnimator<K> extends globalAndroid.animation.ValueAnimator implements globalAndroid.animation.ValueAnimator.AnimatorUpdateListener {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimator<any>>;
					public constructor(values: androidNative.Array<any>, updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, maxAnimationFps: number);
					public makeInvalid(): void;
					public onAnimationUpdate(animation: globalAndroid.animation.ValueAnimator): void;
					public constructor(updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, target: any, animatedValue: any, minUpdateInterval: number, timeElapsed: number);
				}
				export module MapLibreAnimator {
					export class AnimationsValueChangeListener<K> extends java.lang.Object {
						public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>>;
						/**
						 * Constructs a new instance of the org.maplibre.android.location.MapLibreAnimator$AnimationsValueChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNewAnimationValue(param0: K): void });
						public constructor();
						public onNewAnimationValue(param0: K): void;
					}
					export class AnimatorListener {
						public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimator.AnimatorListener>;
						public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreAnimatorListener {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimatorListener>;
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public constructor(cancelableCallback: org.maplibre.android.maps.MapLibreMap.CancelableCallback);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreAnimatorProvider {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimatorProvider>;
					public static getInstance(): org.maplibre.android.location.MapLibreAnimatorProvider;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreAnimatorSetProvider {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreAnimatorSetProvider>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreCameraAnimatorAdapter extends org.maplibre.android.location.MapLibreFloatAnimator {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreCameraAnimatorAdapter>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreFloatAnimator extends org.maplibre.android.location.MapLibreAnimator<java.lang.Float> {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreFloatAnimator>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibreLatLngAnimator extends org.maplibre.android.location.MapLibreAnimator<org.maplibre.android.geometry.LatLng> {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibreLatLngAnimator>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class MapLibrePaddingAnimator extends org.maplibre.android.location.MapLibreAnimator<androidNative.Array<number>> {
					public static class: java.lang.Class<org.maplibre.android.location.MapLibrePaddingAnimator>;
					public constructor(values: androidNative.Array<any>, updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, maxAnimationFps: number);
					public constructor(values: androidNative.Array<androidNative.Array<number>>, updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<androidNative.Array<number>>, cancelableCallback: org.maplibre.android.maps.MapLibreMap.CancelableCallback);
					public provideEvaluator(): globalAndroid.animation.TypeEvaluator<androidNative.Array<number>>;
					public constructor(updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, target: any, animatedValue: any, minUpdateInterval: number, timeElapsed: number);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnCameraMoveInvalidateListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnCameraMoveInvalidateListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnCameraMoveInvalidateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onInvalidateCameraMove(): void });
					public constructor();
					public onInvalidateCameraMove(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnCameraTrackingChangedListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnCameraTrackingChangedListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnCameraTrackingChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onCameraTrackingDismissed(): void; onCameraTrackingChanged(param0: number): void });
					public constructor();
					public onCameraTrackingChanged(param0: number): void;
					public onCameraTrackingDismissed(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnLocationCameraTransitionListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnLocationCameraTransitionListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnLocationCameraTransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLocationCameraTransitionFinished(param0: number): void; onLocationCameraTransitionCanceled(param0: number): void });
					public constructor();
					public onLocationCameraTransitionFinished(param0: number): void;
					public onLocationCameraTransitionCanceled(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnLocationClickListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnLocationClickListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnLocationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLocationComponentClick(): void });
					public constructor();
					public onLocationComponentClick(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnLocationLongClickListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnLocationLongClickListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnLocationLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLocationComponentLongClick(): void });
					public constructor();
					public onLocationComponentLongClick(): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnLocationStaleListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnLocationStaleListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnLocationStaleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onStaleStateChange(param0: boolean): void });
					public constructor();
					public onStaleStateChange(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class OnRenderModeChangedListener {
					public static class: java.lang.Class<org.maplibre.android.location.OnRenderModeChangedListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.location.OnRenderModeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onRenderModeChanged(param0: number): void });
					public constructor();
					public onRenderModeChanged(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class PaddingEvaluator extends globalAndroid.animation.TypeEvaluator<androidNative.Array<number>> {
					public static class: java.lang.Class<org.maplibre.android.location.PaddingEvaluator>;
					public constructor();
					public evaluate(fraction: number, startValue: androidNative.Array<number>, endValue: androidNative.Array<number>): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class PulsingLocationCircleAnimator extends org.maplibre.android.location.MapLibreFloatAnimator {
					public static class: java.lang.Class<org.maplibre.android.location.PulsingLocationCircleAnimator>;
					public constructor(values: androidNative.Array<any>, updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, maxAnimationFps: number);
					public constructor(updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, maxAnimationFps: number, circleMaxRadius: number);
					public constructor(updateListener: org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener<any>, target: any, animatedValue: any, minUpdateInterval: number, timeElapsed: number);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class StaleStateManager {
					public static class: java.lang.Class<org.maplibre.android.location.StaleStateManager>;
				}
				export module StaleStateManager {
					export class StaleMessageHandler {
						public static class: java.lang.Class<org.maplibre.android.location.StaleStateManager.StaleMessageHandler>;
						public handleMessage(msg: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class SymbolLocationLayerRenderer extends org.maplibre.android.location.LocationLayerRenderer {
					public static class: java.lang.Class<org.maplibre.android.location.SymbolLocationLayerRenderer>;
					public addBitmaps(renderMode: number, shadowBitmap: globalAndroid.graphics.Bitmap, backgroundBitmap: globalAndroid.graphics.Bitmap, backgroundStaleBitmap: globalAndroid.graphics.Bitmap, bearingBitmap: globalAndroid.graphics.Bitmap, foregroundBitmap: globalAndroid.graphics.Bitmap, foregroundBitmapStale: globalAndroid.graphics.Bitmap): void;
					public setCompassBearing(param0: java.lang.Float): void;
					public stylePulsingCircle(param0: org.maplibre.android.location.LocationComponentOptions): void;
					public setLatLng(latLng: org.maplibre.android.geometry.LatLng): void;
					public removeLayers(): void;
					public setCompassBearing(compassBearing: java.lang.Float): void;
					public cameraTiltUpdated(param0: number): void;
					public setGpsBearing(param0: java.lang.Float): void;
					public setAccuracyRadius(accuracy: java.lang.Float): void;
					public setLocationStale(isStale: boolean, renderMode: number): void;
					public show(renderMode: number, isStale: boolean): void;
					public adjustPulsingCircleLayerVisibility(param0: boolean): void;
					public show(param0: number, param1: boolean): void;
					public setLatLng(param0: org.maplibre.android.geometry.LatLng): void;
					public cameraBearingUpdated(param0: number): void;
					public cameraBearingUpdated(bearing: number): void;
					public addBitmaps(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.graphics.Bitmap, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.graphics.Bitmap, param6: globalAndroid.graphics.Bitmap): void;
					public styleAccuracy(accuracyAlpha: number, accuracyColor: number): void;
					public setGpsBearing(gpsBearing: java.lang.Float): void;
					public styleAccuracy(param0: number, param1: number): void;
					public cameraTiltUpdated(tilt: number): void;
					public initializeComponents(param0: org.maplibre.android.maps.Style): void;
					public setAccuracyRadius(param0: java.lang.Float): void;
					public initializeComponents(style: org.maplibre.android.maps.Style): void;
					public updatePulsingUi(radius: number, opacity: java.lang.Float): void;
					public updateIconIds(foregroundIconString: string, foregroundStaleIconString: string, backgroundIconString: string, backgroundStaleIconString: string, bearingIconString: string): void;
					public styleScaling(param0: org.maplibre.android.style.expressions.Expression): void;
					public updateIconIds(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public hide(): void;
					public setLocationStale(param0: boolean, param1: number): void;
					public updatePulsingUi(param0: number, param1: java.lang.Float): void;
					public styleScaling(layerId: org.maplibre.android.style.expressions.Expression): void;
					public stylePulsingCircle(options: org.maplibre.android.location.LocationComponentOptions): void;
					public addLayers(param0: org.maplibre.android.location.LocationComponentPositionManager): void;
					public addLayers(positionManager: org.maplibre.android.location.LocationComponentPositionManager): void;
					public adjustPulsingCircleLayerVisibility(visible: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export class Utils {
					public static class: java.lang.Class<org.maplibre.android.location.Utils>;
					public static normalize(angle: number): number;
					public static shortestRotation(heading: number, previousHeading: number): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class AndroidLocationEngineImpl extends org.maplibre.android.location.engine.LocationEngineImpl<globalAndroid.location.LocationListener> {
						public static class: java.lang.Class<org.maplibre.android.location.engine.AndroidLocationEngineImpl>;
						public createListener(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): any;
						public getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(listener: globalAndroid.location.LocationListener): void;
						public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: any, param2: globalAndroid.os.Looper): void;
						public removeLocationUpdates(param0: any): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
						public getLastLocation(this_: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public requestLocationUpdates(request: org.maplibre.android.location.engine.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(request: org.maplibre.android.location.engine.LocationEngineRequest, listener: globalAndroid.location.LocationListener, looper: globalAndroid.os.Looper): void;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						public constructor(context: globalAndroid.content.Context);
						public createListener(callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): globalAndroid.location.LocationListener;
					}
					export module AndroidLocationEngineImpl {
						export class AndroidLocationEngineCallbackTransport {
							public static class: java.lang.Class<org.maplibre.android.location.engine.AndroidLocationEngineImpl.AndroidLocationEngineCallbackTransport>;
							public onStatusChanged(s: string, i: number, bundle: globalAndroid.os.Bundle): void;
							public onLocationChanged(location: globalAndroid.location.Location): void;
							public onProviderEnabled(s: string): void;
							public onProviderDisabled(s: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngine {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngine>;
						/**
						 * Constructs a new instance of the org.maplibre.android.location.engine.LocationEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
							requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
							requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
							removeLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
							removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						});
						public constructor();
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
						public getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineCallback<T> extends java.lang.Object {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineCallback<any>>;
						/**
						 * Constructs a new instance of the org.maplibre.android.location.engine.LocationEngineCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: T): void; onFailure(param0: java.lang.Exception): void });
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
						public onSuccess(param0: T): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineDefault {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineDefault>;
						public static INSTANCE: org.maplibre.android.location.engine.LocationEngineDefault;
						public getDefaultLocationEngine(context: globalAndroid.content.Context): org.maplibre.android.location.engine.LocationEngine;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineImpl<T> extends java.lang.Object {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineImpl<any>>;
						/**
						 * Constructs a new instance of the org.maplibre.android.location.engine.LocationEngineImpl<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createListener(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): T;
							getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
							requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: T, param2: globalAndroid.os.Looper): void;
							requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
							removeLocationUpdates(param0: T): void;
							removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						});
						public constructor();
						public createListener(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): T;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
						public getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(param0: T): void;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: T, param2: globalAndroid.os.Looper): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineProxy<T> extends org.maplibre.android.location.engine.LocationEngine {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineProxy<any>>;
						public constructor(locationEngineImpl: org.maplibre.android.location.engine.LocationEngineImpl<any>);
						public getLastLocation(callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
						public getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public requestLocationUpdates(request: org.maplibre.android.location.engine.LocationEngineRequest, callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>, looper: globalAndroid.os.Looper): void;
						public requestLocationUpdates(request: org.maplibre.android.location.engine.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						public removeLocationUpdates(callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineRequest {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineRequest>;
						public static PRIORITY_HIGH_ACCURACY: number = 0;
						public static PRIORITY_BALANCED_POWER_ACCURACY: number = 1;
						public static PRIORITY_LOW_POWER: number = 2;
						public static PRIORITY_NO_POWER: number = 3;
						public getDisplacement(): number;
						public getPriority(): number;
						public hashCode(): number;
						public getInterval(): number;
						public equals(o: any): boolean;
						public getMaxWaitTime(): number;
						public getFastestInterval(): number;
					}
					export module LocationEngineRequest {
						export class Builder {
							public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineRequest.Builder>;
							public build(): org.maplibre.android.location.engine.LocationEngineRequest;
							public setDisplacement(displacement: number): org.maplibre.android.location.engine.LocationEngineRequest.Builder;
							public setFastestInterval(interval: number): org.maplibre.android.location.engine.LocationEngineRequest.Builder;
							public setPriority(priority: number): org.maplibre.android.location.engine.LocationEngineRequest.Builder;
							public setMaxWaitTime(maxWaitTime: number): org.maplibre.android.location.engine.LocationEngineRequest.Builder;
							public constructor(interval: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class LocationEngineResult {
						public static class: java.lang.Class<org.maplibre.android.location.engine.LocationEngineResult>;
						public static create(locationsList: java.util.List<globalAndroid.location.Location>): org.maplibre.android.location.engine.LocationEngineResult;
						public static create(location: globalAndroid.location.Location): org.maplibre.android.location.engine.LocationEngineResult;
						public static extractResult(intent: globalAndroid.content.Intent): org.maplibre.android.location.engine.LocationEngineResult;
						public getLocations(): java.util.List<globalAndroid.location.Location>;
						public getLastLocation(): globalAndroid.location.Location;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class MapLibreFusedLocationEngineImpl extends org.maplibre.android.location.engine.AndroidLocationEngineImpl {
						public static class: java.lang.Class<org.maplibre.android.location.engine.MapLibreFusedLocationEngineImpl>;
						public createListener(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): any;
						public getLastLocation(param0: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public removeLocationUpdates(listener: globalAndroid.location.LocationListener): void;
						public requestLocationUpdates(this_: org.maplibre.android.location.engine.LocationEngineRequest, request: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(this_: org.maplibre.android.location.engine.LocationEngineRequest, request: globalAndroid.location.LocationListener, listener: globalAndroid.os.Looper): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: any, param2: globalAndroid.os.Looper): void;
						public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
						public removeLocationUpdates(param0: any): void;
						public getLastLocation(callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): void;
						public requestLocationUpdates(param0: org.maplibre.android.location.engine.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
						public requestLocationUpdates(request: org.maplibre.android.location.engine.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
						public constructor(context: globalAndroid.content.Context);
						public createListener(callback: org.maplibre.android.location.engine.LocationEngineCallback<org.maplibre.android.location.engine.LocationEngineResult>): globalAndroid.location.LocationListener;
					}
					export module MapLibreFusedLocationEngineImpl {
						export class MapLibreLocationEngineCallbackTransport {
							public static class: java.lang.Class<org.maplibre.android.location.engine.MapLibreFusedLocationEngineImpl.MapLibreLocationEngineCallbackTransport>;
							public onProviderEnabled(provider: string): void;
							public onLocationChanged(location: globalAndroid.location.Location): void;
							public onStatusChanged(provider: string, status: number, extras: globalAndroid.os.Bundle): void;
							public onProviderDisabled(provider: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module engine {
					export class Utils {
						public static class: java.lang.Class<org.maplibre.android.location.engine.Utils>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module modes {
					export class CameraMode {
						public static class: java.lang.Class<org.maplibre.android.location.modes.CameraMode>;
						public static NONE: number = 8;
						public static NONE_COMPASS: number = 16;
						public static NONE_GPS: number = 22;
						public static TRACKING: number = 24;
						public static TRACKING_COMPASS: number = 32;
						public static TRACKING_GPS: number = 34;
						public static TRACKING_GPS_NORTH: number = 36;
					}
					export module CameraMode {
						export class Mode {
							public static class: java.lang.Class<org.maplibre.android.location.modes.CameraMode.Mode>;
							/**
							 * Constructs a new instance of the org.maplibre.android.location.modes.CameraMode$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module modes {
					export class RenderMode {
						public static class: java.lang.Class<org.maplibre.android.location.modes.RenderMode>;
						public static NORMAL: number = 18;
						public static COMPASS: number = 4;
						public static GPS: number = 8;
					}
					export module RenderMode {
						export class Mode {
							public static class: java.lang.Class<org.maplibre.android.location.modes.RenderMode.Mode>;
							/**
							 * Constructs a new instance of the org.maplibre.android.location.modes.RenderMode$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module permissions {
					export class PermissionsListener {
						public static class: java.lang.Class<org.maplibre.android.location.permissions.PermissionsListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.location.permissions.PermissionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onExplanationNeeded(param0: java.util.List<string>): void; onPermissionResult(param0: boolean): void });
						public constructor();
						public onExplanationNeeded(param0: java.util.List<string>): void;
						public onPermissionResult(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module location {
				export module permissions {
					export class PermissionsManager {
						public static class: java.lang.Class<org.maplibre.android.location.permissions.PermissionsManager>;
						public onRequestPermissionsResult(this_: number, requestCode: androidNative.Array<string>, permissions: androidNative.Array<number>): void;
						public static isBackgroundLocationPermissionGranted(context: globalAndroid.content.Context): boolean;
						public setListener(listener: org.maplibre.android.location.permissions.PermissionsListener): void;
						public getListener(): org.maplibre.android.location.permissions.PermissionsListener;
						public static areLocationPermissionsGranted(context: globalAndroid.content.Context): boolean;
						public requestLocationPermissions(fineLocPermission: globalAndroid.app.Activity): void;
						public static areRuntimePermissionsRequired(): boolean;
						public constructor(listener: org.maplibre.android.location.permissions.PermissionsListener);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module log {
				export class Logger {
					public static class: java.lang.Class<org.maplibre.android.log.Logger>;
					public static VERBOSE: number = 2;
					public static DEBUG: number = 3;
					public static INFO: number = 4;
					public static WARN: number = 5;
					public static ERROR: number = 6;
					public static NONE: number = 99;
					public static v(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static w(tag: string, msg: string): void;
					public static v(tag: string, msg: string): void;
					public static i(tag: string, msg: string): void;
					public static d(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static log(severity: number, tag: string, message: string): void;
					public static w(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static i(tag: string, msg: string, tr: java.lang.Throwable): void;
					public constructor();
					public static e(tag: string, msg: string): void;
					public static setLoggerDefinition(loggerDefinition: org.maplibre.android.log.LoggerDefinition): void;
					public static d(tag: string, msg: string): void;
					public static e(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static setVerbosity(logLevel: number): void;
				}
				export module Logger {
					export class LogLevel {
						public static class: java.lang.Class<org.maplibre.android.log.Logger.LogLevel>;
						/**
						 * Constructs a new instance of the org.maplibre.android.log.Logger$LogLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module log {
				export class LoggerDefinition {
					public static class: java.lang.Class<org.maplibre.android.log.LoggerDefinition>;
					/**
					 * Constructs a new instance of the org.maplibre.android.log.LoggerDefinition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						v(param0: string, param1: string): void;
						v(param0: string, param1: string, param2: java.lang.Throwable): void;
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string): void;
						i(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public i(param0: string, param1: string): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class AnnotationContainer extends org.maplibre.android.maps.Annotations {
					public static class: java.lang.Class<org.maplibre.android.maps.AnnotationContainer>;
					public obtainBy(id: number): org.maplibre.android.annotations.Annotation;
					public removeBy(param0: number): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Annotation>;
					public removeBy(param0: java.util.List<any>): void;
					public removeBy(annotation: org.maplibre.android.annotations.Annotation): void;
					public removeAll(): void;
					public removeBy(id: number): void;
					public removeBy(param0: org.maplibre.android.annotations.Annotation): void;
					public removeBy(id: java.util.List<any>): void;
					public obtainBy(param0: number): org.maplibre.android.annotations.Annotation;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class AnnotationManager {
					public static class: java.lang.Class<org.maplibre.android.maps.AnnotationManager>;
				}
				export module AnnotationManager {
					export class MarkerHit {
						public static class: java.lang.Class<org.maplibre.android.maps.AnnotationManager.MarkerHit>;
					}
					export class MarkerHitResolver {
						public static class: java.lang.Class<org.maplibre.android.maps.AnnotationManager.MarkerHitResolver>;
						public execute(markerHit: org.maplibre.android.maps.AnnotationManager.MarkerHit): number;
					}
					export class ShapeAnnotationHit {
						public static class: java.lang.Class<org.maplibre.android.maps.AnnotationManager.ShapeAnnotationHit>;
					}
					export class ShapeAnnotationHitResolver {
						public static class: java.lang.Class<org.maplibre.android.maps.AnnotationManager.ShapeAnnotationHitResolver>;
						public execute(shapeHit: org.maplibre.android.maps.AnnotationManager.ShapeAnnotationHit): org.maplibre.android.annotations.Annotation;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Annotations {
					public static class: java.lang.Class<org.maplibre.android.maps.Annotations>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.Annotations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { obtainBy(param0: number): org.maplibre.android.annotations.Annotation; obtainAll(): java.util.List<org.maplibre.android.annotations.Annotation>; removeBy(param0: number): void; removeBy(param0: org.maplibre.android.annotations.Annotation): void; removeBy(param0: java.util.List<any>): void; removeAll(): void });
					public constructor();
					public removeBy(param0: number): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Annotation>;
					public removeBy(param0: java.util.List<any>): void;
					public removeAll(): void;
					public removeBy(param0: org.maplibre.android.annotations.Annotation): void;
					public obtainBy(param0: number): org.maplibre.android.annotations.Annotation;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class AttributionDialogManager {
					public static class: java.lang.Class<org.maplibre.android.maps.AttributionDialogManager>;
					public onClick(view: globalAndroid.view.View): void;
					public showAttributionDialog(attributionTitles: androidNative.Array<string>): void;
					public constructor(context: globalAndroid.content.Context, maplibreMap: org.maplibre.android.maps.MapLibreMap);
					public onStop(): void;
					public onClick(dialog: globalAndroid.content.DialogInterface, which: number): void;
				}
				export module AttributionDialogManager {
					export class AttributionBuilder {
						public static class: java.lang.Class<org.maplibre.android.maps.AttributionDialogManager.AttributionBuilder>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class CameraChangeDispatcher implements org.maplibre.android.maps.MapLibreMap.OnCameraMoveStartedListener, org.maplibre.android.maps.MapLibreMap.OnCameraMoveListener, org.maplibre.android.maps.MapLibreMap.OnCameraMoveCanceledListener, org.maplibre.android.maps.MapLibreMap.OnCameraIdleListener {
					public static class: java.lang.Class<org.maplibre.android.maps.CameraChangeDispatcher>;
					public onCameraMoveCanceled(): void;
					public onCameraMove(): void;
					public onCameraIdle(): void;
					public onCameraMoveStarted(param0: number): void;
					public onCameraMoveStarted(reason: number): void;
				}
				export module CameraChangeDispatcher {
					export class CameraChangeHandler {
						public static class: java.lang.Class<org.maplibre.android.maps.CameraChangeDispatcher.CameraChangeHandler>;
						public handleMessage(msg: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class FocalPointChangeListener {
					public static class: java.lang.Class<org.maplibre.android.maps.FocalPointChangeListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.FocalPointChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onFocalPointChanged(param0: globalAndroid.graphics.PointF): void });
					public constructor();
					public onFocalPointChanged(param0: globalAndroid.graphics.PointF): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class IconManager {
					public static class: java.lang.Class<org.maplibre.android.maps.IconManager>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Image {
					public static class: java.lang.Class<org.maplibre.android.maps.Image>;
					public constructor(buffer: androidNative.Array<number>, pixelRatio: number, name: string, width: number, height: number, sdf: boolean, stretchX: androidNative.Array<number>, stretchY: androidNative.Array<number>, content: androidNative.Array<number>);
					public constructor(buffer: androidNative.Array<number>, pixelRatio: number, name: string, width: number, height: number, sdf: boolean);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class ImageContent {
					public static class: java.lang.Class<org.maplibre.android.maps.ImageContent>;
					public constructor(left: number, top: number, right: number, bottom: number);
					public equals(obj: any): boolean;
					public toString(): string;
					public getContentArray(): androidNative.Array<number>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class ImageStretches {
					public static class: java.lang.Class<org.maplibre.android.maps.ImageStretches>;
					public equals(obj: any): boolean;
					public toString(): string;
					public getFirst(): number;
					public constructor(first: number, second: number);
					public getSecond(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class InfoWindowManager {
					public static class: java.lang.Class<org.maplibre.android.maps.InfoWindowManager>;
					public add(infoWindow: org.maplibre.android.annotations.InfoWindow): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapChangeReceiver extends org.maplibre.android.maps.NativeMapView.StateCallback {
					public static class: java.lang.Class<org.maplibre.android.maps.MapChangeReceiver>;
					public addOnPreCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPreCompileShaderListener): void;
					public onWillStartRenderingFrame(): void;
					public onDidFinishRenderingFrame(listener: boolean, err: org.maplibre.android.maps.RenderingStats): void;
					public removeOnPostCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPostCompileShaderListener): void;
					public removeOnShaderCompileFailedListener(callback: org.maplibre.android.maps.MapView.OnShaderCompileFailedListener): void;
					public onDidFinishLoadingStyle(): void;
					public onStyleImageMissing(err: string): void;
					public addOnGlyphsErrorListener(callback: org.maplibre.android.maps.MapView.OnGlyphsErrorListener): void;
					public onSpriteRequested(err: string, this_: string): void;
					public addOnGlyphsRequestedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsRequestedListener): void;
					public onDidFailLoadingMap(err: string): void;
					public onDidBecomeIdle(): void;
					public onTileAction(param0: org.maplibre.android.tile.TileOperation, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					public addOnGlyphsLoadedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsLoadedListener): void;
					public onSpriteRequested(param0: string, param1: string): void;
					public onGlyphsError(param0: androidNative.Array<string>, param1: number, param2: number): void;
					public onDidFinishLoadingMap(): void;
					public removeOnSpriteLoadedListener(callback: org.maplibre.android.maps.MapView.OnSpriteLoadedListener): void;
					public onPostCompileShader(param0: number, param1: number, param2: string): void;
					public addOnSpriteErrorListener(callback: org.maplibre.android.maps.MapView.OnSpriteErrorListener): void;
					public onShaderCompileFailed(err: number, this_: number, id: string): void;
					public removeOnTileActionListener(callback: org.maplibre.android.maps.MapView.OnTileActionListener): void;
					public onTileAction(err: org.maplibre.android.tile.TileOperation, this_: number, op: number, x: number, y: number, z: number, wrap: string): void;
					public addOnSpriteRequestedListener(callback: org.maplibre.android.maps.MapView.OnSpriteRequestedListener): void;
					public onSourceChanged(err: string): void;
					public removeOnPreCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPreCompileShaderListener): void;
					public onWillStartRenderingMap(): void;
					public onCameraIsChanging(): void;
					public onCanRemoveUnusedStyleImage(param0: string): boolean;
					public onGlyphsError(err: androidNative.Array<string>, this_: number, stack: number): void;
					public removeOnGlyphsErrorListener(callback: org.maplibre.android.maps.MapView.OnGlyphsErrorListener): void;
					public onGlyphsRequested(param0: androidNative.Array<string>, param1: number, param2: number): void;
					public removeOnGlyphsRequestedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsRequestedListener): void;
					public onSourceChanged(param0: string): void;
					public onShaderCompileFailed(param0: number, param1: number, param2: string): void;
					public onPreCompileShader(err: number, this_: number, id: string): void;
					public addOnTileActionListener(callback: org.maplibre.android.maps.MapView.OnTileActionListener): void;
					public onDidFailLoadingMap(param0: string): void;
					public onPreCompileShader(param0: number, param1: number, param2: string): void;
					public onDidFinishRenderingMap(param0: boolean): void;
					public onSpriteError(param0: string, param1: string): void;
					public onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
					public removeOnSpriteErrorListener(callback: org.maplibre.android.maps.MapView.OnSpriteErrorListener): void;
					public onGlyphsRequested(err: androidNative.Array<string>, this_: number, stack: number): void;
					public onSpriteLoaded(param0: string, param1: string): void;
					public addOnShaderCompileFailedListener(callback: org.maplibre.android.maps.MapView.OnShaderCompileFailedListener): void;
					public onCanRemoveUnusedStyleImage(canRemove: string): boolean;
					public onWillStartLoadingMap(): void;
					public removeOnGlyphsLoadedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsLoadedListener): void;
					public onDidFinishRenderingMap(err: boolean): void;
					public onCameraWillChange(err: boolean): void;
					public onSpriteError(err: string, this_: string): void;
					public removeOnSpriteRequestedListener(callback: org.maplibre.android.maps.MapView.OnSpriteRequestedListener): void;
					public onSpriteLoaded(err: string, this_: string): void;
					public addOnPostCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPostCompileShaderListener): void;
					public addOnSpriteLoadedListener(callback: org.maplibre.android.maps.MapView.OnSpriteLoadedListener): void;
					public onCameraDidChange(err: boolean): void;
					public onGlyphsLoaded(param0: androidNative.Array<string>, param1: number, param2: number): void;
					public onCameraWillChange(param0: boolean): void;
					public onStyleImageMissing(param0: string): void;
					public onGlyphsLoaded(err: androidNative.Array<string>, this_: number, stack: number): void;
					public onCameraDidChange(param0: boolean): void;
					public onPostCompileShader(err: number, this_: number, id: string): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapFragment implements org.maplibre.android.maps.OnMapReadyCallback {
					public static class: java.lang.Class<org.maplibre.android.maps.MapFragment>;
					public onInflate(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, savedInstanceState: globalAndroid.os.Bundle): void;
					public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
					public static newInstance(): org.maplibre.android.maps.MapFragment;
					public onDestroyView(): void;
					public onDestroy(): void;
					public static newInstance(maplibreMapOptions: org.maplibre.android.maps.MapLibreMapOptions): org.maplibre.android.maps.MapFragment;
					public onMapReady(this_: org.maplibre.android.maps.MapLibreMap): void;
					public onResume(): void;
					public onLowMemory(): void;
					public onStart(): void;
					public onMapReady(param0: org.maplibre.android.maps.MapLibreMap): void;
					public constructor();
					public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onPause(): void;
					public onStop(): void;
					public onAttach(context: globalAndroid.content.Context): void;
					public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
					public getMapAsync(onMapReadyCallback: org.maplibre.android.maps.OnMapReadyCallback): void;
				}
				export module MapFragment {
					export class OnMapViewReadyCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.MapFragment.OnMapViewReadyCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapFragment$OnMapViewReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMapViewReady(param0: org.maplibre.android.maps.MapView): void });
						public constructor();
						public onMapViewReady(param0: org.maplibre.android.maps.MapView): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapGestureDetector {
					public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector>;
				}
				export module MapGestureDetector {
					export class MoveGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.MoveGestureListener>;
						public onMove(detector: org.maplibre.android.gestures.MoveGestureDetector, distanceX: number, distanceY: number): boolean;
						public onMoveEnd(detector: org.maplibre.android.gestures.MoveGestureDetector, velocityX: number, velocityY: number): void;
						public onMoveBegin(detector: org.maplibre.android.gestures.MoveGestureDetector): boolean;
					}
					export class RotateGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.RotateGestureListener>;
						public onRotateBegin(detector: org.maplibre.android.gestures.RotateGestureDetector): boolean;
						public onRotate(detector: org.maplibre.android.gestures.RotateGestureDetector, rotationDegreesSinceLast: number, rotationDegreesSinceFirst: number): boolean;
						public onRotateEnd(detector: org.maplibre.android.gestures.RotateGestureDetector, velocityX: number, velocityY: number, angularVelocity: number): void;
					}
					export class ScaleGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.ScaleGestureListener>;
						public onScaleBegin(currSpan: org.maplibre.android.gestures.StandardScaleGestureDetector): boolean;
						public onScaleEnd(detector: org.maplibre.android.gestures.StandardScaleGestureDetector, velocityX: number, velocityY: number): void;
						public onScale(zoomedOut: org.maplibre.android.gestures.StandardScaleGestureDetector): boolean;
					}
					export class ShoveGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.ShoveGestureListener>;
						public onShoveEnd(detector: org.maplibre.android.gestures.ShoveGestureDetector, velocityX: number, velocityY: number): void;
						public onShove(detector: org.maplibre.android.gestures.ShoveGestureDetector, deltaPixelsSinceLast: number, deltaPixelsSinceStart: number): boolean;
						public onShoveBegin(detector: org.maplibre.android.gestures.ShoveGestureDetector): boolean;
					}
					export class StandardGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.StandardGestureListener>;
						public onLongPress(motionEvent: globalAndroid.view.MotionEvent): void;
						public onDown(motionEvent: globalAndroid.view.MotionEvent): boolean;
						public onSingleTapUp(motionEvent: globalAndroid.view.MotionEvent): boolean;
						public onSingleTapConfirmed(motionEvent: globalAndroid.view.MotionEvent): boolean;
						public onFling(this_: globalAndroid.view.MotionEvent, e1: globalAndroid.view.MotionEvent, e2: number, velocityX: number): boolean;
						public onDoubleTapEvent(diffY: globalAndroid.view.MotionEvent): boolean;
					}
					export class TapGestureListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapGestureDetector.TapGestureListener>;
						public onMultiFingerTap(this_: org.maplibre.android.gestures.MultiFingerTapGestureDetector, detector: number): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapKeyListener {
					public static class: java.lang.Class<org.maplibre.android.maps.MapKeyListener>;
				}
				export module MapKeyListener {
					export class TrackballLongPressTimeOut {
						public static class: java.lang.Class<org.maplibre.android.maps.MapKeyListener.TrackballLongPressTimeOut>;
						public run(): void;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapLibreMap {
					public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap>;
					/** @deprecated */
					public getPolylines(): java.util.List<org.maplibre.android.annotations.Polyline>;
					public getStyle(onStyleLoaded: org.maplibre.android.maps.Style.OnStyleLoaded): void;
					public setCameraPosition(cameraPosition: org.maplibre.android.camera.CameraPosition): void;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					/** @deprecated */
					public removeAnnotation(id: number): void;
					public removeOnCameraMoveStartedListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveStartedListener): void;
					public enableRenderingStatsView(value: boolean): void;
					public animateCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public getCameraPosition(): org.maplibre.android.camera.CameraPosition;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate): void;
					/** @deprecated */
					public deselectMarkers(): void;
					public removeOnFlingListener(listener: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
					public moveCamera(update: org.maplibre.android.camera.CameraUpdate, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					/** @deprecated */
					public isAllowConcurrentMultipleOpenInfoWindows(): boolean;
					/** @deprecated */
					public addPolyline(polylineOptions: org.maplibre.android.annotations.PolylineOptions): org.maplibre.android.annotations.Polyline;
					/** @deprecated */
					public removeAnnotation(annotation: org.maplibre.android.annotations.Annotation): void;
					/** @deprecated */
					public getInfoWindowAdapter(): org.maplibre.android.maps.MapLibreMap.InfoWindowAdapter;
					public addOnFlingListener(listener: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
					public getUiSettings(): org.maplibre.android.maps.UiSettings;
					/** @deprecated */
					public getPadding(): androidNative.Array<number>;
					public setFocalBearing(bearing: number, focalX: number, focalY: number, duration: number): void;
					/** @deprecated */
					public setOnPolygonClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnPolygonClickListener): void;
					/** @deprecated */
					public getSelectedMarkers(): java.util.List<org.maplibre.android.annotations.Marker>;
					public getHeight(): number;
					public getStyle(): org.maplibre.android.maps.Style;
					/** @deprecated */
					public setAllowConcurrentMultipleOpenInfoWindows(allow: boolean): void;
					/** @deprecated */
					public removePolygon(polygon: org.maplibre.android.annotations.Polygon): void;
					public scrollBy(x: number, y: number): void;
					/** @deprecated */
					public addPolylines(polylineOptionsList: java.util.List<org.maplibre.android.annotations.PolylineOptions>): java.util.List<org.maplibre.android.annotations.Polyline>;
					public getMaxPitch(): number;
					public getActionJournalLog(): androidNative.Array<string>;
					/** @deprecated */
					public clear(): void;
					public addOnMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
					public moveCamera(update: org.maplibre.android.camera.CameraUpdate): void;
					/** @deprecated */
					public getAnnotation(id: number): org.maplibre.android.annotations.Annotation;
					public setLatLngBoundsForCameraTarget(latLngBounds: org.maplibre.android.geometry.LatLngBounds): void;
					/** @deprecated */
					public selectMarker(marker: org.maplibre.android.annotations.Marker): void;
					/** @deprecated */
					public removeAnnotations(): void;
					public setTileCacheEnabled(enabled: boolean): void;
					public addOnCameraIdleListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraIdleListener): void;
					public addOnShoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
					public setOnInfoWindowLongClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnInfoWindowLongClickListener): void;
					public isRenderingStatsViewEnabled(): boolean;
					/** @deprecated */
					public updateMarker(updatedMarker: org.maplibre.android.annotations.Marker): void;
					public removeOnMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
					public addOnCameraMoveStartedListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveStartedListener): void;
					/** @deprecated */
					public addMarker(markerOptions: org.maplibre.android.annotations.MarkerOptions): org.maplibre.android.annotations.Marker;
					public setStyle(style: string, callback: org.maplibre.android.maps.Style.OnStyleLoaded): void;
					public cancelTransitions(): void;
					public animateCamera(update: org.maplibre.android.camera.CameraUpdate): void;
					/** @deprecated */
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public getGesturesManager(): org.maplibre.android.gestures.AndroidGesturesManager;
					public setPrefetchZoomDelta(delta: number): void;
					public cancelAllVelocityAnimations(): void;
					public getPrefetchZoomDelta(): number;
					public setStyle(builder: org.maplibre.android.maps.Style.Builder): void;
					public getTileCacheEnabled(): boolean;
					public getTileLodZoomShift(): number;
					public addOnScaleListener(listener: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
					public setOnInfoWindowCloseListener(listener: org.maplibre.android.maps.MapLibreMap.OnInfoWindowCloseListener): void;
					public addOnMapClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
					public getTileLodPitchThreshold(): number;
					/** @deprecated */
					public addMarkers(markerOptionsList: java.util.List<any>): java.util.List<org.maplibre.android.annotations.Marker>;
					/** @deprecated */
					public addPolygons(polygonOptionsList: java.util.List<org.maplibre.android.annotations.PolygonOptions>): java.util.List<org.maplibre.android.annotations.Polygon>;
					/** @deprecated */
					public removeAnnotations(annotationList: java.util.List<any>): void;
					public getWidth(): number;
					public getCameraForGeometry(geometry: org.maplibre.geojson.Geometry, padding: androidNative.Array<number>, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public getMinPitch(): number;
					public getCameraForGeometry(geometry: org.maplibre.geojson.Geometry, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.RectF, filter: org.maplibre.android.style.expressions.Expression, layerIds: androidNative.Array<string>): java.util.List<org.maplibre.geojson.Feature>;
					/** @deprecated */
					public addPolygon(polygonOptions: org.maplibre.android.annotations.PolygonOptions): org.maplibre.android.annotations.Polygon;
					public getMinZoomLevel(): number;
					public removeOnCameraIdleListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraIdleListener): void;
					public addOnMapLongClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
					/** @deprecated */
					public getPrefetchesTiles(): boolean;
					/** @deprecated */
					public deselectMarker(marker: org.maplibre.android.annotations.Marker): void;
					public removeOnMapLongClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
					public setMaxZoomPreference(maxZoom: number): void;
					public removeOnCameraMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveListener): void;
					public setDebugActive(debugActive: boolean): void;
					/** @deprecated */
					public getPolygons(): java.util.List<org.maplibre.android.annotations.Polygon>;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.RectF, layerIds: androidNative.Array<string>): java.util.List<org.maplibre.geojson.Feature>;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number, easingInterpolator: boolean): void;
					public setSwapBehaviorFlush(flush: boolean): void;
					/** @deprecated */
					public setInfoWindowAdapter(infoWindowAdapter: org.maplibre.android.maps.MapLibreMap.InfoWindowAdapter): void;
					public removeOnRotateListener(listener: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
					public setStyle(style: string): void;
					public isDebugActive(): boolean;
					public getCameraForLatLngBounds(latLngBounds: org.maplibre.android.geometry.LatLngBounds, padding: androidNative.Array<number>): org.maplibre.android.camera.CameraPosition;
					public getMaxZoomLevel(): number;
					/** @deprecated */
					public updatePolyline(polyline: org.maplibre.android.annotations.Polyline): void;
					public setTileLodScale(scale: number): void;
					/** @deprecated */
					public removeMarker(marker: org.maplibre.android.annotations.Marker): void;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.PointF, layerIds: androidNative.Array<string>): java.util.List<org.maplibre.geojson.Feature>;
					public snapshot(callback: org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback): void;
					/** @deprecated */
					public getMarkers(): java.util.List<org.maplibre.android.annotations.Marker>;
					public removeOnMapClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
					public triggerRepaint(): void;
					public getCameraForGeometry(geometry: org.maplibre.geojson.Geometry, padding: androidNative.Array<number>): org.maplibre.android.camera.CameraPosition;
					public getActionJournalLogFiles(): androidNative.Array<string>;
					public setOnInfoWindowClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnInfoWindowClickListener): void;
					public setStyle(builder: org.maplibre.android.maps.Style.Builder, callback: org.maplibre.android.maps.Style.OnStyleLoaded): void;
					/** @deprecated */
					public getAnnotations(): java.util.List<org.maplibre.android.annotations.Annotation>;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number): void;
					public resetNorth(): void;
					/** @deprecated */
					public updatePolygon(polygon: org.maplibre.android.annotations.Polygon): void;
					public getCameraForLatLngBounds(latLngBounds: org.maplibre.android.geometry.LatLngBounds, padding: androidNative.Array<number>, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public getLocationComponent(): org.maplibre.android.location.LocationComponent;
					public setTileLodPitchThreshold(threshold: number): void;
					public addOnCameraMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveListener): void;
					public setOfflineRegionDefinition(definition: org.maplibre.android.offline.OfflineRegionDefinition, callback: org.maplibre.android.maps.Style.OnStyleLoaded): void;
					/** @deprecated */
					public setOnMarkerClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMarkerClickListener): void;
					public setGesturesManager(androidGesturesManager: org.maplibre.android.gestures.AndroidGesturesManager, attachDefaultListeners: boolean, setDefaultMutuallyExclusives: boolean): void;
					public clearActionJournalLog(): void;
					public getCameraForGeometry(geometry: org.maplibre.geojson.Geometry): org.maplibre.android.camera.CameraPosition;
					public getCameraForLatLngBounds(latLngBounds: org.maplibre.android.geometry.LatLngBounds, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.PointF, filter: org.maplibre.android.style.expressions.Expression, layerIds: androidNative.Array<string>): java.util.List<org.maplibre.geojson.Feature>;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public setTileLodMinRadius(radius: number): void;
					public removeOnScaleListener(listener: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
					/** @deprecated */
					public addMarker(markerOptions: org.maplibre.android.annotations.BaseMarkerOptions<any, any>): org.maplibre.android.annotations.Marker;
					public getZoom(): number;
					/** @deprecated */
					public setOnPolylineClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnPolylineClickListener): void;
					public setMinPitchPreference(minPitch: number): void;
					public easeCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number, easingInterpolator: boolean, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public animateCamera(update: org.maplibre.android.camera.CameraUpdate, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public addOnCameraMoveCancelListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveCanceledListener): void;
					/** @deprecated */
					public cycleDebugOptions(): void;
					public addOnRotateListener(listener: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
					/** @deprecated */
					public setPrefetchesTiles(enable: boolean): void;
					public getTileLodMinRadius(): number;
					public setMaxPitchPreference(maxPitch: number): void;
					public setZoom(zoom: number, focalPoint: globalAndroid.graphics.PointF, duration: number): void;
					public getOnInfoWindowLongClickListener(): org.maplibre.android.maps.MapLibreMap.OnInfoWindowLongClickListener;
					public getProjection(): org.maplibre.android.maps.Projection;
					public setTileLodZoomShift(shift: number): void;
					public getOnInfoWindowClickListener(): org.maplibre.android.maps.MapLibreMap.OnInfoWindowClickListener;
					public removeOnShoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
					public getTileLodScale(): number;
					public setMinZoomPreference(minZoom: number): void;
					public removeOnCameraMoveCancelListener(listener: org.maplibre.android.maps.MapLibreMap.OnCameraMoveCanceledListener): void;
					public setOfflineRegionDefinition(definition: org.maplibre.android.offline.OfflineRegionDefinition): void;
					public animateCamera(update: org.maplibre.android.camera.CameraUpdate, durationMs: number): void;
					public scrollBy(x: number, y: number, duration: number): void;
					/** @deprecated */
					public removePolyline(polyline: org.maplibre.android.annotations.Polyline): void;
					public getCameraForLatLngBounds(latLngBounds: org.maplibre.android.geometry.LatLngBounds): org.maplibre.android.camera.CameraPosition;
					public setOnFpsChangedListener(listener: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
					public getOnInfoWindowCloseListener(): org.maplibre.android.maps.MapLibreMap.OnInfoWindowCloseListener;
				}
				export module MapLibreMap {
					export class CancelableCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.CancelableCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$CancelableCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCancel(): void; onFinish(): void });
						public constructor();
						public onCancel(): void;
						public onFinish(): void;
					}
					export class InfoWindowAdapter {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.InfoWindowAdapter>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$InfoWindowAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getInfoWindow(param0: org.maplibre.android.annotations.Marker): globalAndroid.view.View });
						public constructor();
						public getInfoWindow(param0: org.maplibre.android.annotations.Marker): globalAndroid.view.View;
					}
					export class OnCameraIdleListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnCameraIdleListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnCameraIdleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraIdle(): void });
						public constructor();
						public onCameraIdle(): void;
					}
					export class OnCameraMoveCanceledListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnCameraMoveCanceledListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnCameraMoveCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraMoveCanceled(): void });
						public constructor();
						public onCameraMoveCanceled(): void;
					}
					export class OnCameraMoveListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnCameraMoveListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnCameraMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraMove(): void });
						public constructor();
						public onCameraMove(): void;
					}
					export class OnCameraMoveStartedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnCameraMoveStartedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnCameraMoveStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraMoveStarted(param0: number): void });
						public constructor();
						public static REASON_DEVELOPER_ANIMATION: number = 2;
						public static REASON_API_GESTURE: number = 1;
						public static REASON_API_ANIMATION: number = 3;
						public onCameraMoveStarted(param0: number): void;
					}
					export class OnCompassAnimationListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnCompassAnimationListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnCompassAnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCompassAnimation(): void; onCompassAnimationFinished(): void });
						public constructor();
						public onCompassAnimation(): void;
						public onCompassAnimationFinished(): void;
					}
					export class OnDeveloperAnimationListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnDeveloperAnimationListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnDeveloperAnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDeveloperAnimationStarted(): void });
						public constructor();
						public onDeveloperAnimationStarted(): void;
					}
					export class OnFlingListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnFlingListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnFlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFling(): void });
						public constructor();
						public onFling(): void;
					}
					export class OnFpsChangedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnFpsChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFpsChanged(param0: number): void });
						public constructor();
						public onFpsChanged(param0: number): void;
					}
					export class OnGesturesManagerInteractionListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnGesturesManagerInteractionListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnGesturesManagerInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAddMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
							onRemoveMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
							onAddMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
							onRemoveMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
							onAddFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
							onRemoveFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
							onAddMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
							onRemoveMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
							onAddRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
							onRemoveRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
							onAddScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
							onRemoveScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
							onAddShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
							onRemoveShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
							getGesturesManager(): org.maplibre.android.gestures.AndroidGesturesManager;
							setGesturesManager(param0: org.maplibre.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
							cancelAllVelocityAnimations(): void;
						});
						public constructor();
						public onAddMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public onRemoveMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public onAddMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public getGesturesManager(): org.maplibre.android.gestures.AndroidGesturesManager;
						public onRemoveShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public cancelAllVelocityAnimations(): void;
						public onRemoveMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public onAddMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
						public onAddRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public onAddFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onAddShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public setGesturesManager(param0: org.maplibre.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
						public onRemoveFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onRemoveScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onRemoveRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public onAddScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onRemoveMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
					}
					export class OnInfoWindowClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnInfoWindowClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInfoWindowClick(param0: org.maplibre.android.annotations.Marker): boolean });
						public constructor();
						public onInfoWindowClick(param0: org.maplibre.android.annotations.Marker): boolean;
					}
					export class OnInfoWindowCloseListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnInfoWindowCloseListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnInfoWindowCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInfoWindowClose(param0: org.maplibre.android.annotations.Marker): void });
						public constructor();
						public onInfoWindowClose(param0: org.maplibre.android.annotations.Marker): void;
					}
					export class OnInfoWindowLongClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnInfoWindowLongClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInfoWindowLongClick(param0: org.maplibre.android.annotations.Marker): void });
						public constructor();
						public onInfoWindowLongClick(param0: org.maplibre.android.annotations.Marker): void;
					}
					export class OnMapClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnMapClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnMapClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMapClick(param0: org.maplibre.android.geometry.LatLng): boolean });
						public constructor();
						public onMapClick(param0: org.maplibre.android.geometry.LatLng): boolean;
					}
					export class OnMapLongClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnMapLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMapLongClick(param0: org.maplibre.android.geometry.LatLng): boolean });
						public constructor();
						public onMapLongClick(param0: org.maplibre.android.geometry.LatLng): boolean;
					}
					export class OnMarkerClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnMarkerClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnMarkerClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMarkerClick(param0: org.maplibre.android.annotations.Marker): boolean });
						public constructor();
						public onMarkerClick(param0: org.maplibre.android.annotations.Marker): boolean;
					}
					export class OnMoveListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnMoveListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMoveBegin(param0: org.maplibre.android.gestures.MoveGestureDetector): void; onMove(param0: org.maplibre.android.gestures.MoveGestureDetector): void; onMoveEnd(param0: org.maplibre.android.gestures.MoveGestureDetector): void });
						public constructor();
						public onMoveEnd(param0: org.maplibre.android.gestures.MoveGestureDetector): void;
						public onMove(param0: org.maplibre.android.gestures.MoveGestureDetector): void;
						public onMoveBegin(param0: org.maplibre.android.gestures.MoveGestureDetector): void;
					}
					export class OnPolygonClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnPolygonClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnPolygonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPolygonClick(param0: org.maplibre.android.annotations.Polygon): void });
						public constructor();
						public onPolygonClick(param0: org.maplibre.android.annotations.Polygon): void;
					}
					export class OnPolylineClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnPolylineClickListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnPolylineClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPolylineClick(param0: org.maplibre.android.annotations.Polyline): void });
						public constructor();
						public onPolylineClick(param0: org.maplibre.android.annotations.Polyline): void;
					}
					export class OnRotateListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnRotateListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnRotateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onRotateBegin(param0: org.maplibre.android.gestures.RotateGestureDetector): void; onRotate(param0: org.maplibre.android.gestures.RotateGestureDetector): void; onRotateEnd(param0: org.maplibre.android.gestures.RotateGestureDetector): void });
						public constructor();
						public onRotate(param0: org.maplibre.android.gestures.RotateGestureDetector): void;
						public onRotateEnd(param0: org.maplibre.android.gestures.RotateGestureDetector): void;
						public onRotateBegin(param0: org.maplibre.android.gestures.RotateGestureDetector): void;
					}
					export class OnScaleListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnScaleListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnScaleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onScaleBegin(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void; onScale(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void; onScaleEnd(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void });
						public constructor();
						public onScaleEnd(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void;
						public onScaleBegin(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void;
						public onScale(param0: org.maplibre.android.gestures.StandardScaleGestureDetector): void;
					}
					export class OnShoveListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.OnShoveListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$OnShoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onShoveBegin(param0: org.maplibre.android.gestures.ShoveGestureDetector): void; onShove(param0: org.maplibre.android.gestures.ShoveGestureDetector): void; onShoveEnd(param0: org.maplibre.android.gestures.ShoveGestureDetector): void });
						public constructor();
						public onShoveBegin(param0: org.maplibre.android.gestures.ShoveGestureDetector): void;
						public onShoveEnd(param0: org.maplibre.android.gestures.ShoveGestureDetector): void;
						public onShove(param0: org.maplibre.android.gestures.ShoveGestureDetector): void;
					}
					export class SnapshotReadyCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapLibreMap$SnapshotReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void });
						public constructor();
						public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapLibreMapOptions {
					public static class: java.lang.Class<org.maplibre.android.maps.MapLibreMapOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.maps.MapLibreMapOptions>;
					public isLocalIdeographFontFamilyEnabled(): boolean;
					public getMinPitchPreference(): number;
					public getQuickZoomGesturesEnabled(): boolean;
					public getActionJournalLogFileCount(): number;
					public getScrollGesturesEnabled(): boolean;
					public getAttributionEnabled(): boolean;
					public textureMode(textureMode: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getCompassImage(): globalAndroid.graphics.drawable.Drawable;
					public equals(o: any): boolean;
					public minZoomPreference(minZoom: number): org.maplibre.android.maps.MapLibreMapOptions;
					public actionJournalRenderingReportInterval(actionJournalRenderingReportInterval: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getMaxPitchPreference(): number;
					public getTextureMode(): boolean;
					public getMaxZoomPreference(): number;
					public getTiltGesturesEnabled(): boolean;
					public getPixelRatio(): number;
					public camera(cameraPosition: org.maplibre.android.camera.CameraPosition): org.maplibre.android.maps.MapLibreMapOptions;
					/** @deprecated */
					public constructor();
					public renderSurfaceOnTop(renderOnTop: boolean): void;
					public getDebugActive(): boolean;
					public getCompassMargins(): androidNative.Array<number>;
					/** @deprecated */
					public setPrefetchesTiles(enable: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					/** @deprecated */
					public getApiBaseUrl(): string;
					public actionJournalLogFileSize(actionJournalLogFileSize: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getForegroundLoadColor(): number;
					public attributionEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public foregroundLoadColor(loadColor: number): org.maplibre.android.maps.MapLibreMapOptions;
					public quickZoomGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getAttributionTintColor(): number;
					public compassGravity(gravity: number): org.maplibre.android.maps.MapLibreMapOptions;
					public actionJournalLogFileCount(actionJournalLogFileCount: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getDoubleTapGesturesEnabled(): boolean;
					public getActionJournalEnabled(): boolean;
					public getCompassGravity(): number;
					public getRotateGesturesEnabled(): boolean;
					public compassFadesWhenFacingNorth(compassFadeWhenFacingNorth: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public doubleTapGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public compassImage(compass: globalAndroid.graphics.drawable.Drawable): org.maplibre.android.maps.MapLibreMapOptions;
					public attributionMargins(margins: androidNative.Array<number>): org.maplibre.android.maps.MapLibreMapOptions;
					public getCompassEnabled(): boolean;
					public attributionGravity(gravity: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getCrossSourceCollisions(): boolean;
					public localIdeographFontFamily(fontFamilies: androidNative.Array<string>): org.maplibre.android.maps.MapLibreMapOptions;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public localIdeographFontFamilyEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public debugActive(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public crossSourceCollisions(crossSourceCollisions: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public scrollGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public logoEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getTranslucentTextureSurface(): boolean;
					public maxPitchPreference(maxPitch: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getMinZoomPreference(): number;
					public getActionJournalLogFileSize(): number;
					public getAttributionGravity(): number;
					/** @deprecated */
					public apiBaseUrl(apiBaseUrl: string): org.maplibre.android.maps.MapLibreMapOptions;
					public logoMargins(margins: androidNative.Array<number>): org.maplibre.android.maps.MapLibreMapOptions;
					public zoomGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getLogoMargins(): androidNative.Array<number>;
					public translucentTextureSurface(translucentTextureSurface: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public tiltGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getPrefetchZoomDelta(): number;
					public getLogoGravity(): number;
					public apiBaseUri(apiBaseUri: string): org.maplibre.android.maps.MapLibreMapOptions;
					public setPrefetchZoomDelta(delta: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getActionJournalRenderingReportInterval(): number;
					public attributionTintColor(color: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getHorizontalScrollGesturesEnabled(): boolean;
					public compassMargins(margins: androidNative.Array<number>): org.maplibre.android.maps.MapLibreMapOptions;
					public hashCode(): number;
					public getCompassFadeFacingNorth(): boolean;
					public getAttributionMargins(): androidNative.Array<number>;
					public getZoomGesturesEnabled(): boolean;
					public actionJournalEnabled(actionJournalEnabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public localIdeographFontFamily(fontFamily: string): org.maplibre.android.maps.MapLibreMapOptions;
					public static createFromAttributes(context: globalAndroid.content.Context): org.maplibre.android.maps.MapLibreMapOptions;
					public getActionJournalPath(): string;
					public getCamera(): org.maplibre.android.camera.CameraPosition;
					public pixelRatio(pixelRatio: number): org.maplibre.android.maps.MapLibreMapOptions;
					public describeContents(): number;
					public minPitchPreference(minPitch: number): org.maplibre.android.maps.MapLibreMapOptions;
					public compassEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public getApiBaseUri(): string;
					public rotateGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					public actionJournalPath(actionJournalPath: string): org.maplibre.android.maps.MapLibreMapOptions;
					public logoGravity(gravity: number): org.maplibre.android.maps.MapLibreMapOptions;
					public getRenderSurfaceOnTop(): boolean;
					public getLocalIdeographFontFamily(): string;
					public getLogoEnabled(): boolean;
					public maxZoomPreference(maxZoom: number): org.maplibre.android.maps.MapLibreMapOptions;
					public static createFromAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): org.maplibre.android.maps.MapLibreMapOptions;
					public horizontalScrollGesturesEnabled(enabled: boolean): org.maplibre.android.maps.MapLibreMapOptions;
					/** @deprecated */
					public getPrefetchesTiles(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MapView implements org.maplibre.android.maps.NativeMapView.ViewCallback {
					public static class: java.lang.Class<org.maplibre.android.maps.MapView>;
					public addOnPreCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPreCompileShaderListener): void;
					public addOnSourceChangedListener(listener: org.maplibre.android.maps.MapView.OnSourceChangedListener): void;
					public removeOnDidFailLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFailLoadingMapListener): void;
					public getMapAsync(callback: org.maplibre.android.maps.OnMapReadyCallback): void;
					public removeOnDidFinishLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFinishLoadingMapListener): void;
					public setMaximumFps(maximumFps: number): void;
					public onDestroy(): void;
					public removeOnDidBecomeIdleListener(listener: org.maplibre.android.maps.MapView.OnDidBecomeIdleListener): void;
					public removeOnPostCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPostCompileShaderListener): void;
					public onLowMemory(): void;
					public static setMapStrictModeEnabled(strictModeEnabled: boolean): void;
					public removeOnShaderCompileFailedListener(callback: org.maplibre.android.maps.MapView.OnShaderCompileFailedListener): void;
					public onStart(): void;
					public getPixelRatio(): number;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, options: org.maplibre.android.maps.MapLibreMapOptions);
					public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
					public addOnWillStartRenderingMapListener(listener: org.maplibre.android.maps.MapView.OnWillStartRenderingMapListener): void;
					public addOnCameraWillChangeListener(listener: org.maplibre.android.maps.MapView.OnCameraWillChangeListener): void;
					public addOnDidFailLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFailLoadingMapListener): void;
					public addOnGlyphsErrorListener(callback: org.maplibre.android.maps.MapView.OnGlyphsErrorListener): void;
					public addOnCanRemoveUnusedStyleImageListener(listener: org.maplibre.android.maps.MapView.OnCanRemoveUnusedStyleImageListener): void;
					public addOnGlyphsRequestedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsRequestedListener): void;
					public queueEvent(runnable: java.lang.Runnable): void;
					public addOnWillStartRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnWillStartRenderingFrameListener): void;
					public initialize(context: globalAndroid.content.Context, options: org.maplibre.android.maps.MapLibreMapOptions): void;
					public addOnGlyphsLoadedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsLoadedListener): void;
					public removeOnCameraDidChangeListener(listener: org.maplibre.android.maps.MapView.OnCameraDidChangeListener): void;
					public removeOnWillStartRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnWillStartRenderingFrameListener): void;
					public removeOnStyleImageMissingListener(listener: org.maplibre.android.maps.MapView.OnStyleImageMissingListener): void;
					public addOnDidFinishLoadingStyleListener(listener: org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener): void;
					public addOnDidFinishRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameListener): void;
					public removeOnSpriteLoadedListener(callback: org.maplibre.android.maps.MapView.OnSpriteLoadedListener): void;
					public setRenderingRefreshMode(mode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
					public removeOnDidFinishRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameListener): void;
					public onResume(): void;
					public initialiseLogoView(): globalAndroid.widget.ImageView;
					public isDestroyed(): boolean;
					public addOnDidFinishRenderingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingMapListener): void;
					public addOnSpriteErrorListener(callback: org.maplibre.android.maps.MapView.OnSpriteErrorListener): void;
					public initialiseAttributionView(): globalAndroid.widget.ImageView;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public removeOnCameraWillChangeListener(listener: org.maplibre.android.maps.MapView.OnCameraWillChangeListener): void;
					public removeOnTileActionListener(callback: org.maplibre.android.maps.MapView.OnTileActionListener): void;
					public addOnSpriteRequestedListener(callback: org.maplibre.android.maps.MapView.OnSpriteRequestedListener): void;
					public constructor(context: globalAndroid.content.Context);
					public removeOnPreCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPreCompileShaderListener): void;
					public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
					public addOnDidFinishRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameWithStatsListener): void;
					public removeOnGlyphsErrorListener(callback: org.maplibre.android.maps.MapView.OnGlyphsErrorListener): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addOnCameraIsChangingListener(listener: org.maplibre.android.maps.MapView.OnCameraIsChangingListener): void;
					public removeOnGlyphsRequestedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsRequestedListener): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public addOnTileActionListener(callback: org.maplibre.android.maps.MapView.OnTileActionListener): void;
					public removeOnSourceChangedListener(listener: org.maplibre.android.maps.MapView.OnSourceChangedListener): void;
					public addOnCameraDidChangeListener(listener: org.maplibre.android.maps.MapView.OnCameraDidChangeListener): void;
					public onTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onGenericMotionEvent(event: globalAndroid.view.MotionEvent): boolean;
					public addOnDidFinishLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFinishLoadingMapListener): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getRenderView(): globalAndroid.view.View;
					public removeOnSpriteErrorListener(callback: org.maplibre.android.maps.MapView.OnSpriteErrorListener): void;
					public getViewContent(): globalAndroid.graphics.Bitmap;
					public addOnShaderCompileFailedListener(callback: org.maplibre.android.maps.MapView.OnShaderCompileFailedListener): void;
					public removeOnCameraIsChangingListener(listener: org.maplibre.android.maps.MapView.OnCameraIsChangingListener): void;
					public removeOnWillStartRenderingMapListener(listener: org.maplibre.android.maps.MapView.OnWillStartRenderingMapListener): void;
					public onSizeChanged(width: number, height: number, oldw: number, oldh: number): void;
					public removeOnWillStartLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnWillStartLoadingMapListener): void;
					public removeOnGlyphsLoadedListener(callback: org.maplibre.android.maps.MapView.OnGlyphsLoadedListener): void;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public removeOnSpriteRequestedListener(callback: org.maplibre.android.maps.MapView.OnSpriteRequestedListener): void;
					public addOnPostCompileShaderListener(callback: org.maplibre.android.maps.MapView.OnPostCompileShaderListener): void;
					public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
					public addOnSpriteLoadedListener(callback: org.maplibre.android.maps.MapView.OnSpriteLoadedListener): void;
					public removeOnDidFinishRenderingMapListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingMapListener): void;
					public removeOnDidFinishRenderingFrameListener(listener: org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameWithStatsListener): void;
					public onPause(): void;
					public initialiseCompassView(): org.maplibre.android.maps.widgets.CompassView;
					public onStop(): void;
					public removeOnCanRemoveUnusedStyleImageListener(listener: org.maplibre.android.maps.MapView.OnCanRemoveUnusedStyleImageListener): void;
					public addOnWillStartLoadingMapListener(listener: org.maplibre.android.maps.MapView.OnWillStartLoadingMapListener): void;
					public addOnDidBecomeIdleListener(listener: org.maplibre.android.maps.MapView.OnDidBecomeIdleListener): void;
					public addOnStyleImageMissingListener(listener: org.maplibre.android.maps.MapView.OnStyleImageMissingListener): void;
					public removeOnDidFinishLoadingStyleListener(listener: org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener): void;
				}
				export module MapView {
					export class AttributionClickListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.AttributionClickListener>;
						public onClick(v: globalAndroid.view.View): void;
						public onStop(): void;
					}
					export class FocalPointInvalidator extends org.maplibre.android.maps.FocalPointChangeListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.FocalPointInvalidator>;
						public onFocalPointChanged(this_: globalAndroid.graphics.PointF): void;
						public onFocalPointChanged(param0: globalAndroid.graphics.PointF): void;
					}
					export class GesturesManagerInteractionListener extends org.maplibre.android.maps.MapLibreMap.OnGesturesManagerInteractionListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.GesturesManagerInteractionListener>;
						public onAddMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public setGesturesManager(gesturesManager: org.maplibre.android.gestures.AndroidGesturesManager, attachDefaultListeners: boolean, setDefaultMutuallyExclusives: boolean): void;
						public onRemoveMoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public onAddMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public onAddMapClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
						public cancelAllVelocityAnimations(): void;
						public onRemoveShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public onRemoveFlingListener(listener: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onAddMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
						public onAddRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public onRemoveRotateListener(listener: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public setGesturesManager(param0: org.maplibre.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
						public onRemoveMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public onRemoveScaleListener(listener: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onRemoveFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onRemoveRotateListener(param0: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public onAddMoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnMoveListener): void;
						public onRemoveMapLongClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public getGesturesManager(): org.maplibre.android.gestures.AndroidGesturesManager;
						public onAddFlingListener(listener: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onAddScaleListener(listener: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onRemoveMapLongClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public onRemoveMapClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
						public onAddFlingListener(param0: org.maplibre.android.maps.MapLibreMap.OnFlingListener): void;
						public onRemoveShoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public onAddShoveListener(param0: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public onAddShoveListener(listener: org.maplibre.android.maps.MapLibreMap.OnShoveListener): void;
						public onRemoveScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onAddScaleListener(param0: org.maplibre.android.maps.MapLibreMap.OnScaleListener): void;
						public onAddMapLongClickListener(listener: org.maplibre.android.maps.MapLibreMap.OnMapLongClickListener): void;
						public onAddRotateListener(listener: org.maplibre.android.maps.MapLibreMap.OnRotateListener): void;
						public onRemoveMapClickListener(param0: org.maplibre.android.maps.MapLibreMap.OnMapClickListener): void;
					}
					export class InitialRenderCallback extends org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameWithStatsListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.InitialRenderCallback>;
						public onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
						public onDidFinishRenderingFrame(fully: boolean, stats: org.maplibre.android.maps.RenderingStats): void;
					}
					export class MapCallback implements org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener, org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameWithStatsListener, org.maplibre.android.maps.MapView.OnDidFinishLoadingMapListener, org.maplibre.android.maps.MapView.OnCameraIsChangingListener, org.maplibre.android.maps.MapView.OnCameraDidChangeListener, org.maplibre.android.maps.MapView.OnDidFailLoadingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.MapCallback>;
						public onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
						public onDidFinishLoadingMap(): void;
						public onDidFailLoadingMap(param0: string): void;
						public onDidFinishRenderingFrame(fully: boolean, stats: org.maplibre.android.maps.RenderingStats): void;
						public onCameraIsChanging(): void;
						public onDidFinishLoadingStyle(): void;
						public onCameraDidChange(animated: boolean): void;
						public onDidFailLoadingMap(errorMessage: string): void;
						public onCameraDidChange(param0: boolean): void;
					}
					export class OnCameraDidChangeListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnCameraDidChangeListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnCameraDidChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraDidChange(param0: boolean): void });
						public constructor();
						public onCameraDidChange(param0: boolean): void;
					}
					export class OnCameraIsChangingListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnCameraIsChangingListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnCameraIsChangingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraIsChanging(): void });
						public constructor();
						public onCameraIsChanging(): void;
					}
					export class OnCameraWillChangeListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnCameraWillChangeListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnCameraWillChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCameraWillChange(param0: boolean): void });
						public constructor();
						public onCameraWillChange(param0: boolean): void;
					}
					export class OnCanRemoveUnusedStyleImageListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnCanRemoveUnusedStyleImageListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnCanRemoveUnusedStyleImageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCanRemoveUnusedStyleImage(param0: string): boolean });
						public constructor();
						public onCanRemoveUnusedStyleImage(param0: string): boolean;
					}
					export class OnDidBecomeIdleListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidBecomeIdleListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidBecomeIdleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidBecomeIdle(): void });
						public constructor();
						public onDidBecomeIdle(): void;
					}
					export class OnDidFailLoadingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFailLoadingMapListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFailLoadingMapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFailLoadingMap(param0: string): void });
						public constructor();
						public onDidFailLoadingMap(param0: string): void;
					}
					export class OnDidFinishLoadingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFinishLoadingMapListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFinishLoadingMapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishLoadingMap(): void });
						public constructor();
						public onDidFinishLoadingMap(): void;
					}
					export class OnDidFinishLoadingStyleListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFinishLoadingStyleListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFinishLoadingStyleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishLoadingStyle(): void });
						public constructor();
						public onDidFinishLoadingStyle(): void;
					}
					export class OnDidFinishRenderingFrameListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFinishRenderingFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishRenderingFrame(param0: boolean, param1: number, param2: number): void });
						public constructor();
						public onDidFinishRenderingFrame(param0: boolean, param1: number, param2: number): void;
					}
					export class OnDidFinishRenderingFrameWithStatsListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFinishRenderingFrameWithStatsListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFinishRenderingFrameWithStatsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void });
						public constructor();
						public onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
					}
					export class OnDidFinishRenderingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnDidFinishRenderingMapListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnDidFinishRenderingMapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishRenderingMap(param0: boolean): void });
						public constructor();
						public onDidFinishRenderingMap(param0: boolean): void;
					}
					export class OnGlyphsErrorListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnGlyphsErrorListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnGlyphsErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onGlyphsError(param0: androidNative.Array<string>, param1: number, param2: number): void });
						public constructor();
						public onGlyphsError(param0: androidNative.Array<string>, param1: number, param2: number): void;
					}
					export class OnGlyphsLoadedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnGlyphsLoadedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnGlyphsLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onGlyphsLoaded(param0: androidNative.Array<string>, param1: number, param2: number): void });
						public constructor();
						public onGlyphsLoaded(param0: androidNative.Array<string>, param1: number, param2: number): void;
					}
					export class OnGlyphsRequestedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnGlyphsRequestedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnGlyphsRequestedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onGlyphsRequested(param0: androidNative.Array<string>, param1: number, param2: number): void });
						public constructor();
						public onGlyphsRequested(param0: androidNative.Array<string>, param1: number, param2: number): void;
					}
					export class OnPostCompileShaderListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnPostCompileShaderListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnPostCompileShaderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPostCompileShader(param0: number, param1: number, param2: string): void });
						public constructor();
						public onPostCompileShader(param0: number, param1: number, param2: string): void;
					}
					export class OnPreCompileShaderListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnPreCompileShaderListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnPreCompileShaderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPreCompileShader(param0: number, param1: number, param2: string): void });
						public constructor();
						public onPreCompileShader(param0: number, param1: number, param2: string): void;
					}
					export class OnShaderCompileFailedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnShaderCompileFailedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnShaderCompileFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onShaderCompileFailed(param0: number, param1: number, param2: string): void });
						public constructor();
						public onShaderCompileFailed(param0: number, param1: number, param2: string): void;
					}
					export class OnSourceChangedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnSourceChangedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnSourceChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSourceChangedListener(param0: string): void });
						public constructor();
						public onSourceChangedListener(param0: string): void;
					}
					export class OnSpriteErrorListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnSpriteErrorListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnSpriteErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSpriteError(param0: string, param1: string): void });
						public constructor();
						public onSpriteError(param0: string, param1: string): void;
					}
					export class OnSpriteLoadedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnSpriteLoadedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnSpriteLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSpriteLoaded(param0: string, param1: string): void });
						public constructor();
						public onSpriteLoaded(param0: string, param1: string): void;
					}
					export class OnSpriteRequestedListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnSpriteRequestedListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnSpriteRequestedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSpriteRequested(param0: string, param1: string): void });
						public constructor();
						public onSpriteRequested(param0: string, param1: string): void;
					}
					export class OnStyleImageMissingListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnStyleImageMissingListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnStyleImageMissingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStyleImageMissing(param0: string): void });
						public constructor();
						public onStyleImageMissing(param0: string): void;
					}
					export class OnTileActionListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnTileActionListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnTileActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onTileAction(param0: org.maplibre.android.tile.TileOperation, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void });
						public constructor();
						public onTileAction(param0: org.maplibre.android.tile.TileOperation, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					}
					export class OnWillStartLoadingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnWillStartLoadingMapListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnWillStartLoadingMapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWillStartLoadingMap(): void });
						public constructor();
						public onWillStartLoadingMap(): void;
					}
					export class OnWillStartRenderingFrameListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnWillStartRenderingFrameListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnWillStartRenderingFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWillStartRenderingFrame(): void });
						public constructor();
						public onWillStartRenderingFrame(): void;
					}
					export class OnWillStartRenderingMapListener {
						public static class: java.lang.Class<org.maplibre.android.maps.MapView.OnWillStartRenderingMapListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.MapView$OnWillStartRenderingMapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWillStartRenderingMap(): void });
						public constructor();
						public onWillStartRenderingMap(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class MarkerContainer extends org.maplibre.android.maps.Markers {
					public static class: java.lang.Class<org.maplibre.android.maps.MarkerContainer>;
					public obtainAllIn(annotation: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Marker>;
					public update(updatedMarker: org.maplibre.android.annotations.Marker, maplibreMap: org.maplibre.android.maps.MapLibreMap): void;
					public addBy(param0: org.maplibre.android.annotations.BaseMarkerOptions<any, any>, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Marker;
					public addBy(markerOptions: org.maplibre.android.annotations.BaseMarkerOptions<any, any>, maplibreMap: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Marker;
					public addBy(marker: java.util.List<any>, i: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Marker>;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Marker>;
					public obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Marker>;
					public reload(): void;
					public addBy(param0: java.util.List<any>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Marker>;
					public update(param0: org.maplibre.android.annotations.Marker, param1: org.maplibre.android.maps.MapLibreMap): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Markers {
					public static class: java.lang.Class<org.maplibre.android.maps.Markers>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.Markers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addBy(param0: org.maplibre.android.annotations.BaseMarkerOptions<any, any>, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Marker;
						addBy(param0: java.util.List<any>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Marker>;
						update(param0: org.maplibre.android.annotations.Marker, param1: org.maplibre.android.maps.MapLibreMap): void;
						obtainAll(): java.util.List<org.maplibre.android.annotations.Marker>;
						obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Marker>;
						reload(): void;
					});
					public constructor();
					public addBy(param0: org.maplibre.android.annotations.BaseMarkerOptions<any, any>, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Marker;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Marker>;
					public obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Marker>;
					public reload(): void;
					public addBy(param0: java.util.List<any>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Marker>;
					public update(param0: org.maplibre.android.annotations.Marker, param1: org.maplibre.android.maps.MapLibreMap): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class NativeMap {
					public static class: java.lang.Class<org.maplibre.android.maps.NativeMap>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.NativeMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						resizeView(param0: number, param1: number): void;
						onLowMemory(): void;
						destroy(): void;
						isDestroyed(): boolean;
						jumpTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
						easeTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number, param6: boolean): void;
						flyTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): void;
						moveBy(param0: number, param1: number, param2: number): void;
						getCameraPosition(): org.maplibre.android.camera.CameraPosition;
						getCameraForLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
						getCameraForGeometry(param0: org.maplibre.geojson.Geometry, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
						resetPosition(): void;
						setLatLng(param0: org.maplibre.android.geometry.LatLng, param1: number): void;
						getLatLng(): org.maplibre.android.geometry.LatLng;
						setLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds): void;
						setVisibleCoordinateBounds(param0: androidNative.Array<org.maplibre.android.geometry.LatLng>, param1: globalAndroid.graphics.RectF, param2: number, param3: number): void;
						setPitch(param0: number, param1: number): void;
						getPitch(): number;
						setZoom(param0: number, param1: globalAndroid.graphics.PointF, param2: number): void;
						getZoom(): number;
						setMinZoom(param0: number): void;
						getMinZoom(): number;
						setMaxZoom(param0: number): void;
						getMaxZoom(): number;
						setMinPitch(param0: number): void;
						getMinPitch(): number;
						setMaxPitch(param0: number): void;
						getMaxPitch(): number;
						resetZoom(): void;
						rotateBy(param0: number, param1: number, param2: number, param3: number, param4: number): void;
						setBearing(param0: number, param1: number): void;
						setBearing(param0: number, param1: number, param2: number, param3: number): void;
						getBearing(): number;
						resetNorth(): void;
						cancelTransitions(): void;
						setStyleUri(param0: string): void;
						getStyleUri(): string;
						setStyleJson(param0: string): void;
						getStyleJson(): string;
						isFullyLoaded(): boolean;
						addLayer(param0: org.maplibre.android.style.layers.Layer): void;
						addLayerBelow(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
						addLayerAbove(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
						addLayerAt(param0: org.maplibre.android.style.layers.Layer, param1: number): void;
						getLayers(): java.util.List<org.maplibre.android.style.layers.Layer>;
						getLayer(param0: string): org.maplibre.android.style.layers.Layer;
						removeLayer(param0: string): boolean;
						removeLayer(param0: org.maplibre.android.style.layers.Layer): boolean;
						removeLayerAt(param0: number): boolean;
						addSource(param0: org.maplibre.android.style.sources.Source): void;
						getSources(): java.util.List<org.maplibre.android.style.sources.Source>;
						getSource(param0: string): org.maplibre.android.style.sources.Source;
						removeSource(param0: string): boolean;
						removeSource(param0: org.maplibre.android.style.sources.Source): boolean;
						setTransitionOptions(param0: org.maplibre.android.style.layers.TransitionOptions): void;
						getTransitionOptions(): org.maplibre.android.style.layers.TransitionOptions;
						addImages(param0: androidNative.Array<org.maplibre.android.maps.Image>): void;
						getImage(param0: string): globalAndroid.graphics.Bitmap;
						removeImage(param0: string): void;
						getLight(): org.maplibre.android.style.light.Light;
						setContentPadding(param0: androidNative.Array<number>): void;
						getContentPadding(): androidNative.Array<number>;
						queryRenderedFeatures(param0: globalAndroid.graphics.PointF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
						queryRenderedFeatures(param0: globalAndroid.graphics.RectF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
						getMetersPerPixelAtLatitude(param0: number): number;
						projectedMetersForLatLng(param0: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.ProjectedMeters;
						latLngForProjectedMeters(param0: org.maplibre.android.geometry.ProjectedMeters): org.maplibre.android.geometry.LatLng;
						pixelForLatLng(param0: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
						pixelsForLatLngs(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
						getVisibleCoordinateBounds(param0: androidNative.Array<number>): void;
						latLngForPixel(param0: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
						latLngsForPixels(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
						setOnFpsChangedListener(param0: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
						setDebug(param0: boolean): void;
						getDebug(): boolean;
						getActionJournalLogFiles(): androidNative.Array<string>;
						getActionJournalLog(): androidNative.Array<string>;
						clearActionJournalLog(): void;
						setReachability(param0: boolean): void;
						setApiBaseUrl(param0: string): void;
						setPrefetchTiles(param0: boolean): void;
						getPrefetchTiles(): boolean;
						setPrefetchZoomDelta(param0: number): void;
						getPrefetchZoomDelta(): number;
						setTileCacheEnabled(param0: boolean): void;
						getTileCacheEnabled(): boolean;
						setTileLodMinRadius(param0: number): void;
						getTileLodMinRadius(): number;
						setTileLodScale(param0: number): void;
						getTileLodScale(): number;
						setTileLodPitchThreshold(param0: number): void;
						getTileLodPitchThreshold(): number;
						setTileLodZoomShift(param0: number): void;
						getTileLodZoomShift(): number;
						setGestureInProgress(param0: boolean): void;
						getPixelRatio(): number;
						triggerRepaint(): void;
						isRenderingStatsViewEnabled(): boolean;
						enableRenderingStatsView(param0: boolean): void;
						setSwapBehaviorFlush(param0: boolean): void;
						addMarker(param0: org.maplibre.android.annotations.Marker): number;
						addMarkers(param0: java.util.List<org.maplibre.android.annotations.Marker>): androidNative.Array<number>;
						addPolyline(param0: org.maplibre.android.annotations.Polyline): number;
						addPolylines(param0: java.util.List<org.maplibre.android.annotations.Polyline>): androidNative.Array<number>;
						addPolygon(param0: org.maplibre.android.annotations.Polygon): number;
						addPolygons(param0: java.util.List<org.maplibre.android.annotations.Polygon>): androidNative.Array<number>;
						updateMarker(param0: org.maplibre.android.annotations.Marker): void;
						updatePolygon(param0: org.maplibre.android.annotations.Polygon): void;
						updatePolyline(param0: org.maplibre.android.annotations.Polyline): void;
						removeAnnotation(param0: number): void;
						removeAnnotations(param0: androidNative.Array<number>): void;
						getTopOffsetPixelsForAnnotationSymbol(param0: string): number;
						addAnnotationIcon(param0: string, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
						removeAnnotationIcon(param0: string): void;
						queryPointAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
						queryShapeAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
						getDensityDependantRectangle(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
						getNativePtr(): number;
						addSnapshotCallback(param0: org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback): void;
					});
					public constructor();
					public addPolyline(param0: org.maplibre.android.annotations.Polyline): number;
					public setPrefetchTiles(param0: boolean): void;
					public removeLayer(param0: org.maplibre.android.style.layers.Layer): boolean;
					public getCameraPosition(): org.maplibre.android.camera.CameraPosition;
					public setOnFpsChangedListener(param0: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
					public getPixelRatio(): number;
					public setPitch(param0: number, param1: number): void;
					public updatePolyline(param0: org.maplibre.android.annotations.Polyline): void;
					public addSnapshotCallback(param0: org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback): void;
					public resetPosition(): void;
					public updatePolygon(param0: org.maplibre.android.annotations.Polygon): void;
					public queryRenderedFeatures(param0: globalAndroid.graphics.RectF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public setTileLodScale(param0: number): void;
					public getMaxPitch(): number;
					public removeSource(param0: org.maplibre.android.style.sources.Source): boolean;
					public latLngsForPixels(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public getActionJournalLog(): androidNative.Array<string>;
					public jumpTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
					public isRenderingStatsViewEnabled(): boolean;
					public setMaxPitch(param0: number): void;
					public addPolylines(param0: java.util.List<org.maplibre.android.annotations.Polyline>): androidNative.Array<number>;
					public getLatLng(): org.maplibre.android.geometry.LatLng;
					public setDebug(param0: boolean): void;
					public getTopOffsetPixelsForAnnotationSymbol(param0: string): number;
					public cancelTransitions(): void;
					public getLayers(): java.util.List<org.maplibre.android.style.layers.Layer>;
					public getPrefetchTiles(): boolean;
					public getPrefetchZoomDelta(): number;
					public addMarkers(param0: java.util.List<org.maplibre.android.annotations.Marker>): androidNative.Array<number>;
					public getImage(param0: string): globalAndroid.graphics.Bitmap;
					public removeAnnotationIcon(param0: string): void;
					public destroy(): void;
					public latLngForPixel(param0: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
					public removeSource(param0: string): boolean;
					public setApiBaseUrl(param0: string): void;
					public setTileCacheEnabled(param0: boolean): void;
					public getTileCacheEnabled(): boolean;
					public removeLayerAt(param0: number): boolean;
					public enableRenderingStatsView(param0: boolean): void;
					public setTransitionOptions(param0: org.maplibre.android.style.layers.TransitionOptions): void;
					public getTileLodZoomShift(): number;
					public setContentPadding(param0: androidNative.Array<number>): void;
					public queryRenderedFeatures(param0: globalAndroid.graphics.PointF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public getContentPadding(): androidNative.Array<number>;
					public setLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds): void;
					public setTileLodPitchThreshold(param0: number): void;
					public getTileLodPitchThreshold(): number;
					public getStyleUri(): string;
					public getBearing(): number;
					public resetZoom(): void;
					public getMinPitch(): number;
					public pixelsForLatLngs(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public addSource(param0: org.maplibre.android.style.sources.Source): void;
					public setMinPitch(param0: number): void;
					public updateMarker(param0: org.maplibre.android.annotations.Marker): void;
					public addPolygon(param0: org.maplibre.android.annotations.Polygon): number;
					public isFullyLoaded(): boolean;
					public removeImage(param0: string): void;
					public setTileLodMinRadius(param0: number): void;
					public setStyleUri(param0: string): void;
					public addImages(param0: androidNative.Array<org.maplibre.android.maps.Image>): void;
					public getDebug(): boolean;
					public queryShapeAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public onLowMemory(): void;
					public addPolygons(param0: java.util.List<org.maplibre.android.annotations.Polygon>): androidNative.Array<number>;
					public getMaxZoom(): number;
					public projectedMetersForLatLng(param0: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.ProjectedMeters;
					public getTransitionOptions(): org.maplibre.android.style.layers.TransitionOptions;
					public setBearing(param0: number, param1: number): void;
					public removeAnnotation(param0: number): void;
					public setReachability(param0: boolean): void;
					public setGestureInProgress(param0: boolean): void;
					public setSwapBehaviorFlush(param0: boolean): void;
					public triggerRepaint(): void;
					public moveBy(param0: number, param1: number, param2: number): void;
					public setZoom(param0: number, param1: globalAndroid.graphics.PointF, param2: number): void;
					public getLight(): org.maplibre.android.style.light.Light;
					public getActionJournalLogFiles(): androidNative.Array<string>;
					public isDestroyed(): boolean;
					public removeLayer(param0: string): boolean;
					public getVisibleCoordinateBounds(param0: androidNative.Array<number>): void;
					public removeAnnotations(param0: androidNative.Array<number>): void;
					public resetNorth(): void;
					public easeTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number, param6: boolean): void;
					public addLayerAbove(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
					public queryPointAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public latLngForProjectedMeters(param0: org.maplibre.android.geometry.ProjectedMeters): org.maplibre.android.geometry.LatLng;
					public setPrefetchZoomDelta(param0: number): void;
					public getMinZoom(): number;
					public getPitch(): number;
					public addLayerBelow(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
					public clearActionJournalLog(): void;
					public setLatLng(param0: org.maplibre.android.geometry.LatLng, param1: number): void;
					public addMarker(param0: org.maplibre.android.annotations.Marker): number;
					public setMinZoom(param0: number): void;
					public setTileLodZoomShift(param0: number): void;
					public setStyleJson(param0: string): void;
					public getCameraForGeometry(param0: org.maplibre.geojson.Geometry, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
					public addAnnotationIcon(param0: string, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
					public flyTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): void;
					public setBearing(param0: number, param1: number, param2: number, param3: number): void;
					public getSources(): java.util.List<org.maplibre.android.style.sources.Source>;
					public getDensityDependantRectangle(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
					public getMetersPerPixelAtLatitude(param0: number): number;
					public setMaxZoom(param0: number): void;
					public getSource(param0: string): org.maplibre.android.style.sources.Source;
					public resizeView(param0: number, param1: number): void;
					public getZoom(): number;
					public pixelForLatLng(param0: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
					public getTileLodMinRadius(): number;
					public addLayerAt(param0: org.maplibre.android.style.layers.Layer, param1: number): void;
					public getLayer(param0: string): org.maplibre.android.style.layers.Layer;
					public getTileLodScale(): number;
					public setVisibleCoordinateBounds(param0: androidNative.Array<org.maplibre.android.geometry.LatLng>, param1: globalAndroid.graphics.RectF, param2: number, param3: number): void;
					public getCameraForLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
					public rotateBy(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public getStyleJson(): string;
					public addLayer(param0: org.maplibre.android.style.layers.Layer): void;
					public getNativePtr(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class NativeMapOptions {
					public static class: java.lang.Class<org.maplibre.android.maps.NativeMapOptions>;
					public actionJournalEnabled(): boolean;
					public pixelRatio(): number;
					public actionJournalPath(): string;
					public constructor(pixelRatio: number, crossSourceCollisions: boolean);
					public actionJournalLogFileCount(): number;
					public actionJournalLogFileSize(): number;
					public crossSourceCollisions(): boolean;
					public actionJournalRenderingReportInterval(): number;
					public constructor(options: org.maplibre.android.maps.MapLibreMapOptions);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class NativeMapView extends org.maplibre.android.maps.NativeMap {
					public static class: java.lang.Class<org.maplibre.android.maps.NativeMapView>;
					public addLayerBelow(layer: org.maplibre.android.style.layers.Layer, below: string): void;
					public addPolyline(param0: org.maplibre.android.annotations.Polyline): number;
					public removeLayer(param0: org.maplibre.android.style.layers.Layer): boolean;
					public setMaxPitch(pitch: number): void;
					public enableRenderingStatsView(value: boolean): void;
					public setOnFpsChangedListener(param0: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
					public getPixelRatio(): number;
					public addSnapshotCallback(callback: org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback): void;
					public addAnnotationIcon(symbol: string, width: number, height: number, scale: number, pixels: androidNative.Array<number>): void;
					public addSnapshotCallback(param0: org.maplibre.android.maps.MapLibreMap.SnapshotReadyCallback): void;
					public setVisibleCoordinateBounds(coordinates: androidNative.Array<org.maplibre.android.geometry.LatLng>, padding: globalAndroid.graphics.RectF, direction: number, duration: number): void;
					public updatePolygon(param0: org.maplibre.android.annotations.Polygon): void;
					public latLngForPixel(pixel: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
					public queryRenderedFeatures(param0: globalAndroid.graphics.RectF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public setPrefetchTiles(enable: boolean): void;
					public addMarker(marker: org.maplibre.android.annotations.Marker): number;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.PointF, layerIds: androidNative.Array<string>, filter: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public latLngsForPixels(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public setPitch(pitch: number, duration: number): void;
					public getSource(sourceId: string): org.maplibre.android.style.sources.Source;
					public setMinPitch(pitch: number): void;
					public jumpTo(center: org.maplibre.android.geometry.LatLng, zoom: number, pitch: number, angle: number, padding: androidNative.Array<number>): void;
					public isRenderingStatsViewEnabled(): boolean;
					public setDebug(debug: boolean): void;
					public getLatLng(): org.maplibre.android.geometry.LatLng;
					public setDebug(param0: boolean): void;
					public getTopOffsetPixelsForAnnotationSymbol(param0: string): number;
					public setMinZoom(zoom: number): void;
					public removeLayer(layerId: string): boolean;
					public removeLayerAt(index: number): boolean;
					public addMarkers(markers: java.util.List<org.maplibre.android.annotations.Marker>): androidNative.Array<number>;
					public setLatLng(latLng: org.maplibre.android.geometry.LatLng, duration: number): void;
					public getPrefetchZoomDelta(): number;
					public addMarkers(param0: java.util.List<org.maplibre.android.annotations.Marker>): androidNative.Array<number>;
					public getImage(param0: string): globalAndroid.graphics.Bitmap;
					public removeAnnotationIcon(param0: string): void;
					public getTileCacheEnabled(): boolean;
					public setTileCacheEnabled(param0: boolean): void;
					public removeLayerAt(param0: number): boolean;
					public setContentPadding(param0: androidNative.Array<number>): void;
					public getTileLodPitchThreshold(): number;
					public getCameraForGeometry(geometry: org.maplibre.geojson.Geometry, padding: androidNative.Array<number>, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public resizeView(width: number, height: number): void;
					public getMinPitch(): number;
					public pixelsForLatLngs(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public addSource(param0: org.maplibre.android.style.sources.Source): void;
					public flyTo(center: org.maplibre.android.geometry.LatLng, zoom: number, angle: number, pitch: number, padding: androidNative.Array<number>, duration: number): void;
					public updatePolygon(polygon: org.maplibre.android.annotations.Polygon): void;
					public latLngsForPixels(input: androidNative.Array<number>, output: androidNative.Array<number>): void;
					public setTileLodMinRadius(param0: number): void;
					public addImages(param0: androidNative.Array<org.maplibre.android.maps.Image>): void;
					public getDebug(): boolean;
					public queryShapeAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public addPolygons(polygons: java.util.List<org.maplibre.android.annotations.Polygon>): androidNative.Array<number>;
					public addLayer(layer: org.maplibre.android.style.layers.Layer): void;
					public removeAnnotation(param0: number): void;
					public setReachability(param0: boolean): void;
					public triggerRepaint(): void;
					public getLight(): org.maplibre.android.style.light.Light;
					public moveBy(param0: number, param1: number, param2: number): void;
					public setZoom(param0: number, param1: globalAndroid.graphics.PointF, param2: number): void;
					public getTopOffsetPixelsForAnnotationSymbol(symbolName: string): number;
					public removeLayer(param0: string): boolean;
					public getVisibleCoordinateBounds(param0: androidNative.Array<number>): void;
					public easeTo(center: org.maplibre.android.geometry.LatLng, zoom: number, angle: number, pitch: number, padding: androidNative.Array<number>, duration: number, easingInterpolator: boolean): void;
					public easeTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number, param6: boolean): void;
					public getLayer(layerId: string): org.maplibre.android.style.layers.Layer;
					public addSource(source: org.maplibre.android.style.sources.Source): void;
					public setTileLodPitchThreshold(threshold: number): void;
					public setPrefetchZoomDelta(param0: number): void;
					public getMinZoom(): number;
					public getPitch(): number;
					public pixelForLatLng(latLng: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
					public clearActionJournalLog(): void;
					public addPolygon(polygon: org.maplibre.android.annotations.Polygon): number;
					public removeAnnotation(id: number): void;
					public setGestureInProgress(inProgress: boolean): void;
					public setTileLodZoomShift(param0: number): void;
					public setStyleJson(param0: string): void;
					public setTileLodMinRadius(radius: number): void;
					public getCameraForGeometry(param0: org.maplibre.geojson.Geometry, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
					public flyTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): void;
					public latLngForProjectedMeters(projectedMeters: org.maplibre.android.geometry.ProjectedMeters): org.maplibre.android.geometry.LatLng;
					public getSources(): java.util.List<org.maplibre.android.style.sources.Source>;
					public getDensityDependantRectangle(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
					public setMaxZoom(param0: number): void;
					public resizeView(param0: number, param1: number): void;
					public setZoom(zoom: number, focalPoint: globalAndroid.graphics.PointF, duration: number): void;
					public addLayerAt(param0: org.maplibre.android.style.layers.Layer, param1: number): void;
					public setVisibleCoordinateBounds(param0: androidNative.Array<org.maplibre.android.geometry.LatLng>, param1: globalAndroid.graphics.RectF, param2: number, param3: number): void;
					public getCameraForLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds, param1: androidNative.Array<number>, param2: number, param3: number): org.maplibre.android.camera.CameraPosition;
					public queryShapeAnnotations(rectF: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public getStyleJson(): string;
					public rotateBy(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public addLayer(param0: org.maplibre.android.style.layers.Layer): void;
					public getDensityDependantRectangle(rectangle: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
					public setOnFpsChangedListener(listener: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
					public moveBy(this_: number, dx: number, dy: number): void;
					public setTransitionOptions(transitionOptions: org.maplibre.android.style.layers.TransitionOptions): void;
					public setPrefetchTiles(param0: boolean): void;
					public setApiBaseUrl(baseUrl: string): void;
					public getCameraPosition(): org.maplibre.android.camera.CameraPosition;
					public updatePolyline(polyline: org.maplibre.android.annotations.Polyline): void;
					public addImages(images: androidNative.Array<org.maplibre.android.maps.Image>): void;
					public removeLayer(layer: org.maplibre.android.style.layers.Layer): boolean;
					public setPitch(param0: number, param1: number): void;
					public updatePolyline(param0: org.maplibre.android.annotations.Polyline): void;
					public getVisibleCoordinateBounds(output: androidNative.Array<number>): void;
					public resetPosition(): void;
					public removeImage(name: string): void;
					public setTileLodScale(param0: number): void;
					public constructor(context: globalAndroid.content.Context, viewCallback: org.maplibre.android.maps.NativeMapView.ViewCallback, stateCallback: org.maplibre.android.maps.NativeMapView.StateCallback, mapRenderer: org.maplibre.android.maps.renderer.MapRenderer);
					public getMaxPitch(): number;
					public removeSource(param0: org.maplibre.android.style.sources.Source): boolean;
					public getActionJournalLog(): androidNative.Array<string>;
					public removeAnnotations(ids: androidNative.Array<number>): void;
					public updateMarker(marker: org.maplibre.android.annotations.Marker): void;
					public projectedMetersForLatLng(latLng: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.ProjectedMeters;
					public setTileCacheEnabled(enabled: boolean): void;
					public constructor(context: globalAndroid.content.Context, options: org.maplibre.android.maps.MapLibreMapOptions, viewCallback: org.maplibre.android.maps.NativeMapView.ViewCallback, stateCallback: org.maplibre.android.maps.NativeMapView.StateCallback, mapRenderer: org.maplibre.android.maps.renderer.MapRenderer);
					public jumpTo(param0: org.maplibre.android.geometry.LatLng, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
					public queryPointAnnotations(rect: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public setMaxPitch(param0: number): void;
					public setContentPadding(padding: androidNative.Array<number>): void;
					public addPolylines(param0: java.util.List<org.maplibre.android.annotations.Polyline>): androidNative.Array<number>;
					public cancelTransitions(): void;
					public getLayers(): java.util.List<org.maplibre.android.style.layers.Layer>;
					public setPrefetchZoomDelta(delta: number): void;
					public getPrefetchTiles(): boolean;
					public destroy(): void;
					public latLngForPixel(param0: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
					public removeSource(param0: string): boolean;
					public setApiBaseUrl(param0: string): void;
					public enableRenderingStatsView(param0: boolean): void;
					public getTileLodZoomShift(): number;
					public setTransitionOptions(param0: org.maplibre.android.style.layers.TransitionOptions): void;
					public queryRenderedFeatures(param0: globalAndroid.graphics.PointF, param1: androidNative.Array<string>, param2: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public removeSource(sourceId: string): boolean;
					public getContentPadding(): androidNative.Array<number>;
					public setReachability(status: boolean): void;
					public setLatLngBounds(param0: org.maplibre.android.geometry.LatLngBounds): void;
					public setTileLodPitchThreshold(param0: number): void;
					public getStyleUri(): string;
					public getBearing(): number;
					public resetZoom(): void;
					public rotateBy(sx: number, sy: number, ex: number, ey: number, duration: number): void;
					public setMaxZoom(zoom: number): void;
					public addLayerAbove(layer: org.maplibre.android.style.layers.Layer, above: string): void;
					public pixelsForLatLngs(input: androidNative.Array<number>, output: androidNative.Array<number>): void;
					public addPolylines(polylines: java.util.List<org.maplibre.android.annotations.Polyline>): androidNative.Array<number>;
					public setMinPitch(param0: number): void;
					public updateMarker(param0: org.maplibre.android.annotations.Marker): void;
					public addPolygon(param0: org.maplibre.android.annotations.Polygon): number;
					public isFullyLoaded(): boolean;
					public removeImage(param0: string): void;
					public setSwapBehaviorFlush(flush: boolean): void;
					public setStyleUri(param0: string): void;
					public getMetersPerPixelAtLatitude(lat: number): number;
					public onLowMemory(): void;
					public addPolygons(param0: java.util.List<org.maplibre.android.annotations.Polygon>): androidNative.Array<number>;
					public getMaxZoom(): number;
					public projectedMetersForLatLng(param0: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.ProjectedMeters;
					public setLatLngBounds(latLngBounds: org.maplibre.android.geometry.LatLngBounds): void;
					public setTileLodScale(scale: number): void;
					public getTransitionOptions(): org.maplibre.android.style.layers.TransitionOptions;
					public setBearing(degrees: number, fx: number, fy: number, duration: number): void;
					public setBearing(param0: number, param1: number): void;
					public queryRenderedFeatures(coordinates: globalAndroid.graphics.RectF, layerIds: androidNative.Array<string>, filter: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
					public setGestureInProgress(param0: boolean): void;
					public setSwapBehaviorFlush(param0: boolean): void;
					public setBearing(degrees: number, duration: number): void;
					public getActionJournalLogFiles(): androidNative.Array<string>;
					public isDestroyed(): boolean;
					public removeAnnotations(param0: androidNative.Array<number>): void;
					public resetNorth(): void;
					public getCameraForLatLngBounds(bounds: org.maplibre.android.geometry.LatLngBounds, padding: androidNative.Array<number>, bearing: number, tilt: number): org.maplibre.android.camera.CameraPosition;
					public addLayerAbove(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
					public addLayerAt(layer: org.maplibre.android.style.layers.Layer, index: number): void;
					public queryPointAnnotations(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
					public onSnapshotReady(err: globalAndroid.graphics.Bitmap): void;
					public latLngForProjectedMeters(param0: org.maplibre.android.geometry.ProjectedMeters): org.maplibre.android.geometry.LatLng;
					public removeSource(source: org.maplibre.android.style.sources.Source): boolean;
					public addLayerBelow(param0: org.maplibre.android.style.layers.Layer, param1: string): void;
					public setLatLng(param0: org.maplibre.android.geometry.LatLng, param1: number): void;
					public addMarker(param0: org.maplibre.android.annotations.Marker): number;
					public setMinZoom(param0: number): void;
					public addAnnotationIcon(param0: string, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
					public setBearing(param0: number, param1: number, param2: number, param3: number): void;
					public setStyleJson(newStyleJson: string): void;
					public getMetersPerPixelAtLatitude(param0: number): number;
					public getImage(name: string): globalAndroid.graphics.Bitmap;
					public getSource(param0: string): org.maplibre.android.style.sources.Source;
					public getZoom(): number;
					public pixelForLatLng(param0: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
					public constructor(context: globalAndroid.content.Context, nativeOptions: org.maplibre.android.maps.NativeMapOptions, viewCallback: org.maplibre.android.maps.NativeMapView.ViewCallback, stateCallback: org.maplibre.android.maps.NativeMapView.StateCallback, mapRenderer: org.maplibre.android.maps.renderer.MapRenderer);
					public getTileLodMinRadius(): number;
					public setTileLodZoomShift(shift: number): void;
					public setStyleUri(url: string): void;
					public getLayer(param0: string): org.maplibre.android.style.layers.Layer;
					public getTileLodScale(): number;
					public addPolyline(polyline: org.maplibre.android.annotations.Polyline): number;
					public removeAnnotationIcon(symbol: string): void;
					public getNativePtr(): number;
				}
				export module NativeMapView {
					export class StateCallback extends org.maplibre.android.maps.NativeMapView.StyleCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.NativeMapView.StateCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.NativeMapView$StateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCameraWillChange(param0: boolean): void;
							onCameraIsChanging(): void;
							onCameraDidChange(param0: boolean): void;
							onDidFinishLoadingMap(): void;
							onDidFailLoadingMap(param0: string): void;
							onWillStartRenderingFrame(): void;
							onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
							onWillStartRenderingMap(): void;
							onDidFinishRenderingMap(param0: boolean): void;
							onDidBecomeIdle(): void;
							onSourceChanged(param0: string): void;
							onStyleImageMissing(param0: string): void;
							onCanRemoveUnusedStyleImage(param0: string): boolean;
							onPreCompileShader(param0: number, param1: number, param2: string): void;
							onPostCompileShader(param0: number, param1: number, param2: string): void;
							onShaderCompileFailed(param0: number, param1: number, param2: string): void;
							onGlyphsLoaded(param0: androidNative.Array<string>, param1: number, param2: number): void;
							onGlyphsError(param0: androidNative.Array<string>, param1: number, param2: number): void;
							onGlyphsRequested(param0: androidNative.Array<string>, param1: number, param2: number): void;
							onTileAction(param0: org.maplibre.android.tile.TileOperation, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
							onSpriteLoaded(param0: string, param1: string): void;
							onSpriteError(param0: string, param1: string): void;
							onSpriteRequested(param0: string, param1: string): void;
							onWillStartLoadingMap(): void;
							onDidFinishLoadingStyle(): void;
						});
						public constructor();
						public onGlyphsRequested(param0: androidNative.Array<string>, param1: number, param2: number): void;
						public onDidBecomeIdle(): void;
						public onDidFinishRenderingFrame(param0: boolean, param1: org.maplibre.android.maps.RenderingStats): void;
						public onShaderCompileFailed(param0: number, param1: number, param2: string): void;
						public onWillStartRenderingMap(): void;
						public onPostCompileShader(param0: number, param1: number, param2: string): void;
						public onTileAction(param0: org.maplibre.android.tile.TileOperation, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
						public onCameraDidChange(param0: boolean): void;
						public onWillStartRenderingFrame(): void;
						public onSpriteRequested(param0: string, param1: string): void;
						public onCameraIsChanging(): void;
						public onGlyphsError(param0: androidNative.Array<string>, param1: number, param2: number): void;
						public onPreCompileShader(param0: number, param1: number, param2: string): void;
						public onSpriteLoaded(param0: string, param1: string): void;
						public onSpriteError(param0: string, param1: string): void;
						public onStyleImageMissing(param0: string): void;
						public onCameraWillChange(param0: boolean): void;
						public onDidFinishLoadingMap(): void;
						public onDidFailLoadingMap(param0: string): void;
						public onGlyphsLoaded(param0: androidNative.Array<string>, param1: number, param2: number): void;
						public onDidFinishRenderingMap(param0: boolean): void;
						public onWillStartLoadingMap(): void;
						public onCanRemoveUnusedStyleImage(param0: string): boolean;
						public onDidFinishLoadingStyle(): void;
						public onSourceChanged(param0: string): void;
					}
					export class StyleCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.NativeMapView.StyleCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.NativeMapView$StyleCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWillStartLoadingMap(): void; onDidFinishLoadingStyle(): void });
						public constructor();
						public onWillStartLoadingMap(): void;
						public onDidFinishLoadingStyle(): void;
					}
					export class ViewCallback {
						public static class: java.lang.Class<org.maplibre.android.maps.NativeMapView.ViewCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.NativeMapView$ViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getViewContent(): globalAndroid.graphics.Bitmap });
						public constructor();
						public getViewContent(): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class OnMapReadyCallback {
					public static class: java.lang.Class<org.maplibre.android.maps.OnMapReadyCallback>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.OnMapReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onMapReady(param0: org.maplibre.android.maps.MapLibreMap): void });
					public constructor();
					public onMapReady(param0: org.maplibre.android.maps.MapLibreMap): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class PolygonContainer extends org.maplibre.android.maps.Polygons {
					public static class: java.lang.Class<org.maplibre.android.maps.PolygonContainer>;
					public addBy(param0: java.util.List<org.maplibre.android.annotations.PolygonOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polygon>;
					public addBy(param0: org.maplibre.android.annotations.PolygonOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polygon;
					public addBy(polygonOptions: org.maplibre.android.annotations.PolygonOptions, maplibreMap: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polygon;
					public update(polygon: org.maplibre.android.annotations.Polygon): void;
					public addBy(polygon: java.util.List<org.maplibre.android.annotations.PolygonOptions>, polygon: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polygon>;
					public update(param0: org.maplibre.android.annotations.Polygon): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Polygon>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Polygons {
					public static class: java.lang.Class<org.maplibre.android.maps.Polygons>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.Polygons interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { addBy(param0: org.maplibre.android.annotations.PolygonOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polygon; addBy(param0: java.util.List<org.maplibre.android.annotations.PolygonOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polygon>; update(param0: org.maplibre.android.annotations.Polygon): void; obtainAll(): java.util.List<org.maplibre.android.annotations.Polygon> });
					public constructor();
					public addBy(param0: java.util.List<org.maplibre.android.annotations.PolygonOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polygon>;
					public addBy(param0: org.maplibre.android.annotations.PolygonOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polygon;
					public update(param0: org.maplibre.android.annotations.Polygon): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Polygon>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class PolylineContainer extends org.maplibre.android.maps.Polylines {
					public static class: java.lang.Class<org.maplibre.android.maps.PolylineContainer>;
					public addBy(param0: java.util.List<org.maplibre.android.annotations.PolylineOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polyline>;
					public update(param0: org.maplibre.android.annotations.Polyline): void;
					public update(polyline: org.maplibre.android.annotations.Polyline): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Polyline>;
					public addBy(param0: org.maplibre.android.annotations.PolylineOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polyline;
					public addBy(polyline: java.util.List<org.maplibre.android.annotations.PolylineOptions>, polylineCreated: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polyline>;
					public addBy(polylineOptions: org.maplibre.android.annotations.PolylineOptions, maplibreMap: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polyline;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Polylines {
					public static class: java.lang.Class<org.maplibre.android.maps.Polylines>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.Polylines interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { addBy(param0: org.maplibre.android.annotations.PolylineOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polyline; addBy(param0: java.util.List<org.maplibre.android.annotations.PolylineOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polyline>; update(param0: org.maplibre.android.annotations.Polyline): void; obtainAll(): java.util.List<org.maplibre.android.annotations.Polyline> });
					public constructor();
					public addBy(param0: java.util.List<org.maplibre.android.annotations.PolylineOptions>, param1: org.maplibre.android.maps.MapLibreMap): java.util.List<org.maplibre.android.annotations.Polyline>;
					public update(param0: org.maplibre.android.annotations.Polyline): void;
					public obtainAll(): java.util.List<org.maplibre.android.annotations.Polyline>;
					public addBy(param0: org.maplibre.android.annotations.PolylineOptions, param1: org.maplibre.android.maps.MapLibreMap): org.maplibre.android.annotations.Polyline;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Projection {
					public static class: java.lang.Class<org.maplibre.android.maps.Projection>;
					public fromScreenLocations(input: androidNative.Array<number>, output: androidNative.Array<number>): void;
					/** @deprecated */
					public invalidateContentPadding(): void;
					public toScreenLocation(location: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
					public getMetersPerPixelAtLatitude(latitude: number): number;
					public fromScreenLocation(point: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
					public getVisibleRegion(): org.maplibre.android.geometry.VisibleRegion;
					public toScreenLocations(input: androidNative.Array<number>, output: androidNative.Array<number>): void;
					public getVisibleRegion(right: boolean): org.maplibre.android.geometry.VisibleRegion;
					public getProjectedMetersForLatLng(latLng: org.maplibre.android.geometry.LatLng): org.maplibre.android.geometry.ProjectedMeters;
					public calculateZoom(minScale: number): number;
					public getLatLngForProjectedMeters(projectedMeters: org.maplibre.android.geometry.ProjectedMeters): org.maplibre.android.geometry.LatLng;
					public getVisibleCoordinateBounds(bounds: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class RenderingStats {
					public static class: java.lang.Class<org.maplibre.android.maps.RenderingStats>;
					public encodingTime: number;
					public renderingTime: number;
					public numFrames: number;
					public numDrawCalls: number;
					public totalDrawCalls: number;
					public numCreatedTextures: number;
					public numActiveTextures: number;
					public numTextureBindings: number;
					public numTextureUpdates: number;
					public textureUpdateBytes: number;
					public totalBuffers: number;
					public totalBufferObjs: number;
					public bufferUpdates: number;
					public bufferObjUpdates: number;
					public bufferUpdateBytes: number;
					public numBuffers: number;
					public numFrameBuffers: number;
					public numIndexBuffers: number;
					public indexUpdateBytes: number;
					public numVertexBuffers: number;
					public vertexUpdateBytes: number;
					public numUniformBuffers: number;
					public numUniformUpdates: number;
					public uniformUpdateBytes: number;
					public memTextures: number;
					public memBuffers: number;
					public memIndexBuffers: number;
					public memVertexBuffers: number;
					public memUniformBuffers: number;
					public stencilClears: number;
					public stencilUpdates: number;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class ShapeAnnotationContainer extends org.maplibre.android.maps.ShapeAnnotations {
					public static class: java.lang.Class<org.maplibre.android.maps.ShapeAnnotationContainer>;
					public obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Annotation>;
					public obtainAllIn(rectangle: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Annotation>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class ShapeAnnotations {
					public static class: java.lang.Class<org.maplibre.android.maps.ShapeAnnotations>;
					/**
					 * Constructs a new instance of the org.maplibre.android.maps.ShapeAnnotations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Annotation> });
					public constructor();
					public obtainAllIn(param0: globalAndroid.graphics.RectF): java.util.List<org.maplibre.android.annotations.Annotation>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Style {
					public static class: java.lang.Class<org.maplibre.android.maps.Style>;
					public removeSource(source: org.maplibre.android.style.sources.Source): boolean;
					public addImages(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public addImagesAsync(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, sdf: boolean): void;
					public getImage(id: string): globalAndroid.graphics.Bitmap;
					public addLayerBelow(layer: org.maplibre.android.style.layers.Layer, below: string): void;
					public getTransition(): org.maplibre.android.style.layers.TransitionOptions;
					public getJson(): string;
					public addImage(name: string, drawable: globalAndroid.graphics.drawable.Drawable, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public getLayers(): java.util.List<org.maplibre.android.style.layers.Layer>;
					/** @deprecated */
					public getUrl(): string;
					public getUri(): string;
					public removeLayer(layerId: string): boolean;
					public removeLayerAt(index: number): boolean;
					public addImageAsync(name: string, image: globalAndroid.graphics.Bitmap, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public getSources(): java.util.List<org.maplibre.android.style.sources.Source>;
					public removeLayer(layer: org.maplibre.android.style.layers.Layer): boolean;
					public addLayer(layer: org.maplibre.android.style.layers.Layer): void;
					public static getPredefinedStyles(): androidNative.Array<org.maplibre.android.util.DefaultStyle>;
					public getSourceAs(sourceId: string): org.maplibre.android.style.sources.Source;
					public addImageAsync(name: string, drawable: globalAndroid.graphics.drawable.Drawable): void;
					public addImages(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>): void;
					public addImagesAsync(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public removeSource(sourceId: string): boolean;
					public getLayer(id: string): org.maplibre.android.style.layers.Layer;
					public addImageAsync(name: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean): void;
					public removeImage(name: string): void;
					public addImages(this_: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, images: boolean, sdf: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: org.maplibre.android.maps.ImageContent): void;
					public static getPredefinedStyle(name: string): string;
					public getSource(id: string): org.maplibre.android.style.sources.Source;
					public addImagesAsync(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>): void;
					public addImage(name: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean): void;
					public getLayerAs(layerId: string): org.maplibre.android.style.layers.Layer;
					public addImage(name: string, image: globalAndroid.graphics.Bitmap): void;
					public getLight(): org.maplibre.android.style.light.Light;
					public addImage(name: string, image: globalAndroid.graphics.Bitmap, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public addImageAsync(name: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public addLayerAbove(layer: org.maplibre.android.style.layers.Layer, above: string): void;
					public addImage(name: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public static toImage(i: org.maplibre.android.maps.Style.Builder.ImageWrapper): org.maplibre.android.maps.Image;
					public addImage(name: string, drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setTransition(transitionOptions: org.maplibre.android.style.layers.TransitionOptions): void;
					public addSource(source: org.maplibre.android.style.sources.Source): void;
					public addLayerAt(layer: org.maplibre.android.style.layers.Layer, index: number): void;
					public addImageAsync(name: string, drawable: globalAndroid.graphics.drawable.Drawable, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
					public addImages(this_: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, images: boolean): void;
					public addImageAsync(name: string, image: globalAndroid.graphics.Bitmap): void;
					public isFullyLoaded(): boolean;
					public addImagesAsync(images: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): void;
				}
				export module Style {
					export class BitmapImageConversionTask extends globalAndroid.os.AsyncTask<org.maplibre.android.maps.Style.Builder.ImageWrapper, java.lang.Void, androidNative.Array<org.maplibre.android.maps.Image>> {
						public static class: java.lang.Class<org.maplibre.android.maps.Style.BitmapImageConversionTask>;
						public onPostExecute(images: androidNative.Array<org.maplibre.android.maps.Image>): void;
						public doInBackground(this_: androidNative.Array<org.maplibre.android.maps.Style.Builder.ImageWrapper>): androidNative.Array<org.maplibre.android.maps.Image>;
					}
					export class Builder {
						public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder>;
						public withSources(sources: androidNative.Array<org.maplibre.android.style.sources.Source>): org.maplibre.android.maps.Style.Builder;
						public withLayerAbove(layer: org.maplibre.android.style.layers.Layer, aboveLayerId: string): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, drawable: globalAndroid.graphics.drawable.Drawable, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, image: globalAndroid.graphics.Bitmap, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): org.maplibre.android.maps.Style.Builder;
						public withBitmapImages(this_: boolean, sdf: androidNative.Array<globalAndroid.util.Pair<string, globalAndroid.graphics.Bitmap>>): org.maplibre.android.maps.Style.Builder;
						/** @deprecated */
						public fromUrl(url: string): org.maplibre.android.maps.Style.Builder;
						public withLayers(this_: androidNative.Array<org.maplibre.android.style.layers.Layer>): org.maplibre.android.maps.Style.Builder;
						public withSource(source: org.maplibre.android.style.sources.Source): org.maplibre.android.maps.Style.Builder;
						public getUri(): string;
						public withDrawableImages(value: boolean, this_: androidNative.Array<globalAndroid.util.Pair<string, globalAndroid.graphics.drawable.Drawable>>): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, image: globalAndroid.graphics.Bitmap): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, drawable: globalAndroid.graphics.drawable.Drawable, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): org.maplibre.android.maps.Style.Builder;
						public withBitmapImages(this_: androidNative.Array<globalAndroid.util.Pair<string, globalAndroid.graphics.Bitmap>>): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, image: globalAndroid.graphics.Bitmap, sdf: boolean): org.maplibre.android.maps.Style.Builder;
						public getJson(): string;
						public constructor();
						public withLayer(layer: org.maplibre.android.style.layers.Layer): org.maplibre.android.maps.Style.Builder;
						public getLayers(): java.util.List<org.maplibre.android.maps.Style.Builder.LayerWrapper>;
						public withLayerAt(layer: org.maplibre.android.style.layers.Layer, index: number): org.maplibre.android.maps.Style.Builder;
						public withDrawableImages(values: androidNative.Array<globalAndroid.util.Pair<string, globalAndroid.graphics.drawable.Drawable>>): org.maplibre.android.maps.Style.Builder;
						public getImages(): java.util.List<org.maplibre.android.maps.Style.Builder.ImageWrapper>;
						public withImage(id: string, image: globalAndroid.graphics.Bitmap, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent): org.maplibre.android.maps.Style.Builder;
						public withLayerBelow(layer: org.maplibre.android.style.layers.Layer, belowLayerId: string): org.maplibre.android.maps.Style.Builder;
						public fromUri(uri: string): org.maplibre.android.maps.Style.Builder;
						public withTransition(transition: org.maplibre.android.style.layers.TransitionOptions): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, drawable: globalAndroid.graphics.drawable.Drawable, sdf: boolean): org.maplibre.android.maps.Style.Builder;
						public withImage(id: string, drawable: globalAndroid.graphics.drawable.Drawable): org.maplibre.android.maps.Style.Builder;
						public fromJson(styleJson: string): org.maplibre.android.maps.Style.Builder;
						public getSources(): java.util.List<org.maplibre.android.style.sources.Source>;
					}
					export module Builder {
						export class ImageWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder.ImageWrapper>;
							public constructor(id: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean);
							public getId(): string;
							public isSdf(): boolean;
							public static convertToImageArray(id: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, i: boolean, bitmapHashMap: java.util.List<org.maplibre.android.maps.ImageStretches>, sdf: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchX: org.maplibre.android.maps.ImageContent): androidNative.Array<org.maplibre.android.maps.Style.Builder.ImageWrapper>;
							public static convertToImageArray(id: java.util.HashMap<string, globalAndroid.graphics.Bitmap>, i: boolean): androidNative.Array<org.maplibre.android.maps.Style.Builder.ImageWrapper>;
							public constructor(id: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean, stretchX: java.util.List<org.maplibre.android.maps.ImageStretches>, stretchY: java.util.List<org.maplibre.android.maps.ImageStretches>, content: org.maplibre.android.maps.ImageContent);
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public getStretchY(): java.util.List<org.maplibre.android.maps.ImageStretches>;
							public getStretchX(): java.util.List<org.maplibre.android.maps.ImageStretches>;
							public getContent(): org.maplibre.android.maps.ImageContent;
						}
						export class LayerAboveWrapper extends org.maplibre.android.maps.Style.Builder.LayerWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder.LayerAboveWrapper>;
							public getAboveLayer(): string;
						}
						export class LayerAtWrapper extends org.maplibre.android.maps.Style.Builder.LayerWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder.LayerAtWrapper>;
							public getIndex(): number;
						}
						export class LayerBelowWrapper extends org.maplibre.android.maps.Style.Builder.LayerWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder.LayerBelowWrapper>;
							public getBelowLayer(): string;
						}
						export class LayerWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.Style.Builder.LayerWrapper>;
							public getLayer(): org.maplibre.android.style.layers.Layer;
						}
					}
					export class OnStyleLoaded {
						public static class: java.lang.Class<org.maplibre.android.maps.Style.OnStyleLoaded>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.Style$OnStyleLoaded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStyleLoaded(param0: org.maplibre.android.maps.Style): void });
						public constructor();
						public onStyleLoaded(param0: org.maplibre.android.maps.Style): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class SupportMapFragment implements org.maplibre.android.maps.OnMapReadyCallback {
					public static class: java.lang.Class<org.maplibre.android.maps.SupportMapFragment>;
					public onInflate(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, savedInstanceState: globalAndroid.os.Bundle): void;
					public static newInstance(maplibreMapOptions: org.maplibre.android.maps.MapLibreMapOptions): org.maplibre.android.maps.SupportMapFragment;
					public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
					public static newInstance(): org.maplibre.android.maps.SupportMapFragment;
					public onDestroyView(): void;
					public onDestroy(): void;
					public onMapReady(this_: org.maplibre.android.maps.MapLibreMap): void;
					public onResume(): void;
					public onLowMemory(): void;
					public onStart(): void;
					public onMapReady(param0: org.maplibre.android.maps.MapLibreMap): void;
					public constructor();
					public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onPause(): void;
					public onStop(): void;
					public onAttach(context: globalAndroid.content.Context): void;
					public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
					public getMapAsync(onMapReadyCallback: org.maplibre.android.maps.OnMapReadyCallback): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class Transform extends org.maplibre.android.maps.MapView.OnCameraDidChangeListener {
					public static class: java.lang.Class<org.maplibre.android.maps.Transform>;
					public animateCamera(maplibreMap: org.maplibre.android.maps.MapLibreMap, update: org.maplibre.android.camera.CameraUpdate, durationMs: number, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public moveCamera(maplibreMap: org.maplibre.android.maps.MapLibreMap, update: org.maplibre.android.camera.CameraUpdate, callback: org.maplibre.android.maps.MapLibreMap.CancelableCallback): void;
					public onCameraDidChange(param0: boolean): void;
					public onCameraDidChange(this_: boolean): void;
					public getCameraPosition(): org.maplibre.android.camera.CameraPosition;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export class UiSettings {
					public static class: java.lang.Class<org.maplibre.android.maps.UiSettings>;
					public setRotateGesturesEnabled(rotateGesturesEnabled: boolean): void;
					public isCompassFadeWhenFacingNorth(): boolean;
					public setLogoEnabled(enabled: boolean): void;
					public getLogoMarginLeft(): number;
					public setZoomGesturesEnabled(zoomGesturesEnabled: boolean): void;
					public setAttributionGravity(gravity: number): void;
					public setDoubleTapGesturesEnabled(doubleTapGesturesEnabled: boolean): void;
					public getCompassImage(): globalAndroid.graphics.drawable.Drawable;
					public setDisableRotateWhenScaling(disableRotateWhenScaling: boolean): void;
					public getAttributionDialogManager(): org.maplibre.android.maps.AttributionDialogManager;
					public getAttributionMarginTop(): number;
					public isDoubleTapGesturesEnabled(): boolean;
					public isQuickZoomGesturesEnabled(): boolean;
					public isIncreaseScaleThresholdWhenRotating(): boolean;
					public setLogoGravity(gravity: number): void;
					public getAttributionMarginBottom(): number;
					public isDeselectMarkersOnTap(): boolean;
					public getLogoMarginRight(): number;
					public setTiltGesturesEnabled(tiltGesturesEnabled: boolean): void;
					public getHeight(): number;
					public getCompassGravity(): number;
					public setLogoMargins(left: number, top: number, right: number, bottom: number): void;
					public getFlingThreshold(): number;
					public getFlingAnimationBaseTime(): number;
					public getAttributionMarginLeft(): number;
					public setCompassImage(compass: globalAndroid.graphics.drawable.Drawable): void;
					public getFocalPoint(): globalAndroid.graphics.PointF;
					public getCompassMarginBottom(): number;
					public invalidate(): void;
					public setFlingThreshold(t: number): void;
					public isCompassEnabled(): boolean;
					public isZoomGesturesEnabled(): boolean;
					public setAllGesturesEnabled(enabled: boolean): void;
					public getAttributionGravity(): number;
					public setQuickZoomGesturesEnabled(quickZoomGesturesEnabled: boolean): void;
					public setAllVelocityAnimationsEnabled(allVelocityAnimationsEnabled: boolean): void;
					public getLogoMarginTop(): number;
					public setAttributionEnabled(enabled: boolean): void;
					public getLogoGravity(): number;
					public getLogoMarginBottom(): number;
					public isFlingVelocityAnimationEnabled(): boolean;
					public getCompassMarginLeft(): number;
					public setCompassEnabled(compassEnabled: boolean): void;
					public isScrollGesturesEnabled(): boolean;
					public isRotateGesturesEnabled(): boolean;
					public setScaleVelocityAnimationEnabled(scaleVelocityAnimationEnabled: boolean): void;
					public setCompassFadeFacingNorth(compassFadeFacingNorth: boolean): void;
					public setFlingAnimationBaseTime(t: number): void;
					public isTiltGesturesEnabled(): boolean;
					public getZoomRate(): number;
					public setZoomRate(zoomRate: number): void;
					public getCompassMarginRight(): number;
					/** @deprecated */
					public isIncreaseRotateThresholdWhenScaling(): boolean;
					public setCompassMargins(left: number, top: number, right: number, bottom: number): void;
					public setIncreaseScaleThresholdWhenRotating(increaseScaleThresholdWhenRotating: boolean): void;
					public setCompassGravity(gravity: number): void;
					public isScaleVelocityAnimationEnabled(): boolean;
					public getWidth(): number;
					public setRotateVelocityAnimationEnabled(rotateVelocityAnimationEnabled: boolean): void;
					public setHorizontalScrollGesturesEnabled(horizontalScrollGesturesEnabled: boolean): void;
					/** @deprecated */
					public setIncreaseRotateThresholdWhenScaling(increaseRotateThresholdWhenScaling: boolean): void;
					public isDisableRotateWhenScaling(): boolean;
					public setAttributionDialogManager(attributionDialogManager: org.maplibre.android.maps.AttributionDialogManager): void;
					public setScrollGesturesEnabled(scrollGesturesEnabled: boolean): void;
					public setFlingVelocityAnimationEnabled(flingVelocityAnimationEnabled: boolean): void;
					public setFocalPoint(focalPoint: globalAndroid.graphics.PointF): void;
					public getCompassMarginTop(): number;
					public setAttributionTintColor(tintColor: number): void;
					public isAttributionEnabled(): boolean;
					public isRotateVelocityAnimationEnabled(): boolean;
					public isLogoEnabled(): boolean;
					public setAttributionMargins(left: number, top: number, right: number, bottom: number): void;
					public setDeselectMarkersOnTap(deselectMarkersOnTap: boolean): void;
					public getAttributionMarginRight(): number;
					public areAllGesturesEnabled(): boolean;
					public isHorizontalScrollGesturesEnabled(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export abstract class MapRenderer extends org.maplibre.android.maps.renderer.MapRendererScheduler {
						public static class: java.lang.Class<org.maplibre.android.maps.renderer.MapRenderer>;
						public nativeReset(): void;
						public onSurfaceChanged(width: number, height: number): void;
						public queueEvent(param0: java.lang.Runnable): void;
						public static create(textureView: org.maplibre.android.maps.MapLibreMapOptions, translucentSurface: globalAndroid.content.Context, renderSurfaceOnTop: java.lang.Runnable): org.maplibre.android.maps.renderer.MapRenderer;
						public onResume(): void;
						public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
						public setMaximumFps(maximumFps: number): void;
						public constructor(context: globalAndroid.content.Context, localIdeographFontFamily: string);
						public setSwapBehaviorFlush(flush: boolean): void;
						public waitForEmpty(): void;
						public onStop(): void;
						public onSurfaceCreated(surface: globalAndroid.view.Surface): void;
						public onPause(): void;
						public finalize(): void;
						public onSurfaceDestroyed(): void;
						public requestRender(): void;
						public onDestroy(): void;
						public setOnFpsChangedListener(listener: org.maplibre.android.maps.MapLibreMap.OnFpsChangedListener): void;
						public onDrawFrame(): void;
						public setRenderingRefreshMode(param0: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
						public getView(): globalAndroid.view.View;
						public onStart(): void;
					}
					export module MapRenderer {
						export class RenderingRefreshMode {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode>;
							public static WHEN_DIRTY: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
							public static CONTINUOUS: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
							public static valueOf(name: string): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
							public static values(): androidNative.Array<org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export class MapRendererFactory {
						public static class: java.lang.Class<org.maplibre.android.maps.renderer.MapRendererFactory>;
						public constructor();
						public static newSurfaceViewMapRenderer(context: globalAndroid.content.Context, localFontFamily: string, renderSurfaceOnTop: boolean, initCallback: java.lang.Runnable): org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer;
						public static newTextureViewMapRenderer(context: globalAndroid.content.Context, textureView: globalAndroid.view.TextureView, localFontFamily: string, translucentSurface: boolean, initCallback: java.lang.Runnable): org.maplibre.android.maps.renderer.textureview.TextureViewMapRenderer;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export class MapRendererRunnable {
						public static class: java.lang.Class<org.maplibre.android.maps.renderer.MapRendererRunnable>;
						public run(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export class MapRendererScheduler {
						public static class: java.lang.Class<org.maplibre.android.maps.renderer.MapRendererScheduler>;
						/**
						 * Constructs a new instance of the org.maplibre.android.maps.renderer.MapRendererScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { requestRender(): void; queueEvent(param0: java.lang.Runnable): void; waitForEmpty(): void });
						public constructor();
						public queueEvent(param0: java.lang.Runnable): void;
						public requestRender(): void;
						public waitForEmpty(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module egl {
						export class EGLConfigChooser {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLConfigChooser>;
							public constructor();
							public constructor(translucentSurface: boolean);
							public chooseConfig(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
						}
						export module EGLConfigChooser {
							export class BufferFormat {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat>;
								public static Format16Bit: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
								public static Format32BitNoAlpha: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
								public static Format32BitAlpha: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
								public static Format24Bit: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
								public static Unknown: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
								public static values(): androidNative.Array<org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat>;
								public static valueOf(name: string): org.maplibre.android.maps.renderer.egl.EGLConfigChooser.BufferFormat;
							}
							export class DepthStencilFormat {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat>;
								public static Format16Depth8Stencil: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
								public static Format24Depth8Stencil: org.maplibre.android.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
								public static values(): androidNative.Array<org.maplibre.android.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat>;
								public static valueOf(name: string): org.maplibre.android.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module egl {
						export class EGLContextFactory {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLContextFactory>;
							public constructor();
							public createContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
							public destroyContext(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, context: javax.microedition.khronos.egl.EGLContext): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module egl {
						export class EGLLogWrapper {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLLogWrapper>;
							public eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;
							public eglGetDisplay(native_display: any): javax.microedition.khronos.egl.EGLDisplay;
							public eglCreateContext(display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig, share_context: javax.microedition.khronos.egl.EGLContext, attrib_list: androidNative.Array<number>): javax.microedition.khronos.egl.EGLContext;
							public eglCreateWindowSurface(display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig, native_window: any, attrib_list: androidNative.Array<number>): javax.microedition.khronos.egl.EGLSurface;
							public eglGetConfigAttrib(display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig, attribute: number, value: androidNative.Array<number>): boolean;
							public eglTerminate(display: javax.microedition.khronos.egl.EGLDisplay): boolean;
							public eglQuerySurface(display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface, attribute: number, value: androidNative.Array<number>): boolean;
							public eglGetCurrentSurface(readdraw: number): javax.microedition.khronos.egl.EGLSurface;
							public eglGetError(): number;
							public static getErrorString(error: number): string;
							public eglSwapBuffers(display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface): boolean;
							public eglCopyBuffers(display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface, native_pixmap: any): boolean;
							public constructor(egl: javax.microedition.khronos.egl.EGL, configFlags: number, log: java.io.Writer);
							public eglCreatePixmapSurface(display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig, native_pixmap: any, attrib_list: androidNative.Array<number>): javax.microedition.khronos.egl.EGLSurface;
							public eglMakeCurrent(display: javax.microedition.khronos.egl.EGLDisplay, draw: javax.microedition.khronos.egl.EGLSurface, read: javax.microedition.khronos.egl.EGLSurface, context: javax.microedition.khronos.egl.EGLContext): boolean;
							public eglGetConfigs(display: javax.microedition.khronos.egl.EGLDisplay, configs: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>, config_size: number, num_config: androidNative.Array<number>): boolean;
							public eglWaitNative(engine: number, bindTarget: any): boolean;
							public eglCreatePbufferSurface(display: javax.microedition.khronos.egl.EGLDisplay, config: javax.microedition.khronos.egl.EGLConfig, attrib_list: androidNative.Array<number>): javax.microedition.khronos.egl.EGLSurface;
							public eglInitialize(display: javax.microedition.khronos.egl.EGLDisplay, major_minor: androidNative.Array<number>): boolean;
							public eglQueryString(display: javax.microedition.khronos.egl.EGLDisplay, name: number): string;
							public eglWaitGL(): boolean;
							public eglDestroyContext(display: javax.microedition.khronos.egl.EGLDisplay, context: javax.microedition.khronos.egl.EGLContext): boolean;
							public eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;
							public eglDestroySurface(display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface): boolean;
							public eglQueryContext(display: javax.microedition.khronos.egl.EGLDisplay, context: javax.microedition.khronos.egl.EGLContext, attribute: number, value: androidNative.Array<number>): boolean;
							public eglChooseConfig(display: javax.microedition.khronos.egl.EGLDisplay, attrib_list: androidNative.Array<number>, configs: androidNative.Array<javax.microedition.khronos.egl.EGLConfig>, config_size: number, num_config: androidNative.Array<number>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module egl {
						export class EGLWindowSurfaceFactory {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.egl.EGLWindowSurfaceFactory>;
							public constructor();
							public createWindowSurface(this_: javax.microedition.khronos.egl.EGL10, egl: javax.microedition.khronos.egl.EGLDisplay, display: javax.microedition.khronos.egl.EGLConfig, config: any): javax.microedition.khronos.egl.EGLSurface;
							public destroySurface(egl: javax.microedition.khronos.egl.EGL10, display: javax.microedition.khronos.egl.EGLDisplay, surface: javax.microedition.khronos.egl.EGLSurface): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module surfaceview {
						export class GLSurfaceViewMapRenderer extends org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.GLSurfaceViewMapRenderer>;
							public waitForEmpty(): void;
							public constructor(context: globalAndroid.content.Context, surfaceView: org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView, localIdeographFontFamily: string);
							public requestRender(): void;
							public queueEvent(param0: java.lang.Runnable): void;
							public constructor(context: globalAndroid.content.Context, surfaceView: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView, localIdeographFontFamily: string);
							public constructor(context: globalAndroid.content.Context, localIdeographFontFamily: string);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module surfaceview {
						export class MapLibreGLSurfaceView extends org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView>;
							public viewWeakReference: java.lang.ref.WeakReference<org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView>;
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
							public setEGLContextFactory(factory: globalAndroid.opengl.GLSurfaceView.EGLContextFactory): void;
							public createRenderThread(): void;
							public setEGLWindowSurfaceFactory(factory: globalAndroid.opengl.GLSurfaceView.EGLWindowSurfaceFactory): void;
							public setRenderer(renderer: org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer): void;
							public setPreserveEGLContextOnPause(preserveOnPause: boolean): void;
							public constructor(context: globalAndroid.content.Context);
							public setEGLConfigChooser(configChooser: globalAndroid.opengl.GLSurfaceView.EGLConfigChooser): void;
							public getPreserveEGLContextOnPause(): boolean;
						}
						export module MapLibreGLSurfaceView {
							export class EglHelper {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView.EglHelper>;
								public finish(): void;
								public swap(): number;
								public start(): void;
							}
							export class GLThread extends org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThread {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView.GLThread>;
								public mSurfaceViewWeakRef: java.lang.ref.WeakReference<org.maplibre.android.maps.renderer.surfaceview.MapLibreGLSurfaceView>;
								public ableToDraw(): boolean;
								public surfaceCreated(): void;
								public guardedRun(): void;
								public readyToDraw(): boolean;
								public requestReleaseEglContextLocked(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module surfaceview {
						export abstract class MapLibreSurfaceView {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView>;
							public static TAG: string = 'MapLibreSurfaceView';
							public renderThreadManager: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThreadManager;
							public renderer: org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer;
							public renderThread: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThread;
							public detachedListener: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.OnSurfaceViewDetachedListener;
							public detached: boolean;
							public setRenderingRefreshMode(mode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
							public waitForEmpty(): void;
							public onDetachedFromWindow(): void;
							/** @deprecated */
							public surfaceRedrawNeeded(holder: globalAndroid.view.SurfaceHolder): void;
							public finalize(): void;
							public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, w: number, h: number): void;
							public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
							public setRenderer(renderer: org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer): void;
							public queueEvent(r: java.lang.Runnable): void;
							public setDetachedListener(detachedListener: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.OnSurfaceViewDetachedListener): void;
							public onResume(): void;
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
							public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
							public requestRender(): void;
							public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, finishDrawing: java.lang.Runnable): void;
							public onPause(): void;
							public createRenderThread(): void;
							public onAttachedToWindow(): void;
							public checkRenderThreadState(): void;
							public constructor(context: globalAndroid.content.Context);
							public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
						}
						export module MapLibreSurfaceView {
							export class OnSurfaceViewDetachedListener {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.OnSurfaceViewDetachedListener>;
								/**
								 * Constructs a new instance of the org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView$OnSurfaceViewDetachedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onSurfaceViewDetached(): void });
								public constructor();
								public onSurfaceViewDetached(): void;
							}
							export abstract class RenderThread {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThread>;
								public shouldExit: boolean;
								public exited: boolean;
								public requestPaused: boolean;
								public paused: boolean;
								public hasSurface: boolean;
								public waitingForSurface: boolean;
								public width: number;
								public height: number;
								public renderMode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
								public wantRenderNotification: boolean;
								public renderComplete: boolean;
								public eventQueue: java.util.ArrayList<java.lang.Runnable>;
								public sizeChanged: boolean;
								public finishDrawingRunnable: java.lang.Runnable;
								public renderThreadManager: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThreadManager;
								public waitForEmpty(): void;
								public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
								public surfaceCreated(): void;
								public onWindowResize(this_: number, w: number): void;
								public onResume(): void;
								public readyToDraw(): boolean;
								public queueEvent(r: java.lang.Runnable): void;
								public requestRenderAndNotify(finishDrawing: java.lang.Runnable): void;
								public requestExitAndWait(): void;
								public surfaceDestroyed(): void;
								public onPause(): void;
								public requestRender(): void;
								public ableToDraw(): boolean;
								public guardedRun(): void;
								public setRenderingRefreshMode(mode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
								public run(): void;
							}
							export class RenderThreadManager {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView.RenderThreadManager>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module surfaceview {
						export class SurfaceViewMapRenderer extends org.maplibre.android.maps.renderer.MapRenderer {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.surfaceview.SurfaceViewMapRenderer>;
							public surfaceView: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView;
							public waitForEmpty(): void;
							public setRenderingRefreshMode(mode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
							public onSurfaceCreated(surface: globalAndroid.view.Surface): void;
							public onStop(): void;
							public onSurfaceChanged(width: number, height: number): void;
							public onDestroy(): void;
							public constructor(context: globalAndroid.content.Context, surfaceView: org.maplibre.android.maps.renderer.surfaceview.MapLibreSurfaceView, localIdeographFontFamily: string);
							public onResume(): void;
							public onDrawFrame(): void;
							public requestRender(): void;
							public onPause(): void;
							public onStart(): void;
							public onSurfaceDestroyed(): void;
							public getView(): globalAndroid.view.View;
							public queueEvent(param0: java.lang.Runnable): void;
							public queueEvent(runnable: java.lang.Runnable): void;
							public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
							public constructor(context: globalAndroid.content.Context, localIdeographFontFamily: string);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module textureview {
						export class GLTextureViewRenderThread extends org.maplibre.android.maps.renderer.textureview.TextureViewRenderThread {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.textureview.GLTextureViewRenderThread>;
							public constructor(textureView: globalAndroid.view.TextureView, mapRenderer: org.maplibre.android.maps.renderer.textureview.TextureViewMapRenderer);
							public run(): void;
						}
						export module GLTextureViewRenderThread {
							export class EGLHolder {
								public static class: java.lang.Class<org.maplibre.android.maps.renderer.textureview.GLTextureViewRenderThread.EGLHolder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module textureview {
						export class TextureViewMapRenderer extends org.maplibre.android.maps.renderer.MapRenderer {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.textureview.TextureViewMapRenderer>;
							public waitForEmpty(): void;
							public setRenderingRefreshMode(mode: org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode): void;
							public onSurfaceCreated(surface: globalAndroid.view.Surface): void;
							public onStop(): void;
							public constructor(context: globalAndroid.content.Context, textureView: globalAndroid.view.TextureView, localIdeographFontFamily: string, translucentSurface: boolean);
							public onSurfaceChanged(width: number, height: number): void;
							public onDestroy(): void;
							public onDrawFrame(): void;
							public requestRender(): void;
							public onSurfaceDestroyed(): void;
							public onStart(): void;
							public getView(): globalAndroid.view.View;
							public queueEvent(param0: java.lang.Runnable): void;
							public queueEvent(runnable: java.lang.Runnable): void;
							public getRenderingRefreshMode(): org.maplibre.android.maps.renderer.MapRenderer.RenderingRefreshMode;
							public constructor(context: globalAndroid.content.Context, localIdeographFontFamily: string);
							public setRenderThread(thread: org.maplibre.android.maps.renderer.textureview.TextureViewRenderThread): void;
							public isTranslucentSurface(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module renderer {
					export module textureview {
						export abstract class TextureViewRenderThread {
							public static class: java.lang.Class<org.maplibre.android.maps.renderer.textureview.TextureViewRenderThread>;
							public static TAG: string = 'Mbgl-TextureViewRenderThread';
							public mapRenderer: org.maplibre.android.maps.renderer.textureview.TextureViewMapRenderer;
							public lock: any;
							public eventQueue: java.util.LinkedList<java.lang.Runnable>;
							public surfaceTexture: globalAndroid.graphics.SurfaceTexture;
							public hasNativeSurface: boolean;
							public width: number;
							public height: number;
							public requestRender: boolean;
							public sizeChanged: boolean;
							public paused: boolean;
							public destroySurface: boolean;
							public shouldExit: boolean;
							public exited: boolean;
							public onSurfaceTextureSizeChanged(surfaceTexture: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
							public onSurfaceTextureDestroyed(this_: globalAndroid.graphics.SurfaceTexture): boolean;
							public onSurfaceTextureUpdated(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
							public onSurfaceTextureAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module maps {
				export module widgets {
					export class CompassView {
						public static class: java.lang.Class<org.maplibre.android.maps.widgets.CompassView>;
						public static TIME_WAIT_IDLE: number = 500;
						public static TIME_MAP_NORTH_ANIMATION: number = 150;
						public update(bearing: number): void;
						public injectCompassAnimationListener(compassAnimationListener: org.maplibre.android.maps.MapLibreMap.OnCompassAnimationListener): void;
						public resetAnimation(): void;
						public isFacingNorth(): boolean;
						public setEnabled(enabled: boolean): void;
						public isHidden(): boolean;
						public run(): void;
						public fadeCompassViewFacingNorth(compassFadeFacingNorth: boolean): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public isAnimating(isAnimating: boolean): void;
						public setCompassImage(compass: globalAndroid.graphics.drawable.Drawable): void;
						public getCompassImage(): globalAndroid.graphics.drawable.Drawable;
						public isFadeCompassViewFacingNorth(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module module {
				export module http {
					export class HttpRequestImpl extends org.maplibre.android.http.HttpRequest {
						public static class: java.lang.Class<org.maplibre.android.module.http.HttpRequestImpl>;
						public constructor();
						public static setOkHttpClient(client: okhttp3.Call.Factory): void;
						public executeRequest(param0: org.maplibre.android.http.HttpResponder, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void;
						public static enablePrintRequestUrlOnFailure(enabled: boolean): void;
						public executeRequest(host: org.maplibre.android.http.HttpResponder, builder: number, request: string, exception: string, this_: string, httpRequest: string, nativePtr: boolean): void;
						public static enableLog(enabled: boolean): void;
						public cancelRequest(): void;
					}
					export module HttpRequestImpl {
						export class OkHttpCallback {
							public static class: java.lang.Class<org.maplibre.android.module.http.HttpRequestImpl.OkHttpCallback>;
							public onFailure(call: okhttp3.Call, e: java.io.IOException): void;
							public onResponse(body: okhttp3.Call, ioException: okhttp3.Response): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module module {
				export module http {
					export class HttpRequestUtil {
						public static class: java.lang.Class<org.maplibre.android.module.http.HttpRequestUtil>;
						public constructor();
						public static setOkHttpClient(client: okhttp3.Call.Factory): void;
						public static setLogEnabled(enabled: boolean): void;
						public static setPrintRequestUrlOnFailure(enabled: boolean): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module module {
				export module loader {
					export class LibraryLoaderProviderImpl extends org.maplibre.android.LibraryLoaderProvider {
						public static class: java.lang.Class<org.maplibre.android.module.loader.LibraryLoaderProviderImpl>;
						public constructor();
						public getDefaultLibraryLoader(): org.maplibre.android.LibraryLoader;
					}
					export module LibraryLoaderProviderImpl {
						export class SystemLibraryLoader extends org.maplibre.android.LibraryLoader {
							public static class: java.lang.Class<org.maplibre.android.module.loader.LibraryLoaderProviderImpl.SystemLibraryLoader>;
							public load(name: string): void;
							public static load(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module net {
				export class ConnectivityListener {
					public static class: java.lang.Class<org.maplibre.android.net.ConnectivityListener>;
					/**
					 * Constructs a new instance of the org.maplibre.android.net.ConnectivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onNetworkStateChanged(param0: boolean): void });
					public constructor();
					public onNetworkStateChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module net {
				export class ConnectivityReceiver {
					public static class: java.lang.Class<org.maplibre.android.net.ConnectivityReceiver>;
					public removeListener(listener: org.maplibre.android.net.ConnectivityListener): void;
					public activate(): void;
					public addListener(listener: org.maplibre.android.net.ConnectivityListener): void;
					public isConnected(): boolean;
					public deactivate(): void;
					public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					public setConnected(this_: java.lang.Boolean): void;
					public static instance(context: globalAndroid.content.Context): org.maplibre.android.net.ConnectivityReceiver;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module net {
				export class NativeConnectivityListener extends org.maplibre.android.net.ConnectivityListener {
					public static class: java.lang.Class<org.maplibre.android.net.NativeConnectivityListener>;
					public finalize(): void;
					public onNetworkStateChanged(connected: boolean): void;
					public nativeOnConnectivityStateChanged(param0: boolean): void;
					public initialize(): void;
					public onNetworkStateChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineGeometryRegionDefinition extends org.maplibre.android.offline.OfflineRegionDefinition {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineGeometryRegionDefinition>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
					public constructor(styleURL: string, geometry: org.maplibre.geojson.Geometry, minZoom: number, maxZoom: number, pixelRatio: number);
					public getMinZoom(): number;
					public getBounds(): org.maplibre.android.geometry.LatLngBounds;
					public describeContents(): number;
					public getIncludeIdeographs(): boolean;
					public getMaxZoom(): number;
					public constructor(styleURL: string, geometry: org.maplibre.geojson.Geometry, minZoom: number, maxZoom: number, pixelRatio: number, includeIdeographs: boolean);
					public getPixelRatio(): number;
					public getGeometry(): org.maplibre.geojson.Geometry;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public getStyleURL(): string;
					public getType(): string;
					public constructor(parcel: globalAndroid.os.Parcel);
				}
				export module OfflineGeometryRegionDefinition {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineGeometryRegionDefinition.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineManager {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager>;
					public invalidateAmbientCache(callback: org.maplibre.android.offline.OfflineManager.FileSourceCallback): void;
					public mergeOfflineRegions(this_: string, path: org.maplibre.android.offline.OfflineManager.MergeOfflineRegionsCallback): void;
					public finalize(): void;
					public runPackDatabaseAutomatically(param0: boolean): void;
					public getOfflineRegion(regionID: number, callback: org.maplibre.android.offline.OfflineManager.GetOfflineRegionCallback): void;
					public clearAmbientCache(callback: org.maplibre.android.offline.OfflineManager.FileSourceCallback): void;
					public setMaximumAmbientCacheSize(size: number, callback: org.maplibre.android.offline.OfflineManager.FileSourceCallback): void;
					public resetDatabase(callback: org.maplibre.android.offline.OfflineManager.FileSourceCallback): void;
					public static getInstance(context: globalAndroid.content.Context): org.maplibre.android.offline.OfflineManager;
					public setOfflineMapboxTileCountLimit(param0: number): void;
					public putResourceWithUrl(param0: string, param1: androidNative.Array<number>, param2: number, param3: number, param4: string, param5: boolean): void;
					public createOfflineRegion(definition: org.maplibre.android.offline.OfflineRegionDefinition, metadata: androidNative.Array<number>, callback: org.maplibre.android.offline.OfflineManager.CreateOfflineRegionCallback): void;
					public packDatabase(callback: org.maplibre.android.offline.OfflineManager.FileSourceCallback): void;
					public listOfflineRegions(callback: org.maplibre.android.offline.OfflineManager.ListOfflineRegionsCallback): void;
				}
				export module OfflineManager {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.Companion>;
						public getInstance(context: globalAndroid.content.Context): org.maplibre.android.offline.OfflineManager;
					}
					export class CreateOfflineRegionCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.CreateOfflineRegionCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineManager$CreateOfflineRegionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCreate(param0: org.maplibre.android.offline.OfflineRegion): void; onError(param0: string): void });
						public constructor();
						public onCreate(param0: org.maplibre.android.offline.OfflineRegion): void;
						public onError(param0: string): void;
					}
					export class FileSourceCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.FileSourceCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineManager$FileSourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(): void; onError(param0: string): void });
						public constructor();
						public onSuccess(): void;
						public onError(param0: string): void;
					}
					export class GetOfflineRegionCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.GetOfflineRegionCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineManager$GetOfflineRegionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onRegion(param0: org.maplibre.android.offline.OfflineRegion): void; onRegionNotFound(): void; onError(param0: string): void });
						public constructor();
						public onRegionNotFound(): void;
						public onRegion(param0: org.maplibre.android.offline.OfflineRegion): void;
						public onError(param0: string): void;
					}
					export class ListOfflineRegionsCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.ListOfflineRegionsCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineManager$ListOfflineRegionsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onList(param0: androidNative.Array<org.maplibre.android.offline.OfflineRegion>): void; onError(param0: string): void });
						public constructor();
						public onList(param0: androidNative.Array<org.maplibre.android.offline.OfflineRegion>): void;
						public onError(param0: string): void;
					}
					export class MergeOfflineRegionsCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineManager.MergeOfflineRegionsCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineManager$MergeOfflineRegionsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMerge(param0: androidNative.Array<org.maplibre.android.offline.OfflineRegion>): void; onError(param0: string): void });
						public constructor();
						public onMerge(param0: androidNative.Array<org.maplibre.android.offline.OfflineRegion>): void;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineRegion {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion>;
					public static STATE_INACTIVE: number = 0;
					public static STATE_ACTIVE: number = 1;
					public isDeliveringInactiveMessages(): boolean;
					public getStatus(callback: org.maplibre.android.offline.OfflineRegion.OfflineRegionStatusCallback): void;
					public getDefinition(): org.maplibre.android.offline.OfflineRegionDefinition;
					public finalize(): void;
					public getId(): number;
					public setDeliverInactiveMessages(deliverInactiveMessages: boolean): void;
					public setDownloadState(state: number): void;
					public invalidate(callback: org.maplibre.android.offline.OfflineRegion.OfflineRegionInvalidateCallback): void;
					public getMetadata(): androidNative.Array<number>;
					public updateMetadata(bytes: androidNative.Array<number>, callback: org.maplibre.android.offline.OfflineRegion.OfflineRegionUpdateMetadataCallback): void;
					public setObserver(observer: org.maplibre.android.offline.OfflineRegion.OfflineRegionObserver): void;
					public delete(callback: org.maplibre.android.offline.OfflineRegion.OfflineRegionDeleteCallback): void;
				}
				export module OfflineRegion {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.Companion>;
					}
					export class DownloadState {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.DownloadState>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$DownloadState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class OfflineRegionDeleteCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.OfflineRegionDeleteCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$OfflineRegionDeleteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDelete(): void; onError(param0: string): void });
						public constructor();
						public onDelete(): void;
						public onError(param0: string): void;
					}
					export class OfflineRegionInvalidateCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.OfflineRegionInvalidateCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$OfflineRegionInvalidateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInvalidate(): void; onError(param0: string): void });
						public constructor();
						public onInvalidate(): void;
						public onError(param0: string): void;
					}
					export class OfflineRegionObserver {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.OfflineRegionObserver>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$OfflineRegionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStatusChanged(param0: org.maplibre.android.offline.OfflineRegionStatus): void; onError(param0: org.maplibre.android.offline.OfflineRegionError): void; mapboxTileCountLimitExceeded(param0: number): void });
						public constructor();
						public mapboxTileCountLimitExceeded(param0: number): void;
						public onError(param0: org.maplibre.android.offline.OfflineRegionError): void;
						public onStatusChanged(param0: org.maplibre.android.offline.OfflineRegionStatus): void;
					}
					export class OfflineRegionStatusCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.OfflineRegionStatusCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$OfflineRegionStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStatus(param0: org.maplibre.android.offline.OfflineRegionStatus): void; onError(param0: string): void });
						public constructor();
						public onStatus(param0: org.maplibre.android.offline.OfflineRegionStatus): void;
						public onError(param0: string): void;
					}
					export class OfflineRegionUpdateMetadataCallback {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegion.OfflineRegionUpdateMetadataCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegion$OfflineRegionUpdateMetadataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onUpdate(param0: androidNative.Array<number>): void; onError(param0: string): void });
						public constructor();
						public onUpdate(param0: androidNative.Array<number>): void;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineRegionDefinition {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegionDefinition>;
					/**
					 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegionDefinition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getBounds(): org.maplibre.android.geometry.LatLngBounds; getStyleURL(): string; getMinZoom(): number; getMaxZoom(): number; getPixelRatio(): number; getIncludeIdeographs(): boolean; getType(): string });
					public constructor();
					public getMinZoom(): number;
					public getPixelRatio(): number;
					public getBounds(): org.maplibre.android.geometry.LatLngBounds;
					public getStyleURL(): string;
					public getIncludeIdeographs(): boolean;
					public getType(): string;
					public getMaxZoom(): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineRegionError {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegionError>;
					public static REASON_SUCCESS: string = 'REASON_SUCCESS';
					public static REASON_NOT_FOUND: string = 'REASON_NOT_FOUND';
					public static REASON_SERVER: string = 'REASON_SERVER';
					public static REASON_CONNECTION: string = 'REASON_CONNECTION';
					public static REASON_OTHER: string = 'REASON_OTHER';
					public getReason(): string;
					public toString(): string;
					public equals(this_: any): boolean;
					public getMessage(): string;
					public hashCode(): number;
				}
				export module OfflineRegionError {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegionError.Companion>;
					}
					export class ErrorReason {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegionError.ErrorReason>;
						/**
						 * Constructs a new instance of the org.maplibre.android.offline.OfflineRegionError$ErrorReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineRegionStatus {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineRegionStatus>;
					public getRequiredResourceCount(): number;
					public getCompletedResourceCount(): number;
					public getCompletedTileSize(): number;
					public isComplete(): boolean;
					public getDownloadState(): number;
					public getCompletedResourceSize(): number;
					public getCompletedTileCount(): number;
					public isRequiredResourceCountPrecise(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module offline {
				export class OfflineTilePyramidRegionDefinition extends org.maplibre.android.offline.OfflineRegionDefinition {
					public static class: java.lang.Class<org.maplibre.android.offline.OfflineTilePyramidRegionDefinition>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
					public getMinZoom(): number;
					public getPixelRatio(): number;
					public getBounds(): org.maplibre.android.geometry.LatLngBounds;
					public constructor(styleURL: string, bounds: org.maplibre.android.geometry.LatLngBounds, minZoom: number, maxZoom: number, pixelRatio: number, includeIdeographs: boolean);
					public constructor(styleURL: string, bounds: org.maplibre.android.geometry.LatLngBounds, minZoom: number, maxZoom: number, pixelRatio: number);
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public getStyleURL(): string;
					public getIncludeIdeographs(): boolean;
					public getType(): string;
					public getMaxZoom(): number;
					public constructor(parcel: globalAndroid.os.Parcel);
				}
				export module OfflineTilePyramidRegionDefinition {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.offline.OfflineTilePyramidRegionDefinition.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module snapshotter {
				export class MapSnaphotUtil {
					public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnaphotUtil>;
					public static INSTANCE: org.maplibre.android.snapshotter.MapSnaphotUtil;
					public calculateInSampleSize(halfWidth: globalAndroid.graphics.BitmapFactory.Options, height: number, width: number): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module snapshotter {
				export class MapSnapshot {
					public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshot>;
					public getAttributions(): androidNative.Array<string>;
					public latLngForPixel(param0: globalAndroid.graphics.PointF): org.maplibre.android.geometry.LatLng;
					public finalize(): void;
					public getNativePtr(): number;
					public isShowLogo(): boolean;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public pixelForLatLng(param0: org.maplibre.android.geometry.LatLng): globalAndroid.graphics.PointF;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module snapshotter {
				export class MapSnapshotter {
					public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter>;
					public setRegion(param0: org.maplibre.android.geometry.LatLngBounds): void;
					public setStyleUrl(param0: string): void;
					public onSnapshotFailed(reason: string): void;
					public reset(): void;
					public addOverlay(canvas: org.maplibre.android.snapshotter.MapSnapshot): void;
					public addImage(name: string, bitmap: globalAndroid.graphics.Bitmap, sdf: boolean): void;
					public nativeCancel(): void;
					public finalize(): void;
					public cancel(): void;
					public onSnapshotReady(snapshot: org.maplibre.android.snapshotter.MapSnapshot): void;
					public constructor(apiBaseUrl: globalAndroid.content.Context, this_: org.maplibre.android.snapshotter.MapSnapshotter.Options);
					public onDidFailLoadingStyle(reason: string): void;
					public setStyleJson(param0: string): void;
					public getSource(sourceId: string): org.maplibre.android.style.sources.Source;
					public setObserver(observer: org.maplibre.android.snapshotter.MapSnapshotter.Observer): void;
					public onStyleImageMissing(imageName: string): void;
					public start(this_: org.maplibre.android.snapshotter.MapSnapshotter.SnapshotReadyCallback, callback: org.maplibre.android.snapshotter.MapSnapshotter.ErrorHandler): void;
					public onDidFinishLoadingStyle(): void;
					public nativeStart(): void;
					public getLayer(layerId: string): org.maplibre.android.style.layers.Layer;
					public setCameraPosition(param0: org.maplibre.android.camera.CameraPosition): void;
					public start(callback: org.maplibre.android.snapshotter.MapSnapshotter.SnapshotReadyCallback): void;
					public setSize(param0: number, param1: number): void;
					public nativeInitialize(param0: org.maplibre.android.snapshotter.MapSnapshotter, param1: org.maplibre.android.storage.FileSource, param2: number, param3: number, param4: number, param5: string, param6: string, param7: org.maplibre.android.geometry.LatLngBounds, param8: org.maplibre.android.camera.CameraPosition, param9: boolean, param10: string): void;
				}
				export module MapSnapshotter {
					export class Companion {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.Companion>;
					}
					export class ErrorHandler {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.ErrorHandler>;
						/**
						 * Constructs a new instance of the org.maplibre.android.snapshotter.MapSnapshotter$ErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onError(param0: string): void });
						public constructor();
						public onError(param0: string): void;
					}
					export class Logo {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.Logo>;
						public getScale(): number;
						public getSmall(): globalAndroid.graphics.Bitmap;
						public constructor(this$0: globalAndroid.graphics.Bitmap, large: globalAndroid.graphics.Bitmap, small: number);
						public getLarge(): globalAndroid.graphics.Bitmap;
					}
					export class Observer {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.Observer>;
						/**
						 * Constructs a new instance of the org.maplibre.android.snapshotter.MapSnapshotter$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDidFinishLoadingStyle(): void; onStyleImageMissing(param0: string): void });
						public constructor();
						public onStyleImageMissing(param0: string): void;
						public onDidFinishLoadingStyle(): void;
					}
					export class Options {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.Options>;
						public setShowLogo(value: boolean): void;
						/** @deprecated */
						public withStyleJson(styleJson: string): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public withRegion(region: org.maplibre.android.geometry.LatLngBounds): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public withApiBaseUri(apiBaseUri: string): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public withLocalIdeographFontFamily(fontFamily: string): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						/** @deprecated */
						public withApiBaseUrl(apiBaseUrl: string): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public constructor(this_: number, width: number);
						public getStyleJson(): string;
						public getStyleUri(): string;
						public getLocalIdeographFontFamily(): string;
						public getBuilder(): org.maplibre.android.maps.Style.Builder;
						public withStyleBuilder(builder: org.maplibre.android.maps.Style.Builder): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public getRegion(): org.maplibre.android.geometry.LatLngBounds;
						public getPixelRatio(): number;
						public getCameraPosition(): org.maplibre.android.camera.CameraPosition;
						public withPixelRatio(pixelRatio: number): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public withLocalIdeographFontFamily(fontFamilies: androidNative.Array<string>): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						/** @deprecated */
						public getStyleUrl(): string;
						public withCameraPosition(cameraPosition: org.maplibre.android.camera.CameraPosition): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public getShowLogo(): boolean;
						/** @deprecated */
						public withStyle(uri: string): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public getHeight(): number;
						public withLogo(showLogo: boolean): org.maplibre.android.snapshotter.MapSnapshotter.Options;
						public getWidth(): number;
						public getApiBaseUri(): string;
					}
					export class SnapshotReadyCallback {
						public static class: java.lang.Class<org.maplibre.android.snapshotter.MapSnapshotter.SnapshotReadyCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.snapshotter.MapSnapshotter$SnapshotReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSnapshotReady(param0: org.maplibre.android.snapshotter.MapSnapshot): void });
						public constructor();
						public onSnapshotReady(param0: org.maplibre.android.snapshotter.MapSnapshot): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module storage {
				export class FileSource {
					public static class: java.lang.Class<org.maplibre.android.storage.FileSource>;
					public activate(): void;
					public isActivated(): boolean;
					public static getResourcesCachePath(context: globalAndroid.content.Context): string;
					public finalize(): void;
					public deactivate(): void;
					public setTileServerOptions(param0: org.maplibre.android.util.TileServerOptions): void;
					/** @deprecated */
					public static setResourcesCachePath(context: globalAndroid.content.Context, path: string, callback: org.maplibre.android.storage.FileSource.ResourcesCachePathChangeCallback): void;
					public getApiKey(): string;
					public static isExternalStorageReadable(): boolean;
					public static getInstance(context: globalAndroid.content.Context): org.maplibre.android.storage.FileSource;
					public getApiBaseUrl(): string;
					public setResourceTransform(param0: org.maplibre.android.storage.FileSource.ResourceTransformCallback): void;
					public setApiBaseUrl(param0: string): void;
					public static getInternalCachePath(context: globalAndroid.content.Context): string;
					public static initializeFileDirsPaths(context: globalAndroid.content.Context): void;
					public static setResourcesCachePath(path: string, callback: org.maplibre.android.storage.FileSource.ResourcesCachePathChangeCallback): void;
					public setApiKey(param0: string): void;
				}
				export module FileSource {
					export class FileDirsPathsTask extends globalAndroid.os.AsyncTask<globalAndroid.content.Context, java.lang.Void, java.lang.Void> {
						public static class: java.lang.Class<org.maplibre.android.storage.FileSource.FileDirsPathsTask>;
						public doInBackground(contexts: androidNative.Array<globalAndroid.content.Context>): java.lang.Void;
					}
					export class ResourceTransformCallback {
						public static class: java.lang.Class<org.maplibre.android.storage.FileSource.ResourceTransformCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.storage.FileSource$ResourceTransformCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onURL(param0: number, param1: string): string });
						public constructor();
						public onURL(param0: number, param1: string): string;
					}
					export class ResourcesCachePathChangeCallback {
						public static class: java.lang.Class<org.maplibre.android.storage.FileSource.ResourcesCachePathChangeCallback>;
						/**
						 * Constructs a new instance of the org.maplibre.android.storage.FileSource$ResourcesCachePathChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: string): void; onError(param0: string): void });
						public constructor();
						public onSuccess(param0: string): void;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module storage {
				export class Resource {
					public static class: java.lang.Class<org.maplibre.android.storage.Resource>;
					public static UNKNOWN: number = 0;
					public static STYLE: number = 1;
					public static SOURCE: number = 2;
					public static TILE: number = 3;
					public static GLYPHS: number = 4;
					public static SPRITE_IMAGE: number = 5;
					public static SPRITE_JSON: number = 6;
					public constructor();
				}
				export module Resource {
					export class Kind {
						public static class: java.lang.Class<org.maplibre.android.storage.Resource.Kind>;
						/**
						 * Constructs a new instance of the org.maplibre.android.storage.Resource$Kind interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module expressions {
					export class Expression {
						public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression>;
						public static literal(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static concat(i: androidNative.Array<string>): org.maplibre.android.style.expressions.Expression;
						public static upcase(string: string): org.maplibre.android.style.expressions.Expression;
						public static toNumber(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static literal(string: string): org.maplibre.android.style.expressions.Expression;
						public static gte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static rgba(red: org.maplibre.android.style.expressions.Expression, green: org.maplibre.android.style.expressions.Expression, blue: org.maplibre.android.style.expressions.Expression, alpha: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static acos(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static floor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static any(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static exponential(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.Interpolator;
						public static isSupportedScript(string: string): org.maplibre.android.style.expressions.Expression;
						public static resolvedLocale(collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static object(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static concat(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static max(numbers: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static abs(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static subtract(first: org.maplibre.android.style.expressions.Expression, second: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static step(input: org.maplibre.android.style.expressions.Expression, defaultOutput: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static get(input: string): org.maplibre.android.style.expressions.Expression;
						public static ln(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static asin(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public equals(o: any): boolean;
						public static step(input: java.lang.Number, defaultOutput: java.lang.Number, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static lte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static id(): org.maplibre.android.style.expressions.Expression;
						public static geometryType(): org.maplibre.android.style.expressions.Expression;
						public static division(first: java.lang.Number, second: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static var(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static length(input: string): org.maplibre.android.style.expressions.Expression;
						public static image(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static sqrt(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static round(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static step(input: java.lang.Number, defaultOutput: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static product(numbers: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static cos(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static collator(caseSensitive: org.maplibre.android.style.expressions.Expression, diacriticSensitive: org.maplibre.android.style.expressions.Expression, locale: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static formatEntry(text: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.FormatEntry;
						public static lineProgress(): org.maplibre.android.style.expressions.Expression;
						public static e(): org.maplibre.android.style.expressions.Expression;
						public static subtract(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public toString(): string;
						public static downcase(input: string): org.maplibre.android.style.expressions.Expression;
						public static match(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static toBool(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static abs(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static subtract(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static round(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static linear(): org.maplibre.android.style.expressions.Expression.Interpolator;
						public static stop(stop: any, value: any): org.maplibre.android.style.expressions.Expression.Stop;
						public static rgb(red: java.lang.Number, green: java.lang.Number, blue: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static log10(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static atan(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static heatmapDensity(): org.maplibre.android.style.expressions.Expression;
						public static min(i: androidNative.Array<java.lang.Number>): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static color(color: number): org.maplibre.android.style.expressions.Expression;
						public static step(input: org.maplibre.android.style.expressions.Expression, defaultOutput: java.lang.Number, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static cos(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static toPadding(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static literal(object: any): org.maplibre.android.style.expressions.Expression;
						public static step(input: org.maplibre.android.style.expressions.Expression, defaultOutput: java.lang.Number, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static distance(geoJson: org.maplibre.geojson.GeoJson): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: boolean): org.maplibre.android.style.expressions.Expression;
						public static at(number: org.maplibre.android.style.expressions.Expression, expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static subtract(first: java.lang.Number, second: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static pow(first: org.maplibre.android.style.expressions.Expression, second: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static format(option: androidNative.Array<org.maplibre.android.style.expressions.Expression.FormatEntry>): org.maplibre.android.style.expressions.Expression;
						public static sum(numbers: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static downcase(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static indexOf(keyword: org.maplibre.android.style.expressions.Expression, input: org.maplibre.android.style.expressions.Expression, fromIndex: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static step(input: java.lang.Number, defaultOutput: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static sum(i: androidNative.Array<java.lang.Number>): org.maplibre.android.style.expressions.Expression;
						public static step(input: java.lang.Number, defaultOutput: java.lang.Number, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static pi(): org.maplibre.android.style.expressions.Expression;
						public static formatEntry(text: string, formatOptions: androidNative.Array<org.maplibre.android.style.expressions.Expression.FormatOption>): org.maplibre.android.style.expressions.Expression.FormatEntry;
						public static accumulated(): org.maplibre.android.style.expressions.Expression;
						public static rgba(red: java.lang.Number, green: java.lang.Number, blue: java.lang.Number, alpha: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static max(i: androidNative.Array<java.lang.Number>): org.maplibre.android.style.expressions.Expression;
						public static at(number: java.lang.Number, expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static indexOf(keyword: org.maplibre.android.style.expressions.Expression, input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static pow(first: java.lang.Number, second: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static lte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static mod(first: java.lang.Number, second: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static acos(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static array(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static literal(bool: boolean): org.maplibre.android.style.expressions.Expression;
						public static in(needle: java.lang.Number, haystack: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static get(key: string, object: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static collator(caseSensitive: org.maplibre.android.style.expressions.Expression, diacriticSensitive: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static ln2(): org.maplibre.android.style.expressions.Expression;
						public static step(input: org.maplibre.android.style.expressions.Expression, defaultOutput: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static min(numbers: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static numberFormat(option: org.maplibre.android.style.expressions.Expression, number: androidNative.Array<org.maplibre.android.style.expressions.Expression.NumberFormatOption>): org.maplibre.android.style.expressions.Expression;
						public static interpolate(interpolation: org.maplibre.android.style.expressions.Expression.Interpolator, number: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static typeOf(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static in(needle: org.maplibre.android.style.expressions.Expression, haystack: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static has(key: string, object: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static switchCase(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static gte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static not(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static log2(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static toColor(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static properties(): org.maplibre.android.style.expressions.Expression;
						public static formatEntry(text: string): org.maplibre.android.style.expressions.Expression.FormatEntry;
						public static gte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static get(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static slice(input: org.maplibre.android.style.expressions.Expression, fromIndex: org.maplibre.android.style.expressions.Expression, toIndex: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static var(variableName: string): org.maplibre.android.style.expressions.Expression;
						public static upcase(string: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static ceil(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static cubicBezier(x1: java.lang.Number, y1: java.lang.Number, x2: java.lang.Number, y2: java.lang.Number): org.maplibre.android.style.expressions.Expression.Interpolator;
						public static has(key: string): org.maplibre.android.style.expressions.Expression;
						public static exponential(base: java.lang.Number): org.maplibre.android.style.expressions.Expression.Interpolator;
						public static has(key: org.maplibre.android.style.expressions.Expression, object: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static ceil(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static length(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public toArray(): androidNative.Array<any>;
						public static cubicBezier(x1: org.maplibre.android.style.expressions.Expression, y1: org.maplibre.android.style.expressions.Expression, x2: org.maplibre.android.style.expressions.Expression, y2: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.Interpolator;
						public static numberFormat(number: java.lang.Number, options: androidNative.Array<org.maplibre.android.style.expressions.Expression.NumberFormatOption>): org.maplibre.android.style.expressions.Expression;
						public static gt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static floor(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static tan(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static sqrt(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static mod(first: org.maplibre.android.style.expressions.Expression, second: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static collator(caseSensitive: boolean, diacriticSensitive: boolean): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static ln(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static rgb(red: org.maplibre.android.style.expressions.Expression, green: org.maplibre.android.style.expressions.Expression, blue: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static raw(rawExpression: string): org.maplibre.android.style.expressions.Expression;
						public static not(input: boolean): org.maplibre.android.style.expressions.Expression;
						public static all(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static has(key: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static toString(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static let(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static match(input: org.maplibre.android.style.expressions.Expression, defaultOutput: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static log10(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public hashCode(): number;
						public static toRgba(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static interpolate(interpolation: org.maplibre.android.style.expressions.Expression.Interpolator, number: org.maplibre.android.style.expressions.Expression, stops: androidNative.Array<org.maplibre.android.style.expressions.Expression.Stop>): org.maplibre.android.style.expressions.Expression;
						public static neq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static product(i: androidNative.Array<java.lang.Number>): org.maplibre.android.style.expressions.Expression;
						public constructor(operator: string, arguments_: androidNative.Array<org.maplibre.android.style.expressions.Expression>);
						public static isSupportedScript(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static literal(array: androidNative.Array<any>): org.maplibre.android.style.expressions.Expression;
						public static coalesce(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static sin(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static eq(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: boolean): org.maplibre.android.style.expressions.Expression;
						public static sin(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static lt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string): org.maplibre.android.style.expressions.Expression;
						public static slice(input: org.maplibre.android.style.expressions.Expression, fromIndex: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static tan(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static string(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static in(needle: string, haystack: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static gte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static collator(caseSensitive: boolean, diacriticSensitive: boolean, locale: java.util.Locale): org.maplibre.android.style.expressions.Expression;
						public static get(key: org.maplibre.android.style.expressions.Expression, object: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static within(polygon: org.maplibre.geojson.Polygon): org.maplibre.android.style.expressions.Expression;
						public static division(first: org.maplibre.android.style.expressions.Expression, second: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static zoom(): org.maplibre.android.style.expressions.Expression;
						public static log2(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static asin(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static atan(number: java.lang.Number): org.maplibre.android.style.expressions.Expression;
						public static formatEntry(text: org.maplibre.android.style.expressions.Expression, formatOptions: androidNative.Array<org.maplibre.android.style.expressions.Expression.FormatOption>): org.maplibre.android.style.expressions.Expression.FormatEntry;
						public static bool(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
						public static lt(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: org.maplibre.android.style.expressions.Expression, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static lte(compareOne: org.maplibre.android.style.expressions.Expression, compareTwo: string, collator: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
						public static number(input: androidNative.Array<org.maplibre.android.style.expressions.Expression>): org.maplibre.android.style.expressions.Expression;
					}
					export module Expression {
						export class Array {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.Array>;
							public constructor();
						}
						export class Converter {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.Converter>;
							public constructor();
							public static convert(key: com.google.gson.JsonElement): org.maplibre.android.style.expressions.Expression;
							public static convert(rawExpression: string): org.maplibre.android.style.expressions.Expression;
							public static convert(element: com.google.gson.JsonArray): org.maplibre.android.style.expressions.Expression;
						}
						export class ExpressionLiteral extends org.maplibre.android.style.expressions.Expression implements org.maplibre.android.style.expressions.Expression.ValueExpression {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.ExpressionLiteral>;
							public literal: any;
							public constructor(operator: string, arguments_: androidNative.Array<org.maplibre.android.style.expressions.Expression>);
							public static toString(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
							public hashCode(): number;
							public toArray(): androidNative.Array<any>;
							public toString(): string;
							public equals(o: any): boolean;
							public constructor(object: any);
							public toValue(): any;
						}
						export class ExpressionLiteralArray extends org.maplibre.android.style.expressions.Expression.ExpressionLiteral {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.ExpressionLiteralArray>;
							public static toString(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
							public toString(): string;
							public equals(o: any): boolean;
							public toValue(): any;
						}
						export class ExpressionMap extends org.maplibre.android.style.expressions.Expression implements org.maplibre.android.style.expressions.Expression.ValueExpression {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.ExpressionMap>;
							public static toString(input: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression;
							public hashCode(): number;
							public toString(): string;
							public equals(o: any): boolean;
							public toValue(): any;
						}
						export class FormatEntry {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.FormatEntry>;
						}
						export class FormatOption extends org.maplibre.android.style.expressions.Expression.Option {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.FormatOption>;
							public static formatTextColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.FormatOption;
							public static formatFontScale(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.FormatOption;
							public static formatTextColor(color: number): org.maplibre.android.style.expressions.Expression.FormatOption;
							public static formatTextFont(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.FormatOption;
							public static formatTextFont(fontStack: androidNative.Array<string>): org.maplibre.android.style.expressions.Expression.FormatOption;
							public static formatFontScale(scale: number): org.maplibre.android.style.expressions.Expression.FormatOption;
						}
						export class Interpolator extends org.maplibre.android.style.expressions.Expression {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.Interpolator>;
						}
						export class NumberFormatOption extends org.maplibre.android.style.expressions.Expression.Option {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.NumberFormatOption>;
							public static minFractionDigits(number: number): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static maxFractionDigits(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static locale(string: string): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static currency(string: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static currency(string: string): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static locale(string: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static minFractionDigits(number: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
							public static maxFractionDigits(number: number): org.maplibre.android.style.expressions.Expression.NumberFormatOption;
						}
						export class Option {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.Option>;
						}
						export class Stop {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.Stop>;
						}
						export class ValueExpression {
							public static class: java.lang.Class<org.maplibre.android.style.expressions.Expression.ValueExpression>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.expressions.Expression$ValueExpression interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { toValue(): any });
							public constructor();
							public toValue(): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class BackgroundLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.BackgroundLayer>;
						public getBackgroundColorAsInt(): number;
						public getBackgroundOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setBackgroundOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public constructor();
						public getBackgroundColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setBackgroundColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setBackgroundPatternTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getBackgroundColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public constructor(nativePtr: number);
						public finalize(): void;
						public constructor(layerId: string);
						public getBackgroundPattern(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getBackgroundOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.BackgroundLayer;
						public initialize(param0: string): void;
						public getBackgroundPatternTransition(): org.maplibre.android.style.layers.TransitionOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class CannotAddLayerException {
						public static class: java.lang.Class<org.maplibre.android.style.layers.CannotAddLayerException>;
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class CircleLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.CircleLayer>;
						public constructor(layerId: string, sourceId: string);
						public getSourceLayer(): string;
						public setCircleBlurTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.CircleLayer;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public getCircleTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getCircleColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public initialize(param0: string, param1: string): void;
						public setCircleTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public constructor(nativePtr: number);
						public finalize(): void;
						public getCircleStrokeWidthTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getCircleRadiusTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.CircleLayer;
						public getCircleBlurTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setCircleStrokeColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleStrokeOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getCirclePitchAlignment(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getCirclePitchScale(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setCircleStrokeOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setCircleRadiusTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleBlur(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getCircleSortKey(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getCircleStrokeColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getCircleColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getCircleOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public constructor();
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.CircleLayer;
						public getCircleRadius(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setCircleOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleStrokeOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setCircleColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleStrokeColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getCircleColorAsInt(): number;
						public getSourceId(): string;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public setSourceLayer(sourceLayer: string): void;
						public getCircleStrokeColorAsInt(): number;
						public getCircleStrokeWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setCircleStrokeWidthTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getCircleTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class CustomLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.CustomLayer>;
						public initialize(param0: string, param1: number): void;
						public constructor();
						public constructor(id: string, host: number);
						/** @deprecated */
						public update(): void;
						public constructor(nativePtr: number);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class FillExtrusionLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.FillExtrusionLayer>;
						public constructor(layerId: string, sourceId: string);
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.FillExtrusionLayer;
						public getSourceLayer(): string;
						public getFillExtrusionTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public initialize(param0: string, param1: string): void;
						public getFillExtrusionTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public constructor(nativePtr: number);
						public finalize(): void;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.FillExtrusionLayer;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.FillExtrusionLayer;
						public getFillExtrusionPattern(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getFillExtrusionPatternTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getFillExtrusionHeight(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setFillExtrusionPatternTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillExtrusionHeightTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setFillExtrusionTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillExtrusionVerticalGradient(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public constructor();
						public setFillExtrusionBaseTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillExtrusionOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getFillExtrusionTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getFillExtrusionBaseTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getSourceId(): string;
						public getFillExtrusionColorAsInt(): number;
						public getFillExtrusionBase(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public setFillExtrusionColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setFillExtrusionHeightTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillExtrusionColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setSourceLayer(sourceLayer: string): void;
						public getFillExtrusionOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getFillExtrusionColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setFillExtrusionOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class FillLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.FillLayer>;
						public constructor(layerId: string, sourceId: string);
						public getSourceLayer(): string;
						public getFillColorAsInt(): number;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public setFillOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public initialize(param0: string, param1: string): void;
						public getFillPatternTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setFillTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public constructor(nativePtr: number);
						public finalize(): void;
						public getFillOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getFillColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getFillOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setFillColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getFillOutlineColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public constructor();
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.FillLayer;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.FillLayer;
						public getFillPattern(): org.maplibre.android.style.layers.PropertyValue<string>;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.FillLayer;
						public getFillAntialias(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getSourceId(): string;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public getFillTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getFillTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setFillPatternTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setSourceLayer(sourceLayer: string): void;
						public getFillSortKey(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getFillOutlineColorAsInt(): number;
						public getFillOutlineColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getFillTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public setFillOutlineColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class HeatmapLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.HeatmapLayer>;
						public constructor(layerId: string, sourceId: string);
						public getSourceLayer(): string;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public getHeatmapIntensity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public initialize(param0: string, param1: string): void;
						public constructor(nativePtr: number);
						public getHeatmapRadiusTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public finalize(): void;
						public getHeatmapOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setHeatmapRadiusTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getHeatmapRadius(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public constructor();
						public getHeatmapIntensityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setHeatmapIntensityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getSourceId(): string;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.HeatmapLayer;
						public getHeatmapColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.HeatmapLayer;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.HeatmapLayer;
						public setHeatmapOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getHeatmapWeight(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setSourceLayer(sourceLayer: string): void;
						public getHeatmapOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getHeatmapColorAsInt(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class HillshadeLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.HillshadeLayer>;
						public constructor(layerId: string, sourceId: string);
						public initialize(param0: string, param1: string): void;
						public constructor(nativePtr: number);
						public finalize(): void;
						public getHillshadeShadowColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setHillshadeShadowColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setHillshadeHighlightColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.HillshadeLayer;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.HillshadeLayer;
						public getHillshadeIlluminationDirection(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public constructor();
						public getHillshadeIlluminationAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setHillshadeAccentColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getSourceId(): string;
						public getHillshadeAccentColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getHillshadeShadowColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setHillshadeExaggerationTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setSourceLayer(sourceLayer: string): void;
						public getHillshadeExaggerationTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getHillshadeShadowColorAsInt(): number;
						public getHillshadeHighlightColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getHillshadeExaggeration(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getHillshadeAccentColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getHillshadeHighlightColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getHillshadeAccentColorAsInt(): number;
						public getHillshadeHighlightColorAsInt(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export abstract class Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.Layer>;
						public getMaxZoom(): number;
						public setMinZoom(zoom: number): void;
						public getMinZoom(): number;
						public checkThread(): void;
						public setMaxZoom(zoom: number): void;
						public nativeGetMaxZoom(): number;
						public nativeSetSourceLayer(param0: string): void;
						public nativeGetSourceLayer(): string;
						public constructor(nativePtr: number);
						public finalize(): void;
						public getNativePtr(): number;
						public setDetached(): void;
						public isDetached(): boolean;
						public getId(): string;
						public nativeGetMinZoom(): number;
						public nativeSetMinZoom(param0: number): void;
						public constructor();
						public nativeSetMaxZoom(param0: number): void;
						public setProperties(property: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): void;
						public nativeGetVisibility(): any;
						public nativeSetLayoutProperty(param0: string, param1: any): void;
						public nativeSetPaintProperty(param0: string, param1: any): void;
						public nativeGetSourceId(): string;
						public getVisibility(): org.maplibre.android.style.layers.PropertyValue<string>;
						public nativeSetFilter(param0: androidNative.Array<any>): void;
						public nativeGetFilter(): com.google.gson.JsonElement;
						public nativeGetId(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class LayoutPropertyValue<T> extends org.maplibre.android.style.layers.PropertyValue<any> {
						public static class: java.lang.Class<org.maplibre.android.style.layers.LayoutPropertyValue<any>>;
						public constructor(name: string, value: any);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class LineLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.LineLayer>;
						public constructor(layerId: string, sourceId: string);
						public getLineWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getLineBlurTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getLineOffsetTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getLineGradientAsInt(): number;
						public getLineOffset(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setLineOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getLineWidthTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public constructor(nativePtr: number);
						public finalize(): void;
						public getLineTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setLineWidthTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setLineDasharrayTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getLineColorAsInt(): number;
						public getLineGradient(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getLinePatternTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public constructor();
						public getLineOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setLineGapWidthTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setLinePatternTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setLineTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.LineLayer;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public getLinePattern(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getLineRoundLimit(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getLineBlur(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getSourceLayer(): string;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public initialize(param0: string, param1: string): void;
						public setLineOffsetTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getLineTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public getLineDasharrayTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getLineTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getLineJoin(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getLineOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setLineBlurTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getLineGapWidthTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.LineLayer;
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.LineLayer;
						public getLineGapWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getLineColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getSourceId(): string;
						public setLineColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getLineCap(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getLineColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setSourceLayer(sourceLayer: string): void;
						public getLineMiterLimit(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getLineSortKey(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getLineDasharray(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class PaintPropertyValue<T> extends org.maplibre.android.style.layers.PropertyValue<any> {
						public static class: java.lang.Class<org.maplibre.android.style.layers.PaintPropertyValue<any>>;
						public constructor(name: string, value: any);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class Property {
						public static class: java.lang.Class<org.maplibre.android.style.layers.Property>;
						public static VISIBLE: string = 'visible';
						public static NONE: string = 'none';
						public static LINE_CAP_BUTT: string = 'butt';
						public static LINE_CAP_ROUND: string = 'round';
						public static LINE_CAP_SQUARE: string = 'square';
						public static LINE_JOIN_BEVEL: string = 'bevel';
						public static LINE_JOIN_ROUND: string = 'round';
						public static LINE_JOIN_MITER: string = 'miter';
						public static SYMBOL_PLACEMENT_POINT: string = 'point';
						public static SYMBOL_PLACEMENT_LINE: string = 'line';
						public static SYMBOL_PLACEMENT_LINE_CENTER: string = 'line-center';
						public static SYMBOL_Z_ORDER_AUTO: string = 'auto';
						public static SYMBOL_Z_ORDER_VIEWPORT_Y: string = 'viewport-y';
						public static SYMBOL_Z_ORDER_SOURCE: string = 'source';
						public static ICON_ROTATION_ALIGNMENT_MAP: string = 'map';
						public static ICON_ROTATION_ALIGNMENT_VIEWPORT: string = 'viewport';
						public static ICON_ROTATION_ALIGNMENT_AUTO: string = 'auto';
						public static ICON_TEXT_FIT_NONE: string = 'none';
						public static ICON_TEXT_FIT_WIDTH: string = 'width';
						public static ICON_TEXT_FIT_HEIGHT: string = 'height';
						public static ICON_TEXT_FIT_BOTH: string = 'both';
						public static ICON_ANCHOR_CENTER: string = 'center';
						public static ICON_ANCHOR_LEFT: string = 'left';
						public static ICON_ANCHOR_RIGHT: string = 'right';
						public static ICON_ANCHOR_TOP: string = 'top';
						public static ICON_ANCHOR_BOTTOM: string = 'bottom';
						public static ICON_ANCHOR_TOP_LEFT: string = 'top-left';
						public static ICON_ANCHOR_TOP_RIGHT: string = 'top-right';
						public static ICON_ANCHOR_BOTTOM_LEFT: string = 'bottom-left';
						public static ICON_ANCHOR_BOTTOM_RIGHT: string = 'bottom-right';
						public static ICON_PITCH_ALIGNMENT_MAP: string = 'map';
						public static ICON_PITCH_ALIGNMENT_VIEWPORT: string = 'viewport';
						public static ICON_PITCH_ALIGNMENT_AUTO: string = 'auto';
						public static TEXT_PITCH_ALIGNMENT_MAP: string = 'map';
						public static TEXT_PITCH_ALIGNMENT_VIEWPORT: string = 'viewport';
						public static TEXT_PITCH_ALIGNMENT_AUTO: string = 'auto';
						public static TEXT_ROTATION_ALIGNMENT_MAP: string = 'map';
						public static TEXT_ROTATION_ALIGNMENT_VIEWPORT: string = 'viewport';
						public static TEXT_ROTATION_ALIGNMENT_AUTO: string = 'auto';
						public static TEXT_JUSTIFY_AUTO: string = 'auto';
						public static TEXT_JUSTIFY_LEFT: string = 'left';
						public static TEXT_JUSTIFY_CENTER: string = 'center';
						public static TEXT_JUSTIFY_RIGHT: string = 'right';
						public static TEXT_ANCHOR_CENTER: string = 'center';
						public static TEXT_ANCHOR_LEFT: string = 'left';
						public static TEXT_ANCHOR_RIGHT: string = 'right';
						public static TEXT_ANCHOR_TOP: string = 'top';
						public static TEXT_ANCHOR_BOTTOM: string = 'bottom';
						public static TEXT_ANCHOR_TOP_LEFT: string = 'top-left';
						public static TEXT_ANCHOR_TOP_RIGHT: string = 'top-right';
						public static TEXT_ANCHOR_BOTTOM_LEFT: string = 'bottom-left';
						public static TEXT_ANCHOR_BOTTOM_RIGHT: string = 'bottom-right';
						public static TEXT_TRANSFORM_NONE: string = 'none';
						public static TEXT_TRANSFORM_UPPERCASE: string = 'uppercase';
						public static TEXT_TRANSFORM_LOWERCASE: string = 'lowercase';
						public static FILL_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static FILL_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static LINE_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static LINE_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static ICON_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static ICON_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static TEXT_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static TEXT_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static CIRCLE_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static CIRCLE_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static CIRCLE_PITCH_SCALE_MAP: string = 'map';
						public static CIRCLE_PITCH_SCALE_VIEWPORT: string = 'viewport';
						public static CIRCLE_PITCH_ALIGNMENT_MAP: string = 'map';
						public static CIRCLE_PITCH_ALIGNMENT_VIEWPORT: string = 'viewport';
						public static FILL_EXTRUSION_TRANSLATE_ANCHOR_MAP: string = 'map';
						public static FILL_EXTRUSION_TRANSLATE_ANCHOR_VIEWPORT: string = 'viewport';
						public static RASTER_RESAMPLING_LINEAR: string = 'linear';
						public static RASTER_RESAMPLING_NEAREST: string = 'nearest';
						public static HILLSHADE_ILLUMINATION_ANCHOR_MAP: string = 'map';
						public static HILLSHADE_ILLUMINATION_ANCHOR_VIEWPORT: string = 'viewport';
						public static ANCHOR_MAP: string = 'map';
						public static ANCHOR_VIEWPORT: string = 'viewport';
						public static TEXT_WRITING_MODE_HORIZONTAL: string = 'horizontal';
						public static TEXT_WRITING_MODE_VERTICAL: string = 'vertical';
					}
					export module Property {
						export class ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class CIRCLE_PITCH_ALIGNMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.CIRCLE_PITCH_ALIGNMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$CIRCLE_PITCH_ALIGNMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class CIRCLE_PITCH_SCALE {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.CIRCLE_PITCH_SCALE>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$CIRCLE_PITCH_SCALE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class CIRCLE_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.CIRCLE_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$CIRCLE_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class FILL_EXTRUSION_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.FILL_EXTRUSION_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$FILL_EXTRUSION_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class FILL_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.FILL_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$FILL_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class HILLSHADE_ILLUMINATION_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.HILLSHADE_ILLUMINATION_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$HILLSHADE_ILLUMINATION_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class ICON_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ICON_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ICON_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class ICON_PITCH_ALIGNMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ICON_PITCH_ALIGNMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ICON_PITCH_ALIGNMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class ICON_ROTATION_ALIGNMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ICON_ROTATION_ALIGNMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ICON_ROTATION_ALIGNMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class ICON_TEXT_FIT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ICON_TEXT_FIT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ICON_TEXT_FIT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class ICON_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.ICON_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$ICON_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class LINE_CAP {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.LINE_CAP>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$LINE_CAP interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class LINE_JOIN {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.LINE_JOIN>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$LINE_JOIN interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class LINE_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.LINE_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$LINE_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class RASTER_RESAMPLING {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.RASTER_RESAMPLING>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$RASTER_RESAMPLING interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class SYMBOL_PLACEMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.SYMBOL_PLACEMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$SYMBOL_PLACEMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class SYMBOL_Z_ORDER {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.SYMBOL_Z_ORDER>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$SYMBOL_Z_ORDER interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_JUSTIFY {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_JUSTIFY>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_JUSTIFY interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_PITCH_ALIGNMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_PITCH_ALIGNMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_PITCH_ALIGNMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_ROTATION_ALIGNMENT {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_ROTATION_ALIGNMENT>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_ROTATION_ALIGNMENT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_TRANSFORM {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_TRANSFORM>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_TRANSFORM interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_TRANSLATE_ANCHOR {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_TRANSLATE_ANCHOR>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_TRANSLATE_ANCHOR interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class TEXT_WRITING_MODE {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.TEXT_WRITING_MODE>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$TEXT_WRITING_MODE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class VISIBILITY {
							public static class: java.lang.Class<org.maplibre.android.style.layers.Property.VISIBILITY>;
							/**
							 * Constructs a new instance of the org.maplibre.android.style.layers.Property$VISIBILITY interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class PropertyFactory {
						public static class: java.lang.Class<org.maplibre.android.style.layers.PropertyFactory>;
						public static lineRoundLimit(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static backgroundPattern(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillPattern(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textField(value: org.maplibre.android.style.types.Formatted): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.types.Formatted>;
						public static fillExtrusionBase(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static iconTextFitPadding(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textVariableAnchorOffset(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static rasterContrast(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static rasterBrightnessMin(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillSortKey(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textMaxAngle(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTextFit(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillExtrusionTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillOutlineColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static symbolAvoidEdges(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textOffset(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static iconHaloWidth(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static hillshadeAccentColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textHaloColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconRotationAlignment(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineSortKey(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textMaxWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static heatmapRadius(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeIlluminationAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static hillshadeExaggeration(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineCap(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textWritingMode(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionPattern(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconRotate(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textLineHeight(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static hillshadeIlluminationDirection(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconAllowOverlap(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineMiterLimit(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterBrightnessMin(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textFont(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillPattern(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineGradient(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textField(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static symbolSortKey(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circlePitchScale(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterHueRotate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconOptional(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static fillExtrusionHeight(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconIgnorePlacement(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconHaloWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textPitchAlignment(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static rasterFadeDuration(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static heatmapRadius(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textPitchAlignment(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconKeepUpright(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconOffset(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static rasterFadeDuration(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static heatmapOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textHaloColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineGapWidth(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static backgroundColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circlePitchScale(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconPadding(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconPadding(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static lineBlur(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleRadius(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterResampling(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconHaloColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillAntialias(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textHaloWidth(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleStrokeWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleStrokeWidth(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textRotate(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeAccentColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textMaxAngle(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static hillshadeHighlightColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textRotationAlignment(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterBrightnessMax(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textRotate(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconHaloBlur(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineJoin(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineJoin(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textSize(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static iconAnchor(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textLetterSpacing(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textKeepUpright(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleSortKey(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleBlur(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textHaloBlur(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionHeight(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineWidth(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textVariableAnchor(value: androidNative.Array<string>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public static symbolScreenSpace(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineOffset(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTextFitPadding(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static rasterSaturation(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineBlur(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textHaloBlur(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillExtrusionPattern(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleStrokeColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleRadius(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineMiterLimit(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textIgnorePlacement(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static heatmapIntensity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static hillshadeShadowColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeHighlightColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static backgroundColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconOptional(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textPadding(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static visibility(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static hillshadeIlluminationAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconKeepUpright(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static iconTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public constructor();
						public static symbolZOrder(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static symbolSpacing(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconPadding(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circlePitchAlignment(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconSize(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterHueRotate(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static rasterResampling(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static symbolPlacement(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textAllowOverlap(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterSaturation(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textAnchor(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconRotate(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static iconPitchAlignment(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static iconAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconHaloBlur(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textTransform(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static heatmapWeight(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconPitchAlignment(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textWritingMode(value: androidNative.Array<string>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public static heatmapColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textRadialOffset(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textTransform(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillAntialias(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineDasharray(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static circleStrokeColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineOffset(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static symbolSortKey(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleStrokeOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconHaloColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineCap(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static lineColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeExaggeration(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static backgroundColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static circleBlur(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static heatmapWeight(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineGradient(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconImage(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeHighlightColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconAllowOverlap(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static iconOffset(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circlePitchAlignment(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillExtrusionVerticalGradient(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static rasterOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textLineHeight(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineGradient(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static heatmapColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textJustify(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textVariableAnchor(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconRotationAlignment(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textSize(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static circleSortKey(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionVerticalGradient(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static heatmapOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillTranslateAnchor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textOffset(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillOutlineColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static iconImage(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static heatmapIntensity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconIgnorePlacement(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textMaxWidth(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillExtrusionColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterBrightnessMax(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineDasharray(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconHaloColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillExtrusionColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillTranslate(value: androidNative.Array<java.lang.Float>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public static symbolAvoidEdges(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static rasterContrast(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static linePattern(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineSortKey(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static fillSortKey(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static symbolSpacing(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textLetterSpacing(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static backgroundOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static circleStrokeOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textTranslate(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textJustify(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillExtrusionTranslateAnchor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static symbolPlacement(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textRotationAlignment(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static linePattern(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static fillExtrusionBase(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textAllowOverlap(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textHaloColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textOptional(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textField(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleStrokeColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static backgroundOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textKeepUpright(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static hillshadeIlluminationDirection(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textOptional(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static textIgnorePlacement(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static symbolZOrder(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static hillshadeShadowColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static circleOpacity(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static iconSize(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textRadialOffset(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static symbolScreenSpace(value: java.lang.Boolean): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public static textFont(value: androidNative.Array<string>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public static textVariableAnchorOffset(value: androidNative.Array<any>): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<any>>;
						public static lineRoundLimit(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static lineOpacity(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static iconTextFit(value: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static lineGapWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static fillOutlineColor(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
						public static hillshadeAccentColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static hillshadeShadowColor(value: number): org.maplibre.android.style.layers.PropertyValue<string>;
						public static textHaloWidth(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static textPadding(value: java.lang.Float): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public static heatmapColor(expression: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.expressions.Expression>;
						public static backgroundPattern(value: string): org.maplibre.android.style.layers.PropertyValue<string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class PropertyValue<T> extends java.lang.Object {
						public static class: java.lang.Class<org.maplibre.android.style.layers.PropertyValue<any>>;
						public name: string;
						public value: T;
						public isNull(): boolean;
						public getColorInt(): java.lang.Integer;
						public constructor(name: string, value: T);
						public isExpression(): boolean;
						public hashCode(): number;
						public isValue(): boolean;
						public getValue(): T;
						public equals(o: any): boolean;
						public getExpression(): org.maplibre.android.style.expressions.Expression;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class RasterLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.RasterLayer>;
						public constructor(layerId: string, sourceId: string);
						public setRasterBrightnessMinTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setRasterOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setRasterSaturationTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public initialize(param0: string, param1: string): void;
						public constructor(nativePtr: number);
						public getRasterFadeDuration(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public finalize(): void;
						public setRasterHueRotateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getRasterSaturationTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.RasterLayer;
						public getRasterContrast(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getRasterContrastTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getRasterBrightnessMaxTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public constructor();
						public getRasterResampling(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setRasterContrastTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getRasterBrightnessMax(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getSourceId(): string;
						public getRasterHueRotate(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getRasterHueRotateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getRasterOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getRasterOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setSourceLayer(sourceLayer: string): void;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.RasterLayer;
						public getRasterBrightnessMinTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getRasterSaturation(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setRasterBrightnessMaxTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getRasterBrightnessMin(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class SymbolLayer extends org.maplibre.android.style.layers.Layer {
						public static class: java.lang.Class<org.maplibre.android.style.layers.SymbolLayer>;
						public getSymbolSortKey(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextIgnorePlacement(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getIconHaloColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getTextTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getIconTextFit(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconHaloColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextOptional(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public setTextTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextRotationAlignment(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconImage(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextWritingMode(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public getTextOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getSymbolSpacing(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconTextFitPadding(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public getTextTransform(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextOffset(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public constructor();
						public setIconColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getIconRotate(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconOptional(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getIconKeepUpright(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getSymbolPlacement(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextSize(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconColorAsInt(): number;
						public setFilter(filter: org.maplibre.android.style.expressions.Expression): void;
						public getTextKeepUpright(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getTextOpacity(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconTranslateTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getTextJustify(): org.maplibre.android.style.layers.PropertyValue<string>;
						public setIconHaloColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getSourceLayer(): string;
						public getTextHaloColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getSymbolAvoidEdges(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public initialize(param0: string, param1: string): void;
						public getTextPadding(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setIconOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setTextColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextHaloBlur(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public withFilter(filter: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.layers.SymbolLayer;
						public getTextColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconSize(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconPadding(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public setTextHaloWidthTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextRadialOffset(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextLetterSpacing(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconRotationAlignment(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextRotate(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconColor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public constructor(layerId: string, sourceId: string);
						public withSourceLayer(sourceLayer: string): org.maplibre.android.style.layers.SymbolLayer;
						public getSymbolZOrder(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconHaloBlurTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getTextMaxAngle(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextHaloColorAsInt(): number;
						public constructor(nativePtr: number);
						public getSymbolScreenSpace(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getIconColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public finalize(): void;
						public withProperties(properties: androidNative.Array<org.maplibre.android.style.layers.PropertyValue<any>>): org.maplibre.android.style.layers.SymbolLayer;
						public getTextPitchAlignment(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getIconHaloWidthTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getTextTranslate(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public setIconHaloWidthTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextFont(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public getTextAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextHaloBlurTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getTextHaloWidthTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getIconHaloWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getIconHaloColorAsInt(): number;
						public getIconOffset(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<java.lang.Float>>;
						public getFilter(): org.maplibre.android.style.expressions.Expression;
						public getTextVariableAnchorOffset(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<any>>;
						public getTextColorAsInt(): number;
						public setTextHaloColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getIconPitchAlignment(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextAllowOverlap(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public setIconHaloBlurTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextLineHeight(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextMaxWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setTextOpacityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getIconAllowOverlap(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getIconAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextField(): org.maplibre.android.style.layers.PropertyValue<org.maplibre.android.style.types.Formatted>;
						public setIconTranslateTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextHaloWidth(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public getTextVariableAnchor(): org.maplibre.android.style.layers.PropertyValue<androidNative.Array<string>>;
						public getSourceId(): string;
						public getIconIgnorePlacement(): org.maplibre.android.style.layers.PropertyValue<java.lang.Boolean>;
						public getIconOpacityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setSourceLayer(sourceLayer: string): void;
						public getIconHaloBlur(): org.maplibre.android.style.layers.PropertyValue<java.lang.Float>;
						public setTextHaloBlurTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getTextTranslateAnchor(): org.maplibre.android.style.layers.PropertyValue<string>;
						public getTextHaloColor(): org.maplibre.android.style.layers.PropertyValue<string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module layers {
					export class TransitionOptions {
						public static class: java.lang.Class<org.maplibre.android.style.layers.TransitionOptions>;
						public getDelay(): number;
						public constructor(duration: number, delay: number);
						public getDuration(): number;
						public constructor(duration: number, delay: number, enablePlacementTransitions: boolean);
						public hashCode(): number;
						public isEnablePlacementTransitions(): boolean;
						public equals(o: any): boolean;
						/** @deprecated */
						public static fromTransitionOptions(duration: number, delay: number): org.maplibre.android.style.layers.TransitionOptions;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module light {
					export class Light {
						public static class: java.lang.Class<org.maplibre.android.style.light.Light>;
						public setColor(color: number): void;
						public getColor(): string;
						public getAnchor(): string;
						public getPosition(): org.maplibre.android.style.light.Position;
						public setPosition(position: org.maplibre.android.style.light.Position): void;
						public setColor(color: string): void;
						public setAnchor(anchor: string): void;
						public getIntensityTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public getColorTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setIntensityTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setIntensity(intensity: number): void;
						public getPositionTransition(): org.maplibre.android.style.layers.TransitionOptions;
						public setPositionTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public setColorTransition(options: org.maplibre.android.style.layers.TransitionOptions): void;
						public getIntensity(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module light {
					export class Position {
						public static class: java.lang.Class<org.maplibre.android.style.light.Position>;
						public constructor(radialCoordinate: number, azimuthalAngle: number, polarAngle: number);
						public hashCode(): number;
						public static fromPosition(radialCoordinate: number, azimuthalAngle: number, polarAngle: number): org.maplibre.android.style.light.Position;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class CannotAddSourceException {
						public static class: java.lang.Class<org.maplibre.android.style.sources.CannotAddSourceException>;
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class CustomGeometrySource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.CustomGeometrySource>;
						public static THREAD_PREFIX: string = 'CustomGeom';
						public static THREAD_POOL_LIMIT: number = 4;
						public constructor();
						public invalidateTile(zoomLevel: number, x: number, y: number): void;
						public setTileData(zoomLevel: number, x: number, y: number, data: org.maplibre.geojson.FeatureCollection): void;
						public constructor(id: string, options: org.maplibre.android.style.sources.CustomGeometrySourceOptions, provider: org.maplibre.android.style.sources.GeometryTileProvider);
						public invalidateRegion(bounds: org.maplibre.android.geometry.LatLngBounds): void;
						public constructor(id: string, provider: org.maplibre.android.style.sources.GeometryTileProvider);
						public constructor(nativePtr: number);
						public querySourceFeatures(this_: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
						public finalize(): void;
					}
					export module CustomGeometrySource {
						export class Companion {
							public static class: java.lang.Class<org.maplibre.android.style.sources.CustomGeometrySource.Companion>;
						}
						export class GeometryTileRequest {
							public static class: java.lang.Class<org.maplibre.android.style.sources.CustomGeometrySource.GeometryTileRequest>;
							public equals(this_: any): boolean;
							public constructor(id: org.maplibre.android.style.sources.CustomGeometrySource.TileID, provider: org.maplibre.android.style.sources.GeometryTileProvider, awaiting: java.util.Map<org.maplibre.android.style.sources.CustomGeometrySource.TileID, org.maplibre.android.style.sources.CustomGeometrySource.GeometryTileRequest>, inProgress: java.util.Map<org.maplibre.android.style.sources.CustomGeometrySource.TileID, java.util.concurrent.atomic.AtomicBoolean>, _source: org.maplibre.android.style.sources.CustomGeometrySource, _cancelled: java.util.concurrent.atomic.AtomicBoolean);
							public run(): void;
						}
						export class TileID {
							public static class: java.lang.Class<org.maplibre.android.style.sources.CustomGeometrySource.TileID>;
							public setX(x: number): void;
							public setZ(z: number): void;
							public getY(): number;
							public getZ(): number;
							public setY(y: number): void;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(z: number, x: number, y: number);
							public getX(): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class CustomGeometrySourceOptions extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<org.maplibre.android.style.sources.CustomGeometrySourceOptions>;
						public withWrap(wrap: boolean): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
						public getKeys(): java.util.Set<string>;
						public containsKey(key: any): boolean;
						public values(): java.util.Collection<any>;
						public remove(p0: string): any;
						public getOrDefault(key: any, defaultValue: any): any;
						public remove(key: any, value: any): boolean;
						public containsKey(p0: string): boolean;
						public withClip(clip: boolean): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
						public getEntries(): java.util.Set<java.util.Map.Entry<string, any>>;
						public withTolerance(tolerance: number): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
						public size(): number;
						public constructor();
						public withBuffer(buffer: number): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
						public getOrDefault(p0: string, p1: any): any;
						public withMaxZoom(maxZoom: number): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
						public get(key: any): any;
						public getValues(): java.util.Collection<any>;
						public keySet(): java.util.Set<string>;
						public remove(p0: string, p1: any): boolean;
						public getSize(): number;
						public get(p0: string): any;
						public remove(key: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<string, any>>;
						public withMinZoom(minZoom: number): org.maplibre.android.style.sources.CustomGeometrySourceOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class GeoJsonOptions extends java.util.HashMap<string, any> {
						public static class: java.lang.Class<org.maplibre.android.style.sources.GeoJsonOptions>;
						public withTolerance(tolerance: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public getKeys(): java.util.Set<string>;
						public containsKey(key: any): boolean;
						public values(): java.util.Collection<any>;
						public remove(p0: string): any;
						public withClusterMaxZoom(clusterMaxZoom: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public getOrDefault(key: any, defaultValue: any): any;
						public remove(key: any, value: any): boolean;
						public containsKey(p0: string): boolean;
						public withMinZoom(minZoom: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public withLineMetrics(lineMetrics: boolean): org.maplibre.android.style.sources.GeoJsonOptions;
						public getEntries(): java.util.Set<java.util.Map.Entry<string, any>>;
						public size(): number;
						public constructor();
						public withClusterRadius(clusterRadius: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public getOrDefault(p0: string, p1: any): any;
						public withClusterMinPoints(clusterMinPoints: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public get(key: any): any;
						public getValues(): java.util.Collection<any>;
						public keySet(): java.util.Set<string>;
						public remove(p0: string, p1: any): boolean;
						public withBuffer(buffer: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public getSize(): number;
						public get(p0: string): any;
						public remove(key: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<string, any>>;
						public withClusterProperty(operator: string, map: org.maplibre.android.style.expressions.Expression, this_: org.maplibre.android.style.expressions.Expression): org.maplibre.android.style.sources.GeoJsonOptions;
						public withMaxZoom(maxZoom: number): org.maplibre.android.style.sources.GeoJsonOptions;
						public withCluster(cluster: boolean): org.maplibre.android.style.sources.GeoJsonOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class GeoJsonSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.GeoJsonSource>;
						public setGeoJson(featuresCopy: org.maplibre.geojson.FeatureCollection): void;
						public nativeGetUrl(): string;
						public constructor(id: string, geometry: org.maplibre.geojson.Geometry, options: org.maplibre.android.style.sources.GeoJsonOptions);
						public constructor(id: string, features: org.maplibre.geojson.FeatureCollection);
						public setGeoJsonSync(json: string): void;
						public constructor(this_: string, id: string, geoJson: org.maplibre.android.style.sources.GeoJsonOptions);
						public constructor(id: string, geometry: org.maplibre.geojson.Geometry);
						public setUri(uri: string): void;
						public constructor(nativePtr: number);
						/** @deprecated */
						public setUrl(url: java.net.URL): void;
						public finalize(): void;
						public constructor(id: string, feature: org.maplibre.geojson.Feature);
						public setGeoJson(feature: org.maplibre.geojson.Feature): void;
						public constructor(id: string, uri: java.net.URI);
						public getUri(): string;
						public nativeSetUrl(param0: string): void;
						public setGeoJsonSync(feature: org.maplibre.geojson.Feature): void;
						public initialize(param0: string, param1: any): void;
						public constructor(id: string);
						public constructor(this_: string, id: string);
						/** @deprecated */
						public constructor(id: string, url: java.net.URL, options: org.maplibre.android.style.sources.GeoJsonOptions);
						public querySourceFeatures(this_: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
						public constructor(id: string, feature: org.maplibre.geojson.Feature, options: org.maplibre.android.style.sources.GeoJsonOptions);
						public constructor();
						/** @deprecated */
						public constructor(id: string, url: java.net.URL);
						public setUri(uri: java.net.URI): void;
						/** @deprecated */
						public getUrl(): string;
						public setGeoJsonSync(geometry: org.maplibre.geojson.Geometry): void;
						public getClusterChildren(cluster: org.maplibre.geojson.Feature): org.maplibre.geojson.FeatureCollection;
						public constructor(id: string, options: org.maplibre.android.style.sources.GeoJsonOptions);
						public constructor(id: string, uri: java.net.URI, options: org.maplibre.android.style.sources.GeoJsonOptions);
						public getClusterLeaves(cluster: org.maplibre.geojson.Feature, limit: number, offset: number): org.maplibre.geojson.FeatureCollection;
						public setGeoJson(geometry: org.maplibre.geojson.Geometry): void;
						public constructor(id: string, features: org.maplibre.geojson.FeatureCollection, options: org.maplibre.android.style.sources.GeoJsonOptions);
						/** @deprecated */
						public setUrl(value: string): void;
						public setGeoJson(json: string): void;
						public setGeoJsonSync(featuresCopy: org.maplibre.geojson.FeatureCollection): void;
						public getClusterExpansionZoom(cluster: org.maplibre.geojson.Feature): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class GeometryTileProvider {
						public static class: java.lang.Class<org.maplibre.android.style.sources.GeometryTileProvider>;
						/**
						 * Constructs a new instance of the org.maplibre.android.style.sources.GeometryTileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getFeaturesForBounds(param0: org.maplibre.android.geometry.LatLngBounds, param1: number): org.maplibre.geojson.FeatureCollection });
						public constructor();
						public getFeaturesForBounds(param0: org.maplibre.android.geometry.LatLngBounds, param1: number): org.maplibre.geojson.FeatureCollection;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class ImageSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.ImageSource>;
						public constructor();
						public setUri(uri: java.net.URI): void;
						/** @deprecated */
						public getUrl(): string;
						public initialize(param0: string, param1: org.maplibre.android.geometry.LatLngQuad): void;
						public constructor(id: string, coordinates: org.maplibre.android.geometry.LatLngQuad, bitmap: globalAndroid.graphics.Bitmap);
						public nativeGetUrl(): string;
						/** @deprecated */
						public constructor(id: string, coordinates: org.maplibre.android.geometry.LatLngQuad, url: java.net.URL);
						public setUri(uri: string): void;
						public nativeSetCoordinates(param0: org.maplibre.android.geometry.LatLngQuad): void;
						public constructor(nativePtr: number);
						/** @deprecated */
						public setUrl(url: java.net.URL): void;
						public finalize(): void;
						public constructor(id: string, coordinates: org.maplibre.android.geometry.LatLngQuad, uri: java.net.URI);
						public setCoordinates(latLngQuad: org.maplibre.android.geometry.LatLngQuad): void;
						public getUri(): string;
						public nativeSetUrl(param0: string): void;
						public setImage(drawable: number): void;
						/** @deprecated */
						public setUrl(url: string): void;
						public nativeSetImage(param0: globalAndroid.graphics.Bitmap): void;
						public setImage(bitmap: globalAndroid.graphics.Bitmap): void;
						public constructor(id: string, coordinates: org.maplibre.android.geometry.LatLngQuad, resourceId: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class RasterDemSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.RasterDemSource>;
						public static DEFAULT_TILE_SIZE: number = 512;
						public constructor();
						public constructor(id: string, uri: java.net.URI);
						/** @deprecated */
						public constructor(id: string, url: java.net.URL);
						public constructor(id: string, tileSet: org.maplibre.android.style.sources.TileSet);
						/** @deprecated */
						public getUrl(): string;
						public getUri(): string;
						public constructor(id: string, uri: string);
						public constructor(id: string, uri: string, tileSize: number);
						public constructor(id: string, tileSet: org.maplibre.android.style.sources.TileSet, tileSize: number);
						public initialize(param0: string, param1: any, param2: number): void;
						public constructor(nativePtr: number);
						public finalize(): void;
					}
					export module RasterDemSource {
						export class Companion {
							public static class: java.lang.Class<org.maplibre.android.style.sources.RasterDemSource.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class RasterSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.RasterSource>;
						public static DEFAULT_TILE_SIZE: number = 512;
						public constructor();
						/** @deprecated */
						public constructor(id: string, url: java.net.URL);
						public constructor(id: string, tileSet: org.maplibre.android.style.sources.TileSet);
						/** @deprecated */
						public getUrl(): string;
						public nativeGetUrl(): string;
						public constructor(id: string, uri: string);
						public constructor(id: string, uri: string, tileSize: number);
						public constructor(id: string, tileSet: org.maplibre.android.style.sources.TileSet, tileSize: number);
						public initialize(param0: string, param1: any, param2: number): void;
						public constructor(nativePtr: number);
						public finalize(): void;
						public constructor(id: string, uri: java.net.URI);
						public getUri(): string;
					}
					export module RasterSource {
						export class Companion {
							public static class: java.lang.Class<org.maplibre.android.style.sources.RasterSource.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export abstract class Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.Source>;
						public detached: boolean;
						public nativeSetPrefetchZoomDelta(param0: java.lang.Integer): void;
						public checkThread(): void;
						public setMinimumTileUpdateInterval(interval: java.lang.Long): void;
						public isVolatile(): java.lang.Boolean;
						public constructor(nativePtr: number);
						public setMaxOverscaleFactorForParentTiles(maxOverscaleFactor: java.lang.Integer): void;
						public getNativePtr(): number;
						public setDetached(): void;
						public getMaxOverscaleFactorForParentTiles(): java.lang.Integer;
						public setPrefetchZoomDelta(delta: java.lang.Integer): void;
						public getId(): string;
						public nativeSetVolatile(param0: java.lang.Boolean): void;
						public constructor();
						public setVolatile(value: java.lang.Boolean): void;
						public nativeGetMaxOverscaleFactorForParentTiles(): java.lang.Integer;
						public nativeGetMinimumTileUpdateInterval(): java.lang.Long;
						public getPrefetchZoomDelta(): java.lang.Integer;
						public nativeSetMaxOverscaleFactorForParentTiles(param0: java.lang.Integer): void;
						public getMinimumTileUpdateInterval(): java.lang.Long;
						public nativeSetMinimumTileUpdateInterval(param0: java.lang.Long): void;
						public getAttribution(): string;
						public nativeGetPrefetchZoomDelta(): java.lang.Integer;
						public nativeIsVolatile(): java.lang.Boolean;
						public nativeGetAttribution(): string;
						public nativeGetId(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class TileSet {
						public static class: java.lang.Class<org.maplibre.android.style.sources.TileSet>;
						public minZoom: java.lang.Float;
						public maxZoom: java.lang.Float;
						public setAttribution(attribution: string): void;
						public getData(): androidNative.Array<string>;
						/** @deprecated */
						public setBounds(bounds: androidNative.Array<java.lang.Float>): void;
						public getMaxZoom(): number;
						public getVersion(): string;
						public getScheme(): string;
						public setMaxZoom(maxZoom: number): void;
						public setCenter(center: org.maplibre.android.geometry.LatLng): void;
						public toValueObject(): java.util.Map<string, any>;
						public getMinZoom(): number;
						public getBounds(): androidNative.Array<java.lang.Float>;
						public getTilejson(): string;
						public getName(): string;
						public constructor(tilejson: string, tiles: androidNative.Array<string>);
						public setTemplate(template: string): void;
						public getCenter(): androidNative.Array<java.lang.Float>;
						public getEncoding(): string;
						public setMinZoom(minZoom: number): void;
						public setDescription(desc: string): void;
						public setBounds(bounds: androidNative.Array<number>): void;
						public setLegend(value: string): void;
						public setBounds(bounds: org.maplibre.android.geometry.LatLngBounds): void;
						public setVersion(version: string): void;
						public getGrids(): androidNative.Array<string>;
						/** @deprecated */
						public setCenter(this_: androidNative.Array<number>): void;
						public setEncoding(encoding: string): void;
						public getAttribution(): string;
						public setData(data: androidNative.Array<string>): void;
						public getTemplate(): string;
						public getLegend(): string;
						public getTiles(): androidNative.Array<string>;
						public setGrids(grids: androidNative.Array<string>): void;
						public setName(name: string): void;
						public getDescription(): string;
						public setBounds(left: number, bottom: number, right: number, top: number): void;
						public setScheme(scheme: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class UnknownSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.UnknownSource>;
						public constructor();
						public initialize(): void;
						public constructor(nativePtr: number);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module sources {
					export class VectorSource extends org.maplibre.android.style.sources.Source {
						public static class: java.lang.Class<org.maplibre.android.style.sources.VectorSource>;
						public constructor();
						/** @deprecated */
						public constructor(id: string, url: java.net.URL);
						public constructor(id: string, tileSet: org.maplibre.android.style.sources.TileSet);
						/** @deprecated */
						public getUrl(): string;
						public getUri(): string;
						public nativeGetUrl(): string;
						public constructor(id: string, uri: string);
						public initialize(param0: string, param1: any): void;
						public constructor(id: string, uri: globalAndroid.net.Uri);
						public constructor(nativePtr: number);
						public querySourceFeatures(this_: androidNative.Array<string>, sourceLayerIds: org.maplibre.android.style.expressions.Expression): java.util.List<org.maplibre.geojson.Feature>;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module types {
					export class Formatted {
						public static class: java.lang.Class<org.maplibre.android.style.types.Formatted>;
						public constructor(formattedSections: androidNative.Array<org.maplibre.android.style.types.FormattedSection>);
						public equals(this_: any): boolean;
						public getFormattedSections(): androidNative.Array<org.maplibre.android.style.types.FormattedSection>;
						public toArray(): androidNative.Array<any>;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module style {
				export module types {
					export class FormattedSection {
						public static class: java.lang.Class<org.maplibre.android.style.types.FormattedSection>;
						public constructor(text: string);
						public constructor(text: string, fontScale: java.lang.Number, fontStack: androidNative.Array<string>, textColor: string);
						public setTextColor(textColor: number): void;
						public hashCode(): number;
						public setFontScale(fontScale: java.lang.Number): void;
						/** @deprecated */
						public constructor(text: string, fontStack: androidNative.Array<string>);
						public getFontScale(): java.lang.Number;
						/** @deprecated */
						public constructor(text: string, fontScale: java.lang.Number, fontStack: androidNative.Array<string>);
						public getText(): string;
						public toString(): string;
						/** @deprecated */
						public constructor(text: string, fontScale: java.lang.Number);
						public getFontStack(): androidNative.Array<string>;
						public equals(o: any): boolean;
						public setFontStack(fontStack: androidNative.Array<string>): void;
						public getTextColor(): string;
						public setTextColor(textColor: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module text {
				export class LocalGlyphRasterizer {
					public static class: java.lang.Class<org.maplibre.android.text.LocalGlyphRasterizer>;
					public drawGlyphBitmap(fontFamily: string, bold: boolean, glyphID: string): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module tile {
				export class TileOperation {
					public static class: java.lang.Class<org.maplibre.android.tile.TileOperation>;
					public static RequestedFromCache: org.maplibre.android.tile.TileOperation;
					public static RequestedFromNetwork: org.maplibre.android.tile.TileOperation;
					public static LoadFromNetwork: org.maplibre.android.tile.TileOperation;
					public static LoadFromCache: org.maplibre.android.tile.TileOperation;
					public static StartParse: org.maplibre.android.tile.TileOperation;
					public static EndParse: org.maplibre.android.tile.TileOperation;
					public static Error: org.maplibre.android.tile.TileOperation;
					public static Cancelled: org.maplibre.android.tile.TileOperation;
					public static NullOp: org.maplibre.android.tile.TileOperation;
					public static valueOf(name: string): org.maplibre.android.tile.TileOperation;
					public static values(): androidNative.Array<org.maplibre.android.tile.TileOperation>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module util {
				export class DefaultStyle {
					public static class: java.lang.Class<org.maplibre.android.util.DefaultStyle>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.util.DefaultStyle>;
					public setVersion(version: number): void;
					public setName(name: string): void;
					public getUrl(): string;
					public getName(): string;
					public getVersion(): number;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public constructor(url: string, name: string, version: number);
					public setUrl(url: string): void;
					public constructor(in_: globalAndroid.os.Parcel);
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module util {
				export class TileServerOptions {
					public static class: java.lang.Class<org.maplibre.android.util.TileServerOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<org.maplibre.android.util.TileServerOptions>;
					public setGlyphsDomainName(glyphsDomainName: string): void;
					public getApiKeyRequired(): boolean;
					public static get(tileServer: org.maplibre.android.WellKnownTileServer): org.maplibre.android.util.TileServerOptions;
					public setSourceTemplate(sourceTemplate: string): void;
					public getTileDomainName(): string;
					public setApiKeyParameterName(apiKeyParameterName: string): void;
					public getStyleTemplate(): string;
					public setStyleDomainName(styleDomainName: string): void;
					public setDefaultStyle(defaultStyleName: string): void;
					public getStyleVersionPrefix(): string;
					public getGlyphsTemplate(): string;
					public getSourceTemplate(): string;
					public constructor(in_: globalAndroid.os.Parcel);
					public setApiKeyRequired(isRequired: boolean): void;
					public setBaseURL(baseURL: string): void;
					public getSourceDomainName(): string;
					public constructor(
						baseURL: string,
						uriSchemeAlias: string,
						sourceTemplate: string,
						sourceDomainName: string,
						sourceVersionPrefix: string,
						styleTemplate: string,
						styleDomainName: string,
						styleVersionPrefix: string,
						spritesTemplate: string,
						spritesDomainName: string,
						spritesVersionPrefix: string,
						glyphsTemplate: string,
						glyphsDomainName: string,
						glyphsVersionPrefix: string,
						tileTemplate: string,
						tileDomainName: string,
						tileVersionPrefix: string,
						apiKeyParameterName: string,
						apiKeyRequired: boolean,
						defaultStyle: string,
						defaultStyles: androidNative.Array<org.maplibre.android.util.DefaultStyle>
					);
					public getGlyphsDomainName(): string;
					public getDefaultStyle(): string;
					public setSpritesVersionPrefix(spritesVersionPrefix: string): void;
					public setSpritesTemplate(spritesTemplate: string): void;
					public setDefaultStyles(defaultStyles: androidNative.Array<org.maplibre.android.util.DefaultStyle>): void;
					public getDefaultStyles(): androidNative.Array<org.maplibre.android.util.DefaultStyle>;
					public getUriSchemeAlias(): string;
					public getBaseURL(): string;
					public getSpritesDomainName(): string;
					public setSourceVersionPrefix(sourceVersionPrefix: string): void;
					public setTileDomainName(tileDomainName: string): void;
					public setStyleVersionPrefix(styleVersionPrefix: string): void;
					public setTileTemplate(tileTemplate: string): void;
					public describeContents(): number;
					public getSourceVersionPrefix(): string;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public setUriSchemeAlias(uriSchemeAlias: string): void;
					public setGlyphsVersionPrefix(glyphsVersionPrefix: string): void;
					public getStyleDomainName(): string;
					public getTileVersionPrefix(): string;
					public setTileVersionPrefix(tileVersionPrefix: string): void;
					public getApiKeyParameterName(): string;
					public getTileTemplate(): string;
					public getSpritesTemplate(): string;
					public setGlyphsTemplate(glyphsTemplate: string): void;
					public setSpritesDomainName(spritesDomainName: string): void;
					public getSpritesVersionPrefix(): string;
					public getGlyphsVersionPrefix(): string;
					public setStyleTemplate(styleTemplate: string): void;
					public setSourceDomainName(domainName: string): void;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class AnimatorUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.AnimatorUtils>;
					public static animate(view: globalAndroid.view.View, animatorRes: number, duration: number): void;
					public static rotateBy(view: globalAndroid.view.View, rotationBy: number): void;
					public static alpha(convertView: globalAndroid.view.View, alpha: number): void;
					public constructor();
					public static alpha(convertView: globalAndroid.view.View, alpha: number, listener: org.maplibre.android.utils.AnimatorUtils.OnAnimationEndListener): void;
					public static animate(view: globalAndroid.view.View, animatorRes: number, duration: number, listener: org.maplibre.android.utils.AnimatorUtils.OnAnimationEndListener): void;
					public static rotate(view: globalAndroid.view.View, rotation: number): void;
					public static animate(view: globalAndroid.view.View, animatorRes: number, listener: org.maplibre.android.utils.AnimatorUtils.OnAnimationEndListener): void;
					public static animate(view: globalAndroid.view.View, animatorRes: number): void;
				}
				export module AnimatorUtils {
					export class OnAnimationEndListener {
						public static class: java.lang.Class<org.maplibre.android.utils.AnimatorUtils.OnAnimationEndListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.utils.AnimatorUtils$OnAnimationEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAnimationEnd(): void });
						public constructor();
						public onAnimationEnd(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class BitmapUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.BitmapUtils>;
					public static mergeBitmaps(background: globalAndroid.graphics.Bitmap, foreground: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					public static getByteArrayFromDrawable(drawable: globalAndroid.graphics.drawable.Drawable): androidNative.Array<number>;
					public static createBitmapFromView(view: globalAndroid.view.View): globalAndroid.graphics.Bitmap;
					public constructor();
					public static getDrawableFromByteArray(context: globalAndroid.content.Context, array: androidNative.Array<number>): globalAndroid.graphics.drawable.Drawable;
					public static equals(bitmap: globalAndroid.graphics.Bitmap, other: globalAndroid.graphics.Bitmap): boolean;
					public static mergeBitmap(background: globalAndroid.graphics.Bitmap, foreground: globalAndroid.graphics.Bitmap, left: number, top: number): globalAndroid.graphics.Bitmap;
					public static getDrawableFromRes(context: globalAndroid.content.Context, drawableRes: number, tintColor: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
					public static getDrawableFromRes(context: globalAndroid.content.Context, drawableRes: number): globalAndroid.graphics.drawable.Drawable;
					public static getBitmapFromDrawable(constantState: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
					/** @deprecated */
					public static mergeBitmap(background: globalAndroid.graphics.Bitmap, foreground: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class ColorUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.ColorUtils>;
					public constructor();
					public static rgbaToColor(value: string): number;
					public static getPrimaryDarkColor(typedValue: globalAndroid.content.Context): number;
					public static colorToGlRgbaArray(color: number): androidNative.Array<number>;
					public static setTintList(imageView: globalAndroid.widget.ImageView, tintColor: number): void;
					public static colorToRgbaString(color: number): string;
					public static getAccentColor(typedValue: globalAndroid.content.Context): number;
					public static getSelector(color: number): globalAndroid.content.res.ColorStateList;
					public static getPrimaryColor(typedValue: globalAndroid.content.Context): number;
					public static colorToRgbaArray(color: number): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class Compare {
					public static class: java.lang.Class<org.maplibre.android.utils.Compare>;
					public constructor();
					public static compare(x: number, y: number): number;
					public static compare(x: boolean, y: boolean): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.FileUtils>;
					public constructor();
					public static deleteFile(path: string): void;
				}
				export module FileUtils {
					export class CheckFileReadPermissionTask extends globalAndroid.os.AsyncTask<java.io.File, java.lang.Void, java.lang.Boolean> {
						public static class: java.lang.Class<org.maplibre.android.utils.FileUtils.CheckFileReadPermissionTask>;
						public onCancelled(): void;
						public onPostExecute(result: java.lang.Boolean): void;
						public doInBackground(this_: androidNative.Array<java.io.File>): java.lang.Boolean;
						public constructor(listener: org.maplibre.android.utils.FileUtils.OnCheckFileReadPermissionListener);
					}
					export class CheckFileWritePermissionTask extends globalAndroid.os.AsyncTask<java.io.File, java.lang.Void, java.lang.Boolean> {
						public static class: java.lang.Class<org.maplibre.android.utils.FileUtils.CheckFileWritePermissionTask>;
						public onCancelled(): void;
						public constructor(listener: org.maplibre.android.utils.FileUtils.OnCheckFileWritePermissionListener);
						public onPostExecute(result: java.lang.Boolean): void;
						public doInBackground(this_: androidNative.Array<java.io.File>): java.lang.Boolean;
					}
					export class OnCheckFileReadPermissionListener {
						public static class: java.lang.Class<org.maplibre.android.utils.FileUtils.OnCheckFileReadPermissionListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.utils.FileUtils$OnCheckFileReadPermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onReadPermissionGranted(): void; onError(): void });
						public constructor();
						public onError(): void;
						public onReadPermissionGranted(): void;
					}
					export class OnCheckFileWritePermissionListener {
						public static class: java.lang.Class<org.maplibre.android.utils.FileUtils.OnCheckFileWritePermissionListener>;
						/**
						 * Constructs a new instance of the org.maplibre.android.utils.FileUtils$OnCheckFileWritePermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWritePermissionGranted(): void; onError(): void });
						public constructor();
						public onError(): void;
						public onWritePermissionGranted(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class FontUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.FontUtils>;
					public static extractValidFont(validFonts: androidNative.Array<string>): string;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class MapFragmentUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.MapFragmentUtils>;
					public static createFragmentArgs(options: org.maplibre.android.maps.MapLibreMapOptions): globalAndroid.os.Bundle;
					public constructor();
					public static resolveArgs(options: globalAndroid.content.Context, context: globalAndroid.os.Bundle): org.maplibre.android.maps.MapLibreMapOptions;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class MathUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.MathUtils>;
					public static wrap(value: number, min: number, max: number): number;
					public constructor();
					public static clamp(value: number, min: number, max: number): number;
					public static normalize(x: number, dataLow: number, dataHigh: number, normalizedLow: number, normalizedHigh: number): number;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class StringUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.StringUtils>;
				}
			}
		}
	}
}

declare module org {
	export module maplibre {
		export module android {
			export module utils {
				export class ThreadUtils {
					public static class: java.lang.Class<org.maplibre.android.utils.ThreadUtils>;
					public constructor();
					public static init(context: globalAndroid.content.Context): org.maplibre.android.utils.ThreadUtils;
					public static checkThread(origin: string): void;
				}
			}
		}
	}
}

//Generics information:
//org.maplibre.android.annotations.BaseMarkerOptions:2
//org.maplibre.android.location.MapLibreAnimator:1
//org.maplibre.android.location.MapLibreAnimator.AnimationsValueChangeListener:1
//org.maplibre.android.location.engine.LocationEngineCallback:1
//org.maplibre.android.location.engine.LocationEngineImpl:1
//org.maplibre.android.location.engine.LocationEngineProxy:1
//org.maplibre.android.style.layers.LayoutPropertyValue:1
//org.maplibre.android.style.layers.PaintPropertyValue:1
//org.maplibre.android.style.layers.PropertyValue:1
