---
layout: classic-docs
title: خطاهای فنی رایج در B4A
toc: true
permalink: /faq/plus-sdk/b4a/
lang: fa
---


در این بخش خطاهایی که ممکن‌ است در مراحل مختلف راه‌اندازی تپسل در B4A با آن‌ها مواجه شوید به همراه راه‌ حل ذکر شده‌اند.

> **خطای مورد نظر شما در این صفحه مطرح نشده است؟** در [قسمت Issues گیت‌هاب](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) جستجو کنید و در صورت نیافتن در آنجا [مورد جدیدی](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues/new/choose) مطرح کنید.
{:data-title="نکته" data-color="red"}

### خطای 403

در صورتیکه در فرایند بیلد اپ خود، دانلود پلاگین های Gradle یا وابستگی های دیگر به دلیل عدم داشتن دسترسی مجاز، تحریم یا مشکلات مربوط به IP ایران، با خطای 403 مواجه شود، سینک پروژه به مشکل خورده و با خطای `Gradle Project Sync Failed` مواجه خواهید شد. یکی از روش های رفع این مشکل، استفاده از ابزار [shecan](https://shecan.ir/) می‌باشد.

### گرفتن لاگ اندروید

برای گرفتن لاگ نیتیو اندروید روش های مختلفی وجود دارد. یکی از این روش ها استفاده از `ADB` است. ابتدا لازم است آن را به متغیر های سیستم خود اضافه کنید. سپس در محیط ترمینال کد زیر را وارد کنید:

`adb logcat -v color`

روش دیگر استفاده از ابزار `LogCat` در نرم‌افزار `Android Studio` می‌باشد.

### Uncaught translation error: IllegalArgumentException: already added: …
این خطا به دلیل conflict دو یا بیشتر از لایبرری‌های اضافه‌شده به پروژه رخ می‌دهد.

با توجه به اینکه تپسل لایبرری‌ها را با استفاده از Maven اضافه می‌کند، به احتمال زیاد لایبرری‌های دیگر از Maven استفاده نکرده‌اند. بایستی فایل xml لایبرری‌هایی که اضافه کرده‌اید را باز کنید و لایبرری‌ها را در صورت امکان به Maven تبدیل کنید.

### خطای All Ad Networks Returned Error
> توصیه می‌شود که به نسخه‌ی ۲.۱.۶ بروزرسانی کنید و با کد `tapsellPlus.SetDebugMode(3)` اطلاعات بیشتری در مورد خطا کسب کنید

این خطا زمانی رخ می دهد که هیچکدام از شبکه های تبلیغاتی که برای شما فعال است نتوانند تبلیغی رو آماده کنند
اگر زمان نمایش تبلیغ این خطا رو مشاهده کردید، مطمئن شوید که Id ای که به تابع به عنوان ورودی به تابع می دهید دقیقا با مقداری که از response درخواست تبلیغ گرفتید یکسان باشد. 
اگر زمان درخواست تبلیغ این خطا را مشاهده کردید احتمال این که شبکه تبلیغاتی به درستی برای شما فعال نشده باشد است. 
در این صورت مسئله را با تیم پشتیبانی در میان بگذارید


### خطای Error inflating class com.google.android.gms.ads.nativead.NativeAdView Caused by: java.lang.ClassNotFoundException: Didn't find class "com.google.android.gms.ads.nativead.NativeAdView

این خطا زمانی اتفاق می‌افتد که از ادنتورک AdMob در پرژه خود استفاده کرده باشید، اما وابستگی `play-services-ads` را به پروژه اضافه نکرده باشید. برای رفع آن لازم است تا این وابستگی را به صورت زیر در بخش `Region  Project Attributes` اضافه کنید.
> ```py
> # Region  Project Attributes
>     #AdditionalJar: com.google.android.gms:play-services-ads-lite
> #End Region
> ```
> همچنین لازم است محتوای زیر را به `Manifest editor` پروژه اضافه کنید
> ```vb
> CreateResourceFromFile(Macro, TapsellPlusB4A.AdMob)
>```
