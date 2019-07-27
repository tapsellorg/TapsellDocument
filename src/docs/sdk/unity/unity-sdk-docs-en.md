---
layout: classic-docs
title: SDK unity
lang: en
permalink: /sdk/unity/index.html
toc: true # table of contents
---

## Basic integration

1\. Download the latest version from [our releases page](https://storage.backtory.com/metricx/sdk-unity/MetrixSDK-v0.11.0.unitypackage).
Open your project in the Unity Editor and navigate to Assets → Import Package → Custom Package and select the downloaded Unity package file.

2\. Please add the following permissions, which the Metrix SDK needs, if they are not already present in your `AndroidManifest.xml` file in `Plugins/Android` folder:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->
```

(Two last permissions are optional)

## Install Referrer

In order to correctly attribute an install of your app to its source, Metrix needs information about the **install referrer**. This can be obtained by using the **Google Play Referrer API** or by catching the **Google Play Store intent** with a broadcast receiver.

**Important**: The Google Play Referrer API is newly introduced by Google with the express purpose of providing a more reliable and secure way of obtaining install referrer information and to aid attribution providers in the fight against click injection. It is **strongly advised** that you support this in your application. The Google Play Store intent is a less secure way of obtaining install referrer information. It will continue to exist in parallel with the new Google Play Referrer API temporarily, but it is set to be deprecated in future.

### Google Play Store intent

The Google Play Store `INSTALL_REFERRER` intent should be captured with a broadcast receiver. If you are **not using your own broadcast receiver** to receive the `INSTALL_REFERRER` intent, add the following `receiver` tag inside the `application` tag in your `AndroidManifest.xml`.

```xml
<receiver
    android:name="ir.metrix.sdk.MetrixReferrerReceiver"
    android:permission="android.permission.INSTALL_PACKAGES"
    android:exported="true" >
    <intent-filter>
        <action android:name="com.android.vending.INSTALL_REFERRER" />
    </intent-filter>
</receiver>
```

## Implement the SDK in your project

### Initial configuration in the app

Initialize Metrix according to the code below:

```csharp
Metrix.Initialize("APP_ID");
```

Replace `APP_ID` with your application id. You can find that in your Metrix's dashboard.  


## Additional features

### Events and sessions

In each interaction that the user has with the app, Metrix sends this interaction to the server as an **event**. In Metrix, a **session** is a specific timeframe during which the user interacted with the app.
There are three types of events in Metrix:
**1. Session Start:** The time a session starts.
**2. Session Stop:** The time of a session ends.
**3. Custom:** Depending on your application logic and the interactiion that the user has with your app, you can create and send custom events as below:

### Enable location listening

Using the following functions, you can inform Metrix that you wish to send information about the location of the user (In order for these methods to work properly, the optional permissions explained earlier must be enabled).

```csharp
Metrix.EnableLocationListening();
Metrix.DisableLocationListening();
```

### Limitation in number of events to upload

Using the following function, you can specify that each time the number of your buffered events reaches the threshold, the Metrix SDK should send them to the server:

```csharp
Metrix.SetEventUploadThreshold(50);
```

(The default value is 30 events.)

### Limitation in number of events to send per request

Using this function, you can specify the maximum number of out-going events per request as shown below:

```csharp
Metrix.SetEventUploadMaxBatchSize(100);
```

(The default value is 100 events.)

### Limitation in number of events to buffer on the device

Using the following function, you can specify the maximum number of events that are buffered in the SDK (for example, if the user's device loses internet connection, the events will be buffered in the library until there is a chance to send the events and empty the buffer) and if the number of buffered events in the library passes this amount, old events are destroyed by SDK to make space for new events:

```csharp
Metrix.SetEventMaxCount(1000);
```

(The default value is 100 events.)

### The time interval for sending events

By using this function, you can specify the timeout period of requests for sending events:

```csharp
Metrix.SetEventUploadPeriodMillis(30000);
```

(The default value is 30 seconds.)

### The session timeout

Using this function, you can specify the limit of session length in your application in unit of miliseconds. For example, if this value is 10,000 and the user interacts with the application for 70 seconds, Metrix calculates this interaction as seven sessions.

```csharp
Metrix.SetSessionTimeoutMillis(1800000);
```

(The default value is 30 minutes.)

### Log management

Note that you should set this value to `false` before the release of your application:

```csharp
Metrix.EnableLogging(true);
```

(The default value is true.)

### Set LogLevel

Using this function, you can specify what level of logs to be printed in `logcat`, for example, the following command will display all logs except `VERBOSE` in `logcat`:

```csharp
Metrix.SetLogLevel(3);
```

(The default value is `Log.INFO`.)

The value of `Log Level` can be one of the following:

```csharp
VERBOSE = 2;
DEBUG = 3;
INFO = 4;
WARN = 5;
ERROR = 6;
ASSERT = 7;
```

### Flush all events

Using this function, you can specify whether when the application is closed, all events buffered in the device, should be sent or not:

```csharp
Metrix.SetFlushEventsOnClose(false);
```

(The default value is true.)

### Current session number

By this function, you can find the current session number:

```csharp
Metrix.GetSessionNum();
```

### Custom event

You can use Metrix to track any event in your app. Suppose you want to track every tap on a button. You would have to create a new event slug in the Events Management section of your dashboard. Let's say that event slug is `abc123`. In your button's onClick method you could then add the following lines to track the click.

You can call this function in this way:
Make a custom event that has only one specified name:

```csharp
Metrix.NewEvent("abc123");
```

The input of this function is String.

### Track Revenue

If your users can generate revenue by tapping on advertisements or making in-app purchases, you can track those revenues too with events. You can also add an optional order ID to avoid tracking duplicate revenues. By doing so, the last ten order IDs will be remembered and revenue events with duplicate order IDs are skipped. This is especially useful for tracking in-app purchases. You can see an example below where a tap is worth 12,000 IRR:

```csharp
Metrix.NewRevenue("my_event_slug", 12000, 0, "2");
```

The first parameter is the slug you get from the dashboard.
The second parameter is the amount of revenue.
The third parameter is the currency of this event. If you do not set the value, Rial is be considered as default value. You can see below its values:

1. `0` Rial
2. `1` Dollars
3. `2` Euro

The fourth parameter is your order number.

### Enable the process of storing the user flow

Using this function, you can inform the Metrix to gather information about user's flow in each `Activity`/`Fragment` and these details should be stored automatically:

```csharp
Metrix.ScreenDisplayed("First Screen");
```

### Pre-installed trackers

If you want to use the Metrix SDK to recognize users whose devices came with your app pre-installed, open your app delegate and set the default tracker of your config. Replace `trackerToken` with the tracker token you created in dashboard. Please note that the Dashboard displays a tracker URL (including http://tracker.metrix.ir/). In your source code, you should specify only the six-character token and not the entire URL.

```csharp
Metrix.SetDefaultTracker("trackerToken");
```

### Sdk signature

An account manager must activate the Metrix SDK Signature.

If the SDK signature has already been enabled on your account and you have access to App Secrets in your Metrix Dashboard, please use the method below to integrate the SDK signature into your app.

An App Secret is set by calling setAppSecret on your config instance:
```csharp
Metrix.SetAppSecret(secretId, info1, info2, info3, info4);
```

