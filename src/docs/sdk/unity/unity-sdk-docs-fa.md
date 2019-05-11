---
layout: classic-docs
title: SDK unity
lang: fa
permalink: /sdk/unity/index.html
toc: true # table of contents
---

## تنظیمات اولیه در پروژه

۱. ابتدا کتابخانه‌ متریکس را از [این لینک](https://storage.backtory.com/metricx/sdk-unity/MetrixSDK-v0.9.0.unitypackage) دانلود کنید و در پروژه خود import کنید.

۲. سپس دیپندنسی های زیر راه به بلاک dependencies فایل

`Asset/Plugins/Android/mainTemplate.gradle` اضافه کنید.

```
implementation fileTree(dir: 'libs', include: [‘*.jar'])

implementation 'com.android.installreferrer:installreferrer:1.0'

implementation 'com.google.code.gson:gson:2.8.5'

implementation 'com.squareup.retrofit2:retrofit:2.5.0'

implementation 'com.squareup.retrofit2:converter-gson:2.5.0'

implementation 'com.squareup.okhttp3:logging-interceptor:3.12.1'

implementation 'com.squareup.retrofit2:converter-scalars:2.5.0'

implementation 'com.google.android.gms:play-services-analytics:16.0.7'
```

۳. آپشن زیر را به بلاک `android` فایل `Asset/Plugins/Android/mainTemplate.gradle` اپلیکیشن خود اضافه کنید:

```
compileOptions {
    targetCompatibility = "8"
    sourceCompatibility = "8"
}
```

۴.اگر از پروگارد برای ماینیفای کردن اپلیکیشن خود استفاده میکنید تنظیمات زیر را به `Asset/Plugins/Android/proguard-user.txt` پروژه خود اضافه کنید:

```
#Unity Player
-keep class com.unity3d.player.** { *; }


-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-keepclassmembers enum * { *; }
-keep class **.R$* { *; }
-keep interface ir.metrix.sdk.NoProguard
-keep class * implements ir.metrix.sdk.NoProguard { *; }
-keep interface * extends ir.metrix.sdk.NoProguard { *; }
-keep class ir.metrix.sdk.network.model.** { *; }

# retrofit
# Retain service method parameters when optimizing.
-keepclassmembers,allowshrinking,allowobfuscation interface * {
@retrofit2.http.* <methods>;
}

# Ignore JSR 305 annotations for embedding nullability information.
-dontwarn javax.annotation.**

# Guarded by a NoClassDefFoundError try/catch and only used when on the classpath.
-dontwarn kotlin.Unit

# Top-level functions that can only be used by Kotlin.
-dontwarn retrofit2.-KotlinExtensions

# With R8 full mode, it sees no subtypes of Retrofit interfaces since they are created with a Proxy
# and replaces all potential values with null. Explicitly keeping the interfaces prevents this.
-if interface * { @retrofit2.http.* <methods>; }
-keep,allowobfuscation interface <1>

#OkHttp
# A resource is loaded with a relative path so the package of this class must be preserved.
-keepnames class okhttp3.internal.publicsuffix.PublicSuffixDatabase

# Animal Sniffer compileOnly dependency to ensure APIs are compatible with older versions of Java.
-dontwarn org.codehaus.mojo.animal_sniffer.*

# OkHttp platform used only on JVM and when Conscrypt dependency is available.
-dontwarn okhttp3.internal.platform.ConscryptPlatform



#Gson
# Gson specific classes
-dontwarn sun.misc.**
#-keep class com.google.gson.stream.** { *; }

# Prevent proguard from stripping interface information from TypeAdapterFactory,
# JsonSerializer, JsonDeserializer instances (so they can be used in @JsonAdapter)
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer

#referral
-keep public class com.android.installreferrer.** { *; }

#gms
-keep class com.google.android.gms.** { *; }
-dontwarn android.content.pm.PackageInfo
```

۵. دسترسی های زیر را به فایل `AndroidManifest.xml` موجود در فولدر `Plugins/Android` پروژه خود اضافه کنید:

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->
```

(دو permission دوم اختیاری است)

## ۲. دریافت اطلاعات Install Referrer

برای افزایش دقت تشخیص اتریبیوشن نصب‌های اپلیکیشن شما، متریکس نیازمند اطلاعاتی درباره `referrer` نصب اپلیکیشن است. این اطلاعات می‌تواند از طریق سرویس ارائه شده توسط کتابخانه **Google Play Referrer API** و یا دریافت **Google Play Store intent** با استفاده از یک **broadcast receiver** به دست آید.

**نکته مهم:** سرویس **Google Play Referrer API** به تازگی توسط گوگل و با هدف فراهم کردن دقیق یک راه امن و مطمئن برای دریافت اطلاعات `referrer` نصب ارائه شده و این قابلیت را به سرویس‌دهندگان پلتفرم‌های اتریبیوشن می‌دهد تا با تقلب click injection مبازه کنند. به همین دلیل متریکس نیز به همه توسعه‌دهندگان استفاده از این سرویس را توصیه می‌کند. در مقابل، روش **Google Play Store intent** یک مسیر با ضریب امنیت کمتر برای به‌دست آوردن اطلاعات `referrer`نصب ارائه می‌دهد که البته به صورت موازی با **Google Play Referrer API** به طور موقت پشتیبانی می‌شود،اما در آینده‌ای نزدیک منسوخ خواهد شد.

### تنظیمات Google Play Store intent

برای دریافت intent `INSTALL_REFERRER` از Google Play باید یک `broadcast receiver` آن را دریافت کند، اگر از `broadcast receiver` سفارشی خود استفاده نمی‌کنید میتوانید با قرار دادن `receiver` زیر در تگ `application` فایل `AndroidManifest.xml` آن را دریافت کنید.

```
<receiver
android:name="ir.metrix.sdk.MetrixReferrerReceiver"
android:permission="android.permission.INSTALL_PACKAGES"
android:exported="true" >
  <intent-filter>
      <action android:name="com.android.vending.INSTALL_REFERRER" />
  </intent-filter>
</receiver>
```

## راه‌اندازی و پیاده‌سازی sdk در اپلیکیشن اندروید:

### تنظیمات اولیه در اپلیکیشن:

کتابخانه متریکس را در ابتدای برنامه‌ی خود به این روش initialize کنید:

```
Metrix.Initialize("APP_ID");
```

`APP_ID`: کلید اپلیکیشن شما که از پنل متریکس آن را دریافت می‌کنید.

## امکانات کتابخانه متریکس

### ۱. توضیح مفاهیم رویداد (event) و نشست (session)

در هر تعاملی که کاربر با اپلیکیشن دارد، کتابخانه متریکس این تعامل را در قالب یک **رویداد** برای سرور ارسال می‌کند. تعریف کتابخانه متریکس از یک **نشست**، بازه زمانی مشخصی است که کاربر با اپلیکیشن در تعامل است.

در کتابخانه متریکس سه نوع رویداد داریم:

**۱. شروع نشست (session_start):** زمان شروع یک نشست.

**۲. پایان نشست (session_stop):‌** زمان پایان یک نشست.

**۳. سفارشی (custom):** وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.

### ۲. فعال یا غیرفعال کردن ثبت اطلاعات مکان کاربر در رویدادها

می‌توانید با استفاده از دو تابع زیر به کتابخانه متریکس اعلام کنید که در رویدادها اطلاعات مربوط به مکان کاربر را به همراه دیگر اطلاعات ارسال کند یا نکند. (برای اینکه این متد به درستی عمل کند دسترسی‌های اختیاری که بالاتر ذکر شد باید فعال باشند)

```
Metrix.EnableLocationListening();

Metrix.DisableLocationListening();
```

### ۳. تعیین سقف تعداد رویدادها برای ارسال به سمت سرور

با استفاده از تابع زیر می‌توانید مشخص کنید که هر موقع تعداد رویدادهای ذخیره شده شما به تعداد مورد نظر شما رسید کتابخانه رویدادها را برای سرور ارسال کند:

```
Metrix.SetEventUploadThreshold(50);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ رویداد است.)

