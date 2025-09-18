import { Component, NgZone } from '@angular/core';
import { DemoSharedDnsLookup } from '@demo/shared';
import {} from '@nativescript-community/dns-lookup';

@Component({
	selector: 'demo-dns-lookup',
	templateUrl: 'dns-lookup.component.html',
})
export class DnsLookupComponent {
	demoShared: DemoSharedDnsLookup;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDnsLookup();
	}
}
