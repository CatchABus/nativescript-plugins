import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UiConstraintlayoutComponent } from './ui-constraintlayout.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UiConstraintlayoutComponent }])],
	declarations: [UiConstraintlayoutComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class UiConstraintlayoutModule {}
