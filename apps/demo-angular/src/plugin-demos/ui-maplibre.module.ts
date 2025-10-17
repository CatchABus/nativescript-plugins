import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UiMaplibreComponent } from './ui-maplibre.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UiMaplibreComponent }])],
	declarations: [UiMaplibreComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class UiMaplibreModule {}
