import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from './app.module';
import '@nativescript-community/ui-neumorphiclayout';

runNativeScriptAngularApp({
	appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
