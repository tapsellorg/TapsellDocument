---
layout: classic-docs
title: Interstitial/Rewarded Ads in Android
lang: en
permalink: /tapsell-sdk/android/rewarded-interstitial/index.html
toc: true # table of contents
---
>The implementation of interstitial and rewarded ads (banner and video) is the same. You have to choose the zone type in the panel.

## Creating a Zone
First, create a zone from the [Tapsell panel](https://dashboard.tapsell.ir/) and use the `zoneId` when requesting or showing an ad.

## Requesting Ads
To request an ad in your application, use the following method:

```java
Tapsell.requestAd(CONTEXT,
        ZONE_ID,
        new TapsellAdRequestOptions(),
        new TapsellAdRequestListener() {
            @Override
            public void onAdAvailable(String adId) {
              // KEEP adId
            }

            @Override
            public void onError(String message) {
            }
        });
```

The first argument is `CONTEXT`.  
The second argument is the `ZONE_ID` which you can get from your panel.  
The third argument `OPTIONS` is of type `TapsellAdRequestOptions`. You can configure your ad request with this argument.
The fourth argument is `TapsellAdRequestListener`.
  
The details of `TapsellAdRequestListener` methods are shown in the table below:

| Functionality | Method |
| - | - |
| The requested ad is ready to be shown. The ad id is in the `adId` variable | `onAdAvailable` |
| An error has occured and you can see the error message in the `message` variable | `onError` | 

### Request Options
You can change the way a video is cached with the help of the argument `options`, such as the lines below:
```java
TapsellAdRequestOptions options = new TapsellAdRequestOptions();
options.setCacheType(CACHE_TYPE);
```
The `CACHE_TYPE` attribute can take the values below:

| Description | Value |
| - | - |
| It starts to download the video while showing the ad | `TapsellAdRequestOptions.CACHE_TYPE_STREAMED` |
| It downloads the video before showing the ad | `TapsellAdRequestOptions.CACHE_TYPE_CACHED` |

>To lower the data usage, only use the `CACHE_TYPE_CACHED` option when the probability of user watching the ad is high.

## Showing Ads
You can start showing the ad using the following lines of code:

```java
Tapsell.showAd(CONTEXT,
        ZONE_ID,
        AD_ID,
        new TapsellShowOptions(),
        new TapsellAdShowListener() {
            @Override
            public void onOpened() {
            }

            @Override
            public void onClosed() {
            }

            @Override
            public void onError(String message) {
            }

            @Override
            public void onRewarded(boolean completed) {
            }
        });
```

The first argument is `CONTEXT`. 
The second argument is `ZONE_ID`, which you used to request an ad.  
The third argument is `AD_ID`, which you get in the `onAdAvailable` callback method.
The fourth argument is `TapsellShowOptions` that you can use to configure how to show your ad.  
The fifth argument is `TapsellAdShowListener` that you can use to follow the steps of showing the ad.  

The `TapsellAdShowListener` methods are shown in the table below:

| Functionality | Method |
| - | - |
| It is called when the ad is opened | `onOpened` |
| It is called when the ad is closed | `onClosed` |
| It is called when an error occurs during the process of showing the ad | `onError` |
| It shows the status of receiving the rewarded in the rewarded ads | `onRewarded` |

### Show Options
You can configure how to show your ad with the help of the `showOptions` argument.
```java
TapsellShowOptions showOptions = new TapsellShowOptions();
showOptions.setBackDisabled(true|false);
showOptions.setImmersiveMode(true|false);
showOptions.setShowDialog(true|false);
showOptions.setRotationMode(ROTATION_MODE);
```
You can give each of the methods above `true` or `false` to enable or disable that functionality. The possible values for `ROTATION_MODE` is explained further down.

The functionality of each method is explained in the table below:

| Functionality | Method |
| - | - |
| Disabling the back button while showing the ad | `setBackDisabled` |
| Enabling the immersive mode while showing the ad | `setImmersiveMode` |
| Showing a warning dialog while closing the ad before it finishes showing | `setShowDialog` |
| Determining the rotation mode of the phone when the ad is displayed | `setRotationMode` |
  
  
The `setRotationMode` attribute can take the values below:

| Description | Value |
| - | - |
| Vertical | `TapsellShowOptions.ROTATION_LOCKED_PORTRAIT` |
| Horizontal | `TapsellShowOptions.ROTATION_LOCKED_LANDSCAPE` |
| Based on the state of the phone | `TapsellShowOptions.ROTATION_UNLOCKED` |
| Reversed vertical | `TapsellShowOptions.ROTATION_LOCKED_REVERSED_PORTRAIT` |
| Reversed horizontal | `TapsellShowOptions.ROTATION_LOCKED_REVERSED_LANDSCAPE` |

## Getting The Result of Rewarded Ads
If the `completed` variable in the `rewarded` method is `true` in the rewarded ads, you can give the user her/his reward.
