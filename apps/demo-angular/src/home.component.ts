import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'ui-constraintlayout',
		},
		{
			name: 'ui-htmlcanvasapi',
		},
		{
			name: 'ui-neumorphiclayout',
		},
	];
}
