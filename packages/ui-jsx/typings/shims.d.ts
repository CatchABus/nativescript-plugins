// Declaration for importing css files as modules
declare module '*.css' {
	const content: string | object; // The object type refers to CSS AST provided by bundlers
	export default content;
}

declare module '*.scss' {
	const content: string | object; // The object type refers to CSS AST provided by bundlers
	export default content;
}
