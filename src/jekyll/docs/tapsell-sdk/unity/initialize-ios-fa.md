---
layout: classic-docs
title: راه اندازی یلوادوایز در یونیتی (iOS)
lang: fa
permalink: /yelloadwise-core/unity/initialize-ios/index.html
toc: true # table of contents
---

## دریافت SDK یلوادوایز
فایل zip حاوی فریمورک یلوادوایز را از آدرس زیر دانلود کنید.
[دریافت فایل](https://storage.backtory.com/irancell.ir-server/sdk/LatestVersions/irancell.ir-ios-unity.zip)

فایل فشرده شده حاوی دو فریمورک است. فریمورک `Universal` هم بر روی شبیه‌ساز (Simulator) قابل اجرا است و هم بر روی دستگاه واقعی. فریمورک `Release` فقط بر روی دستگاه واقعی قابل استفاده است. پس از تست کردن برنامه با فریمورک `Universal` ، برای ریلیز کردن برنامه خود باید از فریمورک `Release` استفاده کنید.

**دقت کنید که از هر نسخه‌ای که استفاده می‌کنید ، نام فایل فریمورک را به `irancell.irSDKv3.framework` تغییر دهید.**


## افزودن Framework یلوادوایز به پروژه Xcode
فایل فریمورک یلوادوایز را در پوشه پروژه خود کپی کنید و آن را به همه Target های مورد نظر اضافه کنید. در قسمت تنظیمات پروژه بخش `General` فریمورک را در بخش های `Embedded Binaries` و `Linked Frameworks and Libraries` اضافه نمایید.


## غیرفعال کردن App Transport Seurity(ATS) 
با انتشار iOS 9 اپل سیستم ATS را معرفی نمود که طبق آن لازمست اپلیکیشن‌ها از SSL با مشخصات خاصی برای ارتباطات شبکه استفاده کنند. در حال حاضر، لازمست که برای استفاده از تبلیغات یلوادوایز ATS در اپلیکیشن غیرفعال شود.
جهت جلوگیری از مداخله ATS در پخش تبلیغات، قسمت زیر را به `plist` پروژه خود اضافه کنید.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

## اضافه کردن URL Schemes
با انتشار نسخه iOS 9، شرکت اپل ارتباطات بین اپلیکیشن‌ها  (canOpenUrl) را محدود کرده است و هر اپلیکیشن باید مشخص کند چه اپلیکیشن‌های دیگری را باز خواهد نمود. یلوادوایز از تابع canOpenUrl برای تصمیم‌گیری در مورد انجام عمل نهایی در بنرهای تبلیغات استفاده می‌کند. برای فعالسازی deep-linking بین SDK یلوادوایز و سرویس‌های مختلف، بخش زیر را به `plist` پروژه خود اضافه کنید.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>mailto</string>
    <string>itms-apps</string>
    <string>sms</string>
    <string>tel</string>
</array>
```
