import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UiHtmlcanvasapiComponent } from './ui-htmlcanvasapi.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UiHtmlcanvasapiComponent }])],
	declarations: [UiHtmlcanvasapiComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class UiHtmlcanvasapiModule {}
