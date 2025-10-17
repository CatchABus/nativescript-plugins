declare var MLNAbstractClassException: string;

declare class MLNActionJournalOptions extends NSObject {
	static alloc(): MLNActionJournalOptions; // inherited from NSObject

	static new(): MLNActionJournalOptions; // inherited from NSObject

	enabled: boolean;

	logFileCount: number;

	logFileSize: number;

	path: string;

	renderingStatsReportInterval: number;
}

declare function MLNAltitudeForZoomLevel(zoomLevel: number, pitch: number, latitude: number, size: CGSize): number;

interface MLNAnnotation extends NSObjectProtocol {
	coordinate: CLLocationCoordinate2D;

	subtitle?: string;

	title?: string;
}
declare var MLNAnnotation: {
	prototype: MLNAnnotation;
};

declare class MLNAnnotationImage extends NSObject implements NSSecureCoding {
	static alloc(): MLNAnnotationImage; // inherited from NSObject

	static annotationImageWithImageReuseIdentifier(image: UIImage, reuseIdentifier: string): MLNAnnotationImage;

	static new(): MLNAnnotationImage; // inherited from NSObject

	enabled: boolean;

	image: UIImage;

	readonly reuseIdentifier: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum MLNAnnotationVerticalAlignment {
	Center = 0,

	Top = 1,

	Bottom = 2,
}

declare class MLNAnnotationView extends UIView implements NSSecureCoding {
	static alloc(): MLNAnnotationView; // inherited from NSObject

	static appearance(): MLNAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLNAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLNAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLNAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNAnnotationView; // inherited from UIAppearance

	static new(): MLNAnnotationView; // inherited from NSObject

	annotation: MLNAnnotation;

	centerOffset: CGVector;

	readonly dragState: MLNAnnotationViewDragState;

	draggable: boolean;

	enabled: boolean;

	readonly reuseIdentifier: string;

	rotatesToMatchCamera: boolean;

	scalesWithViewingDistance: boolean;

	selected: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { annotation: MLNAnnotation; reuseIdentifier: string });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { reuseIdentifier: string });

	encodeWithCoder(coder: NSCoder): void;

	initWithAnnotationReuseIdentifier(annotation: MLNAnnotation, reuseIdentifier: string): this;

	initWithCoder(coder: NSCoder): this;

	initWithReuseIdentifier(reuseIdentifier: string): this;

	prepareForReuse(): void;

	setDragStateAnimated(dragState: MLNAnnotationViewDragState, animated: boolean): void;

	setSelectedAnimated(selected: boolean, animated: boolean): void;
}

declare const enum MLNAnnotationViewDragState {
	None = 0,

	Starting = 1,

	Dragging = 2,

	Canceling = 3,

	Ending = 4,
}

declare class MLNAttributedExpression extends NSObject {
	static alloc(): MLNAttributedExpression; // inherited from NSObject

	static attributedExpressionAttributes(expression: NSExpression, attrs: NSDictionary<string, NSExpression>): MLNAttributedExpression;

	static attributedExpressionFontNamesFontScale(expression: NSExpression, fontNames: NSArray<string> | string[], fontScale: number): MLNAttributedExpression;

	static new(): MLNAttributedExpression; // inherited from NSObject

	readonly attributes: NSDictionary<string, NSExpression>;

	expression: NSExpression;

	constructor(o: { expression: NSExpression });

	constructor(o: { expression: NSExpression; attributes: NSDictionary<string, NSExpression> });

	initWithExpression(expression: NSExpression): this;

	initWithExpressionAttributes(expression: NSExpression, attrs: NSDictionary<string, NSExpression>): this;
}

declare class MLNAttributionInfo extends NSObject {
	static alloc(): MLNAttributionInfo; // inherited from NSObject

	static new(): MLNAttributionInfo; // inherited from NSObject

	URL: NSURL;

	feedbackLink: boolean;

	title: NSAttributedString;

	constructor(o: { title: NSAttributedString; URL: NSURL });

	initWithTitleURL(title: NSAttributedString, URL: NSURL): this;

	titleWithStyle(style: MLNAttributionInfoStyle): NSAttributedString;
}

declare const enum MLNAttributionInfoStyle {
	Short = 1,

	Medium = 2,

	Long = 3,
}

declare class MLNBackendResource extends NSObject {
	static alloc(): MLNBackendResource; // inherited from NSObject

	static new(): MLNBackendResource; // inherited from NSObject

	commandBuffer: MTLCommandBuffer;

	device: MTLDevice;

	mtkView: MTKView;

	renderPassDescriptor: MTLRenderPassDescriptor;

	constructor(o: { MTKView: MTKView; device: MTLDevice; renderPassDescriptor: MTLRenderPassDescriptor; commandBuffer: MTLCommandBuffer });

	initWithMTKViewDeviceRenderPassDescriptorCommandBuffer(mtkView: MTKView, device: MTLDevice, renderPassDescriptor: MTLRenderPassDescriptor, commandBuffer: MTLCommandBuffer): this;
}

declare class MLNBackgroundStyleLayer extends MLNStyleLayer {
	static alloc(): MLNBackgroundStyleLayer; // inherited from NSObject

	static new(): MLNBackgroundStyleLayer; // inherited from NSObject

	backgroundColor: NSExpression;

	backgroundColorTransition: MLNTransition;

	backgroundOpacity: NSExpression;

	backgroundOpacityTransition: MLNTransition;

	backgroundPattern: NSExpression;

	backgroundPatternTransition: MLNTransition;

	constructor(o: { identifier: string });

	initWithIdentifier(identifier: string): this;
}

interface MLNCalloutView extends NSObjectProtocol {
	anchoredToAnnotation?: boolean;

	delegate: MLNCalloutViewDelegate;

	dismissesAutomatically?: boolean;

	leftAccessoryView: UIView;

	representedObject: MLNAnnotation;

	rightAccessoryView: UIView;

	dismissCalloutAnimated(animated: boolean): void;

	marginInsetsHintForPresentationFromRect?(rect: CGRect): UIEdgeInsets;

	presentCalloutFromRectInViewConstrainedToRectAnimated(rect: CGRect, view: UIView, constrainedRect: CGRect, animated: boolean): void;
}
declare var MLNCalloutView: {
	prototype: MLNCalloutView;
};

interface MLNCalloutViewDelegate extends NSObjectProtocol {
	calloutViewDidAppear?(calloutView: UIView): void;

	calloutViewShouldHighlight?(calloutView: UIView): boolean;

	calloutViewTapped?(calloutView: UIView): void;

	calloutViewWillAppear?(calloutView: UIView): void;
}
declare var MLNCalloutViewDelegate: {
	prototype: MLNCalloutViewDelegate;
};

declare const enum MLNCameraChangeReason {
	None = 0,

	Programmatic = 1,

	ResetNorth = 2,

	GesturePan = 4,

	GesturePinch = 8,

	GestureRotate = 16,

	GestureZoomIn = 32,

	GestureZoomOut = 64,

	GestureOneFingerZoom = 128,

	GestureTilt = 256,

	TransitionCancelled = 65536,
}

declare const enum MLNCirclePitchAlignment {
	Map = 0,

	Viewport = 1,
}

declare const enum MLNCircleScaleAlignment {
	Map = 0,

	Viewport = 1,
}

declare class MLNCircleStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNCircleStyleLayer; // inherited from NSObject

	static new(): MLNCircleStyleLayer; // inherited from NSObject

	circleBlur: NSExpression;

	circleBlurTransition: MLNTransition;

	circleColor: NSExpression;

	circleColorTransition: MLNTransition;

	circleOpacity: NSExpression;

	circleOpacityTransition: MLNTransition;

	circlePitchAlignment: NSExpression;

	circleRadius: NSExpression;

	circleRadiusTransition: MLNTransition;

	circleScaleAlignment: NSExpression;

	circleSortKey: NSExpression;

	circleStrokeColor: NSExpression;

	circleStrokeColorTransition: MLNTransition;

	circleStrokeOpacity: NSExpression;

	circleStrokeOpacityTransition: MLNTransition;

	circleStrokeWidth: NSExpression;

	circleStrokeWidthTransition: MLNTransition;

	circleTranslation: NSExpression;

	circleTranslationAnchor: NSExpression;

	circleTranslationTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNCircleTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

declare class MLNClockDirectionFormatter extends NSFormatter {
	static alloc(): MLNClockDirectionFormatter; // inherited from NSObject

	static new(): MLNClockDirectionFormatter; // inherited from NSObject

	unitStyle: NSFormattingUnitStyle;

	stringFromDirection(direction: number): string;
}

interface MLNCluster extends MLNFeature {
	clusterIdentifier: number;

	clusterPointCount: number;
}
declare var MLNCluster: {
	prototype: MLNCluster;
};

declare var MLNClusterIdentifierInvalid: number;

declare class MLNCompassButton extends UIImageView {
	static alloc(): MLNCompassButton; // inherited from NSObject

	static appearance(): MLNCompassButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLNCompassButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLNCompassButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNCompassButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLNCompassButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNCompassButton; // inherited from UIAppearance

	static new(): MLNCompassButton; // inherited from NSObject

	compassVisibility: MLNOrnamentVisibility;
}

declare class MLNCompassDirectionFormatter extends NSFormatter {
	static alloc(): MLNCompassDirectionFormatter; // inherited from NSObject

	static new(): MLNCompassDirectionFormatter; // inherited from NSObject

	unitStyle: NSFormattingUnitStyle;

	stringFromDirection(direction: number): string;
}

declare class MLNComputedShapeSource extends MLNSource {
	static alloc(): MLNComputedShapeSource; // inherited from NSObject

	static new(): MLNComputedShapeSource; // inherited from NSObject

	dataSource: MLNComputedShapeSourceDataSource;

	readonly requestQueue: NSOperationQueue;

	constructor(o: { identifier: string; dataSource: MLNComputedShapeSourceDataSource; options: NSDictionary<string, any> });

	constructor(o: { identifier: string; options: NSDictionary<string, any> });

	initWithIdentifierDataSourceOptions(identifier: string, dataSource: MLNComputedShapeSourceDataSource, options: NSDictionary<string, any>): this;

	initWithIdentifierOptions(identifier: string, options: NSDictionary<string, any>): this;

	invalidateBounds(bounds: MLNCoordinateBounds): void;

	invalidateTileAtXYZoomLevel(x: number, y: number, zoomLevel: number): void;

	setFeaturesInTileAtXYZoomLevel(features: NSArray<MLNShape> | MLNShape[], x: number, y: number, zoomLevel: number): void;
}

interface MLNComputedShapeSourceDataSource extends NSObjectProtocol {
	featuresInCoordinateBoundsZoomLevel?(bounds: MLNCoordinateBounds, zoomLevel: number): NSArray<MLNShape>;

