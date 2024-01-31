---
layout: classic-docs
title: راه اندازی تپسل پلاس در یونیتی (Android)
lang: fa
permalink: /plus-sdk/unity/initialize-android/index.html
toc: true # table of contents
---

> در صورت وجود مشکل یا ابهام به [لیست خطاهای فنی رایج]({{ site.baseurl }}/faq/plus-sdk/unity/) مراجعه کنید یا صفحه‌ی [Github Issues](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues?q=is%3Aissue) را بررسی نمایید.
{:data-title="نکته Build پروژه" data-color="red"}

## اضافه کردن Unity Package تپسل پلاس

۱. ابتدا فایل [unitypackage resolver](https://github.com/googlesamples/unity-jar-resolver/tags) را دانلود کنید. سپس
مطابق توضیحات لینک زیر آن را به پروژه‌ی خود اضافه نمایید:

[مستندات گوگل](https://github.com/googlesamples/unity-jar-resolver#android-resolver-usage)

۲. از طریق منوهای زیر، تیک مربوط به `Jetifier` و `Auto Resolution` را بزنید. (تیک مربوط به `Auto Resolution` اجباری نیست
اما برای آن که هر بار مجبور نباشید کتابخانه‌ها را به شکل دستی Resolve کنید بهتر است آن را فعال کنید)

```console
Assets > External Dependency Manager > Android Resolver > Settings > Use Jetifier
Assets > External Dependency Manager > Android Resolver > Settings > Enable Auto-Resolution
```

۳. ابتدا `unitypackage` تپسل پلاس را
از [این لینک](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin/releases/download/v2.2.4/tapsell-plus-unity-2.2.4.unitypackage)
دریافت نمایید.

۴. از طریق منوی زیر `unitypackage` تپسل پلاس را به پروژه‌ی خود اضافه نمایید. (اگر فولدر `TapsellPlusSDK` از قبل در
پروژه‌ی شما وجود دارد لطفا آن را پاک کنید)

```console
Assets > Import Package > Custom Package...
```

۵. برای اطمینان از اضافه شدن پلاگین تپسل پلاس از طریق منوی زیر اقدام به Resolve کردن کتابخانه‌ها کنید:

```console
Assets > External Dependency Manager > Android Resolver > Force Resolve
```

۶. از طریق منوهای زیر، تیک‌های مربوط به ایجاد فایل‌های Custom Gradle را بزنید:

```console
Edit > Project Setting... > Player > Publishing Settings > Custom Launcher Gradle Template
Edit > Project Setting... > Player > Publishing Settings > Custom Base Gradle Template
Edit > Project Setting... > Player > Publishing Settings > Custom Gradle Properties Template
```

۴. برای فعال سازی AndroidX در پروژه، به آدرس `Assets\Plugins\Android\gradle.properties` بروید و قطعه کد زیر را اضافه
کنید:

```gradle
android.useAndroidX=true
android.enableJetifier=true
```

۸. اگر تکه کد زیر در آدرس `Assets\Plugins\Android\launcherTemplate.gradle` وجود نداشت آن را اضافه نمایید:

```gradle
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```

۹. به آدرس `Assets\Plugins\Android\baseProjectTemplate.gradle` بروید و عبارت `mavenCentral()` را به هر دو
بخش `repositories` اضافه نمایید. سپس ورژن `com.android.tools.build:gradle` را به ۴.۲.۲ تغییر دهید.


> دقت داشته باشید که استفاده از ورژن ۳.۶.۰ برای Android Gradle Plugin الزامی است. زیرا برای پشتیبانی از اندروید یازده می‌بایستی حداقل از این ورژن در پروژه پشتیبانی شود. برای اضافه کردن نسخه‌ای از Gradle که قابلیت پشتیبانی از اندروید یازده را دارد، می‌توانید از [این لینک](https://developers.google.com/ar/develop/unity/android-11-build) کمک بگیرید.

۱۰. بعد از اضافه کردن تپسل پلاس و شبکه‌های تبلیغاتی دیگر احتمالا به دلیل بالا رفتن حجم کد و جلوگیری از وقوع خطای زیر
می‌بایستی MultiDex را فعال نمایید. در صورتیکه از `minSdkVersion` نسخه‌ی ۲۱ یا بالاتر استفاده میکنید، MultiDex به صورت
پیش فرض فعال است. در غیر اینصورت لازم است آن را به صورت دستی به پروژه خود اضافه نمایید.

```console
D8: Cannot fit requested classes in a single dex file (# methods: 68109 > 65536)
```

نحوه‌ی فعال‌سازی MultiDex به این ترتیب است که به آدرس `Assets\Plugins\Android\launcherTemplate.gradle` بروید و کدهای زیر
را به آن اضافه نمایید:

```gradle
dependencies {
    def multidex_version = "2.0.1"
    implementation "androidx.multidex:multidex:$multidex_version" // 2.0.1
}

android {
  ...
  defaultConfig {
    ...
    multiDexEnabled true
  }
  ...
}
```

سپس به فایل `Assets\Plugins\Android\AndroidManifest.xml` مراجعه کنید و یکی از روش های `الف`، `ب` و `ج` را مطابق
پیاده‌سازی خود اعمال نمایید.

الف) در صورتیکه قبلا از کلاس `Application` در پروژه خود استفاده نکرده اید، خط زیر را در تگ `application` اضافه کنید:

```xml

<application
  android:name="androidx.multidex.MultiDexApplication">
  <!--  ...-->
</application>
```

ب) در غیر اینصورت اگر قبلا از کلاس `Application` در پروژه خود استفاده کرده اید و آن را در `manifest` معرفی کرده‌اید،
وارد کلاس `Application` شده و آن را از کلاس `MultiDexApplication` ارث بری کنید. تغییرات مورد نیاز را همانند کد زیر اعمال
کنید:

```java
public class MainApplication extends MultiDexApplication {
  // your code
}
```

ج) اما در صورتیکه کلاس `Application` خود را از کلاس دیگری ارث بری نموده‌اید و امکان ارث بری از
کلاس `MultiDexApplication` وجود ندارد، میتوانید متود `attachBaseContext` را به صورت زیر در کلاس خود `override` نمایید و
تغییرات لازم را اعمال نمایید:

