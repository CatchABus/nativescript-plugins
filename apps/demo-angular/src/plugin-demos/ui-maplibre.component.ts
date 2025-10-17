import { Component, NgZone } from '@angular/core';
import { DemoSharedUiMaplibre } from '@demo/shared';
import {} from '@nativescript-community/ui-maplibre';

@Component({
	selector: 'demo-ui-maplibre',
	templateUrl: 'ui-maplibre.component.html',
})
export class UiMaplibreComponent {
	demoShared: DemoSharedUiMaplibre;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUiMaplibre();
	}
}
