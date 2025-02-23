## Tapsell plus native Changelog

### 2.3.2 (23 Feb 2025)

- Updated tapsell-sdk to `4.9.8`
- Fix conflict with `InAppBilling` SDKs

### 2.3.1 (05 Feb 2025)

- Updated tapsell-sdk to `4.9.7`

### 2.3.0 (20 Nov 2024)

- Updated tapsell-sdk to `4.9.5`
- Remove usage of `reset` function from SDK to fix an internal crash on Android `MediaPlayer`

### 2.2.9 (13 Nov 2024)

- Updated tapsell-sdk to `4.9.4`
- Added support for fully clickable native videos

### 2.2.8 (11 Sep, 2024)

- Updated `Tapsell` SDK to `4.9.3`
- Updated `tagetSdk` version  to `34`
- Added few R8 Proguard rules

### 2.2.7 (12 Aug, 2024)

- Updated `Tapsell` SDK to `4.9.1`
- Removed GDPR consent dialog.

#### Flutter

- Fixed flutter crash when requesting multiple native banner ads at the same time. See [#27](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/27)

### 2.2.6 (19 Apr, 2024)

- Fixed a bug related to missing `GDPR` classes when initializing the SDK

### 2.2.5 (09 Apr, 2024)

- Updated `Tapsell` SDK to `4.9.0`
- Added `Admob` user messaging platform (`UMP`) to manage user consent for admob to resolve GooglePlay issue.
- Added few `R8` rules [#85](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/85)
- Updated `AdMob` to `22.6.0`
- Updated `Google IMA` (`PreRoll`) to `3.33.0`
- Updated `UnityAds` to `4.9.2`
- Updated `AppLovin` to `12.4.0`
- Updated `Mintegral` to `16.6.71`
- Removed `Vungle` ad network due to deprecation and GooglePlay policy related issues.
- Removed `AdColony` ad network due to deprecation.

### 2.2.4 (07 Jan, 2023)

- Updated Tapsell legacy SDK to `4.8.8`
- Added support for `Gradle 8` and `R8 Full mode`. No need to add proguard rules any
  more. [#75](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/75). You need to add few rules if you
  don't use all ad networks.
  See [#80](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/80)
- Migrated `Google ExoPlayer` to `Media3 ExoPlayer` in IMA PreRoll.
  See [Sample](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
- Fixed crash related to OkHttp in Android 4.
- Fixed logger crash when printing the error log message.
- Fixed GDPR consent issues in Tapsell sdk.

### 2.2.3 (27 Sep, 2023)

- Updated Tapsell legacy SDK to `4.8.4`
- Updated `IMA` to `3.31.0`
- Updated `ima-extension` implementation to `2.19.1` according to its GitHub
  repository [commits](https://github.com/google/ExoPlayer/commit/b8e1a0b4755efd42a0d45fb0e90a6b3304e9544b)
- Updated `ExoPlayer` to `2.19.1`
- Fixed crash when using **_GDPR_**: `java.lang.SecurityException: Not allowed to access cell info`. related
  to `telephonyManager.getAllCellInfo();` in native Android SDK. Related
  links: [Link1](https://stackoverflow.com/a/63246124/8291919), [Link2](https://developer.android.com/reference/android/telephony/TelephonyManager#getAllCellInfo())

#### Flutter

- Fixed flutter crash in Standard banner
  ads: `Reply already submitted` [GH-15](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/15), [GH-14](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/14)

### 2.2.0 (21 Jun, 2023)

- Fixed Google Play policy error related to Collecting user's installed
  apps. [Issue #68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68)

### 2.1.9 (20 Jun, 2023)

- Added support for `null companion banner container` in `ExoPlayer` for Pre-Roll IMA ads.
- fixed triggering multiple event callbacks in `ExoPlayer` Pre-Roll ads.

### 2.1.9-rc04 (14 Jun, 2023)

- Added preroll video ads to sdk for `VideoPlayer` and `ExoPlayer`. add exoplayer-ima-extension with disabled ui
  feature. [Sample](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
- Added new UI for back dialog
- Update tapsell sdk to `V4.7.8-rc03`
- Fixed some memory leaks in tapsell sdk and tapsell plus sdk
- fixed some proguard issues

### 2.1.9-rc03 (29 March, 2023)

- Updated minSdkVersion to 19 to support Admob `V21.5.0`
- Fixed wrong back dialog options in rewarded videos
- Updated Admob to `V21.5.0`
- Updated UnityAds to `V4.6.1`
- Updated Mintegral to `V16.3.91`
- Updated AdColony to `V4.8.0`
- Updated AppLovin to `V11.8.2`

### 2.1.8 (2022/11/21)

- Added dynamic configs for `backPressed` final banner in video ads
- Add dynamic configs for back alert dialog in videos
- Update UnityAds to V4.3.0 and fix deprecations based on ([UnityAds API](https://docs.unity.com/ads/UnityAPI.html))
- Update targetSDK version to 33

#### Flutter

- Add support for Admob Native ad in plugin. For more information
  see [Flutter Admob Native Docs](https://docs.tapsell.ir/plus-sdk/flutter/native/)

### 2.1.7 (2022/03/28)

- Update AdMob to `20.6.0` which fixes [#41](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/41)
- Minor bug fixes

### 2.1.6 (2022/01/11)

- Update `Tapsell` adNetwork to **4.7.4**
- Fix Native banner crash in AdMob adNetwork
- Update Target SDK to 31
- Improvement on verbose logging when ad request fails
  To make use of it use `TapsellPlus.SetDebugMode(Log.DEBUG)` before requesting

### 2.1.5 (2021/11/06)

- Update `Tapsell` adNetwork to **4.7.3**
- Update `Mintegral` adNetwork to **15.6.11**
  Visit [AdNetwork docs](/plus-sdk/android/add-adnetworks/index.html) for more information
