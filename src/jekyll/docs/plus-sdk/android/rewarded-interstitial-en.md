---
layout: classic-docs
title: Implementing rewarded-interstitial Ads
lang: en
permalink: /plus-sdk/android/rewarded-interstitial/index.html
toc: true
---
### AdZone Creation
first create rewarded-interstitial Zone from the [yelloadwise panel](https://dashboard.yelloadwise.ir/) and use `ZoneId` when requesting Ad.

### Request Ad
According to the following code, you can request Ad using the `Yelloadwise.requestRewardedVideoAd` method
```java
import ir.yelloadwise.AdRequestCallback;
import ir.yelloadwise.Yelloadwise;

private void requestAd() {
    Yelloadwise.requestRewardedVideoAd(
        CONTEXT,
        ZONE_ID_REWARDED_VIDEO,
        new AdRequestCallback() {
            @Override
            public void response(YelloadwiseAdModel YelloadwiseAdModel) {
                super.response(YelloadwiseAdModel);
                
                //Ad is ready to show
                //Put the ad's responseId to your responseId variable
                rewardedResponseId = YelloadwiseAdModel.getResponseId();
            }

            @Override
            public void error(String message) {
                // Error when requesting. Either handle it or retry
            }

    });
}
```

Use `Yelloadwise.requestInterstitialAd` for interstitial Ad instead.

> If you want to request again in error Callback, Be sure to do this with the help of a variable as a Counter.
> Because with the help of that variable you can set a limit on the number of times for request.
> For example, when you disable this adZone from the panel and if you request again each time in error Callback , without limiting the number of times, 
> Your program will fall into an infinite loop and its performance will get disrupted
{:data-title="Retry requests" data-color="green"}

### Show Ad
After Calling the `response` method and getting the `responseId` parameter, the Ad is ready to be shown, and you can display it as the following

```java
import ir.yelloadwise.AdShowListener;
.......
Yelloadwise.showRewardedVideoAd(CONTEXT, rewardedResponseId,
    new AdShowListener() {
        @Override
        public void onOpened(YelloadwiseAdModel YelloadwiseAdModel) {
            super.onOpened(YelloadwiseAdModel);
        }

        @Override
        public void onClosed(YelloadwiseAdModel YelloadwiseAdModel) {
            super.onClosed(YelloadwiseAdModel);
        }

        @Override
        public void onRewarded(YelloadwiseAdModel YelloadwiseAdModel) {
            super.onRewarded(YelloadwiseAdModel);
        }

        @Override
        public void onError(YelloadwiseErrorModel YelloadwiseErrorModel) {
            super.onError(YelloadwiseErrorModel);
        }
    });
```

For showing an Interstitial ad use `Yelloadwise.showInterstitialAd`. Also you may want to remove `onRewarded` callback since it will not be called for Interstitial Ads.
