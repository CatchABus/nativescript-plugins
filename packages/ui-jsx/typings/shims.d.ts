// Declaration for importing css files as modules
declare module '*.module.css' {
	const content: string;
	export default content;
}

declare module '*.module.scss' {
	const content: string;
	export default content;
}
