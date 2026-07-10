import { CollectionViewItemEventData } from '@nativescript-community/ui-collectionview';
import { Label } from '@nativescript/core';
import { observable } from 'mobx';

export default function CollectionViewComponent() {
  const items = observable.array([1, 2, 3, 4, 5, 6, 7, 8].map((num) => 'No ' + num));

  function onItemLoading(args: CollectionViewItemEventData) {
    const label = args.view as Label;
    label.text = items[args.index];
  }

  function onItemTap(args: CollectionViewItemEventData) {
    items[args.index] = 'No ' + (Math.random() * 10).toFixed(0);
  }

  return (
    <page class="page">
      <actionBar title="Reactivity" class="action-bar">
      </actionBar>
      <stackLayout height="100%">
        <collectionView height="100%" rowHeight={40} items={items} itemTemplate={() => <label></label>} onItemLoading={onItemLoading} onItemTap={onItemTap}/>
      </stackLayout>
    </page>
  );
}