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
با اجرای کد زیر میتوانید درخواست یک تبلیغ بدهید.

```c#
public void Request () {
  TapsellPlus.requestRewardedVideo (ZONE_ID,
    (string zoneId) => {
      Debug.Log ("on response " + zoneId);
    },
    (TapsellError error) => {
      Debug.Log ("Error " + error.message);
    }
  );
}
```

ورودی اول `ZONE_ID` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  

## نمایش تبلیغ
بعد از اجرای متد response تبلیغ آماده نمایش است و میتوانید مطابق روش زیر نمایش دهید.

```c#
public void Show () {
  TapsellPlus.showAd (ZONE_ID,
    (string zoneId) => {
      Debug.Log ("onOpenAd " + zoneId);
    },
    (string zoneId) => {
      Debug.Log ("onCloseAd " + zoneId);
    },
    (string zoneId) => {
      Debug.Log ("onReward " + zoneId);
    },
    (TapsellError error) => {
      Debug.Log ("onError " + error.message);
    }
  );
}
```