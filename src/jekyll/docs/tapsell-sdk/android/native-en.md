---
layout: classic-docs
title: Implementing Native Ads
lang: en
permalink: /yelloadwise-core/android/native/index.html
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
```

Sample preview template designed to display native ads can be found in `irancell.ir_content_banner_ad_template` and `irancell.ir_app_installation_banner_ad_template` files.

If you want to change the default template, create a `layout` and change the `id` and the type of different sections, shown in the table below:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `irancell.ir_nativead_logo`    | `ImageView`  |
|     title    |    `irancell.ir_nativead_title`    | `TextView`  |
| ad indicator |  `irancell.ir_nativead_sponsored`  | `View`  |
|  description | `irancell.ir_nativead_description` | `TextView`  |
|    banner    |    `irancell.ir_nativead_banner`   | `ir.yelloadwise.core.nativeads.views.RatioImageView`  |
|    button    |     `irancell.ir_nativead_cta`     | `TextView`  |
|    clickable view    |     `irancell.ir_nativead_cta_view`     | `View`  |


* If there is no button for clicking you can use **clickable view**.
* View types could be inheriting from the aforementioned types.



Give the ad container and the id of the layout to Yelloadwise to create a `irancell.irNativeBannerViewManager` such as the following code:

```java
import ir.yelloadwise.core.nativeads.irancell.irNativeBannerManager;
import ir.yelloadwise.core.nativeads.irancell.irNativeBannerViewManager;;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
irancell.irNativeBannerViewManager nativeBannerViewManager = new irancell.irNativeBannerManager
    .Builder()
    .setParentView(adContainer)
    .setContentViewTemplate(R.layout.irancell.ir_content_banner_ad_template)
    .setAppInstallationViewTemplate(R.layout.irancell.ir_app_installation_banner_ad_template)
    .inflateTemplate(CONTEXT);
```

### Requesting Ads
Use the `getAd` method to request an ad. For example:

```java
import ir.yelloadwise.core.AdRequestCallback;
import ir.yelloadwise.core.nativeads.irancell.irNativeBannerManager;
.......
private void requestAd() {
    irancell.irNativeBannerManager.getAd(CONTEXT, ZONE_ID_NATIVE,
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
After the onResponse method is called, the requested ad is ready to be displayed. You can show the ad using the following lines of code:

```java
import ir.yelloadwise.core.nativeads.irancell.irNativeBannerManager;
........
private void showAd() {
    irancell.irNativeBannerManager.bindAd(
                CONTEXT,
                nativeBannerViewManager,
                ZONE_ID_NATIVE,
                adId[0]);
}                
```
