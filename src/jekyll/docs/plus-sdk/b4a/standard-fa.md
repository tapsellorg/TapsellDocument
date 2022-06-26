---
layout: classic-docs
title: بنر استاندارد در B4A
lang: fa
permalink: /plus-sdk/b4a/standard/index.html
toc: true # table of contents
---


> برای مشاهد‌ه‌ی نمونه پیاده سازی شده در گیتهاب به [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-B4ASample/blob/0ed4cf5b1ec275061b20e600a87eae47b29b1c49/tapsell.b4a#L188) مراجعه نمایید
{:data-title="نمونه‌ی این تبلیغ" data-color="green"}

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.


سپس شناسه‌ی تبلیغ مورد نظر را کپی کنید. این شناسه
(Zone Id)
را برای درخواست تبلیغ نیاز دارید

## درخواست تبلیغ

دو راه برای درخواست تبلیغ 

- درخواست، گرفتن شناسه‌ی درخواست، نمایش با استفاده از شناسه‌ی درخواست (دو مرحله‌ای)
- درخواست و نمایش (یک مرحله)

### ۱. درخواست و نمایش تبلیغ (پیشنهادی)

مورد نیاز:  
- **شناسه‌ی تبلیغ یا Zone Id**
- تعریف `Panel` در Layout

از کد زیر برای درخواست تبلیغ استفاده کنید:

```vb
' Dim tapsellPlus As TapsellPlus (in `Sub Globals`)
' Dim panel As Panel

Dim zoneId As String = "شناسه‌ی تبلیغ"
tapsellPlus.RequestAndShowStandardBanner(zoneId, tapsellPlus.BANNER_320x50, panel)
```

متغیر `Panel` را بایستی در Layout designer بسازید.
(Designer -> Open Designer -> Add View -> Panel)


BANNER_TYPE سایز نمایش بنر هست و میتواند مقادیر زیر باشد:

|            نوع بنر            |  اندازه   |           شبکه‌های پشتیبانی شده           |
|:-----------------------------:|:---------:|:-----------------------------------------:|
|  `tapsellPlus.BANNER_320x50`  | `320x50`  | تپسل، AdMob، AppLovin، UnityAds، AdColony |
| `tapsellPlus.BANNER_320x100`  | `320x100` |                تپسل، AdMob                |
| `tapsellPlus.BANNER_250x250`  | `250x250` |                   تپسل                    |
| `tapsellPlus.BANNER_300x250`  | `300x250` |      تپسل، AdMob، AppLovin، AdColony      |
|  `tapsellPlus.BANNER_468x60`  | `468x60`  |              AdMob، UnityAds              |
|  `tapsellPlus.BANNER_728x90`  | `728x90`  |    AdMob، AppLovin، UnityAds، AdColony    |
| `tapsellPlus.BANNER_160x600`  | `160x600` |                 AdColony                  |
| `tapsellPlus.BANNER_ADAPTIVE` | `320x50`  |                تپسل، AdMob                |


کالبک‌های مورد استفاده در این تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnResponse(zoneId as String, responseId as String)`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`TapsellPlus_OnOpened(zoneId as String, responseId as String)`|هنگام باز شدن تبلیغ|
|`TapsellPlus_OnClosed(zoneId as String, responseId as String)`|در صورت بسته شدن تبلیغ|
|`TapsellPlus_OnError(error as String)`|در صورت وجود هر گونه خطا در این مراحل|


> برای پیاده‌سازی کالبک‌های لازم به [بخش اول](/plus-sdk/b4a/initialize/index.html) مراجعه کنید


### ۲. درخواست و سپس نمایش تبلیغ

مورد نیاز: **شناسه‌ی تبلیغ یا Zone Id**

از کد زیر برای درخواست تبلیغ استفاده کنید:

```vb
' Dim tapsellPlus As TapsellPlus (in `Sub Globals`)


Dim zoneId As String = "شناسه‌ی تبلیغ"
tapsellPlus.RequestStandardBannerAd(zoneId, tapsellPlus.BANNER_320x50)
```

کالبک‌های مورد استفاده در درخواست:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnResponse(zoneId as String, responseId as String)`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`TapsellPlus_OnError(error as String)`|در صورت وجود هر گونه خطا در این مراحل|

در صورتی که `responseId` حاصل در کالبک برگردد می‌توانید برای نمایش تبلیغ کد زیر را فراخوانی کنید:  

```vb
' responseId returned from `Sub TapsellPlus_OnResponse` after requesting the ad

tapsellPlus.ShowStandardBannerAd(responseId, panel)
```


کالبک‌های مورد استفاده در نمایش تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnOpened(zoneId as String, responseId as String)`|هنگام باز شدن تبلیغ|
|`TapsellPlus_OnError(error as String)`|در صورت وجود هر گونه خطا در این مراحل|



## حذف بنر استاندارد

برای مخفی/نمایش بنر می‌توانید visibility بنر را تغییر دهید

```vb
pan.Visible = True ' or False
```

برای از بین بردن بنر (سمت نیتیو) بایستی با داشتن `responseId` و `zoneId` (که از هنگام درخواست در `TapsellPlus_OnResponse` برمی‌گردد) اقدام به نابودی بنر کنید:

```vb
' responseId is received through `TapsellPlus_OnResponse` after requesting standard banner
' panel is the view that standard banner is shown in already

tapsellPlus.DestroyStandardBannerAd(responseId, panel)
```
