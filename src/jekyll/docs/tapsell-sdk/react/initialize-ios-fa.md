---
layout: classic-docs
title: راه اندازی تپسل در ReactNative (iOS)
lang: fa
permalink: /tapsell-sdk/reactnative/initialize-ios/index.html
toc: true # table of contents
---

<div class="alert alert-danger" role="alert" dir="rtl" markdown="0">
  <h4 class="alert-heading">&#9888; هشدار! این SDK دیگر پشتیبانی نمی‌شود &#9888;</h4>
  <p>اگر تاکنون برای تبلیغات درون اپلیکیشن از تپسل استفاده می‌کردید، بهتر است زین‌پس از <a href="https://docs.tapsell.ir/plus-sdk/reactnative/main/">تپسل‌پلاس</a> استفاده نمایید.</p>
  <hr>
  <p class="mb-0">تپسل پلاس، علاوه بر دارا بودن تمام امکانات تپسل، الگوریتم‌های هوشمندانه‌تر، تبلیغات متنوع‌تر و عملکرد بهتری دارد.</p>
  <p class="mb-0">همچنین فرصت کسب درآمد ارزی را از طریق نمایش تبلیغات شبکه‌های تبلیغاتی خارجی (نظیر AdMob) فراهم می‌کند.</p>
  <p class="mb-0">نسخه‌های منتشر شده تپسل در صورتی که پیش‌تر پیاده‌سازی شده باشند، کماکان به کار خود ادامه می‌دهند و تبلیغ دریافت می‌کنند امّا آپدیت نشده و باگ‌ها پشتیبانی نمی‌شوند.</p>
</div>

## دریافت SDK تپسل
فایل zip حاوی فریمورک تپسل را از آدرس زیر دانلود کنید.
[دریافت فایل](https://storage.backtory.com/tapsell-server/sdk/LatestVersions/iOsTapsellSdk.zip)

فایل فشرده شده حاوی دو فریمورک است. فریمورک `Universal` هم بر روی شبیه‌ساز (Simulator) قابل اجرا است و هم بر روی دستگاه واقعی. فریمورک `Release` فقط بر روی دستگاه واقعی قابل استفاده است. پس از تست کردن برنامه با فریمورک `Universal` ، برای ریلیز کردن برنامه خود باید از فریمورک `Release` استفاده کنید.

**دقت کنید که از هر نسخه‌ای که استفاده می‌کنید ، نام فایل فریمورک را به `TapsellSDKv3.framework` تغییر دهید.**


## افزودن Framework تپسل به پروژه Xcode
فایل فریمورک تپسل را در پوشه پروژه خود کپی کنید و آن را به همه Target های مورد نظر اضافه کنید. در قسمت تنظیمات پروژه بخش `General` فریمورک را در بخش های `Embedded Binaries` و `Linked Frameworks and Libraries` اضافه نمایید.


## غیرفعال کردن App Transport Seurity(ATS) 
با انتشار iOS 9 اپل سیستم ATS را معرفی نمود که طبق آن لازمست اپلیکیشن‌ها از SSL با مشخصات خاصی برای ارتباطات شبکه استفاده کنند. در حال حاضر، لازمست که برای استفاده از تبلیغات تپسل ATS در اپلیکیشن غیرفعال شود.
جهت جلوگیری از مداخله ATS در پخش تبلیغات، قسمت زیر را به `plist` پروژه خود اضافه کنید.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

## اضافه کردن URL Schemes
با انتشار نسخه iOS 9، شرکت اپل ارتباطات بین اپلیکیشن‌ها  (canOpenUrl) را محدود کرده است و هر اپلیکیشن باید مشخص کند چه اپلیکیشن‌های دیگری را باز خواهد نمود. تپسل از تابع canOpenUrl برای تصمیم‌گیری در مورد انجام عمل نهایی در بنرهای تبلیغات استفاده می‌کند. برای فعالسازی deep-linking بین SDK تپسل و سرویس‌های مختلف، بخش زیر را به `plist` پروژه خود اضافه کنید.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>mailto</string>
    <string>itms-apps</string>
    <string>sms</string>
    <string>tel</string>
</array>
```