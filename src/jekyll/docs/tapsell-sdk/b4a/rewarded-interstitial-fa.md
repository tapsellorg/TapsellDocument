---
layout: classic-docs
title: تبلیغات جایزه‌ای و آنی در Basic4Android
lang: fa
permalink: /yelloadwise-core/b4a/rewarded-interstitial/index.html
toc: true # table of contents
---
پیاده سازی تبلیغات جایزه‌ای و آنی (هم ویدیو‌ و هم بنری) به یک صورت است. فقط کافی است نوع تبلیغگاه را از پنل انتخاب کنید.

## ساخت تبلیغگاه
ابتدا از [پنل یلوادوایز](https://dashboard.yelloadwise.ir/) یک تبلیغ‌گاه از نوعی که مایل هستید بسازید.

## درخواست تبلیغ
نمایش یک تبلیغ ویدئویی در اپلیکیشن به دو صورت ممکن است صورت پذیرد. یک روش، نمایش تبلیغ بصورت stream می‌باشد. در این حالت، همزمان که کاربر در حال مشاهده بخشی از تبلیغ است، ادامه آن از اینترنت لود می‌گردد. ممکن است به دلیل کندی سرعت اینترنت، در این حالت کاربر با مکث‌های متعددی در هنگام دریافت و مشاهده تبلیغ مواجه شود. برای اینکه کاربر در هنگام نمایش تبلیغ منتظر نماند و تجربه کاربر در استفاده از اپلیکیشن بهبود یابد، روش دیگری نیز در SDK یلوادوایز تعبیه شده است که در آن ابتدا فایل ویدئوی تبلیغاتی بطور کامل بارگذاری شده و سپس تبلیغ نمایش داده می‌شود.

همچنین در یلوادوایز، تبلیغ می‌تواند در ناحیه‌های مختلفی از برنامه شما (مانند فروشگاه، انتهای هر مرحله، ابتدای مرحله جهت دریافت امتیاز دوبرابر، دریافت بنزین/لایف و …) پخش شود. در یلوادوایز به این ناحیه‌ها zone گفته می‌شود. ناحیه‌های هر اپلیکیشن در پنل یلوادوایز تعریف می‌شوند.

با اجرای تابع زیر، می‌توانید یک درخواست تبلیغ به یلوادوایز ارسال کرده و یک تبلیغ دریافت نمایید:   

```visualbasic
Yelloadwise.requestAd(zoneId,isCached)
```   

هر درخواست شامل یک ورودی `zoneId` است که برای استفاده از ناحیه پیش فرض می‌توانید از یک رشته خالی استفاده نمایید. اطلاعات بیشتر درباره نواحی نمایش تبلیغ را می‌توانید از تیم فنی یلوادوایز دریافت کنید. ورودی `isCached` یک متغیر `Boolean` می‌باشد که نشان می‌دهد که آیا تبلیغ باید ابتدا دانلود شده و سپس به کاربر نشان داده شود یا خیر.     

نتیجه درخواست بصورت Event به یک Sub در برنامه شما بازگردانده می‌شود. در صورت وجود یک تبلیغ، شناسه آن تبلیغ به یک ساب‌روتین (Sub) با نام `yelloadwise_onAdAvailable` در کد شما داده می‌شود و می‌بایست آن را جهت نمایش تبلیغ ذخیره نمایید. در گام بعدی همه روتین‌های مورد استفاده در یلوادوایز آورده و توضیح داده شده‌اند.

## اضافه کردن Subهای دریافت نتیجه درخواست تبلیغ
در Activity پروژه خطوط زیر را اضافه کنید:   

```visualbasic
Sub yelloadwise_onAdAvailable (zoneId As String, adId As String)
    ' ad is available to show, store adId to show it later
    ad = adId
End Sub

Sub yelloadwise_onNoAdAvailable (zoneId As String)
    ' No ad available now
End Sub

Sub yelloadwise_onNoNetwork (zoneId As String)
    ' No network
End Sub

Sub yelloadwise_onError (zoneId As String, error As String)
    ' Encountered and error while connecting to yelloadwise
End Sub

Sub yelloadwise_onExpiring (zoneId As String, adId As String)
    ' The stored ad with given adId is expiring and cannot be shown anymore
    ad = Null
End Sub

Sub yelloadwise_onOpened (zoneId As String, adId As String)
    ' The ad is being opened (shown)
End Sub

Sub yelloadwise_onClosed (zoneId As String, adId As String)
    ' The ad is being closed and ad show has finished, returning to user's Activity
End Sub
```

توضیحات روتین‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است.

مقدار `CACHE_TYPE` میتواند برابر مقادیر زیر باشد.

| تابع | توضیحات (زمان اجرا) |
| - | - |
| `yelloadwise_onError(String)` | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |
| `yelloadwise_onAdAvailable(String, String)` | زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد. |
| `yelloadwise_onNoAdAvailable(String)` | در صورتی که تبلیغی برای نمایش وجود نداشته باشد. |
| `yelloadwise_onNoNetwork(String)` | زمانی که دسترسی به شبکه موجود نباشد. |
| `yelloadwise_onExpiring(String, String)` | زمانی که تبلیغ منقضی شود. هر تبلیغ مدت زمان مشخصی معتبر است و در صورتی که تا قبل از آن نمایش داده نشود منقضی شده و دیگر قابل نمایش نخواهد بود. |
| `yelloadwise_onOpened(String, String)` | زمانی که تبلیغ شروع به پخش شود. |
| `yelloadwise_onClosed(String, String)` | زمانی که پخش تبلیغ تمام شود و کاربر به اکتیویتی برنامه/بازی باز می گردد. |


## نمایش تبلیغ

جهت نمایش تبلیغ، می‌توانید از تابع زیر استفاده نمایید. این تابع حداکثر یک بار برای هر شناسه تبلیغ قابل اجراست).

