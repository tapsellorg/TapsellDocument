---
layout: classic-docs
title: Implementing Native Video Ads
lang: en
permalink: /plus-sdk/android/native-vid/index.html
toc: true
---

### Creating a Zone
First, create a native video zone from the [Tapsell panel](https://dashboard.tapsell.ir/) and use the `zoneId` when requesting or showing an ad.

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

### Requesting Ads
Use the `TapsellPlus.requestNativeVideo` method to request an ad. For example:

```java
String zoneId = "theZoneIdYouHavaForThis";
String responseId = "";

TapsellPlus.requestNativeVideo(this, zoneId, new AdRequestCallback() {
    @Override
    public void response(TapsellPlusAdModel tapsellPlusAdModel) {
        responseId = tapsellPlusAdModel.getResponseId(); // SAVE the responseID
    }
    @Override
    public void error(String s) {
      // ERROR occurred
    }
});
```

Then save the responseId. This id is required to display the ad.

### Showing Ads

The following are required from the previous steps:
- responseId
- adContainer

To display the ad, first create an object of `TapsellPlusVideoAdHolder` class according to the following format and then call the request to display the ad:

```java
TapsellPlusVideoAdHolder holder = new TapsellPlusVideoAdHolder.Builder()
  .setContentViewTemplate(ir.tapsell.sdk.R.layout.tapsell_content_video_ad_template)
  .setAppInstallationViewTemplate(ir.tapsell.sdk.R.layout.tapsell_app_installation_video_ad_template)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();

TapsellPlus.showNativeVideo(this, responseId, holder, new AdShowListener() {
    @Override
    public void onOpened(TapsellPlusAdModel tapsellPlusAdModel) {
      // Video Ad is opened
    }
    @Override
    public void onError(TapsellPlusErrorModel tapsellPlusErrorModel) {
      // Error when showing video ad
    }
});
```

If you want to use your custom layout, assign the following ids according to the type of view:

|       view       |              id              | type  |
|:------------:|:----------------------------:|:-:|
|     logo     |     `tapsell_nativead_logo`    | `ImageView`  |
|     title    |    `tapsell_nativead_title`    | `TextView`  |
| ad indicator |  `tapsell_nativead_sponsored`  | `View`  |
|  description | `tapsell_nativead_description` | `TextView`  |
|    banner    |    `tapsell_nativead_video`   | ir.tapsell.sdk.nativeads.views.videoplayer.VideoContainer  |
|    button    |     `tapsell_nativead_cta`     | `TextView`  |
| rating |  `tapsell_nativead_rating`  | ir.tapsell.sdk.nativeads.views.RateStarView  |

The rating key is only used in advertisements to install an application.

Then give these layouts to AdHolder:

```java
TapsellPlusVideoAdHolder holder = new TapsellPlusVideoAdHolder.Builder()
  .setContentViewTemplate(R.layout.my_custom_native_video_layout)
  .setAppInstallationViewTemplate(R.layout.my_custom_native_video_application_layout)
  .setAdContainer(findViewById(R.id.adContainer))
  .build();
```

> The `setAppInstallationViewTemplate` method refers to a layout that has id of `rating`.
