---
layout: classic-docs
title: راه اندازی تپسل پلاس در اندروید
lang: fa
permalink: /plus-sdk/android/initialize/index.html
toc: true
---

> در صورت وجود مشکل یا ابهام به [لیست خطاهای فنی رایج]({{ site.baseurl }}/faq/plus-sdk/android/) مراجعه کنید یا صفحه‌ی [Github Issues](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues?q=is%3Aissue) را بررسی نمایید.
{:data-title="نکته Build پروژه" data-color="red"}

ابتدا کتابخانه‌ی TapsellPlus را مطابق روش زیر به پروژه‌ی خود اضافه کنید. سپس هر شبکه‌ی تبلیغاتی که مایل هستید و تپسل پلاس پشتیبانی می‌کند را مطابق توضیحات بخش شبکه‌های تبلیغاتی به پروژه‌ی خود اضافه نمایید. در انتها با اطلاعات موجود در بخش تست، مطمئن شوید که شبکه‌ی مورد نظر به درستی کار می‌کند.

## تنظیمات Gradle
ریپازیتوری تپسل را به فایل `build.gradle` اصلی پروژه اضافه کنید.

```gradle
allprojects {  
    repositories {
        ....
        mavenCentral()

        // for v1.2.3-rc4 and before
        //maven {  
        //    url 'https://dl.bintray.com/tapsellorg/maven'  
        //}
        ....
    }  
}
```

خط زیر را به فایل `build.gradle` ماژول برنامه در قسمت `dependencies` اضافه کنید.

```gradle
dependencies {
    ....
    implementation 'ir.tapsell.plus:tapsell-plus-sdk-android:2.1.6'
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
        TapsellPlus.initialize(this, BuildConfig.TAPSELL_KEY,
				new TapsellPlusInitListener() {
            @Override
            public void onInitializeSuccess(AdNetworks adNetworks) {
                Log.d("onInitializeSuccess", adNetworks.name());
            }

            @Override
            public void onInitializeFailed(AdNetworks adNetworks,
						AdNetworkError adNetworkError) {
                Log.e("onInitializeFailed", "ad network: " + adNetworks.name() + ", error: " +	adNetworkError.getErrorMessage());
            }
        });
        ...
    }
}
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

> برای مشاهده‌ی جزئی‌تر لاگ‌ها در لایبرری از کد
> ```java
> TapsellPlus.setDebugMode(Log.DEBUG)
> ```
> استفاده کنید. هنگام درخواست یا نمایش هرگونه خطایی با جزئیات دقیق‌تر نمایش داده می‌شود.
{:data-title="Debug mode" data-color="blue"}


## تنظیمات proguard
تنظیمات مربوط به `proguard` در [این فایل](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/proguard-rules.pro) قرار دارد.

## تنظیمات مربوط به GDPR

از آن‌جا که کتابخانه‌ی تپسل پلاس قوانین GDPR را در خصوص نمایش تبلیغات شخصی‌سازی شده رعایت می‌کند، به طور پیش فرض اگر کاربر با IP یکی از کشورهای مشمول این قانون از اپلیکیشن شما استفاده کند، دیالوگی در این خصوص به کاربر نمایش می‌دهد.
اگر تمایل دارید تا به جای تصمیم کاربر، خودتان دسترسی لازم را تعیین کنید می‌توانید از تکه کد زیر استفاده نمایید. توجه داشته باشید که این تکه کد می‌بایستی پس از Initialize شدن تپسل پلاس و پیش از درخواست تبلیغ صدا زده شود تا نتیجه‌ی آن در درخواست شما اعمال شده باشد. مقدار true‌ به این معنی است که شما حق استفاده از اطلاعات جهت نمایش تبلیغ شخصی‌سازی شده را به شبکه‌های تبلیغاتی داده‌اید.

```java
TapsellPlus.setGDPRConsent(this, true);
```

در صورت نیاز به نمایش مجدد دیالوگ GDPR برای کاربر می‌توانید از کد زیر استفاده نمایید:

```java
TapsellPlus.showGDPRDialog(/* activity */ this)
```

## دسترسی‌ها
کتابخانه‌ی تپسل‌پلاس به جز اینترنت و WAKE_LOCK دسترسی دیگری از کاربر نمی‌گیرد. امّا به منظور بهبود عملکرد کتابخانه برای نمایش تبلیغات متناسب با هر کاربر می‌توانید دسترسی زیر را به اپلیکیشن خود اضافه نمایید. همچنین می‌بایستی [دسترسی در زمان اجرا](https://developer.android.com/training/permissions/requesting) برای این مورد را نیز از کاربر بگیرید.
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
این دسترسی صرفا برای دریافت Network Type کاربر بوده و استفاده‌ی دیگری از آن نمی‌شود.
 در صورتی که با اضافه کردن این دسترسی قصد انتشار اپلیکیشن خود در پلی استور را دارید می‌بایستی Privacy Policy خود را تغییر دهید. (می‌توانید از [این لینک](https://stackoverflow.com/questions/41234205/warnings-your-apk-is-using-permissions-that-require-a-privacy-policy-android-p) کمک بگیرید).

در صورتی که از نسخه‌های قبل از ۱.۲.۶ استفاده می‌کنید و قصد گرفتن این دسترسی را ندارید می‌توانید با افزودن تکه کد زیر به فایل AndroidManifest.xml آن را
حذف نمایید (در نسخه‌های ۱.۲.۶ به بعد این دسترسی به طور پیش‌فرض وجود ندارد و نیازی به حذف کردن آن نیست).
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
