---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در یونیتی
lang: fa
permalink: /plus_sdk/unity/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با کمک متد `TapsellPlus.requestNativeBanner` و به روش زیر درخواست تبلیغ بدهید.

```c#
TapsellPlus.requestNativeBanner (CONTEXT, ZONE_ID,
    (TapsellPlusNativeBannerAd result) => {
      Debug.Log ("on response");
      //showing ad
    },
    (TapsellError error) => {
      Debug.Log ("Error " + error.message);
    }
  );
```

### نمایش تبلیغ
متغیر برگردانده شده در on response محتویات تبلیغ هست و برای نمایش تبلیغ باید مطابق جدول زیر ازش استفاده کنید.


| function | usage |
| - | - |
| `getTitle()` | عنوان تبلیغ |
| `getDescription()` | توضیحات |
| `getIcon()` | آیکن |
| `getLandscapeBannerImage()` | تصویر افقی |
| `getPortraitBannerImage()` | تصویر عمودی |
| `getCallToAction()` | متن دکمه کلیک |


### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```c#
nativeAd.clicked ();
```