---
layout: classic-docs
title: Initializing TapsellPlus in Android
lang: en
permalink: /plus-sdk/android/initialize/index.html
toc: true
---

First of all you will need to setup and import TapsellPlus into your project.


## Gradle setup

In app(module)/`build.gradle`:

```gradle
dependencies {
    // ....
    implementation 'ir.tapsell.plus:tapsell-plus-sdk-android:2.1.6'
    // ....
}
```

Also add this in `android {}`:

```gradle
compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_8
  targetCompatibility JavaVersion.VERSION_1_8
}
```

And do a Gradle sync.

## Initialization

Use `TapsellPlus.initialize(context)` in the beginning of your app's entry point:

```java
import ir.tapsell.plus.TapsellPlus;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ...
        TapsellPlus.initialize(this, TAPSELL_KEY,
				new TapsellPlusInitListener() {
            @Override
            public void onInitializeSuccess(AdNetworks adNetworks) {
                Log.d("onInitializeSuccess", adNetworks.name());
            }

            @Override
            public void onInitializeFailed(AdNetworks adNetworks,
						AdNetworkError adNetworkError) {
                Log.e("onInitializeFailed", "ad network: " + adNetworks.name() + ", error: " +	adNetworkError.getErrorMessage());
            }
        });
        ...
    }
}
```

Get `TAPSELL_KEY` from [Tapsell dashboard](https://dashboard.tapsell.ir/) after building the app


## GDPR 

If GDPR matters to your product you need to consider applying it for the SDK to be able to use full functionality:

```java
TapsellPlus.setGDPRConsent(this, true);
```

You can show a default dialog for that as well:

```java
TapsellPlus.showGDPRDialog(/* activity */ this)
```

## Optional permission

- `READ_PHONE_STATE`:
Can be used to allow SDK customize the ad better according to user's taste.

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
