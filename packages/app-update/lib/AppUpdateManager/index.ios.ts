import { Http } from '@nativescript/core';
import { AppUpdateInfo } from '../AppUpdateInfo';
import { AppUpdateOptions } from '../AppUpdateOptions';
import { AppUpdateManagerCommon } from './common';
import { InstallErrorCode } from '../InstallErrorCode';

export class AppUpdateManager extends AppUpdateManagerCommon {
	public getAppUpdateInfo(): Promise<AppUpdateInfo> {
		return new Promise((resolve, reject) => {
			const bundleId = NSBundle.mainBundle.bundleIdentifier;
			Http.getJSON(`https://itunes.apple.com/lookup?bundleId=${bundleId}`).then(
				(payload: any) => {
					let appData: any;

					if (payload?.resultCount > 0) {
						appData = payload.results.find((res) => res.bundleId === bundleId);
					} else {
						appData = null;
					}

					if (appData) {
						const appUpdateInfo = new AppUpdateInfo(appData);
						resolve(appUpdateInfo);
					} else {
						reject(new Error('AppUdateManager Error: No app found in store with bundle ID ' + bundleId + ' - Install error code: ' + InstallErrorCode.ERROR_APP_NOT_OWNED));
					}
				},
				(err: Error) => {
					reject(new Error('AppUdateManager ' + err.message + ' - Install error code: ' + InstallErrorCode.ERROR_STORE_NOT_FOUND));
				}
			);
		});
	}

	public startUpdateFlow(_appUpdateInfo: AppUpdateInfo, _options?: AppUpdateOptions): boolean {
		return false;
	}
}
