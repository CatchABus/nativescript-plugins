import { AppUpdateType } from '../AppUpdateType';
import { UpdateAvailbility } from '../UpdateAvailability';
import { AppUpdateInfoCommon } from './common';
import { AppUpdateOptions } from '../AppUpdateOptions';
import { UpdatePrecondition } from '../UpdatePrecondition';
import { InstallStatus } from '../InstallStatus';

export class AppUpdateInfo extends AppUpdateInfoCommon {
	private readonly mNative: com.google.android.play.core.appupdate.AppUpdateInfo;
	private mClientVersionStalenessDays: number = null;

	constructor(native) {
		super();
		this.mNative = native;
	}

	public getNative(): com.google.android.play.core.appupdate.AppUpdateInfo {
		return this.mNative;
	}

	public getAvailableVersionCode(): string {
		const versionCode = this.mNative.availableVersionCode();
		return versionCode != null ? versionCode.toString() : null;
	}

	public getBytesDownloaded(): number {
		return this.mNative.bytesDownloaded();
	}

	public getTotalBytesDownloaded(): number {
		return this.mNative.totalBytesToDownload();
	}

	public getClientVersionStalenessDays(): number {
		if (this.mClientVersionStalenessDays == null) {
			const integerVal = this.mNative.clientVersionStalenessDays();
			this.mClientVersionStalenessDays = integerVal != null ? integerVal.intValue() : null;
		}
		return this.mClientVersionStalenessDays;
	}

	public getInstallStatus(): InstallStatus {
		return this.mNative.installStatus();
	}

	public getUpdateAvailability(): UpdateAvailbility {
		return this.mNative.updateAvailability();
	}

	public getUpdatePriority(): number {
		return this.mNative.updatePriority();
	}

	public isUpdateTypeAllowed(value: AppUpdateType | AppUpdateOptions): boolean {
		return this.mNative.isUpdateTypeAllowed(value instanceof AppUpdateOptions ? value.getNative() : value);
	}

	public getPackageName(): string {
		return this.mNative.packageName();
	}

	public getFailedUpdatePreconditions(updateOptions: AppUpdateOptions): UpdatePrecondition[] {
		const nativeSet = this.mNative.getFailedUpdatePreconditions(updateOptions.getNative());
		const arr = [];

		if (nativeSet != null) {
			const it = nativeSet.iterator() as java.util.Iterator<java.lang.Integer>;
			while (it.hasNext()) {
				arr.push(it.next().intValue());
			}
		}

		return arr;
	}
}
