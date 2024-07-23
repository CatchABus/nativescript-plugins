import { Component, NgZone } from '@angular/core';
import { DemoSharedUiHtmlcanvasapi } from '@demo/shared';
import {} from '@nativescript-community/ui-htmlcanvasapi';

@Component({
	selector: 'demo-ui-htmlcanvasapi',
	templateUrl: 'ui-htmlcanvasapi.component.html',
})
export class UiHtmlcanvasapiComponent {
	demoShared: DemoSharedUiHtmlcanvasapi;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUiHtmlcanvasapi();
	}
}
