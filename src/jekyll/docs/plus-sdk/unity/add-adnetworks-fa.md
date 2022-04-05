---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/unity/add-adnetworks/index.html
toc: true
---

سایر شبکه‌های تبلیغاتی رو می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر شبکه‌ی تبلیغاتی می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.



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
> سپس شناسه‌ی مورد نظر را با فرمت زیر در فایل `Assets/Plugins/Android/AndroidManifest.xml` قرار دهید:
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
>
>         <!-- Rest of the manifest content -->
> 
>         <!-- Sample AdMob app ID: ca-app-pub-3940256099942544~3347511713 -->
>         <meta-data
>             android:name="com.google.android.gms.ads.APPLICATION_ID"
>             android:value="YOUR_APP_ID"/>
>     </application>
> </manifest>
> ```




## تنظیمات Gradle
در قسمت `dependencies` در آدرس `Assets\Plugins\Android\mainTemplate.gradle` شبکه‌های تبلیغاتی که مایل هستید را مطابق الگوی زیر اضافه کنید.

```gradle
dependencies {
    .......
    // for AdMob
    implementation 'com.google.android.gms:play-services-ads:20.6.0'
    // for UnityAds
    implementation 'com.unity3d.ads:unity-ads:3.7.5'
    // for Chartboost
    implementation 'com.chartboost:chartboost-sdk:8.2.1'
    // for AdColony
    implementation 'com.adcolony:sdk:4.6.5'
    // for Applovin
    implementation 'com.applovin:applovin-sdk:10.3.4'



    // For Mintegral - NOTE: Add custom repository (explained after this)
    implementation "com.mbridge.msdk.oversea:videojs:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbbanner:15.6.11"
    implementation "com.mbridge.msdk.oversea:mbjscommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:playercommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:reward:15.6.11"
    implementation "com.mbridge.msdk.oversea:videocommon:15.6.11"
    implementation "com.mbridge.msdk.oversea:same:15.6.11"
    implementation "com.mbridge.msdk.oversea:interstitialvideo:15.6.11"
    .....
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

## تنظیمات Resolver
هر شبکه‌ی تبلیغاتی که مایل هستید را مطابق الگوی زیر در آدرس `Assets\TapsellPlus\Editor\TapsellPlusDependencies.xml` قرار دهید.

```xml
<dependencies>
  <androidPackages>
     
        <!-- AdMob -->
        <androidPackage spec="com.google.android.gms:play-services-ads:20.6.0"/>

        <!-- UnityAds -->
        <androidPackage spec="com.unity3d.ads:unity-ads:3.7.5"/>

        <!-- ChartBoost -->
        <androidPackage spec="com.chartboost:chartboost-sdk:8.2.1"/>

        <!-- AdColony -->
        <androidPackage spec="com.adcolony:sdk:4.6.5"/>

        <!-- AppLovin -->
        <androidPackage spec="com.applovin:applovin-sdk:10.3.4"/>

        <!-- Mintegral - make sure you uncomment the custom repository down below -->
        <androidPackage spec="com.mbridge.msdk.oversea:videojs:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:mbbanner:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:mbjscommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:playercommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:reward:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:videocommon:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:same:15.6.11"/>
        <androidPackage spec="com.mbridge.msdk.oversea:interstitialvideo:15.6.11"/>

        <repositories>
            <!-- Add this for Mintegral usage. NOTE: Repository will result in 403. Make sure you're using VPN or Proxy to circumvent it -->
            <repository>https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea</repository>
        </repositories>
  </androidPackages>
</dependencies>
```

برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به فایل AndroidManifest.xml پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/android/adnetworks-test/) تست نمایید.

```xml
<uses-sdk tools:overrideLibrary="com.unity3d.ads" />
```
