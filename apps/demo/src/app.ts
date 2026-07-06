import { CollectionView } from '@nativescript-community/ui-collectionview';
import { installPolyfills } from '@nativescript-community/ui-htmlcanvasapi';
import '@nativescript-community/ui-neumorphiclayout';
import { Application } from '@nativescript/core';
import './mobx-setup';
import { JSXHandler } from '@nativescript-community/ui-jsx';

installPolyfills();

JSXHandler.registerElement('collectionView', CollectionView);

Application.run({ moduleName: 'app-root' });
