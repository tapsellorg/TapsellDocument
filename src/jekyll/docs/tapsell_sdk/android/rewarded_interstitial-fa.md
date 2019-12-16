---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در اندروید
lang: fa
permalink: /tapsell_sdk/android/rewarded_interstitial/index.html
toc: true # table of contents
---
>پیاده سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.

## درخواست تبلیغ
با اجرای کد زیر میتوانید درخواست یک تبلیغ بدهید.

```java
Tapsell.requestAd(
        CONTEXT,
        ZONE_ID,
        OPTIONS,
        AD_REQUEST_LISTENER);
```
ورودی اول `CONTEXT` میباشد.  
ورودی دوم `ZONE_ID` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
ورودی سوم `OPTIONS` از نوع `TapsellAdRequestOptions` است. تنظیمات زمان درخواست تبلیغ را از این طریق میتوانید انجام بدهید.  
ورودی چهارم `AD_REQUEST_LISTENER` از نوع `TapsellAdRequestListener` است.  
  
متدهای `TapsellAdRequestListener` مطابق جدول زیر است و نتیجه درخواست تبلیغ با کمک این بخش برمیگردد.

| عملکرد | متد |
| - | - |
| تبلیع آماده نمایش هست و از طریق `TapsellAd` به آن دسترسی دارید و میتوانید نمایش دهید | `onAdAvailable` |
| خطایی رخ داده از طریق `message` میتوانید خطا را ببینید | `onError` |
| تبلیغی برای نمایش موجود نیست | `onNoAdAvailable` |
| دسترسی به اینترنت امکان پذیر نیست | `onNoNetwork` |
| تبلیغ منقضی شده است | `onExpiring` |

### تنظیمات درخواست
با روش زیر میتوانید نوع `cache` شدن ویدیو را با کمک ورودی `options` را تغییر دهید.  
```java
TapsellAdRequestOptions options = new TapsellAdRequestOptions();
options.setCacheType(CACHE_TYPE);
```
مقدار `CACHE_TYPE` میتواند برابر مقادیر زیر باشد.

| توضیحات | مقدار |
| - | - |
| هنگام نمایش تبلیغ، شروع به دانلود ویدیو میکند | `CACHE_TYPE_STREAMED` |
| قبل از نمایش تبلیغ، ویدیو را دانلود میکند | `CACHE_TYPE_CACHED` |

>تنها زمانی از `CACHE_TYPE_CACHED` استفاده کنید که احتمال دیدن ویدیو توسط کاربر زیاد باشد، تا مصرف اینترنت بالا نرود.

## نمایش تبلیغ

هر تبلیغ یک شیء از نوع `TapsellAd` است که زمان درخواست تبلیغ از طریق `onAdAvailable` بهتون داده میشود. جهت نمایش آن‌ میتوانید از تابع `show` مطابق روش زیر استفاده نمایید. این تابع حداکثر یک بار برای هر تبلیغ قابل اجراست.

```java
tapsellAd.show(
    CONTEXT,
    SHOW_OPTIONS,
    AD_SHOW_LISTENER);
```

ورودی اول `CONTEXT` میباشد.  
ورودی دوم `SHOW_OPTIONS` از نوع `TapsellShowOptions` است. تنظیمات زمان نمایش تبلیغ را از این طریق میتوانید بدهید.  
ورودی سوم `AD_SHOW_LISTENER` از نوع `TapsellAdShowListener` است. مراحل نمایش تبلیغ را از این طریق میتوانید دریافت کنید.  

متدهای `TapsellAdShowListener` مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| هنگام باز شدن تبلیغ صدا زده میشود | `onOpened` |
| هنگام بسته شدن تبلیغ صدا زده میشود | `onClosed` |

### تنظیمات نمایش
تنظیمات زمان نمایش را میتوانید مطابق روش زیر با کمک ورودی `showOptions` تغییر دهید.
```java
TapsellShowOptions showOptions = new TapsellShowOptions();
showOptions.setBackDisabled(true|false);
showOptions.setImmersiveMode(true|false);
showOptions.setShowDialog(true|false);
showOptions.setRotationMode(ROTATION_MODE);
```
به هر یک از متدهای بالا میتوانید مقدار `true` یا `false` را بدهید تا آن قابلیت فعال یا غیر فعال بشود. مقادیر قابل انتخاب برای `setRotationMode` پایینتر توضیح داده شده‌اند.  

کاربرد هر یک از این متدها مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| غیر فعال کردن دکمه بازگشت در هنگام نمایش | `setBackDisabled` |
| فعال کردن حالت Immersive هنگام نمایش | `setImmersiveMode` |
| نمایش دیالوگ اخطار هنگام بستن تبلیغ قبل از اتمام ویدیو | `setShowDialog` |
| تعیین جهت گوشی هنگام نمایش | `setRotationMode` |
  
  
مقادیری که میتوانید به `setRotationMode` بدهید مطابق جدول زیر است.

| توضیحات | مقدار |
| - | - |
| عمودی | `ROTATION_LOCKED_PORTRAIT` |
| افقی | `ROTATION_LOCKED_LANDSCAPE` |
| بر اساس وضعیت گوشی | `ROTATION_UNLOCKED` |
| عمودی برعکس | `ROTATION_LOCKED_REVERSED_PORTRAIT` |
| افقی برعکس | `ROTATION_LOCKED_REVERSED_LANDSCAPE` |

## دریافت نتیجه تبلیغ جایزه‌ای
جهت دریافت نتیجه تبلیغات ویدیو جایزه‌ای مطابق روش زیر عمل کنید.
```java
Tapsell.setRewardListener(new TapsellRewardListener() {
    @Override
    public void onAdShowFinished(TapsellAd tapsellAd, boolean completed) {
    }
});
```
در صورتی که مقدار `completed` برابر با `true` باشد و تبلیغ از نوع جایزه‌دار `ad.isRewardedAd() == true`، میتوانید جایزه را (سکه/اعتبار/بنزین/…) به کاربر بدهید.
