---
layout: classic-docs
title: بنر استاندارد در یونیتی
lang: fa
permalink: /tapsell_sdk/unity/standard/index.html
toc: true # table of contents
---

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوع استاندارد بسازید.

## درخواست تبلیغ
جهت نمایش بنر استاندارد، باید محلی برای نمایش آن در صفحه در نظر بگیرید. بنر استاندارد، دارای سایزهای استانداردی است که در SDK تپسل مشخص شده‌اند. جهت نمایش بنر، از تابع زیر استفاده کنید:

```c#
Tapsell.RequestBannerAd(
	string zoneId,
	int bannerType, 
	int horizontalGravity, 
	int verticalGravity, 
  Action<string> onRequestFilled,
	Action<string> onNoAdAvailableAction,
  Action<TapsellError> onErrorAction, 
	Action<string> onNoNetworkAction,
  Action<string> onHideBannerAction);
```

مقدار `zoneId` کلیدی است که بعد از ساخت اپلیکیشن در پنل و ثبت یک `zone` از نوع بنری استاندارد دریافت میکنید. ورودی `BannerType` اندازه‌های مختلف را بیان میکند و شامل مقادیر زیر است:

| `BannerType.BANNER_320x50` | `320x50` |
| `BannerType.BANNER_320x100` | `320x100` |
| `BannerType.BANNER_250x250` | `250x250` |
| `BannerType.BANNER_300x250` | `300x250` |  
  
ورودی `horizontalGravity` نشان میدهد که آیا تبلیغ، بالا یا پایین صفحه باشد و شامل `BannerType.TOP`, `BannerType.BUTTOM` می‌باشد  

ورودی `verticalGravity` بیان میکند که تبلیغ از جهت عرضی در کجای صفحه باشد و میتواند شامل مقادیر `BannerType.LEFT`, `BannerType.RIGHT`, `BannerType.CENTER` باشد.


### تعریف `Callback` برای درخواست
مطابق کد زیر میتوانید برای درخواست تبلیغ `listener` تعریف کنید.

```c#
Tapsell.RequestBannerAd (bannerZoneId,BannerType.BANNER_320x50, Gravity.BOTTOM, Gravity.CENTER,
	(string zoneId)=>{
		Debug.Log("Action: onBannerRequestFilledAction");
	},
	(string zoneId)=>{
		Debug.Log("Action: onNoBannerAdAvailableAction");
	},
	(TapsellError tapsellError)=>{
		Debug.Log("Action: onBannerAdErrorAction");
	},
	(string zoneId)=>{
		Debug.Log("Action: onNoNetworkAction");
	}, 
	(string zoneId)=>{
		Debug.Log("Action: onHideBannerAction");
	});
```

## مخفی کردن و نمایش بنر
به صورت پیش فرض زمانی که تبلیغات بنری دریافت میشود به صفحه اضافه میگردد و Visible می‌شود. اگر بنا به هر دلیلی می‌خواهید بنر را مخفی کنید یا بنر مخفی شده را نمایش دهید از این کد استفاده کنید:


```java
Tapsell.ShowBannerAd (bannerZoneId); //To make visible
Tapsell.HideBannerAd (bannerZoneId); //To hide banner
```
