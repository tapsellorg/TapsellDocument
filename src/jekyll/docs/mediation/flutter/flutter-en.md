---
layout: no-sidebar-classic-docs
title: Tapsell Mediation
lang: en
permalink: /mediation/flutter/
toc: true
---

<br/>

# Tapsell Mediation

Tapsell Mediation, is a Mediated solution helping businesses increase their mobile apps' revenue with the inclusion of
other supported Programmatic & Mediated Ad Solutions.

## Getting Started

---

Integrating the Tapsell SDK into your app is the first step toward displaying ads and earning revenue.
Once you've integrated the SDK, you can choose an ad format (such as banner or rewarded video) and follow the steps to
implement it.

> **Note:** Tapsell Mediation currently targets Android platform only.

## Configure Your Project

A few steps are required before you start serving ads to your users:

### Setting up Tapsell Mediation Account

Before you are able to display ads to your users, you must have a Tapsell Mediation account. You can create one from
the [Tapsell Mediation dashboard](https://ssp.tapsell.ir).

### Install the Tapsell Mediation plugin

[![badge](https://img.shields.io/pub/v/tapsell_mediation.svg)](https://pub.dev/packages/tapsell_mediation)

The main package that you need to install is [tapsell_mediation](https://pub.dev/packages/tapsell_mediation):

```
flutter pub add tapsell_mediation
```

### Set Your Tapsell Mediation App ID

Open the `android/app/build.gradle` file from your Flutter project and add
the `TapsellMediationAppKey` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir):

**build.gradle**

```groovy
manifestPlaceholders = [
        TapsellMediationAppKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
]
```

> Make sure to add a valid App ID in the `android/app/build.gradle` file before building your app. Otherwise, it will
> cause the app to crash on start or fail to build.

### Android 13 support
Apps updating their target API level to 33 (Android 13) will need to declare a Google Play services permission in the manifest file as follows:

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

Read more about Google Advertising ID changes [here](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

### Add Mediation Adapters

The `tapsell_mediation` package doesn’t serve any ads itself; which means you must install at least one of the following packages for Tapsell to work. 
Adding more adapters helps the SDK to get ads from different ad networks and increases the possibility of serving ads. The Tapsell Mediation SDK currently supports the following 3rd-party programmatic & mediated partner SDKs:

| Name                                                                                                   |                                                             Version                                                              |
|--------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------:|
| [Legacy  Mediation Adapter](https://pub.dev/packages/tapsell_mediation_legacy)                         |     [![badge](https://img.shields.io/pub/v/tapsell_mediation_legacy.svg)](https://pub.dev/packages/tapsell_mediation_legacy)     |
| [Admob Mediation Adapter](https://pub.dev/packages/tapsell_mediation_admob)                            |      [![badge](https://img.shields.io/pub/v/tapsell_mediation_admob.svg)](https://pub.dev/packages/tapsell_mediation_admob)      |
| [Mintegral Mediation Adapter](https://pub.dev/packages/tapsell_mediation_mintegral)                    |  [![badge](https://img.shields.io/pub/v/tapsell_mediation_mintegral.svg)](https://pub.dev/packages/tapsell_mediation_mintegral)  |                                                                                                                                                                                 
| [Applovin Mediation Adapter](https://pub.dev/packages/tapsell_mediation_applovin)                      |   [![badge](https://img.shields.io/pub/v/tapsell_mediation_applovin.svg)](https://pub.dev/packages/tapsell_mediation_applovin)   |                                                                                                                                                                                   
| [Liftoff (Vungle) Mediation Adapter](https://pub.dev/packages/tapsell_mediation_liftoff)               |    [![badge](https://img.shields.io/pub/v/tapsell_mediation_liftoff.svg)](https://pub.dev/packages/tapsell_mediation_liftoff)    |                                                                                                                                                                                   
| [IronSource Mediation Adapter](https://pub.dev/packages/tapsell_mediation_ironsource)                  | [![badge](https://img.shields.io/pub/v/tapsell_mediation_ironsource.svg)](https://pub.dev/packages/tapsell_mediation_ironsource) |                                                                                                                                                                     
| [Fyber (Digital Turbine Exchange) Mediation Adapter](https://pub.dev/packages/tapsell_mediation_fyber) |      [![badge](https://img.shields.io/pub/v/tapsell_mediation_fyber.svg)](https://pub.dev/packages/tapsell_mediation_fyber)      |                                                                                                                                                                                  
| [UnityAds Mediation Adapter](https://pub.dev/packages/tapsell_mediation_unityads)                      |   [![badge](https://img.shields.io/pub/v/tapsell_mediation_unityads.svg)](https://pub.dev/packages/tapsell_mediation_unityads)   |                                                                                                                                                                           
| [Wortise Mediation Adapter](https://pub.dev/packages/tapsell_mediation_wortise)                        |    [![badge](https://img.shields.io/pub/v/tapsell_mediation_wortise.svg)](https://pub.dev/packages/tapsell_mediation_wortise)    |                                                                                                                                                                              
| [ChartBoost Mediation Adapter](https://pub.dev/packages/tapsell_mediation_chartboost)                  | [![badge](https://img.shields.io/pub/v/tapsell_mediation_chartboost.svg)](https://pub.dev/packages/tapsell_mediation_chartboost) |                                                                                                                                                                    

You can install each adapter in your project using the command below:

```
flutter pub add tapsell_mediation_<adapter>
```

#### Additional Configuration

- Admob:
  
  > Open the `android/app/build.gradle` file from your Flutter project and add the `TapsellMediationAdmobAdapterSignature` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir):

**build.gradle**

```groovy
manifestPlaceholders = [
        TapsellMediationAdmobAdapterSignature: "ca-app-pub-xxxxxxxx~xxxxxxxx",
]
```


- Applovin: 

  > Open the `android/app/build.gradle` file from the root of your Flutter project and add the `TapsellMediationApplovinAdapterSignature` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir).

**build.gradle**

```groovy
manifestPlaceholders = [
        TapsellMediationApplovinAdapterSignature: "YOUR_APPLOVIN_SIGNATURE",
]
```

### Build your app

For the changes to take effect, rebuild your project:

```
flutter run
```

### Initialize the Tapsell Mediation SDK

No need to initialize the Tapsell Mediation SDK. It will be initialized automatically when you run your app.


### European User consent

The Tapsell SDK respects the GDPR user privacy policy. Considering this policy is required for the apps published in
markets like `GooglePlay`. All ad networks support the user consent policies as well as Tapsell SDK. The Tapsell
mediation SDK manages the user consent for all implemented ad networks automatically. The correct approach to manage the
GDPR consent is showing a consent dialog in your application to choose an option by user. After user selection, you need
to pass the user consent result to the Tapsell SDK. You can pass the result after initialization is completed by adding
the following code:

```dart
import 'package:tapsell_mediation/tapsell.dart';

Tapsell.setUserConsent(consent);
```

To avoid showing consent dialog to the user each time, you can store user preferences to your app. But you need to pass
the latest stored user consent to the Tapsell SDK by invoking the above function.

<br/>

### Family Policy

According to the [GooglePlay Family Policy](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en), if
any of the target audiences for your app is children (especially if you're developing a game),
your app's content must be appropriate for these type of users. Also, you are not allowed to collect some personal information
like Google Advertising ID. However, the third party advertising SDKs need this advertising id to provide and serve personalized ads for users.
As a result, in Tapsell SDK all users are treated as 13 or older. So as an application developer if you're going to
publish your app in GooglePlay, you need to express that your app targets audiences with age of 13 or older.
Otherwise, your app will be removed from GooglePlay according to this policy.

<br/>

---

## Sample project

for more info you can use [Sample App](https://github.com/tapsellorg/TapsellMediation-FlutterSample)
on GitHub repository.

## Test keys

To use test app keys and zones, you can refer to this [link](../test)

## Next Steps

After setting up and configuring Tapsell Mediation, you can go ahead and start to display different
ads for users. The Tapsell package provides integration with different following types:

- [Rewarded Ads](./rewarded/index.html)
- [Interstitial Ads](./interstitial/index.html)
- [Banner Ads](./banner/index.html)
