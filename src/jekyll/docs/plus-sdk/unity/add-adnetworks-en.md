---
layout: classic-docs
title: Other Ad Networks
lang: en
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

If you want to add more ad networks to your project, this page helps you through it.

## Add AdNetworks in TapsellPlus

### Admob

1. import Admob Unity package to your project
   from [GoogleMobileAds](https://github.com/googleads/googleads-mobile-unity/releases)
   > Note: Latest tested Admob version is `8.3.0`.
2. import the latest Admob Native package to your project
   from [GoogleMobileAds-native](https://dl.google.com/googleadmobadssdk/GoogleMobileAds-native.unitypackage)
3. Add your Google Mobile Ads App ID from `Assets/GoogleMobileAds/Settings` as follows:
   ![GoogleAppID](https://user-images.githubusercontent.com/38072572/206126452-e7235200-510a-42cb-8565-0bfa3beb378f.png)
4. Build & Run your project

### UnityAds and other AdNetworks

1. Open `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml` and use your desired android package as follows:
    ```xml
    <dependencies>
      <androidPackages>
    
            <!-- AdMob -->
            <androidPackage spec="com.google.android.gms:play-services-ads:22.6.0"/>
    
            <!-- UnityAds -->
            <androidPackage spec="com.unity3d.ads:unity-ads:4.9.2"/>
    
            <!-- ChartBoost -->
            <androidPackage spec="com.chartboost:chartboost-sdk:8.2.1"/>
    
            <!-- AppLovin -->
            <androidPackage spec="com.applovin:applovin-sdk:12.4.0"/>
    
            <!-- Mintegral - make sure you uncomment the custom repository down below -->
            <androidPackage spec="com.mbridge.msdk.oversea:mbbanner:16.6.71"/>
            <androidPackage spec="com.mbridge.msdk.oversea:reward:16.6.71"/>
            <androidPackage spec="com.mbridge.msdk.oversea:newinterstitial:16.6.71"/>
            <androidPackage spec="com.mbridge.msdk.oversea:mbbid:16.6.71"/>
    
            <repositories>
                <!-- Add this for Mintegral usage. NOTE: Repository will result in 403. Make sure you're using VPN or Proxy to circumvent it -->
                <repository>https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea</repository>
            </repositories>
      </androidPackages>
    </dependencies>
    ```

To use the Unity Ads ad network, you should set your application minSDK to 19. Or add the following line to your
project's AndroidManifest.xml file.

This line is used to prevent errors for building projects with minSDK less than 19. Since Tepsell Plus intelligently
prevents the Unity Ads from appearing on Android with an API Level less than 19, there is no problem for those of your
users who have an older version of Android. But it is required to test the Unity Ads advertising network once on such
devices using the test advertisement available in [this link](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/)
.

```xml

<uses-sdk tools:overrideLibrary="com.unity3d.ads"/>
```
