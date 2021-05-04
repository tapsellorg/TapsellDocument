---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/android/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی را می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده‌سازی شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

## تنظیمات Gradle
در قسمت `dependencies` فایل build.gradle شبکه‌های تبلغاتی که مایل هستید را مطابق زیر اضافه کنید.

```gradle
dependencies {
    .......
    //for adMob
    implementation 'com.google.android.gms:play-services-ads:19.6.0'

    //for unityAds
    implementation 'com.unity3d.ads:unity-ads:3.5.1'

    //for chartboost
    implementation 'com.chartboost:chartboost-sdk:8.1.0'
    implementation ("com.google.android.gms:play-services-base:17.5.0"){
        exclude group: 'com.android.support'
    }
    implementation ("com.google.android.gms:play-services-ads-identifier:17.0.0"){
        exclude group: 'com.android.support'
    }
    
    //for adcolony
    implementation 'com.adcolony:sdk:4.5.0'
    implementation ("com.google.android.gms:play-services-ads-identifier:17.0.0"){
        exclude group: 'com.android.support'
    }
    
    //for applovin
    implementation 'com.applovin:applovin-sdk:9.7.2'
    .....
}
```

برای adcolony و chartboost لازم است ریپازیتوری‌های زیر به build.gradle پروژه اضافه شوند.

```gradle
allprojects {  
    repositories {
        ....

        mavenCentral()

        // for v1.2.3-rc4 and before
        //maven {  
        //    url  "https://adcolony.bintray.com/AdColony"
        //}
        //maven {
        //    url "https://chartboostmobile.bintray.com/Chartboost"
        //}
        ....
    }  
}
```

برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به فایل AndroidManifest.xml پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/) تست نمایید.

```xml
<uses-sdk tools:overrideLibrary="com.unity3d.ads" />
```