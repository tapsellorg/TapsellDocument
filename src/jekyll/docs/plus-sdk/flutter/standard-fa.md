---
layout: classic-docs
title: بنر استاندارد در Flutter
lang: fa
permalink: /plus-sdk/flutter/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## درخواست تبلیغ
جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK تپسل مشخص شده‌اند. جهت نمایش بنر، از تابع زیر استفاده کنید:


```dart
TapsellPlus.instance
   .requestStandardBannerAd(
       zoneId, TapsellPlusBannerType.BANNER_320x50, onResponse: (map) {
              // SAVE the responseId
         }, onError: (map) {
            // Error when requesting for an ad
      }        
   });
```

BANNER_TYPE سایز نمایش بنر هست و میتواند مقادیر زیر باشد:

|     نوع بنر      |  اندازه   |       شبکه‌های پشتیبانی شده       |
|:----------------:|:---------:|:---------------------------------:|
| `BANNER_320x50`  | `320x50`  |  تپسل، AdMob، AppLovin، UnityAds  |
| `BANNER_320x100` | `320x100` |            تپسل، AdMob            |
| `BANNER_250x250` | `250x250` |               تپسل                |
| `BANNER_300x250` | `300x250` |       تپسل، AdMob، AppLovin       |
| `BANNER_468x60`  | `468x60`  |          AdMob، UnityAds          |
| `BANNER_728x90`  | `728x90`  |     AdMob، AppLovin، UnityAds     |


## مخفی کردن و نمایش بنر
برای نمایش بنر با داشتن **responseId** که از درخواست برمیگردد کد زیر را استفاده کنید:

```dart
TapsellPlus.instance.showStandardBannerAd(responseId, TapsellPlusHorizontalGravity.TOP, 
    TapsellPlusVerticalGravity.RIGHT,
    margin: EdgeInsets.only(top: 100), onOpened: (map) {
      // Ad opened
    }, onError: (map) {
      // Error when showing ad
    });
```

| `onOpened(data: Map<String, String>)` | در صورت بازشدن تبلیغ این تابع فراخوانی خواهد شد |  
| `onError(errorData: Map<String, String>)` | در صورت رخداد هر خطایی این تابع فراخوانی خواهد شد |  




برای از بین بردن این بنر با استفاده از **responseId** استفاده شده برای نمایش تبلیغ اقدام به حذف آن نمایید

```dart
TapsellPlus.instance.destroyStandardBanner(responseId);
```

### نمایش و عدم نمایش بنر (hide/show)

در صورتی که نیاز باشد که تبلیغ **مخفی** شود از توابع زیر برای کنترل این رفتار استفاده کنید

```dart
// To hide
TapsellPlus.instance.hideStandardBanner();

// To show
TapsellPlus.instance.displayStandardBanner();
```

**نکته**: این نوع مخفی‌کردن تاثیری در درخواست تبلیغ ندارد و صرفا visibility تبلیغ عوض می‌شود.
