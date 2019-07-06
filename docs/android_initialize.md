---
id: android_initialize
title: راه اندازی تپسل در اندروید
sidebar_label: راه اندازی
---

جهت استفاده از تپسل ابتدا لازم هست مطابق مراحل زیر تپسل را به پروژه اضافه کنید.

## تنظیمات Gradle

خطوط زیر را به فایل `build.gradle` کل پروژه در قسمت `allprojects -> repositories` اضافه کنید.

```gradle
maven {
    url 'https://dl.bintray.com/tapsellorg/maven'
}
```

خطور زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
implementation 'ir.tapsell.sdk:tapsell-sdk-android:4.3.3'
````

با کمک پراکسی gradle را sync کنید تا تپسل به پروژه اضافه شود.

## مقداردهی اولیه

در کلاس `application` باید تپسل را `initialize` کنید.

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(application, TAPSELL_KEY);
}
```

> برای آشنایی با کلاس اپلیکیشن میتوانید [این مطلب](../../blog/2019/7/6/ApplicationClass) را مطالعه کنید.

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.


اکنون مینوانید با توجه به نیاز خود و توضیخات مربوط به هر نوع تبلیغ مورد نظر را نمایش دهید.