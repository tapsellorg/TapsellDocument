## Release Notes:

### 4.8.9 - 2024/01/07
#### Android
- Added `dont warn` rules in SDK's proguard [#80](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/80), [TUD-5342](https://jira.pegah.tech/browse/TUD-5342).
- Fixed PreRoll `Media3` Crash on Android 6.0 by adding `android.enableDexingArtifactTransform=false` in `gradle.properties` file.


### 4.8.8 - 2024/01/07
#### Android
- Fixed logger crash by avoid printing the log when message is null.
- Added failure callback for `previous request is still trying ...` situation.

### v4.8.7 - 2023/12/19
#### Android
* Changed clickable view parts in Native Banner to improve CTR

### v4.8.6 - 2023/12/10
* Added `pause` and `resume` methods to `Native Video` class.
* Fixed crash related to OkHttp in Android 4 by Downgrading Retrofit to `2.5.0`

### 4.8.5 (5 Oct, 2023)
* Migrate `Google ExoPlayer` to `Media3 ExoPlayer` in IMA PreRoll.
* Added `tapsell-legacy.properties` file to check Tapsell version from final APK app.
* Added `tapsell-properties.sh` file to update the version of `tapsell-legacy.properties`
  automatically.
* Fixed few issues related to Ad ID usage in SDK
* Added proguard rules for IMA, Retrofit, Picasso, ExoPlayer
* Fixed not operating GDPR consent when the developer forwards the consent after initialization of the SDK. It was working only before initialization. 
* Improvements on GDPR implementation: Removed GDPR ip checking.

## 4.8.4 (26 Sep, 2023)
* Updated `IMA` to `3.31.0`
* Updated `ima-extension` implementation to `2.19.1` according to its GitHub repository [commits](https://github.com/google/ExoPlayer/commit/b8e1a0b4755efd42a0d45fb0e90a6b3304e9544b)
* Updated `ExoPlayer` to `2.19.1`
* Fixed crash when using `telephonyManager.getAllCellInfo();`.
* Added few proguard rules

## 4.8.3 (14 Aug, 2023)
* Fixed minor bugs

## 4.7.9 (22 Jun, 2023)
* Removed Collecting user's installed apps duo to Google Play policy error [#77](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/77).

## 4.7.8 (20 Jun, 2023)
* Added support for optional `companion banner container` in `ExoPlayer` for Pre-Roll IMA ads.
* Fixed triggering multiple event callbacks in `ExoPlayer` Pre-Roll ads.

## 4.7.8-rc03 (14 Jun, 2023)
* Added PreRoll video ads to sdk for `VideoPlayer` and `ExoPlayer`. add `exoplayer-ima-extension` with disabled ui feature.

## 4.7.8-rc02 (06 Jun, 2023)
* Added multiple native request feature to sdk. now you can request multiple native ads (video and banner) with one request.
* Fixed some proguard issues

## 4.7.7 (10 May, 2023)
* Fixed some of the memory leaks in loading ads

## 4.7.6 (16 Apr, 2023)
* Added new UI for back dialog
* Added dynamic configs to show back button in interstitial/rewarded banner
* Fixed Back Dialog options are inverse in rewarded videos

## 4.7.5 (19 Nov, 2022)
* Added dynamic configs to show back alert dialog in videos
* Added dynamic configs for `backPressed` final banner in video ads
* Update targetSDK version to 33

## 4.7.4 (10, Jan 2022)
* Native banner loads images before showing the ad if SDK<=23, so the performance will be improved 
* Fixed crashes on some old devices (old android versions) while initializing OKHttp
* Updated targetSDK version to 31

## 4.7.3 (6, Nov 2021)
* Fixed a NullPointerException related to Tapsell Native Banner
* Fixed UI issue

## 4.7.2 (20, Jul 2021)

* Fixed some crashed in SDK.

## 4.7.1 (02, Jun 2021)

* Fixed some crashed in SDK.

## 4.7.0 (09, May 2021)

* Added the option of opening the bazaar modal automatically was added (bazaar 11.0.1 and above)
* Some performance improvements
* Fixed minor crashes 
* Updated `minSdkVersion` from 14 to 16.
* Updated the dependencies version (okhttp, retrofit and glide)

## 4.6.5 (04, May 2021)
* Some performance improvements

## 4.6.4-alpha02 (25, Apr 2021)
* Removed `PHONE_STATE` Permission

## 4.6.4-alpha01 (20, Apr 2021)
* Migrated SDK repository to `MavenCentral()` due to Bintray's shutdown.
  From now on, library does not need custom `maven {}` url and is simply accessible via `mavenCentral()` (which is added by default by gradle)  

### v4.6.2 - 2020/12/07
* Minor bug fixes

### v4.6.1 - 2020/11/28
* Fixed the problem with the manifest file

### v4.6.0 - 2020/11/17
* Deprecated initialization methods removed
* Fixed reported bugs

### v4.5.0 - 2020/2/17
* Changes in VAST (preroll) API
* Changing the gson version and solving the build problem

### v4.4.3-beta - 2020/1/28
* Using the image loader library

### v4.4.2 - 2020/1/26
* Fixed the crash in case the sdk isn't initialized

### v4.4.1 - 2020/1/21
* Bug fixes

### v4.4.0 - 2020/1/11
* Improvements in working with threads

### v4.4.0-beta - 2019/12/16
* Improvements in working with threads
* Improvements in the performance of rewarded/interstitial ads
* Changes in rewarded/interstitial ads APIs
* Solved android 10 problems
* Solved cached ad problems
* Othe minor improvements
