---
layout: classic-docs
title: تبلیغات آنی در ReactNative
lang: fa
permalink: /plus-sdk/reactnative/interstitial/index.html
toc: true # table of contents
---

برای پیاده سازی تبلیغات آنی به صورت زیر اقدام کنید.


## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر میتوانید درخواست یک تبلیغ بدهید.

```javascript
TapsellPlus.requestInterstitialAd(ZONE_ID)
  .then((responseId) => {
    // Save the responseId
   })
  .catch(error => {
    // Error occurred
  });
```

پارامتر
**responseId**
که از promise برمیگردد برای نمایش تبلیغ مورد نیاز است. لذا آنرا ذخیره کنید


## نمایش تبلیغ
با اجرای کد زیر میتوانید یک تبلیغ را نمایش بدهید.

```javascript
TapsellPlus.showInterstitialAd(responseId, onOpened, onClosed, onRewarded, onError);
```

مقدار
`responseId`
از درخواست بدست می‌آید.

اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است :

| تابع | توضیحات |
| - | - |
| `onOpened(data: object)` | فراخوانی در صورتی که تبلیغ باز شود |
| `onClosed(data: object)` | فراخوانی در صورت بسته شدن پنجره‌ی تبلیغ |
| `onRewarded(data: object)` | فراخوانی در صورت اتمام نمایش تبلیغ |
| `onError(error: object)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |