---
layout: no-sidebar-classic-docs
title: Banner Ad
lang: en
permalink: /mediation/reactnative/banner/index.html
toc: true
---

Banner ads are partial ads which can be integrated within your existing application. Unlike Interstitial and
Rewarded Ads, a Banner only takes up a limited area of the application and displays an advert within the area. This
allows you to integrate adverts without a disruptive action.

## Request Ad

To request a new banner ad, call the `requestBannerAd` function from the Tapsell package. The first argument of the
method is the ad "Zone ID" and the second argument is the banner size:

```ts
import { requestBannerAd } from '@react-native-tapsell-mediation/tapsell';

requestBannerAd(zoneId, bannerSize)
  .then((adId: string) => {
    // Ad loaded successfully
  })
  .catch((error: string) => {
    // Failed to load ad
  });
```

BannerSize is an optional enum parameter determining the size of the shown ad, with the following values:

```ts
enum BannerSize {
  BANNER_320_50, // Default value if the parameter is not provided
  BANNER_320_90,
  BANNER_320_100,
  BANNER_250_250,
  BANNER_300_250,
  BANNER_468_60,
  BANNER_728_90,
  BANNER_160_600,
}
```

## Show Ad

To show an ad, call the `showBannerAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestBannerAd` function.:

```ts
import { showBannerAd } from '@react-native-tapsell-mediation/tapsell';

showBannerAd(adId, {
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

## Destroy Ad

To destroy an ad, call the `destroyBannerAd` function from the Tapsell package:

```ts
import { destroyBannerAd } from '@react-native-tapsell-mediation/tapsell';

destroyBannerAd(adId);
```

## Test keys

To use test app keys and zones, you can refer to this [link](../../test)


## Sample Project

for more info you can
use [Banner Sample](https://github.com/tapsellorg/TapsellMediation-ReactNativeSample/tree/master/src/screens/banner)
on GitHub repository.