	featuresInTileAtXYZoomLevel?(x: number, y: number, zoomLevel: number): NSArray<MLNShape>;
}
declare var MLNComputedShapeSourceDataSource: {
	prototype: MLNComputedShapeSourceDataSource;
};

interface MLNCoordinateBounds {
	sw: CLLocationCoordinate2D;
	ne: CLLocationCoordinate2D;
}
declare var MLNCoordinateBounds: interop.StructType<MLNCoordinateBounds>;

declare class MLNCoordinateFormatter extends NSFormatter {
	static alloc(): MLNCoordinateFormatter; // inherited from NSObject

	static new(): MLNCoordinateFormatter; // inherited from NSObject

	allowsMinutes: boolean;

	allowsSeconds: boolean;

	unitStyle: NSFormattingUnitStyle;

	stringFromCoordinate(coordinate: CLLocationCoordinate2D): string;
}

interface MLNCoordinateQuad {
	topLeft: CLLocationCoordinate2D;
	bottomLeft: CLLocationCoordinate2D;
	bottomRight: CLLocationCoordinate2D;
	topRight: CLLocationCoordinate2D;
}
declare var MLNCoordinateQuad: interop.StructType<MLNCoordinateQuad>;

interface MLNCoordinateSpan {
	latitudeDelta: number;
	longitudeDelta: number;
}
declare var MLNCoordinateSpan: interop.StructType<MLNCoordinateSpan>;

declare var MLNCoordinateSpanZero: MLNCoordinateSpan;

declare class MLNCustomDrawableStyleLayer extends MLNStyleLayer {
	static alloc(): MLNCustomDrawableStyleLayer; // inherited from NSObject

	static new(): MLNCustomDrawableStyleLayer; // inherited from NSObject
}

declare class MLNCustomStyleLayer extends MLNStyleLayer {
	static alloc(): MLNCustomStyleLayer; // inherited from NSObject

	static new(): MLNCustomStyleLayer; // inherited from NSObject

	readonly context: EAGLContext;

	renderEncoder: MTLRenderCommandEncoder;

	readonly style: MLNStyle;

	constructor(o: { identifier: string });

	didMoveToMapView(mapView: MLNMapView): void;

	drawInMapViewWithContext(mapView: MLNMapView, context: MLNStyleLayerDrawingContext): void;

	initWithIdentifier(identifier: string): this;

	setNeedsDisplay(): void;

	willMoveFromMapView(mapView: MLNMapView): void;
}

declare const enum MLNDEMEncoding {
	Mapbox = 0,

	Terrarium = 1,
}

declare class MLNDefaultStyle extends NSObject {
	static alloc(): MLNDefaultStyle; // inherited from NSObject

	static new(): MLNDefaultStyle; // inherited from NSObject

	name: string;

	url: NSURL;

	version: number;
}

declare class MLNDistanceFormatter extends NSLengthFormatter {
	static alloc(): MLNDistanceFormatter; // inherited from NSObject

	static new(): MLNDistanceFormatter; // inherited from NSObject

	stringFromDistance(distance: number): string;
}

declare class MLNEmptyFeature extends MLNShape implements MLNFeature {
	static alloc(): MLNEmptyFeature; // inherited from NSObject

	static new(): MLNEmptyFeature; // inherited from NSObject

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum MLNErrorCode {
	Unknown = -1,

	NotFound = 1,

	BadServerResponse = 2,

	ConnectionFailed = 3,

	ParseStyleFailed = 4,

	LoadStyleFailed = 5,

	SnapshotFailed = 6,

	SourceIsInUseCannotRemove = 7,

	SourceIdentifierMismatch = 8,

	ModifyingOfflineStorageFailed = 9,

	SourceCannotBeRemovedFromStyle = 10,

	RenderingError = 11,
}

declare var MLNErrorDomain: string;

declare var MLNExpressionInterpolationModeCubicBezier: string;

declare var MLNExpressionInterpolationModeExponential: string;

declare var MLNExpressionInterpolationModeLinear: string;

interface MLNFeature extends MLNAnnotation {
	attributes: NSDictionary<string, any>;

	identifier: any;

	attributeForKey(key: string): any;

	geoJSONDictionary(): NSDictionary<string, any>;
}
declare var MLNFeature: {
	prototype: MLNFeature;
};

declare class MLNFillExtrusionStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNFillExtrusionStyleLayer; // inherited from NSObject

	static new(): MLNFillExtrusionStyleLayer; // inherited from NSObject

	fillExtrusionBase: NSExpression;

	fillExtrusionBaseTransition: MLNTransition;

	fillExtrusionColor: NSExpression;

	fillExtrusionColorTransition: MLNTransition;

	fillExtrusionHasVerticalGradient: NSExpression;

	fillExtrusionHeight: NSExpression;

	fillExtrusionHeightTransition: MLNTransition;

	fillExtrusionOpacity: NSExpression;

	fillExtrusionOpacityTransition: MLNTransition;

	fillExtrusionPattern: NSExpression;

	fillExtrusionPatternTransition: MLNTransition;

	fillExtrusionTranslation: NSExpression;

	fillExtrusionTranslationAnchor: NSExpression;

	fillExtrusionTranslationTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNFillExtrusionTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

declare class MLNFillStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNFillStyleLayer; // inherited from NSObject

	static new(): MLNFillStyleLayer; // inherited from NSObject

	fillAntialiased: NSExpression;

	fillColor: NSExpression;

	fillColorTransition: MLNTransition;

	fillOpacity: NSExpression;

	fillOpacityTransition: MLNTransition;

	fillOutlineColor: NSExpression;

	fillOutlineColorTransition: MLNTransition;

	fillPattern: NSExpression;

	fillPatternTransition: MLNTransition;

	fillSortKey: NSExpression;

	fillTranslation: NSExpression;

	fillTranslationAnchor: NSExpression;

	fillTranslationTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNFillTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

declare var MLNFontColorAttribute: string;

declare var MLNFontNamesAttribute: string;

declare var MLNFontScaleAttribute: string;

declare class MLNForegroundStyleLayer extends MLNStyleLayer {
	static alloc(): MLNForegroundStyleLayer; // inherited from NSObject

	static new(): MLNForegroundStyleLayer; // inherited from NSObject

	readonly sourceIdentifier: string;
}

declare class MLNHeatmapStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNHeatmapStyleLayer; // inherited from NSObject

	static new(): MLNHeatmapStyleLayer; // inherited from NSObject

	heatmapColor: NSExpression;

	heatmapIntensity: NSExpression;

	heatmapIntensityTransition: MLNTransition;

	heatmapOpacity: NSExpression;

	heatmapOpacityTransition: MLNTransition;

	heatmapRadius: NSExpression;

	heatmapRadiusTransition: MLNTransition;

	heatmapWeight: NSExpression;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNHillshadeIlluminationAnchor {
	Map = 0,

	Viewport = 1,
}

declare class MLNHillshadeStyleLayer extends MLNForegroundStyleLayer {
	static alloc(): MLNHillshadeStyleLayer; // inherited from NSObject

	static new(): MLNHillshadeStyleLayer; // inherited from NSObject

	hillshadeAccentColor: NSExpression;

	hillshadeAccentColorTransition: MLNTransition;

	hillshadeExaggeration: NSExpression;

	hillshadeExaggerationTransition: MLNTransition;

	hillshadeHighlightColor: NSExpression;

	hillshadeHighlightColorTransition: MLNTransition;

	hillshadeIlluminationAnchor: NSExpression;

	hillshadeIlluminationDirection: NSExpression;

	hillshadeShadowColor: NSExpression;

	hillshadeShadowColorTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNIconAnchor {
	Center = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	TopLeft = 5,

	TopRight = 6,

	BottomLeft = 7,

	BottomRight = 8,
}

declare const enum MLNIconPitchAlignment {
	Map = 0,

	Viewport = 1,

	Auto = 2,
}

declare const enum MLNIconRotationAlignment {
	Map = 0,

	Viewport = 1,

	Auto = 2,
}

declare const enum MLNIconTextFit {
	None = 0,

	Width = 1,

	Height = 2,

	Both = 3,
}

declare const enum MLNIconTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

declare class MLNImageSource extends MLNSource {
	static alloc(): MLNImageSource; // inherited from NSObject

	static new(): MLNImageSource; // inherited from NSObject

	URL: NSURL;

	coordinates: MLNCoordinateQuad;

	image: UIImage;

	constructor(o: { identifier: string; coordinateQuad: MLNCoordinateQuad; image: UIImage });

	constructor(o: { identifier: string; coordinateQuad: MLNCoordinateQuad; URL: NSURL });

	initWithIdentifierCoordinateQuadImage(identifier: string, coordinateQuad: MLNCoordinateQuad, image: UIImage): this;

	initWithIdentifierCoordinateQuadURL(identifier: string, coordinateQuad: MLNCoordinateQuad, url: NSURL): this;

	setCoordinates(coordinateQuad: MLNCoordinateQuad): void;

	setURL(url: NSURL): void;
}

declare var MLNInvalidDatasourceException: string;

declare var MLNInvalidOfflinePackException: string;

declare var MLNInvalidStyleLayerException: string;

declare var MLNInvalidStyleSourceException: string;

declare var MLNInvalidStyleURLException: string;

declare class MLNLight extends NSObject {
	static alloc(): MLNLight; // inherited from NSObject

	static new(): MLNLight; // inherited from NSObject

	anchor: NSExpression;

	color: NSExpression;

	colorTransition: MLNTransition;

	intensity: NSExpression;

	intensityTransition: MLNTransition;

	position: NSExpression;

	positionTransition: MLNTransition;
}

declare const enum MLNLightAnchor {
	Map = 0,

	Viewport = 1,
}

declare const enum MLNLineCap {
	Butt = 0,

	Round = 1,

	Square = 2,
}

declare const enum MLNLineJoin {
	Bevel = 0,

	Round = 1,

	Miter = 2,
}

declare class MLNLineStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNLineStyleLayer; // inherited from NSObject

	static new(): MLNLineStyleLayer; // inherited from NSObject

	lineBlur: NSExpression;

	lineBlurTransition: MLNTransition;

	lineCap: NSExpression;

	lineColor: NSExpression;

	lineColorTransition: MLNTransition;

	lineDashPattern: NSExpression;

	lineDashPatternTransition: MLNTransition;

	lineGapWidth: NSExpression;

	lineGapWidthTransition: MLNTransition;

	lineGradient: NSExpression;

	lineJoin: NSExpression;

	lineMiterLimit: NSExpression;

	lineOffset: NSExpression;

	lineOffsetTransition: MLNTransition;

	lineOpacity: NSExpression;

	lineOpacityTransition: MLNTransition;

	linePattern: NSExpression;

	linePatternTransition: MLNTransition;

