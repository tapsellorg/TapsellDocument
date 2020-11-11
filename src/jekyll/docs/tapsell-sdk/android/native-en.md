---
layout: classic-docs
title: Implementing Native Ads
lang: en
permalink: /tapsell-sdk/android/native/index.html
toc: true
---
### Creating a Zone
First, create a native zone from the [Tapsell panel](https://dashboard.tapsell.ir/) and use the `zoneId` when requesting and or showing an ad.

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
```

Sample preview template designed to display native ads can be found in `tapsell_content_banner_ad_template` and `tapsell_app_installation_banner_ad_template` files.

if you want to change the default template, create a `layout` and change the `id` and the type of different sections, shown in the table below:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_banner`   | `ir.tapsell.sdk.nativeads.views.RatioImageView`  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
|    clickable view    |     `tapsell_nativead_cta_view`     | `View`  |


* If there is no button for clicking you can use **clickable view**.
* View types could be inheriting from the aforementioned types.



Give the ad container and the id of the layout to Tapsell to create a `TapsellNativeBannerViewManager` such as the following code:

```java
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
import ir.tapsell.sdk.nativeads.TapsellNativeBannerViewManager;;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
TapsellNativeBannerViewManager nativeBannerViewManager = new TapsellNativeBannerManager
    .Builder()
    .setParentView(adContainer)
    .setContentViewTemplate(R.layout.tapsell_content_banner_ad_template)
    .setAppInstallationViewTemplate(R.layout.tapsell_app_installation_banner_ad_template)
    .inflateTemplate(CONTEXT);
```

### Requesting Ads
use the `getAd` method to request an ad. For example:

```java
import ir.tapsell.sdk.AdRequestCallback;
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
.......
private void requestAd() {
    TapsellNativeBannerManager.getAd(CONTEXT, ZONE_ID_NATIVE,
                new AdRequestCallback() {
                    @Override
                    public void onResponse(String[] adId) {
                        //ad is ready to show
                    }

                    @Override
                    public void onFailed(String message) {
                        
                    }
                });
}
```

### Showing Ads
After the onResponse method is called, the requested ad is ready to be displayed. You can show the add using the following lines of code:

```java
import ir.tapsell.sdk.nativeads.TapsellNativeBannerManager;
........
private void showAd() {
    TapsellNativeBannerManager.bindAd(
                CONTEXT,
                nativeBannerViewManager,
                ZONE_ID_NATIVE,
                adId[0]);
}                
```