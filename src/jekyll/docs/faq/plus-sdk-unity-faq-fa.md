---
layout: classic-docs
title: خطاهای فنی رایج در اندروید
toc: true
permalink: /faq/plus-sdk/unity/
lang: fa
---

در این بخش خطاهایی که ممکن‌ است در مراحل مختلف راه‌اندازی تپسل در اندروید با آن‌ها مواجه شوید به همراه راه‌ حل ذکر شده‌اند.

> **خطای مورد نظر شما در این صفحه مطرح نشده است؟** در [قسمت Issues گیت‌هاب](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues?q=is%3Aissue) جستجو کنید و در صورت نیافتن در آنجا [مورد جدیدی](https://github.com/tapsellorg/TapsellPlusSDK-UnitySample2019/issues/new/choose) مطرح کنید.
{:data-title="نکته" data-color="red"}

### خطای 403

در صورتیکه در فرایند بیلد اپ خود، دانلود پلاگین های Gradle یا وابستگی های دیگر به دلیل عدم داشتن دسترسی مجاز، تحریم یا مشکلات مربوط به IP ایران، با خطای 403 مواجه شود، سینک پروژه به مشکل خورده و با خطای `Gradle Project Sync Failed` مواجه خواهید شد. یکی از روش های رفع این مشکل، استفاده از ابزار [shecan](https://shecan.ir/) یا [403.online](https://403.online/) می باشد.

### گرفتن لاگ اندروید

 برای گرفتن لاگ نیتیو اندروید روش های مختلفی وجود دارد. یکی از روش ها نصب یونیتی پکیج [Android Logcat](https://docs.unity3d.com/Packages/com.unity.mobile.android-logcat@0.1/manual/index.html) در پروژه است.
 
روش دیگر استفاده از ابزار `LogCat` در نرم‌افزار `Android Studio` می‌باشد.

همچنین می‌توانید از `ADB` نیز استفاده نمایید. ابتدا لازم است آن را به متغیر های سیستم خود اضافه کنید. سپس در محیط ترمینال کد زیر را وارد کنید:

`adb logcat -v color`

### خطای BuildMethodException: [GoogleMobileAds] Android Google Mobile Ads app ID is empty. Please enter a valid app ID to run ads properly.
کتابخانه تپسل از کتابخانه Google Mobile Ads به عنوان وابستگی داخلی استفاده می‌کند. در صورتیکه با این خطا مواجه شدید، لازم است وارد مسیر `Assets/Google Mobile Ads` شده و اپ آیدی مورد نیاز اندروید را در آن وارد نمایید. در صورتی که از ادموب استفاده نمیکنید، میتوانید از اپ آیدی تست ادموب (`ca-app-pub-3940256099942544~3347511713`) استفاده کنید. در غیر اینصورت اپ آیدی اختصاصی خود را وارد نمایید.  

### خطای Error: Could not load signature of GoogleMobileAds.Placement.BannerAdGameObject:<AddCallbacks>m__1 due to: Could not resolve type with token 0100002d (from typeref, class/assembly GoogleMobileAds.Api.AdFailedToLoadEventArgs, GoogleMobileAds.Core, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null)
این [خطا](https://github.com/googleads/googleads-mobile-unity/issues/1613) مرتبط با استفاده از پلاگین‌های جدید ادموب از نسخه 6.0.0 به بعد در پروژه است. این خطا از نسخه `Google Mobile Ads v7.4.0` به بعد رفع شده‌است 

در صورتیکه از نسخه های قدیمی‌تر ادموب در پروژه استفاده می‌کنید، برای رفع این مشکل فایل `Assets\GoogleMobileAds\link.xml` را باز کرده و قطعه کد زیر را در داخل تگ `linker` اضافه نمایید:

`<assembly fullname="GoogleMobileAds.Unity" ignoreIfMissing="1" preserve="nothing" />`

در صورتیکه مشکل همچنان وجود دارد، به آدرس `Assets\Plugins\Android\baseProjectTemplate.gradle` رفته و از وجود نسخه `4.2.2` یا بالاتر اطمینان حاصل نمایید. 

در مرحله بعد لازم است نسخه گریدل نرم افزار یونیتی خود را نیز به جدیدترین نسخه موجود (۶.۱.۱ به بالا) به‌روز رسانی کنید. برای اینکار ابتدا آخرین نسخه موجود را از [مستندات گریدل](https://gradle.org/releases/) دانلود کنید. سپس وارد تنظیمات نرم افزار یونیتی خود به مسیر `Settings/External Tools` شوید و در بخش `Gradle Installed with Unity`، آدرس نسخه جدید را به روز رسانی کنید یا محتویات نسخه جدید را در محل آدرس فعلی جایگزین کنید.
همچنین می‌توانید یونیتی ادیتور خود را به نسخه های جدیدتر که با نسخه های جدیدتر گریدل ارائه می‌شوند، به‌رزو‌رسانی نمایید.
برای اطلاعات بیشتر درباره نسخه های سازگار گریدل در ادیتور های مختلف یونیتی، لطفا به لینک [Android Gradle Overview](https://docs.unity3d.com/2023.2/Documentation/Manual/android-gradle-overview.html) مراجعه نمایید

### خطای This project uses AndroidX dependencies, but the 'android.useAndroidX' property is not enabled. Set this property to true in the gradle.properties file and retry. The following AndroidX dependencies are detected

  این خطا زمانی اتفاق می‌افتد که پشتیبانی از AndroidX در پروژه شما وجود نداشته باشد. برای رفع آن لازم است وارد منوی `File> Build Setting > Player Setting` شده و مطابق عکس زیر Gradle properties را فعال کنید.

<img src="https://user-images.githubusercontent.com/21319971/151448756-73085e25-566d-406b-8fea-d2d599ff718a.png"  alt='custom gradle properties'/>

سپس وارد فایل `Assets/Plugins/Android/gradle.properties` شده و دو خط زیر را به آن اضافه کنید
```gradle
android.useAndroidX=true
android.enableJetifier=true
```

### مشکل در دانلود کتابخانه های Mintegral

در صورتیکه از شبکه تبلیغاتی مینتگرال در پروژه خود استفاده می‌کنید اما در دانلود کتابخانه های مینتگرال با خطای 403 یا خطاهای مشابه مواجه می‌شوید یا پکیج های آن به هر دلیلی در پلاگین های پروژه اضافه نشده‌اند، می‌توانید پکیج‌های aar مربوطه را مستقیما از [وبسایت مینتگرال](https://dev.mintegral.com/doc/index.html?file=sdk-m_sdk-android&lang=en) به صورت آفلاین دانلود نموده و در مسیر `Assets\Plugins\Android` قرار دهید.
فرمت پکیج ها باید مشابه زیر باشد:

`com.mbridge.msdk.oversea.same.{VERSION}.aar`

### خطاهای رایج ادموب

در این [لینک](https://support.google.com/admob/thread/3494603/admob-error-codes-logs?hl=en) خطاهای رایج ادموب توضیح داده شده است

<img src="/images/admob-error-codes.png" alt="Admob-error-codes" />

### unable to connect the host 127.1.1

این خطا معمولا به دلیل مشکل در اینترنت کلاینت یا استفاده از `VPN` نامناسب است. همچنین در صورتیکه از شبیه ساز استفاده میکنید، ممکنه است در لحظه درخواست، به اینترنت متصل نباشد. لطفا شبکه اینترنت را بررسی بفرمایید

### فعال/غیرفعال‌‌سازی دیالوگ بازگشت در تبلیغات ویدیویی

در پلتفرم تپسل‌پلاس، فعال‌سازی دیالوگ بازگشت نیازی به پیاده‌سازی از طرف شما ندارد و از قبل در کتابخانه تعبیه شده است. برای فعال‌سازی آن کافیست درخواست خود را به پشتیبانی تپسل ارجاع دهید

### فعال/غیرفعال‌سازی دکمه بازگشت در زمان مشاهده تبلیغات ویدیویی

در پلتفرم تپسل‌پلاس، غیرفعال‌سازی دکمه بازگشت در تبلیغات ویدیویی، نیازی به پیاده‌سازی از طرف شما ندارد و از قبل در کتابخانه تعبیه شده است. برای فعال‌سازی آن کافیست درخواست خود را به پشتیبانی تپسل ارجاع دهید

### خطای Activity is Dead

 هنگام صدا زدن متد initialize , request و یا Show (تا قبل اینکه  Callback صدا زده بشه) اگر از Activity خارج شوید این خطا رخ می دهد.
زمانی که sdk یخواهد جوابی که از سمت سرور اومده رو به کاربر منتقل کند، ابتدا بررسی میکند Activity ای که تابع در آن صدا زده شده Destroy نشده باشد

### خطای App Id is not Valid

این خطا هنگام initialize کردن SDK مقدار appId (یا همان شناسه ای که از پنل دربافت کردید) معتبری نداشته باشه، رخ می دهد. 
توسط دیباگر میتوانید مطمئن بشوید که دقیقا همان مقداری که مدنظر هست به تابع به عنوان ورودی داده می شود

### خطای Tapsell Plus is not Initialized

این خطا زمانی که تابع request و یا show را صدا می زنید ولی sdk هنوز initialize نشده است، رخ میدهد.
 برای درخواست تبلیغ ابتدا توسط Callback های تابع initialize مطمئن شوید که sdk نصب شده(توسط یک متغییر) و قبل درخواست تبلیغ این موضوع رو با آن متغییر بررسی کنید

### خطای Zone Id is not Valid

این خطا زمانی رخ می دهد که request صدا زده میشود و ZoneId مقدار خالی داشته باشد. 
میتوانید با Debugger از مقداری که به عنوان ورودی به تابع می دهید مطمئن شوید

### خطای Previous Request is Still Trying

این خطا زمانی رخ می دهد که یک تبلیغ درخواست داده شده و بالافاصله (قبل اینکه جواب درخواست قبلی دربافت شود) مجددا درخواست تبلیغ بکنید

### خطای All Ad Networks Returned Error

این خطا زمانی رخ می دهد که هیچکدام از شبکه های تبلیغاتی که برای شما فعال است نتوانند تبلیغی رو آماده کنند
اگر زمان نمایش تبلیغ این خطا رو مشاهده کردید، مطمئن شوید که Id ای که به تابع به عنوان ورودی به تابع می دهید دقیقا با مقداری که از response درخواست تبلیغ گرفتید یکسان باشد. 
اگر زمان درخواست تبلیغ این خطا را مشاهده کردید احتمال این که شبکه تبلیغاتی به درستی برای شما فعال نشده باشد است. 
در این صورت مسئله را با تیم پشتیبانی در میان بگذارید

### خطای adContainer should not be null

این خطا زمانی که میخواهید تبلیغ از نوع StandardBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید null نباشد و مقدار درستی داشته باشد

### خطای adHolder should not be null

این خطا زمانی که میخواهید تبلیغ از نوع NativeBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید null نباشد و مقدار درستی داشته باشد

### خطای Banner Type is not Valid

ابن خطا زمانی رخ می دهد که مقدار سایز بنری که در نمایش تبلیغ StandardBanner به عنوان ورودی به تابع requestStandardBannerAd می دهید مقدار درستی نداشته باشد.
با Debugger میتوانید از صحت مقدار مطمئن شوید و حتما ار مقادیر TapsellPlusBannerType استفاده نمایید

### خطای adContainer should not have child

این خطا زمانی که میخواهید تبلیغ از نوع StandardBanner را نمایش دهید رخ می دهد
اطمینان حاصل کنید که ViewGroup ای که میخواهید تبلیغ را در آن نمایش دهید، داخل XML آن View دیگری نداشته باشد

### خطای AdShowListener Should not be null

این خطا زمانی که میخواهید تبلیغ را نمایش دهید رخ می دهد
مطمئن شوید که Callback مناسب را به عنوان ورودی به تابع میدهید

### خطای INVALID_BANNER_SIZE

این خطا برای هر کدام از شبکه های تبلیغاتی اگر رخ داد، به معنای آن است که مقدار درستی برای انداز بنری که میخواهید نمایش دهید به عنوان ورودی به تابع ندادید

### خطای No Waterfall in Cache and Waterfall API has Error

زمانی که که درخواست تبلیغ می دهید Sdk اگر لیست شبکه ها تبلیغاتی رو ذخیره نداشته باشد، سعی میکند که از سرور بگیرد. اگر این مرحله هم با موفقیت انجام نشود (به دلیل قطع شدن اینترنت) این خطا رو  Sdk نمایش می دهد


### خطای Error inflating class com.google.android.gms.ads.nativead.NativeAdView Caused by: java.lang.ClassNotFoundException: Didn't find class "com.google.android.gms.ads.nativead.NativeAdView

این خطا زمانی اتفاق می‌افتد که از ادنتورک AdMob در پرژه خود استفاده کرده باشید، اما وابستگی `play-services-ads` را به پروژه اضافه نکرده باشید. برای رفع آن لازم است تا این وابستگی را به صورت زیر در فایل `Assets\Plugins\Android\mainTemplate.gradle` اضافه کنید.
> ```groovy
> dependencies {
>    def supportedAdmob = "22.6.0"
>    implementation("com.google.android.gms:play-services-ads:$supportedAdmob")
> }
> ```