	lineRoundLimit: NSExpression;

	lineSortKey: NSExpression;

	lineTranslation: NSExpression;

	lineTranslationAnchor: NSExpression;

	lineTranslationTransition: MLNTransition;

	lineWidth: NSExpression;

	lineWidthTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNLineTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

interface MLNLocationManager extends NSObjectProtocol {
	authorizationStatus: CLAuthorizationStatus;

	delegate: MLNLocationManagerDelegate;

	headingOrientation: CLDeviceOrientation;

	accuracyAuthorization?(): CLAccuracyAuthorization;

	activityType?(): CLActivityType;

	desiredAccuracy?(): number;

	dismissHeadingCalibrationDisplay(): void;

	distanceFilter?(): number;

	requestAlwaysAuthorization(): void;

	requestTemporaryFullAccuracyAuthorizationWithPurposeKey?(purposeKey: string): void;

	requestWhenInUseAuthorization(): void;

	setActivityType?(activityType: CLActivityType): void;

	setDesiredAccuracy?(desiredAccuracy: number): void;

	setDistanceFilter?(distanceFilter: number): void;

	startUpdatingHeading(): void;

	startUpdatingLocation(): void;

	stopUpdatingHeading(): void;

	stopUpdatingLocation(): void;
}
declare var MLNLocationManager: {
	prototype: MLNLocationManager;
};

interface MLNLocationManagerDelegate extends NSObjectProtocol {
	locationManagerDidChangeAuthorization(manager: MLNLocationManager): void;

	locationManagerDidFailWithError(manager: MLNLocationManager, error: NSError): void;

	locationManagerDidUpdateHeading(manager: MLNLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: MLNLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerShouldDisplayHeadingCalibration(manager: MLNLocationManager): boolean;
}
declare var MLNLocationManagerDelegate: {
	prototype: MLNLocationManagerDelegate;
};

declare class MLNLoggingConfiguration extends NSObject {
	static alloc(): MLNLoggingConfiguration; // inherited from NSObject

	static new(): MLNLoggingConfiguration; // inherited from NSObject

	loggingLevel: MLNLoggingLevel;

	static readonly sharedConfiguration: MLNLoggingConfiguration;
}

declare const enum MLNLoggingLevel {
	None = 0,

	Fault = 1,

	Error = 2,

	Warning = 3,

	Info = 4,

	Debug = 5,

	Verbose = 6,
}

declare class MLNMapCamera extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): MLNMapCamera; // inherited from NSObject

	static camera(): MLNMapCamera;

	static cameraLookingAtCenterCoordinateAcrossDistancePitchHeading(centerCoordinate: CLLocationCoordinate2D, distance: number, pitch: number, heading: number): MLNMapCamera;

	static cameraLookingAtCenterCoordinateAltitudePitchHeading(centerCoordinate: CLLocationCoordinate2D, altitude: number, pitch: number, heading: number): MLNMapCamera;

	static cameraLookingAtCenterCoordinateFromDistancePitchHeading(centerCoordinate: CLLocationCoordinate2D, distance: number, pitch: number, heading: number): MLNMapCamera;

	static cameraLookingAtCenterCoordinateFromEyeCoordinateEyeAltitude(centerCoordinate: CLLocationCoordinate2D, eyeCoordinate: CLLocationCoordinate2D, eyeAltitude: number): MLNMapCamera;

	static new(): MLNMapCamera; // inherited from NSObject

	altitude: number;

	centerCoordinate: CLLocationCoordinate2D;

	heading: number;

	pitch: number;

	viewingDistance: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqualToMapCamera(otherCamera: MLNMapCamera): boolean;
}

declare const enum MLNMapDebugMaskOptions {
	TileBoundariesMask = 2,

	TileInfoMask = 4,

	TimestampsMask = 8,

	CollisionBoxesMask = 16,

	OverdrawVisualizationMask = 32,
}

declare class MLNMapOptions extends NSObject {
	static alloc(): MLNMapOptions; // inherited from NSObject

	static new(): MLNMapOptions; // inherited from NSObject

	actionJournalOptions: MLNActionJournalOptions;

	pluginLayers: NSArray<any>;

	styleJSON: string;

	styleURL: NSURL;
}

interface MLNMapPoint {
	x: number;
	y: number;
	zoomLevel: number;
}
declare var MLNMapPoint: interop.StructType<MLNMapPoint>;

declare function MLNMapPointForCoordinate(coordinate: CLLocationCoordinate2D, zoomLevel: number): MLNMapPoint;

declare class MLNMapProjection extends NSObject {
	static alloc(): MLNMapProjection; // inherited from NSObject

	static new(): MLNMapProjection; // inherited from NSObject

	readonly camera: MLNMapCamera;

	readonly metersPerPoint: number;

	constructor(o: { mapView: MLNMapView });

	convertCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;

	convertPoint(point: CGPoint): CLLocationCoordinate2D;

	initWithMapView(mapView: MLNMapView): this;

	setCameraWithEdgeInsets(camera: MLNMapCamera, insets: UIEdgeInsets): void;

	setVisibleCoordinateBoundsEdgePadding(bounds: MLNCoordinateBounds, insets: UIEdgeInsets): void;
}

declare class MLNMapSnapshot extends NSObject {
	static alloc(): MLNMapSnapshot; // inherited from NSObject

	static new(): MLNMapSnapshot; // inherited from NSObject

	readonly image: UIImage;

	coordinateForPoint(point: CGPoint): CLLocationCoordinate2D;

	pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;
}

declare class MLNMapSnapshotOptions extends NSObject implements NSCopying {
	static alloc(): MLNMapSnapshotOptions; // inherited from NSObject

	static new(): MLNMapSnapshotOptions; // inherited from NSObject

	camera: MLNMapCamera;

	coordinateBounds: MLNCoordinateBounds;

	scale: number;

	showsLogo: boolean;

	readonly size: CGSize;

	readonly styleURL: NSURL;

	zoomLevel: number;

	constructor(o: { styleURL: NSURL; camera: MLNMapCamera; size: CGSize });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithStyleURLCameraSize(styleURL: NSURL, camera: MLNMapCamera, size: CGSize): this;
}

declare class MLNMapSnapshotOverlay extends NSObject {
	static alloc(): MLNMapSnapshotOverlay; // inherited from NSObject

	static new(): MLNMapSnapshotOverlay; // inherited from NSObject

	readonly context: any;

	coordinateForPoint(point: CGPoint): CLLocationCoordinate2D;

	pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;
}

declare class MLNMapSnapshotter extends NSObject implements MLNStylable {
	static alloc(): MLNMapSnapshotter; // inherited from NSObject

	static new(): MLNMapSnapshotter; // inherited from NSObject

	delegate: MLNMapSnapshotterDelegate;

	readonly loading: boolean;

	options: MLNMapSnapshotOptions;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly style: MLNStyle; // inherited from MLNStylable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { options: MLNMapSnapshotOptions });

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithOptions(options: MLNMapSnapshotOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startWithCompletionHandler(completionHandler: (p1: MLNMapSnapshot, p2: NSError) => void): void;

	startWithOverlayHandlerCompletionHandler(overlayHandler: (p1: MLNMapSnapshotOverlay) => void, completionHandler: (p1: MLNMapSnapshot, p2: NSError) => void): void;

	startWithQueueCompletionHandler(queue: interop.Pointer | interop.Reference<any>, completionHandler: (p1: MLNMapSnapshot, p2: NSError) => void): void;
}

interface MLNMapSnapshotterDelegate extends NSObjectProtocol {
	mapSnapshotterDidFailLoadingImageNamed?(snapshotter: MLNMapSnapshotter, name: string): void;

	mapSnapshotterDidFailWithError?(snapshotter: MLNMapSnapshotter, error: NSError): void;

	mapSnapshotterDidFinishLoadingStyle?(snapshotter: MLNMapSnapshotter, style: MLNStyle): void;
}
declare var MLNMapSnapshotterDelegate: {
	prototype: MLNMapSnapshotterDelegate;
};

declare class MLNMapView extends UIView implements MLNStylable {
	static alloc(): MLNMapView; // inherited from NSObject

	static appearance(): MLNMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLNMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLNMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLNMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNMapView; // inherited from UIAppearance

	static new(): MLNMapView; // inherited from NSObject

	allowsRotating: boolean;

	allowsScrolling: boolean;

	allowsTilting: boolean;

	allowsZooming: boolean;

	anchorRotateOrZoomGesturesToCenterCoordinate: boolean;

	readonly annotations: NSArray<MLNAnnotation>;

	readonly attributionButton: UIButton;

	attributionButtonMargins: CGPoint;

	attributionButtonPosition: MLNOrnamentPosition;

	automaticallyAdjustsContentInset: boolean;

	camera: MLNMapCamera;

	readonly cameraEdgeInsets: UIEdgeInsets;

	centerCoordinate: CLLocationCoordinate2D;

	readonly compassView: MLNCompassButton;

	compassViewMargins: CGPoint;

	compassViewPosition: MLNOrnamentPosition;

	contentInset: UIEdgeInsets;

	debugMask: MLNMapDebugMaskOptions;

	decelerationRate: number;

	delegate: MLNMapViewDelegate;

	direction: number;

	displayHeadingCalibration: boolean;

	dynamicNavigationCameraAnimationDuration: boolean;

	hapticFeedbackEnabled: boolean;

	latitude: number;

	locationManager: MLNLocationManager;

	readonly logoView: UIImageView;

	logoViewMargins: CGPoint;

	logoViewPosition: MLNOrnamentPosition;

	longitude: number;

	maximumPitch: number;

	maximumScreenBounds: MLNCoordinateBounds;

	maximumZoomLevel: number;

	minimumPitch: number;

	minimumZoomLevel: number;

	readonly overlays: NSArray<MLNOverlay>;

	panScrollingMode: MLNPanScrollingMode;

	pitchEnabled: boolean;

	preferredFramesPerSecond: number;

	prefetchesTiles: boolean;

	quickZoomReversed: boolean;

	rotateEnabled: boolean;

	readonly scaleBar: MLNScaleBar;

	scaleBarMargins: CGPoint;

	scaleBarPosition: MLNOrnamentPosition;

	scaleBarShouldShowDarkStyles: boolean;

	scaleBarUsesMetricSystem: boolean;

	scrollEnabled: boolean;

	selectedAnnotations: NSArray<MLNAnnotation>;

	shouldRequestAuthorizationToUseLocationServices: boolean;

	showsAttributionButton: boolean;

	showsCompassView: boolean;

	showsHeading: boolean;

	showsLogoView: boolean;

	showsScale: boolean;

	showsUserHeadingIndicator: boolean;

	showsUserLocation: boolean;

	styleJSON: string;

	styleURL: NSURL;

