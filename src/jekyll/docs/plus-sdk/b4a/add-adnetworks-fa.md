---
layout: classic-docs
title: سایر شبکه‌های تبلیغاتی
lang: fa
permalink: /plus-sdk/b4a/add-adnetworks/index.html
toc: true
---


سایر شبکه‌های تبلیغاتی را می‌توانید مطابق این آموزش به پروژه اضافه کنید. همچنین با روش‌های تست گفته شده مطمئن شوید به درستی پیاده‌سازی شده‌اند.

برای کسب اطلاعات بیشتر در مورد هر ad network می‌توانید با همکاران ما در تیم رسانه از قسمت پشتیبانی صحبت کنید.


> قبل از اقدام برای اضافه‌کردن ادنتورک‌ها مطمئن شوید که مانیفست `YelloadwiseB4A.Essential` را به مانیفست خود اضافه کرده‌اید.
{:data-title="مانیفست مورد نیاز" data-color="orange"}


شما هنگام دانلود پکیج فایل‌های لازم را برای پشتیبانی از ادنتورک‌ها دانلود کرده‌اید و آنها بایستی در
`Additional libs`
قرار گرفته باشند.

حال برای استفاده از آنها بایستی فایل `AAR` یا `Jar` آنها به پروژه اضافه شوند (و همچنین مانیفست)

> در [پروژه‌ی نمونه‌ی یلوادوایز](https://github.com/irancell/YelloadwiseSDK-B4ASample) می‌توانید دقیق و با جزئیات پیاده‌سازی مانیفست را در Manifest editor آن مشاهده کنید
{:data-title="نمونه‌ی پیاده‌سازی شده‌ی مانیفست" data-color="blue"}

## Yelloadwise AdNetwork
این ادنتورک به طور پیش‌فرض اضافه شده است. برای استفاده از آن نیازی به کاری ندارید

## AdMob


> **نکته** برای استفاده از **AdMob**  
> 
> ۱. برای استفاده از ادنتورک **Google AdMob SDK** بایستی App ID آنرا در مانیفست اپلیکیشن قرار دهید.  
> لازم به ذکر است در صورت عدم وجود این تگ در مانیفست خطای `The Google Mobile Ads SDK was initialized incorrectly.` رخ خواهد داد
>
> برای اضافه کردن App ID ابتدا از یکی از راه‌های زیر این شناسه را از یلوادوایز دریافت کنید (پیش از دریافت شناسه، شرایط فعال‌سازی شبکه‌های تبلیغاتی خارجی را در [این لینک](https://yelloadwise.ir/) مطالعه نمایید):
> - ارسال ایمیل به `publishers [at] irancell.ir`
> - ارسال تیکت به [دپارتمان ناشرین](https://irancell.ir.deskpro.com/new-ticket)
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
> در صورت وجود `YelloadwiseB4A.AdMobTestAppId` در مانیفست آنرا حتما حذف کنید.
> 
> ۲. برای استفاده از ادنتورک **Google AdMob SDK** لازم است وابستگی `play-services-ads` را به صورت زیر در بخش `Region  Project Attributes` قرار دهید.
> ```py
> # Region  Project Attributes
>     #AdditionalJar: com.google.android.gms:play-services-ads-lite
> #End Region
> ```
> در غیر اینصورت با خطای `Error inflating class com.google.android.gms.ads.nativead.NativeAdView Caused by: java.lang.ClassNotFoundException: Didn't find class "com.google.android.gms.ads.nativead.NativeAdView` مواجه می‌شوید.
> همچنین لازم است محتوای زیر را به `Manifest editor` پروژه اضافه کنید
> ```vb
> CreateResourceFromFile(Macro, YelloadwiseB4A.AdMob)
>```
>{:data-title="استفاده از AdMob" data-color="red"}



در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: com.google.android.gms:play-services-ads-lite

#End Region
```

همچنین محتوای زیر را به Manifest editor پروژه اضافه کنید:

```vb
CreateResourceFromFile(Macro, YelloadwiseB4A.AdMob)
```

## AdColony
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: adcolony-4.6.5.aar

#End Region
```

همچنین محتوای زیر را به Manifest editor پروژه اضافه کنید:

```vb
CreateResourceFromFile(Macro, YelloadwiseB4A.AdColony)
```

## AppLovin
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes 
    #AdditionalJar: applovin-sdk-10.3.4.aar

#End Region
```

همچنین محتوای زیر را به Manifest editor پروژه اضافه کنید:

```vb
CreateResourceFromFile(Macro, YelloadwiseB4A.AppLovin)
```

## Chartboost

> ادنتورک چارت‌بوست در نسخه‌ی فعلی در B4A قابل استفاده نیست.
{:data-title="چارت‌بوست در B4A" data-color="red"}



## UnityAds
در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes
    #AdditionalJar: unity-ads-3.7.5.aar

#End Region
```
همچنین محتوای زیر را به Manifest editor پروژه اضافه کنید:

```vb
CreateResourceFromFile(Macro, YelloadwiseB4A.UnityAds)
```

برای استفاده از شبکه‌ی تبلیغاتی Unity Ads می‌بایست minSDK اپلیکیشن خود را ۱۹ قرار دهید. و یا این که خط زیر را به  Manifest editor پروژه‌تان اضافه نمایید.

این خط به منظور جلوگیری از وقوع خطا برای بیلد شدن پروژه‌ی با minSDK کم‌تر از ۱۹ می‌باشد. از آن‌جا که یلوادوایز به شکل هوشمند مانع نمایش تبلیغ Unity Ads به اندرویدهای با API Level کم‌تر از ۱۹ می‌شود، مشکلی برای آن دسته از کاربرانتان که نسخه‌ی اندروید قدیمی دارند پیش نمی‌آید. امّا حتما لازم است یک بار به روی چنین دستگاه‌هایی شبکه‌ی تبلیغاتی Unity Ads را با استفاده از تبلیغ‌گاه تستی موجود در [این لینک](https://docs.irancell.ir/plus-sdk/b4a/adnetworks-test/) تست نمایید.


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

## Mintegral

در بخش `Region  Project Attributes` این کد را **اضافه** کنید:

```py
# Region  Project Attributes
    #AdditionalJar: mintegral-interstitialvideo-15.7.41.aar
	#AdditionalJar: mintegral-mbbanner-15.7.41.aar
	#AdditionalJar: mintegral-mbjscommon-15.7.41.aar
	#AdditionalJar: mintegral-playercommon-15.7.41.aar
	#AdditionalJar: mintegral-reward-15.7.41.aar
	#AdditionalJar: mintegral-same-15.7.41.aar
	#AdditionalJar: mintegral-videocommon-15.7.41.aar
	#AdditionalJar: mintegral-videojs-15.7.41.aar
#End Region
```
همچنین محتوای زیر را به Manifest editor پروژه اضافه کنید:

```vb
CreateResourceFromFile(Macro, YelloadwiseB4A.Mintegral)
```
