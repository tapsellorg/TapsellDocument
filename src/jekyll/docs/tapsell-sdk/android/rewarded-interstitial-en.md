---
layout: classic-docs
title: Interstitial/Rewarded Ads in Android
lang: en
permalink: /tapsell-sdk/android/rewarded-interstitial/index.html
toc: true # table of contents
---
## Make Zone
First of all, you must create a new interstitial/rewarded zone in your application dashboard and use the generated zoneId to request/show ads.

## Request
To request an Ad in your application, use the following method.

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

When `onAdAvailable` function is called, the ad is ready to be shown.  

## Show Ad
You can start showing the ad using the showAd method.  
To get open, close, error and reward callbacks you can use overloaded showAd method with callbacks.

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