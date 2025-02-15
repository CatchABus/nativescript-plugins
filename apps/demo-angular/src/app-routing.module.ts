import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'ui-constraintlayout', loadChildren: () => import('./plugin-demos/ui-constraintlayout.module').then((m) => m.UiConstraintlayoutModule) },
	{ path: 'ui-htmlcanvasapi', loadChildren: () => import('./plugin-demos/ui-htmlcanvasapi.module').then((m) => m.UiHtmlcanvasapiModule) },
	{ path: 'ui-neumorphiclayout', loadChildren: () => import('./plugin-demos/ui-neumorphiclayout.module').then((m) => m.UiNeumorphiclayoutModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
