---
layout: no-sidebar-classic-docs
title: AppOpen Ad
lang: en
permalink: /mediation/android/appopen/index.html
toc: true
---

## AppOpen ads

App open ads are intended for publishers wishing to monetize their app load screens. App open ads can be closed at any
time, and are designed to be shown when your users bring your app to the foreground.
App open ads automatically show a small branding area so users know they're in your app.

This guide shows you how to integrate AppOpen ads from Tapsell into your Android app.

#### Load AppOpen Ad

AppOpen ads are loaded by calling the `requestAppOpenAd` static method of the Tapsell class; passing in the zone
identifier and a `RequestResultListener` to receive the loaded ad id or possible failure notice. This is usually done in
the onCreate() method of an Activity.

```java
public static void requestAppOpenAd(String zoneId, RequestResultListener listener)
```

The `RequestResultListener` interface has the following implementation:

```java
interface RequestResultListener {
    // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
    void onSuccess(String adId);
    // Called when there is no ad available
    void onFailure(String message);
}
```

> **_NOTE:_**  
> If you intend to load App Open ads from `Applovin` ad-network, you also need to pass an activity
> instance using the method below:
> ```java
> public static void requestAppOpenAd(String zoneId, Activity activity, RequestResultListener listener)
> ```

Here's an example that shows how to load an ad in the onCreate() method of an Activity:

```java
import ir.tapsell.mediation.ad.request.RequestResultListener;
import ir.tapsell.mediation.Tapsell;

public class MainActivity extends AppCompatActivity {
    private static final String APP_OPEN_AD_ZONE_ID = "SampleZoneId";
    
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Tapsell.requestAppOpenAd(APP_OPEN_AD_ZONE_ID, new RequestResultListener() {
            @Override
            public void onSuccess(@NonNull String adId) {
                // Ad loaded
                // TODO: Save the loaded ad id to be shown when the time is right
            }

            @Override
            public void onFailure(String message) {
                // Ad not available
            }
        });
    }
}
```

#### Show AppOpen Ad

Once the AppOpen ad is successfully loaded, the next step is to show the ad. To do so simply call
the `showAppOpenAd()` static method in Tapsell class passing the `adId` received in `onSuccess` method of
the `RequestResultListener`.

```java
public static void showAppOpenAd(String adId, Activity activity, AdStateListener.AppOpen listener)
```

The `AdStateListener.AppOpen` optional parameter can be passed to monitor and handle events related to displaying your
AppOpen ad. The interface has the following implementation:

```java
AdStateListener.AppOpen listener = new AdStateListener.AppOpen() {
    @Override
    public void onAdImpression() {
        // Code to be executed when an impression is recorded for the ad.
    }
        
    @Override
    public void onAdClicked() {
        // Code to be executed when the user clicks on the ad.
    }

    @Override
    public void onAdClosed(AdShowCompletionState completionState) {
        // Code to be executed when the full-screen ad is clicked by the user.
    }
    
    @Override
    public void onAdFailed(String message) {
        // Code to be executed when the ad show fails.
    }
);
```

The `AdShowCompletionState` passed in `onAdClosed` callback, indicates whether the ad has been shown completely or
skipped by the user before completion.

```java
enum AdShowCompletionState {
    COMPLETED,
    SKIPPED,
    UNKNOWN
}
```

### Sample Project

for more info you can
use [AppOpen Sample](https://github.com/tapsellorg/TapsellMediation-AndroidSample/tree/master/sample-kotlin/src/main/java/ir/tapsell/sample/appopen)
on GitHub repository.


