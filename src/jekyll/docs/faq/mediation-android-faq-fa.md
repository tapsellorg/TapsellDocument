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

### خطای 403

در صورتیکه در فرایند بیلد اپ خود، دانلود پلاگین های Gradle یا وابستگی های دیگر به دلیل عدم داشتن دسترسی مجاز، تحریم یا مشکلات مربوط به IP ایران، با خطای 403 مواجه شود، سینک پروژه به مشکل خورده و با خطای `Gradle Project Sync Failed` مواجه خواهید شد. یکی از روش های رفع این مشکل، استفاده از ابزار [shecan](https://shecan.ir/) می‌باشد.

### خطاهای رایج ادموب

در این [لینک](https://support.google.com/admob/thread/3494603/admob-error-codes-logs?hl=en) خطاهای رایج ادموب توضیح داده شده است
