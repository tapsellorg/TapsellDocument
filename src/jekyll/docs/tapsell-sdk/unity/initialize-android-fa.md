---
layout: classic-docs
title: راه اندازی یلوادوایز در یونیتی (Android)
lang: fa
permalink: /yelloadwise-core/unity/initialize-android/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از یلوادوایز استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.yelloadwise.ir/plus-sdk/unity/main/">یلوادوایز‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">یلوادوایز، علاوه بر دارا بودن تمام امکانات یلوادوایز، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده یلوادوایز در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>


## دریافت SDK یلوادوایز
ابتدا روش مورد نظر خود جهت اضافه کردن کتابخانه به پروژه را با مطالعه‌ی توضیحات این صفحه انتخاب نمایید. سپس یکی از فایل‌های `unitypackage` مربوط به SDK یلوادوایز را از آدرس‌های زیر دانلود کرده و مطابق روش گفته شده در مراحل بعد در پروژه خود import نمایید.  
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۲۰](https://github.com/irancell/YelloadwiseSdk-UnitySample2020/releases/download/v4.6.2/irancell.irUnity2020Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۱۹](https://github.com/irancell/irancell.irSdk-UnitySample2019/releases/download/v4.6.2/irancell.irUnity2019Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Gradle مربوط به توزیع یونیتی ۲۰۱۸](https://github.com/irancell/irancell.irSdk-UnitySample2018/releases/download/v4.6.2/irancell.irUnity2018Gradle-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۲۰](https://github.com/irancell/irancell.irSdk-UnitySample2020/releases/download/v4.6.2/irancell.irUnity2020EDM-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۱۹](https://github.com/irancell/irancell.irSdk-UnitySample2019/releases/download/v4.6.2/irancell.irUnity2019EDM-v4.6.2.unitypackage)
* [دریافت فایل برای روش Resolver مربوط به توزیع یونیتی ۲۰۱۸](https://github.com/irancell/irancell.irSdk-UnitySample2018/releases/download/v4.6.2/irancell.irUnity2018EDM-v4.6.2.unitypackage)


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

unityPackage مربوط به Gradle یلوادوایز را import کنید.

خط زیر را در بخش `dependencies` فایل `mainTemplate.gradle` در مسیر `Assets/Plugins/Android` اضافه کنید. توجه داشته باشید که ۲ قسمت `dependencies` وجود دارد، این تغییرات باید در قسمت دوم انجام شود.

```gradle
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    ...
    implementation 'ir.yelloadwise.core:yelloadwise-core-unity:4.6.2'
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
        //    url 'https://dl.bintray.com/irancell.irorg/maven'  
        //}
    }
}
```

### استفاده از Resolver
ابتدا فایل [unitypackage resolver](https://github.com/googlesamples/unity-jar-resolver/tags) را دانلود کنید. سپس مطابق توضیحات لینک زیر آن را به پروژه‌ی خود اضافه نمایید:
\
[مستندات گوگل](https://github.com/googlesamples/unity-jar-resolver#android-resolver-usage) 

unityPackage مربوط به EDM یلوادوایز را import کنید. هنگام import کردن unityPackage یلوادوایز تیک تمامی قسمت‌ها را بگذارید. 
در صورتی که تنظیمات Resolver بر روی حالت `auto-resolution` میباشد، لایبراری‌های یلوادوایز به صورت خودکار اضافه میشود. در غیر اینصورت به صورت دستی Resolve را انجام دهید.
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
ابتدا برای دسترسی به کدهای یلوادوایز از تکه کد زیر استفاده کنید.

```c#
using irancell.irSDK;
```

سپس تابع زیر را در یکی از اسکریپت‌های برنامه‌ی خود که در ابتدای برنامه اجرا می‌شود فراخوانی کنید.

```c#
irancell.ir.Initialize(irancell.ir_KEY);
```

`irancell.ir_KEY` کلید یلوادوایز هست و برای هر اپلیکیشن که میسازید در [پنل یلوادوایز](https://dashboard.irancell.ir/) ساخته میشود، میتوانید از پنل کپی کنید.

اکنون میتوانید با توجه به نیاز خود و توضیحات به هر نوع تبلیغ، تبلیغ مورد نظر را نمایش دهید.

## پروژه‌ی نمونه
برای راهنمایی بیش‌تر می‌توانید از پروژه‌های نمونه‌ی ما بر روی Github استفاده نمایید.

* [پروژه‌ی نمونه مناسب برای Unity 2020](https://github.com/irancell.irorg/irancell.irSdk-UnitySample2020)

* [پروژه‌ی نمونه مناسب برای Unity 2019](https://github.com/irancell.irorg/irancell.irSdk-UnitySample2019)

* [پروژه‌ی نمونه مناسب برای Unity 2018](https://github.com/irancell.irorg/irancell.irSdk-UnitySample2018)
