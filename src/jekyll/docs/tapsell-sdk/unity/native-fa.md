---
layout: classic-docs
title: پیاده سازی تبلیغات همسان در یونیتی
lang: fa
permalink: /tapsell-sdk/unity/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.


### درخواست تبلیغ
با کمک متد `Tapsell.RequestNativeBannerAd` و به روش زیر درخواست تبلیغ بدهید.

```c#
Tapsell.RequestNativeBannerAd(monoBehaviour, zoneId, Action<TapsellNativeBannerAd> onAdRequestFilledAction,
    Action<string> onNoAdAvailableAction, Action<TapsellError> onErrorAction,
    Action<string> onNoNetworkAction);
```

ورودی `monoBehaviour`، یک شی از جنس `MonoBehaviour` است که برای دریافت محتوای تبلیغ در پس‌زمینه استفاده می‌شود.  
ورودی `zoneId`، شناسه تبلیغ‌گاه است که باید آن را از داشبورد تپسل دریافت کنید.

اکشن‌ها مطابق جدول زیر است و نتیجه درخواست تبلیغ با کمک این بخش برمیگردد.

| عملکرد | متد |
| - | - |
| تبلیع آماده نمایش هست و از طریق `TapsellNativeBannerAd` به آن دسترسی دارید و میتوانید نمایش دهید | `onAdRequestFilledAction` |
| خطایی رخ داده از طریق `TapsellError` میتوانید خطا را ببینید | `onErrorAction` |
| تبلیغی برای نمایش موجود نیست | `onNoAdAvailableAction` |
| دسترسی به اینترنت امکان پذیر نیست | `onNoNetworkAction` |

### نمایش تبلیغ
برای نمایش تبلیغ، می‌بایست از توابع موجود در کلاس `TapsellNativeBannerAd` استفاده کنید. توضیحات توابع‌های مختلف این کلاس و خروجی آن‌ها در جدول زیر آمده است.

| تابع | توضیحات |
| - | - |
| `string GetTitle()` | عنوان تبلیغ |
| `string GetCallToAction()` | متن دعوت کننده از کاربر به کلیک/نصب |
| `Texture2D GetPortraitBannerImage(string)` | تصویر بنر تبلیغ (عمودی) |
| `Texture2D GetLandscapeBannerImage(string)` | تصویر بنر تبلیغ (افقی) |
| `Texture2D getIcon(string)` | آیکون تبلیغ |
  
 **دقت کنید که تبلیغ‌ها ممکن است هردو بنر عمودی و افقی را نداشته باشند.**


### باز کردن تبلیغ
برای باز کردن تبلیغ، هنگامی که کاربر روی آن کلیک می‌کند، از تابع زیر استفاده کنید.

```c#
native.Clicked ();
```