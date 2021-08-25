---
layout: classic-docs
title: تبلیغات آنی در B4A
lang: fa
permalink: /plus-sdk/b4a/interstitial/index.html
toc: true # table of contents
---


> برای مشاهد‌ه‌ی نمونه پیاده سازی شده در گیتهاب به [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-B4ASample/blob/0ed4cf5b1ec275061b20e600a87eae47b29b1c49/tapsell.b4a#L179) مراجعه نمایید
{:data-title="نمونه‌ی این تبلیغ" data-color="green"}



برای پیاده سازی تبلیغات آنی به صورت زیر اقدام کنید.

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.

سپس شناسه‌ی تبلیغ مورد نظر را کپی کنید. این شناسه
(Zone Id)
را برای درخواست تبلیغ نیاز دارید

## درخواست تبلیغ

دو راه برای درخواست تبلیغ 

- درخواست، گرفتن شناسه‌ی درخواست، نمایش با استفاده از شناسه‌ی درخواست (دو مرحله‌ای)
- درخواست و نمایش (یک مرحله)

### ۱. درخواست و نمایش تبلیغ (پیشنهادی)

مورد نیاز: **شناسه‌ی تبلیغ یا Zone Id**

از کد زیر برای درخواست تبلیغ استفاده کنید:

```vb
' Dim tapsellPlus As TapsellPlus (in `Sub Globals`)


Dim zoneId As String = "شناسه‌ی تبلیغ"
tapsellPlus.RequestAndShowInterstitialAd(zoneId)
```

کالبک‌های مورد استفاده در این تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnResponse`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`TapsellPlus_OnOpened`|هنگام باز شدن تبلیغ|
|`TapsellPlus_OnClosed`|در صورت بسته شدن تبلیغ|
|`TapsellPlus_OnError`|در صورت وجود هر گونه خطا در این مراحل|


> برای پیاده‌سازی کالبک‌های لازم به [بخش اول](/plus-sdk/b4a/initialize/index.html) مراجعه کنید


### ۲. درخواست و سپس نمایش تبلیغ

مورد نیاز: **شناسه‌ی تبلیغ یا Zone Id**

از کد زیر برای درخواست تبلیغ استفاده کنید:

```vb
' Dim tapsellPlus As TapsellPlus (in `Sub Globals`)


Dim zoneId As String = "شناسه‌ی تبلیغ"
tapsellPlus.RequestInterstitialAd(zoneId)
```

کالبک‌های مورد استفاده در درخواست:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnResponse`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`TapsellPlus_OnError`|در صورت وجود هر گونه خطا در این مراحل|

در صورتی که `responseId` حاصل در کالبک برگردد می‌توانید برای نمایش تبلیغ کد زیر را فراخوانی کنید:  

```vb
' responseId returned from `Sub TapsellPlus_OnResponse` after requesting the ad

tapsellPlus.ShowInterstitialAd(responseId)
```

> هنگام درخواست تبلیغ باید ترتیب رعایت شود. زیر کالبک `OnResponse` این شناسه‌ها را به یک کالبک ارسال می‌کند و به همین درخواست همزمان برای این حالت پیچیده خواهد شد.
{:data-title="درخواست همزمان" data-color="orange"}


کالبک‌های مورد استفاده در نمایش تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`TapsellPlus_OnOpened`|هنگام باز شدن تبلیغ|
|`TapsellPlus_OnClosed`|در صورت بسته شدن تبلیغ|
|`TapsellPlus_OnError`|در صورت وجود هر گونه خطا در این مراحل|