---
layout: classic-docs
title: راه اندازی یلوادوایز در B4A
lang: fa
permalink: /yelloadwise-core/b4a/initialize/index.html
toc: true # table of contents
---


جهت استفاده از یلوادوایز ابتدا لازم هست مطابق مراحل زیر یلوادوایز را به پروژه اضافه کنید.

>برای Build کردن پروژه حتما نوع Build را در حالت `Release` قرار دهید.
{:data-title="نکته Build پروژه" data-color="red"}

## دریافت SDK یلوادوایز
ابتدا فایل `B4A Package` مربوط به SDK یلوادوایز را از آدرس زیر دانلود کرده و محتویات آن را در پوشه‌ای ذخیره کنید.   
[دریافت فایل](https://storage.backtory.com/yelloadwise-server/sdk/b4a/YelloadwiseB4A_v4.0.4.zip)


## افزودن SDK یلوادوایز به کتابخانه B4A
فایل‌های `YelloadwiseSDK.jar` و `YelloadwiseSDK.xml` را از SDK یلوادوایز به پوشه‌ی `Libraries` در محل نصب B4A اضافه کنید. پروژه B4A خود را باز کنید و در بخش `Libraries Manager`، کلیک راست کرده و گزینه Refresh را انتخاب کنید تا فهرست به‌روزرسانی شود. سپس کتابخانه‌ی یلوادوایز را از لیست پیدا کرده و آن را به پروژه خود اضافه کنید.
سپس این پوشه را به عنوان پوشه‌ی `Additional Libraries` در پروژه خود انتخاب کنید.


## اضافه کردن کتابخانه‌های مورد نیاز
اگر قبلا برای پروژه‌های خود محل Additional Libraries را تعیین کرده‌اید لازم هست محتویات پوشه‌ی libs از SDK یلوادوایز را در آدرسی که در `Tools->Configure Paths->Additional Libraries` تعیین کرده‌اید کپی کنید. در غیر اینصورت پوشه‌ی libs را در محل پروژه‌ی B4A خود و در کنار پوشه‌های Files و Objects کپی کنید.   
سپس این پوشه را به عنوان پوشه‌ی `Additional Libraries` در پروژه خود انتخاب کنید.

## تنظیمات Activity Attributes و Project Attributes
در محدوده `Activity Attributes` از پروژه خود، خطوط زیر را اضافه کنید.   

```visualbasic
#Region Activity Attributes
    #AdditionalJar : yelloadwise-sdk-b4a-4.0.4.jar
    #AdditionalJar : gson-2.8.5.jar
#End Region
```   
در صورتی که پروژه‌ی خود را در حالت debug اجرا می‌کنید خط زیر را در بخش Project Attributes فایل اصلی پروژه خود اضافه کنید:   

```visualbasic
#Region Project Attributes
    #DebuggerForceStandardAssets : true
#End Region
```   

##  آپدیت فایل Manifest
از منو `Project` گزینه `Manifest Editor` را انتخاب کرده و خطوط زیر را به `manifest` برنامه خود اضافه کنید.   


```xml
AddPermission(android.permission.INTERNET)
AddPermission(android.permission.ACCESS_NETWORK_STATE)

AddApplicationText(
    <activity
        android:name="ir.yelloadwise.core.YelloadwiseAdActivity"
        android:configChanges="keyboardHidden|orientation|screenSize"/>
    )
```   


## مقداردهی اولیه
برای ارتباط با کتابخانه‌ی یلوادوایز باید از کلاس Yelloadwise استفاده کنید. کافیست یک شی از آن داشته باشید. این دسترسی با نوشتن خط زیر در بخش Globals قابل انجام است:   

```visualbasic
Sub Globals
 Private yelloadwise As Yelloadwise
End Sub
```

سپس در activity اصلی برنامه‌ی خود در قسمت `Activity_Create` خط زیر را اضافه کنید:

```visualbasic
yelloadwise.initialize(YELLOADWISE_KEY)
```   

`YELLOADWISE_KEY` کلید یلوادوایز هست و برای هر اپلیکیشن که در [پنل یلوادوایز](https://dashboard.irancell.ir/) ساخته میشود متفاوت است و میتوانید از پنل کپی کنید.   

اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.
