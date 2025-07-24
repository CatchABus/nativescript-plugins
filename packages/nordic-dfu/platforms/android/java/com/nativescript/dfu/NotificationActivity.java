package com.nativescript.dfu;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

/**
 * Created by viktor on 2017-06-26.
 */
public class NotificationActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // If this activity is the root activity of the task, the app is not running
        if (isTaskRoot()) {
            // Start the app before finishing
            final Intent launchIntent = getPackageManager().getLaunchIntentForPackage(getPackageName());
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            launchIntent.putExtras(getIntent().getExtras()); // copy all extras

            if (launchIntent != null) {
                startActivity(launchIntent);
            }
        }

        // Now finish, which will drop you to the activity at which you were at the top
        // of the task stack
        finish();
    }
}
