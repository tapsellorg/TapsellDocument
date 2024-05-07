---
layout: no-sidebar-classic-docs
title: Tapsell Mediation
lang: en
permalink: /mediation/reactnative/
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

![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/tapsell)

```
yarn add react-native-tapsell-mediation/tapsell
```

The main package that you need to install is `@react-native-tapsell-mediation/tapsell`

### Set Your Tapsell Mediation App ID

Open the `app.json` or `app.config.js` (if using `Expo`) file from the root of your React Native project and add
the `TapsellMediationAppKey` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir):

**app.json**

```json
{
  "react-native-tapsell-mediation": {
    "TapsellMediationAppKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

**app.config.js**

```js
module.exports = {
  "react-native-tapsell-mediation": {
    "TapsellMediationAppKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
};
```

> Make sure to add a valid App ID in the `app.json` or `app.config.js` file before building your app. Otherwise, it will
> cause
> the app to crash on start or fail to build.

### Android 13 support
Apps updating their target API level to 33 (Android 13) will need to declare a Google Play services permission in the manifest file as follows:

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

Read more about Google Advertising ID changes [here](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

### Add Mediation Adapters

The `react-native-tapsell-mediation/tapsell` package doesn’t serve any ads itself; which means you must install at least one of the following packages for Tapsell to work. 
Adding more adapters helps the SDK to get ads from different ad networks and increases the possibility of serving ads. The Tapsell Mediation SDK currently supports the following 3rd-party programmatic & mediated partner SDKs:

| Name                                                                                                                      |                                                                                            Downloads                                                                                            |                                         Version                                         |
|---------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------:|
| [Legacy  Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/legacy)                         |     [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/legacy.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/legacy)     |   ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/legacy)   |
| [Admob Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/admob)                            |      [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/admob.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/admob)      |   ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/admob)    |
| [Mintegral Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/mintegral)                    |  [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/mintegral.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/mintegral)  | ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/mintegral)  |                                                                                                                                                                                 |
| [Applovin Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/applovin)                      |   [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/applovin.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/applovin)   |  ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/applovin)  |                                                                                                                                                                                   |
| [Liftoff (Vungle) Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/liftoff)               |    [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/liftoff.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/liftoff)    |  ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/liftoff)   |                                                                                                                                                                                   |
| [IronSource Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/ironsource)                  | [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/ironsource.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/ironsource) | ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/ironsource) |                                                                                                                                                                     |
| [Fyber (Digital Turbine Exchange) Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/fyber) |      [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/fyber.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/fyber)      |   ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/fyber)    |                                                                                                                                                                                   |
| [UnityAds Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/unityads)                      |   [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/unityads.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/unityads)   |  ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/unityads)  |                                                                                                                                                                           |
| [Wortise Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/wortise)                        |    [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/wortise.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/wortise)    |  ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/wortise)   |                                                                                                                                                                              |
| [ChartBoost Mediation Adapter](https://www.npmjs.com/package/@react-native-tapsell-mediation/chartboost)                  | [![badge](https://img.shields.io/npm/dm/@react-native-tapsell-mediation/chartboost.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@react-native-tapsell-mediation/chartboost) | ![NPM Version](https://img.shields.io/npm/v/@react-native-tapsell-mediation/chartboost) |                                                                                                                                                                      |

You can install each adapter in your project using the command below:

```
yarn add @react-native-tapsell-mediation/<adapter>
```

#### Additional Configuration

- Admob:
  
  > Open the `app.json` or `app.config.js` (if using `Expo`) file from the root of your React Native project and add the `TapsellMediationAdmobAdapterSignature` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir):

  **app.config.js**

  ```json
  {
    "react-native-tapsell-mediation": {
      "TapsellMediationAdmobAdapterSignature": "ca-app-pub-xxxxxxxx~xxxxxxxx"
    }
  }
  ```


- Applovin: 

  > Open the `app.json` or `app.config.js` (if using `Expo`) file from the root of your React Native project and add the `TapsellMediationApplovinAdapterSignature` key with the ID provided from the [Tapsell Mediation dashboard](https://ssp.tapsell.ir).

  **app.config.js**

  ```json
  {
    "react-native-tapsell-mediation": {
      "TapsellMediationApplovinAdapterSignature": "YOUR_APPLOVIN_SIGNATURE"
    }
  }
  ```

### Build your app

For the changes to take effect, rebuild your project:

```
npx react-native run-android
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

```ts
import { setUserConsent } from '@react-native-tapsell-mediation/tapsell';

setUserConsent(true || false);
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

for more info you can
use [Sample App](https://github.com/tapsellorg/TapsellMediation-ReactNativeSample)
on GitHub repository.

## Test keys

To use test app keys and zones, you can refer to this [link](../test)

## Next Steps

After setting up and configuring Tapsell Mediation, you can go ahead and start to display different
ads for users. The Tapsell package provides integration with different following types:

- [Rewarded Ads](./rewarded/index.html)
- [Interstitial Ads](./interstitial/index.html)
- [Banner Ads](./banner/index.html)
- [Native Ads](./native/index.html)

