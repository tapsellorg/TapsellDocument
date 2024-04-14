---
layout: classic-docs
title: Testing AdNetworks
lang: en
permalink: /plus-sdk/unity/adnetworks-test/index.html
toc: true
---

* To make sure of the Performance accuracy of the Adnetworks that  you added, use `ZoneId` relevant to each  of them. every `ZoneID` refers to one adnetwork and one Ad type and the ad shows on testing mode.

* Pay attention that you must use test`s `appId` on testing mode

* When testing you must not use Iran`s IP

* Do testing on build release mode

For testing use this `appId`.

### Tapsell ID

```c#
const string TestAppId = "alsoatsrtrotpqacegkehkaiieckldhrgsbspqtgqnbrrfccrtbdomgjtahflchkqtqosa";
TapsellPlus.Initialize(TestAppId,
            adNetworkName => Debug.Log(adNetworkName + " Initialized Successfully."),
            error => Debug.Log(error.ToString()));
```

> **Using Admob Sdk**
>
>  To use Admob, you should put its needed Tag in manifest. for more information about the implementation refer to
> [AdNetworks documentation](/plus-sdk/android/add-adnetworks/index.html)
>
> you do not need the original `appId` for testing Admob and you can use test appId
>
>
> ```
> ca-app-pub-3940256099942544~3347511713
> ```


### AdZones

For every AdNetwork and any Ad, use the Following ZoneIDs for request and show Ad. At the moment, only the following AdTypes/AdNetworks are usable.

| Ad Network |    Ad Type     |           ZoneId           |
|:----------:|:--------------:|:--------------------------:|
|  Tapsell   | Rewarded Video | `5cfaa802e8d17f0001ffb28e` |
|  Tapsell   |  Interstitial  | `5cfaa942e8d17f0001ffb292` |
|  Tapsell   |     Native     | `5cfaa9deaede570001d5553a` |
|  Tapsell   |    Standard    | `5cfaaa30e8d17f0001ffb294` |
|   Admob    | Rewarded Video | `5cfaa8aee8d17f0001ffb28f` |
|   Admob    |  Interstitial  | `5cfaa9b0e8d17f0001ffb293` |
|   Admob    |    Standard    | `5cfaaa4ae8d17f0001ffb295` |
|   Admob    |     Native     | `5d123c9968287d00019e1a94` |
| Unity Ads  | Rewarded Video | `5cfaa8eae8d17f0001ffb291` |
| Unity Ads  |  Interstitial  | `608d1c1c2d8e7e0001348111` |
| Unity Ads  |    Standard    | `608d20a7fb661b000190bfe4` |
| Chartboost | Rewarded Video | `5cfaa8cee8d17f0001ffb290` |
| Chartboost |  Interstitial  | `60c5b303d756bf0001891f1c` |
|  AppLovin  | Rewarded Video | `5d3eb48c3aef7a0001406f84` |
|  AppLovin  |  Interstitial  | `5d3eb4fa3aef7a0001406f85` |
|  AppLovin  |    Standard    | `5d3eb5337a9b060001892441` |
| Mintegral  | Rewarded Video | `612232e33cf0307ab73e9a3f` |
| Mintegral  |  Interstitial  | `612b6f24e2645f79d3f3549e` |
| Mintegral  |    Standard    | `615800246cd7ee3cd28f15d6` |
