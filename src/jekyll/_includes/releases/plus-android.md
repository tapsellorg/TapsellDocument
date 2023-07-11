## تغییرات نسخه‌ها:

### 2023/06/21 [2.2.0]
- رفع مشکل Google Play Policy Error مربوط به جمع‌آوری اطلاعات اپ‌های نصب شده کاربر. باگ [68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68) 

### 2023/06/20 [2.1.9] 
- امکان اجباری یا اختیاری شدن نمایش `Companion Banner` در تبلیغات Pre-Roll
- رفع مشکل فعال شدن چند باره ایونت ها در کالبک `OnAdEvent` در تبلیغات Pre-Roll

### 2023/06/14 [2.1.9-rc04] 
- اضافه شدن تبلیغات `Pre-Roll` مربوط به `Google IMA` در کتابخانه تپسل پلاس با پشتیبانی از `VideoPlayer` و `ExoPlayer`. [لینک سمپل](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
- اضافه شدن `UI` جدید برای دیالوگ بازگشت در تبلیغات ویدیویی

  <img width="350" src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/da643aec-1cc5-4699-81f6-1bde4226f6bc"  alt='New Dialog UI'/>

- به‌روز‌رسانی کتابخانه تپسل به نسخه `4.7.8-rc03`
- رفع بعضی از `Memory Leak` های گزارش شده توسط کاربران. [لینک گیتهاب](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/58)
- رفع بعضی از مشکلات مربوط به `Proguard`

### 2023/03/29 [2.1.9-rc03] 
- به‌روز‌رسانی `minSdkVersion` به نسخه 19 جهت پشتیبانی از ادموب نسخه `21.5.0`
- رفع مشکل عملکرد اشتباه کلید های دیالوگ بازگشت در تبلیغات ویدیویی
- به‌رو‌ز‌رسانی `Admob` به نسخه `21.5.0`
- به‌رو‌ز‌رسانی `UnityAds` به نسخه `4.6.1`
- به‌رو‌ز‌رسانی `Mintegral` به نسخه `16.3.91`
- به‌رو‌ز‌رسانی `AdColony` به نسخه `4.8.0`
- به‌رو‌ز‌رسانی `AppLovin` به نسخه `11.8.2`

### v2.1.8 - 2022/11/21
- افزودن پیکربندی قابل تنظیم برای فعال/غیرفعال‌سازی دکمه بازگشت بنر انتهایی در تبلیغات ویدیویی
- افزودن پیکربندی قابل تنظیم جهت شخصی سازی دیالوگ بازگشت در تبلیغات ویدیویی
- پشتیبانی از UnityAds نسخه 4.3.0 به بالا و رفع مشکلات در نمایش تبلیغات ویدیویی در UnityAds
- بروزرسانی TargetSDK به 33
#### Flutter
- افزودن امکان نمایش تبلیغات نیتیو بنری ادموب در پلاگین فلاتر. برای اطلاعات بیشتر به مستندات [نیتیو فلاتر](https://docs.tapsell.ir/plus-sdk/flutter/native/) مراجه کنید

### v2.1.7 - 2022/03/28
- بروزرسانی AdMob به `20.6.0` و رفع [#41](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/41)
- Minor bug fixes
- رفع مشکل `SSLException` در اندرویدهای ۴.۴ و ماقبل

### v2.1.6 - 2022/01/11
* پشتیبانی از Tapsell **4.7.4**
* رفع مشکل نیتیو بنر AdMob
* بروزرسانی TargetSDK به 31
* بهبود خطای درخواست تبلیغ  
    برای استفاده از این امکان
    `TapsellPlus.setDebugMode(Log.DEBUG)`
    را بعد از initialize فراخوانی نمایید
    

### v2.1.5 - 2021/11/06
* پشتیبانی از Tapsell **4.7.3**
* پشتیبانی از Mintegral **15.6.11**
    - برای مشاهده‌ی جزئیات به بخش [شبکه‌های تبلیغاتی](/plus-sdk/android/add-adnetworks/index.html) مراجعه نمایید

### v2.1.4 - 2021/11/06
* امکان نمایش دیالوگ GDPR در هر بازه‌ای توسط دولوپر
    - اضافه‌شدن متد `TapsellPlus.showGDPRDialog(activity)` برای نمایش دیالوگ
* پشتیبانی از AppLovin **10.3.4**
* پشتیبانی از UnityAds **3.7.5**
* پشتیبانی از AdMob **20.4.0**
* پشتیبانی از AdColony **4.6.5**
* بهبود و رفع مشکلات جزئی

### v2.1.3 - 2021/07/21
* استفاده از نسخه 4.7.2 تپسل
* اضافه‌شدن قابلیت نمایش تبلیغ [**NativeVideo**](/plus-sdk/android/native-vid/index.html) تپسل
* اضافه شدن قابلیت نمایش **Pre-roll ad**
  - اضافه‌شدن متد `TapsellPlus.getVastTag`
* اضافه‌شدن بنر استاندارد به AdColony
* اضافه‌شدن بنر آنی به Chartboost
* پشتیبانی از AdMob نسخه‌ی 20.2.0  

> بروزرسانی ادموب نیاز به تغییراتی در پیاده‌سازی دارد. برای اطلاعات بیشتر به بخش [اضافه‌کردن شبکه‌های تبلیغاتی](/plus-sdk/android/add-adnetworks/index.html) مراجعه کنید

* پشتیبانی از chartboost **8.2.1**
* پشتیبانی از AppLovin **10.3.1**
* پشتیبانی از UnityAds **3.7.4**


### v2.1.2 - 2021/06/07
* [استفاده از نسخه‌ی ۴.۷.۱ تپسل](https://docs.tapsell.ir/tapsell-sdk/android/main/#v471---20210602)
* رفع برخی مشکلات جزئی
* حذف همه‌ی دسترسی‌ها به جز دسترسی اینترنت
* استفاده از کلاس TapsellPlusAdModel به جای String در آرگومان ورودی کالبک response در درخواست تبلیغ (مستندات مربوط به هر نوع تبلیغ مطالعه شود)

### v2.1.0 - 2021/05/10
* تغییر نام و پارامترهای ورودی و خروجی در متدهای درخواست و نمایش تبلیغ (مستندات مربوط به هر نوع تبلیغ مطالعه شود)
* بهبود عملکرد و رفع برخی مشکلات جزئی
* [حذف دسترسی PHONE_STATE](https://docs.tapsell.ir/plus-sdk/android/initialize/#%D8%AF%D8%B3%D8%AA%D8%B1%D8%B3%DB%8C%D9%87%D8%A7)
* [پشتیبانی از تپسل نسخه‌ی ۴.۷.۰](https://docs.tapsell.ir/tapsell-sdk/android/main/#v470---20210510)
* پشتیبانی از UnityAds نسخه‌ی ۳.۷.۱
* پشتیبانی از AdMob نسخه‌ی ۱۹.۸.۰
* پشتیبانی از Gradle نسخه‌ی ۶.۷.۱
* پشتیبانی از Android Gradle Plugin نسخه‌ی ۴.۲.۰
* پشتیبانی از بنر استاندارد و تبلیغ آنی در UnityAds
* رفع مشکل GDPR در AdMob
* به‌روزرسانی قوانین Proguard
* [تغییر کلاس rootView در تبلیغ همسان به com.google.android.gms.ads.nativead.NativeAdView](https://docs.tapsell.ir/plus-sdk/android/native/#%D8%B3%D8%A7%D8%AE%D8%AA-adholder)
* [تغییر کلاس media view در تبلیغ همسان به ir.tapsell.plus.adNetworks.admob.AdMobMediaView](https://docs.tapsell.ir/plus-sdk/android/native/#%D8%B3%D8%A7%D8%AE%D8%AA-adholder)

### v1.2.6 - 2021/05/04
* [تغییر محل انتشار نسخه‌ها از Bintray به MavenCentral](https://docs.tapsell.ir/plus-sdk/android/initialize/#%D8%AA%D9%86%D8%B8%DB%8C%D9%85%D8%A7%D8%AA-gradle)
* تغییر نسخه‌ی AdColony به ۴.۵.۰
* [نغییر در محل انتشار شبکه‌های تبلیغاتی AdColony و Chartboost به mavenCentral](https://docs.tapsell.ir/plus-sdk/android/add-adnetworks/#%D8%AA%D9%86%D8%B8%DB%8C%D9%85%D8%A7%D8%AA-gradle)

### v1.2.3-rc4 - 2021/1/02
* مطابقت با اندروید 11
* استفاده از نسخه rc5-4.6.3 تپسل
* [تغییر جزئی در استفاده از بنر همسان](https://docs.tapsell.ir/plus-sdk/android/native/#%D8%B3%D8%A7%D8%AE%D8%AA-adholder)

### v1.2.2 - 2020/12/07
* رفع برخی مشکلات مربوط به GDPR
* استفاده از نسخه 4.6.2 تپسل

### v1.2.1 - 2020/11/22
* رفع برخی مشکلات
* استفاده از نسخه 4.6.0 تپسل
* افزودن قابلیت نمایش تبلیغ همسان AdMob

### v1.1.3 - 2020/8/11
* رفع برخی مشکلات
* استفاده از نسخه 4.5.0 تپسل

### v1.1.1 - 2020/1/21
* رفع مشکل user-agent
* استفاده از نسخه 4.4.1 تپسل

### v1.1.0 - 2020/1/12
* بهبود کار با تردها
* استفاده از نسخه 4.4.0 تپسل
* استفاده از consumer proguard

### v1.0.12 - 2019/12/02
* ConsentDialog برطرف کردن مشکل
* برطرف کردن خطاهای گزارش شده
