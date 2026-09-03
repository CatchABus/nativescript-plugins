import { AppUpdateType } from '../AppUpdateType';
import { AppUpdateOptionsCommon } from './common';

export class AppUpdateOptions extends AppUpdateOptionsCommon {
	private readonly mAppUpdateType: AppUpdateType;
	private readonly mAllowAssetPackDeletion: boolean;

	constructor(appUpdateType: AppUpdateType, allowAssetPackDeletion?: boolean) {
		super();

		this.mAppUpdateType = appUpdateType;
		this.mAllowAssetPackDeletion = !!allowAssetPackDeletion;
	}

	public getNative() {
		return null;
	}

	public getAppUpdateType(): AppUpdateType {
		return this.mAppUpdateType;
	}

	public getAllowAssetPackDeletion(): boolean {
		return this.mAllowAssetPackDeletion;
	}
}
