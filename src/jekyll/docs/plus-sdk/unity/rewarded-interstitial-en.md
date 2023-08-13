---
layout: classic-docs
title: Rewarded/Interstitial Ads in Unity
lang: en
permalink: /plus-sdk/unity/rewarded-interstitial/index.html
toc: true # table of contents
---

Implementing rewarded and interstitial (both video and banner) is in the same way. Just select the type of ad from the panel.

### Creating a Zone
first create rewarded-interstitial Zone from the [yelloadwise.ir panel](https://dashboard.yelloadwise.ir/) and use `ZoneId` when requesting Ad.

### Requesting Ads
According to the following code, you can request Ad using the `Yelloadwise.RequestRewardedVideoAd` method

```c#
public void Request () {
  Yelloadwise.RequestRewardedVideoAd (ZONE_ID,

			yelloadwiseAdModel => {
				Debug.Log ("on response " + yelloadwiseAdModel.responseId);
				_responseId = yelloadwiseAdModel.responseId;
			},
			error => {
				Debug.Log ("Error " + error.message);
			}
		);
}
```

Use `Yelloadwise.RequestInterstitialAd` for the interstitial Ad instead.

> If you want to request again in error Callback, Be sure to do this with the help of a variable as a Counter.
> Because with the help of that variable you can set a limit on the number of times for request.
> For example, when you disable this adZone from the panel and if you request again each time in error Callback , without limiting the number of times,
> Your program will fall into an infinite loop and its performance will get disrupted
{:data-title="Retry requests" data-color="green"}


### Showing Ads

After receiving the `responseId` parameter from the previous step, the Ad is ready to be shown, and you can display it as the following

```c#
public void Show () {
  yelloadwise.ShowRewardedVideoAd(_responseId,

			yelloadwiseAdModel => {
				Debug.Log ("onOpenAd " + yelloadwiseAdModel.zoneId);
			},
			yelloadwiseAdModel => {
				Debug.Log ("onReward " + yelloadwiseAdModel.zoneId);
			},
			yelloadwiseAdModel => {
				Debug.Log ("onCloseAd " + yelloadwiseAdModel.zoneId);
			},
			error => {
				Debug.Log ("onError " + error.errorMessage);
			}
		);
}
```

Use `Yelloadwise.ShowInterstitialAd` for the interstitial Ad instead. Also, You don't need the `onReward` callback in interstitial ad, and you can remove it

