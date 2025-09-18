package com.nativescript.dns;

import android.os.Handler;
import android.os.Looper;

import java.net.InetAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class NSDNSResolver {
  private static ExecutorService _executorService;

  public interface CompleteCallback {
    void onComplete(String[] addresses);
    void onError(Exception e);
  }

  private static ExecutorService getExecutorService() {
    if (_executorService == null) {
      _executorService = Executors.newSingleThreadExecutor();
    }

    return _executorService;
  }

  public static void resolveHost(String hostName, CompleteCallback callback) {
    final Handler handler = new Handler(Looper.myLooper());

    getExecutorService().execute(() -> {
      try {
        InetAddress[] inetAddresses = InetAddress.getAllByName(hostName);
        String[] addresses = new String[inetAddresses.length];

        for (int i = 0; i < inetAddresses.length; i++) {
          addresses[i] = inetAddresses[i].getHostAddress();
        }

        handler.post(() -> {
          if (callback != null) {
            callback.onComplete(addresses);
          }
        });
      } catch (Exception e) {
        handler.post(() -> {
          if (callback != null) {
            callback.onError(e);
          }
        });
      }
    });
  }
}
