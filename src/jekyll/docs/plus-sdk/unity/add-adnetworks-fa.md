---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی رو میتوانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

## تنظیمات Gradle
در قسمت `dependencies` فایل build.gradle شبکه‌های تبلیغاتی که مایل هستید را مطابق الگوی زیر اضافه کنید.

```gradle
dependencies {
    .......
    // for AdMob
    implementation 'com.google.android.gms:play-services-ads:19.6.0'

    // for UnityAds
    implementation 'com.unity3d.ads:unity-ads:3.5.1'

    // for Chartboost
    implementation 'com.chartboost:chartboost-sdk:8.1.0'
    implementation ("com.google.android.gms:play-services-base:17.5.0"){
        exclude group: 'com.android.support'
    }
    implementation ("com.google.android.gms:play-services-ads-identifier:17.0.0"){
        exclude group: 'com.android.support'
    }
    
    // for Adcolony
    implementation 'com.adcolony:sdk:4.3.0'
    implementation ("com.google.android.gms:play-services-ads-identifier:17.0.0"){
        exclude group: 'com.android.support'
    }
    
    // for Applovin
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

## تنظیمات Resolver
هر شبکه‌ی تبلیغاتی که مایل هستید را مطابق الگوی زیر در فایل TapsellPlusDependencies.xml قرار دهید.

```xml
<dependencies>
  <androidPackages>

    // for AdMob
    <androidPackage spec="com.google.android.gms:play-services-ads:19.5.0">
    </androidPackage>

    // for Unity Ads
    <androidPackage spec="com.unity3d.ads:unity-ads:3.5.1">
    </androidPackage>

    // for Chartboost
    <androidPackage spec="com.chartboost:chartboost-sdk:8.1.0">
      <repositories>
        <repository>https://chartboostmobile.bintray.com/Chartboost</repository>
      </repositories>
    </androidPackage>
    <androidPackage spec="com.google.android.gms:play-services-ads-identifier:17.0.0">
    </androidPackage>
    <androidPackage spec="com.google.android.gms:play-services-base:17.5.0">
    </androidPackage>

    // for Applovin
    <androidPackage spec="com.applovin:applovin-sdk:9.7.2">
    </androidPackage>

    // for AdColony
    <androidPackage spec="com.adcolony:sdk:4.3.0">
      <repositories>
        <repository>https://adcolony.bintray.com/AdColony</repository>
      </repositories>
    </androidPackage>
    <androidPackage spec="com.google.android.gms:play-services-ads-identifier:17.0.0">
    </androidPackage>
    
  </androidPackages>
</dependencies>
```


> دقت کنید که برای استفاده از شبکه تبلیغاتی Unity Ads می‌بایستی Min SDK پروژه را 19 قرار دهید. در غیر این صورت از API Level 16 توسط تپسل‌پلاس پشتیبانی می‌شود.