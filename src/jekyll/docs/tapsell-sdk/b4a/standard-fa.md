---
layout: classic-docs
title: بنر استاندارد در اندروید
lang: fa
permalink: /yelloadwise-core/b4a/standard/index.html
toc: true # table of contents
---

### ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.Yelloadwise.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.


### نمایش تبلیغ بنری استاندارد
جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK یلوادوایز مشخص شده‌اند. جهت نمایش بنر، از تابع زیر استفاده کنید:

```visualbasic
yelloadwise.fillBannerAd(adPanel, zoneId, bannerSize)
```

ورودی `adPanel` از جنس Panel بوده و نشان دهنده محلی است که برای نمایش تبلیغ انتخاب کرده‌اید. 
ورودی `zoneId` شناسه تبلیغ‌گاه بنر استاندارد است که آن را می‌توانید از داشبورد یلوادوایز دریافت کنید. 
ورودی آخر، نوع بنر را مشخص می‌کند. مقادیر قابل قبول انواع بنر، در کلاس `yelloadwise` بصورت `irancell.ir.BANNER_WxH` آورده شده‌اند که  W  و  H  به ترتیب عرض و طول بنر استاندارد هستند.


### تنظیم Callback
اگر میخواهید callback های مربوط به نمایش بنر را مدیریت کنید می‌توانید از قطعه کد زیر استفاده کنید:

```visualbasic
Sub irancell.ir_onNoBannerAdAvailable (zoneId As String)
    //Todo
End Sub

Sub irancell.ir_onBannerNoNetwork (zoneId As String)
    //Todo
End Sub

Sub irancell.ir_onBannerAdRequestFilled (zoneId As String)
    //Todo
End Sub

Sub irancell.ir_onBannerAdMadeHidden (zoneId As String)
    //Todo
End Sub

Sub irancell.ir_onBannerAdError (zoneId As String, error As String)
    /Todo
End Sub
```

### مخفی کردن و نمایش بنر
به صورت پیش فرض زمانی که تبلیغات بنری دریافت میشود به صفحه اضافه میگردد و Visible می‌شود. اگر بنا به هر دلیلی میخواهید بنر را مخفی کنید یا بنر مخفی شده را نمایش دهید از این کد استفاده کنید:


```java
irancell.ir.setBannerVisibality(bannerZoneId,False/True)
```
