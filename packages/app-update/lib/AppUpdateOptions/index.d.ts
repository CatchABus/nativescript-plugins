import { AppUpdateType } from '../AppUpdateType';
import { AppUpdateOptionsCommon } from './common';

export declare class AppUpdateOptions extends AppUpdateOptionsCommon {
	constructor(appUpdateType: AppUpdateType, allowAssetPackDeletion?: boolean);
	public getNative();
	public getAppUpdateType(): AppUpdateType;
	public getAllowAssetPackDeletion(): boolean;
}
