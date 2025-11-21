import { CoreTypes, LayoutBase, Length, Property, View } from '@nativescript/core';

export const PARENT_CONSTRAINT_IDENTIFIER = 'parent';
export const DEFAULT_BIAS = 0.5;

export class ConstraintLayoutBase extends LayoutBase {
	public static isConstrainedChild(child: View): boolean {
		return child.parent && child.parent instanceof ConstraintLayoutBase;
	}

	public get isRtl(): boolean {
		// Check if instance has the property as rtl support was added in {N} v9
		return 'direction' in this && this.direction === 'rtl';
	}
}

export function applyViewMixin(callback: (originals: Partial<View>) => Partial<View>): void {
	const originals = {};
	const mixin = callback(originals);
	const propertySymbols = Object.getOwnPropertySymbols(mixin);
	const propertyNames = Object.getOwnPropertyNames(mixin);

	for (const propertyName of propertySymbols) {
		originals[propertyName] = View.prototype[propertyName];
	}

	for (const propertyName of propertyNames) {
		originals[propertyName] = View.prototype[propertyName];
	}

	Object.assign(View.prototype, mixin);
}

export const leftToLeftOfProperty = new Property<View, string>({
	name: 'leftToLeftOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
leftToLeftOfProperty.register(View);

export const leftToRightOfProperty = new Property<View, string>({
	name: 'leftToRightOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
leftToRightOfProperty.register(View);

export const rightToLeftOfProperty = new Property<View, string>({
	name: 'rightToLeftOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
rightToLeftOfProperty.register(View);

export const rightToRightOfProperty = new Property<View, string>({
	name: 'rightToRightOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
rightToRightOfProperty.register(View);

export const topToTopOfProperty = new Property<View, string>({
	name: 'topToTopOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
topToTopOfProperty.register(View);

export const topToBottomOfProperty = new Property<View, string>({
	name: 'topToBottomOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
topToBottomOfProperty.register(View);

export const bottomToTopOfProperty = new Property<View, string>({
	name: 'bottomToTopOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
bottomToTopOfProperty.register(View);

export const bottomToBottomOfProperty = new Property<View, string>({
	name: 'bottomToBottomOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
bottomToBottomOfProperty.register(View);

export const baselineToBaselineOfProperty = new Property<View, string>({
	name: 'baselineToBaselineOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
baselineToBaselineOfProperty.register(View);

export const startToEndOfProperty = new Property<View, string>({
	name: 'startToEndOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
startToEndOfProperty.register(View);

export const startToStartOfProperty = new Property<View, string>({
	name: 'startToStartOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
startToStartOfProperty.register(View);

export const endToStartOfProperty = new Property<View, string>({
	name: 'endToStartOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
endToStartOfProperty.register(View);

export const endToEndOfProperty = new Property<View, string>({
	name: 'endToEndOf',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
endToEndOfProperty.register(View);

export const horizontalBiasProperty = new Property<View, number>({
	name: 'horizontalBias',
	defaultValue: DEFAULT_BIAS,
	valueConverter: (value) => Number(value),
	affectsLayout: global.isIOS,
});
horizontalBiasProperty.register(View);

export const verticalBiasProperty = new Property<View, number>({
	name: 'verticalBias',
	defaultValue: DEFAULT_BIAS,
	valueConverter: (value) => Number(value),
	affectsLayout: global.isIOS,
});
verticalBiasProperty.register(View);

export const circleConstraintProperty = new Property<View, string>({
	name: 'circleConstraint',
	defaultValue: null,
	affectsLayout: global.isIOS,
});
circleConstraintProperty.register(View);

export const circleAngleProperty = new Property<View, number>({
	name: 'circleAngle',
	defaultValue: 0,
	valueConverter: (value) => Number(value),
	affectsLayout: global.isIOS,
});
circleAngleProperty.register(View);

export const circleRadiusProperty = new Property<View, CoreTypes.LengthType>({
	name: 'circleRadius',
	defaultValue: 0,
	valueConverter: Length.parse,
	equalityComparer: Length.equals,
	affectsLayout: global.isIOS,
});
circleRadiusProperty.register(View);
