import { Http } from '@nativescript/core';
import { AppUpdateInfo } from '../AppUpdateInfo';
import { AppUpdateOptions } from '../AppUpdateOptions';
import { AppUpdateManagerCommon } from './common';

export class AppUpdateManager extends AppUpdateManagerCommon {
	public getAppUpdateInfo(): Promise<AppUpdateInfo> {
		return new Promise((resolve, reject) => {
			const bundleId = NSBundle.mainBundle.bundleIdentifier;
			Http.getJSON(`https://itunes.apple.com/lookup?bundleId=${bundleId}`).then(
				(value: any) => {
					let appData: object;

					if (value?.resultCount > 0) {
						appData = value.results.find((res) => res.bundleId === bundleId);
					} else {
						appData = null;
					}

					if (appData) {
						const appUpdateInfo = new AppUpdateInfo(appData);
						resolve(appUpdateInfo);
					} else {
						reject(new Error('AppUdateManager Error: No app found in store with bundle ID ' + bundleId));
					}
				},
				(err: Error) => {
					reject(new Error('AppUdateManager ' + err.message));
				}
			);
		});
	}

	public startUpdateFlow(_appUpdateInfo: AppUpdateInfo, _options?: AppUpdateOptions): boolean {
		return false;
	}
}
