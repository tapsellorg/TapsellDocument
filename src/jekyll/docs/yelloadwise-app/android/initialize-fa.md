---
layout: classic-docs
title: راه اندازی یلوادوایز در اندروید
lang: fa
permalink: /yelloadwise-app/android/initialize/index.html
toc: true # table of contents
---

جهت استفاده از یلوادوایز ابتدا لازم هست مطابق مراحل زیر یلوادوایز را به پروژه اضافه کنید.

## تنظیمات Gradle
خطوط زیر را به فایل `build.gradle` کل پروژه در قسمت `allprojects -> repositories` اضافه کنید.

```gradle
mavenCentral()
```

خط زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
    implementation 'ir.yelloadwise.app:yelloadwise-app-android:1.0.0'
```

با کمک پراکسی gradle را sync کنید تا یلوادوایز به پروژه اضافه شود.


## راه‌اندازی یلوادوایز
در کلاس `application` باید یلوادوایز را راه‌اندازی کنید.

```java
import ir.yelloadwise.app.Yelloadwise;
...
public void onCreate() {
    super.onCreate();
    Yelloadwise.initialize(application, Yelloadwise_KEY);
}
```
- راه‌اندازی یلوادوایز تنها می‌تواند از طریق کلاس `application` صورت بگیرد.
> برای آشنایی با کلاس اپلیکیشن می‌توانید [این مطلب]({{site.baseurl}}/application-class) را مطالعه کنید.

`YELLOADWISE_KEY` کلید یلوادوایز هست و برای هر اپلیکیشن که در [پنل یلوادوایز](https://business.yelloadwise.ir/) ساخته میشود متفاوت است و میتوانید از پنل کپی کنید.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/Yelloadwise/YelloadwiseSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.


اکنون می‌توانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

## دسترسی‌ها
کتابخانه‌ی یلوادوایز به جز اینترنت دسترسی دیگری از کاربر نمی‌گیرد. امّا به منظور بهبود عملکرد کتابخانه برای نمایش تبلیغات متناسب با هر کاربر می‌توانید دسترسی زیر را به اپلیکیشن خود اضافه نمایید. همچنین می‌بایستی [دسترسی در زمان اجرا](https://developer.android.com/training/permissions/requesting) برای این مورد را نیز از کاربر بگیرید.
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
این دسترسی صرفا برای دریافت Network Type کاربر بوده و استفاده‌ی دیگری از آن نمی‌شود. در صورتی که با اضافه کردن این دسترسی قصد انتشار اپلیکیشن خود در پلی استور را دارید می‌بایستی Privacy Policy خود را تغییر دهید. (می‌توانید از [این لینک](https://stackoverflow.com/questions/41234205/warnings-your-apk-is-using-permissions-that-require-a-privacy-policy-android-p) کمک بگیرید).

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
