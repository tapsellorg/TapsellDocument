---
layout: no-sidebar-classic-docs
title: Banner Ad
lang: en
permalink: /mediation/flutter/banner/index.html
toc: true
---

Banner ads are partial ads which can be integrated within your existing application. Unlike Interstitial and
Rewarded Ads, a Banner only takes up a limited area of the application and displays an advert within the area. This
allows you to integrate adverts without a disruptive action.

## Request Ad

To request a new banner ad, call the `requestBannerAd` function from the Tapsell package. The first argument of the
method is the ad "Zone ID" and the second argument is the banner size:

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.requestBannerAd(zoneId, bannerSize: BannerSize.banner_320_50)
    .then((adId) => {
        // Ad loaded successfully
    }).catchError((e) {
        // Failed to load ad
    });
```

BannerSize is an optional enum parameter determining the size of the shown ad, with the following values:

```dart
enum BannerSize {
  banner_300_50, // Default value if the parameter is not provided
  banner_320_50,
  banner_320_90,
  banner_320_100,
  banner_250_250,
  banner_300_250,
  banner_468_60,
  banner_728_90,
  banner_160_600,
  bannerAdaptive
}
```

## Show Ad

To show an ad, call the `showBannerAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestBannerAd` function.:

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.showBannerAd(adId, bannerPosition: BannerPosition.bottom,
    onAdImpression: () {
      // Ad impression
    }, 
    onAdClicked: () {
      // Ad clicked
    }, 
    onAdClosed: (ShowCompletionState completionState) {
      // Ad closed with completion state: completed | skipped | unknown
    },
    onAdFailed: (String message) {
      // Failed to show ad
    });
```

`ShowCompletionState` type in `onAdClosed` callback indicates whether the ad has been shown completely or skipped by the
user before completion. It will be `UNKNOWN` if this information is not provided by the corresponding ad network.

```dart
enum ShowCompletionState {
  completed(0),
  skipped(1),
  unknown(2)
}
```

## Destroy Ad

To destroy an ad, call the `destroyBannerAd` function from the Tapsell package:

```dart
import { destroyBannerAd } from '@react-native-tapsell-mediation/tapsell';

destroyBannerAd(adId);
```

## Test keys

To use test app keys and zones, you can refer to this [link](../../test)


## Sample Project

for more info you can
use [Banner Sample](https://github.com/tapsellorg/TapsellMediation-FlutterSample/tree/master/src/screens/banner)
on GitHub repository.

