---
layout: classic-docs
title: Other Ad Networks
lang: en
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

If you want to add more ad networks to your project, this page helps you through it.

## Add AdNetworks in TapsellPlus v2.1.8 and above
### Admob
1. import Admob Unity package `v7.1.0` to your project from [GoogleMobileAds](https://github.com/googleads/googleads-mobile-unity/releases)
   > Note: Please use Admob `7.1.0` for now, Because Admob packages with version of `7.2.0`, `7.3.0` and `7.3.1` have open bugs in native banner click events. For more information see [GitHub issue](https://github.com/googleads/googleads-mobile-unity/issues/2262) and [this post](https://groups.google.com/g/google-admob-ads-sdk/c/821dMZCTCpg).
   > Note 2: Please don't include iOS files when importing GoogleMobileAds plugin
2. import the latest Admob Native package to your project from [GoogleMobileAds-native](https://dl.google.com/googleadmobadssdk/GoogleMobileAds-native.unitypackage)
3. Add your Google Mobile Ads App ID from `Assets/GoogleMobileAds/Settings` as follows:
   ![GoogleAppID](https://user-images.githubusercontent.com/38072572/206126452-e7235200-510a-42cb-8565-0bfa3beb378f.png)
4. Build & Run your project

### UnityAds and other AdNetworks
1. Open `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml` and use your desired android package as follows:
    ```xml
    <dependencies>
      <androidPackages>
    
            <!-- AdMob -->
            <androidPackage spec="com.google.android.gms:play-services-ads:21.0.0"/>
    
            <!-- UnityAds -->
            <androidPackage spec="com.unity3d.ads:unity-ads:4.3.0"/>
    
            <!-- ChartBoost -->
            <androidPackage spec="com.chartboost:chartboost-sdk:8.2.1"/>
    
            <!-- AdColony -->
            <androidPackage spec="com.adcolony:sdk:4.6.5"/>
    
            <!-- AppLovin -->
            <androidPackage spec="com.applovin:applovin-sdk:10.3.4"/>
    
            <!-- Mintegral - make sure you uncomment the custom repository down below -->
            <androidPackage spec="com.mbridge.msdk.oversea:videojs:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:mbbanner:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:mbjscommon:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:playercommon:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:reward:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:videocommon:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:same:15.6.11"/>
            <androidPackage spec="com.mbridge.msdk.oversea:interstitialvideo:15.6.11"/>
    
            <repositories>
                <!-- Add this for Mintegral usage. NOTE: Repository will result in 403. Make sure you're using VPN or Proxy to circumvent it -->
                <repository>https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea</repository>
            </repositories>
      </androidPackages>
    </dependencies>
    ```
2. Build & Run your project

## Using Admob in TapsellPlus v2.1.7 and lower

> ** Tip ** to use ** AdMob **
> 
> Add it in gradle (in `app/build.gradle`):
>
>```groovy
> dependencies {
>     def supportedAdmob = "20.6.0"
>     implementation("com.google.android.gms:play-services-ads:$supportedAdmob")
> }
>```
> You need to provide "AdMob application ID" as a **manifest meta-data** to be able to use it in the app.
> It should be noted that if this tag does not exist in the manifest, the error `The Google Mobile Ads SDK was initialized incorrectly.` will occur.
>
> Then put this ID in the following format in the file `Assets/Plugins/Android/AndroidManifest.xml`:
> 
> ```xml
> <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="ca-app-pub-x~y"/>
> ```
>
> Put your ID instead of `ca-app-pub-x~y`
> 
>
> Finally, this tag will be located in the following format in the manifest:
> 
> ```xml
> <manifest>
>     <application>
>
>         <!-- Rest of the manifest content -->
> 
>         <!-- Sample AdMob app ID: ca-app-pub-3940256099942544~3347511713 -->
>         <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="YOUR_APP_ID"/>
>     </application>
> </manifest>
> ```



## Gradle Settings
In the `dependencies` section at` Assets\Plugins\Android\mainTemplate.gradle`, add the ad networks you want according to the following template.

```gradle
dependencies {
    .......
    // for AdMob
    implementation 'com.google.android.gms:play-services-ads:20.6.0'
    // for UnityAds
    implementation 'com.unity3d.ads:unity-ads:3.7.5'
    // for Chartboost
    implementation 'com.chartboost:chartboost-sdk:8.2.1'
    // for AdColony
    implementation 'com.adcolony:sdk:4.6.5'
    // for Applovin
    implementation 'com.applovin:applovin-sdk:10.3.4'



    // For Mintegral - NOTE: Add custom repository (explained after this)
    implementation "com.mbridge.msdk.oversea:videojs:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbbanner:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbjscommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:playercommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:reward:15.6.11"
    implementation "com.mbridge.msdk.oversea:videocommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:same:15.6.11"
    implementation "com.mbridge.msdk.oversea:interstitialvideo:15.6.11"
    .....
}
```

Also, you should add related maven repository for those AdNetworks that do not use mavenCentral:

```gradle
allprojects {  
    repositories {
        //....

        // TapsellPlus, Tapsell, ...
        mavenCentral()

        // Old libraries
        jcenter()

        maven {
            url  "https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea"
        }
        
    }  
}
```

## Resolver Settings
Place any ad network you want according the following template at `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml`.

```xml
<dependencies>
  <androidPackages>
     
        <!-- AdMob -->
        <androidPackage spec="com.google.android.gms:play-services-ads:20.6.0"/>

        <!-- UnityAds -->
        <androidPackage spec="com.unity3d.ads:unity-ads:3.7.5"/>

        <!-- ChartBoost -->
        <androidPackage spec="com.chartboost:chartboost-sdk:8.2.1"/>

        <!-- AdColony -->
        <androidPackage spec="com.adcolony:sdk:4.6.5"/>

        <!-- AppLovin -->
        <androidPackage spec="com.applovin:applovin-sdk:10.3.4"/>

        <!-- Mintegral - make sure you uncomment the custom repository down below -->
        <androidPackage spec="com.mbridge.msdk.oversea:videojs:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:mbbanner:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:mbjscommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:playercommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:reward:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:videocommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:same:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:interstitialvideo:15.6.11"/>

        <repositories>
            <!-- Add this for Mintegral usage. NOTE: Repository will result in 403. Make sure you're using VPN or Proxy to circumvent it -->
            <repository>https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea</repository>
        </repositories>
  </androidPackages>
</dependencies>
```

To use the Unity Ads ad network, you should set your application minSDK to 19. Or add the following line to your project's AndroidManifest.xml file.

This line is used to prevent errors for building projects with minSDK less than 19. Since Tepsel Plus intelligently prevents the Unity Ads from appearing on Android with an API Level less than 19, there is no problem for those of your users who have an older version of Android. But it is required to test the Unity Ads advertising network once on such devices using the test advertisement available in [this link](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/).     

```xml
<uses-sdk tools:overrideLibrary="com.unity3d.ads" />
```
