---
layout: classic-docs
title: AdNetworks
lang: en
permalink: /plus-sdk/android/add-adnetworks/index.html
toc: true
---

If you attend to add more ad networks to your project, this page help so through it.

Here's a list of ad networks that are supported by TapsellPlus.

## Google AdMob
> Supported version: `20.4.0`

Add it in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedAdmob = "20.4.0"
    implementation("com.google.android.gms:play-services-ads:$supportedAdmob")
}
```

> You need to provide "AdMob application Id" as a **manifest meta-data** to be able to use it in the app.
> 
> If you wish to test it only use `ca-app-pub-3940256099942544~3347511713` in the the following tag instead of `YOUR_APP_ID`.  
> ```xml
> <manifest>
>     <application>
>         <!-- Sample AdMob app ID: ca-app-pub-3940256099942544~3347511713 -->
>         <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="YOUR_APP_ID"/>
>     </application>
> </manifest>
> ```
{:data-title="AdMob Application Id" data-color="orange"}

You need to contact support to get a **producation admob key** for actual usage.


## Unity ads
> Supported version: `3.7.5`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedUnityAds = "3.7.5"
    implementation("com.unity3d.ads:unity-ads:$supportedUnityAds")
}
```

> Since MinSDKVersion of UnityAds is **19** if you wish to keep your minSDK below 19, add:
>
> ```xml
> <uses-sdk tools:overrideLibrary="com.unity3d.ads" />
> ```
> **NOTE**: You don't need to worry about lower-api users experiencing any crashes since TapsellPlus takes care of it.
{:data-title="UnityAds MinSDK version" data-color="green"}

## Chartboost
> Supported version: `8.2.1`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedChartboost = "8.2.1"
    implementation("com.chartboost:chartboost-sdk:$supportedChartboost")

    implementation ("com.google.android.gms:play-services-base:17.6.0"){
        exclude group: 'com.android.support'
    }
    implementation ("com.google.android.gms:play-services-ads-identifier:17.0.0"){
        exclude group: 'com.android.support'
    }
}
```

## AdColony
> Supported version: `4.6.5`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedAdColony = "4.6.5"
    implementation("com.adcolony:sdk:$supportedAdColony")
}
```

## AppLovin
> Supported version: `10.3.4`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedAppLovin = "10.3.4"
    implementation("com.applovin:applovin-sdk:$supportedAppLovin")
}
```

## Mintegral
> Supported version: `15.6.11`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedMintegral = "15.6.11"
    implementation("com.mbridge.msdk.oversea:videojs:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:mbbanner:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:mbjscommon:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:playercommon:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:reward:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:videocommon:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:same:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:interstitialvideo:$supportedMintegral")
}
```

Also since `Mintegral` is not served in `mavenCentral()` you need to add its custom repository:


```gradle
allprojects {  
    repositories {
        //....

        // TapsellPlus, Tapsell, ...
        mavenCentral()

        // Mintegral
        maven {
            url  "https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea"
        }
        
    }  
}
```