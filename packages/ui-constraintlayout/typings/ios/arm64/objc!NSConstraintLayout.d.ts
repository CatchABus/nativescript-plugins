declare class NSConstraintLayout extends UIView {
	static alloc(): NSConstraintLayout; // inherited from NSObject

	static appearance(): NSConstraintLayout; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NSConstraintLayout; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSConstraintLayout; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSConstraintLayout; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSConstraintLayout; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSConstraintLayout; // inherited from UIAppearance

	static new(): NSConstraintLayout; // inherited from NSObject

	setLayoutChangeListenerWithValue(value: (p1: CGRect) => void): void;
}
