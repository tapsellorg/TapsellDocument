---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در یونیتی
lang: fa
permalink: /plus-sdk/unity/rewarded-interstitial/index.html
toc: true # table of contents
---

پیاده سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.


## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

```c#
public void Request () {
  TapsellPlus.RequestRewardedVideoAd (ZONE_ID,

			tapsellPlusAdModel => {
				Debug.Log ("on response " + tapsellPlusAdModel.responseId);
				_responseId = tapsellPlusAdModel.responseId;
			},
			error => {
				Debug.Log ("Error " + error.message);
			}
		);
}
```

ورودی اول `ZONE_ID` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
برای تبلیغ آنی از متد `TapsellPlus.RequestInterstitialAd` استفاده کنید.

>اگر تمایل دارید در کالبک error مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک error مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.

## نمایش تبلیغ
بعد از اجرای متد `response` و دریافت پارامتر `responseId` تبلیغ آماده نمایش است و می‌توانید مطابق روش زیر آن را نمایش دهید.

```c#
public void Show () {
  TapsellPlus.ShowRewardedVideoAd(_responseId,

			tapsellPlusAdModel => {
				Debug.Log ("onOpenAd " + tapsellPlusAdModel.zoneId);
			},
			tapsellPlusAdModel => {
				Debug.Log ("onReward " + tapsellPlusAdModel.zoneId);
			},
			tapsellPlusAdModel => {
				Debug.Log ("onCloseAd " + tapsellPlusAdModel.zoneId);
			},
			error => {
				Debug.Log ("onError " + error.errorMessage);
			}
		);
}
```

برای تبلیغ آنی از متد `TapsellPlus.ShowInterstitialAd`  استفاده کنید. همچنین در تبلیغ آنی نیازی به کالبک `onReward` ندارید و می‌توانید آن را پاک کنید.
