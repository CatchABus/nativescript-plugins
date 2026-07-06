import { CollectionView } from '@nativescript-community/ui-collectionview';
import { NativeScriptElement } from '@nativescript-community/ui-jsx';

export {};

declare global {
	interface NativeScriptJSX {
		collectionView: NativeScriptElement<CollectionView, typeof CollectionView>;
	}
}
