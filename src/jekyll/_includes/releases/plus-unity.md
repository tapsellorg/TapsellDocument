## تغییرات نسخه‌ها:

### v2.2.6 - 2023/04/09

- به روزرسانی کتابخانه تپسل به نسخه `4.9.0`
- اضافه کردن پشتیبانی از UMP برای مدیریت کردن نحوه جمع‌اوری داده کاربر در ادموب جهت رفع مشکل گوگل پلی
- اضافه کردن چند رول پروگارد [#85](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/85)
- بروزرسانی `Admob` به `22.6.0`
- به‌رو‌ز‌رسانی `AppLovin` به نسخه `12.4.0`
- به‌رو‌ز‌رسانی `Mintegral` به نسخه `16.6.71`
- رفع یک باگ مربوط به حذف شدن کلاس های `GDPR` در زمان اجرای `SDK`
- حذف شبکه تبلیغاتی `AdColony` به دلیل منسوخ شدن

### v2.2.4 - 2023/01/07

- به‌روزرسانی کتابخانه تپسل به `4.8.8`
- افزودن پشتیبانی از `Gradle 8` و `R8 Full mode`. مشاهده در
  گیتهاب [#75](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/75).
- رفع مشکل فراخوانی نشدن کالبک نتیجه درخواست تبلیغ در تبلیغات نیتیو بنری به دلیل وقوع خطا در زمان درخواست چند تبلیغ به
  صورت همزمان. لاگ
  خطا: `Error Unity ArgumentNullException: Value cannot be null. TapsellPlusSDK.TapsellPlus.CallIfAvailable[T] (System.Collections.Generic.IDictionary'2[TKey,TValue] pool, System.String key, T input)`
- رفع مشکل سرو تبلیغ در تبلیغات نیتیو بنری
- رفع یک مشکل کرش مربوط به `OkHttp` در اندروید ۴
- رفع کرش در زمان استفاده از GDPR با خطای `java.lang.SecurityException: Not allowed to access cell info` . لینک های مرتبط: [Link1](https://stackoverflow.com/a/63246124/8291919), [Link2](https://developer.android.com/reference/android/telephony/TelephonyManager#getAllCellInfo())
- رفع کرش در لاگر در زمان پرینت کردن لاگ خطا
- رفع مشکلات `GDPR` در کتابخانه تپسل

### v2.2.1 - 2023/09/02

- رفع مشکل ارور کامپایل در یونیتی ادیتور نسخه‌ی ۲۰۲۰ به قبل

### v2.2.0 - 2023/06/23

- رفع مشکل Google Play Policy Error مربوط به جمع‌آوری اطلاعات اپ‌های نصب شده کاربر.
  باگ [68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68)
- اضافه شدن `UI` جدید برای دیالوگ بازگشت در تبلیغات ویدیویی

  <img width="350" src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/da643aec-1cc5-4699-81f6-1bde4226f6bc"  alt='New Dialog UI'/>
- اضافه کردن پشتیبانی از یونیتی ادیتور نسخه ۲۰۲۰ به قبل
- به‌روز‌رسانی کتابخانه اندروید تپسل به نسخه `2.2.0`
- به‌رو‌ز‌رسانی Google Mobile Ads به نسخه `8.3.0` و نسخه اندروید `22.1.0`
- رفع تعدادی از `Memory Leak` های گزارش شده
- رفع تعدادی از مشکلات مربوط به `Proguard`

### v2.1.8 - 2022/12/07

* اضافه کردن کتابخانه جدید یونیتی تپسل پلاس جهت یکپارچه سازی روش های Gradle و Resolver برای پیاده‌سازی پکیج تپسل
  - برای اطلاعات بیشتر به [لینک دانلود کتابخانه](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin/releases)
    یا [آدرس ریپازیتوری در گیتهاب](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin) مراجعه نمایید
* سازگاری با پکیج GoogleMobileAds-7.3.1 و پکیج GoogleMobileAds-native و تغییرات اضافه شده در GoogleMobileAds-7.0 به بعد
  - برای مشاهده تغییرات در پیاده سازی تبلیغات Native در GoogleMobileAds-7.0 به بعد، به
    این [لینک](https://developers.google.com/admob/unity/native) مراجعه نمایید.
* رفع مشکل گزارش شده در گیتهاب [#9](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues/9)

### v2.1.7 - 2022/04/04

* [بروزرسانی لایبرری اندروید تپسل پلاس به نسخه‌ی ۲.۱.۷](https://docs.tapsell.ir/plus-sdk/android/main/#v217---20220328)
* رفع مشکل `SSLException` بر روی اندروید های ۴.۴ به پایین
* بروزرسانی لایبرری ادموب به نسخه ۲۰.۶.۰ و AppSetId به
  ۱۶.۰.۲ [#41](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/41))

### v2.1.6 - 2022/01/12

* پشتیبانی از Tapsell **4.7.4**
* رفع مشکل نیتیو بنر AdMob
* بروزرسانی TargetSDK به 31
* بهبود خطای درخواست تبلیغ  
  برای استفاده از این امکان
  `TapsellPlus.setDebugMode(Log.DEBUG)`
  را بعد از initialize فراخوانی نمایید

* پشتیبانی از Mintegral **15.6.11**
  - برای مشاهده‌ی جزئیات به بخش [شبکه‌های تبلیغاتی](/plus-sdk/android/add-adnetworks/index.html) مراجعه نمایید

  * امکان نمایش دیالوگ GDPR در هر بازه‌ای توسط دولوپر

  - اضافه‌شدن متد `TapsellPlus.showGDPRDialog(activity)` برای نمایش دیالوگ
* پشتیبانی از AppLovin **10.3.4**
* پشتیبانی از UnityAds **3.7.5**
* پشتیبانی از AdMob **20.4.0**
* پشتیبانی از AdColony **4.6.5**

### v2.1.3 - 2021/07/21

* [استفاده از نسخه‌ی ۲.۱.۳ تپسل پلاس](/plus-sdk/android/main/#v213---20210721)
* اضافه‌شدن بنر استاندارد به AdColony
* اضافه‌شدن بنر آنی به Chartboost
* پشتیبانی از AdMob نسخه‌ی 20.2.0

> بروزرسانی ادموب نیاز به تغییراتی در پیاده‌سازی دارد. برای اطلاعات بیشتر به
> بخش [اضافه‌کردن شبکه‌های تبلیغاتی](/plus-sdk/unity/add-adnetworks/index.html) مراجعه کنید

* پشتیبانی از chartboost **8.2.1**
* پشتیبانی از AppLovin **10.3.1**
* پشتیبانی از UnityAds **3.7.4**

### v2.1.2 - 2021/06/08

> **هشدار** از این نسخه به بعد، شماره‌ی ورژن پلاگین یونیتی تپسل‌پلاس مطابق با شماره‌ی ورژن SDK اندروید تپسل‌پلاس خواهد
> بود. بنابراین نسخه‌ی ۲.۱.۲ فعلی از نسخه‌ی ۲.۵ قبلی جدیدتر است.

* [استفاده از نسخه‌ی ۲.۱.۲ تپسل پلاس](https://docs.tapsell.ir/plus-sdk/android/main/#v212---20210607)
* تغییر نام و پارامترهای ورودی و خروجی در متدهای درخواست و نمایش تبلیغ (مستندات مربوط به هر نوع تبلیغ مطالعه شود)
* اضافه شدن AdIcon ادموب در تبلیغات همسان
* پشتیبانی از اندروید ۱۱
* پشتیبانی از بنر استاندارد و تبلیغ آنی در UnityAds
* رفع مشکل کلیک روی تبلیغات همسان

### v2.5 - 2020/12/07

* استفاده از نسخه 1.2.2 SDK تپسل پلاس

### v2.4 - 2020/9/22

* استفاده از نسخه 1.2.1 SDK تپسل پلاس
* افزودن قابلیت نمایش تبلیغ همسان AdMob
* تغییر در نحوه‌ی پیاده‌سازی دریافت کلیک در تبلیغات همسان

### v2.3 - 2020/8/31

* استفاده از نسخه 1.1.3 SDK تپسل پلاس

### v1.1.1 - 2020/1/21

* رفع مشکل user-agent
* استفاده از نسخه 4.4.1 تپسل
* رفع مشکل error callback
* اضافه کردن کنترل gdpr

### v1.1.0 - 2020/1/12

* بهبود کار با تردها
* استفاده از نسخه 4.4.0 تپسل
* استفاده از consumer proguard

### v1.0.12 - 2019/12/02

* ConsentDialog برطرف کردن مشکل
* برطرف کردن خطاهای گزارش شده
