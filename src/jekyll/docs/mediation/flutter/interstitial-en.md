---
layout: no-sidebar-classic-docs
title: Interstitial Ad
lang: en
permalink: /mediation/flutter/interstitial/index.html
toc: true
---

Interstitials are full-screen ads that cover the interface of an app until closed by the user. These type of ads are
programmatically loaded and then shown at a suitable point during your application flow (e.g. after a level on a gaming
app has been completed, or game over). The ads can be preloaded in the background to ensure they're ready to go when
needed.

## Request Ad

To request a new interstitial ad, call the `requestInterstitialAd` function from the Tapsell package. The first argument
of the method is the ad "Zone ID":

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.requestInterstitialAd(zoneId)
    .then((adId) => {
        // Ad loaded successfully
    }).catchError((e) {
        // Failed to load ad
    });
```

## Show Ad

To show an ad, call the `showInterstitialAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestInterstitialAd` function.:

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.showInterstitialAd(adId, 
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

## Test keys

To use test app keys and zones, you can refer to this [link](../../test)

## Sample Project

for more info you can
use [Interstitial Sample](https://github.com/tapsellorg/TapsellMediation-Flutter/blob/master/lib/screens/interstitial.dart)
on GitHub repository.
