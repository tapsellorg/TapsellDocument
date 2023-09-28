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
    def tapsellPlus = "2.2.3"
    implementation("ir.tapsell.plus:tapsell-plus-sdk-android:$tapsellPlus")
}
```

Also add JAVA8 support in `android {}`:

```groovy
compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_8
  targetCompatibility JavaVersion.VERSION_1_8
}
```

And do a Gradle sync.

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

## Optional permission

- `READ_PHONE_STATE`:
Can be used to allow SDK customize the ad better according to user's taste.

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