	targetCoordinate: CLLocationCoordinate2D;

	tileCacheEnabled: boolean;

	tileLodMinRadius: number;

	tileLodPitchThreshold: number;

	tileLodScale: number;

	tileLodZoomShift: number;

	readonly userLocation: MLNUserLocation;

	userLocationVerticalAlignment: MLNAnnotationVerticalAlignment;

	readonly userLocationVisible: boolean;

	userTrackingMode: MLNUserTrackingMode;

	readonly visibleAnnotations: NSArray<MLNAnnotation>;

	visibleCoordinateBounds: MLNCoordinateBounds;

	zoomEnabled: boolean;

	zoomLevel: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly style: MLNStyle; // inherited from MLNStylable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; options: MLNMapOptions });

	constructor(o: { frame: CGRect; styleJSON: string });

	constructor(o: { frame: CGRect; styleURL: NSURL });

	addAnnotation(annotation: MLNAnnotation): void;

	addAnnotations(annotations: NSArray<MLNAnnotation> | MLNAnnotation[]): void;

	addOverlay(overlay: MLNOverlay): void;

	addOverlays(overlays: NSArray<MLNOverlay> | MLNOverlay[]): void;

	addPluginLayerType(pluginLayerClass: typeof NSObject): void;

	anchorPointForGesture(gesture: UIGestureRecognizer): CGPoint;

	backendResource(): MLNBackendResource;

	cameraFittingCoordinateBoundsEdgePadding(camera: MLNMapCamera, bounds: MLNCoordinateBounds, insets: UIEdgeInsets): MLNMapCamera;

	cameraFittingShapeEdgePadding(camera: MLNMapCamera, shape: MLNShape, insets: UIEdgeInsets): MLNMapCamera;

	cameraThatFitsCoordinateBounds(bounds: MLNCoordinateBounds): MLNMapCamera;

	cameraThatFitsCoordinateBoundsEdgePadding(bounds: MLNCoordinateBounds, insets: UIEdgeInsets): MLNMapCamera;

	cameraThatFitsShapeDirectionEdgePadding(shape: MLNShape, direction: number, insets: UIEdgeInsets): MLNMapCamera;

	class(): typeof NSObject;

	clearActionJournalLog(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertCoordinateBoundsToRectToView(bounds: MLNCoordinateBounds, view: UIView): CGRect;

	convertCoordinateToPointToView(coordinate: CLLocationCoordinate2D, view: UIView): CGPoint;

	convertPointToCoordinateFromView(point: CGPoint, view: UIView): CLLocationCoordinate2D;

	convertRectToCoordinateBoundsFromView(rect: CGRect, view: UIView): MLNCoordinateBounds;

	dequeueReusableAnnotationImageWithIdentifier(identifier: string): MLNAnnotationImage;

	dequeueReusableAnnotationViewWithIdentifier(identifier: string): MLNAnnotationView;

	deselectAnnotationAnimated(annotation: MLNAnnotation, animated: boolean): void;

	disableLocationManager(): void;

	enableRenderingStatsView(value: boolean): void;

	flyToCameraCompletionHandler(camera: MLNMapCamera, completion: () => void): void;

	flyToCameraEdgePaddingWithDurationCompletionHandler(camera: MLNMapCamera, insets: UIEdgeInsets, duration: number, completion: () => void): void;

	flyToCameraWithDurationCompletionHandler(camera: MLNMapCamera, duration: number, completion: () => void): void;

	flyToCameraWithDurationPeakAltitudeCompletionHandler(camera: MLNMapCamera, duration: number, peakAltitude: number, completion: () => void): void;

	getActionJournalLog(): NSArray<string>;

	getActionJournalLogFiles(): NSArray<string>;

	initWithFrameOptions(frame: CGRect, options: MLNMapOptions): this;

	initWithFrameStyleJSON(frame: CGRect, styleJSON: string): this;

	initWithFrameStyleURL(frame: CGRect, styleURL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isRenderingStatsViewEnabled(): boolean;

	mapProjection(): MLNMapProjection;

	metersPerPointAtLatitude(latitude: number): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadStyle(sender: any): void;

	removeAnnotation(annotation: MLNAnnotation): void;

	removeAnnotations(annotations: NSArray<MLNAnnotation> | MLNAnnotation[]): void;

	removeOverlay(overlay: MLNOverlay): void;

	removeOverlays(overlays: NSArray<MLNOverlay> | MLNOverlay[]): void;

	resetNorth(): void;

	resetPosition(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectAnnotationAnimated(annotation: MLNAnnotation, animated: boolean): void;

	selectAnnotationAnimatedCompletionHandler(annotation: MLNAnnotation, animated: boolean, completion: () => void): void;

	selectAnnotationMoveIntoViewAnimateSelectionCompletionHandler(annotation: MLNAnnotation, moveIntoView: boolean, animateSelection: boolean, completion: () => void): void;

	self(): this;

	setCameraAnimated(camera: MLNMapCamera, animated: boolean): void;

	setCameraWithDurationAnimationTimingFunction(camera: MLNMapCamera, duration: number, _function: CAMediaTimingFunction): void;

	setCameraWithDurationAnimationTimingFunctionCompletionHandler(camera: MLNMapCamera, duration: number, _function: CAMediaTimingFunction, completion: () => void): void;

	setCameraWithDurationAnimationTimingFunctionEdgePaddingCompletionHandler(camera: MLNMapCamera, duration: number, _function: CAMediaTimingFunction, edgePadding: UIEdgeInsets, completion: () => void): void;

	setCenterCoordinateAnimated(coordinate: CLLocationCoordinate2D, animated: boolean): void;

	setCenterCoordinateZoomLevelAnimated(centerCoordinate: CLLocationCoordinate2D, zoomLevel: number, animated: boolean): void;

	setCenterCoordinateZoomLevelDirectionAnimated(centerCoordinate: CLLocationCoordinate2D, zoomLevel: number, direction: number, animated: boolean): void;

	setCenterCoordinateZoomLevelDirectionAnimatedCompletionHandler(centerCoordinate: CLLocationCoordinate2D, zoomLevel: number, direction: number, animated: boolean, completion: () => void): void;

	setContentInsetAnimated(contentInset: UIEdgeInsets, animated: boolean): void;

	setContentInsetAnimatedCompletionHandler(contentInset: UIEdgeInsets, animated: boolean, completion: () => void): void;

	setDirectionAnimated(direction: number, animated: boolean): void;

	setTargetCoordinateAnimated(targetCoordinate: CLLocationCoordinate2D, animated: boolean): void;

	setTargetCoordinateAnimatedCompletionHandler(targetCoordinate: CLLocationCoordinate2D, animated: boolean, completion: () => void): void;

	setUserLocationVerticalAlignmentAnimated(alignment: MLNAnnotationVerticalAlignment, animated: boolean): void;

	setUserTrackingModeAnimated(mode: MLNUserTrackingMode, animated: boolean): void;

	setUserTrackingModeAnimatedCompletionHandler(mode: MLNUserTrackingMode, animated: boolean, completion: () => void): void;

	setVisibleCoordinateBoundsAnimated(bounds: MLNCoordinateBounds, animated: boolean): void;

	setVisibleCoordinateBoundsEdgePaddingAnimated(bounds: MLNCoordinateBounds, insets: UIEdgeInsets, animated: boolean): void;

	setVisibleCoordinateBoundsEdgePaddingAnimatedCompletionHandler(bounds: MLNCoordinateBounds, insets: UIEdgeInsets, animated: boolean, completion: () => void): void;

	setVisibleCoordinatesCountEdgePaddingAnimated(coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number, insets: UIEdgeInsets, animated: boolean): void;

	setVisibleCoordinatesCountEdgePaddingDirectionDurationAnimationTimingFunctionCompletionHandler(coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number, insets: UIEdgeInsets, direction: number, duration: number, _function: CAMediaTimingFunction, completion: () => void): void;

	setZoomLevelAnimated(zoomLevel: number, animated: boolean): void;

	showAnnotationsAnimated(annotations: NSArray<MLNAnnotation> | MLNAnnotation[], animated: boolean): void;

	showAnnotationsEdgePaddingAnimated(annotations: NSArray<MLNAnnotation> | MLNAnnotation[], insets: UIEdgeInsets, animated: boolean): void;

	showAnnotationsEdgePaddingAnimatedCompletionHandler(annotations: NSArray<MLNAnnotation> | MLNAnnotation[], insets: UIEdgeInsets, animated: boolean, completion: () => void): void;

	showAttribution(sender: any): void;

	triggerRepaint(): void;

	updateUserLocationAnnotationView(): void;

	updateUserLocationAnnotationViewAnimatedWithDuration(duration: number): void;

	viewForAnnotation(annotation: MLNAnnotation): MLNAnnotationView;

	visibleAnnotationsInRect(rect: CGRect): NSArray<MLNAnnotation>;

	visibleFeaturesAtPoint(point: CGPoint): NSArray<MLNFeature>;

	visibleFeaturesAtPointInStyleLayersWithIdentifiers(point: CGPoint, styleLayerIdentifiers: NSSet<string>): NSArray<MLNFeature>;

	visibleFeaturesAtPointInStyleLayersWithIdentifiersPredicate(point: CGPoint, styleLayerIdentifiers: NSSet<string>, predicate: NSPredicate): NSArray<MLNFeature>;

	visibleFeaturesInRect(rect: CGRect): NSArray<MLNFeature>;

	visibleFeaturesInRectInStyleLayersWithIdentifiers(rect: CGRect, styleLayerIdentifiers: NSSet<string>): NSArray<MLNFeature>;

	visibleFeaturesInRectInStyleLayersWithIdentifiersPredicate(rect: CGRect, styleLayerIdentifiers: NSSet<string>, predicate: NSPredicate): NSArray<MLNFeature>;
}

declare var MLNMapViewDecelerationRateFast: number;

declare var MLNMapViewDecelerationRateImmediate: number;

declare var MLNMapViewDecelerationRateNormal: number;

interface MLNMapViewDelegate extends NSObjectProtocol {
	mapViewAlphaForShapeAnnotation?(mapView: MLNMapView, annotation: MLNShape): number;

	mapViewAnnotationCalloutAccessoryControlTapped?(mapView: MLNMapView, annotation: MLNAnnotation, control: UIControl): void;

	mapViewAnnotationCanShowCallout?(mapView: MLNMapView, annotation: MLNAnnotation): boolean;

	mapViewCalloutViewForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): MLNCalloutView;

	mapViewDidAddAnnotationViews?(mapView: MLNMapView, annotationViews: NSArray<MLNAnnotationView> | MLNAnnotationView[]): void;

	mapViewDidBecomeIdle?(mapView: MLNMapView): void;

	mapViewDidChangeLocationManagerAuthorization?(mapView: MLNMapView, manager: MLNLocationManager): void;

	mapViewDidChangeUserTrackingModeAnimated?(mapView: MLNMapView, mode: MLNUserTrackingMode, animated: boolean): void;

	mapViewDidDeselectAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): void;

	mapViewDidDeselectAnnotationView?(mapView: MLNMapView, annotationView: MLNAnnotationView): void;

	mapViewDidFailLoadingMapWithError?(mapView: MLNMapView, error: NSError): void;

	mapViewDidFailToLoadImage?(mapView: MLNMapView, imageName: string): UIImage;

	mapViewDidFailToLocateUserWithError?(mapView: MLNMapView, error: NSError): void;

	mapViewDidFinishLoadingMap?(mapView: MLNMapView): void;

	mapViewDidFinishLoadingStyle?(mapView: MLNMapView, style: MLNStyle): void;

	mapViewDidFinishRenderingFrameFullyRendered?(mapView: MLNMapView, fullyRendered: boolean): void;

	mapViewDidFinishRenderingFrameFullyRenderedFrameEncodingTimeFrameRenderingTime?(mapView: MLNMapView, fullyRendered: boolean, frameEncodingTime: number, frameRenderingTime: number): void;

	mapViewDidFinishRenderingFrameFullyRenderedRenderingStats?(mapView: MLNMapView, fullyRendered: boolean, renderingStats: MLNRenderingStats): void;

	mapViewDidFinishRenderingMapFullyRendered?(mapView: MLNMapView, fullyRendered: boolean): void;

	mapViewDidSelectAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): void;

