export function jsx(elementType: string | Function, props: Record<string, any>): void;
export const jsxs = jsx;

declare namespace JSX {
	interface IntrinsicElements extends NativeScriptJSX {}
}
