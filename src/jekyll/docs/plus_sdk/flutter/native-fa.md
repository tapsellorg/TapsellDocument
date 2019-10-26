---
layout: classic-docs
title: پیاده سازی تبلیغات همسان
lang: fa
permalink: /plus_sdk/flutter/native.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### درخواست تبلیغ
با کمک متد `TapsellPlus.requestNativeBanner` و به روش زیر درخواست تبلیغ بدهید.

```dart
void requestNativeBanner() {
    TapsellPlus.requestNativeBanner(
        Constant.TAPSELL_NATIVE_BANNER,
        (nativeBanner) => nativeBannerResponse(nativeBanner),
        (zoneId, errorMessage) => error(zoneId, errorMessage));
}

nativeBannerResponse(nativeBanner) {
    print("success: ad_id = ${nativeBanner.adId}");
    setState(() {
      adImage = nativeBanner.landscapeStaticImageUrl;
      adTitle = nativeBanner.title;
    });
}

error(zoneId, errorMessage) {
    print('error caught: zone_id = $zoneId, message = $errorMessage');
}
 ```

متغیر برگردانده شده در nativeBannerResponse محتویات تبلیغ هست و برای نمایش تبلیغ باید مطابق جدول زیر از آن استفاده کنید.

|           function          |     usage     |
|:---------------------------:|:-------------:|
|         `title()`        |     عنوان     |
|      `description()`     |    توضیحات    |
|         `icon()`         |      آیکن     |
| `landscapeBannerImage()` |   تصویر افقی  |
|  `portraitBannerImage()` |  تصویر عمودی  |
|     `callToAction()`    | متن دکمه کلیک |

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```dart
TapsellPlus.nativeBannerAdClicked(String ZONE_ID, Function RESPONSE, Function ERROR));
```