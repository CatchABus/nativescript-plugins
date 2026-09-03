import { AppUpdateInfo } from '../AppUpdateInfo';
import { AppUpdateOptions } from '../AppUpdateOptions';
import { AppUpdateType } from '../AppUpdateType';
import { AppUpdateManagerCommon } from './common';

export declare class AppUpdateManager extends AppUpdateManagerCommon {
	public getAppUpdateInfo(): Promise<AppUpdateInfo>;
	public startUpdateFlow(appUpdateInfo: AppUpdateInfo, options?: AppUpdateOptions): boolean;
}
