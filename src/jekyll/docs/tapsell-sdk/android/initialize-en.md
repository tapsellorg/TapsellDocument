---
layout: classic-docs
title: Import Tapsell SDK
lang: en
permalink: /tapsell-sdk/android/initialize/index.html
toc: true # table of contents
---

In order to use Tapsell you first need to follow the steps below to add Tapsell to your project.

## Gradle Config
You can import the Tapsell SDK with a Gradle dependency that points to Tapsell's Maven repository. To use this repository, you need to reference it in the project-level `build.gradle` file, In `allprojects -> repositories` section.

```gradle
maven {
    url 'https://dl.bintray.com/tapsellorg/maven'
}
```
Then add the following lines to the dependencies section of your app-level `build.gradle` file.

```gradle
implementation 'ir.tapsell.sdk:tapsell-sdk-android:4.5.0'
```

Finally sync Gradle using a proxy.

## Initialization
You should initialize Tapsell in the appliation class. 

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(application, TAPSELL_KEY);
}
```
You can get your `tapsell-key` from [Tapsell Dashboard](http://dashboard.tapsell.ir/) and Initialize the SDK in the `application` class.

> You can read [this article]({{site.baseurl}}/application-class) to get acquainted with the application class.


## Proguard Configuration
Get the `proguard.properties` file from this [this link](https://github.com/tapsellorg/TapsellSDK-AndroidSample/blob/master/app/proguard-rules.pro) link and add it to proguard properties of your app module.

