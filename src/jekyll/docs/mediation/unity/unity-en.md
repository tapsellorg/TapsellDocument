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

### Before You Begin

To prepare your app, complete the following steps:

- Tapsell plugin uses [External Dependency Manager for Unity](https://github.com/googlesamples/unity-jar-resolver) for native dependency management. Make sure you have 
imported this utility plugin to your project. The latest version can be downloaded using [this](https://github.com/googlesamples/unity-jar-resolver/raw/master/external-dependency-manager-latest.unitypackage) link. 

- Make sure you have set up your app as an Tapsell Mediation app and have your unique Tapsell App ID
  that is needed later in this guide.

### Configure Your Project

Follow the steps below to be able to use the Tapsell Mediation in your application:

#### Import the Tapsell Mediation Unity plugin

Use [this](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_v1.0.0-beta02.01.unitypackage)
link to download the latest version of Tapsell Mediation plugin and import it as a custom package to your project.

<img src="/images/mediation-unity-import1.jpg" alt="import-package" />

Make sure all of the files are selected and click **Import**.

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

No additional configuration or code is needed to initialize the SDK.

<br/>

### Add Mediation Adapters

The Tapsell Mediation SDK currently supports the following 3rd-party programmatic & mediated partner SDKs:

* [**AdColony**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_AdColonyAdapter_v1.0.0-beta02.01.unitypackage)
* [**AdMob**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_AdMobAdapter_v1.0.0-beta02.01.unitypackage)
* [**Applovin**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_ApplovinAdapter_v1.0.0-beta02.01.unitypackage)
* [**Chartboost**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_ChartboostAdapter_v1.0.0-beta02.01.unitypackage)
* [**Mintegral**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_MintegralAdapter_v1.0.0-beta02.01.unitypackage)
* [**UnityAds**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_UnityAdsAdapter_v1.0.0-beta02.01.unitypackage)
* [**Wortise**](https://github.com/tapsellorg/Unity-Plugin/releases/download/v1.0.0-beta02%2301/TapsellMediation_WortiseAdapter_v1.0.0-beta02.01.unitypackage)

To integrate each SDK, download the corresponding adapter package from the links above and follow the steps below:

- Import the packages to your project.
- select **Assets > External Dependency Manager > Android Resolver > Resolve** to get the native dependencies.

<br/>

#### Additional Configuration

- AdColony

No additional configuration needed.

- Admob

In the Tapsell settings menu, add your Admob adapter app signature. (Contact Tapsell support for more information)

<img src="/images/mediation-unity-set-admob-id.png" alt="set-admob-signature" />

- Applovin

In the Tapsell settings menu, add your Applovin adapter app signature. (Contact Tapsell support for more information)

<img src="/images/mediation-unity-set-applovin-sig.png" alt="set-applovin-signature" />

- Chartboost

No additional configuration needed.

- Mintegral

No additional configuration needed.

- UnityAds

No additional configuration needed.

- Wortise

No additional configuration needed.

<br/>

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

```csharp
public static void RequestBannerAd(string zoneId, BannerSize bannerSize, IRequestListener listener)
```

BannerSize is an optional enum parameter determining the size of the shown ad, with the following values:

```csharp
public enum BannerSize 
{
  Banner32050, // Default value if the parameter is not provided
  Banner320100,
  Banner250250,
  Banner300250,
  Banner46860,
  Banner72890,
  Banner160600
}
```

You need to provide a class implementing the `IRequestListener` interface to get the ad load result overriding the success and failure methods:

```csharp
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

```csharp
public static void RequestBannerAd(string zoneId, BannerSize bannerSize, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Banner Ad

Once the banner ad is successfully loaded, the next step is to show the ad.
That's done with the `ShowBannerAd()` static method in `Tapsell.Mediation.Tapsell` class passing
the `adId` received in `OnSuccess` method of the `IRequestListener` and
the position of the screen in which you wish to show the ad.

```csharp
public static void ShowBannerAd(string adId, BannerPosition position, IAdStateListener.IBanner listener)
```

The `BannerPosition` parameter has an **Enum** type with the following implementation:

```csharp
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

```csharp
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

```csharp
public static void ShowBannerAd(string adId, BannerPosition position, Action onImpression, Action onClicked, Action<string> onFailed)
```

#### Destroy Banner Ad

When you are done showing your banner ad, you should destroy it by calling the following static method in
`Tapsell.Mediation.Tapsell` class:

```csharp
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

```csharp
public static void RequestInterstitialAd(string zoneId, IRequestListener listener)
```

The `IRequestListener` interface has the following implementation:

```csharp
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

```csharp
public static void RequestInterstitialAd(string zoneId, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Interstitial Ad

Once the interstitial ad is successfully loaded, the next step is to show the ad.
Interstitial ads should be displayed during natural pauses in the flow of an app. Between levels of a game is a good example, or after the user completes a task.
To do so simply call the `ShowInterstitialAd()` static method in `Tapsell.Mediation.Tapsell` class
passing the `adId` received in `OnSuccess` method of the `IRequestListener`.

```csharp
public static void ShowInterstitialAd(string adId, IAdStateListener.IInterstitial listener)
```

The `IAdStateListener.IInterstitial` optional parameter can be passed to monitor and handle events
related to displaying your interstitial ad. The interface has the following implementation:

```csharp
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

```csharp
public enum ShowCompletionState
{
    Completed,
    Skipped,
    Unknown
}
```

### Rewarded

Rewarded ads are full-screen ads that reward users for watching short videos and interacting with
playable ads and surveys. They are used for monetizing free-to-play apps.

This guide shows you how to integrate rewarded ads from Tapsell into your Unity Android app.

#### Load A Rewarded Ad

Rewarded ads are loaded by calling the `RequestRewardedVideoAd` static method of the `Tapsell.Mediation.Tapsell` class;
passing in the zone identifier and a `IRequestListener` to receive the loaded ad id
or possible failure notice.

```csharp
public static void RequestRewardedVideoAd(string zoneId, IRequestListener listener)
```

The `IRequestListener` interface has the following implementation:

```csharp
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

```csharp
public static void RequestRewardedVideoAd(string zoneId, Action<string> onSuccess, Action onFailure)
```

#### Show The Loaded Rewarded Ad

Once the rewarded ad is successfully loaded, the next step is to show the ad.
To do so simply call the `ShowRewardedVideoAd()` static method in `Tapsell.Mediation.Tapsell` class
passing the `adId` received in `OnSuccess` method of the `IRequestListener`.

```csharp
public static void ShowRewardedVideoAd(string adId, IAdStateListener.IRewardedVideo listener)
```

The `IAdStateListener.IRewardedVideo` optional parameter can be passed to monitor and handle events
related to displaying your rewarded ad; specially to be notified when the user should be rewarded.
The interface has the following implementation:

```csharp
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

```csharp
public enum ShowCompletionState
{
    Completed,
    Skipped,
    Unknown
}
```