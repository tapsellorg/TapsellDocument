---
layout: no-sidebar-classic-docs
title: Interstitial Ad
lang: en
permalink: /mediation/reactnative/interstitial/index.html
toc: true
---

Interstitials are full-screen ads that cover the interface of an app until closed by the user. These type of ads are
programmatically loaded and then shown at a suitable point during your application flow (e.g. after a level on a gaming
app has been completed, or game over). The ads can be preloaded in the background to ensure they're ready to go when
needed.

## Request Ad

To request a new interstitial ad, call the `requestInterstitialAd` function from the Tapsell package. The first argument
of the method is the ad "Zone ID":

```ts
import { requestInterstitialAd } from '@react-native-tapsell-mediation/tapsell';

requestInterstitialAd(zoneId)
  .then((adId: string) => {
    // Ad loaded successfully
  })
  .catch((error: string) => {
    // Failed to load ad
  });
```

## Show Ad

To show an ad, call the `showInterstitialAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestInterstitialAd` function.:

```ts
import { showInterstitialAd } from '@react-native-tapsell-mediation/tapsell';

showInterstitialAd(adId, {
  onAdImpression: () => {
    // Ad impression
  },
  onAdClicked: () => {
    // Ad clicked
  },
  onAdClosed: (completionState: CompletionState) => {
    // Ad closed with completion state: COMPLETED | SKIPPED | UNKNOWN
  },
  onAdFailed: (error: string) => {
    // Failed to show ad
  },
});
```

`CompletionState` type in `onAdClosed` callback indicates whether the ad has been shown completely or skipped by the
user before completion. It will be `UNKNOWN` if this information is not provided by the corresponding ad network.

```ts
enum CompletionState {
  COMPLETED = 0,
  SKIPPED = 1,
  UNKNOWN = 2,
}
```

## Test keys

To use test app keys and zones, you can refer to this [link](../test)
