---
layout: classic-docs
title: Implementing Native Ads
lang: en
permalink: /yelloadwise-app/android/native/index.html
toc: true
---
### Creating a Zone
First, create a native zone from the [Yelloadwise panel](https://business.yelloadwise.ir/) and use the `zoneId` when requesting or showing an ad.

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

Sample preview template designed to display native ads can be found in `yelloadwisecontent_banner_ad_template` and `yelloadwiseapp_installation_banner_ad_template` files.

If you want to change the default template, create a `layout` and change the `id` and the type of different sections, shown in the table below:

|       view       |                                         id                                          | type  |
|:------------:|:-----------------------------------------------------------------------------------:|:-:|
|     logo     |                                  `yelloadwise_nativead_logo`                                   | `ImageView`  |
|     title    |                            `yelloadwise_nativead_title`                             | `TextView`  |
| ad indicator |                          `yelloadwise_nativead_sponsored`                           | `View`  |
|  description |                         `yelloadwise_nativead_description`                          | `TextView`  |
|    banner    |                            `yelloadwise_nativead_banner`                            | `ir.yelloadwise.app.nativeads.views.RatioImageView`  |
|    button    |                             `yelloadwisenativead_cta`                              | `TextView`  |
|    clickable view    |                           `yelloadwisenativead_cta_view`                           | `View`  |


* If there is no button for clicking you can use **clickable view**.
* View types could be inheriting from the aforementioned types.



Give the ad container and the id of the layout to Yelloadwise to create a `yelloadwise.irNativeBannerViewManager` such as the following code:

```java
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerViewManager;;
...
ViewGroup adContainer = findViewById(R.id.adContainer);
...
YelloadwiseNativeBannerViewManager nativeBannerViewManager = new YelloadwiseNativeBannerManager
    .Builder()
    .setParentView(adContainer)
    .setContentViewTemplate(R.layout.yelloadwisecontent_banner_ad_template)
    .setAppInstallationViewTemplate(R.layout.yelloadwiseapp_installation_banner_ad_template)
    .inflateTemplate(CONTEXT);
```

### Requesting Ads
Use the `getAd` method to request an ad. For example:

```java
import ir.yelloadwise.app.AdRequestCallback;
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
.......
private void requestAd() {
    YelloadwiseNativeBannerManager.getAd(CONTEXT, ZONE_ID_NATIVE,
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
import ir.yelloadwise.app.nativeads.YelloadwiseNativeBannerManager;
........
private void showAd() {
    YelloadwiseNativeBannerManager.bindAd(
                CONTEXT,
                nativeBannerViewManager,
                ZONE_ID_NATIVE,
                adId[0]);
}                
```
