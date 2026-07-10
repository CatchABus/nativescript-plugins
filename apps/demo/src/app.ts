import { CollectionView } from '@nativescript-community/ui-collectionview';
import { installPolyfills } from '@nativescript-community/ui-htmlcanvasapi';
import '@nativescript-community/ui-neumorphiclayout';
import { Application } from '@nativescript/core';
import './mobx-setup';
import { JSXHelper } from '@nativescript-community/ui-jsx';

installPolyfills();

JSXHelper.registerElement('collectionView', CollectionView);

Application.run({ moduleName: 'app-root' });
