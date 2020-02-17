---
layout: classic-docs
title: Import Tapsell SDK
lang: en
permalink: /tapsell-sdk/android/initialize/index.html
toc: true # table of contents
---

## Gradle Config
You can import the Tapsell SDK with a Gradle dependency that points to Tapsell's Maven repository. To use this repository, you need to reference it in the project-level `build.gradle` file, In `allprojects -> repositories` section.

```gradle
maven {
    url 'https://dl.bintray.com/tapsellorg/maven'
}
```
Secondly, add the following dependency to the dependencies section of your app-level `build.gradle` file.

```gradle
implementation 'ir.tapsell.sdk:tapsell-sdk-android:4.5.0'
```

## Proguard Configuration
Get `proguard.properties` file from this [this link](https://github.com/tapsellorg/TapsellSDK-AndroidSample/blob/master/app/proguard-rules.pro) link and add it to proguard properties of your app module.

## Initialize
Get your `tapsell-key` from [Tapsell Dashboard](http://dashboard.tapsell.ir/) and Initialize the SDK in the `application` class.

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(application, TAPSELL_KEY);
}
```