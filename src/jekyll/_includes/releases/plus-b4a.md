## تاریخچه‌ی انتشارات


### v2.2.0 - 2023/08/20
- رفع مشکل Google Play Policy Error مربوط به جمع‌آوری اطلاعات اپ‌های نصب شده کاربر. باگ [68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68)
- اضافه شدن `UI` جدید برای دیالوگ بازگشت در تبلیغات ویدیویی
- اضافه کردن پشتیبانی از B4A نسخه نسخه `12.5`
- به‌روز‌رسانی کتابخانه اندروید تپسل به نسخه `2.2.0`
- به‌رو‌ز‌رسانی Google Mobile Ads به نسخه `8.3.0` و نسخه اندروید `21.5.0`
- بروزرسانی `TargetSDK` به `33`
- افزایش `minSdkVersion` به `19`
- رفع تعدادی از `Memory Leak` های گزارش شده
- رفع تعدادی از مشکلات مربوط به `Proguard`


### v2.1.7
- [بروزرسانی لایبرری اندروید تپسل پلاس به نسخه‌ی 2.1.7](https://docs.tapsell.ir/plus-sdk/android/main/#v217---20220328) 
- پشتیبانی از Tapsell **4.7.3**
- پشتیبانی از Mintegral **15.6.11**
- رفع مشکل نیتیو بنر ادموب 
- بروزرسانی TargetSDK به 31
- بهبود خطای درخواست تبلیغ 
  برای استفاده از این امکان
  `tapsellPlus.SetDebugMode(3)`
  را بعد از initialize فراخوانی نمایید
- رفع خطای نتورک در اندرویدهای قدیمی

### v2.1.4
- اضافه شدن امکان فرستادن چندین درخواست به صورت همزمان
- رفع مشکل کالبک `OnRewarded`
- اضافه شدن `zoneId` به کالبک های `OnResponse` و `onRewarded` و `OnOpened` و `OnClosed`
  ```vb
  'before:
  TapsellPlus_OnRewarded(responseId as String)
  TapsellPlus_OnResponse(responseId as String)
  TapsellPlus_OnOpened(responseId as String)
  TapsellPlus_OnClosed(responseId as String)
  
  'after:
  TapsellPlus_OnRewarded(zoneId as String, responseId as String)
  TapsellPlus_OnResponse(zoneId as String, responseId as String)
  TapsellPlus_OnOpened(zoneId as String, responseId as String)
  TapsellPlus_OnClosed(zoneId as String, responseId as String)
  ```


### v2.1.3
- پیاده‌سازی متدهای پایه‌ی اندروید
- استفاده از TapsellPlus 2.1.3
