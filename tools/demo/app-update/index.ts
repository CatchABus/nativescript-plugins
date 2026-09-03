import { alert } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { AppUpdateManager, UpdateAvailbility } from '@nativescript-community/app-update';

export class DemoSharedAppUpdate extends DemoSharedBase {
	testIt() {
		const manager = new AppUpdateManager();

		manager.getAppUpdateInfo().then(
			(value) => {
				console.log(value.getUpdateAvailability());

				alert(`Update availability: ${UpdateAvailbility[value.getUpdateAvailability()]}`);
			},
			(err) => {
				alert(err.message);
			}
		);
	}
}
