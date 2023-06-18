## Tapsell plus native Changelog

### 2.1.9-rc04 (14 Jun, 2023)
- Added preroll video ads to sdk for `VideoPlayer` and `ExoPlayer`. add exoplayer-ima-extension with disabled ui feature. [Sample](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
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
- Add support for Admob Native ad in plugin. For more information see [Flutter Admob Native Docs](https://docs.tapsell.ir/plus-sdk/flutter/native/)

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
