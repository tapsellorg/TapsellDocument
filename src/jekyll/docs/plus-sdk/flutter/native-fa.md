---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در React Native
lang: fa
permalink: /plus-sdk/flutter/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با روش زیر درخواست تبلیغ بدهید.

```dart
final zoneId = "theZoneIdYouHave";
TapsellPlus.instance.requestNativeAd(zoneId).then((responseId) {
      // SAVE the responseId
    }).catchError((error) {
      // Error requesting for an ad
    });
```
خروجی تابع یک
Future
است که در صورت
success
شدن یک
**responseId**
برمیگرداند.

این شناسه برای نمایش تبلیغ مورد نیاز است.


### نمایش تبلیغ

```dart
TapsellPlus.instance.showNativeAd(id, onOpened: (nativeAd) {
      // Use the NativeAd object to display an ad
    }, onError: (errorPayload) {
      // Error when getting ad info
    });
```

| پارامتر | توضیحات |
| - | - |
| `responseId` | شناسه‌ی دریافتی از تابع درخواست |
| `onOpened(nativeAd: NativeAd)` | در صورت موفقیت آمیز بودن، دیتای لازم با فرمت جدول بعدی در ورودی این کالبک خواهد بود |
| `onError(errorPayload: Map<String, String>)` | در صورت رخداد هر گونه خطا |

برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `nativeAd` و استفاده کنید.   


| توضیحات | تابع |
| - | - |
| شناسه تبلیغ | `adId : string` |
| عنوان تبلیغ | `title : string` |
| توضیحات تبلیغ | `description : string` |
| متن دعوت کننده از کاربر به کلیک/نصب  | `callToActionText : string` |
| آدرس آیکون تبلیغ | `iconUrl : string` |
| تصویر افقی تبلیغ | `portraitImageUrl : string` |
| تصویر عمودی تبلیغ | `landscapeImageUrl : string` |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```dart
TapsellPlus.instance.nativeBannerAdClicked(responseId);
```