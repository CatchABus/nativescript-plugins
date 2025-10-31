declare namespace NSPredicate {
	function predicateWithMLNJSONObject(object: any): NSPredicate;
}

declare interface NSPredicate {
	mgl_jsonExpressionObject: NSArray<any>;
}
