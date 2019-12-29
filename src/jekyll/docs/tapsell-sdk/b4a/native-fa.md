---
layout: classic-docs
title: پیاده سازی تبلیغات Basic4Android
lang: fa
permalink: /tapsell-sdk/b4a/native/index.html
toc: true
---
### ساخت تبلیغگاه
ابتدا از [پنل تپسل](https://dashboard.tapsell.ir/) یک تبلیغگاه (zone) همسان بسازید و `zoneId` را زمان درخواست و نمایش تبلیغ استفاده کنید.

### ایجاد Layout تبلیغ هم‌نما
در تبلیغات هم‌نما، شما قادر هستید ویژگی‌های ظاهری هر یک از اجزای تبلیغ (اندازه، محل قرارگیری، رنگ فونت و…) را بصورتی که هماهنگ با محتوای اپلیکیشن شما باشد تعیین کنید. لذا باید Layout هم‌نما اپلیکیشن خود را که مدنظرتان است ایجاد نموده و از آن برای نمایش تبلیغ استفاده نمایید. این Layout می‌تواند شامل یک لوگو، یک عنوان، توضیحات، یک نشانگر آگهی بودن، یک بنر و یک دکمه برای دعوت از کاربر به انجام عمل تبلیغ باشد. جهت نمایش تبلیغ باید این اجزا را به SDK تپسل بدهید تا تبلیغ را در آن نمایش دهد.

جهت ایجاد Layout تبلیغ هم‌نما می‌توانید از Designer استفاده کرده و یک قالب مانند زیر آماده کنید.   


### درخواست تبلیغ
در تپسل، تبلیغ می تواند در ناحیه‌های مختلفی از برنامه شما (مانند منو اصلی، بین پست‌ها و …) پخش شود. در تپسل به این ناحیه‌ها zone گفته می شود. ناحیه‌های هر اپلیکیشن در داشبورد تپسل تعریف می شوند.   
با اجرای تابع زیر، می‌توانید یک درخواست تبلیغ به تپسل ارسال کرده و یک تبلیغ دریافت نمایید:


```java
tapsell.requestNativeBannerAd(zoneId)
}
```

هر درخواست شامل یک ورودی شناسه تبلیغ‌گاه (zoneId) است که نشانگر محل نمایش تبلیغ در اپلیکیشن شماست. تبلیغ‌گاه مرتبط با این شناسه در داشبورد تپسل باید از نوع بنری هم‌نما باشد.   
نتیجه درخواست بصورت Event به یک Sub در برنامه شما بازگردانده می‌شود. در صورت وجود یک تبلیغ، شناسه آن تبلیغ به یک ساب‌روتین (Sub) با نام Tapsell_onNativeBannerAdAvailable در کد شما داده می‌شود و می‌بایست آن را جهت نمایش تبلیغ ذخیره نمایید. در گام بعدی همه روتین‌های مورد استفاده در تپسل آورده و توضیح داده شده‌اند.   

### اضافه کردن روتین‌های دریافت نتیجه درخواست تبلیغ
در Activity اصلی خود خطوط زیر را اضافه کنید:
```java
Sub Tapsell_onNativeBannerAdAvailable (zoneId As String, adId As String)
    ' Native ad is available and ready to show
    ad = adId
End Sub

Sub Tapsell_onNoNativeBannerAdAvailable (zoneId As String)
    ' No ad available now
End Sub

Sub Tapsell_onNoNetwork (zoneId As String)
    ' No network
End Sub

Sub Tapsell_onError (zoneId As String, error As String)
    ' Encountered and error while connecting to tapsell
End Sub
```

توضیحات روتین‌های مختلف و شرایط اجرا شدن آن‌ها در جدول زیر آمده است.
| تابع | توضیحات (زمان اجرا) |
| - | - |
| Tapsell_onError(String) | هنگامی که هر نوع خطایی در پروسه‌ی دریافت تبلیغ بوجود بیاید |
| Tapsell_onNativeBannerAdAvailable(String, String)	| زمانی که تبلیغ دریافت شده و آماده‌ی نمایش باشد. |
| Tapsell_onNoNativeBannerAdAvailable(String) | در صورتی که تبلیغی برای نمایش وجود نداشته باشد. |
| Tapsell_onNoNetwork(String) | زمانی که دسترسی به شبکه موجود نباشد. |


### نمایش تبلیغ
جهت نمایش تبلیغ، می‌توانید از تابع زیر استفاده نمایید (این تابع حداکثر یک بار برای هر شناسه تبلیغ قابل اجراست) :


```java
tapsell.fillNativeBannerAd(adId,lblTitle,lblDescription,ivBanner,ivLogo,btnCallToAction,lblSponsored,adContainer)
}                
```

ورودی `adId` شناسه تبلیغ است که در گام قبل و در روتین Tapsell_onNativeBannerAdAvailable به شما داده شده‌است. ورودی‌های بعدی از نوع `ImageView`، `Label`، `Panel` و یا `Button` هستند که به ترتیب نشانگر عنوان تبلیغ، توضیحات تبلیغ، پنل نمایش ویدئو، لوگو، دکمه دعوت از کاربر و نشانگر آگهی بودن می‌باشند. آخرین ورودی نیز Panel دربرگیرنده تبلیغ هست که اختیاری بوده و می‌تواند Null باشد.
برای نمایش تبلیغ حتما باید عنوان و یکی از دو مورد دکمه دعوت از کاربر و Panel دربرگیرنده به SDK ارسال شوند.