### ۴. تعیین حداکثر تعداد رویداد ارسالی در هر درخواست

با استفاده از این تابع می‌توانید حداکثر تعداد رویداد ارسالی در هر درخواست را به شکل زیر مشخص کنید:

```
Metrix.SetEventUploadMaxBatchSize(100);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰ رویداد است.)

### ۵. تعیین تعداد حداکثر ذخیره رویداد در مخزن کتابخانه

با استفاده از تابع زیر می‌توانید مشخص کنید که حداکثر تعداد رویدادهای ذخیر شده در کتابخانه متریکس چقدر باشد (به عنوان مثال اگر دستگاه کاربر اتصال خود به اینترنت را از دست داد رویدادها تا مقداری که شما مشخص می‌کنید در کتابخانه ذخیره خواهند شد) و اگر تعداد رویدادهای ذخیره شده در کتابخانه از این مقدار بگذرد رویدادهای قدیمی توسط sdk نگهداری نشده و از بین می‌روند:

```
Metrix.SetEventMaxCount(1000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰۰ رویداد است.)

### ۶. تعیین بازه زمانی ارسال رویدادها به سمت سرور

با استفاده از این تابع می‌توانید مشخص کنید که درخواست آپلود رویدادها بعد از گذشت چند میلی‌ثانیه فرستاده شود:

