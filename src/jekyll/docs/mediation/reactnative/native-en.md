---
layout: no-sidebar-classic-docs
title: Native Ad
lang: en
permalink: /mediation/reactnative/native/index.html
toc: true
---

Native ads are banner/video ad assets that are presented to users through UI components that are native to the platform. They are
shown using the same types of views with which you are already building your layouts, and can be formatted to match your
app's visual design.

This guide shows you how to integrate native ads from Tapsell into your Android app.

## Register Native ad

The first step is to register the Tapsell native ad adapters in your screen. 
Currently, only the `Tapsell` ad network supports native ad type and no other ad networks support this ad type:

```ts
import { TapsellLegacyAdapter } from '@react-native-tapsell-mediation/legacy';

useEffect(() => {
  TapsellLegacyAdapter.register();
}, []);
```

## Request Ad

To request a new native ad, call the `requestNativeAd` function from the Tapsell package. The argument of the
method is the ad "Zone ID":

```ts
import { requestNativeAd } from '@react-native-tapsell-mediation/tapsell';

requestNativeAd(zoneId)
  .then((adId: string) => {
    // Ad loaded successfully
  })
  .catch((error: string) => {
    // Failed to load ad
  });
```

## Show Ad

To show an ad, call the `showNativeAd` function from the Tapsell package. 
The first argument of the method is the ad id received from the previous step. 
The second argument is an object of `NativeAdDispatch` containing the all state dispatch functions of the 
corresponding ad which is going to be shown:

```ts
import { showNativeAd } from '@react-native-tapsell-mediation/tapsell';

showNativeAd(adId, adDispatch, {
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

- `NativeAdDispatch` type in an object contains all state dispatch functions of the ad content which is going to be shown and
are used to update the state of the ad content.
These dispatch functions are `setTitle`, `setDescription`, `setLogo`, `setBannerImageUrl`, `setCallToActionText`. 
The following code is an example of how to use these dispatch functions:

  ```ts
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [callToActionText, setCallToActionText] = useState('');
   
  // ... Your screen logics ...
  
  const adDispatch = {
    setTitle: setTitle,
    setDescription: setDescription,
    setLogo: setLogo,
    setBannerImageUrl: setBannerImageUrl,
    setCallToActionText: setCallToActionText,
  }
  ```

- `CompletionState` type in `onAdClosed` callback indicates whether the ad has been shown completely or skipped by the
user before completion. It will be `UNKNOWN` if this information is not provided by the corresponding ad network.

  ```ts
  enum CompletionState {
    COMPLETED = 0,
    SKIPPED = 1,
    UNKNOWN = 2,
  }
  ```

## Click on ad

You need to call `clickNativeAd` function from the Tapsell legacy package when the user clicks on the ad.
The following code is an example of how to manage the click event of the ad:

```tsx
import { clickNativeAd } from '@react-native-tapsell-mediation/tapsell';

<Button
  title="Call To Action Button"
  onPress={() =>
    clickNativeAd(adId)
  }
/>
```

## Destroy Ad

To destroy an ad, call the `destroyNativeAd` function from the Tapsell package. 
You can destroy the ad resources in the unmounting phase of the screen. 
The following code is an example of how to destroy the ad:

```ts
import { destroyNativeAd } from '@react-native-tapsell-mediation/tapsell';

useEffect(() => {
  return () => {
    destroyNativeAd(adId);
  };
}, []);
```

## Caching Native Ads

To cache native ads, you can use the `requestMultipleNativeAds` method to fetch and store up to **5** ads at once.

```ts
requestMultipleNativeAd(zoneId: string, maximumCount: number): Promise<string>;
```

This method allows you to simultaneously request multiple ads (up to 5) and invoke the provided listener up to the requested count. This way, you can pre-load several ads before displaying them.

You can utilize this feature in infinite scrolling lists or scenarios that require displaying multiple ads. Please note that this functionality is exclusively available for native ads.

## Test keys

To use test app keys and zones, you can refer to this [link](../../test)

## Sample Project

for more info you can
use [Native Sample](https://github.com/tapsellorg/TapsellMediation-ReactNativeSample/tree/master/src/screens/native)
on GitHub repository.

