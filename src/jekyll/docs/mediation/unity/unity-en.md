---
layout: no-sidebar-classic-docs
title: Tapsell Mediation
lang: en
permalink: /mediation/unity/
toc: true
---

<br/>

# Tapsell Mediation

Tapsell Mediation, is a Mediated solution helping businesses increase their mobile apps' revenue with the inclusion of other supported Programmatic & Mediated Ad Solutions.

## Getting Started

---

Integrating the Tapsell SDK into your app is the first step toward displaying ads and earning revenue. 
Once you've integrated the SDK, you can choose an ad format (such as banner or rewarded video) and follow the steps to implement it.

> **Note:** Tapsell Mediation currently targets Android platform only.

### Prerequisites

- Use Unity 2020 or higher.

> Are you using Unity 2020? see [this page](./unity2020/index.html) before starting the installation.

### Before You Begin

To prepare your app, complete the following steps:

- Tapsell plugin uses [External Dependency Manager for Unity](https://github.com/googlesamples/unity-jar-resolver) for native dependency management. Make sure you have 
imported this utility plugin to your project. The latest version can be downloaded using [this](https://github.com/googlesamples/unity-jar-resolver/raw/master/external-dependency-manager-latest.unitypackage) link. 

- Make sure you have set up your app as an Tapsell Mediation app and have your unique Tapsell App ID
  that is needed later in this guide.

### Configure Your Project

Follow the steps below to be able to use the Tapsell Mediation in your application:

#### Import the Tapsell Mediation Unity plugin

Download the following packages and import them as custom packages to your project.

- [Tapsell Mediation](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_v1.0.1-beta08.01.unitypackage)
- [Tapsell Legacy Adapter](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_LegacyAdapter_v1.0.1-beta08.01.unitypackage)

<img src="/images/mediation-unity-import1.jpg" alt="import-package" />

For each package, Make sure all of the files are selected and click **Import**.

<img src="/images/mediation-unity-import2.png" alt="import-package" />

<br/>

#### Include the Tapsell Mediation Native SDK

In the Unity editor, select **Assets > External Dependency Manager > Android Resolver > Resolve**. 
The Unity External Dependency Manager library will copy the declared dependencies into the 
`Assets/Plugins/Android` directory of your Unity app.

<img src="/images/mediation-unity-native-resolve.jpg" alt="native-SDK" />

<br/>

#### Set Your Tapsell Mediation App ID

In the Unity editor, select **Assets > Tapsell > Settings** from the menu.

<img src="/images/mediation-unity-settings.jpg" alt="settings" />

Enter your Tapsell App ID collected from your dashboard.

<img src="/images/mediation-unity-set-app-id.png" alt="set-appId" />

<br/>

#### Android 13 support
Apps updating their target API level to 33 (Android 13) will need to declare a Google Play services permission in the manifest file in `Assets\Plugins\Android\AndroidManifest.xml` as follows:

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

Read more about Google Advertising ID changes [here](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

---

No additional configuration or code is needed to initialize the SDK.

<br/>

### Add Mediation Adapters

The Tapsell Mediation SDK currently supports the following 3rd-party programmatic & mediated partner SDKs:

* [**AdMob**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_AdMobAdapter_v1.0.1-beta08.01.unitypackage)
* [**Applovin**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_ApplovinAdapter_v1.0.1-beta08.01.unitypackage)
* [**Chartboost**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_ChartboostAdapter_v1.0.1-beta08.01.unitypackage)
* [**Fyber**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_AdColonyAdapter_v1.0.1-beta08.01.unitypackage)
* [**Mintegral**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_MintegralAdapter_v1.0.1-beta08.01.unitypackage)
* [**UnityAds**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_UnityAdsAdapter_v1.0.1-beta08.01.unitypackage)
* [**IronSource**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_IronSourceAdapter_v1.0.1-beta08.01.unitypackage)
* [**Liftoff**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_LiftoffAdapter_v1.0.1-beta08.01.unitypackage)
* [**Yandex**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.1-beta08%2301/TapsellMediation_YandexAdapter_v1.0.1-beta08.01.unitypackage)

To integrate each SDK, download the corresponding adapter package from the links above and follow the steps below:

- Import the packages to your project.
- select **Assets > External Dependency Manager > Android Resolver > Resolve** to get the native dependencies.

<br/>

#### Additional Configuration

- Admob

      In the Tapsell settings menu, add your Admob adapter app signature. (Contact Tapsell support for more information)

<img src="/images/mediation-unity-set-admob-id.png" alt="set-admob-signature" />

- Applovin

      No additional configuration needed.

- Chartboost

      No additional configuration needed.

- Fyber

      No additional configuration needed.

- Mintegral

      No additional configuration needed.

- UnityAds

      No additional configuration needed.

- IronSource

      No additional configuration needed.

- Liftoff

      Note: This adapter needs Unity Editor 2023 and above. No need to implement if you're using lower versions.

- Yandex

      No additional configuration needed.

<br/>

### Family Policy

According to the [GooglePlay Family Policy](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en), if
any of the target audiences for your app is children (especially if you're developing a game),
your app's content must be appropriate for these type of users. Also, you are not allowed to collect some personal information
like Google Advertising ID. However, the third party advertising SDKs need this advertising id to provide and serve personalized ads for users.
As a result, in Tapsell SDK all users are treated as 13 or older. So as an application developer if you're going to
publish your app in GooglePlay, you need to express that your app targets audiences with age of 13 or older.
Otherwise, your app will be removed from GooglePlay according to this policy.

## Implementing Ad Formats

---

The Tapsell SDK is now imported and you're ready to implement an ad. Tapsell offers a number of
different ad formats, so you can choose the one that best fits your app's user experience.

Make sure you have created the ad placements (zones) in your app's dashboard and have the unique id
for each zone, needed later in this guide.

### Banner

Rectangular ads that appear on the device screen usually at the top or bottom.
Banner ads stay on screen while users are interacting with the app, and can refresh automatically
after a certain period of time. If you're new to mobile advertising, they're a great place to start.

This guide shows you how to integrate banner ads from Tapsell into your Unity Android app.

#### Load A Banner Ad

The first step is to load an ad; simply by calling the `RequestBannerAd()` static method in `Tapsell.Mediation.Tapsell` class.

```c#
public static void RequestBannerAd(string zoneId, BannerSize bannerSize, IRequestListener listener)
```

BannerSize is an optional enum parameter determining the size of the shown ad, with the following values:

```c#
public enum BannerSize 
{
  Banner32050, // Default value if the parameter is not provided
  Banner320100,
  Banner250250,
  Banner300250,
  Banner46860,
  Banner72890,
  Banner160600
  BannerAdaptive
}
```

You need to provide a class implementing the `IRequestListener` interface to get the ad load result overriding the success and failure methods:

```c#
namespace Tapsell.Mediation.Request
{
    public interface IRequestListener
    {
        // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
        public void OnSuccess(string adId);
        // Called when there is no ad available
        public void OnFailure();
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void RequestBannerAd(string zoneId, BannerSize bannerSize, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Banner Ad

Once the banner ad is successfully loaded, the next step is to show the ad.
That's done with the `ShowBannerAd()` static method in `Tapsell.Mediation.Tapsell` class passing
the `adId` received in `OnSuccess` method of the `IRequestListener` and
the position of the screen in which you wish to show the ad.

```c#
public static void ShowBannerAd(string adId, BannerPosition position, IAdStateListener.IBanner listener)
```

The `BannerPosition` parameter has an **Enum** type with the following implementation:

```c#
public enum BannerPosition 
{
    Top,
    Bottom,
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}
```

The `IAdStateListener.IBanner` optional parameter can be passed to monitor and handle events
related to displaying your banner ad. The interface has the following implementation:

```c#
namespace Tapsell.Mediation.Show
{
    public interface IBanner
    {
        public void OnAdImpression() 
        {
            // Code to be executed when an impression is recorded for the ad.
        }
        
        public void OnAdClicked() 
        {
            // Code to be executed when the user clicks on the ad.
        }
    
        public void OnAdFailed(string message) 
        {
            // Code to be executed when the ad show fails.
        }
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void ShowBannerAd(string adId, BannerPosition position, Action onImpression, Action onClicked, Action<string> onFailed)
```

#### Destroy Banner Ad

When you are done showing your banner ad, you should destroy it by calling the following static method in
`Tapsell.Mediation.Tapsell` class:

```c#
public static void DestroyBannerAd(string adId)
```

### Interstitial

Interstitial ads are full-screen ads that cover the interface of their host app.
They're typically displayed at natural transition points in the flow of an app, such as 
during the pause between levels in a game. When an app shows an interstitial ad,
the user has the choice to either tap on the ad and continue to its destination or close it and
return to the app.

This guide shows you how to integrate interstitial ads from Tapsell into your Unity Android app.

#### Load An Interstitial Ad

To load an interstitial ad, call the `RequestInterstitialAd` static method of `Tapsell.Mediation.Tapsell` class
passing in the zone identifier and a `IRequestListener` to receive the loaded ad id
or possible failure notice.

```c#
public static void RequestInterstitialAd(string zoneId, IRequestListener listener)
```

The `IRequestListener` interface has the following implementation:

```c#
namespace Tapsell.Mediation.Request
{
    public interface IRequestListener
    {
        // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
        public void OnSuccess(string adId);
        // Called when there is no ad available
        public void OnFailure();
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void RequestInterstitialAd(string zoneId, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Interstitial Ad

Once the interstitial ad is successfully loaded, the next step is to show the ad.
Interstitial ads should be displayed during natural pauses in the flow of an app. Between levels of a game is a good example, or after the user completes a task.
To do so simply call the `ShowInterstitialAd()` static method in `Tapsell.Mediation.Tapsell` class
passing the `adId` received in `OnSuccess` method of the `IRequestListener`.

```c#
public static void ShowInterstitialAd(string adId, IAdStateListener.IInterstitial listener)
```

The `IAdStateListener.IInterstitial` optional parameter can be passed to monitor and handle events
related to displaying your interstitial ad. The interface has the following implementation:

```c#
namespace Tapsell.Mediation.Show
{
    public interface IInterstitial
    {
        public void OnAdImpression() 
        {
            // Code to be executed when an impression is recorded for the ad.
        }
        
        public void OnAdClicked() 
        {
            // Code to be executed when the user clicks on the ad.
        }
    
        public void OnAdClosed(ShowCompletionState completionState)
        {
            // Code to be executed when the fullscreen ad is clised by the user.
        }
        
        public void OnAdFailed(string message) 
        {
            // Code to be executed when the ad show fails.
        }
    }
}
```

The `ShowCompletionState` passed in `OnAdClosed` callback, indicates whether the ad has been shown completely
or skipped by the user before completion.

```c#
public enum ShowCompletionState
{
    Completed,
    Skipped,
    Unknown
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void ShowInterstitialAd(string adId, Action onImpression = null, Action onClicked = null, Action<ShowCompletionState> onClosed = null, Action<string> onFailed = null)
```

### Rewarded

Rewarded ads are full-screen ads that reward users for watching short videos and interacting with
playable ads and surveys. They are used for monetizing free-to-play apps.

This guide shows you how to integrate rewarded ads from Tapsell into your Unity Android app.

#### Load A Rewarded Ad

Rewarded ads are loaded by calling the `RequestRewardedVideoAd` static method of the `Tapsell.Mediation.Tapsell` class;
passing in the zone identifier and a `IRequestListener` to receive the loaded ad id
or possible failure notice.

```c#
public static void RequestRewardedVideoAd(string zoneId, IRequestListener listener)
```

The `IRequestListener` interface has the following implementation:

```c#
namespace Tapsell.Mediation.Request
{
    public interface IRequestListener
    {
        // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
        public void OnSuccess(string adId);
        // Called when there is no ad available
        public void OnFailure();
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void RequestRewardedVideoAd(string zoneId, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Rewarded Ad

Once the rewarded ad is successfully loaded, the next step is to show the ad.
To do so simply call the `ShowRewardedVideoAd()` static method in `Tapsell.Mediation.Tapsell` class
passing the `adId` received in `OnSuccess` method of the `IRequestListener`.

```c#
public static void ShowRewardedVideoAd(string adId, IAdStateListener.IRewardedVideo listener)
```

The `IAdStateListener.IRewardedVideo` optional parameter can be passed to monitor and handle events
related to displaying your rewarded ad; specially to be notified when the user should be rewarded.
The interface has the following implementation:

```c#
namespace Tapsell.Mediation.Show
{
    public interface IRewardedVideo
    {
        public void OnAdImpression() 
        {
            // Code to be executed when an impression is recorded for the ad.
        }
        
        public void OnAdClicked() 
        {
            // Code to be executed when the user clicks on the ad.
        }
    
        public void OnAdClosed(ShowCompletionState completionState)
        {
            // Code to be executed when the fullscreen ad is clised by the user.
        }
        
        public void OnRewarded() 
        {
            // Code to be executed when the user has earned the reward.
        }
        
        public void OnAdFailed(string message) 
        {
            // Code to be executed when the ad show fails.
        }
    }
}
```

The `ShowCompletionState` passed in `OnAdClosed` callback, indicates whether the ad has been shown completely
or skipped by the user before completion.

```c#
public enum ShowCompletionState
{
    Completed,
    Skipped,
    Unknown
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void ShowRewardedVideoAd(string adId, Action onImpression = null, Action onClicked = null, Action<ShowCompletionState> onClosed = null, Action<string> onFailed = null, Action onRewarded = null)
```

### Native

<br/>

> **Note:** Currently, the only network other than Tapsell legacy supporting native ads in Unity is **Admob**.

This guide shows you how to integrate native ads from Tapsell into your Unity app.

> **Caution:** Native video ads are not supported in Unity.

Native ads match both the form and function of the user experience in which they're placed. They also match the visual design of the app they live within. Tapsell Mediation's native ads format enables publishers to render ads that are seamless with content. You can use this technology to implement highly custom renderings that take full advantage of the native code in Unity apps.

Native ads are shown using the same types of `GameObject`s with which you're already building your apps and can be formatted to match the visual design of the user experience in which they live.

#### Load A Native Ad

To load a native ad, call the `RequestNativeAd` static method of `Tapsell.Mediation.Tapsell` class passing in the zone identifier and a `IRequestListener` to receive the loaded ad id or possible failure notice.

```c#
public static void RequestNativeAd(string zoneId, IRequestListener listener)
```

The `IRequestListener` interface has the following implementation:

```c#
namespace Tapsell.Mediation.Request
{
    public interface IRequestListener
    {
        // Called when the ad is successfully loaded; providing the ad id needed to show the ad 
        public void OnSuccess(string adId);
        // Called when there is no ad available
        public void OnFailure();
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void RequestNativeAd(string zoneId, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Native Ad

Once the native ad is successfully loaded, the next step is to show the ad. That's done with the `ShowNativeAd()` static method in `Tapsell.Mediation.Tapsell` class passing
the `adId` received in `OnSuccess` method of the `IRequestListener` and an instance 
of `NativeAdView` populated with the ad views you used in your layout.

```c#
public static void ShowNativeAd(string adId, NativeAdView view, IAdStateListener.INative listener)
```

The `NativeAdView` is a class you need to instantiate and populate with your ad gameObjects using the `Builder` pattern.
Review the sample below for more details:

```c#
NativeAdView nativeAdView = new NativeAdView.Builder()
    .WithIconImage(YOUR_ICON_GAME_OBJECT) // Image or RawImage
    .WithTitleText(YOUR_TITLE_GAME_OBJECT) // Text or TextMeshPro
    .WithDescriptionText(YOUR_DESCRIPTION_GAME_OBJECT) // Text or TextMeshPro
    .WithAdvertiserText(YOUR_ADVERTISER_TEXT_GAME_OBJECT) // Text or TextMeshPro
    .WithBannerImage(YOUR_BANNER_GAME_OBJECT) // Image or RawImage
    .WithAdChoicesImage(YOUR_Ad_CHOICES_GAME_OBJECT) // Image or RawImage
    .WithCtaButton(YOUR_CTA_GAME_OBJECT) // Button or Button-TextMeshPro
    .Build();
```

Note that depending on your ad design you could only include and provide a subset of the possible ad items.

Note that only the below items are guaranteed to be present and get filled:

- Title
- Description
- Banner
- CTA Button

> **Important!:**
>
> Note that any `GameObject` that is registered for an ad asset must have a convex `Collider` component that is representative of 
> the size and shape of the `GameObject`. If `GameObject` objects set for ad assets are missing `Collider` components, 
> the `NativeAdView` is considered invalid and the ad will not be shown.
>

In the code snippet below, a `BoxCollider` is added to the `GameObject` that 
uses a `TextMesh` to display the title ad asset of a native ad. 
Once the `BoxCollider` is attached to the `GameObject`, it will automatically scale to accommodate the text of the `TextMesh` component.

```c#
GameObject title = new GameObject();
title.AddComponent<TextMesh>();
title.GetComponent<TextMesh>().characterSize = 0.5 f;
title.GetComponent<TextMesh>().anchor = TextAnchor.MiddleCenter;
title.GetComponent<TextMesh>().color = Color.black;

// Add box collider to the GameObject which will automatically scale.
headline.AddComponent<BoxCollider>();
```

The `IAdStateListener.INative` optional parameter can be passed to monitor and handle events
related to displaying your native ad. The interface has the following implementation:

```c#
namespace Tapsell.Mediation.Show
{
    public interface INative
    {
        public void OnAdImpression() 
        {
            // Code to be executed when an impression is recorded for the ad.
        }
        
        public void OnAdClicked() 
        {
            // Code to be executed when the user clicks on the ad.
        }
    
        public void OnAdFailed(string message) 
        {
            // Code to be executed when the ad show fails.
        }
    }
}
```

Alternatively, you can provide your callbacks using C# **Action**s:

```c#
public static void ShowNativeAd(string adId, NativeAdView view, Action onImpression = null, Action onClicked = null, Action<string> onFailed = null)
```

> **Consider Persian Characters Support**
> 
> Tapsell Legacy ads usually contain Persian content. Since Persian characters 
> are not supported in Unity by default, you must use custom UI objects that provide the
> support for showing Persian text.
> 
> [This Plugin](https://github.com/pnarimani/RTLTMPro) is a customization of TextMeshPro that you could use 
> for this purpose.
>

<br/>

## Caching Native Ads

To cache native ads, you can use the `RequestMultipleNativeAds` method to fetch and store up to **5** ads at once.

```c#
public static void RequestMultipleNativeAds(string zoneId, int maximumCount, Action<string> onSuccess, Action onFailure)
```

This method allows you to simultaneously request multiple ads (up to 5) and invoke the provided listener up to the requested count. This way, you can pre-load several ads before displaying them.

You can utilize this feature in infinite scrolling lists or scenarios that require displaying multiple ads. Please note that this functionality is exclusively available for native ads.

## Test keys
---

To use test app keys and zones, you can refer to this [link](../test)
