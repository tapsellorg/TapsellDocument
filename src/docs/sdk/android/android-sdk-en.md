---
layout: classic-docs
title: SDK Android
lang: en
permalink: /sdk/android/index.html
toc: true # table of contents
---

## MetrixSDK Android Doc

<!-- [![CircleCI](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample.svg?style=svg)](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample)
[ ![Download](https://api.bintray.com/packages/metrixorg/maven/metrix-sdk-android/images/download.svg) ](https://bintray.com/metrixorg/maven/metrix-sdk-android/_latestVersion) -->

## Basic integration

1. To start with, add the following settings in the `repositories` section of the `gradle` file:

```
allprojects{
    repositories {

    ...

        maven {
            url 'https://dl.bintray.com/metrixorg/maven'
        }
    }
}
```

2. Add the following library to the `dependencies` section of your `gradle` file:

```
implementation 'ir.metrix:metrix:0.8.5'
```

3. Add the following options to the `android` block of your application's `gradle` file:

```
compileOptions {
    targetCompatibility = "8"
    sourceCompatibility = "8"
}
```

4. Add the following settings to your project's `Proguard` file:

```
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-keepclassmembers enum * { *; }
-keep class **.R$* { *; }
-keep interface ir.metrix.sdk.NoProguard
-keep class * implements ir.metrix.sdk.NoProguard { *; }
-keep interface * extends ir.metrix.sdk.NoProguard { *; }

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
-keepnames class okhttp3.internal.publics
```
