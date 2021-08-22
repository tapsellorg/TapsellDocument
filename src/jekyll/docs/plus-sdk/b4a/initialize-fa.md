---
layout: classic-docs
title: راه اندازی تپسل پلاس در Basic4Android
lang: fa
permalink: /plus-sdk/b4a/initialize/index.html
toc: true # table of contents
---

> در صورت وجود مشکل یا ابهام به [لیست سوالات](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) مراجعه کنید و در صورت نیاز به پرسش سوال جدید از [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues/new) استفاده کنید.
{:data-title="نکته Build پروژه" data-color="red"}

## دریافت پکیج تپسل پلاس

پکیج نسخه‌ی نهایی تپسل پلاس را از
[**این لینک**](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/releases)
دریافت کنید.

برای مشاهده‌ی تمام نسخه‌های منتشر شده به
[صفحه‌ی دانلودها](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/releases)
مراجعه کنید

## اضافه‌کردن به B4A

> - نسخه‌ی پیشنهادی B4A نسخه‌ی ۱۱.۰ می‌باشد  
> - از ریسورس‌های پیشنهادی خود B4X برای پروژه‌ی خود استفاده کنید. ([لینک](https://www.b4x.com/b4a.html))
{:data-title="ریسورس‌های پروژه" data-color="green"}


فایل دانلودی یک
zip
است که ابتدا آن‌را اکسترکت خواهید کرد.

محتوای فایل زیپ:  
- `TapsellPlusB4A.jar`
- `TapsellPlusB4A.xml`
- `libs/`

دو فایل
TapsellPlusB4A
را در پوشه‌ی
Libraries
برنامه‌ی
B4A
قرار دهید

سپس پروژه‌ی خود را باز کرده و فولدر
**libs**
را بعنوان پوشه‌ی 
Additional libraries
به
B4A
معرفی کنید.

## اضافه‌کردن کتابخانه به پروژه
پس از اضافه‌شدن فایل‌ها به بخش
`Libraries`
مراجعه کرده و کتابخانه‌ی 
`TapsellPlusB4A`
را فعال کنید.

> در صورتی که هنگام فعال کردن کتابخانه پیام خطایی چاپ شد آنرا در [لیست خطاهای احتمالی](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) جستجو کنید
{:data-title="رخداد خطا" data-color="orange"}

همچنین کتابخانه‌ی
`OKHttp`
را نیز فعال کنید.

> در صورتی که این کتابخانه در B4A شما موجود نیست این خطوط را را فایل پروژه‌ی خود لحاظ کنید:
> 
> ```
> #Region Project Attributes 
> 	  ' ...
>     #AdditionalJar: okio-1.15.0.jar
>     #AdditionalJar: okhttp-3.12.13
> #End Region
> ```
> 
> در صورتی که OKHttp توسط لایبرری دیگری اضافه شده و خطای
> `Already added`
> چاپ شد، این دو خط را حذف کنید. زیرا این لایبرری‌ها توسط پکیج دیگری اضافه شده‌اند.
{:data-title="نبود پکیج OKHttp" data-color="orange"}

## فعالسازی تپسل پلاس
تا به این بخش این موارد بایستی انجام شده باشد:

- پکیج به درستی دانلود و قرارداده شده است
- هنگام فعال‌کردن لایبرری خطایی رخ نمی‌دهد
- بیلد‌کردن پروژه به خطا منجر نمی‌شود

همچنین:

- اپلیکیشن در [داشبورد تپسل پلاس](https://tapsell.ir/tapsellplus/) اضافه‌شود و `TapsellPlusAppId` برای استفاده کپی شده است

پس از این موارد، حال هنگام فعالسازی تپسل پلاس در کد پروژه است:

در بخش `Sub Globals` این کد را اضافه کنید:

```vb
Sub Globals
	Dim tapsellPlus As TapsellPlus
	Dim tapsellPlusAppId As String="کلید تپسل پلاس"
  ' ...

End Sub
```

و بجای `کلید تپسل پلاس` کلید خود را قرار دهید

سپس در `Sub Activity_Create` نیز این کد را قرار دهید:

```vb
Sub Activity_Create(FirstTime As Boolean)
  ' ...

  tapsellPlus.Initialize(tapsellPlusAppId)
End Sub
```


## (اختیاری) تنظیمات اضافه کالبک‌ها

هنگام درخواست تبلیغ رخدادهای مختلف به شما گزارش داده می‌شود (مانند تکمیل، بسته شدن یا خطا).  
برای دریافت این اطلاعات بایستی کالبک‌های زیر را در برنامه اضافه کنید:

```vb

Sub TapsellPlus_OnSuccess
	Log("TapsellPlus is initialized successfully")
End Sub

Sub TapsellPlus_OnResponse(responseId As String)
	' Save the responseId - This is needed if you call request, THEN show (not requetsAndShow)
	Log("Requesting ad successfull. ResponseId (that must be saved) is: " & responseId)
End Sub

Sub TapsellPlus_OnClosed(responseId As String)
	Log("An Ad was close. It's responseId is: " & responseId)
End Sub

Sub TapsellPlus_OnOpened(responseId As String)
	Log("An Ad was opened. ResponseId of ad: " & responseId)
End Sub

Sub TapsellPlus_OnRewarded(responseId As String)
	Log("Rewarded ad has seen compoletely. You can reward the user: " & responseId) 
  ' WARNING: Currently has issues and will not be called
End Sub

Sub TapsellPlus_OnError(error As String)
	Log("An Error occurred when either initializing, requesting or showing ad Ad. Error is: " & error)
End Sub
```

پس از اضافه کردن کدها برنامه را اجرا کنید. بایستی این اجرا بدون هیچ خطایی باشد و برنامه اجرا شود.  
در صورت رخداد هر نوع خطایی به [لیست خطاها](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) مراجعه کنید.  
در صورتی که خطای خود را پیدا نکردید [مورد جدید را مطرح کنید](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues/new).

## موارد مهم
### تنظیمات GDPR
از آن‌جا که کتابخانه‌ی تپسل پلاس قوانین GDPR را در خصوص نمایش تبلیغات شخصی‌سازی شده رعایت می‌کند، به طور پیش فرض اگر کاربر با IP یکی از کشورهای مشمول این قانون از اپلیکیشن شما استفاده کند، دیالوگی در این خصوص به کاربر نمایش می‌دهد. اگر تمایل دارید تا به جای تصمیم کاربر، خودتان دسترسی لازم را تعیین کنید می‌توانید از تکه کد زیر استفاده نمایید. توجه داشته باشید که این تکه کد می‌بایستی پس از Initialize شدن تپسل پلاس و پیش از درخواست تبلیغ صدا زده شود تا نتیجه‌ی آن در درخواست شما اعمال شده باشد. مقدار true‌ به این معنی است که شما حق استفاده از اطلاعات جهت نمایش تبلیغ شخصی‌سازی شده را به شبکه‌های تبلیغاتی داده‌اید.

```vb
tapsellPlus.SetGDPRConsent(True)
```

### دسترسی‌های اضافی

کتابخانه‌ی تپسل‌پلاس به جز اینترنت و WAKE_LOCK دسترسی دیگری از کاربر نمی‌گیرد. امّا به منظور بهبود عملکرد کتابخانه برای نمایش تبلیغات متناسب با هر کاربر می‌توانید دسترسی زیر را به اپلیکیشن خود اضافه نمایید. همچنین می‌بایستی دسترسی در [زمان اجرا](https://www.b4x.com/android/forum/threads/runtime-permissions-android-6-0-permissions.67689/#content) برای این مورد را نیز از کاربر بگیرید.

این دسترسی را به Manifest editor اضافه کنید:

```vb
AddPermission(android.permission.READ_PHONE_STATE)
```

---

برای درخواست تبلیغ به [صفحه‌ی اصلی](/plus-sdk/b4a/main/index.html) مراجعه کنید و تبلیغ مورد نظر را مطابق مستندات بسازید