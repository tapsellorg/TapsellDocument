---
layout: classic-docs
title: راه اندازی تپسل در اندروید
lang: fa
permalink: /tapsell-sdk/android/initialize/index.html
toc: true # table of contents
---


جهت استفاده از تپسل ابتدا لازم هست مطابق مراحل زیر تپسل را به پروژه اضافه کنید.

## تنظیمات Gradle
خطوط زیر را به فایل `build.gradle` کل پروژه در قسمت `allprojects -> repositories` اضافه کنید.

```gradle

mavenCentral()

// for v4.6.3-rc5 and before
// maven {
//    url 'https://dl.bintray.com/tapsellorg/maven'
//}
```

خط زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
    implementation 'ir.tapsell.sdk:tapsell-sdk-android:4.7.1'
```

با کمک پراکسی gradle را sync کنید تا تپسل به پروژه اضافه شود.


## راه‌اندازی تپسل
در کلاس `application` باید تپسل را راه‌اندازی کنید.

```java
import ir.tapsell.sdk.Tapsell;
...
public void onCreate() {
    super.onCreate();
    Tapsell.initialize(application, TAPSELL_KEY);
}
```
- از نسخه‌ی 4.6.0 به بعد، راه‌اندازی تپسل تنها می‌تواند از طریق کلاس `application` صورت بگیرد.
> برای آشنایی با کلاس اپلیکیشن می‌توانید [این مطلب]({{site.baseurl}}/application-class) را مطالعه کنید.

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود متفاوت است و میتوانید از پنل کپی کنید.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.


اکنون می‌توانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

## دسترسی‌ها
کتابخانه‌ی تپسل به جز اینترنت و WAKE_LOCK دسترسی دیگری از کاربر نمی‌گیرد. امّا به منظور بهبود عملکرد کتابخانه برای نمایش تبلیغات متناسب با هر کاربر می‌توانید دسترسی زیر را به اپلیکیشن خود اضافه نمایید. همچنین می‌بایستی [دسترسی در زمان اجرا](https://developer.android.com/training/permissions/requesting) برای این مورد را نیز از کاربر بگیرید.
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
این دسترسی صرفا برای دریافت Network Type کاربر بوده و استفاده‌ی دیگری از آن نمی‌شود. در صورتی که با اضافه کردن این دسترسی قصد انتشار اپلیکیشن خود در پلی استور را دارید می‌بایستی Privacy Policy خود را تغییر دهید. (می‌توانید از [این لینک](https://stackoverflow.com/questions/41234205/warnings-your-apk-is-using-permissions-that-require-a-privacy-policy-android-p) کمک بگیرید).

در صورتی که از نسخه‌های قبل از ۴.۶.۵ استفاده می‌کنید و قصد گرفتن این دسترسی را ندارید می‌توانید با افزودن تکه کد زیر به فایل AndroidManifest.xml آن را
حذف نمایید (در نسخه‌های ۴.۶.۵ به بعد این دسترسی به طور پیش‌فرض وجود ندارد و نیازی به حذف کردن آن نیست).
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE"
	tools:node="remove" />
```

## تنظیمات Network Security Configuration
در صورتی که اپلیکیشن شما درخواست‌های http ارسال می‌کند، در مسیر `res/xml` پروژه‌ی خود یک فایل به نام`network_security_config.xml` بسازید.

- اگر تمام ارتباطات اپلیکیشن شما از طریق پروتوکل http برقرار می‌شود، خطوط زیر را به فایل `network_security_config.xml` اضافه کنید:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <base-config cleartextTrafficPermitted="true">
    ...
  </base-config>
</network-security-config>
```

- اگر اپلیکیشن شما به تعداد محدودی از domainها بسته‌های http ارسال می‌کند، خطوط زیر را به فایل `network_security_config.xml` اضافه کنید:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true"><!—your subdomain--></domain>
  </domain-config>
</network-security-config>
```

در آخر به تگ application در فایل `AndroidManifest.xml` اپلیکیشن خود، attribute `android:networkSecurityConfig` را مطابق خطوط زیر اضافه کنید:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest>
    <application 
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

و در صورت وجود attribute زیر در تگ application در `AndroidManifest.xml` آن را حذف کنید:

```xml
<application
         android:usesCleartextTraffic="true">
```
