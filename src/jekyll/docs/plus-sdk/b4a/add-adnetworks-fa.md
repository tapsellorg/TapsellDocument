---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/b4a/add-adnetworks/index.html
toc: true
---


سایر شبکه‌های تبلیغاتی را می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده‌سازی شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.


### Tapsell AdNetwork
این ادنتورک به طور پیش‌فرض اضافه شده است. برای استفاده از آن نیازی به کاری ندارید
### AdMob


> **نکته** برای استفاده از **AdMob**  
> 
> برای استفاده از ادنتورک **Google AdMob SDK** بایستی App ID آنرا در مانیفست اپلیکیشن قرار دهید.  
> لازم به ذکر است در صورت عدم وجود این تگ در مانیفست خطای `The Google Mobile Ads SDK was initialized incorrectly.` رخ خواهد داد
>
> برای اضافه کردن App ID ابتدا از یکی از راه‌های زیر این شناسه را از تپسل دریافت کنید (پیش از دریافت شناسه، شرایط فعال‌سازی شبکه‌های تبلیغاتی خارجی را در [این لینک](https://tapsell.ir/tapsellplus/) مطالعه نمایید):
> - ارسال ایمیل به `publishers [at] tapsell.ir`
> - ارسال تیکت به [دپارتمان ناشرین](https://tapsell.deskpro.com/new-ticket)
> - تماس با شماره تلفن **5-88206893** (داخلی ۳ - ناشرین)
> 
> سپس شناسه‌ی مورد نظر را با فرمت زیر در **Manifest editor** قرار دهید:
> 
> ```vb
> AddApplicationText(<meta-data
>    android:name="com.google.android.gms.ads.APPLICATION_ID"
>    android:value="ADMOB_ID"/>)
> 
> ```
> 
> به جای `ADMOB_ID` شناسه‌ی خود را قرار دهید  
>
> در صورت وجود ` TapsellPlusB4A.AdMobTestAppId` در مانیفست آنرا حتما حذف کنید.
{:data-title="استفاده از AdMob" data-color="red"}


## اضافه‌کردن پشتیبانی از ادنتورک‌ها
شما هنگام دانلود پکیج فایل‌های لازم را برای پشتیبانی از ادنتورک‌ها دانلود کرده‌اید و آنها بایستی در
`Additional libs`
قرار گرفته باشند.

حال برای استفاده از آنها بایستی فایل `AAR` یا `Jar` آنها به پروژه اضافه شوند (و همچنین مانیفست)

> در [پروژه‌ی نمونه‌ی تپسل پلاس](https://github.com/tapsellorg/TapsellPlusSDK-B4ASample) می‌توانید دقیق و با جزئیات پیاده‌سازی مانیفست را در Manifest editor آن مشاهده کنید
{:data-title="نمونه‌ی پیاده‌سازی شده‌ی مانیفست" data-color="blue"}



در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: com.google.android.gms:play-services-ads-lite

#End Region
```

همچنین از وجود `TapsellPlusB4A.Complete` در مانیفست خود اطمینان حاصل کنید

### AdColony
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: adcolony-4.5.0.aar

#End Region
```

همچنین از وجود `TapsellPlusB4A.Complete` در مانیفست خود اطمینان حاصل کنید

### AppLovin
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: applovin-sdk-10.3.1.aar

#End Region
```

همچنین از وجود `TapsellPlusB4A.Complete` در مانیفست خود اطمینان حاصل کنید

### Chartboost

> ادنتورک چارت‌بوست در نسخه‌ی فعلی در B4A قابل استفاده نیست.
{:data-title="چارت‌بوست در B4A" data-color="red"}



### UnityAds
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes
    #AdditionalJar: unity-ads-3.7.4.aar

#End Region
```

همچنین از وجود `TapsellPlusB4A.Complete` در مانیفست خود اطمینان حاصل کنید

برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به  Manifest editor پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که تپسل پلاس به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.tapsell.ir/plus-sdk/b4a/adnetworks-test/) تست نمایید.


در Manifest editor به دنبال متنی همانند زیر بگردید:

```xml
<uses-sdk android:minSdkVersion="16" android:targetSdkVersion="30"/>
```

آنرا با `tools:overrideLibrary` بصورت زیر ترکیب کنید:

```xml
<uses-sdk 
  android:minSdkVersion="16"
  android:targetSdkVersion="30"
  tools:overrideLibrary="com.unity3d.ads" />
```
