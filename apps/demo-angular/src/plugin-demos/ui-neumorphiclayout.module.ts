import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UiNeumorphicLayoutComponent } from './ui-neumorphiclayout.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UiNeumorphicLayoutComponent }])],
  declarations: [UiNeumorphicLayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UiNeumorphicLayoutModule {}
