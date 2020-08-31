---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی رو میتوانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمعن شوید به درستی پیاده شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network میتوانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

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
    implementation 'com.chartboost:chartboost-sdk:8.1.0'
    
    //for adcolony
    implementation 'com.adcolony:sdk:3.3.11'
    
    //for applovin
    implementation 'com.applovin:applovin-sdk:9.7.2'
    .....
}
```

برای adcolony و chartboost لازم هست ریپازیتوری‌های زیر به build.gradle پروژه اضافه شوند.

```gradle
allprojects {  
    repositories {
        ....
        maven {  
            url  "https://adcolony.bintray.com/AdColony"
        }
        maven {
            url "https://chartboostmobile.bintray.com/Chartboost"
        }
        ....
    }  
}
```