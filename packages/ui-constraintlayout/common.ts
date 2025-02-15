import { LayoutBase, Observable, Property, View, ViewBase } from '@nativescript/core';

export const PARENT_CONSTRAINT_IDENTIFIER = 'parent';

export enum RelConstraintPos {
	leftToLeftOf = 'leftToLeftOf',
	leftToRightOf = 'leftToRightOf',
	rightToLeftOf = 'rightToLeftOf',
	rightToRightOf = 'rightToRightOf',
	leftRightCenter = 'leftRightCenter',
	topToTopOf = 'topToTopOf',
	topToBottomOf = 'topToBottomOf',
	bottomToTopOf = 'bottomToTopOf',
	bottomToBottomOf = 'bottomToBottomOf',
	topBottomCenter = 'topBottomCenter',
	baselineToBaselineOf = 'baselineToBaselineOf',
	startToEndOf = 'startToEndOf',
	startToStartOf = 'startToStartOf',
	endToStartOf = 'endToStartOf',
	endToEndOf = 'endToEndOf',
}

export interface ConstrainedChild extends View {
	leftToLeftOf: string;
	leftToRightOf: string;
	rightToLeftOf: string;
	rightToRightOf: string;
	topToTopOf: string;
	topToBottomOf: string;
	bottomToTopOf: string;
	bottomToBottomOf: string;
	baselineToBaselineOf: string;
	startToEndOf: string;
	startToStartOf: string;
	endToStartOf: string;
	endToEndOf: string;
}

export class ConstraintLayoutBase extends LayoutBase {
	public static isConstrainedChild(child: View): boolean {
		return child.parent && child.parent instanceof ConstraintLayoutBase;
	}

	public static getLeftToLeftOf(child: View): string {
		return (child as ConstrainedChild).leftToLeftOf;
	}

	public static setLeftToLeftOf(child: View, value: string): void {
		(child as ConstrainedChild).leftToLeftOf = value;
	}

	public static getLeftToRightOf(child: View): string {
		return (child as ConstrainedChild).leftToRightOf;
	}

	public static setLeftToRightOf(child: View, value: string): void {
		(child as ConstrainedChild).leftToRightOf = value;
	}

	public static getRightToLeftOf(child: View): string {
		return (child as ConstrainedChild).rightToLeftOf;
	}

	public static setRightToLeftOf(child: View, value: string): void {
		(child as ConstrainedChild).rightToLeftOf = value;
	}

	public static getRightToRightOf(child: View): string {
		return (child as ConstrainedChild).rightToRightOf;
	}

	public static setRightToRightOf(child: View, value: string): void {
		(child as ConstrainedChild).rightToRightOf = value;
	}

	public static getTopToTopOf(child: View): string {
		return (child as ConstrainedChild).topToTopOf;
	}

	public static setTopToTopOf(child: View, value: string): void {
		(child as ConstrainedChild).topToTopOf = value;
	}

	public static getTopToBottomOf(child: View): string {
		return (child as ConstrainedChild).topToBottomOf;
	}

	public static setTopToBottomOf(child: View, value: string): void {
		(child as ConstrainedChild).topToBottomOf = value;
	}

	public static getBottomToTopOf(child: View): string {
		return (child as ConstrainedChild).bottomToTopOf;
	}

	public static setBottomToTopOf(child: View, value: string): void {
		(child as ConstrainedChild).bottomToTopOf = value;
	}

	public static getBottomToBottomOf(child: View): string {
		return (child as ConstrainedChild).bottomToBottomOf;
	}

	public static setBottomToBottomOf(child: View, value: string): void {
		(child as ConstrainedChild).bottomToBottomOf = value;
	}

	public static getBaselineToBaselineOf(child: View): string {
		return (child as ConstrainedChild).baselineToBaselineOf;
	}

	public static setBaselineToBaselineOf(child: View, value: string): void {
		(child as ConstrainedChild).baselineToBaselineOf = value;
	}

	public static getStartToEndOf(child: View): string {
		return (child as ConstrainedChild).startToEndOf;
	}

	public static setStartToEndOf(child: View, value: string): void {
		(child as ConstrainedChild).startToEndOf = value;
	}

	public static getStartToStartOf(child: View): string {
		return (child as ConstrainedChild).startToStartOf;
	}

	public static setStartToStartOf(child: View, value: string): void {
		(child as ConstrainedChild).startToStartOf = value;
	}

	public static getEndToStartOf(child: View): string {
		return (child as ConstrainedChild).endToStartOf;
	}

	public static setEndToStartOf(child: View, value: string): void {
		(child as ConstrainedChild).endToStartOf = value;
	}

	public static getEndToEndOf(child: View): string {
		return (child as ConstrainedChild).endToEndOf;
	}

	public static setEndToEndOf(child: View, value: string): void {
		(child as ConstrainedChild).endToEndOf = value;
	}
}

export function applyViewMixin(callback: (originals: Partial<View>) => Partial<View>): void {
	const originals = {};
	const mixin = callback(originals);

	for (const key in mixin) {
		originals[key] = View.prototype[key];
	}

	Object.assign(View.prototype, mixin);
}

export function getConstraintRelativePositionTarget(id: string, view: View): ViewBase {
	const parent = view.parent;
	let target: ViewBase;

	if (parent) {
		if (id === PARENT_CONSTRAINT_IDENTIFIER) {
			target = parent;
		}

		parent.eachChild((child) => {
			if (child.id === id) {
				target = child;
				return false;
			}
			return true;
		});
	} else {
		target = null;
	}

	return target;
}

export const leftToLeftOfProperty = new Property<View, string>({
	name: RelConstraintPos.leftToLeftOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
leftToLeftOfProperty.register(View);

export const leftToRightOfProperty = new Property<View, string>({
	name: RelConstraintPos.leftToRightOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
leftToRightOfProperty.register(View);

export const rightToLeftOfProperty = new Property<View, string>({
	name: RelConstraintPos.rightToLeftOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
rightToLeftOfProperty.register(View);

export const rightToRightOfProperty = new Property<View, string>({
	name: RelConstraintPos.rightToRightOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
rightToRightOfProperty.register(View);

export const topToTopOfProperty = new Property<View, string>({
	name: RelConstraintPos.topToTopOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
topToTopOfProperty.register(View);

export const topToBottomOfProperty = new Property<View, string>({
	name: RelConstraintPos.topToBottomOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
topToBottomOfProperty.register(View);

export const bottomToTopOfProperty = new Property<View, string>({
	name: RelConstraintPos.bottomToTopOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
bottomToTopOfProperty.register(View);

export const bottomToBottomOfProperty = new Property<View, string>({
	name: RelConstraintPos.bottomToBottomOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
bottomToBottomOfProperty.register(View);

export const baselineToBaselineOfProperty = new Property<View, string>({
	name: RelConstraintPos.baselineToBaselineOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
baselineToBaselineOfProperty.register(View);

export const startToEndOfProperty = new Property<View, string>({
	name: RelConstraintPos.startToEndOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
startToEndOfProperty.register(View);

export const startToStartOfProperty = new Property<View, string>({
	name: RelConstraintPos.startToStartOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
startToStartOfProperty.register(View);

export const endToStartOfProperty = new Property<View, string>({
	name: RelConstraintPos.endToStartOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
endToStartOfProperty.register(View);

export const endToEndOfProperty = new Property<View, string>({
	name: RelConstraintPos.endToEndOf,
	defaultValue: null,
	affectsLayout: global.isIOS,
});
endToEndOfProperty.register(View);
