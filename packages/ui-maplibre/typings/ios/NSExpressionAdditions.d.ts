declare namespace NSExpression {
	function expressionWithMLNJSONObject(object: any): NSExpression;
	const featureAccumulatedVariableExpression: NSExpression;
	const featureAttributesVariableExpression: NSExpression;
	const featureIdentifierVariableExpression: NSExpression;
	const featurePropertiesVariableExpression: NSExpression;
	const geometryTypeVariableExpression: NSExpression;
	const heatmapDensityVariableExpression: NSExpression;
	const lineProgressVariableExpression: NSExpression;
	const zoomLevelVariableExpression: NSExpression;
}

declare interface NSExpression {
	mgl_jsonExpressionObject: NSArray<any>;
}
