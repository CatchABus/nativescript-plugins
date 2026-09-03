import { Application, Utils } from '@nativescript/core';
import { AppUpdateManagerCommon } from './common';
import { AppUpdateInfo } from '../AppUpdateInfo';
import { AppUpdateOptions } from '../AppUpdateOptions';

type AppUpdateTask = com.google.android.gms.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;

export class AppUpdateManager extends AppUpdateManagerCommon {
	private readonly mNative: com.google.android.play.core.appupdate.AppUpdateManager;

	constructor() {
		super();
		this.mNative = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(Utils.android.getApplicationContext());
	}

	public getAppUpdateInfo(): Promise<AppUpdateInfo> {
		return new Promise((resolve, reject) => {
			const appUpdateInfoTask: AppUpdateTask = this.mNative.getAppUpdateInfo();

			appUpdateInfoTask.addOnSuccessListener(
				new com.google.android.gms.tasks.OnSuccessListener<com.google.android.play.core.appupdate.AppUpdateInfo>({
					onSuccess(param0) {
						const appUpdateInfo = new AppUpdateInfo(param0);
						resolve(appUpdateInfo);
					},
				})
			);

			appUpdateInfoTask.addOnFailureListener(
				new com.google.android.gms.tasks.OnFailureListener({
					onFailure(param0) {
						reject(new Error('AppUdateManager ' + param0.getMessage()));
					},
				})
			);
		});
	}

	public startUpdateFlow(appUpdateInfo: AppUpdateInfo, options?: AppUpdateOptions): boolean {
		//const activity = Application.android.foregroundActivity || Application.android.startActivity;
		let nativeOptions: com.google.android.play.core.appupdate.AppUpdateOptions;

		if (options instanceof AppUpdateOptions) {
			nativeOptions = options.getNative();
		} else {
			if (options != null && typeof options === 'object') {
				const newOpts = new AppUpdateOptions(options);
				nativeOptions = newOpts.getNative();
			} else {
				nativeOptions = null;
			}
		}

		// const resultLauncher = activity.registerForActivityResult(
		//   new androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult(),
		//   new androidx.activity.result.ActivityResultCallback<androidx.activity.result.ActivityResult>({
		//     onActivityResult(result): void {
		//       // handle callback
		//       console.log(result.getResultCode());
		//     }
		//   })
		// );

		return this.mNative.startUpdateFlowForResult(appUpdateInfo.getNative(), null, nativeOptions);
	}
}