```
Metrix.SetEventUploadPeriodMillis(30000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ ثانیه است.)

### ۷. تعیین بازه زمانی دلخواه برای نشست‌ها

با استفاده از این تابع می‌توانید حد نشست‌ها را در اپلیکیشن خود مشخص کنید که هر نشست حداکثر چند ثانیه محاسبه شود. به عنوان مثال اگر مقدار این تابع را ۱۰۰۰۰ وارد کنید اگر کاربر در اپلیکیشن ۷۰ ثانیه تعامل داشته باشد، کتابخانه متریکس این تعامل را ۷ نشست محاسبه می‌کند.

```
Metrix.SetSessionTimeoutMillis(1800000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ دقیقه است.)

### ۸. فعال کردن مدیریت لاگ‌ها کتابخانه متریکس

توجه داشته باشید که موقع release اپلیکیشن خود مقدار این تابع را false قرار دهید:

```
Metrix.EnableLogging(true);
```

(مقدار پیش‌فرض این تابع در کتابخانه true است.)

### ۹. تعیین LogLevel

با استفاده از این تابع می‌توانید مشخص کنید که چه سطحی از لاگ‌ها در `logcat` چاپ شود، به عنوان مثال دستور زیر همه‌ی سطوح لاگ‌ها به جز `VERBOSE` در `logcat` نمایش داده شود:

```
Metrix.SetLogLevel(3);
```

(مقدار پیش‌فرض این تابع در کتابخانه `INFO` است.)

نکته : مقدار متناظر با `Log Level`

```
VERBOSE = 2;
DEBUG = 3;
INFO = 4;
WARN = 5;
ERROR = 6;
ASSERT = 7;
```

### ۱۰. فعال یا غیرفعال کردن ارسال همه‌ی رویدادها

با استفاده از این تابع می‌توانید مشخص کنید که زمانی که اپلیکیشن بسته می‌شود همه رویدادهای ذخیره شده در کتابخانه ارسال شود یا نشود:

```
Metrix.SetFlushEventsOnClose(false);
```

(مقدار پیش‌فرض این تابع در کتابخانه true است.)

### ۱۱. اطلاع یافتن از شماره نشست جاری

با استفاده از این تابع می‌توانید از شماره نشست (session) جاری اطلاع پیدا کنید:

```
Metrix.GetSessionNum();
```

### ۱۲. ساختن یک رویداد سفارشی

با استفاده از این تابع می‌توانید یک رویداد سفارشی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به صورت زیر صدا بزنید:

۱. یک رویداد سفارشی که فقط یک اسم مشخص دارد بسازید:

```
Metrix.NewEvent(“my_event_slug");
```

ورودی این تابع از جنس String است

### ۱۳. ساختن رویداد درآمدی

با استفاده از این تابع می‌توانید یک رویداد درآمدی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به صورت زیر می‌توانید صدا بزنید:

۱. یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:

```
Metrix.NewRevenue("my_event_slug", 12000, 0, "2");
```

ورودی اول همان نامکی است که از داشبورد دریافت می‌کنید.

دومین وروی تابع یک مقدار است که همان مقدار درآمد است.

سومین ورودی واحد پول این رخداد است که در صورت قرار ندادن مقدار آن واحد پیشفرض ریال است در زیر مقادیر آن را میتوانید ببینید.

1. `0` ریال
2. `1` دلار
3. `2` یورو

ورودی چهارم که به صورت دلخواه است میتواند شماره سفارش شما باشد.

### ۱۴. نگهداری حرکات کاربر در صفحات مختلف در اپلیکیشن

با اضافه کردن تابع زیر صفحات خود میتوانید از حرکت کاربر بین صفحات اطلاع پیدا کنید:

```
Metrix.ScreenDisplayed("First Screen");
```

### ۱۵. مشخص کردن Pre-installed Tracker

با استفاده از این تابع می‌توانید با استفاده از یک `trackerToken` که از پنل آن را دریافت می‌کنید، برای همه‌ی رویدادها یک `tracker` پیش‌فرض را قرار دهید:

```
Metrix.SetDefaultTracker("trackerToken");
```
