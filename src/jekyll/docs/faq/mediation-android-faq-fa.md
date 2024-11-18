---
layout: classic-docs
title: خطاهای فنی رایج در اندروید
toc: true
permalink: /faq/mediation/android/
lang: fa
---

در این بخش خطاهایی که ممکن‌ است در مراحل مختلف راه‌اندازی تپسل در اندروید با آن‌ها مواجه شوید به همراه راه‌ حل ذکر شده‌اند.

> **خطای مورد نظر شما در این صفحه مطرح نشده است؟** در [قسمت Issues گیت‌هاب](https://github.com/tapsellorg/TapsellMediation-AndroidSample/issues?q=) جستجو کنید و در صورت نیافتن در آنجا [مورد جدیدی](https://github.com/tapsellorg/TapsellMediation-AndroidSample/issues/new) مطرح کنید.
{:data-title="نکته" data-color="red"}

### چه طور باید کتابخانه تپسل مدییشن را initialize کنم؟
کتابخانه تپسل مدییشن به صورت خودکار `initialize` می شود و نیازی به `initialize` کردن آن نیست.
کافیست که کلید تپسل خود را در پروژه در فایل `build.gradle` به صورت زیر اضافه کنید:

```kotlin
android {
    defaultConfig {
        addManifestPlaceholders(
            mapOf(
                "TapsellMediationAppKey" to "YOUR_TAPSELL_KEY",
            )
        )
    }
}
```

### Invalid mediation app key provided in application manifest

این خطا زمانی رخ می دهد که مقدار کلید تپسل `TapsellMediationAppKey` در فایل `build.gradle` اشتباه باشد.
فرمت مقدار کلید در کتابخانه تپسل مدییشن بر مبنای `UUID` است. برای مثال می توانید از شناسه های تست [در این لینک](https://docs.tapsell.ir/mediation/test) استفاده کنید.

همچنین به کمک قطعه کد زیر می‌توانید از وضعیت initialize شدن SDK با خبر شوید.

```kotlin
Tapsell.setInitializationListener {
    // Tapsell was initialized successfully"
}
```

### Invalid Zone Id

این خطا زمانی رخ می دهد که مقدار `ZoneId` در زمان درخواست تبلیغ اشتباه باشد. 
فرمت شناسه های `ZoneId` در کتابخانه تپسل مدییشن بر مبنای `UUID` است. برای مثال می توانید از شناسه های تست [در این لینک](https://docs.tapsell.ir/mediation/test) استفاده کنید.

### Google Admob Invalid application ID.

این خطا زمانی رخ می دهد که شما اداپتور `admob` را به پروژه اضافه کرده باشید، ولی مقدار کلید ادموب `TapsellMediationAdmobAdapterSignature` در فایل `build.gradle` اشتباه باشد.
در صورتی که کلید اختصاصی ادموب ندارید، می‌توانید از کلید تست ادموب با مقدار `ca-app-pub-3940256099942544~3347511713` استفاده نمایید.
لیست شناسه های جایگاه های تبلیغاتی تست تپسل در ادموب در [این لینک](https://docs.tapsell.ir/mediation/test) قابل استفاده است.

### چطور میتوانم چندین تبلیغ همسان را به صورت همزمان دریافت کنم؟

شما می‌توانید **حداکثر ۵ تبلیغ همسان** را به کمک متود `requestMultipleNativeAds` دریافت و کش کنید.
```java
public static void requestMultipleNativeAds(String zoneId, int maximumCount, Activity activity, RequestResultListener listener)
```
با استفاده از این متد می‌تونید به طور همزمان برای چند تبلیغ (حداکثر ۵ تا) درخواست بدهید و شنونده‌ای که فعال می‌کنید، حداکثر به تعداد تبلیغ درخواست شده، صدا زده خواهد شد. به این ترتیب می‌توانید چند تبلیغ را زودتر از زمان نمایش در حافظه داشته باشید. در نظر داشته باشید که این امکان فقط در تبلیغات همسان قابل استفاده است.

### پیاده سازی مکانیزم کش تبلیغات به صورت بهینه چگونه است؟

برای کش کردن تبلیغات همسان، می‌توانید **حداکثر ۵ تبلیغ** را به کمک متود `requestMultipleNativeAds` دریافت و ذخیره کنید.
```java
public static void requestMultipleNativeAds(String zoneId, int maximumCount, Activity activity, RequestResultListener listener)
```
با استفاده از این متد می‌تونید به طور همزمان برای چند تبلیغ (حداکثر ۵ تا) درخواست بدهید و شنونده‌ای که فعال می‌کنید، حداکثر به تعداد تبلیغ درخواست شده، صدا زده خواهد شد. به این ترتیب می‌توانید چند تبلیغ را زودتر از زمان نمایش در حافظه داشته باشید. شما می توانید از این امکان در لیست های نامتناهی که نیاز به نمایش تبلیغات متعدد دارند، استفاده کنید. در نظر داشته باشید که این امکان فقط در تبلیغات همسان قابل استفاده است.

### در تبلیغ همسان فقط دکمه call to action قابل کلیک است. چطور تمام المان های تبلیغ را قابل کلیک کنم؟
ابتدا اطمینان حاصل کنید که از نسخه `1.0.1-beta03 `یا بالاتر استفاده می‌کنید. در صورت استفاده از تبلیغات همسان ویدیویی باید از نسخه `1.0.2-beta02 `یا بالاتر استفاده کنید. سپس درخواست خود را به در داشبورد تپسل مطرح نمایید.

### GooglePlay Your app targets Android 13 (API 33) or above. You must declare the use of advertising ID in Play Console.

با توجه به سیاست‌های پلی استور از اندروید ۱۳ به بعد، لازم است ابتدا وارد فایل `AndroidManifest.xml` شده و دسترسی `com.google.android.gms.permission.AD_ID` را به آن اضافه کنید. همچنین لازم است که استفاده از `Advertising ID` به اطلاع کاربر نیز برسد. برای اینکار کافیست که در کنسول پلی‌استور مطابق عکس زیر، تیکِ استفاده از `Advertising ID` را بزنید. و دلیل آن را استفاده از تبلیغات تعیین کنید.

<img src="/images/google_play_error_ad_id.png" alt="GooglePlay-Advertising-ID-error" />

### Module was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.8.0, expected version is 1.6.0.

این مشکل زمانی اتفاق می افتد که نسخه کاتلین پروژه از نسخه کاتلین کتابخانه تپسل یا وابستگی های داخلی آن قدیمی تر باشد. برای بررسی دقیقتر این موضوع میتوانید از دستور `./gradlew dependencies` جهت لیست کردن وابستگی های پروژه استفاده کنید. پس از آن می‌توانید آن وابستگی را که باعث آپدیت نسخه کاتلین شده را یافته و از وابستگی های پروژه غیرفعال کنید. برای مثال اگر فرض کنیم که کتابخانه `androidx.fragment` از نسخه جدید کاتلین استفاده می‌کند، برای رفع این ناسازگاری لازم است آن را مطابق زیر از کتابخانه تپسل غیر فعال کنید:

```groovy
def tapsellVersion = "1.0.0"
implementation ("ir.tapsell.mediation:tapsell:$tapsellVersion") {
    exclude group: 'androidx.fragment', module: 'fragment-ktx'
}
```

سپس کد زیر را به بلاک `android` داخل فایل `build.gradle` اضافه کنید:

```groovy
kotlinOptions {
    freeCompilerArgs += ["-Xskip-metadata-version-check"]
}
```

### Error trying to fetch default waterfalls: ir.tapsell.utils.common.NetworkFailureResponseException: Failure response code, 400, was received on network call

این مشکل زمانی رخ میدهد که تنظیمات پیش فرض واترفال برای جایگاه تبلیغاتی شما به درستی انجام نشده باشد. در صورتی که با این خطا مواجه شدید، لازم است این مشکل را در داشبورد حساب خود ثبت نمایید تا بررسی شود.

### Could not GET 'https://android-sdk.is.com/com/ironsource/adapters/admobadapter/4.3.39/admobadapter-4.3.39.pom'. Received status code 403 from server: Request blocked

این مشکل مربوط به عدم توانایی دانلود وابستگی شبکه تبلیغاتی آیرون سورس است. بعضی شبکه های تبلیغاتی نظیر آیرون سورس از ریپازیتوری مخصوص خود استفاده می‌کنند که لازم است به پروژه اضافه شود. برای رفع این مشکل لازم است آدرس `maven { url "https://android-sdk.is.com" }` به لیست ریپازیتوری های پروژه اضافه کنید.
برای مشاهده تمام آدرس موردنیاز می توانید به [لینک سمپل](https://github.com/tapsellorg/TapsellMediation-AndroidSample/blob/master/settings.gradle.kts) یا مستندات تپسل مراجعه نمایید

### Error loading consent form: Publisher misconfiguration: Failed to read publisher's account configuration; no form(s) configured for the input app ID. Verify that you have configured one or more forms for this application and try again. Received app ID:

این خطا مربوط به عدم تنظیم شدن فرم `GDPR` در پنل ادموب و سرویس `User Messaging Platform (UMP)` است. سرویس `UMP` جهت مدیریت فرایندهای مربوط به حریم خصوصی کاربران استفاده می‌شود. برای رفع این مشکل، در صورتیکه به پنل ادموب دسترسی دارید، لازم است از بخش `Privacy Settings` فرم `GDPR` را فعال نمایید. در غیر اینصورت می‌توانید این مورد را در داشبورد حساب تپسل خود مطرح نمایید تا بررسی شود.

### حجم اپ من بعد از اضافه کردن کتابخانه زیاد شده. چکار کنم؟

کتابخانه تپسل از امکان `R8 Full Mode` پشتیبانی می‌کند. این امکان به شما کمک می‌کند تا حجم اپ خود را درحالت ریلیز کاهش دهید. برای فعال سازی آن لازم است قطعه کد زیر را مطابق زیر به فایل `gradle.properties` اضافه نمایید:
```groovy
android.enableR8.fullMode=true
```
پس از فعال سازی `Full Mode R8` در اپ سمپل، حجم کل اپ به همراه کتابخانه تپسل نسخه آخر و بدون شبکه های خارجی در مجموع `2MB` خواهد شد.
با اضافه کردن ادموب، `4MB` و در صورت اضافه کردن تبلیغات `PreRoll` و کتابخانه های `IMA` و `Media3` به `6.5MB` افزایش خواهد یافت.

به همین ترتیب با اضافه کردن شبکه های خارجی دیگر، حجم کلی اپ بیشتر خواهد شد.

لازم به ذکر است که کتابخانه تپسل، کنترل زیادی بر روی حجم شبکه های خارجی ندارد. بنابراین شما لازم است در صورت افزایش حجم اپ خود، آن شبکه های تبلیغاتی را که حجم زیادی به پروژه شما اضافه کرده‌اند، را در صورت عدم نیاز غیرفعال کنید.

### خطای 403

در صورتیکه در فرایند بیلد اپ خود، دانلود پلاگین های Gradle یا وابستگی های دیگر به دلیل عدم داشتن دسترسی مجاز، تحریم یا مشکلات مربوط به IP ایران، با خطای 403 مواجه شود، سینک پروژه به مشکل خورده و با خطای `Gradle Project Sync Failed` مواجه خواهید شد. یکی از روش های رفع این مشکل، استفاده از ابزار [shecan](https://shecan.ir/) می‌باشد.

### خطاهای رایج ادموب

در این [لینک](https://support.google.com/admob/thread/3494603/admob-error-codes-logs?hl=en) خطاهای رایج ادموب توضیح داده شده است

<img src="/images/admob-error-codes.png" alt="Admob-error-codes" />
