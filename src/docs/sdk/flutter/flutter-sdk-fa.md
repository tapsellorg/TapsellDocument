---
layout: classic-docs
title: SDK Flutter
lang: fa
permalink: /sdk/flutter/index.html
toc: true # table of contents
---

[![pub package](https://img.shields.io/pub/v/metrix.svg)](https://pub.dartlang.org/packages/metrix)

## تنظیمات اولیه در پروژه

۱. ابتدا باید `metrix` را به فایل `pubspec.yaml` خود اضافه کنید.

۲. تنظیمات زیر را به `Proguard` پروژه خود اضافه کنید:

```
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-keepclassmembers enum * { *; }
-keep class **.R$* { *; }

#Metrix
-keep class ir.metrix.sdk.** { *; }


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
#gms
-keep class com.google.android.gms.** { *; }

-dontwarn android.content.pm.PackageInfo
-keep public class com.android.installreferrer.** { *; }
```

۳. برای کتابخانه `Metrix` لازم است تا دسترسی‌های زیر را به فایل `AndroidManifest.xml` اضافه کنید:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->
```

(دو permission دوم اختیاری است)

### تنظیمات Google Play Store intent

برای دریافت intent `INSTALL_REFERRER` از Google Play باید یک `broadcast receiver` آن را دریافت کند، اگر از `broadcast receiver` سفارشی خود استفاده نمی‌کنید میتوانید با قرار دادن `receiver` زیر در تگ `application` فایل `AndroidManifest.xml` آن را دریافت کنید.

```xml
<receiver
android:name="ir.metrix.sdk.MetrixReferrerReceiver"
android:permission="android.permission.INSTALL_PACKAGES"
android:exported="true" >
    <intent-filter>
        <action android:name="com.android.vending.INSTALL_REFERRER" />
    </intent-filter>
</receiver>
```

چنان چه چندین کتابخانه برای دریافت intent `INSTALL_REFERRER` دارید، می‌توانید با قرار دادن کلاس سفارشی خود در `receiver` مانند زیر عمل کنید:

```xml
<receiver
android:name="com.your.app.InstallReceiver"
android:permission="android.permission.INSTALL_PACKAGES"
android:exported="true" >
    <intent-filter>
        <action android:name="com.android.vending.INSTALL_REFERRER" />
    </intent-filter>
</receiver>
```

و کد کلاس `InstallReceiver` به صورت زیر می‌شود:

```java
public class InstallReceiver extends BroadcastReceiver {
@Override
public void onReceive(Context context, Intent intent) {
    // Metrix
    new MetrixReferrerReceiver().onReceive(context, intent);

    // Google Analytics
    new CampaignTrackingReceiver().onReceive(context, intent);
    }
}
```

## راه‌اندازی و پیاده‌سازی sdk در اپلیکیشن اندروید:

### تنظیمات اولیه در اپلیکیشن:
۱. کتابخانه متریکس را باید در کلاس اولیه پروژه اینیشیالایز کرد.

۲. ابتدا باید پکیج زیر را ایمپورت کنید:
```dart
import 'package:metrix/metrix.dart';
```
۳. در متد `initState` متریکس را اینیشیالایز کنید:
```dart
import 'package:metrix/metrix.dart';

class _MyAppState extends State<MyApp> {

  @override
  void initState() {
    super.initState();
    Metrix.initialize("APP_ID");
  }
}
```

`APP_ID`: کلید اپلیکیشن شما که از پنل متریکس آن را دریافت می‌کنید.

## امکانات کتابخانه متریکس

### ۱. توضیح مفاهیم رویداد (event) و نشست (session)

در هر تعاملی که کاربر با اپلیکیشن دارد، کتابخانه متریکس این تعامل را در قالب یک **رویداد** برای سرور ارسال می‌کند. تعریف کتابخانه متریکس از یک **نشست**، بازه زمانی مشخصی است که کاربر با اپلیکیشن در تعامل است.

در کتابخانه متریکس سه نوع رویداد داریم:

1. **شروع نشست (session_start):** زمان شروع یک نشست.
2. **پایان نشست (session_stop):‌** زمان پایان یک نشست.
3. **سفارشی (custom):** وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.

### ۲. ساختن یک رویداد سفارشی

با استفاده از این تابع می‌توانید یک رویداد سفارشی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به دو صورت می‌توانید صدا بزنید:

۱. یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:

```dart
Metrix..newEvent("my_event_slug");
```

ورودی این تابع از جنس String است و همان نامکی است که داشبورد دریافت می‌کنید.

۲. یک رویداد سفارشی با تعداد دلخواه attribute و metric خاص سناریو خود بسازید، به عنوان مثال فرض کنید در یک برنامه خرید آنلاین می‌خواهید یک رویداد سفارشی بسازید:

```dart
Map<String, String> attributes = new Map();
attributes["first_name"] =  "Ali";
attributes["last_name"] =  "Bagheri";
attributes["manufacturer"] =  "Nike";
attributes["product_name"] =  "shirt";
attributes["type"] =  "sport";
attributes["size"] =  "large";

Map<String, Double> metrics = new Map();
metrics["price"] =  100000.0;

Metrix.newEvent("purchase_event_slug", attributes, metrics);
```

ورودی‌های متد newEvent بدین شرح هستند:

- **ورودی اول:** نامک رویداد مورد نظر شما که از جنس String است و آن را از داشبورد متریکس دریافت می‌کنید.
- **ورودی دوم:** یک Map<String, String> که ویژگی‌های یک رویداد را مشخص می‌کند.
- **ورودی سوم:** یک Map<String, Double> که شامل ویژگی های قابل اندازه گیری است.

### ۳. ساختن رویداد درآمدی

با استفاده از این تابع می‌توانید یک رویداد درآمدی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به صورت زیر می‌توانید صدا بزنید:

۱. یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:

```dart
Metrix.newRevenue('my_event_slug', 12000, 0, '2');
```

ورودی اول همان نامکی است که از داشبورد دریافت می‌کنید.

دومین وروی تابع یک مقدار است که همان مقدار درآمد است.

سومین ورودی واحد پول این رخداد است که در صورت قرار ندادن مقدار آن واحد پیشفرض ریال است در زیر مقادیر آن را میتوانید ببینید.

1. `0` ریال
2. `1` دلار
3. `2` یورو

ورودی چهارم که به صورت دلخواه است میتواند شماره سفارش شما باشد.
### ۴. مشخص کردن Pre-installed Tracker

با استفاده از این تابع می‌توانید با استفاده از یک `trackerToken` که از پنل آن را دریافت می‌کنید، برای همه‌ی رویدادها یک `tracker` پیش‌فرض را قرار دهید:

```dart
Metrix.setDefaultTracker(trackerToken);
```

### ۵. امضاء sdk

اگر شما قابلیت sdk signature در دشبورد خود فعال کنید و به app secret ها دسترسی دارید برای استفاده از آن از متد زیر استفاده کنید:
```dart
Metrix.setAppSecret(secretId, info1, info2, info3, info4);
```