import { Component, NgZone } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { DemoSharedUiNeumorphicLayout } from '@demo/shared';

@Component({
	selector: 'demo-ui-neumorphiclayout',
	templateUrl: 'ui-neumorphiclayout.component.html',
})
export class UiNeumorphicLayoutComponent {
	demoShared: DemoSharedUiNeumorphicLayout;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUiNeumorphicLayout();
	}
}
