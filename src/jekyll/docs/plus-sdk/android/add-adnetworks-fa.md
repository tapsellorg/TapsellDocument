---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/android/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی را می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده‌سازی شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.

> **نکته** برای استفاده از **AdMob**  
> 
> برای استفاده از ادنتورک **Google AdMob SDK** (نسخه‌ی 20.0.0 به بعد) بایستی App ID آنرا در مانیفست اپلیکیشن قرار دهید.  
> لازم به ذکر است در صورت عدم وجود این تگ در مانیفست خطای `The Google Mobile Ads SDK was initialized incorrectly.` رخ خواهد داد
>
> برای اضافه کردن App ID ابتدا از یکی از راه‌های زیر این شناسه را از تپسل دریافت کنید (پیش از دریافت شناسه، شرایط فعال‌سازی شبکه‌های تبلیغاتی خارجی را در [این لینک](https://tapsell.ir/tapsellplus/) مطالعه نمایید):
> - ارسال ایمیل به `publishers [at] tapsell.ir`
> - ارسال تیکت به [دپارتمان ناشرین](https://tapsell.deskpro.com/new-ticket)
> - تماس با شماره تلفن **5-88206893** (داخلی ۳ - ناشرین)
> 
> سپس شناسه‌ی مورد نظر را با فرمت زیر در فایل `AndroidManifest.xml` قرار دهید:
> 
> ```xml
> <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="ca-app-pub-x~y"/>
> ```
> 
> به جای `ca-app-pub-x~y` شناسه‌ی خود را قرار دهید
> 
> 
> که در نهایت این تگ در فرمت زیر در مانیفست قرار خواهد گرفت:
> 
> ```xml
> <manifest>
>     <application>
>         <!-- Sample AdMob app ID: ca-app-pub-3940256099942544~3347511713 -->
>         <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="YOUR_APP_ID"/>
>     </application>
> </manifest>
> ```


## تنظیمات Gradle
در قسمت `dependencies` فایل build.gradle شبکه‌های تبلغاتی که مایل هستید را مطابق زیر اضافه کنید.

```groovy
dependencies {

    //.......

    //for adMob
    // For 20.0.0 and later <meta-data> tag is needed
    // For lower versions meta-data tag is not needed
    implementation 'com.google.android.gms:play-services-ads:20.2.0'

    //for unityAds
    implementation 'com.unity3d.ads:unity-ads:3.7.4'

    //for chartboost
    implementation 'com.chartboost:chartboost-sdk:8.2.1'
    implementation ("com.google.android.gms:play-services-base:17.6.0"){
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
    implementation 'com.applovin:applovin-sdk:10.3.1'


    // For Mintegral - NOTE: Add custom repository (explained after this)
    implementation "com.mbridge.msdk.oversea:videojs:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbbanner:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbjscommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:playercommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:reward:15.6.11"
    implementation "com.mbridge.msdk.oversea:videocommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:same:15.6.11"
    implementation "com.mbridge.msdk.oversea:interstitialvideo:15.6.11"
}
```

همچنین بسته به ادنتورک اضافه شده بایستی repository مورد استفاده برای دانلود آنهایی که از mavenCentral استفاده نمی‌کنند، نیز اضافه شود:

```gradle
allprojects {  
    repositories {
        //....

        // TapsellPlus, Tapsell, ...
        mavenCentral()

        // Old libraries
        jcenter()

        // Mintegral - This will lead to 403 even with Shecan and FOD. Needs a strong VPN protocol
        maven {
            url  "https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea"
        }
        
    }  
}
```


> برای اضافه‌کردن **مینتگرال** نیاز به VPN یا پراکسی با پروتکل مناسب مانند Kerio یا OpenVPN دارید. در حال حاضر این سرورها توسط شکن یا FOD پشتیبانی نمی‌شوند
{:data-title="نکته برای استفاده از مینتگرال" data-color="red"}


برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به فایل AndroidManifest.xml پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/) تست نمایید.

```xml
<uses-sdk tools:overrideLibrary="com.unity3d.ads" />
```