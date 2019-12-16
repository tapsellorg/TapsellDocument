---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus_sdk/flutter/add_adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی رو میتوانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده شده‌اند.

## تنظیمات Gradle
در قسمت `dependencies` فایل build.gradle شبکه‌های تبلغاتی که مایل هستید را مطابق زیر اضافه کنید.

```gradle
dependencies {
    .......
    //for adMob
    implementation 'com.google.android.gms:play-services-ads:17.2.1'

    //for unityAds
    implementation 'com.unity3d.ads:unity-ads:3.0.0'

    //for chartboost
    implementation 'ir.tapsell.sdk:chartboost-sdk-android:7.3.1'

    //for facebook
    implementation 'com.facebook.android:audience-network-sdk:5.3.0'
    implementation 'com.facebook.android:facebook-android-sdk:5.2.0'
    
    //for adcolony
    implementation 'com.adcolony:sdk:3.3.11'
    
    //for applovin
    implementation 'com.applovin:applovin-sdk:9.7.2'
    
    //for vungle
    implementation 'com.vungle:publisher-sdk-android:6.4.11'
    .....
}
```

برای adcolony لازم هست ریپازیتوری زیر به build.gradle پروژه اضافه شود.

```gradle
allprojects {  
    repositories {
        ....
        maven {  
            url  "https://adcolony.bintray.com/AdColony"
        }
        ....
    }  
}
```