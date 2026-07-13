import { CollectionView } from '@nativescript-community/ui-collectionview';
import { NativeScriptElement } from '@nativescript-community/ui-jsx';
import { IComputedValue, IObservable, IObservableArray, IObservableValue } from 'mobx';

export {};

declare global {
	interface NativeScriptJSXTypeConfig<T> {
		commonAttributeType: IObservableValue<T> | IComputedValue<T> | IObservableArray<any>;
	}

	interface NativeScriptJSX {
		collectionView: NativeScriptElement<CollectionView, typeof CollectionView>;
	}
}
