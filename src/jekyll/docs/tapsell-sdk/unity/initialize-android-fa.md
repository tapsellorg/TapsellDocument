---
layout: classic-docs
title: راه اندازی تپسل در یونیتی (Android)
lang: fa
permalink: /tapsell-sdk/unity/initialize-android/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/unity/main/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>


## دریافت SDK تپسل
ابتدا روش مورد نظر خود جهت اضافه کردن کتابخانه به پروژه را با مطالعه‌ی توضیحات این صفحه انتخاب نمایید. سپس یکی از فایل‌های `unitypackage` مربوط به SDK تپسل را از آدرس‌های زیر دانلود کرده و مطابق روش گفته شده در مراحل بعد در پروژه خود import نمایید.  
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۲۰](https://github.com/tapsellorg/TapsellSdk-UnitySample2020/releases/download/v4.6.2/TapsellUnity2020Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۱۹](https://github.com/tapsellorg/TapsellSdk-UnitySample2019/releases/download/v4.6.2/TapsellUnity2019Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۱۸](https://github.com/tapsellorg/TapsellSdk-UnitySample2018/releases/download/v4.6.2/TapsellUnity2018Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۲۰](https://github.com/tapsellorg/TapsellSdk-UnitySample2020/releases/download/v4.6.2/TapsellUnity2020EDM-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۱۹](https://github.com/tapsellorg/TapsellSdk-UnitySample2019/releases/download/v4.6.2/TapsellUnity2019EDM-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۱۸](https://github.com/tapsellorg/TapsellSdk-UnitySample2018/releases/download/v4.6.2/TapsellUnity2018EDM-v4.6.2.unitypackage)


## تنظیمات اولیه Sdk
از player settings قسمت publishing settings تیک custom gradle template را بزنید.
خطوط زیر را در بخش android فایل mainTemplate.gradle در صورتی که وجود ندارد اضافه کنید.

```gradle
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```

برای اضافه کردن کتابخانه‌های مورد نیاز ۲ روش وجود دارد از هرکدام که مایل هستید استفاده کنید.


### استفاده از Gradle

unityPackage مربوط به Gradle تپسل را import کنید.

خط زیر را در بخش `dependencies` فایل `mainTemplate.gradle` در مسیر `Assets/Plugins/Android` اضافه کنید. توجه داشته باشید که ۲ قسمت `dependencies` وجود دارد، این تغییرات باید در قسمت دوم انجام شود.

```gradle
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    ...
    implementation 'ir.tapsell.sdk:tapsell-sdk-unity:4.6.2'
    ...
**DEPS**}
```

در نسخه‌های قدیمی یونیتی ممکن هست `implementation` شناخته نشود در این صورت از `compile` استفاده کنید.  
  
هر یک از خطوط زیر که در بخش `allprojects -> repositories` فایل `mainTemplate.gradle` وجود ندارد اضافه کنید.

```gradle
allprojects {
    repositories {
        google()
        jcenter()

        mavenCentral()

        // for v4.5.0 and before
        //maven {  
        //    url 'https://dl.bintray.com/tapsellorg/maven'  
        //}
    }
}
```

### استفاده از Resolver
ابتدا فایل [unitypackage resolver](https://github.com/googlesamples/unity-jar-resolver/tags) را دانلود کنید. سپس مطابق توضیحات لینک زیر آن را به پروژه‌ی خود اضافه نمایید:
\
[مستندات گوگل](https://github.com/googlesamples/unity-jar-resolver#android-resolver-usage) 

unityPackage مربوط به EDM تپسل را import کنید. هنگام import کردن unityPackage تپسل تیک تمامی قسمت‌ها را بگذارید. 
در صورتی که تنظیمات Resolver بر روی حالت `auto-resolution` میباشد، لایبراری‌های تپسل به صورت خودکار اضافه میشود. در غیر اینصورت به صورت دستی Resolve را انجام دهید.
فعال یا غیر فعال کردن `auto-resolution` از مسیر زیر انجام میشود.

```console
Assets > Play Services Resolver > Android Resolver > Settings
```

برای Resolve دستی نیز از این مسیر اقدام نمایید.

```console
Assets > Play Services Resolver > Android Resolver > Resolve
Assets > Play Services Resolver > Android Resolver > Force Resolve
```

## مقداردهی اولیه
ابتدا برای دسترسی به کدهای تپسل از تکه کد زیر استفاده کنید.

```c#
using TapsellSDK;
```

سپس تابع زیر را در یکی از اسکریپت‌های برنامه‌ی خود که در ابتدای برنامه اجرا می‌شود فراخوانی کنید.

```c#
Tapsell.Initialize(TAPSELL_KEY);
```

`TAPSELL_KEY` کلید تپسل هست و برای هر اپلیکیشن که میسازید در [پنل تپسل](https://dashboard.tapsell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

## پروژه‌ی نمونه
برای راهنمایی بیش‌تر می‌توانید از پروژه‌های نمونه‌ی ما بر روی Github استفاده نمایید.

* [پروژه‌ی نمونه مناسب برای Unity 2020](https://github.com/tapsellorg/TapsellSdk-UnitySample2020)

* [پروژه‌ی نمونه مناسب برای Unity 2019](https://github.com/tapsellorg/TapsellSdk-UnitySample2019)

* [پروژه‌ی نمونه مناسب برای Unity 2018](https://github.com/tapsellorg/TapsellSdk-UnitySample2018)