	mapViewDidSelectAnnotationView?(mapView: MLNMapView, annotationView: MLNAnnotationView): void;

	mapViewDidStopLocatingUser?(mapView: MLNMapView): void;

	mapViewDidUpdateUserLocation?(mapView: MLNMapView, userLocation: MLNUserLocation): void;

	mapViewFillColorForPolygonAnnotation?(mapView: MLNMapView, annotation: MLNPolygon): UIColor;

	mapViewGlyphsDidErrorRange?(mapView: MLNMapView, fontStack: NSArray<string> | string[], range: NSRange): void;

	mapViewGlyphsDidLoadRange?(mapView: MLNMapView, fontStack: NSArray<string> | string[], range: NSRange): void;

	mapViewGlyphsWillLoadRange?(mapView: MLNMapView, fontStack: NSArray<string> | string[], range: NSRange): void;

	mapViewImageForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): MLNAnnotationImage;

	mapViewLeftCalloutAccessoryViewForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): UIView;

	mapViewLineWidthForPolylineAnnotation?(mapView: MLNMapView, annotation: MLNPolyline): number;

	mapViewRegionDidChangeAnimated?(mapView: MLNMapView, animated: boolean): void;

	mapViewRegionDidChangeWithReasonAnimated?(mapView: MLNMapView, reason: MLNCameraChangeReason, animated: boolean): void;

	mapViewRegionIsChanging?(mapView: MLNMapView): void;

	mapViewRegionIsChangingWithReason?(mapView: MLNMapView, reason: MLNCameraChangeReason): void;

	mapViewRegionWillChangeAnimated?(mapView: MLNMapView, animated: boolean): void;

	mapViewRegionWillChangeWithReasonAnimated?(mapView: MLNMapView, reason: MLNCameraChangeReason, animated: boolean): void;

	mapViewRightCalloutAccessoryViewForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): UIView;

	mapViewShaderDidCompileBackendDefines?(mapView: MLNMapView, id: number, backend: number, defines: string): void;

	mapViewShaderDidFailCompileBackendDefines?(mapView: MLNMapView, id: number, backend: number, defines: string): void;

	mapViewShaderWillCompileBackendDefines?(mapView: MLNMapView, id: number, backend: number, defines: string): void;

	mapViewShapeAnnotationIsEnabled?(mapView: MLNMapView, annotation: MLNShape): boolean;

	mapViewShouldChangeFromCameraToCamera?(mapView: MLNMapView, oldCamera: MLNMapCamera, newCamera: MLNMapCamera): boolean;

	mapViewShouldChangeFromCameraToCameraReason?(mapView: MLNMapView, oldCamera: MLNMapCamera, newCamera: MLNMapCamera, reason: MLNCameraChangeReason): boolean;

	mapViewShouldRemoveStyleImage?(mapView: MLNMapView, imageName: string): boolean;

	mapViewSourceDidChange?(mapView: MLNMapView, source: MLNSource): void;

	mapViewSpriteDidErrorUrl?(mapView: MLNMapView, id: string, url: string): void;

	mapViewSpriteDidLoadUrl?(mapView: MLNMapView, id: string, url: string): void;

	mapViewSpriteWillLoadUrl?(mapView: MLNMapView, id: string, url: string): void;

	mapViewStrokeColorForShapeAnnotation?(mapView: MLNMapView, annotation: MLNShape): UIColor;

	mapViewStyleForDefaultUserLocationAnnotationView?(mapView: MLNMapView): MLNUserLocationAnnotationViewStyle;

	mapViewTapOnCalloutForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): void;

	mapViewTileDidTriggerActionXYZWrapOverscaledZSourceID?(mapView: MLNMapView, operation: MLNTileOperation, x: number, y: number, z: number, wrap: number, overscaledZ: number, sourceID: string): void;

	mapViewUserLocationAnchorPoint?(mapView: MLNMapView): CGPoint;

	mapViewViewForAnnotation?(mapView: MLNMapView, annotation: MLNAnnotation): MLNAnnotationView;

	mapViewWillStartLoadingMap?(mapView: MLNMapView): void;

	mapViewWillStartLocatingUser?(mapView: MLNMapView): void;

	mapViewWillStartRenderingFrame?(mapView: MLNMapView): void;

	mapViewWillStartRenderingMap?(mapView: MLNMapView): void;
}
declare var MLNMapViewDelegate: {
	prototype: MLNMapViewDelegate;
};

declare var MLNMapViewPreferredFramesPerSecondDefault: number;

declare var MLNMapViewPreferredFramesPerSecondLowPower: number;

declare var MLNMapViewPreferredFramesPerSecondMaximum: number;

interface MLNMatrix4 {
	m00: number;
	m01: number;
	m02: number;
	m03: number;
	m10: number;
	m11: number;
	m12: number;
	m13: number;
	m20: number;
	m21: number;
	m22: number;
	m23: number;
	m30: number;
	m31: number;
	m32: number;
	m33: number;
}
declare var MLNMatrix4: interop.StructType<MLNMatrix4>;

declare var MLNMissingLocationServicesUsageDescriptionException: string;

declare class MLNMultiPoint extends MLNShape {
	static alloc(): MLNMultiPoint; // inherited from NSObject

	static new(): MLNMultiPoint; // inherited from NSObject

	readonly coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>;

	readonly pointCount: number;

	appendCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): void;

	getCoordinatesRange(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, range: NSRange): void;

	insertCoordinatesCountAtIndex(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number, index: number): void;

	removeCoordinatesInRange(range: NSRange): void;

	replaceCoordinatesInRangeWithCoordinates(range: NSRange, coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>): void;

	replaceCoordinatesInRangeWithCoordinatesCount(range: NSRange, coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): void;

	setCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): void;
}

declare class MLNMultiPolygon extends MLNShape implements MLNOverlay {
	static alloc(): MLNMultiPolygon; // inherited from NSObject

	static multiPolygonWithPolygons(polygons: NSArray<MLNPolygon> | MLNPolygon[]): MLNMultiPolygon;

	static new(): MLNMultiPolygon; // inherited from NSObject

