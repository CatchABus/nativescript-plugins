import { Component, NgZone } from '@angular/core';
import { DemoSharedUiConstraintlayout } from '@demo/shared';
import {} from 'ui-constraintlayout';

@Component({
	selector: 'demo-ui-constraintlayout',
	templateUrl: 'ui-constraintlayout.component.html',
})
export class UiConstraintlayoutComponent {
	demoShared: DemoSharedUiConstraintlayout;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUiConstraintlayout();
	}
}
