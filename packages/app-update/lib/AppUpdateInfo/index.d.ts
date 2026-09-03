import { AppUpdateOptions } from '../AppUpdateOptions';
import { AppUpdateType } from '../AppUpdateType';
import { InstallStatus } from '../InstallStatus';
import { UpdatePrecondition } from '../UpdatePrecondition';
import { UpdateAvailbility } from '../UpdateAvailability';
import { AppUpdateInfoCommon } from './common';

export declare class AppUpdateInfo extends AppUpdateInfoCommon {
	constructor(native);

	public getNative();
	public getTrackId(): string;
	public getAvailableVersionCode(): string;
	public getBytesDownloaded(): number;
	public getTotalBytesDownloaded(): number;
	public getClientVersionStalenessDays(): number;
	public getInstallStatus(): InstallStatus;
	public getUpdateAvailability(): UpdateAvailbility;
	public getUpdatePriority(): number;
	public isUpdateTypeAllowed(value: AppUpdateType | AppUpdateOptions): boolean;
	public getPackageName(): string;
	public getFailedUpdatePreconditions(updateOptions: AppUpdateOptions): UpdatePrecondition[];
}
