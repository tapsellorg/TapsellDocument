---
layout: classic-docs
title: SDK Android
lang: en
permalink: /sdk/android/index.html
toc: true # table of contents
---

<!-- [![CircleCI](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample.svg?style=svg)](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample)
[ ![Download](https://api.bintray.com/packages/metrixorg/maven/metrix-sdk-android/images/download.svg) ](https://bintray.com/metrixorg/maven/metrix-sdk-android/_latestVersion) -->

## Basic integration

1\. To start with, add the following settings in the `repositories` section of the `gradle` file:

```groovy
allprojects{
    repositories {

    ...

        maven {
            url 'https://dl.bintray.com/metrixorg/maven'
        }
    }
}
```

2\. Add the following library to the `dependencies` section of your `gradle` file:

```groovy
implementation 'ir.metrix:metrix:0.11.0'
```

3\. Add the following settings to your project's `Proguard` file:

```
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-keepclassmembers enum * { *; }
-keep class **.R$* { *; }

#Metrix
-keep class ir.metrix.sdk.** { *; }


# retrofit
# Retain service method parameters when optimizing.
-keepclassmembers,allowshrinking,allowobfuscation interface * {
    @retrofit2.http.* <methods>;
}

# Ignore JSR 305 annotations for embedding nullability information.
-dontwarn javax.annotation.**

# Guarded by a NoClassDefFoundError try/catch and only used when on the classpath.
-dontwarn kotlin.Unit

# Top-level functions that can only be used by Kotlin.
-dontwarn retrofit2.-KotlinExtensions

# With R8 full mode, it sees no subtypes of Retrofit interfaces since they are created with a Proxy
# and replaces all potential values with null. Explicitly keeping the interfaces prevents this.
-if interface * { @retrofit2.http.* <methods>; }
-keep,allowobfuscation interface <1>

#OkHttp
# A resource is loaded with a relative path so the package of this class must be preserved.
-keepnames class okhttp3.internal.publicsuffix.PublicSuffixDatabase

# Animal Sniffer compileOnly dependency to ensure APIs are compatible with older versions of Java.
-dontwarn org.codehaus.mojo.animal_sniffer.*

# OkHttp platform used only on JVM and when Conscrypt dependency is available.
-dontwarn okhttp3.internal.platform.ConscryptPlatform



#Gson
# Gson specific classes
-dontwarn sun.misc.**
#-keep class com.google.gson.stream.** { *; }

# Prevent proguard from stripping interface information from TypeAdapterFactory,
# JsonSerializer, JsonDeserializer instances (so they can be used in @JsonAdapter)
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer
#gms
-keep class com.google.android.gms.** { *; }

-dontwarn android.content.pm.PackageInfo
```

4\. Since the 1st of August of 2014, apps in the Google Play Store must use the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) to uniquely identify devices. To allow the Metrix SDK to use the Google Advertising ID, you must integrate the [Google Play Services](http://developer.android.com/google/play-services/setup.html). If you haven't done this yet, follow these steps:

- Open the `build.gradle` file of your app and find the `dependencies` block. Add the following line:

```groovy
implementation 'com.google.android.gms:play-services-analytics:16.0.7'
```

**Note**: The Metrix SDK is not tied to any specific version of the `play-services-analytics` part of the Google Play Services library, so feel free to always use the latest version of it (or whichever you might need).

- **Skip this step if you are using version 7 or later of Google Play Services**: In the Package Explorer open the `AndroidManifest.xml` of your Android project. Add the following `meta-data` tag inside the `<application>` element.

  ```xml
  <meta-data android:name="com.google.android.gms.version"
             android:value="@integer/google_play_services_version" />
  ```

5\. Please add the following permissions, which the Metrix SDK needs, if they are not already present in your `AndroidManifest.xml` file:

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

### Google Play Referrer API

In order to support this in your app, please make sure you have the following line added to your `build.gradle` file:

```groovy
implementation 'com.android.installreferrer:installreferrer:1.0'
```

Also, make sure that you have paid attention to the Proguard chapter and that you have added all the rules mentioned in it, especially the one needed for this feature:

```
-keep public class com.android.installreferrer.** { *; }
```

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

We use this broadcast receiver to retrieve the install referrer and pass it to our backend.

If you are already using a multiple broadcast receiver for the `INSTALL_REFERRER` intent, follow below to add the Metrix broadcast receiver.
If you have implemented your own broadcast receiver like this

```java
public class InstallReceiver extends BroadcastReceiver {
   @Override
   public void onReceive(Context context, Intent intent) {
       // Metrix
       new MetrixReferrerReceiver().onReceive(context, intent);

       // Google Analytics
       new CampaignTrackingReceiver().onReceive(context, intent);
   }
}
```

then add class to recevier in `applicaton` tag in `AndroidManifest.xml` file

```xml
<receiver
    android:name="com.your.app.InstallReceiver"
    android:permission="android.permission.INSTALL_PACKAGES"
    android:exported="true" >
    <intent-filter>
        <action android:name="com.android.vending.INSTALL_REFERRER" />
    </intent-filter>
</receiver>
```

## Implement the SDK in your project

### Initial configuration in the app

You need to initialize the Metrix SDK in `onCreate` method of your `Application`. If you do not already have a class `Application` in your project, create this class as below:

1\. Create a class that inherits from the `Application` class:

<img src="https://storage.backtory.com/tapsell-server/metrix/doc/screenshots/Metrix-Application-Class.png"/>  
  
2\. Open the `AndriodManifest.xml` file and go to`<application>` tag.
3\. Using `Attribute` subclass, add `Application` to `AndroidManifest.xml` file:

```xml
    <application
        android:name=“.MyApplication”
        ... >

    </application>
```

<img src="https://storage.backtory.com/tapsell-server/metrix/doc/screenshots/Metrix-Application-Manifest.png">  
  
4\. In `onCreate` method of your `Application` class, initialize Metrix according to the codes below:

```java
import ir.metrix.sdk.Metrix;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Metrix.initialize(this, "APP_ID");
    }
}
```

Replace `APP_ID` with your application id. You can find that in your Metrix dashboard.

### About the application class and initialization in this class

Android gives developers the ability to run methods before the creation of any `activity` in the application class. Because counting the `session`, gathering `screen-flows` between `activities` and many other features of the SDK required them to work properly.

## Additional features

### Events and sessions

In each interaction that the user has with the app, Metrix sends this interaction to the server as an **event**. In Metrix, a **session** is a specific timeframe during which the user interacted with the app.

There are three types of events in Metrix:

**1. Session Start:** The time a session starts.
**2. Session Stop:** The time of a session ends.
**3. Custom:** Depending on your application logic and the interactiion that the user has with your app, you can create and send custom events as below:

**Tip:** To use library facilities and call the methods provided by the SDK, you must get `MetrixClient` using `getInstance` and then choose your desired method.

### Enable location listening

Using the following functions, you can inform Metrix that you wish to send information about the location of the user (In order for these methods to work properly, the optional permissions explained earlier must be enabled).

```java
Metrix.getInstance().enableLocationListening();

Metrix.getInstance().disableLocationListening();
```

### Limitation in number of events to upload

Using the following function, you can specify that each time the number of your buffered events reaches the threshold, the Metrix SDK should send them to the server:

```java
Metrix.getInstance().setEventUploadThreshold(50);
```

(The default value is 30 events.)

### Limitation in number of events to send per request

Using this function, you can specify the maximum number of out-going events per request as shown below:

```java
Metrix.getInstance().setEventUploadMaxBatchSize(100);
```

(The default value is 100 events.)

### Limitation in number of events to buffer on the device

Using the following function, you can specify the maximum number of events that are buffered in the SDK (for example, if the user's device loses internet connection, the events will be buffered in the library until there is a chance to send the events and empty the buffer) and if the number of buffered events in the library passes this amount, old events are destroyed by SDK to make space for new events:

```java
Metrix.getInstance().setEventMaxCount(1000);
```

(The default value is 100 events.)

### The time interval for sending events

By using this function, you can specify the timeout period of requests for sending events:

```java
Metrix.getInstance().setEventUploadPeriodMillis(30000);
```

(The default value is 30 seconds.)

### The session timeout

Using this function, you can specify the limit of session length in your application in unit of miliseconds. For example, if this value is 10,000 and the user interacts with the application for 70 seconds, Metrix calculates this interaction as seven sessions.

```java
Metrix.getInstance().setSessionTimeoutMillis(1800000);
```

(The default value is 30 minutes.)

### Log management

Note that you should set this value to `false` before the release of your application:

```java
Metrix.getInstance().enableLogging(true);
```

(The default value is true.)

### Set LogLevel

Using this function, you can specify what level of logs to be printed in `logcat`, for example, the following command will display all logs except `VERBOSE` in `logcat`:

```java
Metrix.getInstance().setLogLevel(Log.DEBUG);
```

(The default value is `Log.INFO`.)

### Flush all events

Using this function, you can specify wether when the application is closed, all events buffered in the device, should be sent or not:

```java
Metrix.getInstance().setFlushEventsOnClose(false);
```

(The default value is true.)

### Current session number

Using this function, you can find the current session number:

```java
Metrix.getInstance().getSessionNum();
```

### Custom events

You can use Metrix to track any event in your app. Suppose you want to track every tap on a button. You would have to create a new event slug in the Events Management section of your dashboard. Let's say that event slug is `abc123`. In your button's onClick method you could then add the following lines to track the click.

You can call this function in two ways:

1\. Make a custom event that has only one specified name:

```java
Metrix.getInstance().newEvent("abc123");
```

The input of this function is a String.

2\. Create a custom event with a specific number of attributes and metrics, for example, suppose you want to create a custom event in an online purchase program:

```java
Map<String, String> attributes = new HashMap<>();
attributes.put("first_name", "Ali");
attributes.put("last_name", "Bagheri");
attributes.put("manufacturer", "Nike");
attributes.put("product_name", "shirt");
attributes.put("type", "sport");
attributes.put("size", "large");

Map<String, Object> metrics = new HashMap<>();
metrics.put("price", 100000);
metrics.put("purchase_time", current_time);

Metrix.getInstance().newEvent("purchase_event_slug", attributes, metrics);
```

The variables for the `newEvent` method are as follows:

- **First variable:**The event slug which is a String you receive from the Metrix dashboard.

- **Second variable:** A Map `<String, String>` that specifies the attributes of an event.

- **Third variable:** A Map `<String, Double>` that contains measurable metrics.

### Track Revenue

If your users can generate revenue by tapping on advertisements or making in-app purchases, you can track those revenues too with events. You can also add an optional order ID to avoid tracking duplicate revenues. By doing so, the last ten order IDs will be remembered and revenue events with duplicate order IDs are skipped. This is especially useful for tracking in-app purchases. You can see an example below where a tap is worth 12,000 IRR:

```java
Metrix.getInstance().newRevenue("my_event_slug", 12000, MetrixCurrency.IRR, "{orderId}");
```

### Specify the default attributes for user

Using this function, you can add arbitrary `Attributes` to all events of the user:

```java
Map<String, String> attributes = new HashMap<>();
attributes.put("manufacturer", "Nike");
Metrix.getInstance().addUserAttributes(attributes);
```

### Specify the default metrics for user

Using this function, you can add arbitrary `Metrics` to all events of the user:

```java
Map<String, Object> metrics = new HashMap<>();
metrics.put("purchase_time", current_time);
Metrix.getInstance().setUserMetrics(metrics);
```

### Enable the process of storing the user flow

Using this function, you can inform Metrix to gather information about user's flow in each `Activity`/`Fragment` and these details should be stored automatically:

```java
Metrix.getInstance().setScreenFlowsAutoFill(true);
```

(The default value is false.)

### Find out the value of screenFlow

Using this function, you can read the `screenFlow` value in Metrix:

```java
Metrix.getInstance().isScreenFlowsAutoFill();
```

### Get User attribution

In case you want to access info about your user's current attribution when ever you need it, you can make a call to the following method of the Metrix instance:

```java
Metrix.getInstance().setOnAttributionChangedListener(new OnAttributionChangedListener() {
    @Override
      public void onAttributionChanged(AttributionModel attributionModel) {
          //TODO
       }
    });
```

Here is a quick summary of `AttributionModel` properties:

`attributionModel.getAcquisitionAd()` : The creative/ad grouping level of the current attribution.

`attributionModel.getAcquisitionAdSet()`: The adGroup/adSet grouping level of the current attribution.

`attributionModel.getAcquisitionCampaign()`: The campaign grouping level of the current attribution.

`attributionModel.getAcquisitionSource()`: The network/source grouping level of the current attribution.

`attributionModel.getAttributionStatus()`: Specifies the status of the user in the campaign and returns only the four values below:

1. `ATTRIBUTED`
2. `NOT_ATTRIBUTED_YET`
3. `ATTRIBUTION_NOT_NEEDED`
4. `UNKNOWN`

### Pre-installed trackers

If you want to use the Metrix SDK to recognize users whose devices came with your app pre-installed, open your app delegate and set the default tracker of your config. Replace `trackerToken` with the tracker token you created in the dashboard. Please note that the Dashboard displays a tracker URL (including http://tracker.metrix.ir/). In your source code, you should specify only the six-character token and not the entire URL.

```java
Metrix.getInstance().setDefaultTracker(trackerToken);
```

### Sdk signature

An account manager must activate the Metrix SDK Signature.

If the SDK signature has already been enabled on your account and you have access to App Secrets in your Metrix Dashboard, please use the method below to integrate the SDK signature into your app.

An App Secret is set by calling setAppSecret on your config instance:
```java
Metrix.getInstastance().setAppSecret(secretId, info1, info2, info3, info4);
```


### Separation based on app stores

If you want to publish your app in different stores such as Cafe Bazaar, Google Play, etc, and split the organic users by their store's source, you can use the following method:

```java
Metrix.getInstastance().setStore("store name");
```

## Deep linking

### Deep linking Overview

If you are using Metrix tracker URLs with deeplinking enabled, it is possible to receive information about the deeplink URL and its content. Users may interact with the URL regardless of whether they have your app installed on their device (standard deep linking scenario) or not (deferred deep linking scenario). In the standard deep linking scenario, the Android platform natively offers the possibility for you to receive deep link content information. The Android platform does not automatically support deferred deep linking scenario; in this case, the Metrix SDK offers the mechanism you need to get the information about the deep link content.

### Standard deep linking scenario

If a user has your app installed and you want it to launch after they engage with an Metrix tracker URL with the `deep_link` parameter in it, enable deeplinking in your app. This is done by choosing a desired **unique scheme name**. You'll assign it to the activity you want to launch once your app opens following a user selecting the tracker URL in the`AndroidManifest.xml` file. Add the `intent-filter` section to your desired activity definition in the manifest file and assign an `android:scheme` property value with the desired scheme name:

```xml
<activity
    android:name=".MainActivity"
    android:configChanges="orientation|keyboardHidden"
    android:label="@string/app_name"
    android:screenOrientation="portrait">

    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="metrixExample" />
    </intent-filter>
</activity>
```
Deeplink content information within your desired activity is delivered via the `Intent` object, via either the activity's `onCreate` or `onNewIntent` methods. Once you've launched your app and have triggered one of these methods, you will be able to receive the actual deeplink passed in the `deep_link` parameter in the click URL. You can then use this information to conduct some additional logic in your app.

You can extract deeplink content from either two methods like so:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
}
```

```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
}
```

### Deferred deep linking scenario

Deferred deeplinking scenario occurs when a user clicks on an Metrix tracker URL with a `deep_link` parameter contained in it, but does not have the app installed on the device at click time. When the user clicks the URL, they will be redirected to the Play Store to download and install your app. After opening it for the first time, `deep_link` parameter content will be delivered to your app.

The Metrix SDK opens the deferred deep link by default. There is no extra configuration needed.

#### Deferred deep linking callback

If you wish to control if the Metrix SDK will open the deferred deep link, you can do it with a callback method in the config object.


```java
Metrix.getInstance().setOnDeeplinkResponseListener(new OnDeeplinkResponseListener() {
    @Override
    public boolean launchReceivedDeeplink(Uri deeplink) {
        // ...
        if (shouldMetrixSdkLaunchTheDeeplink(deeplink)) {
            return true;
        } else {
            return false;
        }
    }
});
```

After the Metrix SDK receives the deep link information from our backend, the SDK will deliver you its content via the listener and expect the `boolean` return value from you. This return value represents your decision on whether or not the Metrix SDK should launch the activity to which you have assigned the scheme name from the deeplink (like in the standard deeplinking scenario).

If you return `true`, we will launch it, triggering the scenario described in the Standard deep linking scenario chapter. If you do not want the SDK to launch the activity, return `false` from the listener, and (based on the deep link content) decide on your own what to do next in your app.

### Reattribution via deeplinks

Metrix enables you to run re-engagement campaigns with deeplinks. For more information.

If you are using this feature, you need to make one additional call to the Metrix SDK in your app for us to properly reattribute your users.

Once you have received the deeplink content in your app, add a call to the `Metrix.getInstance().appWillOpenUrl(Uri)` method. By making this call, the Metrix SDK will send information to the Metrix backend to check if there is any new attribution information inside of the deeplink. If your user is reattributed due to a click on the Metrix tracker URL with deeplink content.

Here's how the call to `Metrix.getInstance().appWillOpenUrl(Uri)` should look:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
    Metrix.getInstance().appWillOpenUrl(data);
}
```

```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
    Metrix.getInstance().appWillOpenUrl(data);
}
```
