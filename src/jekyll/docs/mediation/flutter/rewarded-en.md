---
layout: no-sidebar-classic-docs
title: Rewarded Ad
lang: en
permalink: /mediation/flutter/rewarded/index.html
toc: true
---

Rewarded ads are full-screen ads that cover the interface of an app until closed by the user. The content of a rewarded
ad might be varying depending on the ad network type in the mediation.

The purpose of a rewarded ad is to reward users with something after completing the video. If the user completes the
action, you can reward them in your app.

## Request Ad

To request a new rewarded ad, call the `requestRewardedAd` function from the Tapsell package. The first argument of the
method is the ad "Zone ID":


## Show Ad

To show an ad, call the `showRewardedAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestRewardedAd` function.:


## Test keys

To use test app keys and zones, you can refer to this [link](../../test)


## Sample Project

for more info you can
use [Rewarded Sample](https://github.com/tapsellorg/TapsellMediation-FlutterSample/tree/master/src/screens/rewarded)
on GitHub repository.
