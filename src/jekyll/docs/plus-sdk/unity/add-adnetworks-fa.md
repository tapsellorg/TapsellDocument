---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی رو می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر شبکه‌ی تبلیغاتی می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

## تنظیمات Gradle
در قسمت `dependencies` در آدرس `Assets\Plugins\Android\mainTemplate.gradle` شبکه‌های تبلیغاتی که مایل هستید را مطابق الگوی زیر اضافه کنید.

```gradle
dependencies {
    .......
    // for AdMob
    implementation 'com.google.android.gms:play-services-ads:19.8.0'
    // for UnityAds
    implementation 'com.unity3d.ads:unity-ads:3.7.1'
    // for Chartboost
    implementation 'com.chartboost:chartboost-sdk:8.2.0'
    // for AdColony
    implementation 'com.adcolony:sdk:4.5.0'
    // for Applovin
    implementation 'com.applovin:applovin-sdk:9.15.3'
    .....
}
```

## تنظیمات Resolver
هر شبکه‌ی تبلیغاتی که مایل هستید را مطابق الگوی زیر در آدرس `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml` قرار دهید.

```xml
<dependencies>
  <androidPackages>

    // for AdMob
    <androidPackage spec="com.google.android.gms:play-services-ads:19.8.0"/>
    // for UnityAds
    <androidPackage spec="com.unity3d.ads:unity-ads:3.7.1"/>
    // for Chartboost
    <androidPackage spec="com.chartboost:chartboost-sdk:8.2.0"/>
    // for AdColony
    <androidPackage spec="com.adcolony:sdk:4.5.0"/>
    // for Applovin
    <androidPackage spec="com.applovin:applovin-sdk:9.15.3"/>
    ...
  </androidPackages>
</dependencies>
```

برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به فایل AndroidManifest.xml پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/) تست نمایید.

```xml
<uses-sdk tools:overrideLibrary="com.unity3d.ads" />
```