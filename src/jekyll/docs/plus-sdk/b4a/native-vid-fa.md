---
layout: classic-docs
title: پیاده سازی تبلیغات ویدئوی همسان
lang: fa
permalink: /plus-sdk/b4a/native-vid/index.html
toc: true
---

> برای مشاهد‌ه‌ی نمونه پیاده سازی شده در گیتهاب به [این لینک](https://github.com/irancell.irorg/YelloadwiseSDK-B4ASample/blob/c3db2c060e6cf9d1627c4d4a0aaa397fb8444f23/irancell.ir.b4a#L192) مراجعه نمایید
{:data-title="نمونه‌ی این تبلیغ" data-color="green"}


### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.irancell.ir/) یک تبلیغگاه (zone) ویدئوی همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


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

yelloadwise.RequestAndShowNativeVideoAd(zoneId, panel)
```

کالبک‌های مورد استفاده در این تبلیغ:

|نام کالبک|شرح|
|:--:|:--:|
|`Yelloadwise_OnResponse`|در صورتی که درخواست تبلیغ موفقیت آمیز باشد|
|`Yelloadwise_OnOpened`|هنگام باز شدن تبلیغ|
|`Yelloadwise_OnClosed`|در صورت بسته شدن تبلیغ|
|`Yelloadwise_OnError`|در صورت وجود هر گونه خطا در این مراحل|


> برای پیاده‌سازی کالبک‌های لازم به [بخش اول](/plus-sdk/b4a/initialize/index.html) مراجعه کنید

