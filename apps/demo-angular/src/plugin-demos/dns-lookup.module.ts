import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DnsLookupComponent } from './dns-lookup.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DnsLookupComponent }])],
	declarations: [DnsLookupComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class DnsLookupModule {}
