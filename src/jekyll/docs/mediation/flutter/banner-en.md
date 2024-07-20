---
layout: no-sidebar-classic-docs
title: Banner Ad
lang: en
permalink: /mediation/flutter/banner/index.html
toc: true
---

Banner ads are partial ads which can be integrated within your existing application. Unlike Interstitial and
Rewarded Ads, a Banner only takes up a limited area of the application and displays an advert within the area. This
allows you to integrate adverts without a disruptive action.

## Request Ad

To request a new banner ad, call the `requestBannerAd` function from the Tapsell package. The first argument of the
method is the ad "Zone ID" and the second argument is the banner size:

## Show Ad

To show an ad, call the `showBannerAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestBannerAd` function.:


## Destroy Ad

To destroy an ad, call the `destroyBannerAd` function from the Tapsell package:


## Test keys

To use test app keys and zones, you can refer to this [link](../../test)


## Sample Project

for more info you can
use [Banner Sample](https://github.com/tapsellorg/TapsellMediation-FlutterSample/tree/master/src/screens/banner)
on GitHub repository.

