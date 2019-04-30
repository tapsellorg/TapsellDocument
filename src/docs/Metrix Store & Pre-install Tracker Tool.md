
# Metrix Store & Pre-install Tracker Tool

<div dir="rtl">

متریکس از ابزاری به نام `metrix-dtt` که با زبان روبی نوشته شده است برای قرار دادن ترکر های شما داخل فایل apk استفاده میکند. این اطلاعات سپس به وسیله sdk متریکس خوانده می‌شود و شما ازین طریق میتوانید اطلاعات نصب هر ترکر را داشته باشید.

برای استفاده از این ابزار شما نیاز به سه پیش نیاز زیر دارید.
1. `ruby` – برای اجرای `metrix-dtt`
2. `apktool` – برای باز کردن فایل apk
3. `jarsigner` – برای ساین(امضا) کردن فایل apk

روبی به صورت پیش فرض در سیستم عامل  مک فعال میباشد برای دیگر سیستم عامل ها میتوانید از طریق لینک زیر نصب و فعال نمایید.
<br>
 https://www.ruby-lang.org/en/documentation/installation/

نحوه نصب `apktool` در لینک زیر توضیح داده شده است:
<br>
 https://ibotpeaches.github.io/Apktool/install/

اگر پکیج منیجر `brew` روی سیستم عامل مک شما نصب باشد به راحتی میتوانید از طریق دستور زیر `apktool` را نصب نمایید:
<div dir="ltr">

    brew install apktool
</div>

`jarsigner` یکی از ابزار های jdk می باشد که باید روی سیستم شما نصب باشد برای نمونه یکی از نسخه های jdk که روی سیستم عامل مک نصب میباشد از مکان زیر قرار دارد:
<div dir="ltr">

    /Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/
</div>

در محل نصب jdk پوشه ای به اسم `bin` وجود دارد که در نمونه بالا در زیر قرار دارد:

<div dir="ltr">

    /Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/Contents/Home/bin/
</div>

در این پوشه شما میتوانید `jarsigner` را پیدا کنید که برای `metrix-dtt`  استفاده میشود

`metrix-dtt` ازین ابزار ها استفاده میکند، باید محل نصب را در `PATH` سیستم خود اضافه کنید.

پس برای اضافه کردن `apktool` (۱) توجه داشته باشید که اگر `apktool` را با `brew` نصب کرده اید نیازی به اضافه کردن آن به `PATH` نیست و برای اضافه کردن `bin` (۲) برای نمونه دو آدرس زیر را اضافه میکنید:

<div dir="ltr">

1. /User/dummy/some/random/folder/
2. /Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/Contents/Home/bin/
</div>

شما برای استفاده از `metrix-dtt` نیاز به  `keystore` دارید اگر apk شما `sign`   شده   نیست اندروید استودیو یک  `keystore` پیش فرض در محل زیر دارد  :

<div dir="ltr">

    $HOME/.android/debug.keystore
</div>

علت نیاز `metrix-dtt` به این فایل برای استخراج apk است و همچنین برای بستن فایل apk بعد از قرار دادن ترکر ها است.

حال میتوانید از پنل متریکس ترکر خود را تعریف کنید.

حالا باید یک فایل `metrix-config.yaml` درست کنید که اطلاعات ترکر و `keystore` و `apk`و استور شما در آن قرار داده شود

در زیر میتوانید یک فایل `metrix-config.yaml` را مشاهده کنید که ترکر هایی برای ساخت apk جداگانه برای استور های **store_1**، **store_2** و **store_3**:

<div dir="ltr">

    apk_path: /Users/uerceg/Desktop/apk/example-release.apk
    keystore_path: /Users/uerceg/Desktop/apk/mykeystore.jks
    keystore_pass: mykeystorepass
    keystore_alias: mykeystorealias
    stores:
        store_1:
            default_tracker: abc123
        store_2:
            default_tracker: abc456
        store_3:
            default_tracker: abc789
</div>


1. `apk_path` = آدرس کامل فایل apk
2. `keystore_path` = آدرس کامل فایل `keystore`
3. `keystore_pass` = پسورد فایل `keystore`
4. `keystore_alias` = نامک فایل `keystore`
5. `default_tracker` = ترکر توکن های دریافتی از پنل متریکس

چهار پارامتر اول هم میتوانند به صورت کلی تعریف شوند و هم به صورت اختصاصی برای هر استور مانند زیر:
<div dir="ltr">

    apk_path: /Users/uerceg/Desktop/apk/example-release.apk
    keystore_path: /Users/uerceg/Desktop/apk/mykeystore.jks
    keystore_pass: mykeystorepass
    keystore_alias: mykeystorealias
    stores:
        store_1:
            default_tracker: abc123
            keystore_path: /Users/uerceg/Desktop/apk/differentkeystore.jks
            keystore_pass: differentkeystorepass
            keystore_alias: differentkeystorealias
        store_2:
            default_tracker: abc456
        store_3:
            default_tracker: abc789
</div>

بعد از کانفیگ کردن فایل `metrix-config.yaml` با دستور زیر میتوانید آن را اجرا کنید.:

<div dir="ltr">

    ruby metrix-dtt metrix-config.yaml
</div>

مراحل اجرای `metrix-dtt`  :

1. فایل apk شما در محلی که قرار دارد استخراج میشود در یک فولدر با نام apk شما
2. در پوشه `assets` به دنبال فایل `metrix_config.properties` میگردیم که اطلاعات ترکر توکن در آن قرار دارد .
3. اگر پوشه assets وجود نداشت یا فایل `metrix_config.properties` وجود نداشت ساخته میشوند و اطلاعات `default_tracker` در آن نوشته میشود .
4. اگر فایل `metrix_conf.properties` وجود داشته باشد اطلاعات `default_tracker` در آن ریپلیس میشود .
5. فولدر به apk بسته میشود.
6. فایل apk با اطلاعات   `keystore_path`، `keystore_pass` و `keystore_alias` ساین میشود.
7. فایل های apk ساخته شده با نام اصلی apk شما و یک پسوند `_[store_name]` میباشد. در مثال بالا نام apk ساخته شده `example-release_store_1.apk`، `example- release_store_2.apk` و `example-release_store_3.apk` میباشد
</div>