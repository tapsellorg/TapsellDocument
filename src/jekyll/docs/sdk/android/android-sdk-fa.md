---
layout: classic-docs
title: SDK Android
lang: fa
permalink: /sdk/android/index.html
toc: true # table of contents
---

<!-- [![CircleCI](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample.svg?style=svg)](https://circleci.com/gh/metrixorg/MetrixSDK-AndroidSample)
[ ![Download](https://api.bintray.com/packages/metrixorg/maven/metrix-sdk-android/images/download.svg) ](https://bintray.com/metrixorg/maven/metrix-sdk-android/_latestVersion) -->

## تنظیمات اولیه در پروژه

۱. ابتدا تنظیمات زیر را در قسمت `repositories` فایل `gradle` کل پروژه اضافه کنید:

```groovy
allprojects{
    repositories {

    ...

        maven {
            url 'https://dl.bintray.com/metrixorg/maven'
        }
    }
}
```

۲. کتاب خانه زیر را در قسمت `dependencies` فایل `gradle` اپلیکیشن خود اضافه کنید:

```groovy
implementation 'ir.metrix:metrix:0.11.0'
```

۳. تنظیمات زیر را به `Proguard` پروژه خود اضافه کنید:

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
```

۴. متریکس برای تشخیص دستگاه های یکتا از **google advertising id** استفاده می‌کند، برای اینکه متریکس بتواند از این ویژگی استفاده کند باید طبق زیر کتابخانه آن را به قسمت `dependencies` فایل `build.gradle` اضافه کنید:

```groovy
implementation 'com.google.android.gms:play-services-analytics:16.0.7'
```

اگر پروژه شما از ورژن قبل‌تر از ورژن ۷ کتابخانه‌ی `play-servicses-analytics` استفاده می‌کند، باید بخش زیر را به تگ `application` فایل `AndroidManifest.xml` خود اضافه کنید

```xml
<meta-data android:name="com.google.android.gms.version"
        android:value="@integer/google_play_services_version" />
```

۵. برای کتابخانه `Metrix` لازم است تا دسترسی‌های زیر را به فایل `AndroidManifest.xml` اضافه کنید:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> <!--optional-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> <!--optional-->
```

(دو permission دوم اختیاری است)

## دریافت اطلاعات Install Referrer

برای افزایش دقت تشخیص اتریبیوشن نصب‌های اپلیکیشن شما، متریکس نیازمند اطلاعاتی درباره `referrer` نصب اپلیکیشن است. این اطلاعات می‌تواند از طریق سرویس ارائه شده توسط کتابخانه **Google Play Referrer API** و یا دریافت **Google Play Store intent** با استفاده از یک **broadcast receiver** به دست آید.

**نکته مهم:** سرویس **Google Play Referrer API** به تازگی توسط گوگل و با هدف فراهم کردن دقیق یک راه امن و مطمئن برای دریافت اطلاعات `referrer` نصب ارائه شده و این قابلیت را به سرویس‌دهندگان پلتفرم‌های اتریبیوشن می‌دهد تا با تقلب click injection مبازه کنند. به همین دلیل متریکس نیز به همه توسعه‌دهندگان استفاده از این سرویس را توصیه می‌کند. در مقابل، روش **Google Play Store intent** یک مسیر با ضریب امنیت کمتر برای به‌دست آوردن اطلاعات `referrer`نصب ارائه می‌دهد که البته به صورت موازی با **Google Play Referrer API** به طور موقت پشتیبانی می‌شود،اما در آینده‌ای نزدیک منسوخ خواهد شد.

### تنظیمات Google Play Referrer API

برای استفاده ازین ویژگی Google Play باید کتابخانه زیر را اضافه کنید:

```groovy
implementation 'com.android.installreferrer:installreferrer:1.0'
```

همچنین قانون زیر را باید به فایل `Proguard` خود اضافه کنید:

```
-keep public class com.android.installreferrer.** { *; }
```

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

باید کتابخانه متریکس را در کلاس `Application` اندروید `initialize` کنید. اگر از قبل در پروژه خود کلاس `Application` ندارید به شکل زیر این کلاس را ایجاد کنید:

۱. یک کلاس ایجاد کنید که از کلاس `Application` را ارث بری کند:

<img src="https://storage.backtory.com/tapsell-server/metrix/doc/screenshots/Metrix-Application-Class.png"/>

۲. فایل `AndriodManifest.xml` اپلیکیشن خود را باز کنید و به تگ `<application>` بروید.

۳. با استفاده از `Attribute` زیر کلاس `Application` خود را در `AndroidManifest.xml` اضافه کنید:

```xml
<application
    android:name=“.MyApplication”
    ... >

</application>
```

<img src="https://storage.backtory.com/tapsell-server/metrix/doc/screenshots/Metrix-Application-Manifest.png">

۴. در متد `onCreate` کلاس `Application` خود، مطابق قطعه کد زیر sdk متریکس را `initialize` کنید:

```java
import ir.metrix.sdk.Metrix;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Metrix.initialize(this, "APP_ID");
    }
}
```

`APP_ID`: کلید اپلیکیشن شما که از پنل متریکس آن را دریافت می‌کنید.

### در مورد کلاس اپلیکیشن و initialize کردن در این کلاس

اندروید در کلاس اپلیکیشن به توسعه دهنده این اختیار را می‌دهد که قبل از ساخته شدن هر `Activity` در اپلیکیشن دستوراتی را وارد کند. این موضوع برای کتابخانه متریکس نیز ضروری است، به این دلیل که شمردن `session`ها و همچنین جریان بین `Activity`ها و دیگر امکانات کارایی لازم را داشته باشند و به درستی عمل کنند.

## امکانات کتابخانه متریکس

### ۱. توضیح مفاهیم رویداد (event) و نشست (session)

در هر تعاملی که کاربر با اپلیکیشن دارد، کتابخانه متریکس این تعامل را در قالب یک **رویداد** برای سرور ارسال می‌کند. تعریف کتابخانه متریکس از یک **نشست**، بازه زمانی مشخصی است که کاربر با اپلیکیشن در تعامل است.

در کتابخانه متریکس سه نوع رویداد داریم:

1. **شروع نشست (session_start):** زمان شروع یک نشست.
2. **پایان نشست (session_stop):‌** زمان پایان یک نشست.
3. **سفارشی (custom):** وابسته به منطق اپلیکیشن شما و تعاملی که کاربر با اپلیکیشن شما دارد می‌توانید رویدادهای سفارشی خود را در قالبی که در ادامه شرح داده خواهد شد بسازید و ارسال کنید.

**نکته:** برای استفاده از امکانات کتابخانه و صدا زدن متدهایی که کتابخانه در اختیار شما می‌گذارد باید `MetrixClient` را با استفاده از متد `getInstance` دریافت کنید و در ادامه متد مدنظر خود را صدا بزنید.

### ۲. فعال یا غیرفعال کردن ثبت اطلاعات مکان کاربر در رویدادها

می‌توانید با استفاده از دو تابع زیر به کتابخانه متریکس اعلام کنید که در رویدادها اطلاعات مربوط به مکان کاربر را به همراه دیگر اطلاعات ارسال کند یا نکند. (برای اینکه این متد به درستی عمل کند دسترسی‌های اختیاری که بالاتر ذکر شد باید فعال باشند)

```java
Metrix.getInstance().enableLocationListening();

Metrix.getInstance().disableLocationListening();
```

### ۳. تعیین سقف تعداد رویدادها برای ارسال به سمت سرور

با استفاده از تابع زیر می‌توانید مشخص کنید که هر موقع تعداد رویدادهای ذخیره شده شما به تعداد مورد نظر شما رسید کتابخانه رویدادها را برای سرور ارسال کند:

```java
Metrix.getInstance().setEventUploadThreshold(50);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ رویداد است.)

### ۴. تعیین حداکثر تعداد رویداد ارسالی در هر درخواست

با استفاده از این تابع می‌توانید حداکثر تعداد رویداد ارسالی در هر درخواست را به شکل زیر مشخص کنید:

```java
Metrix.getInstance().setEventUploadMaxBatchSize(100);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰ رویداد است.)

### ۵. تعیین تعداد حداکثر ذخیره رویداد در مخزن کتابخانه

با استفاده از تابع زیر می‌توانید مشخص کنید که حداکثر تعداد رویدادهای ذخیر شده در کتابخانه متریکس چقدر باشد (به عنوان مثال اگر دستگاه کاربر اتصال خود به اینترنت را از دست داد رویدادها تا مقداری که شما مشخص می‌کنید در کتابخانه ذخیره خواهند شد) و اگر تعداد رویدادهای ذخیره شده در کتابخانه از این مقدار بگذرد رویدادهای قدیمی توسط sdk نگهداری نشده و از بین می‌روند:

```java
Metrix.getInstance().setEventMaxCount(1000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۱۰۰۰ رویداد است.)

### ۶. تعیین بازه زمانی ارسال رویدادها به سمت سرور

با استفاده از این تابع می‌توانید مشخص کنید که درخواست آپلود رویدادها بعد از گذشت چند میلی‌ثانیه فرستاده شود:

```java
Metrix.getInstance().setEventUploadPeriodMillis(30000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ ثانیه است.)

### ۷. تعیین بازه زمانی دلخواه برای نشست‌ها

با استفاده از این تابع می‌توانید حد نشست‌ها را در اپلیکیشن خود مشخص کنید که هر نشست حداکثر چند ثانیه محاسبه شود. به عنوان مثال اگر مقدار این تابع را ۱۰۰۰۰ وارد کنید اگر کاربر در اپلیکیشن ۷۰ ثانیه تعامل داشته باشد، کتابخانه متریکس این تعامل را ۷ نشست محاسبه می‌کند.

```java
Metrix.getInstance().setSessionTimeoutMillis(1800000);
```

(مقدار پیش‌فرض این تابع در کتابخانه ۳۰ دقیقه است.)

### ۸. فعال کردن مدیریت لاگ‌ها کتابخانه متریکس

توجه داشته باشید که موقع release اپلیکیشن خود مقدار این تابع را false قرار دهید:

```java
Metrix.getInstance().enableLogging(true);
```

(مقدار پیش‌فرض این تابع در کتابخانه true است.)

### ۹. تعیین LogLevel

با استفاده از این تابع می‌توانید مشخص کنید که چه سطحی از لاگ‌ها در `logcat` چاپ شود، به عنوان مثال دستور زیر همه‌ی سطوح لاگ‌ها به جز `VERBOSE` در `logcat` نمایش داده شود:

```java
Metrix.getInstance().setLogLevel(Log.DEBUG);
```

(مقدار پیش‌فرض این تابع در کتابخانه `Log.INFO` است.)

### ۱۰. فعال یا غیرفعال کردن ارسال همه‌ی رویدادها

با استفاده از این تابع می‌توانید مشخص کنید که زمانی که اپلیکیشن بسته می‌شود همه رویدادهای ذخیره شده در کتابخانه ارسال شود یا نشود:

```java
Metrix.getInstance().setFlushEventsOnClose(false);
```

(مقدار پیش‌فرض این تابع در کتابخانه true است.)

### ۱۱. اطلاع یافتن از شماره نشست جاری

با استفاده از این تابع می‌توانید از شماره نشست (session) جاری اطلاع پیدا کنید:

```java
Metrix.getInstance().getSessionNum();
```

### ۱۲. ساختن یک رویداد سفارشی

با استفاده از این تابع می‌توانید یک رویداد سفارشی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به دو صورت می‌توانید صدا بزنید:

۱. یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:

```java
Metrix.getInstance().newEvent("my_event_slug");
```

ورودی این تابع از جنس String است و همان نامکی است که داشبورد دریافت می‌کنید.

۲. یک رویداد سفارشی با تعداد دلخواه attribute و metric خاص سناریو خود بسازید، به عنوان مثال فرض کنید در یک برنامه خرید آنلاین می‌خواهید یک رویداد سفارشی بسازید:

```java
Map<String, String> attributes = new HashMap<>();
attributes.put("first_name", "Ali");
attributes.put("last_name", "Bagheri");
attributes.put("manufacturer", "Nike");
attributes.put("product_name", "shirt");
attributes.put("type", "sport");
attributes.put("size", "large");

Map<String, Double> metrics = new HashMap<>();
metrics.put("price", 100000.0);

Metrix.getInstance().newEvent("purchase_event_slug", attributes, metrics);
```

ورودی‌های متد newEvent بدین شرح هستند:

- **ورودی اول:** نامک رویداد مورد نظر شما که از جنس String است و آن را از داشبورد متریکس دریافت می‌کنید.
- **ورودی دوم:** یک Map<String, String> که ویژگی‌های یک رویداد را مشخص می‌کند.
- **ورودی سوم:** یک Map<String, Double> که شامل ویژگی های قابل اندازه گیری است.

### ۱۳. ساختن رویداد درآمدی

با استفاده از این تابع می‌توانید یک رویداد درآمدی بسازید. برای این کار شما در ابتدا باید در داشبورد متریکس از قسمت مدیریت رخدادها، رخداد موردنظر خود را ثبت کنید و نامک (slug) آن را بعنوان نام رخداد در sdk استفاده کنید.

این تابع را به صورت زیر می‌توانید صدا بزنید:

یک رویداد سفارشی که فقط یک نامک مشخص دارد و آن را از داشبورد متریکس میگیرد، بسازید:

```java
Metrix.getInstance().newRevenue("my_event_slug", 12000, MetrixCurrency.IRR, "2");
```

ورودی اول همان نامکی است که از داشبورد دریافت می‌کنید.

دومین وروی تابع یک مقدار است که همان مقدار درآمد است.

سومین ورودی واحد پول این رخداد است که در صورت قرار ندادن مقدار آن واحد پیشفرض ریال است.

ورودی چهارم که به صورت دلخواه است میتواند شماره سفارش شما باشد.

### ۱۴. مشخص کردن Attribute‌های پیش‌فرض همه‌ی رویدادها

با استفاده از این تابع می‌توانید به تعداد دلخواه `Attribute` به همه‌ی رویدادهای خود اضافه کنید:

```java
Map<String, String> attributes = new HashMap<>();
attributes.put("manufacturer", "Nike");

Metrix.getInstance().addUserAttributes(attributes);
```

### ۱۵. مشخص کردن Metricsهای پیش‌فرض همه‌ی رویدادها

با استفاده از این تابع می‌توانید به تعداد دلخواه `Metric` به همه‌ی رویدادهای خود اضافه کنید:

```java
Map<String, Object> metrics = new HashMap<>();
metrics.put("purchase_time", current_time);

Metrix.getInstance().setUserMetrics(metrics);
```

### ۱۶. فعال کردن فرآیند نگهداری حرکت کاربر بین صفحات مختلف در اپلیکیشن

با استفاده از این تابع می‌توانید به کتابخانه متریکس اطلاع بدهید که تشخیص بدهد کاربر از کدام `Activity`/`Fragment` به کدام `Activity`/`Fragment` می‌رود و این داده‌ها را به صورت اتوماتیک ذخیره کند:

```java
Metrix.getInstance().setScreenFlowsAutoFill(true);
```

(مقدار پیش‌فرض این تابع در کتابخانه false است.)

### ۱۷. اطلاع یافتن از مقدار screenFlow در کتابخانه

با استفاده از این تابع می‌توانید متوجه شوید که مقدار `screenFlow` در کتابخانه متریکس چیست:

```java
Metrix.getInstance().isScreenFlowsAutoFill();
```

### ۱۸. دریافت اطلاعات کمپین

با مقداردهی این تابعه میتوانید اطلاعات کمپین تبلیغاتی که در ترکر خود در پنل قرار داده اید را دریافت کنید.

```java
Metrix.getInstance().setOnAttributionChangedListener(new OnAttributionChangedListener() {
@Override
    public void onAttributionChanged(AttributionModel attributionModel) {
        //TODO
    }
});
```

مدل `AttributionModel` اطلاعات زیر را در اختیار شما قرار میدهد.

```java
attributionModel.getAcquisitionAd() // نام تبلیغ
attributionModel.getAcquisitionAdSet() // گروه تبلیغاتی
attributionModel.getAcquisitionCampaign() // کمپین تبلیغاتی
attributionModel.getAcquisitionSource() // شبکه تبلیغاتی
attributionModel.getAttributionStatus() // وضعیت کاربر در کمپین را مشخص میکند و فقط چهار مقدار زیر را برمیگرداند
```

1. `ATTRIBUTED` اتربیوت شده
2. `NOT_ATTRIBUTED_YET` هنوز اتربیوت نشده
3. `ATTRIBUTION_NOT_NEEDED` نیاز به اتربیوت ندارد
4. `UNKNOWN` حالت ناشناخته

### ۱۹. مشخص کردن Pre-installed Tracker

با استفاده از این تابع می‌توانید با استفاده از یک `trackerToken` که از پنل آن را دریافت می‌کنید، برای همه‌ی رویدادها یک `tracker` پیش‌فرض را قرار دهید:

```java
Metrix.getInstance().setDefaultTracker(trackerToken);
```

### ۲۰. امضاء sdk

اگر شما قابلیت sdk signature در دشبورد خود فعال کنید و به app secret ها دسترسی دارید برای استفاده از آن از متد زیر استفاده کنید:
```java
Metrix.getInstastance().setAppSecret(secretId, info1, info2, info3, info4);
```
### ۲۱. تفکیک بر‌اساس استور های اپلیکیشن

اگر شما می‌خواهید اپلیکیشن خود را در استور های مختلف مانند کافه بازار، گوگل پلی و ... منتشر کنید، با استفاده از متد زیر می‌توانید نصب های ارگانیک خود را به تفکیک استور های مختلف داشته باشید.
```java
Metrix.getInstastance().setStore("store name");
```

## Deep linking
### توضیحات
اگر شما از ترکر های که دیپ‌لینک در آنها فعال است استفاده کنید، می‌توانیداطلاعات url دیپ‌لینک و محتوای آن را دریافت کنید. دستگاه بر اساس نصب بودن اپلیکیشن (سناریو استاندارد) یا نصب نبودن اپلیکیشن (سناریو deferred) واکنش نشان میدهد.
در صورت نصب بودن اپلیکیشن شما اطلاعات دیپ‌لینک به اپلیکیشن شما ارسال می‌شود.
پلتفرم اندروید به صورت اتماتیک سناریو deferred را پشتیبانی نمیکند در این صورت متریکس سناریو مخصوص به خود را دارد تا بتواند اطلاعات دیپ‌لینک را به اپلیکیشن ارسال کند.
### سناریو استاندارد
اگر کاربران شما اپلیکیشن شما را نصب داشته باشند و شما بخواهید بعد از کلیک بر روی لینک دیپ‌لینک صفحه خاصی از اپلیکیشن شما باز شود ابتدا باید یک scheme name یکتا انتخاب کنید.
سپس آن را باید به اکتیویتی که قصد دارید در صورت کلیک بر روی دیپ‌لینک کلیک شد اجرا شود نسبت دهید برای این منظور به فایل `AndroinManifest.xml` رفته و بخش `intent-filter` را به اکتیویتی مورد نظر اضافه کنید همچنین scheme name مورد نظر خود را نیز قرار دهید مانند زیر:
```xml
<activity
    android:name=".MainActivity"
    android:configChanges="orientation|keyboardHidden"
    android:label="@string/app_name"
    android:screenOrientation="portrait">

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="metrixEample" />
    </intent-filter>
</activity>
```
اطلاعات دیپ‌لینک در اکتیویتی که آن را تعریف کردید توسط یک آبجکت `Intent` درمتد های `onCreate`و `newIntent` قابل دسترس است.
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
}
```
```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
}
```

### سناریو deferred

این سناریو زمانی رخ می‌هد که کاربر روی دیپ‌لینک کلیک می‌کند ولی اپلیکیشن شما را در زمانی که کلیک کرده روی دستگاه خود نصب نکرده است. وقتی کاربر کلیک کرد به گوگل پلی استور هدایت می‌شود تا اپلیکیشن شما را نصب کند وقتی اپلیکیشن شما را نصب کرد و برای اولین بار آن را باز کرد اطلاعات دیپ‌لینک به اپلیکیشن داده می‌شود. 
متریکس به صورت پیش‌فرض سناریو deferred را پشتیبانی نمی‌کند و نیاز به تنظیم دارد.
اگر شما قصد دارید که سناریو deferred را کنترل کنیداز طریق کالبک زیر می‌توانید.
```java
Metrix.getInstance().setOnDeeplinkResponseListener(new OnDeeplinkResponseListener() {
    @Override
    public boolean launchReceivedDeeplink(Uri deeplink) {
        // ...
        if (shouldMetrixSdkLaunchTheDeeplink(deeplink)) {
            return true;
        } else {
            return false;
        }
    }
});
```
بعد از این که متریکس اطلاعات دیپ‌لینک را از بکند خود دریافت کرد محتوای آن را به کالبک بالا پاس میدهد اگر خروجی متد `lunchReceivedDeeplink` مقدار `true` باشد متریکس به صورت اتوماتیک سناریو استاندارد را اجرا میکند ولی اگر مقدار خروجی متد `false` باشد متریکس فقط اطلاعات را در این کالبک قرار میدهد تا شما بر اساس آن اکشن مورد نظر خود را انجام دهید.

### ری‌اتریبیوت با دیپ‌لینک
متریکس ابزار ری‌اتریبیوت با دیپ‌لینک دارد اگر میخواهید از این ابزار استفاده کنید نیاز است یکی از متد های متریکس را بعد از دریافت دیپ‌لینک صدا بزنید.
اگر شما اطلاعات دیپ‌لینک را در اپلیکیشن دریافت کردید با صدا زدن `Metrix.getInstance().appWillOpenUrl(Uri)` می‌توانید اطلاعات دیپ‌لینک را به بکند متریکس ارسال کنید تا کاربر دوباره ری‌اتریبیوت شود.
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
    Metrix.getInstance().appWillOpenUrl(data);
}
```
```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
    Metrix.getInstance().appWillOpenUrl(data);
}
```