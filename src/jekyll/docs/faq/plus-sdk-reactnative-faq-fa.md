---
layout: classic-docs
title: خطاهای فنی رایج در React Native
toc: true
permalink: /faq/plus-sdk/reactnative/
lang: fa
---

در این بخش خطاهایی که ممکن‌ است در مراحل مختلف راه‌اندازی تپسل در React Native با آن‌ها مواجه شوید به همراه راه‌ حل ذکر شده‌اند.

> **خطای مورد نظر شما در این صفحه مطرح نشده است؟** در [قسمت Issues گیت‌هاب](https://github.com/tapsellorg/TapsellPlusSDK-ReactNativePlugin/issues?q=is%3Aissue) جستجو کنید و در صورت نیافتن در آنجا [مورد جدیدی](https://github.com/tapsellorg/TapsellPlusSDK-ReactNativePlugin/issues/new/choose) مطرح کنید.
{:data-title="نکته" data-color="red"}

## خطای 403

در صورتیکه در فرایند بیلد اپ خود، دانلود پلاگین های Gradle یا وابستگی های دیگر به دلیل عدم داشتن دسترسی مجاز، تحریم یا مشکلات مربوط به IP ایران، با خطای 403 مواجه شود، سینک پروژه به مشکل خورده و با خطای `Gradle Project Sync Failed` مواجه خواهید شد. یکی از روش های رفع این مشکل، استفاده از ابزار [shecan](https://shecan.ir/) می‌باشد.

### گرفتن لاگ اندروید

برای گرفتن لاگ نیتیو اندروید روش های مختلفی وجود دارد. یکی از این روش ها استفاده از `ADB` است. ابتدا لازم است آن را به متغیر های سیستم خود اضافه کنید. سپس در محیط ترمینال کد زیر را وارد کنید:

`adb logcat -v color`

روش دیگر استفاده از ابزار `LogCat` در نرم‌افزار `Android Studio` می‌باشد.

همچنین می‌توانید از سایر پکیج های مفید `npm` از قبیل [LogKitty](https://www.npmjs.com/package/@talaikis/logkitty) نیز استفاده نمایید.

### خطاهای رایج ادموب

در این [لینک](https://support.google.com/admob/thread/3494603/admob-error-codes-logs?hl=en) خطاهای رایج ادموب توضیح داده شده است

## خطای Activity is Dead

 هنگام صدا زدن متد initialize , request و یا Show (تا قبل اینکه  Callback صدا زده بشه) اگر از Activity خارج شوید این خطا رخ می دهد.
زمانی که sdk یخواهد جوابی که از سمت سرور اومده رو به کاربر منتقل کند، ابتدا بررسی میکند Activity ای که تابع در آن صدا زده شده Destroy نشده باشد

## خطای App Id is not Valid

هنگام initialize کردن SDK مقدار appId (یا همان شناسه ای که از پنل دربافت کردید) معتبری نداشته باشه. 
توسط دیباگر میتوانید مطمئن بشوید که دقیقا همون مقداری که مدنظر هستش به تابع به عنوان ورودی داده شود

## خطای Tapsell Plus is not Initialized

این خطا زمانی که تابع request و یا show را صدا زدید ولی sdk هنوز initialize نشده است، رخ میدهد
 برای درخواست تبلیغ ابتدا توسط Callback های تابع initialize مطمئن شوید که sdk نصب شده(توسط یک متغییر) و قبل درخواست تبلیغ این موضوع رو با آن متغییر بررسی کنید
 
## خطای Zone Id is not Valid

این خطا زمانی رخ می دهد که request صدا زده میشود و ZoneId مقدار خالی داشته باشد. 
میتوانید با Debugger از مقداری که به عنوان ورودی به تابع می دهید مطمئن شوید

## خطای Previous Request is Still Trying

این خطا زمانی رخ می دهد که یک تبلیغ درخواست داده شده و بالافاصله (قبل اینکه جواب درخواست قبلی دربافت شود) مجددا درخواست تبلیغ بکنید

## خطای All Ad Networks Returned Error

این خطا زمانی رخ می دهد که هیچکدام از شبکه های تبلیغاتی که برای شما فعال هست نتوانند تبلیغی رو آماده کنند
اگر زمان نمایش تبلیغ این خطا رو مشاهده کردید، مطمئن شوید که Id ای که به تابع به عنوان ورودی به تابع می دهید دقیقا با مقداری که از response درخواست تبلیغ گرفتید یکسان باشد. 
اگر زمان درخواست تبلیغ این خطا را مشاهده کردید احتمال این که شبکه تبلیغاتی به درستی برای شما فعال نشده باشد است. 
در این صورت مسئله را با تیم پشتیبانی در میان بگذارید

## خطای adContainer should not be null

این خطا زمانی که میخواهید تبلیغ از نوع StandardBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید null نباشد و مقدار درستی داشته باشد

## خطای adHolder should not be null

این خطا زمانی که میخواهید تبلیغ از نوع NativeBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید null نباشد و مقدار درستی داشته باشد

## خطای Banner Type is not Valid

ابن خطا زمانی رخ می دهد مقدار سایز بنری که در نمایش تبلیغ StandardBanner به عنوان ورودی به تابع requestStandardBannerAd می دهید مقدار درستی ندارد
با Debugger میتوانید از صحت مقدار مطمئن شوید و حتما ار مقادیر TapsellPlusBannerType استفاده نمایید

## خطای adContainer should not have child

این خطا زمانی که میخواهید تبلیغ از نوع StandardBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید، داخل XML آن View دیگری نداشته باشد

## خطای AdShowListener Should not be null

این خطا زمانی که میخواهید تبلیغ را نمایش دهید رخ می دهد
مطمئن شوید که Callback مناسب را به عنوان ورودی به تابع میدهید

## خطای INVALID_BANNER_SIZE

این خطا برای هر کدام از شبکه های تبلیغاتی اگر رخ داد، به معنای آن است که مقدار درستی برای انداز بنری که میخواهید نمایش دهید به عنوان ورودی به تابع ندادید

## خطای No Waterfall in Cache and Waterfall API has Error

زمانی که که درخواست تبلیغ می دهید Sdk اگر لیست شبکه ها تبلیغاتی رو ذخیره نداشته باشد، سعی میکند که از سرور بگیرد. اگر این مرحله هم با موفقیت انجام نشود (به دلیل قطع شدن اینترنت) این خطا رو  Sdk نمایش می دهد


## خطای Error inflating class com.google.android.gms.ads.nativead.NativeAdView Caused by: java.lang.ClassNotFoundException: Didn't find class "com.google.android.gms.ads.nativead.NativeAdView

این خطا زمانی اتفاق می‌افتد که از ادنتورک AdMob در پرژه خود استفاده کرده باشید، اما وابستگی `play-services-ads` را به پروژه اضافه نکرده باشید. برای رفع آن لازم است تا این وابستگی را به صورت زیر در فایل `android/app/build.gradle` اضافه کنید.
> ```groovy
> dependencies {
>    def supportedAdmob = "20.6.0"
>    implementation("com.google.android.gms:play-services-ads:$supportedAdmob")
> }
> ```
