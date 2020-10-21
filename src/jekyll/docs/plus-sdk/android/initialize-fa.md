---
layout: classic-docs
title: راه اندازی تپسل پلاس در اندروید
lang: fa
permalink: /plus-sdk/android/initialize/index.html
toc: true
---


ابتدا کتابخانه TapsellPlus را مطابق روش زیر به پروژه اضافه کنید سپس هر adNetwork که تپسل پلاس پشتیبانی میکند و مایل هستید را مطابق توضیحات به پروژه اضافه کنید. در انتها با روش‌های تست مطمئن شوید که adNetwork مورد نظر به درستی کار میکند.

## تنظیمات Gradle
ریپازیتوری تپسل را به فایل `build.gradle` اصلی پروژه اضافه کنید.

```gradle
allprojects {  
    repositories {
        ....
        maven {  
            url 'https://dl.bintray.com/tapsellorg/maven'  
        }
        ....
    }  
}
```

خط زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
dependencies {
    ....
    implementation 'ir.tapsell.plus:tapsell-plus-sdk-android:1.1.3'
    ....
}
```

همچنین اگر در قسمت android این قسمت وجود ندارد اضافه‌اش کنید.

```gradle
compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_8
  targetCompatibility JavaVersion.VERSION_1_8
}
```

با کمک پراکسی gradle را sync کنید تا تپسل به پروژه اضافه شود.

## مقداردهی اولیه

در اکتیویتی اولیه برنامه باید تپسل پلاس را راه‌اندازی کنید.

```java
import ir.tapsell.plus.TapsellPlus;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ...
        TapsellPlus.initialize(this, TAPSELL_KEY);
        ...
    }
}
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.

## تنظیمات Network Security Configuration
در صورتی که اپلیکیشن شما درخواست‌های http ارسال می‌کند، در مسیر `res/xml` پروژه‌ی خود یک فایل به نام`network_security_config.xml` بسازید.

- اگر تمام ارتباطات اپلیکیشن شما از طریق پروتوکل http برقرار می‌شود، خطوط زیر را به فایل `network_security_config.xml` اضافه کنید:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <base-config cleartextTrafficPermitted="true"/>
  </base-config>
</network-security-config>
```

- اگر اپلیکیشن شما به تعداد محدودی از domainها بسته‌های http ارسال می‌کند، خطوط زیر را به فایل `network_security_config.xml` اضافه کنید:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true"/>
    <domain includeSubdomains="true"><!—your subdomain--></domain>
  </domain-config>
</network-security-config>
```

 در آخر به تگ application در فایل `AndroidManifest.xml` ،اپلیکیشن خود attribute `android:networkSecurityConfig` را مطابق خطوط زیر اضافه کنید:

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