## تاریخچه‌ی انتشارات


### v2.1.7
- [بروزرسانی لایبرری اندروید یلوادوایز به نسخه‌ی 2.1.7](https://docs.irancell.ir/plus-sdk/android/main/#v217---20220328) 
- پشتیبانی از irancell.ir **4.7.3**
- پشتیبانی از Mintegral **15.6.11**
- رفع مشکل نیتیو بنر ادموب 
- بروزرسانی TargetSDK به 31
- بهبود خطای درخواست تبلیغ 
  برای استفاده از این امکان
  `Yelloadwise.SetDebugMode(3)`
  را بعد از initialize فراخوانی نمایید
- رفع خطای نتورک در اندرویدهای قدیمی

### v2.1.4
- اضافه شدن امکان فرستادن چندین درخواست به صورت همزمان
- رفع مشکل کالبک `OnRewarded`
- اضافه شدن `zoneId` به کالبک های `OnResponse` و `onRewarded` و `OnOpened` و `OnClosed`
  ```vb
  'before:
  Yelloadwise_OnRewarded(responseId as String)
  Yelloadwise_OnResponse(responseId as String)
  Yelloadwise_OnOpened(responseId as String)
  Yelloadwise_OnClosed(responseId as String)
  
  'after:
  Yelloadwise_OnRewarded(zoneId as String, responseId as String)
  Yelloadwise_OnResponse(zoneId as String, responseId as String)
  Yelloadwise_OnOpened(zoneId as String, responseId as String)
  Yelloadwise_OnClosed(zoneId as String, responseId as String)
  ```


### v2.1.3
- پیاده‌سازی متدهای پایه‌ی اندروید
- استفاده از Yelloadwise 2.1.3
