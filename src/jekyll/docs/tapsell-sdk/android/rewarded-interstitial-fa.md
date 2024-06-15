---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در اندروید
lang: fa
permalink: /yelloadwise-app/android/rewarded-interstitial/index.html
toc: true # table of contents
---

>پیاده‌سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.

## ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://business.yelloadwise.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.

## درخواست تبلیغ
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

```java
Yelloadwise.requestAd(CONTEXT,
        ZONE_ID,
        new YelloadwiseAdRequestOptions(),
        new YelloadwiseAdRequestListener() {
            @Override
            public void onAdAvailable(String adId) {
            }

            @Override
            public void onError(String message) {
            }
        });
```
ورودی اول `CONTEXT` میباشد.  
ورودی دوم `ZONE_ID` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
ورودی سوم `OPTIONS` از نوع `YelloadwiseAdRequestOptions` است. تنظیمات زمان درخواست تبلیغ را از این طریق می‌توانید انجام بدهید.  
ورودی چهارم از نوع `YelloadwiseAdRequestListener` است.  
  
متدهای `YelloadwiseAdRequestListener` مطابق جدول زیر است و نتیجه درخواست تبلیغ با کمک این بخش برمیگردد.

| عملکرد | متد |
| - | - |
| تبلیع آماده نمایش است و شناسه تبلیغ در متغییر `adId` قرار دارد. | `onAdAvailable` |
| خطایی رخ داده از طریق `message` می‌توانید خطا را ببینید. | `onError` |

>اگر تمایل دارید در کالبک onError مجددا درخواست تبلیغ کنید، حتما این کار را به کمک متغیری به
عنوان شمارنده انجام دهید. زیرا به کمک آن متغیر می‌توانید محدودیت تعداد دفعات را برای
درخواست لحاظ کنید. به عنوان مثال وقتی این جایگاه تبلیغاتی را از پنل غیرفعال نمودید، اگر بدون
محدود کردن دفعات، هر بار در کالبک onError مجددا درخواست تبلیغ دهید، برنامه‌تان در یک حلقه‌ی
بی‌نهایت می‌افتد و عملکرد آن مختل می‌شود.


### تنظیمات درخواست
با روش زیر می‌توانید نوع `cache` شدن ویدیو را با کمک ورودی `options` را تغییر دهید.  
```java
YelloadwiseAdRequestOptions options = new YelloadwiseAdRequestOptions();
options.setCacheType(CACHE_TYPE);
```
مقدار `CACHE_TYPE` میتواند برابر مقادیر زیر باشد.

| توضیحات | مقدار |
| - | - |
| هنگام نمایش تبلیغ، شروع به دانلود ویدیو میکند | `YelloadwiseAdRequestOptions.CACHE_TYPE_STREAMED` |
| قبل از نمایش تبلیغ، ویدیو را دانلود میکند | `YelloadwiseAdRequestOptions.CACHE_TYPE_CACHED` |

>تنها زمانی از `CACHE_TYPE_CACHED` استفاده کنید که احتمال دیدن ویدیو توسط کاربر زیاد باشد، تا مصرف اینترنت بالا نرود.

## نمایش تبلیغ
برای نمایش تبلیغ از تابغ زیر استفاده کنید.

```java
Yelloadwise.showAd(CONTEXT,
        ZONE_ID,
        AD_ID,
        new YelloadwiseShowOptions(),
        new YelloadwiseAdShowListener() {
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
ورودی چهارم از نوع `YelloadwiseShowOptions` است. تنظیمات زمان نمایش تبلیغ را از این طریق می‌توانید انجام بدهید.  
ورودی پنجم از نوع `YelloadwiseAdShowListener` است. مراحل نمایش تبلیغ را از این طریق می‌توانید دریافت کنید.  

متدهای `YelloadwiseAdShowListener` مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| هنگام باز شدن تبلیغ صدا زده میشود. | `onOpened` |
| هنگام بسته شدن تبلیغ صدا زده میشود. | `onClosed` |
| زمانی که خطایی در پروسه نمایش تبلیغ پیش بیاید صدا زده میشود. | `onError` |
| وضعیت دریافت جایزه در تبلیغات جایزه‌ای را نشان میدهد. | `onRewarded` |

### تنظیمات نمایش
تنظیمات زمان نمایش را می‌توانید مطابق روش زیر با کمک ورودی `showOptions` تغییر دهید.
```java
YelloadwiseShowOptions showOptions = new YelloadwiseShowOptions();
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

| توضیحات | مقدار                                                       |
| - |-------------------------------------------------------------|
| عمودی | `YelloadwiseShowOptions.ROTATION_LOCKED_PORTRAIT`           |
| افقی | `YelloadwiseShowOptions.ROTATION_LOCKED_LANDSCAPE`          |
| بر اساس وضعیت گوشی | `YelloadwiseShowOptions.ROTATION_UNLOCKED`                  |
| عمودی برعکس | `YelloadwiseShowOptions.ROTATION_LOCKED_REVERSED_PORTRAIT`            |
| افقی برعکس | `YelloadwiseShowOptions.ROTATION_LOCKED_REVERSED_LANDSCAPE` |

## دریافت نتیجه تبلیغ جایزه‌ای
در تبلیغات جایزه‌ای در صورتی که متفییر `completed` در متد `onRewarded` هنگام نمایش تبلیغ `true` باشد می‌توانید جایزه را به کاربر بدهید.
