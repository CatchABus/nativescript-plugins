import { Component, NgZone } from '@angular/core';
import { DemoSharedNordicDfu } from '@demo/shared';
import {} from '@nativescript-community/nordic-dfu';

@Component({
	selector: 'demo-nordic-dfu',
	templateUrl: 'nordic-dfu.component.html',
})
export class NordicDfuComponent {
	demoShared: DemoSharedNordicDfu;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNordicDfu();
	}
}
