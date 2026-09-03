import { alert } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { AppUpdateManager } from '@nativescript-community/app-update';
import { UpdateAvailbility } from '../../../packages/app-update/lib/UpdteAvailability';

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
