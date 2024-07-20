---
layout: no-sidebar-classic-docs
title: Interstitial Ad
lang: en
permalink: /mediation/flutter/interstitial/index.html
toc: true
---

Interstitials are full-screen ads that cover the interface of an app until closed by the user. These type of ads are
programmatically loaded and then shown at a suitable point during your application flow (e.g. after a level on a gaming
app has been completed, or game over). The ads can be preloaded in the background to ensure they're ready to go when
needed.

## Request Ad

To request a new interstitial ad, call the `requestInterstitialAd` function from the Tapsell package. The first argument
of the method is the ad "Zone ID":

## Show Ad

To show an ad, call the `showInterstitialAd` function from the Tapsell package. The first argument of the method is the ad
id received in the `requestInterstitialAd` function.:


## Test keys

To use test app keys and zones, you can refer to this [link](../../test)

## Sample Project

for more info you can
use [Interstitial Sample](https://github.com/tapsellorg/TapsellMediation-FlutterSample/tree/master/src/screens/interstitial)
on GitHub repository.
