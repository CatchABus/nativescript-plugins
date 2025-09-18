package com.nativescript.dns;

import android.os.Handler;
import android.os.Looper;

import java.net.InetAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class NSDNSResolver {
  private static ExecutorService _executorService;

  public interface OnResolveCallback {
    void onIPAddressResolution(String address);
    void onComplete();
    void onError(Exception e);
  }

  private static ExecutorService getExecutorService() {
    if (_executorService == null) {
      _executorService = Executors.newSingleThreadExecutor();
    }

    return _executorService;
  }

  public static void resolveHost(String hostName, OnResolveCallback callback) {
    if (hostName == null || callback == null) {
      return;
    }

    final Handler handler = new Handler(Looper.myLooper());

    getExecutorService().execute(() -> {
      try {
        InetAddress[] inetAddresses = InetAddress.getAllByName(hostName);

        handler.post(() -> {
          for (InetAddress ia : inetAddresses) {
            callback.onIPAddressResolution(ia.getHostAddress());
          }
          callback.onComplete();
        });
      } catch (Exception e) {
        handler.post(() -> {
          callback.onError(e);
        });
      }
    });
  }
}
