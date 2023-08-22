---
layout: classic-docs
title: راه اندازی تپسل پلاس در B4A
lang: fa
permalink: /plus-sdk/b4a/initialize/index.html
toc: true # table of contents
---

> در صورت وجود مشکل یا ابهام به [لیست خطاهای فنی رایج]({{ site.baseurl }}/faq/plus-sdk/b4a/) مراجعه کنید یا صفحه‌ی [Github Issues](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) را بررسی نمایید.
{:data-title="نکته Build پروژه" data-color="red"}

## دریافت پکیج تپسل پلاس

پکیج نسخه‌ی نهایی تپسل پلاس را از
[**این لینک**](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/releases/download/v2.2.0/TapsellPlusB4A-2.2.0.zip)
دریافت کنید.

![version](https://img.shields.io/github/v/release/tapsellorg/TapsellPlusSDK-B4aPlugin?label=tapsellplus-b4a&style=plastic)

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

> در صورتی که هنگام فعال کردن کتابخانه پیام خطایی چاپ شد آنرا در [لیست خطاهای احتمالی](https://github.com/tapsellorg/TapsellPlusSDK-B4APlugin/issues?q=is%3Aissue) جست جو کنید
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


### اضافه‌کردن مانیفست

ابتدا به `Manifest Editor` رفته و کد زیر را اضافه کنید:

```vb
CreateResourceFromFile(Macro, TapsellPlusB4A.Essential)
```

> مانیفست `TapsellPlusB4A.Essential` مواد ضروری برای تپسل پلاس و بدون هیچ ادنتورکی جز تپسل را اضافه می‌کند.  
> برای اضافه کردن ادنتورک‌ها بایستی مانیفست آنها را نیز اضافه کنید که در [شبکه‌های تبلیغاتی](/plus-sdk/b4a/add-adnetworks/index.html) در مورد آنها خواهید خواند.
{:data-title="نکته‌ی مهم در مورد مانیفست" data-color="blue"}

### فعالسازی MultiDex

سپس در فایل پروژه خط زیر را در `Region project attributes` قرار دهید:

```vb
#MultiDex: true
```


> پیاده سازی شده‌ی این مورد در سمپل پروژه از [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-B4ASample/blob/c3db2c060e6cf9d1627c4d4a0aaa397fb8444f23/tapsell.b4a#L25) قابل دسترسی ست.
{:data-title="مثال در نمونه کد" data-color="green"}



### اضافه‌کردن کد Initialization

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

> در صورت موفقیت آمیز بودن این پروسه بعد از چند ثانیه کالبک `TapsellPlus_OnSuccess` صدا زده می‌شود.
{:data-title="کالبک Initialization" data-color="green"}


با استفاده از کد `tapsellPlus.SetDebugMode(3)` می‌توانید لاگ‌های کالبک را هنگام بروز خطا، بصورت واضح‌تر مشاهده نمایید.
{:data-title="DebugMode برای لاگ‌های بهتر" data-color="blue"}

## (اختیاری) تنظیمات اضافه کالبک‌ها

> از [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-B4ASample/blob/0ed4cf5b1ec275061b20e600a87eae47b29b1c49/tapsell.b4a#L155) به پیاده سازی نمونه در گیتهاب مراجعه کنید
{:data-title="نمونه پیاده سازی" data-color="green"}


هنگام درخواست تبلیغ رخدادهای مختلف به شما گزارش داده می‌شود (مانند تکمیل، بسته شدن یا خطا).  
برای دریافت این اطلاعات بایستی کالبک‌های زیر را در برنامه اضافه کنید:

```vb

Sub TapsellPlus_OnSuccess
	Log("TapsellPlus is initialized successfully")
End Sub

Sub TapsellPlus_OnResponse(zoneId As String, responseId As String)
	' Save the responseId - This is needed if you call request, THEN show (not requetsAndShow)
	Log("Requesting ad successfull. ResponseId (that must be saved) is: " & responseId)
End Sub

Sub TapsellPlus_OnClosed(zoneId As String, responseId As String)
	Log("An Ad was close. It's responseId is: " & responseId)
End Sub

Sub TapsellPlus_OnOpened(zoneId As String, responseId As String)
	Log("An Ad was opened. ResponseId of ad: " & responseId)
End Sub

Sub TapsellPlus_OnRewarded(zoneId As String, responseId As String)
	Log("Rewarded ad has seen compoletely. You can reward the user: " & responseId) 
End Sub

Sub TapsellPlus_OnError(error As String)
	Log("An Error occurred when either initializing, requesting or showing ad Ad. Error is: " & error)
End Sub
```

از نسخه‌ی ۲.۱.۴ به بعد به کالبک‌ها ZoneId نیز اضافه شده است. هنگام استفاده پارامتر کالبک‌ها را درست قرار دهید
{:data-title="کالبک‌های تبلیغ" data-color="orange"}


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
