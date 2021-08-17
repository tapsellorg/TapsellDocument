---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در اندروید
lang: fa
permalink: /tapsell-sdk/android/rewarded-interstitial/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/android/rewarded-interstitial/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

>پیاده‌سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.

## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.

## درخواست تبلیغ
با اجرای کد زیر می‌توانید درخواست یک تبلیغ بدهید.

```java
Tapsell.requestAd(CONTEXT,
        ZONE_ID,
        new TapsellAdRequestOptions(),
        new TapsellAdRequestListener() {
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
ورودی سوم `OPTIONS` از نوع `TapsellAdRequestOptions` است. تنظیمات زمان درخواست تبلیغ را از این طریق می‌توانید انجام بدهید.  
ورودی چهارم از نوع `TapsellAdRequestListener` است.  
  
متدهای `TapsellAdRequestListener` مطابق جدول زیر است و نتیجه درخواست تبلیغ با کمک این بخش برمیگردد.

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
TapsellAdRequestOptions options = new TapsellAdRequestOptions();
options.setCacheType(CACHE_TYPE);
```
مقدار `CACHE_TYPE` میتواند برابر مقادیر زیر باشد.

| توضیحات | مقدار |
| - | - |
| هنگام نمایش تبلیغ، شروع به دانلود ویدیو میکند | `TapsellAdRequestOptions.CACHE_TYPE_STREAMED` |
| قبل از نمایش تبلیغ، ویدیو را دانلود میکند | `TapsellAdRequestOptions.CACHE_TYPE_CACHED` |

>تنها زمانی از `CACHE_TYPE_CACHED` استفاده کنید که احتمال دیدن ویدیو توسط کاربر زیاد باشد، تا مصرف اینترنت بالا نرود.

## نمایش تبلیغ
برای نمایش تبلیغ از تابغ زیر استفاده کنید.

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
ورودی چهارم از نوع `TapsellShowOptions` است. تنظیمات زمان نمایش تبلیغ را از این طریق می‌توانید انجام بدهید.  
ورودی پنجم از نوع `TapsellAdShowListener` است. مراحل نمایش تبلیغ را از این طریق می‌توانید دریافت کنید.  

متدهای `TapsellAdShowListener` مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| هنگام باز شدن تبلیغ صدا زده میشود. | `onOpened` |
| هنگام بسته شدن تبلیغ صدا زده میشود. | `onClosed` |
| زمانی که خطایی در پروسه نمایش تبلیغ پیش بیاید صدا زده میشود. | `onError` |
| وضعیت دریافت جایزه در تبلیغات جایزه‌ای را نشان میدهد. | `onRewarded` |

### تنظیمات نمایش
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

## دریافت نتیجه تبلیغ جایزه‌ای
در تبلیغات جایزه‌ای در صورتی که متفییر `completed` در متد `onRewarded` هنگام نمایش تبلیغ `true` باشد می‌توانید جایزه را به کاربر بدهید.
