---
layout: classic-docs
title: Implementing Native Ads
lang: en
permalink: /plus-sdk/android/native/index.html
toc: true
---
### Creating a Zone
First, create a native zone from the [Yelloadwise panel](https://dashboard.irancell.ir/) and use the `zoneId` when requesting or showing an ad.

### Creating an AdHolder
You should add a ViewGroup to the page in which you want to show the native ad as space for displaying it. In other words, you need to create an ad container.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
             android:layout_width="match_parent"
             android:layout_height="match_parent">

  <FrameLayout
    android:id="@+id/adContainer"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

  </FrameLayout>

</FrameLayout>
````

Then create a custom layout according to the way you want the ad to be displayed, so that `rootView` type is` com.google.android.gms.ads.nativead.NativeAdView` and `id` and the type of different sections are according to the following table:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `irancell.ir_nativead_logo`    | `ImageView`  |
|     title    |    `irancell.ir_nativead_title`    | `TextView`  |
| ad indicator |  `irancell.ir_nativead_sponsored`  | `View`  |
|  description | `irancell.ir_nativead_description` | `TextView`  |
|    banner    |    `irancell.ir_nativead_banner`   | `ir.yelloadwise.core.nativeads.views.RatioImageView`  |
|  media view  |`irancell.ir_nativead_banner_admob` | `ir.yelloadwise.adNetworks.admob.AdMobMediaView`  |
|    button    |     `irancell.ir_nativead_cta`     | `TextView`  |
|    clickable view    |     `irancell.ir_nativead_cta_view`     | `View`  |


* If there is no button for clicking, you can use **clickable view**.
* View types could be inheriting from the aforementioned types.
* You should specify 2 views to display the ad photo. One of them is `ir.yelloadwise.core.nativeads.views.RatioImageView` for Tepsell and the other is` ir.yelloadwise.adNetworks.admob.AdMobMediaView` for AdMob. Both of these can be placed exactly on top of each other. Tepsell Plus displays the desired view according to the advertisement ready for display.
> In version 1.2.3-rc4 and above, if you do not use the default layout, and you have designed and implemented a layout yourself, replace `com.google.android.gms.ads.formats.MediaView` with` ir.yelloadwise .adNetworks.admob.AdMobMediaView`.
* You can use the prepared view for this purpose with the following id or as a construction guide:
`native_banner`

* Give the ad container and the id of the layout to Yelloadwise to create a `AdHolder` as the following code:

```java
import ir.yelloadwise.AdHolder;
import ir.irancell.ir.Yelloadwise;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
AdHolder adHolder = Yelloadwise.createAdHolder(
      CONTEXT, adContainer, R.layout.native_banner);
```

### Requesting Ads
Use the `Yelloadwise.requestNativeAd` method to request an ad. For example:

```java
import ir.yelloadwise.AdRequestCallback;
import ir.irancell.ir.Yelloadwise;
.......
private void requestAd() {
    Yelloadwise.requestNativeAd(
                CONTEXT,
                ZONE_ID_NATIVE,
                new AdRequestCallback() {
                    @Override
                    public void response(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.response(yelloadwiseAdModel);

                        //Ad is ready to show
                        //Put the ad's responseId to your responseId variable
                        nativeAdResponseId = yelloadwiseAdModel.getResponseId();
                        showAd();
                    }

                    @Override
                    public void error(@NonNull String message) {
                    }
                });
}
```

> If you want to request an ad again in the error Callback method, be sure to do so with the help of a variable such as a counter. Because you can set a limit on the number of times to request by using that variable. For example, when you disable this ad position from the panel, if you request again each time in error Callback without limiting the number of times, your app will fall into an infinite loop and its performance will be disrupted.

### Showing Ads
After the onResponse method is called, the requested ad is ready to be displayed. You can show the ad using the following lines of code:

```java
private void showAd() {
    Yelloadwise.showNativeAd(CONTEXT, nativeAdResponseId, adHolder,
                new AdShowListener() {
                    @Override
                    public void onOpened(YelloadwiseAdModel yelloadwiseAdModel) {
                        super.onOpened(yelloadwiseAdModel);
                    }

                    @Override
                    public void onError(YelloadwiseErrorModel YelloadwiseErrorModel) {
                        super.onError(YelloadwiseErrorModel);
                    }
                });
}
```

### Removing Ads
At the end of the Activity life cycle, you should call the following method:

```java
private void destroyAd() {
    Yelloadwise.destroyNativeBanner(CONTEXT, nativeAdResponseId);
}

// For example in Activity's onDestory method
@Override
protected void onDestroy() {
    destroyAd();
    super.onDestroy();
}
```
