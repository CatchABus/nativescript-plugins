import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NordicDfuComponent } from './nordic-dfu.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NordicDfuComponent }])],
	declarations: [NordicDfuComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NordicDfuModule {}
