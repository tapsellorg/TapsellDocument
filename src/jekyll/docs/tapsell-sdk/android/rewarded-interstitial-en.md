---
layout: classic-docs
title: Interstitial/Rewarded Ads in Android
lang: en
permalink: /tapsell-sdk/android/rewarded-interstitial/index.html
toc: true # table of contents
---
>The implementation of interstitial and rewarded ads (banner and video) is the same. You have to choose the zone type in the panel.

## Creating a Zone
First, create a zone from the [Tapsell panel](https://dashboard.tapsell.ir/) and use the `zoneId` when requesting and or showing an ad.

## Requesting Ads
To request an ad in your application, use the following method:

```java
Tapsell.requestAd(CONTEXT,
        ZONE_ID,
        new TapsellAdRequestOptions(),
        new TapsellAdRequestListener() {
            @Override
            public void onAdAvailable(String adId) {
              // KEEP adId
            }

            @Override
            public void onError(String message) {
            }
        });
```

The first argument is `CONTEXT`.  
The second argument is the `ZONE_ID` which you can get from your panel.  
The third argument `OPTIONS` is of type `TapsellAdRequestOptions`. You can configure your ad request with this argument.
The fourth argument is `TapsellAdRequestListener`.
  
The details of `TapsellAdRequestListener` methods is shown in the table below:

| Functionality | Method |
| - | - |
| The requested ad is ready to be shown. The ad id is in the `adId` variable | `onAdAvailable` |
| An error has occured and you can see the error message in the `message` variable | `onError` | 

### Request Options
با روش زیر می‌توانید نوع `cache` شدن ویدیو را با کمک ورودی `options` را تغییر دهید.  
```java
TapsellAdRequestOptions options = new TapsellAdRequestOptions();
options.setCacheType(CACHE_TYPE);
```
مقدار `CACHE_TYPE` میتواند برابر مقادیر زیر باشد.

| توضیحات | مقدار |
| - | - |
| هنگام نمایش تبلیغ، شروع به دانلود ویدیو میکند | `TapsellAdRequestOptions.CACHE_TYPE_CACHED` |
| قبل از نمایش تبلیغ، ویدیو را دانلود میکند | `TapsellAdRequestOptions.CACHE_TYPE_CACHED` |

>تنها زمانی از `CACHE_TYPE_CACHED` استفاده کنید که احتمال دیدن ویدیو توسط کاربر زیاد باشد، تا مصرف اینترنت بالا نرود.

## Showing Ads
You can show the add using the following lines of code:
To get open, close, error and reward callbacks you can use overloaded showAd method with callbacks.

```java
Tapsell.showAd(CONTEXT,
        ZONE_ID,
        AD_ID,
        new TapsellShowOptions(),
        new TapsellAdShowListener() {
            @Override
            public void onOpened() {
            }

            @Override
            public void onClosed() {
            }

            @Override
            public void onError(String message) {
            }

            @Override
            public void onRewarded(boolean completed) {
            }
        });
```

ورودی اول `CONTEXT` میباشد.  
ورودی دوم شناسه تبلیغ‌گاه است.
ورودی سوم شناسه تبلیغ که در زمان درخواست تبلیغ توسط متد `onAdAvailable` داده شده است.
ورودی سوم از نوع `TapsellShowOptions` است. تنظیمات زمان نمایش تبلیغ را از این طریق می‌توانید انجام بدهید.  
ورودی چهارم از نوع `TapsellAdShowListener` است. مراحل نمایش تبلیغ را از این طریق می‌توانید دریافت کنید.  

متدهای `TapsellAdShowListener` مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| هنگام باز شدن تبلیغ صدا زده میشود. | `onOpened` |
| هنگام بسته شدن تبلیغ صدا زده میشود. | `onClosed` |
| زمانی که خطایی در پروسه نمایش تبلیغ پیش بیاید صدا زده میشود. | `onError` |
| وضعیت دریافت جایزه در تبلیغات جایزه‌ای را نشان میدهد. | `onRewarded` |

### Show Options
تنظیمات زمان نمایش را می‌توانید مطابق روش زیر با کمک ورودی `showOptions` تغییر دهید.
```java
TapsellShowOptions showOptions = new TapsellShowOptions();
showOptions.setBackDisabled(true|false);
showOptions.setImmersiveMode(true|false);
showOptions.setShowDialog(true|false);
showOptions.setRotationMode(ROTATION_MODE);
```
به هر یک از متدهای بالا می‌توانید مقدار `true` یا `false` را بدهید تا آن قابلیت فعال یا غیر فعال بشود. مقادیر قابل انتخاب برای `setRotationMode` پایینتر توضیح داده شده‌اند.  

کاربرد هر یک از این متدها مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| غیر فعال کردن دکمه بازگشت در هنگام نمایش. | `setBackDisabled` |
| فعال کردن حالت Immersive هنگام نمایش. | `setImmersiveMode` |
| نمایش دیالوگ اخطار هنگام بستن تبلیغ قبل از اتمام ویدیو. | `setShowDialog` |
| تعیین جهت گوشی هنگام نمایش. | `setRotationMode` |
  
  
مقادیری که می‌توانید به `setRotationMode` بدهید مطابق جدول زیر است.

| توضیحات | مقدار |
| - | - |
| عمودی | `TapsellShowOptions.ROTATION_LOCKED_PORTRAIT` |
| افقی | `TapsellShowOptions.ROTATION_LOCKED_LANDSCAPE` |
| بر اساس وضعیت گوشی | `TapsellShowOptions.ROTATION_UNLOCKED` |
| عمودی برعکس | `TapsellShowOptions.ROTATION_LOCKED_REVERSED_PORTRAIT` |
| افقی برعکس | `TapsellShowOptions.ROTATION_LOCKED_REVERSED_LANDSCAPE` |

## Getting The Result of Rewarded Ads
در تبلیغات جایزه‌ای در صورتی که متفییر `completed` در متد `onRewarded` هنگام نمایش تبلیغ `true` باشد می‌توانید جایزه را به کاربر بدهید.
