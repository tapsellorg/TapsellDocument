---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در React Native
lang: fa
permalink: /plus-sdk/reactnative/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با روش زیر درخواست تبلیغ بدهید.

```javascript
TapsellPlus.requestNative(zoneId, onAdAvailable, onError);
```

ورودی `zoneId`، شناسه تبلیغ‌گاه است که باید آن را از داشبورد تپسل دریافت کنید.

اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است:

| تابع | توضیحات |
| - | - |
| `onError(zoneId : string, error : string)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |
| `onAdAvailable(adData, onAdClicked)` | زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد |
| `onNoNetwork(zoneId : string)` | زمانی که دسترسی به شبکه موجود نباشد |


### نمایش تبلیغ
برای نمایش تبلیغ، می‌بایست از فیلدهای موجود در آبجکت `adData` و استفاده کنید.   


| توضیحات | تابع |
| - | - |
| شناسه تبلیغ | `ad_id : string` |
| عنوان تبلیغ | `title : string` |
| توضیحات تبلیغ | `description : string` |
| متن دعوت کننده از کاربر به کلیک/نصب  | `call_to_action_text : string` |
| آدرس آیکون تبلیغ | `icon_url` |
| تصویر افقی تبلیغ | `portrait_static_image_url` |
| تصویر عمودی تبلیغ | `landscape_static_image_url` |
  

### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```javascript
TapsellPlus.nativeAdClicked(zoneId, adId);
```