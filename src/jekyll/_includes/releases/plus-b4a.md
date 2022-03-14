## تاریخچه‌ی انتشارات

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
