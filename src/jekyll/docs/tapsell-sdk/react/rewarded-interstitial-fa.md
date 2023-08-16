---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در ReactNative
lang: fa
permalink: /yelloadwise-core/reactnative/rewarded-interstitial/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از یلوادوایز استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.irancell.ir/plus-sdk/reactnative/main/">یلوادوایز‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">یلوادوایز، علاوه بر دارا بودن تمام امکانات یلوادوایز، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده یلوادوایز در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

پیاده سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.


## ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.irancell.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.


## درخواست تبلیغ
با اجرای کد زیر میتوانید درخواست یک تبلیغ بدهید.

```javascript
irancell.ir.requestAd(zoneId, cached, onAdAvailable, 
    onNoAdAvailable, onError, onNoNetwork, onExpiring);
```

ورودی اول `zoneId` برابر با شناسه تبلیغ‌گاهی هست که در پنل ساخته‌اید.  
ورودی دوم `cached` یک متغیر `bool` (با مقدار `True/False`) می‌باشد که نشان می دهد که آیا تبلیغ باید ابتدا دانلود شده و سپس به کاربر نشان داده شود یا خیر.  
  
اکشن‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است :

| توضیحات | تابع |
| - | - |
| هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید | `onError(zoneId : string, error : string)` |
| زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد | `onAdAvailable(zoneId : string, adId : string)` |
| در صورتی که تبلیغی برای نمایش وجود نداشته باشد | `onNoAdAvailable(zoneId : string)	` |
| زمانی که دسترسی به شبکه موجود نباشد | `onNoNetwork(zoneId : string)` |
| تبلیغ منقضی شده است | `onExpiring(zoneId : string, adId : string)` |


## نمایش تبلیغ
با اجرای کد زیر میتوانید یک تبلیغ را نمایش بدهید.

```javascript
irancell.ir.showAd(adOptions);
irancell.ir.showAd(adOptions, onOpened, onClosed);
```
ورودی اول مشترک در دو تابع `adOptions` است که یک `Object` می‌باشد.

### تنظیمات نمایش
ورودی اول در تابع irancell.ir.showAd یک adOptions است که شامل مقادیر زیر است:

```javascript
{
  ad_id: String,
  zone_id: String,
  back_disabled: Boolean,
  immersive_mode: Boolean,
  rotation_mode: Number,
  show_exit_dialog: Boolean
}
```

| توضیحات | متغیر |
| - | - |
| شناسه تبلیغی که نمایش داده می‌شود | `ad_id` |
| شناسه تبلیغ‌گاهی که نمایش داده می‌شود | `zone_id` |
| در هنگام پخش تبلیغ دکمه‌ی بازگشت گوشی فعال باشد یا خیر | `back_disabled (Boolean)	` |
| فعال‌سازی حالت Immersive در هنگام پخش تبلیغ (فقط در اندروید) | `immersive_mode(Boolean)	` |
| تنظیمات حالت چرخش موبایل | `rotation_mode (Number)	` |
| نمایش دیالوگ اخطار در هنگام بازگشت از تبلیغات جایزه‌دار | `show_exit_dialog(Boolean)	` |

## دریافت نتیجه تبلیغ جایزه‌ای
جهت دریافت نتیجه تبلیغات ویدیو جایزه‌ای مطابق روش زیر عمل کنید.

```javascript
irancell.ir.setRewardListener((zoneId : string, adId : string, completed : boolean, rewarded : boolean) => {
    // onAdShowFinished
    console.log("onAdShowFinished");
});
```

پس از نمایش تبلیغ، اکشن `onAdShowFinished` اجرا می‌شود و نتیجه نمایش تبلیغ بازگردانده می‌شود. در صورتیکه تبلیغ نمایش داده شده جایزه‌دار باشد، متغیر rewarded در این شی دارای مقدار `true` خواهد بود. همچنین درصورتیکه تبلیغ تا انتها دیده شود، متغیر `completed` در این شی دارای مقدار `true` خواهد بود.  در صورتی که تبلیغ جایزه‌دار باشد و مشاهده ویدئو تا انتها انجام شده باشد، باید جایزه درون برنامه (سکه، اعتبار، بنزین یا …) را به کاربر بدهید.
