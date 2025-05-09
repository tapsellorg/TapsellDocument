## تغییرات نسخه‌ها:

### 2025/02/23 [2.3.2]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.8`
- رفع مشکل تداخل با کتابخانه‌های `InAppBilling`

### 2025/02/05 [2.3.1]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.7`

### 2024/11/20 [2.3.0]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.5`
- رفع کرش در زمان ریست شدن `MediaPlayer` پیش فرض اندروید در تبلیغات ویدیویی

### 2024/11/13 [2.2.9]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.4`
- پشتیبانی از کلیکبل کردن تمام المان های تبلیغ ویدیوی همسان

### 2024/09/11 [2.2.8]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.3`
- بروزرسانی targetSdk به نسخه اندروید `14`
- اضافه شدن رول های پروگارد `R8`

### 2024/08/12 [2.2.7]

- بروزرسانی کتابخانه تپسل به نسخه `4.9.1`
- حذف دیالوگ GDPR تپسل

#### Flutter
- رفع کرش در زمان ارسال درخواست های همزمان در تبلیغات همسان. [#27](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/27)

### 2024/04/16 [2.2.6]

- رفع یک باگ مربوط به حذف شدن کلاس های `GDPR` در زمان اجرای `SDK`

### 2024/04/09 [2.2.5]
- بروزرسانی کتابخانه تپسل به `4.9.0`
- اضافه کردن پشتیبانی از UMP برای مدیریت کردن نحوه جمع‌اوری داده کاربر در ادموب جهت رفع مشکل گوگل پلی
- اضافه کردن چند رول پروگارد [#85](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/85)
- بروزرسانی `Admob` به `22.6.0`
- به‌روزرسانی کتابخانه `IMA` پری‌رول به نسخه `3.33.0`
- به‌رو‌ز‌رسانی `UnityAds` به نسخه `4.9.2`
- به‌رو‌ز‌رسانی `AppLovin` به نسخه `12.4.0`
- به‌رو‌ز‌رسانی `Mintegral` به نسخه `16.6.71`
- حذف شبکه تبلیغاتی `Vungle` به دلیل وجود آسیب پذیری‌های امنیتی گوگل پلی
- حذف شبکه تبلیغاتی `AdColony` به دلیل منسوخ شدن

### 2024/01/07 [2.2.4]
- به‌روزرسانی کتابخانه تپسل به `4.8.8`
- افزودن پشتیبانی از `Gradle 8` و `R8 Full mode`. مشاهده در گیتهاب [#75](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/75). 
-   استفاده از `Media3 ExoPlayer` به جای `Google ExoPlayer` در تبلیغات IMA PreRoll
- رفع یک مشکل کرش مربوط به `OkHttp` در اندروید ۴
- رفع کرش در لاگر در زمان پرینت کردن لاگ خطا
- رفع مشکلات `GDPR` در کتابخانه تپسل

### 2023/09/27 [2.2.3]
- پشتیبانی از **Tapsell** `4.8.4` 
- به‌روزرسانی کتابخانه `IMA` پری‌رول به نسخه `3.31.0`
- به‌روزرسانی کتابخانه `ima-extension` به نسخه `2.19.1` با توجه به [کامیت‌های]([commits](https://github.com/google/ExoPlayer/commit/b8e1a0b4755efd42a0d45fb0e90a6b3304e9544b)) ریپوزیتوی
- به‌روزرسانی کتابخانه `ExoPlayer` به نسخه `2.19.1`
- رفع کرش در زمان استفاده از GDPR با خطای `java.lang.SecurityException: Not allowed to access cell info` . لینک های مرتبط: [Link1](https://stackoverflow.com/a/63246124/8291919), [Link2](https://developer.android.com/reference/android/telephony/TelephonyManager#getAllCellInfo())

#### Flutter
- رفع کرش فلاتر در زمان درخواست بنر استاندارد. لینک های گیتهاب: [#15](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/15), [#14](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/14)

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
