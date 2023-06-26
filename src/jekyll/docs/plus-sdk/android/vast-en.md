---
layout: classic-docs
title: Implementing Vast Ads
lang: en
permalink: /plus-sdk/android/vast/index.html
toc: true
---

### Linear Ads:
Video Ads that appear in the start, at the middle or in the end of the clip.

### Pre-roll Ads:
Video Ads that appear at the beginning of the clip.
 At the moment TapsellPlus SDK supports Pre-roll Ads that you can use that, according to these documentation.

### AdZone Creation
First Create a Vast(Pre-roll) AdZone from [Tapsell Panel](https://dashboard.tapsell.ir/) and use `zonId` in the time of requesting and showing Ads.

### request and show Ads
You should use IMA library from Google to Show Vast Ads. you can see IMA library's documentation from [this link](https://developers.google.com/interactive-media-ads/docs/sdks/android)  

f you want to use a Video player instead of Exo Player you can get help from 
[this link](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/custom_ad_playback). In IMA you need `ad tag URL` to show Ads. for this purpose you can use the following method:

```java
TapsellPlus.getVastTag(ZONE_ID)
```
Implement other steps of implementation according to IMA documentation or Tapsell`s sample project

### Companion Ads

Look lik Banner Ads that are shown beside the video ads. to implement these Ads you can use [their documentation link](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/companions)
in google's IMA library. Tapsell also supports these kinds of Ads and you can add them to your project according to google's documentation and also TapsellPlus sample project.

### Request Ads from Tapsell library

```java
TapsellPrerollAd tapsellPrerollAd = TapsellPlus.requestVastAd(
        activity,
        playerView,         // `VideoPlayer` || `StyledPlayerView` (ExoPlayer)
        VIDEO_URL,          // Your video url
        adContainer,        // ViewGroup for ad content
        companionContainer, // ViewGroup for comapnion ad (Optional)
        new VastRequestListener() {
            @Override
            public void onAdsLoaderCreated(ImaAdsLoader adsLoader) {
              // AdsLoader is created, you can use it to load ads in your player
            }

            @Override
            public void onAdEvent(AdEvent adEvent) {
              // AdEvent is received, you can use it to handle ad events
            }

            @Override
            public void onAdError(AdErrorEvent adErrorEvent) {
              // AdErrorEvent is received, you can use it to handle ad errors
            }
        });
```

### Sample Project
for more info you can use [our sample project](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
on GitHub repository.
