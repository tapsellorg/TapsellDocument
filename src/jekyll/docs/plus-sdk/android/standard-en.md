---
layout: classic-docs
title: Implementing Standard Banner Ads
lang: en
permalink: /plus-sdk/android/standard/index.html
toc: true
---
## Creating a Zone
First, create a standard zone from the [Tapsell panel](https://dashboard.tapsell.ir/).

### Requesting Ads
Use the `TapsellPlus.requestStandardBannerAd` method to request an ad. For example:

```java
TapsellPlus.requestStandardBannerAd(
                CONTEXT, ZONE_ID_STANDARD_BANNER,
                TapsellPlusBannerType.BANNER_320x50,
                new AdRequestCallback() {
                    @Override
                    public void response(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.response(tapsellPlusAdModel);
                        
                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        standardBannerResponseId = tapsellPlusAdModel.getResponseId();
                    }

                    @Override
                    public void error(@NonNull String message) {
                    }
                });
```

> If you want to request an ad again in the error Callback method, be sure to do so with the help of a variable such as a counter. Because you can set a limit on the number of times to request by using that variable. For example, when you disable this ad position from the panel, if you request again each time in error Callback without limiting the number of times, your app will fall into an infinite loop and its performance will be disrupted.

### Showing Ads
Add a `ViewGroup` to the page that you want the ad to be displayed.

```xml
<RelativeLayout
    android:id="@+id/standardBanner"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:gravity="center" />
```

After the onResponse method is called, the requested ad is ready to be displayed. You can show the ad using the following lines of code:

```java
TapsellPlus.showStandardBannerAd(CONTEXT, standardBannerResponseId,
                findViewById(R.id.standardBanner),
                new AdShowListener() {
                    @Override
                    public void onOpened(TapsellPlusAdModel tapsellPlusAdModel) {
                        super.onOpened(tapsellPlusAdModel);
                    }

                    @Override
                    public void onError(TapsellPlusErrorModel tapsellPlusErrorModel) {
                        super.onError(tapsellPlusErrorModel);
                    }
                });
```

### Removing Ads
At the end of the activity life cycle or whenever you want to close the ad, you need to call the following method:

```java
private void destroyAd() {
    TapsellPlus.destroyStandardBanner(this, standardBannerResponseId, findViewById(R.id.standardBanner));
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```

### Banners Size
All supported sizes in Tepsell Plus are in the TapsellPlusBannerType class.

|    Banner Type    |   Size    |            Supported Ad Networks             |
|:-----------------:|:---------:|:--------------------------------------------:|
|  `BANNER_320x50`  | `320x50`  | Tapsell, AdMob, AppLovin, UnityAds, AdColony |
| `BANNER_320x100`  | `320x100` |                Tapsell, AdMob                |
| `BANNER_250x250`  | `250x250` |                   Tapsell                    |
| `BANNER_300x250`  | `300x250` |      Tapsell, AdMob, AppLovin, AdColony      |
|  `BANNER_468x60`  | `468x60`  |               AdMob, UnityAds                |
|  `BANNER_728x90`  | `728x90`  |     AdMob, AppLovin, UnityAds, AdColony      |
| `BANNER_160x600`  | `160x600` |                   AdColony                   |
| `BANNER_ADAPTIVE` | `320x50`  |                Tapsell, AdMob                |