```java
public class MainApplication extends SomeOtherApplication {
    // your code
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}
```

برای راهنمایی بهتر می‌توانید به [مستندات رسمی اندروید](https://developer.android.com/studio/build/multidex) مراجعه
نمایید.

## مقداردهی اولیه

ابتدا برای دسترسی به کدهای تپسل از تکه کد زیر استفاده کنید.

```c#
using TapsellPlusSDK;
```

سپس تابع زیر را در یکی از اسکریپت‌های برنامه‌ی خود که در ابتدای برنامه اجرا می‌شود فراخوانی کنید.

```c#
TapsellPlus.Initialize(TAPSELLPLUS_KEY,
            adNetworkName => Debug.Log(adNetworkName + " Initialized Successfully."),
            error => Debug.Log(error.ToString()));
```

`TAPSELLPLUS_KEY` کلید تپسل پلاس هست و برای هر اپلیکیشنی که می‌سازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته
می‌شود و می‌توانید از پنل کپی کنید.

اکنون می‌توانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

## تنظیمات مربوط به GDPR

از آن‌جا که کتابخانه‌ی تپسل پلاس قوانین GDPR را در خصوص نمایش تبلیغات شخصی‌سازی شده رعایت می‌کند، به طور پیش فرض اگر
کاربر با IP یکی از کشورهای مشمول این قانون از اپلیکیشن شما استفاده کند، دیالوگی در این خصوص به کاربر نمایش می‌دهد. اگر
تمایل دارید تا به جای تصمیم کاربر، خودتان دسترسی لازم را تعیین کنید می‌توانید از تکه کد زیر استفاده نمایید. توجه داشته
باشید که این تکه کد می‌بایستی پس از Initialize شدن تپسل پلاس و پیش از درخواست تبلیغ صدا زده شود تا نتیجه‌ی آن در درخواست
شما اعمال شده باشد. مقدار true‌ به این معنی است که شما حق استفاده از اطلاعات جهت نمایش تبلیغ شخصی‌سازی شده را به
شبکه‌های تبلیغاتی داده‌اید.

```c#
TapsellPlus.SetGdprConsent(true);
```

## Family Policy

اگر هر یک از مخاطبان هدف برنامه شما کودکان هستند (بخصوص اگر شما در حال توسعه یک بازی هستید)، محتوای برنامه شما باید
مناسب برای این دسته از کاربران باشد. همچنین، امکان جمع‌آوری برخی از اطلاعات شخصی
مانند `شناسه تبلیغاتی گوگل (Google Advertising ID)` مجاز نیست. با این حال، کتابخانه‌های تبلیغاتی شخص ثالت نیاز به این
شناسه تبلیغاتی دارند تا تبلیغات شخصی‌سازی را برای کاربران ارائه و ارسال کنند. پس، در کتاباخانه تبلیغاتی تپسل، تمامی
کاربران به عنوان افرادی با سن 13 سال یا بالاتر در نظر گرفته می‌شوند. بنابراین، به عنوان یک توسعه‌دهنده برنامه اگر قصد
انتشار برنامه خود در `GooglePlay` را دارید، باید در پنل آن تایید کنید که برنامه شما برای مخاطبان با سن 13 سال یا بالاتر
هدف قرار دارد. در غیر این صورت، برنامه شما بر اساس این سیاست `GooglePlay` حذف خواهد شد.

## پروژه‌ی نمونه

برای راهنمایی بیش‌تر می‌توانید از پروژه‌های نمونه‌ی ما بر روی Github استفاده نمایید.

* [پروژه‌ی نمونه مناسب برای Unity 2021.3.5f1 LTS](https://github.com/tapsellorg/TapsellPlusSDK-UnityPlugin)
