import { LayoutBase, View } from '@nativescript/core';

export interface ConstrainedItem {
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

export interface ConstrainedChild extends View, ConstrainedItem {}

export class ConstraintLayout extends LayoutBase {
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
