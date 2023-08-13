---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در B4A
lang: fa
permalink: /plus-sdk/b4a/native/index.html
toc: true
---

> برای مشاهد‌ه‌ی نمونه پیاده سازی شده در گیتهاب به [این لینک](https://github.com/irancell.irorg/YelloadwiseSDK-B4ASample/blob/0ed4cf5b1ec275061b20e600a87eae47b29b1c49/irancell.ir.b4a#L183) مراجعه نمایید
{:data-title="نمونه‌ی این تبلیغ" data-color="green"}


### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.irancell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.



سپس شناسه‌ی تبلیغ مورد نظر را کپی کنید. این شناسه
(Zone Id)
را برای درخواست تبلیغ نیاز دارید


> تبلیغ `Native banner` با استفاده از template پیش‌فرض ساخته شده و برای تغییر template باید کد نیتیو اندروید زده شود. لذا تغییر template در نسخه‌ی فعلی برای B4A ممکن نیست
{:data-title="نکته در مورد تبلیغ" data-color="red"}

## درخواست و نمایش تبلیغ

مورد نیاز: 

- **شناسه‌ی تبلیغ یا Zone Id**
- **تعریف Panel در layout به اندازه‌ی حدودا نصف صفحه**  
  برای اینکار به `Visual designer` برنامه بروید و از منوی `Add View` یک **Panel** به صفحع اضافه کنید

از کد زیر برای درخواست تبلیغ استفاده کنید:

```vb
' Dim yelloadwise As Yelloadwise (in `Sub Globals`)
' Dim panel As Panel


Dim zoneId As String = "شناسه‌ی تبلیغ"

yelloadwise.RequestAndShowNativeAd(zoneId, panel)
```

کالبک‌های مورد استفاده در این تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`Yelloadwise_OnResponse(zoneId as String, responseId as String)`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`Yelloadwise_OnOpened(zoneId as String, responseId as String)`|هنگام باز شدن تبلیغ|
|`Yelloadwise_OnClosed(zoneId as String, responseId as String)`|در صورت بسته شدن تبلیغ|
|`Yelloadwise_OnError(error as String)`|در صورت وجود هر گونه خطا در این مراحل|


> برای پیاده‌سازی کالبک‌های لازم به [بخش اول](/plus-sdk/b4a/initialize/index.html) مراجعه کنید

