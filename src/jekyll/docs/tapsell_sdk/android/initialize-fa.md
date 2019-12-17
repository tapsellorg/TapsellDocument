---
layout: classic-docs
title: راه اندازی تپسل در اندروید
lang: fa
permalink: /tapsell_sdk/android/initialize/index.html
toc: true # table of contents
---


جهت استفاده از تپسل ابتدا لازم هست مطابق مراحل زیر تپسل را به پروژه اضافه کنید.

## تنظیمات Gradle
خطوط زیر را به فایل `build.gradle` کل پروژه در قسمت `allprojects -> repositories` اضافه کنید.

```gradle
maven {
    url 'https://dl.bintray.com/tapsellorg/maven'
}
```

خط زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
    implementation 'ir.tapsell.sdk:tapsell-sdk-android:4.4.0-beta'
```

با کمک پراکسی gradle را sync کنید تا تپسل به پروژه اضافه شود.


## مقداردهی اولیه
در کلاس `application` باید تپسل را راه‌اندازی کنید.

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(application, TAPSELL_KEY);
}
```

> برای آشنایی با کلاس اپلیکیشن میتوانید [این مطلب](../../blog/2019/7/6/ApplicationClass) را مطالعه کنید.

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود متفاوت است و میتوانید از پنل کپی کنید.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.


اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.
