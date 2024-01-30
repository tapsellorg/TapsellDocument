---
layout: classic-docs title: سایر شبکه‌های تبلیغاتی lang: fa permalink: /plus-sdk/unity/add-adnetworks/index.html toc:
true
---

سایر شبکه‌های تبلیغاتی رو می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به
درستی پیاده شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر شبکه‌ی تبلیغاتی می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

## افزودن شبکه های تبلیغاتی در تپسل پلاس

### اضافه کردن ادموب

۱. ابتدا `unitypackage` گوگل ادموب را از [این لینک](https://github.com/googleads/googleads-mobile-unity/releases) دریافت
نمایید.
> نکته: آخرین نسخه تست شده ادموب نسخه `8.3.0` می‌باشد.

۲. سپس `unitypackage` مربوط به تبلیغات نیتیو ادموب را
از [این لینک](https://dl.google.com/googleadmobadssdk/GoogleMobileAds-native.unitypackage) دریافت نمایید.

۳. سپس اپ آیدی گوگل خود را از مسیر `Assets/GoogleMobileAds/Settings`، مطابق عکس زیر اضافه کنید
![GoogleAppID](https://user-images.githubusercontent.com/38072572/206126452-e7235200-510a-42cb-8565-0bfa3beb378f.png)

۴. پروژه خود را بیلد و سپس اجرا کنید

### اضافه کردن سایر شبکه های تبلیغاتی

فایل `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml` را باز کنید و ادنتورک مد نظر خود را مطابق زیر اضافه کنید

 ```xml

<dependencies>
  <androidPackages>

    <!-- AdMob -->
    <androidPackage spec="com.google.android.gms:play-services-ads:22.1.0"/>

    <!-- UnityAds -->
    <androidPackage spec="com.unity3d.ads:unity-ads:4.6.1"/>

    <!-- ChartBoost -->
    <androidPackage spec="com.chartboost:chartboost-sdk:8.2.1"/>

    <!-- AdColony -->
    <androidPackage spec="com.adcolony:sdk:4.6.5"/>

    <!-- AppLovin -->
    <androidPackage spec="com.applovin:applovin-sdk:11.8.2"/>

    <!-- Mintegral - make sure you uncomment the custom repository down below -->
    <androidPackage spec="com.mbridge.msdk.oversea:videojs:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:mbbanner:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:mbjscommon:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:playercommon:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:reward:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:videocommon:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:same:16.4.41"/>
    <androidPackage spec="com.mbridge.msdk.oversea:interstitialvideo:16.4.41"/>

    <repositories>
      <!-- Add this for Mintegral usage. NOTE: Repository will result in 403. Make sure you're using VPN or Proxy to circumvent it -->
      <repository>https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea</repository>
    </repositories>
  </androidPackages>
</dependencies>
```

برای استفاده از شبکه‌ی تبلیغاتی `Unity Ads` می‌بایست `minSDK` اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به فایل
`AndroidManifest.xml` پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل
هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که
نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را
با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/) تست نمایید.

```xml

<uses-sdk tools:overrideLibrary="com.unity3d.ads"/>
```

## نسخه‌های ادموب

| **نسخه‌ی تپسل‌پلاس** | **نسخه‌ی ادموب** | **تاریخ اتمام پشتیبانی** | **تاریخ اتمام دریافت تبلیغ** |
|:--------------------:|:----------------:|:------------------------:|:----------------------------:|
|        2.2.0         |      22.1.0      |         Q1 2025          |           Q2 2026            |
|     2.1.7, 2.1.8     |      20.6.0      |         Q1 2023          |           Q2 2024            |
| 2.1.4, 2.1.5, 2.1.6  |      20.4.0      |         Q1 2023          |           Q2 2024            |
|        2.1.3         |      20.2.0      |         Q1 2023          |           Q2 2024            |
|     2.1.0, 2.1.2     |      19.8.0      |    September 30, 2022    |           Q2 2023            |
|        1.2.6         |      19.6.0      |    September 30, 2022    |           Q2 2023            |

همچنین می‌توانید اطلاعات بیش‌تر در مورد تاریخ اتمام پشتیبانی و یا اتمام دریافت تبلیغ از شبکه‌ی تبلیغاتی ادموب را
در [این لینک](https://developers.google.com/admob/android/deprecation) مشاهده نمایید.

