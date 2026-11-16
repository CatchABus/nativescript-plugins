import { CollectionView } from '@nativescript-community/ui-collectionview';
import { installPolyfills } from '@nativescript-community/ui-htmlcanvasapi';
import { install as installIntl } from '@nativescript-community/intl';
import '@nativescript-community/ui-neumorphiclayout';
import { Application } from '@nativescript/core';
import './mobx-setup';
import { JSXHelper } from '@nativescript-community/ui-jsx';

installPolyfills();
installIntl();

JSXHelper.registerElement('collectionView', CollectionView);

Application.run({ moduleName: 'app-root' });
