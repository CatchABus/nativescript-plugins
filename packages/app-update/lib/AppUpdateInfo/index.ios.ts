import { compareVersions } from 'compare-versions';
import { AppUpdateOptions } from '../AppUpdateOptions';
import { AppUpdateType } from '../AppUpdateType';
import { InstallStatus } from '../InstallStatus';
import { UpdatePrecondition } from '../UpdatePrecondition';
import { UpdateAvailbility } from '../UpdateAvailability';
import { AppUpdateInfoCommon } from './common';

interface AppData {
	trackId: number;
	version: string;
	bundleId: string;
}

export class AppUpdateInfo extends AppUpdateInfoCommon {
	private readonly mNative: AppData;
	private readonly mCurrentAppVersion: string;

	constructor(native: AppData) {
		super();
		this.mNative = native;
		this.mCurrentAppVersion = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleShortVersionString');
	}

	public getNative() {
		return this.mNative;
	}

	public getTrackId(): string {
		return this.mNative.trackId + '';
	}

	public getAvailableVersionCode(): string {
		return this.mNative.version;
	}

	public getBytesDownloaded(): number {
		return 0;
	}

	public getTotalBytesDownloaded(): number {
		return 0;
	}

	public getClientVersionStalenessDays(): number {
		return -1;
	}

	public getInstallStatus(): InstallStatus {
		return InstallStatus.UNKNOWN;
	}

	public getUpdateAvailability(): UpdateAvailbility {
		return compareVersions(this.mCurrentAppVersion, this.mNative.version) === -1 ? UpdateAvailbility.UPDATE_AVAILABLE : UpdateAvailbility.UPDATE_NOT_AVAILABLE;
	}

	public getUpdatePriority(): number {
		return -1;
	}

	public isUpdateTypeAllowed(_value: AppUpdateType | AppUpdateOptions): boolean {
		return this.getUpdateAvailability() === UpdateAvailbility.UPDATE_AVAILABLE;
	}

	public getPackageName(): string {
		return this.mNative.bundleId;
	}

	public getFailedUpdatePreconditions(updateOptions: AppUpdateOptions): UpdatePrecondition[] {
		return [];
	}
}
