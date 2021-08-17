---
layout: classic-docs
title: تبلیغات جایزه‌ای در ReactNative
lang: fa
permalink: /plus-sdk/b4a/rewarded/index.html
toc: true # table of contents
---

برای پیاده سازی تبلیغات جایزه‌ای به صورت زیر اقدام کنید


## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

متد مورد نظر یک `Promise` برمی‌گرداند که این در درون خود یک
**responseId**
دارد. از این 
responseId
برای نمایش تبلیغ استفاده می‌شود. لذا بایستی آنرا ذخیره کنید.

```javascript
let zoneId = "theZoneIdYouHave";
TapsellPlus.requestRewardedVideoAd(zoneId).then(responseId => {
  // Save the responseId -- You need it to show the ad
})
.catch(error => {
  // Do on Error
});

// Using Async/await

let responseId = await TapsellPlus.requestRewardedVideoAd(zoneId);
```

ورودی اول `zoneId` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
  
اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است:

| تابع | توضیحات |
| - | - |
| `Promise.resolve(responseId)` | در صورتی که تبلیغ بدون مشکل آماده‌ی نمایش شود شناسه‌ی درخواست برمیگردد  |
| `Promise.reject(error)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |


## نمایش تبلیغ
با اجرای کد زیر میتوانید یک تبلیغ را نمایش بدهید.

```javascript
TapsellPlus.showRewardedVideoAd(responseId, onOpened, onClosed, onRewarded, onError);
```

شناسه‌ی
`responseId`
برابر مقداری ست که هنگام درخواست تبلیغ از
promise
به دست می‌آید

اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است :

| تابع | توضیحات |
| - | - |
| `onOpened(data: object)` | زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد |
| `onClosed(data: object)` | زمانی که پنجره تبلیغ بسته شود. این اکشن به منزله پایان تبلیغ نمی‌باشد |
| `onRewarded(data: object)` | زمانی که تبلیغ به طور کامل نمایش داده شده و باید جایزه به کاربر تعلق بگیرد |
| `onError(error: object)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |