---
layout: classic-docs
title: Initializing TapsellPlus in Android
lang: en
permalink: /plus-sdk/android/initialize/index.html
toc: true
---

> If there is a problem or ambiguity, please refer to [common issues]({{site.baseurl}}/faq/plus-sdk/android/) or check the [GitHub Issues](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues?Q=is%3Aissue) page.
{:data-title="Project build note" data-color="red"}


First of all you will need to setup and import TapsellPlus into your project.


## Gradle setup

In app(module)/`build.gradle`:

```groovy
dependencies {
    def tapsellPlus = "2.2.6"
    implementation("ir.tapsell.plus:tapsell-plus-sdk-android:$tapsellPlus")
}
```

Also add Java 8 support in `android {}`:

```groovy
compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_8
  targetCompatibility JavaVersion.VERSION_1_8
}
```

And do a Gradle sync.

#### Android 13 support
Apps updating their target API level to 33 (Android 13) will need to declare a Google Play services permission in the manifest file as follows:

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

Read more about Google Advertising ID changes [here](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

## Initialization

Use `TapsellPlus.initialize(context)` in the beginning of your app's entry point:

```java
String tapsellPlusKey = "YOUR_TAPSELL_PLUS_APP_ID";

TapsellPlus.initialize(this, tapsellPlusKey,
		new TapsellPlusInitListener() {
    @Override
    public void onInitializeSuccess(AdNetworks adNetworks) {
        // Init successful
    }
    @Override
    public void onInitializeFailed(AdNetworks adNetworks,
				AdNetworkError adNetworkError) {
        // Error in initialization - Use provided parameters to see why
    }
});
```

Get `tapsellPlusKey` from [Tapsell dashboard](https://dashboard.tapsell.ir/) after building the app

> Also, you may want to activate **debug mode** to get some additional logs and information (specially when ad requests fail):
>
> ```java
> TapsellPlus.setDebugMode(Log.DEBUG);
> ```
{:data-title="Debug Mode" data-color="green"}




## GDPR 

If GDPR matters to your product you need to consider applying it for the SDK to be able to use full functionality:

```java
Activity activity = this;
TapsellPlus.setGDPRConsent(activity, true);
```

You can show a default dialog for that as well:

```java
Activity activity = this;
TapsellPlus.showGDPRDialog(activity);
```

### Family Policy

According to the [GooglePlay Family Policy](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en), if 
any of the target audiences for your app is children (especially if you're developing a game), 
your app's content must be appropriate for these type of users. Also, you are not allowed to collect some personal information 
like Google Advertising ID. However, the third party advertising SDKs need this advertising id to provide and serve personalized ads for users. 
As a result, in Tapsell SDK all users are treated as 13 or older. So as an application developer if you're going to 
publish your app in GooglePlay, you need to express that your app targets audiences with age of 13 or older. 
Otherwise, your app will be removed from GooglePlay according to this policy.

## Optional permission

- `READ_PHONE_STATE`:
Can be used to allow SDK customize the ad better according to user's taste.

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
