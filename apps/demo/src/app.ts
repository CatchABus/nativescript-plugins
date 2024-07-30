import { Application } from '@nativescript/core';
import '@nativescript-community/ui-neumorphiclayout';
import { installPolyfills } from '@nativescript-community/ui-htmlcanvasapi';

installPolyfills();

Application.run({ moduleName: 'app-root' });
