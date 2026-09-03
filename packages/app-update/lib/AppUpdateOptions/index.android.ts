import { AppUpdateType } from '../AppUpdateType';
import { AppUpdateOptionsCommon } from './common';

export class AppUpdateOptions extends AppUpdateOptionsCommon {
	private readonly mNative: com.google.android.play.core.appupdate.AppUpdateOptions;

	constructor(appUpdateType: AppUpdateType, allowAssetPackDeletion?: boolean) {
		super();

		const builder = com.google.android.play.core.appupdate.AppUpdateOptions.newBuilder(appUpdateType || AppUpdateType.IMMEDIATE);

		if (typeof allowAssetPackDeletion === 'boolean') {
			builder.setAllowAssetPackDeletion(allowAssetPackDeletion);
		}

		this.mNative = builder.build();
	}

	public getNative(): com.google.android.play.core.appupdate.AppUpdateOptions {
		return this.mNative;
	}

	public getAppUpdateType(): AppUpdateType {
		return this.mNative.appUpdateType();
	}

	public getAllowAssetPackDeletion(): boolean {
		return this.mNative.allowAssetPackDeletion();
	}
}
