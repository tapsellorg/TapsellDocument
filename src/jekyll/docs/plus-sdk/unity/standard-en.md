---
layout: classic-docs
title: Standard Banner in Unity
lang: en
permalink: /plus-sdk/unity/standard/index.html
toc: true # table of contents
---

## Creating a Zone
First, create a standard zone from the [Tapsell panel](https://dashboard.tapsell.ir/).

### Requesting Ads
Use the `TapsellPlus.RequestStandardBannerAd` method to request an ad. For example:

```c#
TapsellPlus.RequestStandardBannerAd(ZoneID, BANNER_TYPE,
            tapsellPlusAdModel => {
                Debug.Log ("on response " + tapsellPlusAdModel.responseId);
                _responseId = tapsellPlusAdModel.responseId;
            },
            error => {
                Debug.Log ("Error " + error.message);
            }
        );
```

> If you want to request an ad again in the error Callback method, be sure to do so with the help of a variable such as a counter. 
> Because you can set a limit on the number of times to request by using that variable. 
> For example, when you disable this ad position from the panel, if you request again each time in error Callback without limiting the number of times,
> your app will fall into an infinite loop and its performance will be disrupted.
> {:data-title="Retry requests" data-color="green"}

### Showing Ads

After receiving the `responseId` parameter from the previous step, the Ad is ready to be shown, and you can display it as the following


```c#
TapsellPlus.ShowStandardBannerAd(_responseId, HORIZONTAL_GRAVITY, VERTICAL_GRAVITY,

            tapsellPlusAdModel => {
                Debug.Log ("onOpenAd " + tapsellPlusAdModel.zoneId);
            },
            error => {
                Debug.Log ("onError " + error.errorMessage);
            }
        );
```

BANNER_TYPE is the banner display size and can be the following values:

|    Banner Type    |   Size    |            Supported Ad Networks             |
|:-----------------:|:---------:|:--------------------------------------------:|
|  `BANNER_320x50`  | `320x50`  | Tapsell, AdMob, AppLovin, UnityAds, AdColony |
| `BANNER_320x100`  | `320x100` |                Tapsell, AdMob                |
| `BANNER_250x250`  | `250x250` |                   Tapsell                    |
| `BANNER_300x250`  | `300x250` |      Tapsell, AdMob, AppLovin, AdColony      |
|  `BANNER_468x60`  | `468x60`  |               AdMob, UnityAds                |
|  `BANNER_728x90`  | `728x90`  |     AdMob, AppLovin, UnityAds, AdColony      |
| `BANNER_160x600`  | `160x600` |                   AdColony                   |
| `BANNER_ADAPTIVE` | `320x50`  |                Tapsell, AdMob                |

`VERTICAL_GRAVITY` and` HORIZONTAL_GRAVITY` are the position of the banner on the page and can be the following values.

```c#
Gravity.TOP - Gravity.BOTTOM - Gravity.LEFT - Gravity.RIGHT - Gravity.CENTER
```

### Showing and hiding ads
By default, when a banner ad is received, it is added to the page and becomes Visible. Use this code if for any reason you want to hide the banner or show the hidden banner:

```c#
TapsellPlus.HideStandardBannerAd();
TapsellPlus.TapsellPlus.DisplayStandardBannerAd();
```

### Removing Ads
At the end of the view life cycle or whenever you want to close the ad, you should call the following method:

```c#
TapsellPlus.DestroyStandardBannerAd(_responseId);
```
