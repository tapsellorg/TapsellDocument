---
layout: classic-docs
title: Implementing Standard Banner Ads
lang: en
permalink: /plus-sdk/android/standard/index.html
toc: true
---
## Creating a Zone
First, create a standard zone from the [Yelloadwise panel](https://dashboard.yelloadwise.ir/).

### Requesting Ads
Use the `Yelloadwise.requestStandardBannerAd` method to request an ad. For example:

```java
Yelloadwise.requestStandardBannerAd(
                CONTEXT, ZONE_ID_STANDARD_BANNER,
                YelloadwiseBannerType.BANNER_320x50,
                new AdRequestCallback() {
                    @Override
                    public void response(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.response(yelloadwiseAdModel);
                        
                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        standardBannerResponseId = yelloadwiseAdModel.getResponseId();
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
Yelloadwise.showStandardBannerAd(CONTEXT, standardBannerResponseId,
                findViewById(R.id.standardBanner),
                new AdShowListener() {
                    @Override
                    public void onOpened(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.onOpened(yelloadwiseAdModel);
                    }

                    @Override
                    public void onError(YelloadwiseErrorModel yelloadwiseErrorModel) {
                        super.onError(yelloadwiseErrorModel);
                    }
                });
```

### Removing Ads
At the end of the activity life cycle or whenever you want to close the ad, you need to call the following method:

```java
private void destroyAd() {
    Yelloadwise.destroyStandardBanner(this, standardBannerResponseId, findViewById(R.id.standardBanner));
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```

### Banners Size
All supported sizes in Tepsell Plus are in the YelloadwiseBannerType class.

|   Banner Type    |   Size    |            Supported Ad Networks             |
|:----------------:|:---------:|:--------------------------------------------:|
| `BANNER_320x50`  | `320x50`  | Yelloadwise, AdMob, AppLovin, UnityAds, AdColony |
| `BANNER_320x100` | `320x100` |                Yelloadwise, AdMob                |
| `BANNER_250x250` | `250x250` |                   Yelloadwise                    |
| `BANNER_300x250` | `300x250` |      Yelloadwise, AdMob, AppLovin, AdColony      |
| `BANNER_468x60`  | `468x60`  |               AdMob, UnityAds                |
| `BANNER_728x90`  | `728x90`  |     AdMob, AppLovin, UnityAds, AdColony      |
| `BANNER_160x600` | `160x600` |                   AdColony                   |
