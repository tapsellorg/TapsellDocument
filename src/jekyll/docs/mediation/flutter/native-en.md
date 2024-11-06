---
layout: no-sidebar-classic-docs
title: Native Ad
lang: en
permalink: /mediation/flutter/native/index.html
toc: true
---

Native ads are banner/video ad assets that are presented to users through UI components that are native to the platform. They are
shown using the same types of views with which you are already building your layouts, and can be formatted to match your
app's visual design.

This guide shows you how to integrate native ads from Tapsell into your Android app.

## Register Native ad

The first step is to register the Tapsell native ad adapters in your screen. 
Currently, only the `Tapsell` ad network supports native ad type and no other ad networks support this ad type:

```dart
import 'package:tapsell_mediation_legacy/tapsell_legacy_adapter.dart';

@override
void initState() {
  super.initState();
  TapsellLegacyAdapter.initialize();
}
```

## Request Ad

To request a new native ad, call the `requestNativeAd` function from the Tapsell package. The argument of the
method is the ad "Zone ID":

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.requestNativeAd(zoneId).then((adId) {
  // Ad loaded successfully
}).catchError((error) {
  // Failed to load ad
});
```

## Show Ad

To show an ad, call the `showNativeAd` function from the Tapsell package. 
The first argument of the method is the ad id received from the previous step. 
The second argument is an object of `NativeAdDispatch` containing the all state dispatch functions of the 
corresponding ad which is going to be shown:

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.showNativeAd(_adId, adDispatch, onAdImpression: () {
  // Ad impression
}, onAdClicked: () {
  // Ad clicked
}, onAdClosed: (ShowCompletionState completionState) {
  // Ad closed with completion state: COMPLETED | SKIPPED | UNKNOWN
}, onAdFailed: (String message) {
  // Failed to show ad
});
```

- `NativeAdDispatch` type in an object contains all ad contents which is going to be shown for each ad element and
are used to update the state of the ad content.
It covers `title`, `description`, `logo`, `bannerImageUrl`, `callToActionText` elements. 
The following code is an example of how to use it to show ads:

  ```dart
  import 'package:tapsell_mediation/tapsell.dart';
  
  NativeAdDispatch adDispatch = NativeAdDispatch();
   
  @override
  Widget build(BuildContext context) {
      return NativeAdWidget( // Your custom ad layout
        title: adData.title,
        description: adData.description,
        logo: adData.logo,
        callToActionText: adData.callToActionText,
        bannerImageUrl: adData.bannerImageUrl
    );
  }
  ```

- `ShowCompletionState` type in `onAdClosed` callback indicates whether the ad has been shown completely or skipped by the
user before completion. It will be `unknown` if this information is not provided by the corresponding ad network.

  ```dart
  enum ShowCompletionState {
    completed(0),
    skipped(1),
    unknown(2)
  }
  ```

## Click on ad

You need to call `clickNativeAd` function from the Tapsell package when the user clicks on the ad.
The following code is an example of how to manage the click event of the ad:

```dart
import 'package:tapsell_mediation/tapsell.dart';

TextButton(
  onPressed: () => {
  Tapsell.clickNativeAd(adId),
},
  child: Text(callToActionText)
),
```

## Destroy Ad

To destroy an ad, call the `destroyNativeAd` function from the Tapsell package. 
You can destroy the ad resources in the unmounting phase of the screen. 
The following code is an example of how to destroy the ad:

```ts
import 'package:tapsell_mediation/tapsell.dart';

@override
void dispose() {
  super.dispose();
  Tapsell.destroyNativeAd(_adId);
}
```

## Test keys

To use test app keys and zones, you can refer to this [link](../../test)

## Sample Project

for more info you can
use [Native Sample](https://github.com/tapsellorg/TapsellMediation-Flutter/blob/master/lib/screens/native.dart)
on GitHub repository.

