---
layout: classic-docs
title: راه اندازی تپسل در B4A
lang: fa
permalink: /tapsell-sdk/b4a/initialize/index.html
toc: true # table of contents
---


جهت استفاده از تپسل ابتدا لازم هست مطابق مراحل زیر تپسل را به پروژه اضافه کنید.

>جهت استفاده از SDK تپسل می‌بایست از build tools نسخه ۲۳ و بالاتر استفاده کنید.
{:data-title="نسخه کتابخانه اندروید مورد نیاز" data-color="red"}

>برای Build کردن پروژه حتما نوع Build را در حالت `Release` قرار دهید.
{:data-title="نکته Build پروژه" data-color="red"}

## دریافت SDK تپسل
ابتدا فایل `B4A Package` مربوط به SDK تپسل را از آدرس زیر دانلود کرده و محتویات آن را در پوشه‌ای ذخیره کنید.   
[دریافت فایل](https://storage.backtory.com/tapsell-server/sdk/b4a/TapsellB4A_v4.0.4.zip)


## افزودن SDK تپسل به کتابخانه B4A
فایل‌های `TapsellSDK.jar` و `TapsellSDK.xml` را از SDK تپسل به پوشه‌ی `Libraries` در محل نصب B4A اضافه کنید. پروژه B4A خود را باز کنید و در بخش `Libraries Manager`، کلیک راست کرده و گزینه Refresh را انتخاب کنید تا فهرست به‌روزرسانی شود. سپس کتابخانه‌ی تپسل را از لیست پیدا کرده و آن را به پروژه خود اضافه کنید.
سپس این پوشه را به عنوان پوشه‌ی `Additional Libraries` در پروژه خود انتخاب کنید.


## افزودن فایل فونت
فایل `bkoodb.ttf` موجود در پوشه assets از SDK تپسل را در پوشه‌ی `Files` در محل قرارگیری پروژه B4A خود کپی کنید. سپس در نرم‌افزار B4A در بخش `Files Manager` کلیک راست کرده و گزینه Sync Folder را انتخاب کنید. پس از نمایش فایل فونت کپی شده در فهرست، تیک مربوط به آن را بزنید تا به پروژه افزوده شود.


## اضافه کردن کتابخانه‌های مورد نیاز
اگر قبلا برای پروژه های خود محل Additional Libraries را تعیین کرده اید لازم هست محتویات پوشه‌ی libs از SDK تپسل را در آدرسی که در Tools->Configure Paths->Additional Libraries تعیین کرده‌اید کپی کنید. در غیر اینصورت پوشه‌ی libs را در محل پروژه‌ی B4A خود و در کنار پوشه‌های Files و Objects کپی کنید.   
سپس این پوشه را به عنوان پوشه‌ی `Additional Libraries` در پروژه خود انتخاب کنید.

## تنظیمات Activity Attributes و Project Attributes
در محدوده Activity Attributes از پروژه خود، خطوط زیر را اضافه کنید.   

```java
#Region Activity Attributes
    ....
    #AdditionalJar : tapsellsdk-b4a-4.0.4.jar
    #AdditionalJar : gson-2.8.5.jar
#End Region
```   
در صورتی که پروژه‌ی خود را در حالت debug اجرا می‌کنید خط زیر را در بخش Project Attributes فایل اصلی پروژه خود اضافه کنید:   

```java
#Region Project Attributes
    ....
    #DebuggerForceStandardAssets : true
#End Region
```   

##  آپدیت فایل Manifest
از منو `Project` گزینه `Manifest Editor` را انتخاب کرده و خطوط زیر را به `manifest` برنامه خود اضافه کنید.   


```java
AddManifestText(
    ....
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>)
    ....
'End of default text.
AddApplicationText(
    <!-- Required Activity -->
    <activity
        android:name="ir.tapsell.sdk.TapsellAdActivity"
        android:configChanges="keyboardHidden|orientation|screenSize"/>
    )
```   
در کد فوق سترسی‌ موقعیت `(ACCESS_COARSE_LOCATION)` اختیاری است اما درصورتیکه این دسترسی را نیز در برنامه خود قرار دهید، تبلیغات نشان‌داده‌شده به کاربر از کیفیت بالاتری برخوردار خواهد بود.   
   

## مقداردهی اولیه
برای ارتباط با کتابخانه‌ی تپ‌سل باید از کلاس Tapsell استفاده کنید. کافیست یک شیء از آن داشته باشید. این دسترسیبا نوشتن خط زیر در بخش Globals قابل انجام است:   

```java
Sub Globals
 Private tapsell As Tapsell
End Sub
```

سپس در activity اصلی برنامه‌ی خود در قسمت Activity_Create خط زیر را اضافه کنید:

```java
tapsell.initialize(TAPSELL_KEY)
```   

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود متفاوت است و میتوانید از پنل کپی کنید.   

اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.