	readonly polygons: NSArray<MLNPolygon>;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly overlayBounds: MLNCoordinateBounds; // inherited from MLNOverlay

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNMultiPolygonFeature extends MLNMultiPolygon implements MLNFeature {
	static alloc(): MLNMultiPolygonFeature; // inherited from NSObject

	static multiPolygonWithPolygons(polygons: NSArray<MLNPolygon> | MLNPolygon[]): MLNMultiPolygonFeature; // inherited from MLNMultiPolygon

	static new(): MLNMultiPolygonFeature; // inherited from NSObject

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNMultiPolyline extends MLNShape implements MLNOverlay {
	static alloc(): MLNMultiPolyline; // inherited from NSObject

	static multiPolylineWithPolylines(polylines: NSArray<MLNPolyline> | MLNPolyline[]): MLNMultiPolyline;

	static new(): MLNMultiPolyline; // inherited from NSObject

	readonly polylines: NSArray<MLNPolyline>;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly overlayBounds: MLNCoordinateBounds; // inherited from MLNOverlay

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNMultiPolylineFeature extends MLNMultiPolyline implements MLNFeature {
	static alloc(): MLNMultiPolylineFeature; // inherited from NSObject

	static multiPolylineWithPolylines(polylines: NSArray<MLNPolyline> | MLNPolyline[]): MLNMultiPolylineFeature; // inherited from MLNMultiPolyline

	static new(): MLNMultiPolylineFeature; // inherited from NSObject

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNNetworkConfiguration extends NSObject {
	static alloc(): MLNNetworkConfiguration; // inherited from NSObject

	static new(): MLNNetworkConfiguration; // inherited from NSObject

	delegate: MLNNetworkConfigurationDelegate;

	sessionConfiguration: NSURLSessionConfiguration;

	static readonly sharedManager: MLNNetworkConfiguration;
}

interface MLNNetworkConfigurationDelegate extends NSObjectProtocol {
	sessionForNetworkConfiguration?(configuration: MLNNetworkConfiguration): NSURLSession;
}
declare var MLNNetworkConfigurationDelegate: {
	prototype: MLNNetworkConfigurationDelegate;
};

declare class MLNOfflinePack extends NSObject {
	static alloc(): MLNOfflinePack; // inherited from NSObject

	static new(): MLNOfflinePack; // inherited from NSObject

	readonly context: NSData;

	readonly progress: MLNOfflinePackProgress;

	readonly region: MLNOfflineRegion;

	readonly state: MLNOfflinePackState;

	requestProgress(): void;

	resume(): void;

	setContextCompletionHandler(context: NSData, completion: (p1: NSError) => void): void;

	suspend(): void;
}

declare var MLNOfflinePackErrorNotification: string;

declare var MLNOfflinePackMaximumMapboxTilesReachedNotification: string;

interface MLNOfflinePackProgress {
	countOfResourcesCompleted: number;
	countOfBytesCompleted: number;
	countOfTilesCompleted: number;
	countOfTileBytesCompleted: number;
	countOfResourcesExpected: number;
	maximumResourcesExpected: number;
}
declare var MLNOfflinePackProgress: interop.StructType<MLNOfflinePackProgress>;

declare var MLNOfflinePackProgressChangedNotification: string;

declare const enum MLNOfflinePackState {
	Unknown = 0,

	Inactive = 1,

	Active = 2,

	Complete = 3,

	Invalid = 4,
}

declare var MLNOfflinePackUserInfoKeyError: string;

declare var MLNOfflinePackUserInfoKeyMaximumCount: string;

declare var MLNOfflinePackUserInfoKeyProgress: string;

declare var MLNOfflinePackUserInfoKeyState: string;

interface MLNOfflineRegion extends NSObjectProtocol {
	includesIdeographicGlyphs: boolean;

	styleURL: NSURL;
}
declare var MLNOfflineRegion: {
	prototype: MLNOfflineRegion;
};

declare class MLNOfflineStorage extends NSObject {
	static alloc(): MLNOfflineStorage; // inherited from NSObject

	static new(): MLNOfflineStorage; // inherited from NSObject

	readonly countOfBytesCompleted: number;

	readonly databasePath: string;

	readonly databaseURL: NSURL;

	delegate: MLNOfflineStorageDelegate;

	readonly packs: NSArray<MLNOfflinePack>;

	static readonly sharedOfflineStorage: MLNOfflineStorage;

	addContentsOfFileWithCompletionHandler(filePath: string, completion: (p1: NSURL, p2: NSArray<MLNOfflinePack>, p3: NSError) => void): void;

	addContentsOfURLWithCompletionHandler(fileURL: NSURL, completion: (p1: NSURL, p2: NSArray<MLNOfflinePack>, p3: NSError) => void): void;

	addPackForRegionWithContextCompletionHandler(region: MLNOfflineRegion, context: NSData, completion: (p1: MLNOfflinePack, p2: NSError) => void): void;

	clearAmbientCacheWithCompletionHandler(completion: (p1: NSError) => void): void;

	invalidateAmbientCacheWithCompletionHandler(completion: (p1: NSError) => void): void;

	invalidatePackWithCompletionHandler(pack: MLNOfflinePack, completion: (p1: NSError) => void): void;

	preloadDataForURLModificationDateExpirationDateETagMustRevalidate(data: NSData, url: NSURL, modified: Date, expires: Date, eTag: string, mustRevalidate: boolean): void;

	preloadDataForURLModificationDateExpirationDateETagMustRevalidateCompletionHandler(data: NSData, url: NSURL, modified: Date, expires: Date, eTag: string, mustRevalidate: boolean, completion: (p1: NSURL, p2: NSError) => void): void;

	putResourceWithUrlDataModifiedExpiresEtagMustRevalidate(url: NSURL, data: NSData, modified: Date, expires: Date, etag: string, mustRevalidate: boolean): void;

	reloadPacks(): void;

	removePackWithCompletionHandler(pack: MLNOfflinePack, completion: (p1: NSError) => void): void;

	resetDatabaseWithCompletionHandler(completion: (p1: NSError) => void): void;

	setMaximumAllowedMapboxTiles(maximumCount: number): void;

	setMaximumAmbientCacheSizeWithCompletionHandler(cacheSize: number, completion: (p1: NSError) => void): void;
}

interface MLNOfflineStorageDelegate extends NSObjectProtocol {
	offlineStorageURLForResourceOfKindWithURL(storage: MLNOfflineStorage, kind: MLNResourceKind, url: NSURL): NSURL;
}
declare var MLNOfflineStorageDelegate: {
	prototype: MLNOfflineStorageDelegate;
};

declare const enum MLNOrnamentPosition {
	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3,
}

declare const enum MLNOrnamentVisibility {
	Adaptive = 0,

	Hidden = 1,

	Visible = 2,
}

interface MLNOverlay extends MLNAnnotation {
	overlayBounds: MLNCoordinateBounds;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;
}
declare var MLNOverlay: {
	prototype: MLNOverlay;
};

declare const enum MLNPanScrollingMode {
	Horizontal = 0,

	Vertical = 1,

	Default = 2,
}

declare class MLNPluginLayer extends NSObject {
	static alloc(): MLNPluginLayer; // inherited from NSObject

	static layerCapabilities(): MLNPluginLayerCapabilities;

	static new(): MLNPluginLayer; // inherited from NSObject

	didMoveToMapView(mapView: MLNMapView): void;

	onRenderLayerRenderEncoder(mapView: MLNMapView, renderEncoder: MTLRenderCommandEncoder): void;

	onUpdateLayer(drawingContext: MLNPluginLayerDrawingContext): void;

	onUpdateLayerProperties(layerProperties: NSDictionary<any, any>): void;
}

declare class MLNPluginLayerCapabilities extends NSObject {
	static alloc(): MLNPluginLayerCapabilities; // inherited from NSObject

	static new(): MLNPluginLayerCapabilities; // inherited from NSObject

	layerID: string;

	layerProperties: NSArray<MLNPluginLayerProperty>;

	requiresPass3D: boolean;
}

interface MLNPluginLayerDrawingContext {
	size: CGSize;
	centerCoordinate: CLLocationCoordinate2D;
	zoomLevel: number;
	direction: number;
	pitch: number;
	fieldOfView: number;
	projectionMatrix: MLNMatrix4;
	nearClippedProjMatrix: MLNMatrix4;
}
declare var MLNPluginLayerDrawingContext: interop.StructType<MLNPluginLayerDrawingContext>;

declare class MLNPluginLayerProperty extends NSObject {
	static alloc(): MLNPluginLayerProperty; // inherited from NSObject

	static new(): MLNPluginLayerProperty; // inherited from NSObject

	static propertyWithNamePropertyTypeDefaultValue(propertyName: string, propertyType: MLNPluginLayerPropertyType, defaultValue: any): MLNPluginLayerProperty;

	colorDefaultValue: UIColor;

	propertyName: string;

	propertyType: MLNPluginLayerPropertyType;

	singleFloatDefaultValue: number;
}

declare const enum MLNPluginLayerPropertyType {
	Unknown = 0,

	SingleFloat = 1,

	Color = 2,
}

declare const enum MLNPluginLayerTileKind {
	Geometry = 0,

	Raster = 1,

	RasterDEM = 2,

	NotRequired = 3,
}

declare class MLNPluginStyleLayer extends MLNStyleLayer {
	static alloc(): MLNPluginStyleLayer; // inherited from NSObject

	static new(): MLNPluginStyleLayer; // inherited from NSObject

	pluginLayer(): MLNPluginLayer;
}

declare class MLNPointAnnotation extends MLNShape {
	static alloc(): MLNPointAnnotation; // inherited from NSObject

	static new(): MLNPointAnnotation; // inherited from NSObject

	coordinate: CLLocationCoordinate2D;
}

declare class MLNPointCollection extends MLNShape implements MLNOverlay {
	static alloc(): MLNPointCollection; // inherited from NSObject

	static new(): MLNPointCollection; // inherited from NSObject

	static pointCollectionWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPointCollection;

	readonly coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>;

	readonly pointCount: number;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly overlayBounds: MLNCoordinateBounds; // inherited from MLNOverlay

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCoordinatesRange(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, range: NSRange): void;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPointCollectionFeature extends MLNPointCollection implements MLNFeature {
	static alloc(): MLNPointCollectionFeature; // inherited from NSObject

	static new(): MLNPointCollectionFeature; // inherited from NSObject

	static pointCollectionWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPointCollectionFeature; // inherited from MLNPointCollection

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPointFeature extends MLNPointAnnotation implements MLNFeature {
	static alloc(): MLNPointFeature; // inherited from NSObject

	static new(): MLNPointFeature; // inherited from NSObject

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPointFeatureCluster extends MLNPointFeature implements MLNCluster {
	static alloc(): MLNPointFeatureCluster; // inherited from NSObject

	static new(): MLNPointFeatureCluster; // inherited from NSObject

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly clusterIdentifier: number; // inherited from MLNCluster

	readonly clusterPointCount: number; // inherited from MLNCluster

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPolygon extends MLNMultiPoint implements MLNOverlay {
	static alloc(): MLNPolygon; // inherited from NSObject

	static new(): MLNPolygon; // inherited from NSObject

	static polygonWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPolygon;

	static polygonWithCoordinatesCountInteriorPolygons(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number, interiorPolygons: NSArray<MLNPolygon> | MLNPolygon[]): MLNPolygon;

	readonly interiorPolygons: NSArray<MLNPolygon>;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly overlayBounds: MLNCoordinateBounds; // inherited from MLNOverlay

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPolygonFeature extends MLNPolygon implements MLNFeature {
	static alloc(): MLNPolygonFeature; // inherited from NSObject

	static new(): MLNPolygonFeature; // inherited from NSObject

	static polygonWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPolygonFeature; // inherited from MLNPolygon

	static polygonWithCoordinatesCountInteriorPolygons(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number, interiorPolygons: NSArray<MLNPolygon> | MLNPolygon[]): MLNPolygonFeature; // inherited from MLNPolygon

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPolyline extends MLNMultiPoint implements MLNOverlay {
	static alloc(): MLNPolyline; // inherited from NSObject

	static new(): MLNPolyline; // inherited from NSObject

	static polylineWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPolyline;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly overlayBounds: MLNCoordinateBounds; // inherited from MLNOverlay

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	intersectsOverlayBounds(overlayBounds: MLNCoordinateBounds): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNPolylineFeature extends MLNPolyline implements MLNFeature {
	static alloc(): MLNPolylineFeature; // inherited from NSObject

	static new(): MLNPolylineFeature; // inherited from NSObject

	static polylineWithCoordinatesCount(coords: interop.Pointer | interop.Reference<CLLocationCoordinate2D>, count: number): MLNPolylineFeature; // inherited from MLNPolyline

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNRasterDEMSource extends MLNRasterTileSource {
	static alloc(): MLNRasterDEMSource; // inherited from NSObject

	static new(): MLNRasterDEMSource; // inherited from NSObject
}

declare const enum MLNRasterResamplingMode {
	Linear = 0,

	Nearest = 1,
}

declare class MLNRasterStyleLayer extends MLNForegroundStyleLayer {
	static alloc(): MLNRasterStyleLayer; // inherited from NSObject

	static new(): MLNRasterStyleLayer; // inherited from NSObject

	maximumRasterBrightness: NSExpression;

	maximumRasterBrightnessTransition: MLNTransition;

	minimumRasterBrightness: NSExpression;

	minimumRasterBrightnessTransition: MLNTransition;

	rasterContrast: NSExpression;

	rasterContrastTransition: MLNTransition;

	rasterFadeDuration: NSExpression;

	rasterHueRotation: NSExpression;

	rasterHueRotationTransition: MLNTransition;

	rasterOpacity: NSExpression;

	rasterOpacityTransition: MLNTransition;

	rasterResamplingMode: NSExpression;

	rasterSaturation: NSExpression;

	rasterSaturationTransition: MLNTransition;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare class MLNRasterTileSource extends MLNTileSource {
	static alloc(): MLNRasterTileSource; // inherited from NSObject

	static new(): MLNRasterTileSource; // inherited from NSObject

	constructor(o: { identifier: string; configurationURL: NSURL });

	constructor(o: { identifier: string; configurationURL: NSURL; tileSize: number });

	constructor(o: { identifier: string; tileURLTemplates: NSArray<string> | string[]; options: NSDictionary<string, any> });

	initWithIdentifierConfigurationURL(identifier: string, configurationURL: NSURL): this;

	initWithIdentifierConfigurationURLTileSize(identifier: string, configurationURL: NSURL, tileSize: number): this;

	initWithIdentifierTileURLTemplatesOptions(identifier: string, tileURLTemplates: NSArray<string> | string[], options: NSDictionary<string, any>): this;
}

declare var MLNRedundantLayerException: string;

declare var MLNRedundantLayerIdentifierException: string;

declare var MLNRedundantSourceException: string;

declare var MLNRedundantSourceIdentifierException: string;

declare class MLNRenderingStats extends NSObject {
	static alloc(): MLNRenderingStats; // inherited from NSObject

	static new(): MLNRenderingStats; // inherited from NSObject

	readonly bufferObjUpdates: number;

	readonly bufferUpdateBytes: number;

	readonly bufferUpdates: number;

	readonly encodingTime: number;

	readonly indexUpdateBytes: number;

	readonly memBuffers: number;

	readonly memIndexBuffers: number;

	readonly memTextures: number;

	readonly memUniformBuffers: number;

	readonly memVertexBuffers: number;

	readonly numActiveTextures: number;

	readonly numBuffers: number;

	readonly numCreatedTextures: number;

	readonly numDrawCalls: number;

	readonly numFrameBuffers: number;

	readonly numFrames: number;

	readonly numIndexBuffers: number;

	readonly numTextureBindings: number;

	readonly numTextureUpdates: number;

	readonly numUniformBuffers: number;

	readonly numUniformUpdates: number;

	readonly numVertexBuffers: number;

	readonly renderingTime: number;

	readonly stencilClears: number;

	readonly stencilUpdates: number;

	readonly textureUpdateBytes: number;

	readonly totalBufferObjs: number;

	readonly totalBuffers: number;

	readonly totalDrawCalls: number;

	readonly uniformUpdateBytes: number;

	readonly vertexUpdateBytes: number;
}

declare const enum MLNResourceKind {
	Unknown = 0,

	Style = 1,

	Source = 2,

	Tile = 3,

	Glyphs = 4,

	SpriteImage = 5,

	SpriteJSON = 6,

	Image = 7,
}

declare class MLNScaleBar extends UIView {
	static alloc(): MLNScaleBar; // inherited from NSObject

	static appearance(): MLNScaleBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLNScaleBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLNScaleBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNScaleBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLNScaleBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNScaleBar; // inherited from UIAppearance

	static new(): MLNScaleBar; // inherited from NSObject

	metersPerPoint: number;

	primaryColor: UIColor;

	secondaryColor: UIColor;

	shouldShowDarkStyles: boolean;

	usesMetricSystem: boolean;
}

declare class MLNSettings extends NSObject {
	static alloc(): MLNSettings; // inherited from NSObject

	static new(): MLNSettings; // inherited from NSObject

	static useWellKnownTileServer(tileServer: MLNWellKnownTileServer): void;

	static apiKey: string;

	static tileServerOptions: MLNTileServerOptions;
}

declare class MLNShape extends NSObject implements MLNAnnotation, NSSecureCoding {
	static alloc(): MLNShape; // inherited from NSObject

	static new(): MLNShape; // inherited from NSObject

	static shapeWithDataEncodingError(data: NSData, encoding: number): MLNShape;

	subtitle: string;

	title: string;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	geoJSONDataUsingEncoding(encoding: number): NSData;

	initWithCoder(coder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNShapeCollection extends MLNShape {
	static alloc(): MLNShapeCollection; // inherited from NSObject

	static new(): MLNShapeCollection; // inherited from NSObject

	static shapeCollectionWithShapes(shapes: NSArray<MLNShape> | MLNShape[]): MLNShapeCollection;

	readonly shapes: NSArray<MLNShape>;
}

declare class MLNShapeCollectionFeature extends MLNShapeCollection implements MLNFeature {
	static alloc(): MLNShapeCollectionFeature; // inherited from NSObject

	static new(): MLNShapeCollectionFeature; // inherited from NSObject

	static shapeCollectionWithShapes(shapes: NSArray<MLNShape> | MLNShape[]): MLNShapeCollectionFeature; // inherited from MLNShapeCollection

	attributes: NSDictionary<string, any>; // inherited from MLNFeature

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identifier: any; // inherited from MLNFeature

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MLNAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MLNAnnotation

	readonly; // inherited from NSObjectProtocol

	attributeForKey(key: string): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	geoJSONDictionary(): NSDictionary<string, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNShapeOfflineRegion extends NSObject implements MLNOfflineRegion, NSCopying, NSSecureCoding {
	static alloc(): MLNShapeOfflineRegion; // inherited from NSObject

	static new(): MLNShapeOfflineRegion; // inherited from NSObject

	readonly maximumZoomLevel: number;

	readonly minimumZoomLevel: number;

	readonly shape: MLNShape;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	includesIdeographicGlyphs: boolean; // inherited from MLNOfflineRegion

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly styleURL: NSURL; // inherited from MLNOfflineRegion

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { styleURL: NSURL; shape: MLNShape; fromZoomLevel: number; toZoomLevel: number });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithStyleURLShapeFromZoomLevelToZoomLevel(styleURL: NSURL, shape: MLNShape, minimumZoomLevel: number, maximumZoomLevel: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNShapeSource extends MLNSource {
	static alloc(): MLNShapeSource; // inherited from NSObject

	static new(): MLNShapeSource; // inherited from NSObject

	URL: NSURL;

	shape: MLNShape;

	constructor(o: { identifier: string; features: NSArray<MLNShape> | MLNShape[]; options: NSDictionary<string, any> });

	constructor(o: { identifier: string; shape: MLNShape; options: NSDictionary<string, any> });

	constructor(o: { identifier: string; shapes: NSArray<MLNShape> | MLNShape[]; options: NSDictionary<string, any> });

	constructor(o: { identifier: string; URL: NSURL; options: NSDictionary<string, any> });

	childrenOfCluster(cluster: MLNPointFeatureCluster): NSArray<MLNFeature>;

	featuresMatchingPredicate(predicate: NSPredicate): NSArray<MLNFeature>;

	initWithIdentifierFeaturesOptions(identifier: string, features: NSArray<MLNShape> | MLNShape[], options: NSDictionary<string, any>): this;

	initWithIdentifierShapeOptions(identifier: string, shape: MLNShape, options: NSDictionary<string, any>): this;

	initWithIdentifierShapesOptions(identifier: string, shapes: NSArray<MLNShape> | MLNShape[], options: NSDictionary<string, any>): this;

	initWithIdentifierURLOptions(identifier: string, url: NSURL, options: NSDictionary<string, any>): this;

	leavesOfClusterOffsetLimit(cluster: MLNPointFeatureCluster, offset: number, limit: number): NSArray<MLNFeature>;

	zoomLevelForExpandingCluster(cluster: MLNPointFeatureCluster): number;
}

declare var MLNShapeSourceOptionBuffer: string;

declare var MLNShapeSourceOptionClipsCoordinates: string;

declare var MLNShapeSourceOptionClusterMinPoints: string;

declare var MLNShapeSourceOptionClusterProperties: string;

declare var MLNShapeSourceOptionClusterRadius: string;

declare var MLNShapeSourceOptionClustered: string;

declare var MLNShapeSourceOptionLineDistanceMetrics: string;

declare var MLNShapeSourceOptionMaximumZoomLevel: string;

declare var MLNShapeSourceOptionMaximumZoomLevelForClustering: string;

declare var MLNShapeSourceOptionMinimumZoomLevel: string;

declare var MLNShapeSourceOptionSimplificationTolerance: string;

declare var MLNShapeSourceOptionWrapsCoordinates: string;

declare class MLNSource extends NSObject {
	static alloc(): MLNSource; // inherited from NSObject

	static new(): MLNSource; // inherited from NSObject

	identifier: string;

	constructor(o: { identifier: string });

	initWithIdentifier(identifier: string): this;
}

interface MLNSphericalPosition {
	radial: number;
	azimuthal: number;
	polar: number;
}
declare var MLNSphericalPosition: interop.StructType<MLNSphericalPosition>;

interface MLNStylable extends NSObjectProtocol {
	style: MLNStyle;
}
declare var MLNStylable: {
	prototype: MLNStylable;
};

declare class MLNStyle extends NSObject {
	static alloc(): MLNStyle; // inherited from NSObject

	static defaultStyle(): MLNDefaultStyle;

	static defaultStyleURL(): NSURL;

	static new(): MLNStyle; // inherited from NSObject

	static predefinedStyle(withStyleName: string): MLNDefaultStyle;

	static predefinedStyles(): NSArray<MLNDefaultStyle>;

	layers: NSArray<MLNStyleLayer>;

	light: MLNLight;

	readonly name: string;

	performsPlacementTransitions: boolean;

	sources: NSSet<MLNSource>;

	styleJSON: string;

	transition: MLNTransition;

	addLayer(layer: MLNStyleLayer): void;

	addSource(source: MLNSource): void;

	imageForName(name: string): UIImage;

	insertLayerAboveLayer(layer: MLNStyleLayer, sibling: MLNStyleLayer): void;

	insertLayerAtIndex(layer: MLNStyleLayer, index: number): void;

	insertLayerBelowLayer(layer: MLNStyleLayer, sibling: MLNStyleLayer): void;

	layerWithIdentifier(identifier: string): MLNStyleLayer;

	localizeLabelsIntoLocale(locale: NSLocale): void;

	removeImageForName(name: string): void;

	removeLayer(layer: MLNStyleLayer): void;

	removeSource(source: MLNSource): void;

	removeSourceError(source: MLNSource): boolean;

	setImageForName(image: UIImage, name: string): void;

	sourceWithIdentifier(identifier: string): MLNSource;
}

declare class MLNStyleLayer extends NSObject {
	static alloc(): MLNStyleLayer; // inherited from NSObject

	static new(): MLNStyleLayer; // inherited from NSObject

	readonly identifier: string;

	maximumZoomLevel: number;

	minimumZoomLevel: number;

	visible: boolean;
}

interface MLNStyleLayerDrawingContext {
	size: CGSize;
	centerCoordinate: CLLocationCoordinate2D;
	zoomLevel: number;
	direction: number;
	pitch: number;
	fieldOfView: number;
	projectionMatrix: MLNMatrix4;
}
declare var MLNStyleLayerDrawingContext: interop.StructType<MLNStyleLayerDrawingContext>;

declare const enum MLNSymbolPlacement {
	Point = 0,

	Line = 1,

	LineCenter = 2,
}

declare class MLNSymbolStyleLayer extends MLNVectorStyleLayer {
	static alloc(): MLNSymbolStyleLayer; // inherited from NSObject

	static new(): MLNSymbolStyleLayer; // inherited from NSObject

	iconAllowsOverlap: NSExpression;

	iconAnchor: NSExpression;

	iconColor: NSExpression;

	iconColorTransition: MLNTransition;

	iconHaloBlur: NSExpression;

	iconHaloBlurTransition: MLNTransition;

	iconHaloColor: NSExpression;

	iconHaloColorTransition: MLNTransition;

	iconHaloWidth: NSExpression;

	iconHaloWidthTransition: MLNTransition;

	iconIgnoresPlacement: NSExpression;

	iconImageName: NSExpression;

	iconOffset: NSExpression;

	iconOpacity: NSExpression;

	iconOpacityTransition: MLNTransition;

	iconOptional: NSExpression;

	iconPadding: NSExpression;

	iconPitchAlignment: NSExpression;

	iconRotation: NSExpression;

	iconRotationAlignment: NSExpression;

	iconScale: NSExpression;

	iconTextFit: NSExpression;

	iconTextFitPadding: NSExpression;

	iconTranslation: NSExpression;

	iconTranslationAnchor: NSExpression;

	iconTranslationTransition: MLNTransition;

	keepsIconUpright: NSExpression;

	keepsTextUpright: NSExpression;

	maximumTextAngle: NSExpression;

	maximumTextWidth: NSExpression;

	symbolAvoidsEdges: NSExpression;

	symbolPlacement: NSExpression;

	symbolScreenSpace: NSExpression;

	symbolSortKey: NSExpression;

	symbolSpacing: NSExpression;

	symbolZOrder: NSExpression;

	text: NSExpression;

	textAllowsOverlap: NSExpression;

	textAnchor: NSExpression;

	textColor: NSExpression;

	textColorTransition: MLNTransition;

	textFontNames: NSExpression;

	textFontSize: NSExpression;

	textHaloBlur: NSExpression;

	textHaloBlurTransition: MLNTransition;

	textHaloColor: NSExpression;

	textHaloColorTransition: MLNTransition;

	textHaloWidth: NSExpression;

	textHaloWidthTransition: MLNTransition;

	textIgnoresPlacement: NSExpression;

	textJustification: NSExpression;

	textLetterSpacing: NSExpression;

	textLineHeight: NSExpression;

	textOffset: NSExpression;

	textOpacity: NSExpression;

	textOpacityTransition: MLNTransition;

	textOptional: NSExpression;

	textPadding: NSExpression;

	textPitchAlignment: NSExpression;

	textRadialOffset: NSExpression;

	textRotation: NSExpression;

	textRotationAlignment: NSExpression;

	textTransform: NSExpression;

	textTranslation: NSExpression;

	textTranslationAnchor: NSExpression;

	textTranslationTransition: MLNTransition;

	textVariableAnchor: NSExpression;

	textVariableAnchorOffset: NSExpression;

	textWritingModes: NSExpression;

	constructor(o: { identifier: string; source: MLNSource });

	initWithIdentifierSource(identifier: string, source: MLNSource): this;
}

declare const enum MLNSymbolZOrder {
	Auto = 0,

	ViewportY = 1,

	Source = 2,
}

declare const enum MLNTextAnchor {
	Center = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	TopLeft = 5,

	TopRight = 6,

	BottomLeft = 7,

	BottomRight = 8,
}

declare const enum MLNTextJustification {
	Auto = 0,

	Left = 1,

	Center = 2,

	Right = 3,
}

declare const enum MLNTextPitchAlignment {
	Map = 0,

	Viewport = 1,

	Auto = 2,
}

declare const enum MLNTextRotationAlignment {
	Map = 0,

	Viewport = 1,

	Auto = 2,
}

declare const enum MLNTextTransform {
	None = 0,

	Uppercase = 1,

	Lowercase = 2,
}

declare const enum MLNTextTranslationAnchor {
	Map = 0,

	Viewport = 1,
}

declare const enum MLNTextWritingMode {
	Horizontal = 0,

	Vertical = 1,
}

declare const enum MLNTileCoordinateSystem {
	XYZ = 0,

	TMS = 1,
}

declare const enum MLNTileOperation {
	RequestedFromCache = 0,

	RequestedFromNetwork = 1,

	LoadFromNetwork = 2,

	LoadFromCache = 3,

	StartParse = 4,

	EndParse = 5,

	Error = 6,

	Cancelled = 7,

	NullOp = 8,
}

declare class MLNTilePyramidOfflineRegion extends NSObject implements MLNOfflineRegion, NSCopying, NSSecureCoding {
	static alloc(): MLNTilePyramidOfflineRegion; // inherited from NSObject

	static new(): MLNTilePyramidOfflineRegion; // inherited from NSObject

	readonly bounds: MLNCoordinateBounds;

	readonly maximumZoomLevel: number;

	readonly minimumZoomLevel: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	includesIdeographicGlyphs: boolean; // inherited from MLNOfflineRegion

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly styleURL: NSURL; // inherited from MLNOfflineRegion

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { styleURL: NSURL; bounds: MLNCoordinateBounds; fromZoomLevel: number; toZoomLevel: number });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithStyleURLBoundsFromZoomLevelToZoomLevel(styleURL: NSURL, bounds: MLNCoordinateBounds, minimumZoomLevel: number, maximumZoomLevel: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MLNTileServerOptions extends NSObject {
	static alloc(): MLNTileServerOptions; // inherited from NSObject

	static new(): MLNTileServerOptions; // inherited from NSObject

	apiKeyParameterName: string;

	baseURL: string;

	defaultStyle: MLNDefaultStyle;

	defaultStyles: NSArray<MLNDefaultStyle>;

	glyphsDomainName: string;

	glyphsTemplate: string;

	glyphsVersionPrefix: string;

	sourceDomainName: string;

	sourceTemplate: string;

	sourceVersionPrefix: string;

	spritesDomainName: string;

	spritesTemplate: string;

	spritesVersionPrefix: string;

	styleDomainName: string;

	styleTemplate: string;

	styleVersionPrefix: string;

	tileDomainName: string;

	tileTemplate: string;

	tileVersionPrefix: string;

	uriSchemeAlias: string;
}

declare class MLNTileSource extends MLNSource {
	static alloc(): MLNTileSource; // inherited from NSObject

	static new(): MLNTileSource; // inherited from NSObject

	readonly attributionHTMLString: string;

	readonly attributionInfos: NSArray<MLNAttributionInfo>;

	readonly configurationURL: NSURL;
}

declare var MLNTileSourceOptionAttributionHTMLString: string;

declare var MLNTileSourceOptionAttributionInfos: string;

declare var MLNTileSourceOptionCoordinateBounds: string;

declare var MLNTileSourceOptionDEMEncoding: string;

declare var MLNTileSourceOptionMaximumZoomLevel: string;

declare var MLNTileSourceOptionMinimumZoomLevel: string;

declare var MLNTileSourceOptionTileCoordinateSystem: string;

declare var MLNTileSourceOptionTileSize: string;

interface MLNTransition {
	duration: number;
	delay: number;
}
declare var MLNTransition: interop.StructType<MLNTransition>;

declare var MLNUnsupportedRegionTypeException: string;

declare class MLNUserLocation extends NSObject implements MLNAnnotation, NSSecureCoding {
	static alloc(): MLNUserLocation; // inherited from NSObject

	static new(): MLNUserLocation; // inherited from NSObject

	readonly heading: CLHeading;

	readonly location: CLLocation;

	subtitle: string;

	title: string;

	readonly updating: boolean;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MLNAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var MLNUserLocationAnnotationTypeException: string;

declare class MLNUserLocationAnnotationView extends MLNAnnotationView {
	static alloc(): MLNUserLocationAnnotationView; // inherited from NSObject

	static appearance(): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MLNUserLocationAnnotationView; // inherited from UIAppearance

	static new(): MLNUserLocationAnnotationView; // inherited from NSObject

	readonly hitTestLayer: CALayer;

	readonly mapView: MLNMapView;

	readonly userLocation: MLNUserLocation;

	update(): void;
}

declare class MLNUserLocationAnnotationViewStyle extends NSObject {
	static alloc(): MLNUserLocationAnnotationViewStyle; // inherited from NSObject

	static new(): MLNUserLocationAnnotationViewStyle; // inherited from NSObject

	approximateHaloBorderColor: UIColor;

	approximateHaloBorderWidth: number;

	approximateHaloFillColor: UIColor;

	approximateHaloOpacity: number;

	haloFillColor: UIColor;

	puckArrowFillColor: UIColor;

	puckFillColor: UIColor;

	puckShadowColor: UIColor;

	puckShadowOpacity: number;
}

declare const enum MLNUserTrackingMode {
	None = 0,

	Follow = 1,

	FollowWithHeading = 2,

	FollowWithCourse = 3,
}

declare class MLNVectorStyleLayer extends MLNForegroundStyleLayer {
	static alloc(): MLNVectorStyleLayer; // inherited from NSObject

	static new(): MLNVectorStyleLayer; // inherited from NSObject

	predicate: NSPredicate;

	sourceLayerIdentifier: string;
}

declare class MLNVectorTileSource extends MLNTileSource {
	static alloc(): MLNVectorTileSource; // inherited from NSObject

	static new(): MLNVectorTileSource; // inherited from NSObject

	constructor(o: { identifier: string; configurationURL: NSURL });

	constructor(o: { identifier: string; configurationURLString: string });

	constructor(o: { identifier: string; tileURLTemplates: NSArray<string> | string[]; options: NSDictionary<string, any> });

	featuresInSourceLayersWithIdentifiersPredicate(sourceLayerIdentifiers: NSSet<string>, predicate: NSPredicate): NSArray<MLNFeature>;

	initWithIdentifierConfigurationURL(identifier: string, configurationURL: NSURL): this;

	initWithIdentifierConfigurationURLString(identifier: string, configurationURLString: string): this;

	initWithIdentifierTileURLTemplatesOptions(identifier: string, tileURLTemplates: NSArray<string> | string[], options: NSDictionary<string, any>): this;
}

declare const enum MLNWellKnownTileServer {
	MapTiler = 0,

	MapLibre = 1,

	Mapbox = 2,
}

declare function MLNZoomLevelForAltitude(altitude: number, pitch: number, latitude: number, size: CGSize): number;

declare var MapboxVersionNumber: number;

declare var MapboxVersionString: interop.Reference<number>;
