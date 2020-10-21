---
layout: classic-docs
title: بنر استاندارد در یونیتی
lang: fa
permalink: /plus-sdk/unity/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## درخواست تبلیغ
جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK تپسل مشخص شده‌اند. جهت نمایش بنر، از تابع زیر استفاده کنید:

```c#
TapsellPlus.showBannerAd (ZONE_ID, BANNER_TYPE, VERTICAL_GRAVITY, HORIZONTAL_GRAVITY,
  (string zoneId) => {
    Debug.Log ("on response " + zoneId);
  },
  (TapsellError error) => {
    Debug.Log ("Error " + error.message);
  });
```

BANNER_TYPE سایز نمایش بنر هست و میتواند مقادیر زیر باشد:

| `BANNER_320x50` | `320x50` |  
| `BANNER_320x100` | `320x100` |   
| `BANNER_250x250` | `250x250` |  
| `BANNER_300x250` | `300x250` |  
| `BANNER_468x60` | `468x60` |  
| `BANNER_728x90` | `728x90` |  
  
`VERTICAL_GRAVITY` و `HORIZONTAL_GRAVITY` موقعیت قرار گیری بنر در صفحه هست و میتواند مقادیر زیر باشد.

```c#
Gravity.TOP - Gravity.BOTTOM - Gravity.LEFT - Gravity.RIGHT - Gravity.CENTER
```

## مخفی کردن و نمایش بنر
به صورت پیش فرض زمانی که تبلیغات بنری دریافت میشود به صفحه اضافه میگردد و Visible می‌شود. اگر بنا به هر دلیلی می‌خواهید بنر را مخفی کنید یا بنر مخفی شده را نمایش دهید از این کد استفاده کنید:


```c#
TapsellPlus.showBanner ();
TapsellPlus.hideBanner ();
```
