---
layout: classic-docs
title: AdNetworks
lang: en
permalink: /plus-sdk/android/add-adnetworks/index.html
toc: true
---

If you want to add more ad networks to your project, this page helps you through it.

Here's a list of ad networks that are supported by TapsellPlus.

## Google AdMob
> Supported version: `22.6.0`

Add it in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedAdmob = "22.6.0"
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
> Supported version: `4.9.2`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedUnityAds = "4.9.2"
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

## AppLovin
> Supported version: `12.4.0`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedAppLovin = "12.4.0"
    implementation("com.applovin:applovin-sdk:$supportedAppLovin")
}
```

## Mintegral
> Supported version: `16.6.71`

Add the library in gradle (in `app/build.gradle`):

```groovy
dependencies {
    def supportedMintegral = "16.6.71"
    implementation("com.mbridge.msdk.oversea:mbbanner:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:reward:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:newinterstitial:$supportedMintegral")
    implementation("com.mbridge.msdk.oversea:mbbid:$supportedMintegral")
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
