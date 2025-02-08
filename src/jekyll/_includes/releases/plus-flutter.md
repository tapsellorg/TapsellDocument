## تغییرات نسخه‌ها:

([جزئیات بیشتر تاریخچه](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/blob/master/CHANGELOG.md))

## 2.3.1 - 2025/08/02

- بروزرسانی کتابخانه تپسل به نسخه `4.9.7`
- بروزرسانی `targetSdk` به نسخه اندروید `14`

## 2.2.7 - 2024/08/12

- بروزرسانی کتابخانه تپسل به نسخه `4.9.1`
- حذف دیالوگ GDPR تپسل
- رفع کرش در زمان ارسال درخواست های همزمان در تبلیغات همسان. [#27](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/27)
- رفع یک باگ مربوط به حذف شدن کلاس های `GDPR` در زمان اجرای `SDK`
- اضافه کردن پشتیبانی از UMP برای مدیریت کردن نحوه جمع‌اوری داده کاربر در ادموب جهت رفع مشکل گوگل پلی
- بروزرسانی `Admob` به `22.6.0`
- به‌رو‌ز‌رسانی `UnityAds` به نسخه `4.9.2`
- به‌رو‌ز‌رسانی `AppLovin` به نسخه `12.4.0`
- به‌رو‌ز‌رسانی `Mintegral` به نسخه `16.6.71`
- حذف شبکه تبلیغاتی `Vungle` به دلیل وجود آسیب پذیری‌های امنیتی گوگل پلی
- حذف شبکه تبلیغاتی `AdColony` به دلیل منسوخ شدن

## 2.2.4 - 2024/02/05
- به‌روزرسانی کتابخانه تپسل به `4.8.8`
- افزودن پشتیبانی از `Gradle 8` و `R8 Full mode`. مشاهده در گیتهاب [#75](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/75).
- رفع یک مشکل کرش مربوط به `OkHttp` در اندروید ۴
- رفع مشکل سرو تبلیغ در تبلیغات نیتیو بنری
- رفع کرش در لاگر در زمان پرینت کردن لاگ خطا
- رفع مشکلات `GDPR` در کتابخانه تپسل

## 2.2.3 - 2023/09/27
- پشتیبانی از **Tapsell** `4.8.4`
- رفع کرش نیتیو اندروید در زمان استفاده از `GDPR` با خطای `java.lang.SecurityException: Not allowed to access cell info` . لینک های مرتبط: [Link1](https://stackoverflow.com/a/63246124/8291919), [Link2](https://developer.android.com/reference/android/telephony/TelephonyManager#getAllCellInfo())
- رفع کرش فلاتر در زمان درخواست بنر استاندارد. لینک های گیتهاب: [#15](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/15), [#14](https://github.com/tapsellorg/TapsellPlusSDK-FlutterPlugin/issues/14)

## 2.2.0 - 2023/06/27
- رفع مشکل Google Play Policy Error مربوط به جمع‌آوری اطلاعات اپ‌های نصب شده کاربر. باگ [68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68)
- اضافه شدن `UI` جدید برای دیالوگ بازگشت در تبلیغات ویدیویی

  <img width="350" src="https://github.com/tapsellorg/TapsellDocument/assets/38072572/da643aec-1cc5-4699-81f6-1bde4226f6bc"  alt='New Dialog UI'/>
- به‌روز‌رسانی کتابخانه اندروید تپسل به نسخه `2.2.0`
- به‌روز‌رسانی نسخه‌ی کاتلین به `1.8.20`
- به‌رو‌ز‌رسانی `google_mobile_ads` به نسخه `3.0.0` و نسخه اندروید `22.0.0`
- رفع تعدادی از `Memory Leak` های گزارش شده
- رفع تعدادی از مشکلات مربوط به `Proguard`

## 2.1.8 - 2023/06/17
- اضافه شدن Admob Native Banner
- پشتیبانی از پکیج `google_mobile_ads` نسخه `1.3.0`

#### Android
- [بروزرسانی لایبرری اندروید تپسل پلاس به نسخه‌ی ۲.۱.۸](https://docs.tapsell.ir/plus-sdk/android/main/#v218---20221121)
- افزودن پیکربندی قابل تنظیم برای فعال/غیرفعال‌سازی دکمه بازگشت بنر انتهایی در تبلیغات ویدیویی
- افزودن پیکربندی قابل تنظیم جهت شخصی سازی دیالوگ بازگشت در تبلیغات ویدیویی
- پشتیبانی از UnityAds نسخه 4.3.0 به بالا و رفع مشکلات در نمایش تبلیغات ویدیویی در UnityAds
- بروزرسانی TargetSDK به 33
- بروزرسانی minSdkVersion به 19

## 2.1.7 - 2022/04/04
- بروزرسانی Admob به `20.6.0`
- رفع خطای نتورک در اندرویدهای قدیمی
- [بروزرسانی لایبرری اندروید تپسل پلاس به نسخه‌ی 2.1.7](https://docs.tapsell.ir/plus-sdk/android/main/#v217---20220328) 

## 2.1.6 - 2022/02/07
- رفع مشکل نیتیو بنر AdMob
- بروزرسانی TargetSDK به 31
- بهبود خطای درخواست تبلیغ  
  برای استفاده از این امکان
  `TapsellPlus.instance.setDebugMode(Log.DEBUG)`
  را بعد از initialize فراخوانی نمایید

#### Android
- [بروزرسانی لایبرری اندروید تپسل پلاس به نسخه‌ی ۲.۱.۶](https://docs.tapsell.ir/plus-sdk/android/main/#v216---20220111)
- [بروزرسانی لایبرری اندروید تپسل به نسخه‌ی ۴.۷.۴](https://docs.tapsell.ir/tapsell-sdk/android/main/#474---20220110)

## 2.1.4
- [استفاده از نسخه‌ی ۲.۱.۳ تپسل پلاس](https://docs.tapsell.ir/plus-sdk/android/main/#v213---20210721)
- [استفاده از نسخه‌ی ۴.۷.۲ تپسل](https://docs.tapsell.ir/tapsell-sdk/android/main/#472---20210720)
- رفع مشکل Null بودن اکتیویتی‌ها

## 2.1.3
- رفع مشکل نمایش تبلیغ نیتیو
- اضافه شدن امکان margin به بنر استاندارد
- بروزرسانی اندروید به `2.1.3-rc01`
- اضافه شدن متد `setGDPRConsent`

### 2.1.2 (7 Jun, 2021)
- بازنویسی پلاگین
- پشتیبانی از **Null safety**
- [استفاده از نسخه‌ی ۲.۱.۲ تپسل پلاس](https://docs.tapsell.ir/plus-sdk/android/main/#v212---20210607)
- [استفاده از نسخه‌ی ۴.۷.۱ تپسل](https://docs.tapsell.ir/tapsell-sdk/android/main/#v471---20210602)

### 2.0.0-nullsafety.2
- اضافه‌کردن **Null safety**

### 1.0.0
**این نسخه منسوخ‌شده و دیگر پشتیبانی نخواهد شد**    
 برای استفاده از تپسل پلاس در فلاتر از نسخه‌های جدیدتر استفاده کنید

- نسخه‌ی اولیه‌ی فلاتر
