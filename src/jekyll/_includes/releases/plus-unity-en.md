## Tapsell plus Unity Changelog

### 2.2.8 (16 Sep 2024)

- Updated tapsell-sdk to `4.9.3`
- Added support for Android target sdk 34
- Removed Tapsell GDPR dialog from SDK.
- Added a request debouncer to prevent multiple requests from being sent in a short period of
  time.

### v2.2.6 - 2024/04/16

- Updated `Tapsell` SDK to `4.9.0`
- Fixed a bug related to missing `GDPR` classes when initializing the SDK
- Added `Admob` user messaging platform (`UMP`) to manage user consent for admob to resolve GooglePlay issue.
- Added few `R8` rules [#85](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/85)
- Updated `AdMob` to `22.6.0`
- Updated `AppLovin` to `12.4.0`
- Updated `Mintegral` to `16.6.71`
- Removed `AdColony` ad network due to deprecation.

### v2.2.4 - 2024/01/07

- Added support for `Gradle 8` and `R8 Full mode`.
- Fixed Native Banner serve issues
- Fixed triggering Native Banner callback due to an exception when the developer makes multiple requests at the same
  time.
  Log: `Error Unity ArgumentNullException: Value cannot be null. TapsellPlusSDK.TapsellPlus.CallIfAvailable[T] (System.Collections.Generic.IDictionary'2[TKey,TValue] pool, System.String key, T input)`
- Updated tapsell-sdk to `4.8.8`
- Fixed minor bugs and crashes
- Fixed a crash related to `OkHttp` in Android 4 by Downgrading Retrofit version to `2.5.0`.
- Fixed a crash related to `TelephonyManager` when using GDPR: `java.lang.SecurityException: Not allowed to access cell info`. See [Link1](https://stackoverflow.com/a/63246124/8291919), [Link2](https://developer.android.com/reference/android/telephony/TelephonyManager#getAllCellInfo())
- Fixed logger crash when printing the error log message.
- Fixed some issues related to GDPR consent in Tapsell sdk.
- Updated Admob to `V22.1.0`

### v2.2.1 - 2023/09/02

- Fixed compile error in Unity Editor version 2020 and lower

### v2.2.0 - 2023/06/23

- Fixed Google Play policy error related to Collecting user's installed
  apps. [Issue #68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68)
- Added new UI for back dialog
- Added support for Unity Editor before 2020
- Update android Tapsell dependency to `2.2.0`
- Update Google Mobile Ads to `8.3.0`. (Android gradle dependency to `22.1.0`)
- Fixed some memory leaks in Tapsell sdk and tapsell plus sdk
- Fixed some proguard issues

### v2.1.8 - 2022/12/07

* Added new TapsellPlus Unity package to integrate both Gradle & Resolver methods for implementation of Tapsell package.
  - Refer to [package download link](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin/releases)
    or [Github repository](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin) for more information.
* Using GoogleMobileAds-7.3.1 & GoogleMobileAds-native and other changes from GoogleMobileAds-7.0 and above versions.
  - check out this [link](https://developers.google.com/admob/unity/native) to see changes in native ads implementation
    from GoogleMobileAds-7.0 and above versions.
* Fixed reported GitHub issue [#9](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues/9)

### v2.1.7 - 2022/04/04

* [Using Tapsell Plus version 2.1.7](/plus-sdk/android/main/#v217---20220328)
* Update AdMob to `20.6.0` and AppSetId to 16.0.2 which
  fixes [#41](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/41)
* Fix `SSL Exception` prior to Android 4.4
* Minor bug fixes

### v2.1.6 - 2022/01/12

* Using the Tapsell version 4.7.4
* Fixed native banner issue
* Updated TargetSDK to 31
* Improve ad request error
  To use this feature, invoke
  `TapsellPlus.setDebugMode (Log.DEBUG)`
  after initialize method

* Added support for Mintegral ** 15.6.11 **
  - You can refer to [Advertising Networks](/plus-sdk/android/add-adnetworks/index.html) for more information

  * Added Ability to display GDPR dialog at any time by Developer

  - Added the method `TapsellPlus.showGDPRDialog(activity)` to display the dialog
* AppLovin support ** 10.3.4 **
* Support for UnityAds ** 3.7.5 **
* AdMob support ** 20.4.0 **
* AdColony support ** 4.6.5 **

### v2.1.3 - 2021/07/21

* [Using Tapsell Plus version 2.1.3](/plus-sdk/android/main/#v213---20210721)
* Added native banner to AdColony
* Added Interstitial banner to AdColony
* Added support for AdMob version of 20.2.0

> The Adobe Update requires changes to the implementation.
> See [Add Ad Networks](/plus-sdk/unity/add-adnetworks/index.html) for more information.

* Chartboost support ** 8.2.1 **
* AppLovin support ** 10.3.1 **
* UnityAds support ** 3.7.4 **

### v2.1.2 - 2021/06/08

> ** NOTE ** From this version onwards, the version number of TapsellPlus Unity Plugin will be in accordance with the
> version number of TapsellPlus Android SDK. Therefore, the current version 2.1.2 is newer than the previous version 2.5

* [Using TepselPlus version 2.1.2](https://docs.tapsell.ir/plus-sdk/android/main/#v212---20210607)
* Added AdMob AdIcon in native banner ads.
* Added support for the Android 11
* Added support for Standard and Interstitial ads
* Fixed pressing on native ads

### v2.5 - 2020/12/07

* Using the Tapsell Plus version 1.2.2

### v2.4 - 2020/9/22

* Using the Tapsell Plus version 1.2.1
* Added the ability to display AdMob native ads
* Change in the implementation of receiving clicks in native ads

### v2.3 - 2020/8/31

* Using the Tapsell Plus version 1.1.3

### v1.1.1 - 2020/1/21

* Fixed user-agent issue
* Using the Tapsell version 4.4.1
* Fixed error callback issue
* Added GDPR Configuration

### v1.1.0 - 2020/1/12

* Improvements in working with threads
* Using the Tapsell version 4.4.0
* Using the consumer proguard file

### v1.0.12 - 2019/12/02

* Fixed ConsentDialog issue
* Fixed reported issues
