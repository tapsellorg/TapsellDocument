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
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

```c#
TapsellPlus.RequestStandardBannerAd(ZoneID, BANNER_TYPE,
            tapsellPlusAdModel => {
                Debug.Log ("on response " + tapsellPlusAdModel.responseId);
                _responseId = tapsellPlusAdModel.responseId;
            },
            error => {
                Debug.Log ("Error " + error.message);
            }
        );
```

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

## نمایش تبلیغ

بعد از اجرای متد `response` و دریافت پارامتر `responseId` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر آن را نمایش دهید.


```c#
TapsellPlus.ShowStandardBannerAd(_responseId, HORIZONTAL_GRAVITY, VERTICAL_GRAVITY,

            tapsellPlusAdModel => {
                Debug.Log ("onOpenAd " + tapsellPlusAdModel.zoneId);
            },
            error => {
                Debug.Log ("onError " + error.errorMessage);
            }
        );
```

BANNER_TYPE سایز نمایش بنر هست و می‌تواند مقادیر زیر باشد:

|نوع بنر|اندازه|شبکه‌های پشتیبانی شده|
|:----------------:|:-------------:|:------------------:|
| `Banner320X50` | `320x50` |       تپسل، AdMob، AppLovin، UnityAds، AdColony    |
| `Banner320X100` | `320x100` |      تپسل، AdMob    |
| `Banner250X250` | `250x250` |    تپسل  |
| `Banner300X250` | `300x250` |   تپسل، AdMob، AppLovin، AdColony |
| `Banner468X60` | `468x60` |      AdMob، UnityAds   |
| `Banner728X90` | `728x90` |     AdMob، AppLovin، UnityAds، AdColony |
| `BANNER_160x600` | `160x600` |     AdColony |
  
`VERTICAL_GRAVITY` و `HORIZONTAL_GRAVITY` موقعیت قرار گیری بنر در صفحه هست و می‌تواند مقادیر زیر باشد.

```c#
Gravity.TOP - Gravity.BOTTOM - Gravity.LEFT - Gravity.RIGHT - Gravity.CENTER
```

## مخفی کردن و نمایش تبلیغ
به صورت پیش فرض زمانی که تبلیغات بنری دریافت می‌شود به صفحه اضافه میگردد و Visible می‌شود. اگر بنا به هر دلیلی می‌خواهید بنر را مخفی کنید یا بنر مخفی شده را نمایش دهید از این کد استفاده کنید:


```c#
TapsellPlus.HideStandardBannerAd();
TapsellPlus.TapsellPlus.DisplayStandardBannerAd();
```

## حذف تبلیغ
در پایان چرخه‌ی حیات صفحه یا هر زمان که قصد داشتید تبلیغ بسته شود، می‌بایستی متد زیر را صدا بزنید:

```c#
TapsellPlus.DestroyStandardBannerAd(_responseId);
```