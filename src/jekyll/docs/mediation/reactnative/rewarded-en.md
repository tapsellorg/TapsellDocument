---
layout: no-sidebar-classic-docs
title: Rewarded Ad
lang: en
permalink: /mediation/reactnative/rewarded/index.html
toc: true
---

Rewarded ads are full-screen ads that cover the interface of an app until closed by the user. The content of a rewarded
ad might be varying depending on the ad network type in the mediation.

The purpose of a rewarded ad is to reward users with something after completing the video. If the user completes the
action, you can reward them in your app.

## Request Ad

To request a new rewarded ad, call the `requestRewardedAd` function from the Tapsell package. The first argument of the
method is the ad "Zone ID":

```ts
import { requestRewardedAd } from '@react-native-tapsell-mediation/tapsell';

requestRewardedAd(zoneId)
  .then((adId: string) => {
    // Ad loaded successfully
  })
  .catch((error: string) => {
    // Failed to load ad
  });
```

=== "ts"

    ``` ts
    import { requestRewardedAd } from '@react-native-tapsell-mediation/tapsell';

    requestRewardedAd(zoneId)
    .then((adId: string) => {
    // Ad loaded successfully
    })
    .catch((error: string) => {
    // Failed to load ad
    });
    ```

=== "js"

    ``` js
    import { requestRewardedAd } from '@react-native-tapsell-mediation/tapsell';

    requestRewardedAd(zoneId)
    .then((adId) => {
    // Ad loaded successfully
    })
    .catch((error) => {
    // Failed to load ad
    });
    ```

## Show Ad

To show an ad, call the `showRewardedAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestRewardedAd` function.:

```ts
import { showRewardedAd } from '@react-native-tapsell-mediation/tapsell';

showRewardedAd(adId, {
  onAdImpression: () => {
    // Ad impression
  },
  onAdClicked: () => {
    // Ad clicked
  },
  onRewarded: () => {
    // Ad rewarded
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

To use test app keys and zones, you can refer to this [link](../../test)


## Sample Project

for more info you can
use [Rewarded Sample](https://github.com/tapsellorg/TapsellMediation-ReactNativeSample/tree/master/src/screens/rewarded)
on GitHub repository.
