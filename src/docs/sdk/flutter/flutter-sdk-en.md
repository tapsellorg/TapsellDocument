---
layout: classic-docs
title: SDK Flutter
lang: en
permalink: /sdk/flutter/index.html
toc: true # table of contents
---

[![pub package](https://img.shields.io/pub/v/metrix.svg)](https://pub.dartlang.org/packages/metrix)

## Basic integration

1\. To use this plugin, add `metrix` as a [dependency in your pubspec.yaml file](https://flutter.io/platform-plugins/).

2\. Add the following settings to your project's `Proguard` file:

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
-keep public class com.android.installreferrer.** { *; }

```

3\. Please add the following permissions, which the Metrix SDK needs, if they are not already present in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->
```

(Two last permissions are optional)

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

You need to initialize the Metrix SDK in `initState` method of your `State`.

1\. In `initState` method of your `State` class, initialize Metrix according to the codes below:

```dart
import 'package:metrix/metrix.dart';

class _MyAppState extends State<MyApp> {

  @override
  void initState() {
    super.initState();
    Metrix.initialize("APP_ID");
  }
}
```

Replace `APP_ID` with your application id. You can find that in your Metrix dashboard.

## Additional features

### Events and sessions

In each interaction that the user has with the app, Metrix sends this interaction to the server as an **event**. In Metrix, a **session** is a specific timeframe during which the user interacted with the app.

There are three types of events in Metrix:

**1. Session Start:** The time a session starts.

**2. Session Stop:** The time of a session ends.

**3. Custom:** Depending on your application logic and the interactiion that the user has with your app, you can create and send custom events as below:

### Custom events

You can use Metrix to track any event in your app. Suppose you want to track every tap on a button. You would have to create a new event slug in the Events Management section of your dashboard. Let's say that event slug is `abc123`. In your button's onClick method you could then add the following lines to track the click.

You can call this function in two ways:

1\. Make a custom event that has only one specified name:

```dart
Metrix.newEvent("abc123");
```

The input of this function is a String.

2\. Create a custom event with a specific number of attributes and metrics, for example, suppose you want to create a custom event in an online purchase program:

```dart
Map<String, String> attributes = new Map();
attributes["first_name"] =  "Ali";
attributes["last_name"] =  "Bagheri";
attributes["manufacturer"] =  "Nike";
attributes["product_name"] =  "shirt";
attributes["type"] =  "sport";
attributes["size"] =  "large";

Map<String, Object> metrics = new Map();
metrics["price"] =  100000;
metrics["purchase_time"] =  current_time;

Metrix.newEvent("purchase_event_slug", attributes, metrics);
```

The variables for the `newEvent` method are as follows:

- **First variable:**The event slug which is a String you receive from the Metrix dashboard.

- **Second variable:** A Map `<String, String>` that specifies the attributes of an event.

- **Third variable:** A Map `<String, Double>` that contains measurable metrics.


### Track Revenue

If your users can generate revenue by tapping on advertisements or making in-app purchases, you can track those revenues too with events. You can also add an optional order ID to avoid tracking duplicate revenues. By doing so, the last ten order IDs will be remembered and revenue events with duplicate order IDs are skipped. This is especially useful for tracking in-app purchases. You can see an example below where a tap is worth 12,000 IRR:

```dart
Metrix.newRevenue("my_event_slug", 12000, 0, "2");
```

The first parameter is the slug you get from the dashboard.
The second parameter is the amount of revenue.
The third parameter is the currency of this event. If you do not set the value, Rial is be considered as default value. You can see below its values:

1. `0` Rial
2. `1` Dollars
3. `2` Euro

The fourth parameter is your order number.

### Pre-installed trackers

If you want to use the Metrix SDK to recognize users whose devices came with your app pre-installed, open your app delegate and set the default tracker of your config. Replace `trackerToken` with the tracker token you created in the dashboard. Please note that the Dashboard displays a tracker URL (including http://tracker.metrix.ir/). In your source code, you should specify only the six-character token and not the entire URL.

```dart
Metrix.setDefaultTracker(trackerToken);
```

### Sdk signature

An account manager must activate the Metrix SDK Signature.

If the SDK signature has already been enabled on your account and you have access to App Secrets in your Metrix Dashboard, please use the method below to integrate the SDK signature into your app.

An App Secret is set by calling setAppSecret on your config instance:

```dart
Metrix.setAppSecret(secretId, info1, info2, info3, info4);
```

