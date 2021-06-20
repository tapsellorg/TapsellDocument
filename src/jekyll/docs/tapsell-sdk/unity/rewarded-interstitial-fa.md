---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در یونیتی
lang: fa
permalink: /tapsell-sdk/unity/rewarded-interstitial/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/unity/main/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

پیاده سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.


## ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر میتوانید درخواست یک تبلیغ بدهید.

```c#
Tapsell.RequestAd(zoneId, cached, Action<TapsellAd> onAdAvailableAction,
    Action<string> onNoAdAvailableAction, Action<TapsellError> onErrorAction,
    Action<string> onNoNetworkAction, Action<TapsellAd> onExpiringAction);
```

ورودی اول `zoneId` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
ورودی دوم `cached` یک متغیر `bool` (با مقدار `True/False`) می‌باشد که نشان می‌دهد که آیا تبلیغ باید ابتدا دانلود شده و سپس به کاربر نشان داده شود یا خیر.  
ورودی سوم `onAdAvailable` که شناسه یک تبلیغ را برمیگرداند که می‌بایست جهت نمایش تبلیغ آن را ذخیره نمایید.  
  
اکشن‌های مختلف و شرایط اجرا شدن آن ها در جدول زیر آمده است:

| توضیحات | تابع |
| - | - |
| هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید | `onErrorAction(TapsellError)` |
| زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد | `onAdAvailableAction(TapsellAd)` |
| در صورتی که تبلیغی برای نمایش وجود نداشته باشد | `onNoAdAvailableAction (string)` |
| زمانی که دسترسی به شبکه موجود نباشد | `onNoNetworkAction (string)` |
| تبلیغ منقضی شده است | `onExpiring(TapsellAd)` |


## نمایش تبلیغ

هر تبلیغ یک شیء از نوع `TapsellAd` است که جهت نمایش آن‌، می‌توانید از تابع زیر استفاده نمایید. (این تابع حداکثر یک بار برای هر تبلیغ قابل اجراست)


```c#
Tapsell.ShowAd(ad, showOptions);
```

ورودی اول `ad` میباشد که در گام قبل و در اکشن `onAdAvailable` به شما داده شده‌است.  
ورودی دوم `showOptions` از نوع `TapsellShowOptions` است. تنظیمات زمان نمایش تبلیغ را از این طریق میتوانید بدهید.  

متدهای `TapsellAdShowListener` مطابق جدول زیر است.

| توضیحات | متغیر |
| - | - |
| در هنگام پخش تبلیغ دکمه‌ی بازگشت گوشی فعال باشد یا خیر | `backDisabled (bool)` |
| فعال‌سازی حالت Immersive در هنگام پخش تبلیغ (فقط در اندروید) | `immmersiveMode (bool)` |
| تنظیمات حالت چرخش موبایل | `rotationMode (int)` |
| نمایش دیالوگ اخطار در هنگام بازگشت از تبلیغات جایزه‌دار | `showDialog (bool)` |


### تنظیمات نمایش
تنظیمات زمان نمایش را میتوانید مطابق روش زیر با کمک ورودی `TapsellShowOptions` تغییر دهید.
```java
TapsellShowOptions showOptions = new TapsellShowOptions ();
showOptions.backDisabled = false;
showOptions.immersiveMode = false;
showOptions.rotationMode = TapsellShowOptions.ROTATION_UNLOCKED;
showOptions.showDialog = true;
showOptions.setRotationMode(ROTATION_MODE);
```

به هر یک از متدهای بالا میتوانید مقدار `true` یا `false` را بدهید تا آن قابلیت فعال یا غیر فعال بشود. مقادیر قابل انتخاب برای `setRotationMode` پایینتر توضیح داده شده‌اند.  

کاربرد هر یک از این متدها مطابق جدول زیر است.

| عملکرد | متد |
| - | - |
| غیر فعال کردن دکمه بازگشت در هنگام نمایش | `backDisabled` |
| فعال کردن حالت Immersive هنگام نمایش | `immersiveMode` |
| نمایش دیالوگ اخطار هنگام بستن تبلیغ قبل از اتمام ویدیو | `showDialog` |
| تعیین جهت گوشی هنگام نمایش | `setRotationMode` |
  

مقادیری که میتوانید به `rotationMode` بدهید مطابق جدول زیر است.

| توضیحات | مقدار |
| - | - |
| عمودی | `ROTATION_LOCKED_PORTRAIT` |
| افقی | `ROTATION_LOCKED_LANDSCAPE` |
| بر اساس وضعیت گوشی | `ROTATION_UNLOCKED` |
| عمودی برعکس | `ROTATION_LOCKED_REVERSED_PORTRAIT` |
| افقی برعکس | `ROTATION_LOCKED_REVERSED_LANDSCAPE` |


## دریافت نتیجه تبلیغ جایزه‌ای
جهت دریافت نتیجه تبلیغات ویدیو جایزه‌ای مطابق روش زیر عمل کنید.
```c#
Tapsell.SetRewardListener( (TapsellAdFinishedResult result) => 
    {
		// you may give rewards to user if result.completed and
		// result.rewarded are both true
    }
);
```
پس از نمایش تبلیغ، اکشن `onAdShowFinished` اجرا می‌شود و نتیجه نمایش تبلیغ بصورت یک شی از کلاس `TapsellAdFinishedResult` بازگردانده می‌شود. درصورتیکه تبلیغ نمایش داده شده جایزه‌دار باشد، متغیر `rewarded` در این شی دارای مقدار `true` خواهد بود. همچنین درصورتیکه تبلیغ تا انتها دیده شود، متغیر `completed` در این شی دارای مقدار `true` خواهد بود. در صورتی که تبلیغ جایزه‌دار باشد و مشاهده ویدئو تا انتها انجام شده باشد، باید جایزه درون برنامه (سکه، اعتبار، بنزین یا …) را به کاربر بدهید.