```visualbasic
yelloadwise.showAd(adId,back_disabled,immersive_mode,rotation_mode,show_dialog)
```

ورودی اول شناسه تبلیغ است که در گام قبل و در روتین `yelloadwise_onAdAvailable` به شما داده شده است.   
ورودی‌های `disable_back` و `immersive_mode` از نوع `Boolean` هستند که جهت قفل کردن کلید back گوشی در هنگام نمایش تبلیغ جایزه‌دار و همینطور نمایش تبلیغ در حالت Immersive Mode (عدم نمایش دکمه‌های روی اسکرین و نمایش ویدئو بصورت Fullscreen در اندروید 4.4 و بالاتر) بکار می‌روند.   
ورودی `show_dialog` نیز یک متغیر `Boolean` است که در صورتی که مقدار آن برابر `True` باشد، در هنگام زدن دکمه Back در زمان نمایش ویدئو جایزه‌دار، یک اخطار به کاربر نشان داده می‌شود.   
ورودی `rotation_mode` برای تعیین جهت‌ نمایش ویدئو در دستگاه ( Orientation ) بکار می‌رود و مقادیر مختلف قابل استفاده برای آن در جدول ۲ آمده است.

| مقدار | توضیحات |
| - | - |
| `yelloadwise.ROTATION_LOCKED_PORTRAIT` | نمایش ویدئو در حالت Portrait |
| `yelloadwise.ROTATION_LOCKED_LANDSCAPE` | نمایش ویدئو در حالت Landscape |
| `yelloadwise.ROTATION_UNLOCKED` | تعدم قفل کردن چرخش گوشی |
| `yelloadwise.ROTATION_LOCKED_REVERSED_PORTRAIT` | نمایش ویدئو در حالت Reversed Portrait |
| `yelloadwise.ROTATION_LOCKED_REVERSED_LANDSCAPE` | نمایش ویدئو در حالت Reversed Landscape |

## دریافت نتیجه نمایش تبلیغ
نتیجه نمایش تبلیغ، در یک Sub با نام `yelloadwise_onAdShowFinished` در Activity به شما برگردانده می‌شود. لذا باید این Sub را به کد خود اضافه کنید.

```visualbasic
Sub yelloadwise_onAdShowFinished (zoneId As String, adId As String, completed As Boolean, rewarded As Boolean)
    'showing ad was finished'
End Sub
```
در نتیجه‌ی دریافت شده، `adId` و `zoneId` شناسه مربوط به تبلیغ و محل نمایش آن در اپلیکیشن است. دو متغیر `completed` و `rewarded` از نوع `Boolean` بوده و نشان دهنده‌ی این است که کاربر ویدئو را تا انتها مشاهده کرده است یا خیر و تبلیغ نمایش داده شده از نوع جایزه‌دار بوده است یا خیر. در صورتی که کاربر تبلیغی از نوع جایزه دار را تا انتها مشاهده کند و هردو مقدار `completed` و `rewarded` برابر با `True` باشند، ، باید جایزه درون برنامه (سکه، اعتبار، بنزین یا …) را به کاربر بدهید.


کاربرد هر یک از این متدها مطابق جدول زیر است.

| متد | عملکرد |
| - | - |
| `setBackDisabled` | غیر فعال کردن دکمه بازگشت در هنگام نمایش |
| `setImmersiveMode` | فعال کردن حالت Immersive هنگام نمایش |
| `setShowDialog` | نمایش دیالوگ اخطار هنگام بستن تبلیغ قبل از اتمام ویدیو |
| `setRotationMode` | تعیین جهت گوشی هنگام نمایش |
  
  
مقادیری که میتوانید به `setRotationMode` بدهید مطابق جدول زیر است.

| مقدار | توضیحات |
| - | - |
| `ROTATION_LOCKED_PORTRAIT` | عمودی |
| `ROTATION_LOCKED_LANDSCAPE` | افقی |
| `ROTATION_LOCKED_REVERSED_PORTRAIT` | عمودی برعکس |
| `ROTATION_LOCKED_REVERSED_LANDSCAPE` | افقی برعکس |

## دریافت نتیجه تبلیغ جایزه‌ای
جهت دریافت نتیجه تبلیغات ویدیو جایزه‌ای مطابق روش زیر عمل کنید.
```visualbasic
Sub yelloadwise_onAdShowFinished (zoneId As String, adId As String, completed As Boolean, rewarded As Boolean)
    ' showing ad was finished
End Sub
```
در صورتی که مقدار `completed` برابر با `true` باشد و تبلیغ از نوع جایزه‌دار `ad.isRewardedAd() == true`، میتوانید جایزه را (سکه/اعتبار/بنزین/…) به کاربر بدهید.
