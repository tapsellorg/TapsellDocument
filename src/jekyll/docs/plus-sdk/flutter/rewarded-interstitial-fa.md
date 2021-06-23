---
layout: classic-docs
title: تبلیغات جایزه‌ای در Flutter
lang: fa
permalink: /plus-sdk/flutter/rewarded/index.html
toc: true # table of contents
---

برای پیاده سازی تبلیغات جایزه‌ای به صورت زیر اقدام کنید


## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

متد مورد نظر یک `Future` برمی‌گرداند که این در درون خود یک
**responseId**
دارد. از این 
responseId
برای نمایش تبلیغ استفاده می‌شود. لذا بایستی آنرا ذخیره کنید.

```dart
final zoneId = "theZoneIdYouHave";
TapsellPlus.instance.requestRewardedVideoAd(zoneId).then((responseId) {
      // SAVE the responseId
    }
);

// Using Async/await

final responseId = await TapsellPlus.instance.requestRewardedVideoAd(zoneId);
```

ورودی تابع `zoneId` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
  
اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است:

| تابع | توضیحات |
| - | - |
| `Future<String>` | در صورتی که تبلیغ بدون مشکل آماده‌ی نمایش شود شناسه‌ی درخواست برمیگردد  |
| `Future.error<Map<String, String>` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |


## نمایش تبلیغ
با اجرای کد زیر میتوانید یک تبلیغ را نمایش بدهید.

```dart
TapsellPlus.instance.showRewardedVideoAd(responseId, onOpened: (map) {
      // Ad opened
    }, onError: (map) {
      // Ad had error - map contains `error_message`
    }, onRewarded: (map) {
      // Ad shown completely
    }, onClosed: (map) {
      // Ad closed
    }
);
```

شناسه‌ی
`responseId`
برابر مقداری ست که هنگام درخواست تبلیغ از
Future
به دست می‌آید

اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است :

| تابع | توضیحات |
| - | - |
| `onOpened(map: Map<String, String>)` | زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد |
| `onClosed(map: Map<String, String>)` | زمانی که پنجره تبلیغ بسته شود. این اکشن به منزله پایان تبلیغ نمی‌باشد |
| `onRewarded(map: Map<String, String>)` | زمانی که تبلیغ به طور کامل نمایش داده شده و باید جایزه به کاربر تعلق بگیرد |
| `onError(error: Map<String, String>)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |